import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';

export default function TripAcceptedSummaryScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><ThemedText style={{ color: '#fff', fontSize: 20 }}>←</ThemedText></TouchableOpacity>
        <ThemedText type="subtitle" style={{ color: '#fff' }}>Trip Summary</ThemedText>
        <ThemedText style={{ color: '#fff' }}>?</ThemedText>
      </View>

      <View style={styles.successPill}><ThemedText style={{ color: ACCENT, fontWeight: '700' }}>✓ Trip Accepted Successfully</ThemedText></View>
      <View style={styles.map}><ThemedText style={styles.mapDistance}>1.3 km</ThemedText></View>

      <View style={styles.riderCard}>
        <View style={styles.riderTop}>
          <View><ThemedText type="smallBold" style={{ color: '#fff' }}>Priya S.</ThemedText><ThemedText type="small" style={{ color: '#F59E0B' }}>⭐ 4.8</ThemedText></View>
          <View style={{ alignItems: 'flex-end' }}><ThemedText type="smallBold" style={{ color: '#fff' }}>₹245</ThemedText><ThemedText type="small" themeColor="textSecondary">Cash Payment</ThemedText></View>
        </View>

        <View style={styles.routeBox}>
          <View style={styles.routeRow}>
            <ThemedText style={{ color: ACCENT }}>●</ThemedText>
            <View style={{ flex: 1 }}>
              <View style={styles.routeTopRow}><ThemedText type="small" style={{ color: ACCENT }}>PICKUP (1.3 KM AWAY)</ThemedText><ThemedText type="small" style={{ color: ACCENT }}>4 min ETA</ThemedText></View>
              <ThemedText type="smallBold" style={{ color: '#fff' }}>HSR Layout, 27th Main Road</ThemedText>
            </View>
          </View>
          <View style={styles.routeRow}><ThemedText style={{ color: '#F59E0B' }}>■</ThemedText><View><ThemedText type="small" themeColor="textSecondary">DROP-OFF</ThemedText><ThemedText type="smallBold" style={{ color: '#fff' }}>Indiranagar, 100 Feet Road</ThemedText></View></View>
        </View>

        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.secondaryButton} onPress={() => router.push('/(trip)/calling')}><ThemedText style={{ color: '#fff' }}>📞 Call Priya (Masked)</ThemedText></TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton} onPress={() => router.push('/(trip)/chat')}><ThemedText style={{ color: '#fff' }}>💬 Chat</ThemedText></TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.cancelButton} onPress={() => router.push('/(trip)/cancel-trip')}><ThemedText style={{ color: '#fff', fontWeight: '700' }}>Cancel Trip</ThemedText></TouchableOpacity>
        <TouchableOpacity style={styles.startNavButton} onPress={() => router.replace('/(trip)/en-route-pickup')}><ThemedText style={{ color: ACCENT, fontWeight: '700' }}>➤ Start Navigation</ThemedText></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C', paddingHorizontal: Spacing.four, gap: Spacing.three },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: Spacing.two },
  successPill: { alignSelf: 'center', backgroundColor: '#0f2a17', borderRadius: 20, paddingHorizontal: Spacing.three, paddingVertical: Spacing.two, borderWidth: 1, borderColor: ACCENT },
  map: { flex: 1, minHeight: 140, backgroundColor: '#0B0B0C', alignItems: 'center', justifyContent: 'center' },
  mapDistance: { color: '#fff', backgroundColor: '#141517', borderRadius: 8, paddingHorizontal: 8, paddingVertical: 4 },
  riderCard: { backgroundColor: '#141517', borderRadius: 16, padding: Spacing.three, gap: Spacing.three, marginBottom: Spacing.four },
  riderTop: { flexDirection: 'row', justifyContent: 'space-between' },
  routeBox: { gap: Spacing.two, backgroundColor: '#0B0B0C', borderRadius: 12, padding: Spacing.three },
  routeRow: { flexDirection: 'row', gap: Spacing.two, alignItems: 'flex-start' },
  routeTopRow: { flexDirection: 'row', justifyContent: 'space-between' },
  actionsRow: { flexDirection: 'row', gap: Spacing.two },
  secondaryButton: { flex: 1, backgroundColor: '#2E3135', borderRadius: 10, paddingVertical: Spacing.two, alignItems: 'center' },
  cancelButton: { backgroundColor: '#ef4444', borderRadius: 14, paddingVertical: Spacing.three, alignItems: 'center' },
  startNavButton: { alignItems: 'center', paddingVertical: Spacing.one },
});