import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';
const STEPS = [
  { n: '1', title: 'Share your code', desc: 'Send your unique invite code to friends who want to drive.' },
  { n: '2', title: 'Friend signs up', desc: 'They register using your code and complete their profile.' },
  { n: '✓', title: 'Earn your reward', desc: 'You get ₹500 when they complete their first 20 trips.' },
];

export default function ReferARiderScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><ThemedText style={{ color: '#fff', fontSize: 20 }}>←</ThemedText></TouchableOpacity>
        <ThemedText type="subtitle" style={{ color: '#fff' }}>Rider</ThemedText>
        <ThemedText style={{ fontSize: 18 }}>🔔</ThemedText>
      </View>

      <View style={styles.iconCircle}><ThemedText style={{ fontSize: 32 }}>🎁</ThemedText></View>
      <ThemedText type="subtitle" style={styles.title}>Refer & Earn ₹500</ThemedText>
      <ThemedText themeColor="textSecondary" style={styles.subtitle}>Invite your friends to drive with Rider. You both get rewarded when they hit the road.</ThemedText>

      <View style={styles.codeCard}>
        <ThemedText type="small" themeColor="textSecondary">YOUR INVITE CODE</ThemedText>
        <ThemedText type="title" style={{ color: '#F59E0B' }}>VIKAS500</ThemedText>
        <TouchableOpacity style={styles.shareButton}><ThemedText style={{ color: '#fff', fontWeight: '700' }}>📤 Share My Code</ThemedText></TouchableOpacity>
      </View>

      <View style={styles.stepsCard}>
        <ThemedText type="smallBold" style={{ color: '#fff' }}>How it works</ThemedText>
        {STEPS.map((s) => (
          <View key={s.title} style={styles.stepRow}>
            <View style={[styles.stepBadge, s.n === '✓' && { backgroundColor: ACCENT }]}><ThemedText style={{ color: '#fff' }}>{s.n}</ThemedText></View>
            <View style={{ flex: 1 }}><ThemedText type="smallBold" style={{ color: '#fff' }}>{s.title}</ThemedText><ThemedText type="small" themeColor="textSecondary">{s.desc}</ThemedText></View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C', padding: Spacing.four, gap: Spacing.three },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  iconCircle: { width: 72, height: 72, borderRadius: 36, backgroundColor: '#141517', alignSelf: 'center', alignItems: 'center', justifyContent: 'center' },
  title: { color: '#fff', textAlign: 'center' },
  subtitle: { textAlign: 'center' },
  codeCard: { backgroundColor: '#141517', borderRadius: 14, padding: Spacing.three, alignItems: 'center', gap: Spacing.two },
  shareButton: { backgroundColor: ACCENT, borderRadius: 12, paddingVertical: Spacing.two, paddingHorizontal: Spacing.four, marginTop: Spacing.one },
  stepsCard: { backgroundColor: '#141517', borderRadius: 14, padding: Spacing.three, gap: Spacing.three },
  stepRow: { flexDirection: 'row', gap: Spacing.three, alignItems: 'flex-start' },
  stepBadge: { width: 26, height: 26, borderRadius: 13, backgroundColor: '#2E3135', alignItems: 'center', justifyContent: 'center' },
});