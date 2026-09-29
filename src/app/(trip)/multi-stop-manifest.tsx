import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';

// TODO: only shown when the driver's registered vehicle type is 'carpool'
export default function MultiStopManifestScreen() {
  const router = useRouter();
  const [stops, setStops] = useState([
    { id: 's1', name: 'Vikram', address: 'Pickup: 124 Main St', boarded: true },
    { id: 's2', name: 'Sarah', address: 'Pickup: 88 Elm St', boarded: false },
  ]);
  const allBoarded = stops.every((s) => s.boarded);
  const toggleStop = (id: string) => setStops((prev) => prev.map((s) => (s.id === id ? { ...s, boarded: !s.boarded } : s)));

  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.header}>
        <View style={styles.avatar} />
        <ThemedText type="subtitle" style={{ color: ACCENT }}>Go Online</ThemedText>
        <ThemedText style={{ fontSize: 20 }}>🔔</ThemedText>
      </SafeAreaView>

      <View style={styles.map} />

      <SafeAreaView edges={['bottom']} style={styles.sheet}>
        <View style={styles.sheetHandle} />
        <ThemedText type="subtitle" style={{ color: '#fff' }}>Pickup Manifest ({stops.length})</ThemedText>
        {stops.map((s, i) => (
          <View key={s.id} style={styles.stopRow}>
            <View style={styles.numberCircle}><ThemedText style={{ color: '#fff' }}>{i + 1}</ThemedText></View>
            <View style={{ flex: 1 }}><ThemedText type="smallBold" style={{ color: '#fff' }}>{s.name}</ThemedText><ThemedText type="small" themeColor="textSecondary">{s.address}</ThemedText></View>
            <TouchableOpacity style={[styles.togglePill, s.boarded ? styles.togglePillOn : styles.togglePillOff]} onPress={() => toggleStop(s.id)} />
          </View>
        ))}
        <TouchableOpacity
          style={[styles.confirmButton, allBoarded && styles.confirmButtonActive]}
          disabled={!allBoarded}
          onPress={() => router.replace('/(trip)/active-navigation')}>
          <ThemedText style={{ color: allBoarded ? '#0B0B0C' : '#60646C', fontWeight: '700' }}>Confirm Boarded</ThemedText>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: Spacing.four, paddingBottom: Spacing.two },
  avatar: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#2E3135' },
  map: { flex: 1 },
  sheet: { backgroundColor: '#141517', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: Spacing.four, gap: Spacing.three },
  sheetHandle: { width: 40, height: 4, borderRadius: 2, backgroundColor: '#2E3135', alignSelf: 'center' },
  stopRow: { flexDirection: 'row', gap: Spacing.three, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#2E3135', paddingVertical: Spacing.two },
  numberCircle: { width: 28, height: 28, borderRadius: 14, backgroundColor: '#2E3135', alignItems: 'center', justifyContent: 'center' },
  togglePill: { width: 44, height: 24, borderRadius: 12 },
  togglePillOn: { backgroundColor: ACCENT },
  togglePillOff: { backgroundColor: '#F59E0B' },
  confirmButton: { backgroundColor: '#2E3135', borderRadius: 14, paddingVertical: Spacing.three, alignItems: 'center' },
  confirmButtonActive: { backgroundColor: ACCENT },
});