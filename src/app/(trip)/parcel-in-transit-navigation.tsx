import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';

export default function ParcelInTransitNavigationScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.topRow}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}><ThemedText style={{ color: '#fff' }}>✕</ThemedText></TouchableOpacity>
        <View style={styles.etaPill}><ThemedText style={{ color: '#fff' }}>▲ 12 min • 4.2 mi</ThemedText></View>
      </SafeAreaView>

      <View style={styles.map}>
        <TouchableOpacity style={styles.crosshair}><ThemedText>◎</ThemedText></TouchableOpacity>
        <ThemedText style={styles.sosText}>SOS</ThemedText>
        <View style={styles.pickupPill}><ThemedText style={{ color: '#fff' }}>📍 Pickup</ThemedText></View>
      </View>

      <SafeAreaView edges={['bottom']} style={styles.sheet}>
        <View style={styles.sheetHandle} />
        <View style={styles.deliverRow}>
          <View style={{ flex: 1 }}><ThemedText type="smallBold" style={{ color: '#fff' }}>Deliver to Sarah J.</ThemedText><ThemedText type="small" themeColor="textSecondary">📍 451 Wall St, Suite 300</ThemedText></View>
          <View style={styles.orangePill} />
        </View>
        <View style={styles.orderRow}>
          <ThemedText>📦</ThemedText>
          <View style={{ flex: 1 }}><ThemedText type="smallBold" style={{ color: '#fff' }}>Order #98234-A</ThemedText><ThemedText type="small" themeColor="textSecondary">Small Box • 2 lbs</ThemedText></View>
          <TouchableOpacity onPress={() => {}}><ThemedText style={{ fontSize: 18 }}>📞</ThemedText></TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/(trip)/chat')}><ThemedText style={{ fontSize: 18 }}>💬</ThemedText></TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.arriveButton} onPress={() => router.replace('/(trip)/drop-verification-cod')}>
          <ThemedText style={{ color: '#0B0B0C', fontWeight: '700' }}>Slide to Arrive →</ThemedText>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C' },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: Spacing.four, paddingBottom: Spacing.two },
  iconButton: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#141517', alignItems: 'center', justifyContent: 'center' },
  etaPill: { backgroundColor: '#141517', borderRadius: 16, paddingHorizontal: Spacing.three, paddingVertical: Spacing.one },
  map: { flex: 1, position: 'relative' },
  crosshair: { position: 'absolute', top: Spacing.four, right: Spacing.four, width: 36, height: 36, borderRadius: 18, backgroundColor: '#141517', alignItems: 'center', justifyContent: 'center' },
  sosText: { position: 'absolute', top: Spacing.four * 2 + 36, right: Spacing.four, color: '#ef4444', fontWeight: '700' },
  pickupPill: { position: 'absolute', top: '40%', left: '35%', backgroundColor: '#141517', borderRadius: 16, paddingHorizontal: Spacing.three, paddingVertical: Spacing.two },
  sheet: { backgroundColor: '#141517', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: Spacing.four, gap: Spacing.two },
  sheetHandle: { width: 40, height: 4, borderRadius: 2, backgroundColor: '#2E3135', alignSelf: 'center' },
  deliverRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  orangePill: { width: 60, height: 24, borderRadius: 12, backgroundColor: '#F59E0B' },
  orderRow: { flexDirection: 'row', gap: Spacing.two, alignItems: 'center', backgroundColor: '#0B0B0C', borderRadius: 10, padding: Spacing.three },
  arriveButton: { backgroundColor: ACCENT, borderRadius: 14, paddingVertical: Spacing.three, alignItems: 'center' },
});