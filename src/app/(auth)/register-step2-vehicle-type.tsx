import { useState } from 'react';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import { ProgressSteps } from '@/components/auth/progress-steps';
import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';

const VEHICLE_TYPES = [
  { id: 'cab', icon: '🚕', label: 'Cab' },
  { id: 'auto', icon: '🛺', label: 'Auto' },
  { id: 'bike', icon: '🏍️', label: 'Bike' },
  { id: 'pink-scooty', icon: '🛵', label: 'Pink Scooty' },
  { id: 'carpool', icon: '👥', label: 'Carpool' },
  { id: 'parcel', icon: '🚚', label: 'Parcel' },
];

export default function VehicleTypeScreen() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ThemedText style={{ color: '#fff', fontSize: 20 }}>←</ThemedText>
        </TouchableOpacity>
        <ThemedText type="smallBold" style={{ color: '#fff' }}>Rider</ThemedText>
        <View style={{ width: 20 }} />
      </View>

      <ProgressSteps current={2} total={4} label="Step 2 of 4" />
      <ThemedText type="small" themeColor="textSecondary">Vehicle Details next</ThemedText>

      <ThemedText type="subtitle" style={{ color: '#fff', marginTop: Spacing.three }}>
        Select Vehicle Type
      </ThemedText>
      <ThemedText themeColor="textSecondary">
        Choose the primary service you will provide. This determines your commission rate and trip offers.
      </ThemedText>

      <View style={styles.grid}>
        {VEHICLE_TYPES.map((v) => {
          const isSelected = selected === v.id;
          return (
            <TouchableOpacity
              key={v.id}
              style={[styles.card, isSelected && styles.cardSelected]}
              onPress={() => setSelected(v.id)}>
              <ThemedText style={styles.cardIcon}>{v.icon}</ThemedText>
              <ThemedText type="smallBold" style={{ color: '#fff' }}>{v.label}</ThemedText>
              <View style={[styles.pill, isSelected && styles.pillSelected]} />
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.infoBox}>
        <ThemedText type="small" themeColor="textSecondary">
          ⓘ Commission rates are subject to dynamic surge multipliers based on operational zones and time of day. Final payout structures will be confirmed in your contract.
        </ThemedText>
      </View>

      <TouchableOpacity
        style={[styles.continueButton, !selected && styles.continueButtonDisabled]}
        disabled={!selected}
        onPress={() => router.push('/(auth)/register-vehicle-details')}>
        <ThemedText style={styles.continueText}>Continue →</ThemedText>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C' },
  content: { padding: Spacing.four, gap: Spacing.three, paddingBottom: Spacing.six },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.three, marginTop: Spacing.two },
  card: {
    width: '47%',
    backgroundColor: '#141517',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#2E3135',
    padding: Spacing.three,
    alignItems: 'center',
    gap: Spacing.two,
  },
  cardSelected: { borderColor: ACCENT },
  cardIcon: { fontSize: 28 },
  pill: { width: '100%', height: 10, borderRadius: 6, backgroundColor: '#2E3135' },
  pillSelected: { backgroundColor: ACCENT },
  infoBox: { backgroundColor: '#141517', borderRadius: 12, padding: Spacing.three },
  continueButton: { backgroundColor: ACCENT, borderRadius: 14, paddingVertical: Spacing.three, alignItems: 'center' },
  continueButtonDisabled: { opacity: 0.4 },
  continueText: { color: '#0B0B0C', fontWeight: '700', fontSize: 16 },
});