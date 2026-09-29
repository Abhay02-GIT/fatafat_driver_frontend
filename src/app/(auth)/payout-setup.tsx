import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';

const BENEFITS = [
  { icon: '🔒', title: 'Bank-level Security', desc: 'Your data is encrypted and securely stored.' },
  { icon: '🛡️', title: 'Verified Instantly', desc: 'Most major banks connect in seconds.' },
  { icon: '✏️', title: 'Fully Editable', desc: 'Update your payout details at any time.' },
];

export default function PayoutSetupScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <ThemedText type="subtitle" style={styles.title}>
          Get paid every Tuesday
        </ThemedText>
        <ThemedText themeColor="textSecondary" style={styles.subtitle}>
          Link your bank account to receive your weekly earnings directly. It's fast and easy.
        </ThemedText>

        <View style={styles.card}>
          {BENEFITS.map((b) => (
            <View key={b.title} style={styles.benefitRow}>
              <ThemedText style={{ fontSize: 18 }}>{b.icon}</ThemedText>
              <View style={{ flex: 1 }}>
                <ThemedText type="smallBold" style={{ color: '#fff' }}>{b.title}</ThemedText>
                <ThemedText type="small" themeColor="textSecondary">{b.desc}</ThemedText>
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push('/(auth)/register-review')}>
          <ThemedText style={styles.primaryText}>Add Bank Account →</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/(auth)/register-review')}>
          <ThemedText themeColor="textSecondary">Do this later</ThemedText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C', justifyContent: 'center' },
  center: { paddingHorizontal: Spacing.four, gap: Spacing.three, alignItems: 'center' },
  title: { color: '#fff', textAlign: 'center' },
  subtitle: { textAlign: 'center' },
  card: { backgroundColor: '#141517', borderRadius: 14, padding: Spacing.three, gap: Spacing.three, width: '100%' },
  benefitRow: { flexDirection: 'row', gap: Spacing.three, alignItems: 'flex-start' },
  primaryButton: { backgroundColor: ACCENT, borderRadius: 14, paddingVertical: Spacing.three, paddingHorizontal: Spacing.six },
  primaryText: { color: '#0B0B0C', fontWeight: '700' },
});