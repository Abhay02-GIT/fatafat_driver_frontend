import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';

export default function ActiveNavigationScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.turnBanner}>
        <ThemedText style={{ fontSize: 18 }}>⬆️</ThemedText>
        <View><ThemedText type="smallBold" style={{ color: '#0B0B0C' }}>0.8 mi</ThemedText><ThemedText type="small" style={{ color: '#0B0B0C' }}>Continue on Market St</ThemedText></View>
      </SafeAreaView>

      <View style={styles.map}>
        <TouchableOpacity style={styles.crosshair}><ThemedText style={{ fontSize: 18 }}>◎</ThemedText></TouchableOpacity>
        <ThemedText style={styles.sosText}>SOS</ThemedText>
      </View>

      <SafeAreaView edges={['bottom']} style={styles.sheet}>
        <View style={styles.sheetHandle} />
        <View style={styles.riderRow}>
          <View style={styles.avatar} />
          <View style={{ flex: 1 }}><ThemedText type="smallBold" style={{ color: '#fff' }}>Alex M.</ThemedText><ThemedText type="small" style={{ color: '#F59E0B' }}>⭐ 4.9</ThemedText></View>
          <View style={{ alignItems: 'flex-end' }}><ThemedText type="smallBold" style={{ color: ACCENT }}>12 min</ThemedText><ThemedText type="small" themeColor="textSecondary">4.2 mi away</ThemedText></View>
        </View>

        <View style={styles.dropoffRow}>
          <ThemedText style={{ color: ACCENT }}>📍</ThemedText>
          <View><ThemedText type="small" themeColor="textSecondary">DROP-OFF</ThemedText><ThemedText type="smallBold" style={{ color: '#fff' }}>1455 Market St, San Francisco, CA 94103</ThemedText></View>
        </View>

        <View style={styles.surgeBox}><ThemedText type="small" style={{ color: '#F59E0B' }}>⚡ Fare-Match Active</ThemedText><ThemedText type="small" style={{ color: '#F59E0B' }}>+1.5x Surge</ThemedText></View>

        <TouchableOpacity style={styles.endTripButton} onPress={() => router.replace('/(trip)/trip-complete')}><ThemedText style={{ color: '#0B0B0C', fontWeight: '700' }}>End Trip</ThemedText></TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C' },
  turnBanner: { flexDirection: 'row', alignItems: 'center', gap: Spacing.three, backgroundColor: ACCENT, padding: Spacing.four },
  map: { flex: 1, position: 'relative' },
  crosshair: { position: 'absolute', bottom: Spacing.four, right: Spacing.four, width: 40, height: 40, borderRadius: 20, backgroundColor: '#141517', alignItems: 'center', justifyContent: 'center' },
  sosText: { position: 'absolute', top: Spacing.four, right: Spacing.four, color: '#ef4444', fontWeight: '700' },
  sheet: { backgroundColor: '#141517', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: Spacing.four, gap: Spacing.three },
  sheetHandle: { width: 40, height: 4, borderRadius: 2, backgroundColor: '#2E3135', alignSelf: 'center' },
  riderRow: { flexDirection: 'row', gap: Spacing.three, alignItems: 'center' },
  avatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#2E3135' },
  dropoffRow: { flexDirection: 'row', gap: Spacing.two, backgroundColor: '#0B0B0C', borderRadius: 12, padding: Spacing.three },
  surgeBox: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#3a2a0b', borderRadius: 10, padding: Spacing.two },
  endTripButton: { backgroundColor: ACCENT, borderRadius: 14, paddingVertical: Spacing.three, alignItems: 'center' },
});