import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';

// TODO: shown instead of the generic incoming-request screen when driver's vehicle type is 'carpool'
export default function CarpoolTripRequestScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.header}>
        <ThemedText style={{ fontSize: 18 }}>🚗</ThemedText>
        <ThemedText type="subtitle" style={{ color: '#fff' }}>Go Online</ThemedText>
        <ThemedText style={{ color: ACCENT }}>Online</ThemedText>
      </SafeAreaView>

      <View style={styles.map} />

      <SafeAreaView edges={['bottom']} style={styles.sheet}>
        <View style={styles.sheetHandle} />
        <View style={styles.top}>
          <View style={styles.iconStack}><ThemedText style={{ fontSize: 18 }}>👥</ThemedText></View>
          <View style={{ flex: 1 }}><ThemedText type="subtitle" style={{ color: '#fff' }}>Carpool Request</ThemedText><ThemedText type="small" themeColor="textSecondary">+2 Extra Stops</ThemedText></View>
          <View style={styles.countdown}><ThemedText type="subtitle" style={{ color: '#F59E0B' }}>9</ThemedText></View>
        </View>

        <View style={styles.costCard}>
          <ThemedText type="small" themeColor="textSecondary">ESTIMATED COST-SHARE</ThemedText>
          <View style={styles.priceRow}><ThemedText type="title" style={{ color: '#fff' }}>$18.50</ThemedText><ThemedText type="small" themeColor="textSecondary" style={{ textDecorationLine: 'line-through' }}>$24.00</ThemedText></View>
          <ThemedText type="small" style={{ color: ACCENT }}>↗ High demand area</ThemedText>
        </View>

        <View style={styles.row2}>
          <View style={styles.miniCard}><ThemedText type="small" themeColor="textSecondary">Extra Time</ThemedText><ThemedText type="smallBold" style={{ color: '#fff' }}>+12 min</ThemedText></View>
          <View style={styles.miniCard}><ThemedText type="small" themeColor="textSecondary">Total Distance</ThemedText><ThemedText type="smallBold" style={{ color: '#fff' }}>8.4 mi</ThemedText></View>
        </View>

        <ThemedText type="small" themeColor="textSecondary">Passengers (3)</ThemedText>

        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.declineButton} onPress={() => router.replace('/(trip)/request-expired')}><ThemedText style={{ color: '#fff', fontWeight: '700' }}>Decline</ThemedText></TouchableOpacity>
          <TouchableOpacity style={styles.acceptButton} onPress={() => router.replace('/(trip)/multi-stop-manifest')}><ThemedText style={{ color: '#0B0B0C', fontWeight: '700' }}>Accept ✓</ThemedText></TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: Spacing.four, paddingBottom: Spacing.two },
  map: { flex: 1 },
  sheet: { backgroundColor: '#141517', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: Spacing.four, gap: Spacing.three },
  sheetHandle: { width: 40, height: 4, borderRadius: 2, backgroundColor: '#2E3135', alignSelf: 'center' },
  top: { flexDirection: 'row', gap: Spacing.three, alignItems: 'center' },
  iconStack: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#2E3135', alignItems: 'center', justifyContent: 'center' },
  countdown: { width: 44, height: 44, borderRadius: 22, borderWidth: 2, borderColor: '#F59E0B', alignItems: 'center', justifyContent: 'center' },
  costCard: { backgroundColor: '#0B0B0C', borderRadius: 12, padding: Spacing.three, gap: 4 },
  priceRow: { flexDirection: 'row', gap: Spacing.two, alignItems: 'baseline' },
  row2: { flexDirection: 'row', gap: Spacing.three },
  miniCard: { flex: 1, backgroundColor: '#0B0B0C', borderRadius: 10, padding: Spacing.two, gap: 4 },
  actionsRow: { flexDirection: 'row', gap: Spacing.three },
  declineButton: { flex: 1, backgroundColor: '#2E3135', borderRadius: 14, paddingVertical: Spacing.three, alignItems: 'center' },
  acceptButton: { flex: 1, backgroundColor: ACCENT, borderRadius: 14, paddingVertical: Spacing.three, alignItems: 'center' },
});