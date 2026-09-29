import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const PINK = '#ec4899';
const ACCENT = '#22C55E';

export default function PinkScootySafetyBadgeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><ThemedText style={{ color: '#fff', fontSize: 20 }}>←</ThemedText></TouchableOpacity>
        <ThemedText type="subtitle" style={{ color: '#fff' }}>Safety Profile</ThemedText>
        <View style={styles.progressPill} />
      </View>

      <View style={styles.badgeCard}>
        <ThemedText style={{ fontSize: 32 }}>🏅</ThemedText>
        <ThemedText type="subtitle" style={{ color: '#fff' }}>Trusted Pink Scooty Driver</ThemedText>
        <ThemedText themeColor="textSecondary">Highest level of women safety assurance certified</ThemedText>
        <View style={styles.statsRow}>
          <View><ThemedText type="small" themeColor="textSecondary">TOTAL SAFE RIDES</ThemedText><ThemedText type="subtitle" style={{ color: '#fff' }}>1,240</ThemedText></View>
          <View><ThemedText type="small" themeColor="textSecondary">ACCIDENT-FREE</ThemedText><ThemedText type="subtitle" style={{ color: ACCENT }}>100%</ThemedText></View>
        </View>
      </View>

      <View style={styles.scoreCard}>
        <ThemedText type="smallBold" style={{ color: '#fff' }}>Safety Scorecard</ThemedText>
        <View style={styles.scoreRow}><View style={[styles.scoreDot, { backgroundColor: PINK }]} /><View style={{ flex: 1 }}><ThemedText style={{ color: '#fff' }}>Women Rider Feedback</ThemedText><ThemedText type="small" themeColor="textSecondary">Based on last 500 ratings</ThemedText></View><ThemedText style={{ color: '#fff' }}>⭐ 4.98</ThemedText></View>
        <View style={styles.scoreRow}><View style={[styles.scoreDot, { backgroundColor: ACCENT }]} /><View style={{ flex: 1 }}><ThemedText style={{ color: '#fff' }}>Protocol Adherence</ThemedText><ThemedText type="small" themeColor="textSecondary">Selfie & helmet compliance</ThemedText></View><ThemedText style={{ color: ACCENT }}>100%</ThemedText></View>
      </View>

      <View style={styles.commentCard}>
        <ThemedText type="smallBold" style={{ color: PINK }}>RECENT RIDER COMMENT</ThemedText>
        <ThemedText style={{ color: '#fff' }}>"Amazing experience. The driver did the selfie check instantly and offered me the safety helmet. Feel so safe riding Pink Scooty!"</ThemedText>
        <ThemedText type="small" themeColor="textSecondary">— Jessica M. (Yesterday)</ThemedText>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => router.replace('/(tabs)')}>
        <ThemedText style={{ color: '#0B0B0C', fontWeight: '700' }}>Go Back to Dashboard</ThemedText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C', padding: Spacing.four, gap: Spacing.three },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  progressPill: { width: 100, height: 8, borderRadius: 4, backgroundColor: PINK },
  badgeCard: { backgroundColor: '#141517', borderRadius: 14, padding: Spacing.three, alignItems: 'center', gap: 4 },
  statsRow: { flexDirection: 'row', gap: Spacing.six, marginTop: Spacing.two },
  scoreCard: { backgroundColor: '#141517', borderRadius: 14, padding: Spacing.three, gap: Spacing.three },
  scoreRow: { flexDirection: 'row', gap: Spacing.two, alignItems: 'center' },
  scoreDot: { width: 24, height: 24, borderRadius: 6 },
  commentCard: { backgroundColor: '#141517', borderRadius: 14, padding: Spacing.three, gap: Spacing.two },
  backButton: { backgroundColor: ACCENT, borderRadius: 14, paddingVertical: Spacing.three, alignItems: 'center' },
});