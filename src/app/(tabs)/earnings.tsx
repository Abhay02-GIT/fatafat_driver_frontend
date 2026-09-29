import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const TODAY_INDEX = 2;

export default function EarningsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <View style={styles.avatar} />
          <ThemedText type="subtitle" style={{ color: '#fff' }}>Rider</ThemedText>
          <TouchableOpacity onPress={() => router.push('/notifications')}>
            <ThemedText style={{ fontSize: 20 }}>🔔</ThemedText>
          </TouchableOpacity>
        </View>

        <View style={styles.weekCard}>
          <ThemedText type="small" themeColor="textSecondary">THIS WEEK</ThemedText>
          <ThemedText type="title" style={{ color: '#fff' }}>₹12,450</ThemedText>
          <View style={styles.progressTrack}><View style={[styles.progressFill, { width: '68%' }]} /></View>
        </View>

        <View style={styles.sectionHeader}>
          <ThemedText type="smallBold" style={{ color: '#fff' }}>Daily Earnings</ThemedText>
          <TouchableOpacity onPress={() => router.push('/earnings-activity')}>
            <ThemedText type="small" style={{ color: ACCENT }}>Details ›</ThemedText>
          </TouchableOpacity>
        </View>
        <View style={styles.chartCard}>
          <View style={styles.chartBar} />
          <View style={styles.chartDaysRow}>
            {DAYS.map((d, i) => (
              <ThemedText key={d} type="small" style={{ color: i === TODAY_INDEX ? '#fff' : '#60646C', fontWeight: i === TODAY_INDEX ? '700' : '400' }}>{d}</ThemedText>
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.payoutRow} onPress={() => router.push('/payout-history')}>
          <View>
            <ThemedText type="small" themeColor="textSecondary">NEXT PAYOUT</ThemedText>
            <ThemedText type="smallBold" style={{ color: '#fff' }}>Tomorrow, 9:00 AM</ThemedText>
          </View>
          <ThemedText type="small" themeColor="textSecondary">🏦 •••• 4829</ThemedText>
        </TouchableOpacity>

        <View style={styles.row2}>
          <View style={styles.miniCard}>
            <ThemedText style={{ fontSize: 18 }}>⭐</ThemedText>
            <ThemedText type="smallBold" style={{ color: '#fff' }}>Incentives</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">3 trips to ₹500 bonus</ThemedText>
          </View>
          <View style={styles.miniCard}>
            <ThemedText style={{ fontSize: 18 }}>🛡️</ThemedText>
            <ThemedText type="smallBold" style={{ color: '#fff' }}>Subscription</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">Active till Sunday</ThemedText>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C' },
  content: { padding: Spacing.four, gap: Spacing.three, paddingBottom: Spacing.six },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  avatar: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#2E3135' },
  weekCard: { backgroundColor: '#141517', borderRadius: 14, padding: Spacing.three, gap: Spacing.two },
  progressTrack: { height: 6, borderRadius: 3, backgroundColor: '#2E3135', overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: ACCENT },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', marginTop: Spacing.two },
  chartCard: { backgroundColor: '#141517', borderRadius: 14, padding: Spacing.three, gap: Spacing.three },
  chartBar: { height: 100, borderRadius: 8, backgroundColor: '#1c1d20' },
  chartDaysRow: { flexDirection: 'row', justifyContent: 'space-between' },
  payoutRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#141517', borderRadius: 12, padding: Spacing.three },
  row2: { flexDirection: 'row', gap: Spacing.three },
  miniCard: { flex: 1, backgroundColor: '#141517', borderRadius: 12, padding: Spacing.three, gap: 4 },
});