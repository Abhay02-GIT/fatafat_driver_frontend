import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';
const FILTERS = ['All Activity', 'Trips', 'Incentives', 'Adjustments'];

const ENTRIES = [
  { group: 'Today', id: 'a1', icon: '🚗', title: 'Trip • ID 8492A', sub: '2:15 PM • Cab', amount: 24.5 },
  { group: 'Today', id: 'a2', icon: '🏍️', title: 'Trip • ID 8491B', sub: '11:30 AM • Bike', amount: 12 },
  { group: 'Yesterday, Oct 21', id: 'a3', icon: '⭐', title: 'Peak Hour Incentive', sub: '5:00 PM', amount: 15, bonus: true },
  { group: 'Yesterday, Oct 21', id: 'a4', icon: '🚗', title: 'Trip • ID 8480X', sub: '4:45 PM • Cab', amount: 45.5 },
];

export default function EarningsActivityScreen() {
  const router = useRouter();
  const [filter, setFilter] = useState('All Activity');
  const groups = [...new Set(ENTRIES.map((e) => e.group))];
  const totalToday = ENTRIES.filter((e) => e.group === 'Today').reduce((s, e) => s + e.amount, 0);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><ThemedText style={{ color: '#fff', fontSize: 20 }}>←</ThemedText></TouchableOpacity>
        <ThemedText type="subtitle" style={{ color: '#fff' }}>Rider</ThemedText>
        <ThemedText style={{ fontSize: 18 }}>🔔</ThemedText>
      </View>

      <ThemedText type="small" themeColor="textSecondary">Oct 16 - Oct 22</ThemedText>
      <ThemedText type="title" style={{ color: '#fff' }}>₹482.50</ThemedText>
      <ThemedText type="small" themeColor="textSecondary">Total earnings this week</ThemedText>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.filterRow}>
          {FILTERS.map((f) => (
            <TouchableOpacity key={f} style={[styles.filterPill, filter === f && styles.filterPillActive]} onPress={() => setFilter(f)}>
              <ThemedText type="small" style={{ color: filter === f ? '#0B0B0C' : '#fff' }}>{filter === f ? '✓ ' : ''}{f}</ThemedText>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {groups.map((g) => (
        <View key={g} style={{ gap: Spacing.two }}>
          <View style={styles.groupHeader}>
            <ThemedText type="smallBold" style={{ color: '#fff' }}>{g}</ThemedText>
            {g === 'Today' && <ThemedText type="smallBold" style={{ color: '#fff' }}>₹{totalToday.toFixed(2)}</ThemedText>}
          </View>
          {ENTRIES.filter((e) => e.group === g).map((e) => (
            <View key={e.id} style={styles.entryRow}>
              <View style={styles.entryLeft}>
                <ThemedText style={{ fontSize: 18 }}>{e.icon}</ThemedText>
                <View><ThemedText type="smallBold" style={{ color: '#fff' }}>{e.title}</ThemedText><ThemedText type="small" themeColor="textSecondary">{e.sub}</ThemedText></View>
              </View>
              <ThemedText type="smallBold" style={{ color: e.bonus ? ACCENT : '#fff' }}>{e.bonus ? '+' : ''}₹{e.amount.toFixed(2)}</ThemedText>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C' },
  content: { padding: Spacing.four, gap: Spacing.three, paddingBottom: Spacing.six },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  filterRow: { flexDirection: 'row', gap: Spacing.two },
  filterPill: { paddingHorizontal: Spacing.three, paddingVertical: Spacing.one, borderRadius: 16, backgroundColor: '#2E3135' },
  filterPillActive: { backgroundColor: ACCENT },
  groupHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  entryRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#141517', borderRadius: 12, padding: Spacing.three },
  entryLeft: { flexDirection: 'row', gap: Spacing.two, alignItems: 'center' },
});