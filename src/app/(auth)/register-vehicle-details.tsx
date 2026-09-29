import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import { Field, SelectField } from '@/components/auth/field';
import { ProgressSteps } from '@/components/auth/progress-steps';
import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';

export default function VehicleDetailsScreen() {
  const router = useRouter();
  const [form, setForm] = useState({ regNo: '', make: '', model: '' });
  const update = (k: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ThemedText style={{ color: '#fff', fontSize: 20 }}>←</ThemedText>
        </TouchableOpacity>
        <ThemedText type="subtitle" style={{ color: '#fff' }}>Vehicle Details</ThemedText>
        <ThemedText type="small" themeColor="textSecondary">Step 4 of 6</ThemedText>
      </View>

      <ProgressSteps current={4} total={6} />

      <View style={styles.rideCard}>
        <ThemedText style={{ fontSize: 22 }}>🚗</ThemedText>
        <View style={{ flex: 1 }}>
          <ThemedText type="smallBold" style={{ color: '#fff' }}>Standard Ride</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">4 Seats • Basic Luggage</ThemedText>
        </View>
        <ThemedText style={{ color: ACCENT, fontSize: 18 }}>✓</ThemedText>
      </View>

      <Field label="Registration Number" placeholder="e.g. AB12 CDE" value={form.regNo} onChangeText={update('regNo')} />
      <View style={styles.row2}>
        <View style={styles.half}><Field label="Make" placeholder="e.g. Toyota" value={form.make} onChangeText={update('make')} /></View>
        <View style={styles.half}><Field label="Model" placeholder="e.g. Prius" value={form.model} onChangeText={update('model')} /></View>
      </View>
      <View style={styles.row2}>
        <View style={styles.half}><SelectField label="Year" value="Select Year" /></View>
        <View style={styles.half}><SelectField label="Colour" value="Select Colour" /></View>
      </View>
      <View style={styles.row2}>
        <View style={styles.half}><SelectField label="Fuel Type" value="Select Fuel" /></View>
        <View style={styles.half}><SelectField label="Seating Capacity" value="4 Seats" /></View>
      </View>

      <ThemedText type="smallBold" style={{ color: '#fff', marginTop: Spacing.two }}>
        Vehicle Photos Required
      </ThemedText>
      <ThemedText type="small" themeColor="textSecondary">
        You will need to provide clear photos of your vehicle in the next step. Ensure good lighting.
      </ThemedText>
      <View style={styles.photoRow}>
        <View style={styles.photoBox}>
          <ThemedText>🚚</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">Front Angle</ThemedText>
        </View>
        <View style={styles.photoBox}>
          <ThemedText>🚙</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">Rear Angle</ThemedText>
        </View>
      </View>

      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => router.push('/(auth)/register-documents')}>
        <ThemedText style={styles.saveText}>Save Vehicle Details</ThemedText>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C' },
  content: { padding: Spacing.four, gap: Spacing.three, paddingBottom: Spacing.six },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  rideCard: {
    flexDirection: 'row', alignItems: 'center', gap: Spacing.three,
    backgroundColor: '#141517', borderRadius: 12, padding: Spacing.three,
  },
  row2: { flexDirection: 'row', gap: Spacing.three },
  half: { flex: 1 },
  photoRow: { flexDirection: 'row', gap: Spacing.three },
  photoBox: {
    flex: 1, height: 90, borderRadius: 10, borderWidth: 1, borderColor: '#2E3135',
    alignItems: 'center', justifyContent: 'center', gap: 4,
  },
  saveButton: { alignSelf: 'center', marginTop: Spacing.two },
  saveText: { color: ACCENT, fontWeight: '700', textDecorationLine: 'underline' },
});