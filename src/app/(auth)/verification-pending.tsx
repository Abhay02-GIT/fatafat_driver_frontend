import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const STAGES = [
  { label: 'Submitted', done: true },
  { label: 'Reviewing', done: false, active: true },
  { label: 'Approval', done: false },
];

const DOCS = [
  { label: "Driver's License", status: 'Approved', color: '#22C55E' },
  { label: 'Vehicle Registration', status: 'Under Review', color: '#F59E0B' },
  { label: 'Background Check', status: 'Cleared', color: '#22C55E' },
];

export default function VerificationPendingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ThemedText type="subtitle" style={{ color: '#fff' }}>Rider</ThemedText>
        <TouchableOpacity
          style={styles.closeButton}
          hitSlop={12}
          onPress={() => router.replace('/(tabs)')}>
          <ThemedText style={{ color: '#fff', fontSize: 18 }}>✕</ThemedText>
        </TouchableOpacity>
      </View>

      <View style={styles.iconCircle}>
        <ThemedText style={{ fontSize: 36 }}>📋</ThemedText>
      </View>

      <ThemedText type="subtitle" style={styles.title}>Verification Pending</ThemedText>
      <ThemedText themeColor="textSecondary" style={styles.subtitle}>
        We're reviewing your documents. This usually takes 24-48 hours. We'll notify you once you're ready to go online.
      </ThemedText>

      <View style={styles.stagesRow}>
        {STAGES.map((s) => (
          <View key={s.label} style={styles.stage}>
            <ThemedText style={{ color: s.done ? '#22C55E' : s.active ? '#F59E0B' : '#60646C', fontSize: 18 }}>
              {s.done ? '✓' : s.active ? '⏳' : '🔒'}
            </ThemedText>
            <ThemedText type="small" style={{ color: s.done ? '#22C55E' : s.active ? '#F59E0B' : '#60646C' }}>
              {s.label}
            </ThemedText>
          </View>
        ))}
      </View>

      <ThemedText type="smallBold" style={{ color: '#fff' }}>Document Status</ThemedText>
      {DOCS.map((d) => (
        <View key={d.label} style={styles.docRow}>
          <ThemedText type="small" themeColor="textSecondary">{d.label}</ThemedText>
          <ThemedText type="small" style={{ color: d.color }}>{d.status}</ThemedText>
        </View>
      ))}

      <TouchableOpacity
        style={styles.secondaryButton}
        // TODO: call the real verification-status API here.
        // For now, pretend the check came back approved and go to Home.
        onPress={() => router.replace('/(tabs)')}>
        <ThemedText style={{ color: '#fff' }}>🔄 Check Status</ThemedText>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        // TODO: open your support chat / phone dialer
        onPress={() => {}}>
        <ThemedText style={{ color: '#fff' }}>🎧 Contact Support</ThemedText>
      </TouchableOpacity>

      {/* DEV ONLY: remove before release. Lets you preview the rejected screen. */}
      <TouchableOpacity onPress={() => router.push('/(auth)/verification-rejected')}>
        <ThemedText type="small" themeColor="textSecondary" style={{ textAlign: 'center' }}>
          [dev] preview rejected state
        </ThemedText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C', paddingHorizontal: Spacing.four, gap: Spacing.three },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  closeButton: { padding: Spacing.one },
  iconCircle: {
    width: 100, height: 100, borderRadius: 50, backgroundColor: '#141517',
    alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: Spacing.two,
  },
  title: { color: '#fff', textAlign: 'center' },
  subtitle: { textAlign: 'center' },
  stagesRow: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: Spacing.two },
  stage: { alignItems: 'center', gap: 4 },
  docRow: {
    flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#141517',
    borderRadius: 10, padding: Spacing.three,
  },
  secondaryButton: {
    borderWidth: 1, borderColor: '#2E3135', borderRadius: 12,
    paddingVertical: Spacing.three, alignItems: 'center',
  },
});