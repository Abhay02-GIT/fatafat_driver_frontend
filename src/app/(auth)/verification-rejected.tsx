import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const REJECTED = [
  {
    label: "Driver's License",
    reason: 'The photo provided is too blurry to read the expiration date clearly.',
    tip: 'Ensure good lighting and lay the card flat.',
  },
  {
    label: 'Vehicle Insurance',
    reason: 'The document appears to be expired. The coverage dates must be current.',
    tip: 'Upload your most recent, active policy document.',
  },
];

export default function VerificationRejectedScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity onPress={() => router.back()}>
        <ThemedText style={{ color: '#fff', fontSize: 20 }}>←</ThemedText>
      </TouchableOpacity>

      <View style={styles.iconCircle}>
        <ThemedText style={{ fontSize: 32, color: '#fff' }}>!</ThemedText>
      </View>
      <ThemedText type="subtitle" style={styles.title}>Verification Rejected</ThemedText>
      <ThemedText themeColor="textSecondary" style={styles.subtitle}>
        We couldn't verify some of your documents. Please review the issues below and try again.
      </ThemedText>

      {REJECTED.map((r) => (
        <View key={r.label} style={styles.card}>
          <View style={styles.cardHeader}>
            <ThemedText type="smallBold" style={{ color: '#fff' }}>{r.label}</ThemedText>
            <View style={styles.rejectedBadge}>
              <ThemedText type="small" style={{ color: '#fff' }}>REJECTED</ThemedText>
            </View>
          </View>
          <ThemedText type="small" themeColor="textSecondary">{r.reason}</ThemedText>
          <View style={styles.tipRow}>
            <ThemedText>💡</ThemedText>
            <ThemedText type="small" themeColor="textSecondary" style={{ flex: 1 }}>{r.tip}</ThemedText>
          </View>
        </View>
      ))}

      <View style={styles.clearedRow}>
        <ThemedText type="small" themeColor="textSecondary">Background Check</ThemedText>
        <ThemedText type="small" style={{ color: '#22C55E' }}>✓ Verified Successfully</ThemedText>
      </View>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => router.push('/(auth)/register-documents')}>
        <ThemedText style={{ color: '#fff', fontWeight: '700' }}>📝 Fix & Re-submit</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.secondaryButton}>
        <ThemedText style={{ color: '#fff' }}>🎧 Contact Support</ThemedText>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C' },
  content: { padding: Spacing.four, gap: Spacing.three, paddingBottom: Spacing.six },
  iconCircle: {
    width: 64, height: 64, borderRadius: 32, backgroundColor: '#ef4444',
    alignSelf: 'center', alignItems: 'center', justifyContent: 'center',
  },
  title: { color: '#fff', textAlign: 'center' },
  subtitle: { textAlign: 'center' },
  card: {
    borderLeftWidth: 3, borderLeftColor: '#ef4444', backgroundColor: '#1a1213',
    borderRadius: 10, padding: Spacing.three, gap: Spacing.two,
  },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  rejectedBadge: { backgroundColor: '#ef4444', borderRadius: 6, paddingHorizontal: 8, paddingVertical: 2 },
  tipRow: { flexDirection: 'row', gap: 6, backgroundColor: '#141517', borderRadius: 8, padding: Spacing.two },
  clearedRow: {
    flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#141517',
    borderRadius: 10, padding: Spacing.three, opacity: 0.6,
  },
  primaryButton: { backgroundColor: '#2E3135', borderRadius: 12, paddingVertical: Spacing.three, alignItems: 'center' },
  secondaryButton: { borderWidth: 1, borderColor: '#2E3135', borderRadius: 12, paddingVertical: Spacing.three, alignItems: 'center' },
});