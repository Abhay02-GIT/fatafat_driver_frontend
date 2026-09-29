import { useRouter, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const REASONS = ['Rider No-Show', 'Unsafe Pickup Location', "Too Much Luggage / Won't Fit", 'Rider Requested Cancel'];

export default function PerStopCancellationScreen() {
  const router = useRouter();
  const { stopName = 'Sarah', stopInfo = 'Stop 2 of 3 • 123 Main St.' } = useLocalSearchParams<{ stopName?: string; stopInfo?: string }>();
  const [selected, setSelected] = useState<string | null>(null);
  const [details, setDetails] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><ThemedText style={{ color: '#fff', fontSize: 18 }}>✕</ThemedText></TouchableOpacity>
        <ThemedText type="subtitle" style={{ color: '#fff' }}>Cancel Stop</ThemedText>
        <View style={{ width: 18 }} />
      </View>

      <View style={styles.warnCard}>
        <ThemedText type="smallBold" style={{ color: '#fff' }}>👤 Remove {stopName}'s Stop</ThemedText>
        <ThemedText type="small" themeColor="textSecondary">{stopInfo}</ThemedText>
        <View style={styles.warnBox}><ThemedText type="small" style={{ color: '#F59E0B' }}>ⓘ Canceling this stop will recalculate the route for remaining passengers. Your estimated earnings will be adjusted.</ThemedText></View>
      </View>

      <ThemedText type="smallBold" themeColor="textSecondary">SELECT REASON</ThemedText>
      {REASONS.map((r) => (
        <TouchableOpacity key={r} style={styles.reasonRow} onPress={() => setSelected(r)}>
          <ThemedText style={{ color: '#fff', flex: 1 }}>{r}</ThemedText>
          <View style={[styles.radio, selected === r && styles.radioSelected]} />
        </TouchableOpacity>
      ))}

      <TextInput style={styles.input} placeholder="Add optional details..." placeholderTextColor="#60646C" value={details} onChangeText={setDetails} multiline />

      <View style={{ flex: 1 }} />
      <TouchableOpacity style={[styles.confirmButton, !selected && { opacity: 0.5 }]} disabled={!selected} onPress={() => router.back()}>
        <ThemedText style={{ color: '#fff', fontWeight: '700' }}>⊘ Confirm Removal</ThemedText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C', padding: Spacing.four, gap: Spacing.two },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  warnCard: { backgroundColor: '#141517', borderRadius: 12, borderLeftWidth: 3, borderLeftColor: '#F59E0B', padding: Spacing.three, gap: Spacing.two },
  warnBox: { backgroundColor: '#2a1213', borderRadius: 10, padding: Spacing.two },
  reasonRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#141517', borderRadius: 10, padding: Spacing.three },
  radio: { width: 18, height: 18, borderRadius: 9, borderWidth: 1, borderColor: '#60646C' },
  radioSelected: { borderColor: '#ef4444', backgroundColor: '#ef4444' },
  input: { backgroundColor: '#141517', borderRadius: 10, padding: Spacing.three, color: '#fff', minHeight: 60, textAlignVertical: 'top' },
  confirmButton: { backgroundColor: '#ef4444', borderRadius: 14, paddingVertical: Spacing.three, alignItems: 'center' },
});