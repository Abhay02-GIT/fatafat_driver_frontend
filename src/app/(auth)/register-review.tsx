import { useState } from 'react';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import { ProgressSteps } from '@/components/auth/progress-steps';
import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';

function ReviewSection({
  icon,
  title,
  rows,
}: {
  icon: string;
  title: string;
  rows: { label: string; value: string }[];
}) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <ThemedText type="smallBold" style={{ color: '#fff' }}>{icon} {title}</ThemedText>
        <ThemedText type="small" style={{ color: ACCENT }}>✏️ Edit</ThemedText>
      </View>
      <View style={styles.sectionGrid}>
        {rows.map((r) => (
          <View key={r.label} style={styles.sectionCell}>
            <ThemedText type="small" themeColor="textSecondary">{r.label}</ThemedText>
            <ThemedText type="smallBold" style={{ color: '#fff' }}>{r.value}</ThemedText>
          </View>
        ))}
      </View>
    </View>
  );
}

export default function RegisterReviewScreen() {
  const router = useRouter();
  const [declared, setDeclared] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const canSubmit = declared && agreed;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ThemedText style={{ color: '#fff', fontSize: 20 }}>←</ThemedText>
        </TouchableOpacity>
        <ThemedText type="smallBold" style={{ color: '#fff' }}>Rider</ThemedText>
        <View style={{ width: 20 }} />
      </View>

      <ThemedText type="smallBold" style={{ color: ACCENT }}>STEP 4 OF 4</ThemedText>
      <ProgressSteps current={4} total={4} />

      <ThemedText type="subtitle" style={{ color: '#fff' }}>Review & Submit</ThemedText>
      <ThemedText themeColor="textSecondary">
        Please review your information carefully before submitting your application. This data will be used for your background check.
      </ThemedText>

      <ReviewSection
        icon="👤"
        title="Personal Information"
        rows={[
          { label: 'Full Name', value: 'Marcus J. Chen' },
          { label: 'Phone', value: '+1 (555) 019-2834' },
          { label: 'Address', value: '4289 Industrial Pkwy, Apt 3B\nSeattle, WA 98101' },
        ]}
      />
      <ReviewSection
        icon="🚗"
        title="Vehicle Details"
        rows={[
          { label: 'Make & Model', value: 'Toyota Camry Hybrid' },
          { label: 'Year', value: '2022' },
          { label: 'License Plate', value: 'WA-XYZ789' },
          { label: 'Color', value: 'Midnight Black' },
        ]}
      />
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <ThemedText type="smallBold" style={{ color: '#fff' }}>📄 Documents</ThemedText>
          <ThemedText type="small" style={{ color: ACCENT }}>✏️ Edit</ThemedText>
        </View>
        {['Driver\'s License', 'Insurance Card', 'Vehicle Registration'].map((d) => (
          <View key={d} style={styles.docRow}>
            <ThemedText type="small" themeColor="textSecondary">{d}</ThemedText>
            <ThemedText style={{ color: ACCENT }}>✓</ThemedText>
          </View>
        ))}
      </View>
      <ReviewSection
        icon="🏦"
        title="Bank Details"
        rows={[
          { label: 'Bank Name', value: 'Chase Bank' },
          { label: 'Account Ending In', value: '•••• 4829' },
        ]}
      />

      <ThemedText type="smallBold" style={{ color: '#fff', marginTop: Spacing.three }}>
        Declarations
      </ThemedText>
      <TouchableOpacity style={styles.checkboxRow} onPress={() => setDeclared((v) => !v)}>
        <View style={[styles.checkbox, declared && styles.checkboxChecked]} />
        <ThemedText type="small" themeColor="textSecondary" style={{ flex: 1 }}>
          I declare that all information provided is accurate and true to the best of my knowledge.
        </ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.checkboxRow} onPress={() => setAgreed((v) => !v)}>
        <View style={[styles.checkbox, agreed && styles.checkboxChecked]} />
        <ThemedText type="small" themeColor="textSecondary" style={{ flex: 1 }}>
          I agree to the Terms of Service, Privacy Policy, and consent to a background check.
        </ThemedText>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.submitButton, !canSubmit && styles.submitButtonDisabled]}
        disabled={!canSubmit}
        onPress={() => router.push('/(auth)/verification-pending')}>
        <ThemedText style={styles.submitText}>Submit for Verification →</ThemedText>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C' },
  content: { padding: Spacing.four, gap: Spacing.three, paddingBottom: Spacing.six },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  section: { backgroundColor: '#141517', borderRadius: 12, padding: Spacing.three, gap: Spacing.two },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  sectionGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.three },
  sectionCell: { width: '45%', gap: 2 },
  docRow: { flexDirection: 'row', justifyContent: 'space-between' },
  checkboxRow: { flexDirection: 'row', gap: Spacing.two, alignItems: 'flex-start' },
  checkbox: { width: 20, height: 20, borderRadius: 4, borderWidth: 1, borderColor: '#2E3135', marginTop: 2 },
  checkboxChecked: { backgroundColor: ACCENT, borderColor: ACCENT },
  submitButton: { backgroundColor: ACCENT, borderRadius: 14, paddingVertical: Spacing.three, alignItems: 'center' },
  submitButtonDisabled: { opacity: 0.4 },
  submitText: { color: '#0B0B0C', fontWeight: '700', fontSize: 16 },
});