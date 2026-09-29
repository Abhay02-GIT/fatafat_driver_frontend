import { PickerField } from '@/components/auth/picker-field';
import { GENDER_OPTIONS } from '@/constants/options';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';
const TOTAL_STEPS = 4;
const CURRENT_STEP = 1;

function Field({
  label,
  placeholder,
  value,
  onChangeText,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (t: string) => void;
}) {
  return (
    <View style={styles.field}>
      <ThemedText type="small" themeColor="textSecondary">
        {label}
      </ThemedText>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#60646C"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

export default function RegisterStep1Screen() {
  const router = useRouter();
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    dob: '',
    gender: '',
    city: '',
    contactName: '',
    contactPhone: '',
  });

  const update = (key: keyof typeof form) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ThemedText style={{ color: '#ffffff', fontSize: 20 }}>←</ThemedText>
        </TouchableOpacity>
        <ThemedText type="smallBold" style={{ color: '#ffffff' }}>
          Rider
        </ThemedText>
        <View style={{ width: 20 }} />
      </View>

      <View style={styles.progressRow}>
        <ThemedText type="smallBold" style={{ color: '#ffffff' }}>
          Personal Details
        </ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          Step {CURRENT_STEP} of {TOTAL_STEPS}
        </ThemedText>
      </View>
      <View style={styles.progressTrack}>
        <View style={[styles.progressFill, { width: `${(CURRENT_STEP / TOTAL_STEPS) * 100}%` }]} />
      </View>

      <View style={styles.photoBox}>
        <ThemedText style={{ fontSize: 28 }}>📷</ThemedText>
        <ThemedText type="smallBold" style={{ color: '#ffffff' }}>
          Profile Photo
        </ThemedText>
        <ThemedText type="small" themeColor="textSecondary" style={{ textAlign: 'center' }}>
          Clear, front-facing image. No sunglasses.
        </ThemedText>
      </View>

      <ThemedText type="smallBold" themeColor="textSecondary" style={styles.sectionLabel}>
        IDENTITY
      </ThemedText>
      <Field
        label="Full Legal Name"
        placeholder="As it appears on your license"
        value={form.fullName}
        onChangeText={update('fullName')}
      />
      <Field
        label="Email Address"
        placeholder="driver@example.com"
        value={form.email}
        onChangeText={update('email')}
      />

      <View style={styles.row2}>
        <View style={styles.half}>
          <Field
            label="Date of Birth"
            placeholder="mm/dd/yyyy"
            value={form.dob}
            onChangeText={update('dob')}
          />
        </View>
        <View style={styles.half}>
          <PickerField
            label="Gender"
            options={GENDER_OPTIONS}
            value={form.gender}
            onChange={update('gender')}
          />
        </View>
      </View>

      <ThemedText type="smallBold" themeColor="textSecondary" style={styles.sectionLabel}>
        OPERATING DETAILS
      </ThemedText>
      <Field
        label="Current City"
        placeholder="e.g. New York"
        value={form.city}
        onChangeText={update('city')}
      />

      <View style={styles.emergencyBox}>
        <ThemedText type="smallBold" style={{ color: '#ef4444' }}>
          * EMERGENCY CONTACT
        </ThemedText>
        <Field
          label="Contact Name"
          placeholder="Full Name"
          value={form.contactName}
          onChangeText={update('contactName')}
        />
        <Field
          label="Phone Number"
          placeholder="+1 (555) 000-0000"
          value={form.contactPhone}
          onChangeText={update('contactPhone')}
        />
      </View>

      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => router.push('/(auth)/register-step2-vehicle-type')}>
        <ThemedText style={styles.saveText}>Save & Continue →</ThemedText>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C' },
  content: { padding: Spacing.four, gap: Spacing.three, paddingBottom: Spacing.six },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  progressRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: Spacing.two },
  progressTrack: { height: 3, borderRadius: 2, backgroundColor: '#2E3135', overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: ACCENT },
  photoBox: {
    borderWidth: 1,
    borderColor: '#2E3135',
    borderRadius: 14,
    alignItems: 'center',
    gap: Spacing.one,
    paddingVertical: Spacing.four,
  },
  sectionLabel: { marginTop: Spacing.two },
  field: { gap: Spacing.one },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2E3135',
    backgroundColor: '#18191B',
    color: '#ffffff',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    fontSize: 15,
  },
  row2: { flexDirection: 'row', gap: Spacing.three },
  half: { flex: 1, gap: Spacing.one },
  emergencyBox: {
    borderLeftWidth: 2,
    borderLeftColor: '#ef4444',
    paddingLeft: Spacing.three,
    gap: Spacing.three,
    marginTop: Spacing.two,
  },
  saveButton: { alignSelf: 'center', marginTop: Spacing.three },
  saveText: { color: ACCENT, fontWeight: '700', textDecorationLine: 'underline' },
});