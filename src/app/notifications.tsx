import { useState } from 'react';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';
const FILTERS = ['All', 'Trips', 'Documents', 'Earnings'];

const NOTIFICATIONS = [
  { icon: '⚠️', title: 'Document Expiring Soon', time: '2h ago', body: 'Your vehicle insurance policy is expiring in 3 days.', action: 'Update Now', group: 'TODAY' },
  { icon: '💳', title: 'Payout Processed', time: '5h ago', body: 'Your weekly earnings of ₹450.00 have been successfully deposited.', group: 'TODAY' },
  { icon: '🎟️', title: 'New Incentive Available', time: 'Yesterday', body: 'Complete 10 trips this weekend during peak hours to earn an extra bonus.', action: 'View Details', group: 'YESTERDAY' },
  { icon: '🧭', title: 'Trip Cancelled', time: 'Yesterday', body: 'The rider cancelled the trip to Downtown. A cancellation fee applies.', group: 'YESTERDAY' },
];

export default function NotificationsScreen() {
  const router = useRouter();
  const [filter, setFilter] = useState('All');
  const groups = [...new Set(NOTIFICATIONS.map((n) => n.group))];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ThemedText style={{ color: '#fff', fontSize: 20 }}>←</ThemedText>
        </TouchableOpacity>
        <ThemedText type="subtitle" style={{ color: '#fff' }}>Notifications</ThemedText>
        <ThemedText style={{ fontSize: 18 }}>🔔</ThemedText>
      </View>

      <View style={styles.filterRow}>
        {FILTERS.map((f) => (
          <TouchableOpacity
            key={f}
            style={[styles.filterPill, filter === f && styles.filterPillActive]}
            onPress={() => setFilter(f)}>
            <ThemedText type="small" style={{ color: filter === f ? '#0B0B0C' : '#fff' }}>{f}</ThemedText>
          </TouchableOpacity>
        ))}
      </View>

      {groups.map((g) => (
        <View key={g} style={{ gap: Spacing.two }}>
          <ThemedText type="smallBold" themeColor="textSecondary">{g}</ThemedText>
          {NOTIFICATIONS.filter((n) => n.group === g).map((n) => (
            <View key={n.title} style={styles.notifCard}>
              <View style={styles.notifRow}>
                <ThemedText style={{ fontSize: 18 }}>{n.icon}</ThemedText>
                <View style={{ flex: 1, gap: 2 }}>
                  <View style={styles.notifTitleRow}>
                    <ThemedText type="smallBold" style={{ color: '#fff' }}>{n.title}</ThemedText>
                    <ThemedText type="small" themeColor="textSecondary">{n.time}</ThemedText>
                  </View>
                  <ThemedText type="small" themeColor="textSecondary">{n.body}</ThemedText>
                  {n.action && (
                    <ThemedText type="small" style={{ color: ACCENT }}>{n.action}</ThemedText>
                  )}
                </View>
              </View>
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
  notifCard: { backgroundColor: '#141517', borderRadius: 10, padding: Spacing.three, borderLeftWidth: 2, borderLeftColor: ACCENT },
  notifRow: { flexDirection: 'row', gap: Spacing.two },
  notifTitleRow: { flexDirection: 'row', justifyContent: 'space-between' },
});