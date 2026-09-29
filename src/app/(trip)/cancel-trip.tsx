import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const REASONS = ["Rider didn't show up", 'Wrong location', 'Vehicle issue', 'Safety concern'];

export default function CancelTripScreen() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.map} />
      <SafeAreaView edges={['bottom']} style={styles.sheet}>
        <View style={styles.sheetHandle} />
        <ThemedText type="subtitle" style={{ color: '#fff' }}>Cancel Trip</ThemedText>
        <ThemedText themeColor="textSecondary">Please let us know why you are canceling. Frequent cancellations may affect your acceptance rate.</ThemedText>

        {REASONS.map((r) => (
          <TouchableOpacity key={r} style={styles.reasonRow} onPress={() => setSelected(r)}>
            <View style={[styles.radio, selected === r && styles.radioSelected]} />
            <ThemedText style={{ color: '#fff' }}>{r}</ThemedText>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={[styles.confirmButton, !selected && { opacity: 0.5 }]} disabled={!selected} onPress={() => router.replace('/(tabs)')}>
          <ThemedText style={{ color: '#fff', fontWeight: '700' }}>CONFIRM CANCELLATION</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.back()}><ThemedText themeColor="textSecondary" style={{ textAlign: 'center' }}>KEEP TRIP</ThemedText></TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C' },
  map: { flex: 1 },
  sheet: { backgroundColor: '#141517', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: Spacing.four, gap: Spacing.three },
  sheetHandle: { width: 40, height: 4, borderRadius: 2, backgroundColor: '#2E3135', alignSelf: 'center' },
  reasonRow: { flexDirection: 'row', gap: Spacing.three, alignItems: 'center', backgroundColor: '#0B0B0C', borderRadius: 10, padding: Spacing.three },
  radio: { width: 18, height: 18, borderRadius: 9, borderWidth: 1, borderColor: '#60646C' },
  radioSelected: { borderColor: '#ef4444', backgroundColor: '#ef4444' },
  confirmButton: { backgroundColor: '#ef4444', borderRadius: 14, paddingVertical: Spacing.three, alignItems: 'center', marginTop: Spacing.two },
});