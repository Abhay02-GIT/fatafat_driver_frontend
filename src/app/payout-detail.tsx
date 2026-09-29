import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';

// TODO: replace with real payout passed via route params
const PAYOUT = {
  range: 'Oct 16 - Oct 22, 2023', amount: 842.5, bank: 'Chase Checking •••• 4892', date: 'Oct 24, 2:15 AM',
  grossFares: 985, tripsCompleted: 42, tips: 112.5, serviceFee: 197, surgeBonus: 42,
  status: 'Valid', initiated: 'Oct 23, 2023 - 4:00 AM', utr: 'CHX-99823-XYZ-11',
};

export default function PayoutDetailScreen() {
  const router = useRouter();
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><ThemedText style={{ color: '#fff', fontSize: 20 }}>←</ThemedText></TouchableOpacity>
        <ThemedText type="subtitle" style={{ color: '#fff' }}>Weekly Payout</ThemedText>
        <ThemedText style={{ color: '#fff' }}>?</ThemedText>
      </View>

      <View style={styles.summaryCard}>
        <ThemedText type="small" themeColor="textSecondary">{PAYOUT.range}</ThemedText>
        <ThemedText type="title" style={{ color: ACCENT }}>₹{PAYOUT.amount.toFixed(2)}</ThemedText>
        <View style={styles.bankPill}><ThemedText type="small" themeColor="textSecondary">🏦 {PAYOUT.bank}</ThemedText><ThemedText type="small" themeColor="textSecondary">{PAYOUT.date}</ThemedText></View>
      </View>

      <View style={styles.row}><ThemedText style={{ fontSize: 16 }}>🚗</ThemedText><ThemedText style={{ color: '#fff', flex: 1 }}>Gross Fares</ThemedText><ThemedText type="smallBold" style={{ color: '#fff' }}>₹{PAYOUT.grossFares.toFixed(2)}</ThemedText></View>
      <ThemedText type="small" themeColor="textSecondary" style={{ marginLeft: 28 }}>{PAYOUT.tripsCompleted} Trips completed</ThemedText>

      <View style={styles.row}><ThemedText style={{ fontSize: 16, color: ACCENT }}>♥</ThemedText><ThemedText style={{ color: '#fff', flex: 1 }}>Tips</ThemedText><ThemedText type="smallBold" style={{ color: ACCENT }}>+₹{PAYOUT.tips.toFixed(2)}</ThemedText></View>
      <ThemedText type="small" themeColor="textSecondary" style={{ marginLeft: 28 }}>100% goes directly to you</ThemedText>

      <ThemedText type="smallBold" style={{ color: '#fff', marginTop: Spacing.two }}>Deductions & Adjustments</ThemedText>
      <View style={styles.deductRow}>
        <View style={styles.deductDot} />
        <View style={{ flex: 1 }}><ThemedText style={{ color: '#fff' }}>Platform Service Fee</ThemedText><ThemedText type="small" themeColor="textSecondary">20% commission on gross fares</ThemedText></View>
        <ThemedText style={{ color: '#ef4444' }}>-₹{PAYOUT.serviceFee.toFixed(2)}</ThemedText>
      </View>
      <View style={styles.deductRow}>
        <View style={[styles.deductDot, { backgroundColor: '#F59E0B' }]} />
        <View style={{ flex: 1 }}><ThemedText style={{ color: '#fff' }}>Surge / Fare-Match</ThemedText><ThemedText type="small" themeColor="textSecondary">High demand area bonus</ThemedText></View>
        <ThemedText style={{ color: '#F59E0B' }}>+₹{PAYOUT.surgeBonus.toFixed(2)}</ThemedText>
      </View>

      <ThemedText type="smallBold" style={{ color: '#fff', marginTop: Spacing.two }}>Transaction Details</ThemedText>
      <View style={styles.txRow}><ThemedText type="small" themeColor="textSecondary">Status</ThemedText><View style={styles.statusPill}><ThemedText type="small" style={{ color: '#0B0B0C', fontWeight: '700' }}>{PAYOUT.status}</ThemedText></View></View>
      <View style={styles.txRow}><ThemedText type="small" themeColor="textSecondary">Initiated</ThemedText><ThemedText type="small" style={{ color: '#fff' }}>{PAYOUT.initiated}</ThemedText></View>
      <View style={styles.txRow}><ThemedText type="small" themeColor="textSecondary">UTR / Ref Number</ThemedText><ThemedText type="small" style={{ color: '#fff' }}>{PAYOUT.utr} 📋</ThemedText></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C' },
  content: { padding: Spacing.four, gap: Spacing.two, paddingBottom: Spacing.six },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  summaryCard: { backgroundColor: '#0f2a17', borderRadius: 14, padding: Spacing.three, gap: Spacing.two, marginBottom: Spacing.two },
  bankPill: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#0B0B0C', borderRadius: 10, padding: Spacing.two },
  row: { flexDirection: 'row', gap: Spacing.two, alignItems: 'center', backgroundColor: '#141517', borderRadius: 10, padding: Spacing.three, marginTop: Spacing.two },
  deductRow: { flexDirection: 'row', gap: Spacing.two, alignItems: 'center', backgroundColor: '#141517', borderRadius: 10, padding: Spacing.three },
  deductDot: { width: 24, height: 24, borderRadius: 12, backgroundColor: '#ef4444' },
  txRow: { flexDirection: 'row', justifyContent: 'space-between' },
  statusPill: { backgroundColor: ACCENT, borderRadius: 8, paddingHorizontal: Spacing.two, paddingVertical: 2 },
});