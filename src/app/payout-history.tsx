import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const STATUS_COLORS = { Processing: '#F59E0B', Completed: '#22C55E', Failed: '#ef4444' } as const;

const TRANSFERS = [
  { id: 'p1', range: 'Oct 16 - Oct 22', label: 'Processing...', bank: 'Chase Bank ****4598', amount: 845.5, status: 'Processing' as const },
  { id: 'p2', range: 'Oct 09 - Oct 15', label: 'Oct 17, 2023', bank: 'Chase Bank ****4598', amount: 720, status: 'Completed' as const },
  { id: 'p3', range: 'Oct 02 - Oct 08', label: 'Oct 10, 2023', bank: 'Chase Bank ****4598', amount: 884.5, status: 'Completed' as const },
  { id: 'p4', range: 'Sep 25 - Oct 01', label: 'Transfer Failed', bank: 'Wells Fargo ****1122', amount: 650, status: 'Failed' as const },
];

export default function PayoutHistoryScreen() {
  const router = useRouter();
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><ThemedText style={{ color: '#fff', fontSize: 20 }}>←</ThemedText></TouchableOpacity>
        <ThemedText type="subtitle" style={{ color: '#fff' }}>Payout History</ThemedText>
        <ThemedText style={{ fontSize: 18 }}>🔔</ThemedText>
      </View>

      <View style={styles.totalCard}>
        <ThemedText type="small" themeColor="textSecondary">TOTAL TRANSFERRED THIS MONTH</ThemedText>
        <ThemedText type="title" style={{ color: '#fff' }}>₹2,450.00</ThemedText>
        <ThemedText type="small" style={{ color: '#22C55E' }}>↗ +12% vs last month</ThemedText>
      </View>

      <View style={styles.sectionHeader}>
        <ThemedText type="smallBold" style={{ color: '#fff' }}>Recent Transfers</ThemedText>
        <ThemedText type="small" themeColor="textSecondary">⇅ Filter</ThemedText>
      </View>

      {TRANSFERS.map((t) => (
        <View key={t.id} style={[styles.card, { borderLeftColor: STATUS_COLORS[t.status] }]}>
          <ThemedText type="small" themeColor="textSecondary">{t.range}</ThemedText>
          <ThemedText type="smallBold" style={{ color: '#fff' }}>{t.label}</ThemedText>
          <View style={styles.cardBottom}>
            <ThemedText type="small" themeColor="textSecondary">🏦 {t.bank}</ThemedText>
            <View style={[styles.amountPill, { backgroundColor: STATUS_COLORS[t.status] }]}>
              <ThemedText type="small" style={{ color: '#0B0B0C', fontWeight: '700' }}>₹{t.amount.toFixed(2)}</ThemedText>
            </View>
          </View>
        </View>
      ))}

      <TouchableOpacity style={styles.loadMoreButton}><ThemedText style={{ color: '#fff' }}>Load More History ⌄</ThemedText></TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C' },
  content: { padding: Spacing.four, gap: Spacing.three, paddingBottom: Spacing.six },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  totalCard: { backgroundColor: '#141517', borderRadius: 14, padding: Spacing.three, gap: 4 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', marginTop: Spacing.two },
  card: { backgroundColor: '#141517', borderRadius: 10, padding: Spacing.three, gap: 4, borderLeftWidth: 3 },
  cardBottom: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 4 },
  amountPill: { borderRadius: 8, paddingHorizontal: 10, paddingVertical: 4 },
  loadMoreButton: { alignItems: 'center', paddingVertical: Spacing.three },
});