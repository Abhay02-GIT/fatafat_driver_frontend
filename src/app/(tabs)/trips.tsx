import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';

// TODO: replace with real trip history from backend
const TRIPS = [
  { group: 'Yesterday', id: 't1', icon: '🚗', type: 'Premium Cab', time: '2:45 PM', distance: '4.2 km', fare: 345.5, status: 'Completed' as const, pickup: 'Connaught Place, Block A', drop: 'Indira Gandhi International Airport T3' },
  { group: 'Yesterday', id: 't2', icon: '🏍️', type: 'Auto', time: '9:15 AM', distance: '1.8 km', fare: 85, status: 'Cancelled' as const, pickup: 'South Ex Part 2, Market', drop: 'Lajpat Nagar Metro Station' },
  { group: 'Monday, Oct 23', id: 't3', icon: '🚗', type: 'Economy Cab', time: '6:30 PM', distance: '12.5 km', fare: 520, status: 'Completed' as const, pickup: 'Cyber City, Gurugram', drop: 'Hauz Khas Village' },
];

export default function TripsScreen() {
  const router = useRouter();
  const groups = [...new Set(TRIPS.map((t) => t.group))];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <ThemedText type="subtitle" style={{ color: '#fff' }}>Trip History</ThemedText>

        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <ThemedText themeColor="textSecondary">🔍 Search locations...</ThemedText>
          </View>
          <TouchableOpacity style={styles.calendarButton}>
            <ThemedText>📅</ThemedText>
          </TouchableOpacity>
        </View>

        {groups.map((g) => (
          <View key={g} style={{ gap: Spacing.two }}>
            <ThemedText type="smallBold" themeColor="textSecondary">{g}</ThemedText>
            {TRIPS.filter((t) => t.group === g).map((t) => (
              <TouchableOpacity key={t.id} style={styles.card} onPress={() => router.push('/trip-details')}>
                <View style={styles.cardTop}>
                  <View style={styles.cardTopLeft}>
                    <ThemedText style={{ fontSize: 20 }}>{t.icon}</ThemedText>
                    <View>
                      <ThemedText type="smallBold" style={{ color: '#fff' }}>{t.type}</ThemedText>
                      <ThemedText type="small" themeColor="textSecondary">{t.time} • {t.distance}</ThemedText>
                    </View>
                  </View>
                  <View style={{ alignItems: 'flex-end' }}>
                    <ThemedText
                      type="smallBold"
                      style={{ color: t.status === 'Cancelled' ? '#ef4444' : '#fff', textDecorationLine: t.status === 'Cancelled' ? 'line-through' : 'none' }}>
                      ₹{t.fare.toFixed(2)}
                    </ThemedText>
                    <ThemedText type="small" style={{ color: t.status === 'Cancelled' ? '#ef4444' : ACCENT }}>
                      {t.status === 'Cancelled' ? '⊗ Cancelled' : '✓ Completed'}
                    </ThemedText>
                  </View>
                </View>
                <View style={styles.routeRow}><View style={styles.dotWhite} /><ThemedText type="small" themeColor="textSecondary">{t.pickup}</ThemedText></View>
                <View style={styles.routeRow}><View style={styles.dotOrange} /><ThemedText type="small" themeColor="textSecondary">{t.drop}</ThemedText></View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C' },
  content: { padding: Spacing.four, gap: Spacing.three, paddingBottom: Spacing.six },
  searchRow: { flexDirection: 'row', gap: Spacing.two },
  searchBox: { flex: 1, backgroundColor: '#141517', borderRadius: 10, paddingHorizontal: Spacing.three, paddingVertical: Spacing.two },
  calendarButton: { width: 44, height: 44, borderRadius: 10, backgroundColor: '#141517', alignItems: 'center', justifyContent: 'center' },
  card: { backgroundColor: '#141517', borderRadius: 12, padding: Spacing.three, gap: Spacing.two },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between' },
  cardTopLeft: { flexDirection: 'row', gap: Spacing.two },
  routeRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.two },
  dotWhite: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#ffffff' },
  dotOrange: { width: 8, height: 8, borderRadius: 2, backgroundColor: '#F59E0B' },
});