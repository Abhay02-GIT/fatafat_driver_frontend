import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const PINK = '#ec4899';

// TODO: shown instead of the generic incoming-request screen when driver's vehicle type is 'pink-scooty'
export default function PinkScootyTripRequestScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.header}>
        <ThemedText style={{ color: '#22C55E' }}>● Online</ThemedText>
        <ThemedText type="subtitle" style={{ color: PINK }}>Pink Scooty</ThemedText>
      </SafeAreaView>

      <View style={styles.map}>
        <View style={styles.estimateChip}><ThemedText style={{ color: '#fff' }}>📍 Estimated trip: 12 mins (4.2 km)</ThemedText></View>
        <View style={styles.pickupPill}><ThemedText style={{ color: '#fff', fontWeight: '700' }}>PICKUP</ThemedText></View>
        <View style={styles.dropPill}><ThemedText style={{ color: '#fff', fontWeight: '700' }}>DROP</ThemedText></View>
      </View>

      <SafeAreaView edges={['bottom']} style={styles.sheet}>
        <View style={styles.sheetHandle} />
        <View style={styles.requestTop}>
          <View><ThemedText type="smallBold" style={{ color: PINK }}>NEW TRIP REQUEST</ThemedText><ThemedText type="subtitle" style={{ color: '#fff' }}>Pink Scooty Priority</ThemedText></View>
          <View style={styles.womenOnlyPill}><ThemedText type="small" style={{ color: '#fff' }}>📍 WOMEN ONLY</ThemedText></View>
        </View>

        <View style={styles.riderRow}>
          <View style={[styles.avatar, { borderColor: PINK }]} />
          <View style={{ flex: 1 }}><ThemedText type="smallBold" style={{ color: '#fff' }}>Sarah Jenkins</ThemedText><ThemedText type="small" themeColor="textSecondary">Rider rating: ⭐ 4.9 (240+ trips)</ThemedText></View>
          <View style={{ alignItems: 'flex-end' }}><ThemedText type="smallBold" style={{ color: '#22C55E' }}>₹18.50</ThemedText><ThemedText type="small" themeColor="textSecondary">Incl. Pink Bonus</ThemedText></View>
        </View>

        <View style={styles.routeBox}>
          <View style={styles.routeRow}><View style={[styles.dot, { backgroundColor: PINK }]} /><View><ThemedText type="small" themeColor="textSecondary">PICKUP FROM</ThemedText><ThemedText type="smallBold" style={{ color: '#fff' }}>742 Evergreen Terrace, Downtown</ThemedText></View></View>
          <View style={styles.routeRow}><View style={[styles.dot, { backgroundColor: '#22C55E' }]} /><View><ThemedText type="small" themeColor="textSecondary">DROP OFF TO</ThemedText><ThemedText type="smallBold" style={{ color: '#fff' }}>St. Jude Hospital Women's Wing</ThemedText></View></View>
        </View>

        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.declineButton} onPress={() => router.replace('/(trip)/request-expired')}><ThemedText style={{ color: '#fff', fontWeight: '700' }}>Decline</ThemedText></TouchableOpacity>
          <TouchableOpacity style={styles.acceptButton} onPress={() => router.replace('/(trip)/female-rider-verification')}><ThemedText style={{ color: '#fff', fontWeight: '700' }}>👤 Accept Ride</ThemedText></TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C' },
  header: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: Spacing.four, paddingBottom: Spacing.two },
  map: { flex: 1, padding: Spacing.four, gap: Spacing.four },
  estimateChip: { alignSelf: 'flex-start', backgroundColor: '#141517', borderRadius: 10, padding: Spacing.two },
  pickupPill: { alignSelf: 'flex-start', backgroundColor: PINK, borderRadius: 8, paddingHorizontal: Spacing.two, paddingVertical: 4, marginTop: Spacing.four },
  dropPill: { alignSelf: 'flex-end', backgroundColor: '#22C55E', borderRadius: 8, paddingHorizontal: Spacing.two, paddingVertical: 4 },
  sheet: { backgroundColor: '#141517', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: Spacing.four, gap: Spacing.three },
  sheetHandle: { width: 40, height: 4, borderRadius: 2, backgroundColor: '#2E3135', alignSelf: 'center' },
  requestTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  womenOnlyPill: { backgroundColor: PINK, borderRadius: 12, paddingHorizontal: Spacing.two, paddingVertical: 4 },
  riderRow: { flexDirection: 'row', gap: Spacing.two, alignItems: 'center' },
  avatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#2E3135', borderWidth: 2 },
  routeBox: { gap: Spacing.two, backgroundColor: '#0B0B0C', borderRadius: 12, padding: Spacing.three },
  routeRow: { flexDirection: 'row', gap: Spacing.two, alignItems: 'flex-start' },
  dot: { width: 10, height: 10, borderRadius: 5, marginTop: 4 },
  actionsRow: { flexDirection: 'row', gap: Spacing.three },
  declineButton: { flex: 1, backgroundColor: '#2E3135', borderRadius: 14, paddingVertical: Spacing.three, alignItems: 'center' },
  acceptButton: { flex: 1, backgroundColor: PINK, borderRadius: 14, paddingVertical: Spacing.three, alignItems: 'center' },
});