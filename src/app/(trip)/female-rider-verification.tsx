import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const PINK = '#ec4899';
const ACCENT_GREEN = '#22C55E';

// TODO: shown only for Pink Scooty trips, before starting the ride
export default function FemaleRiderVerificationScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><ThemedText style={{ color: '#fff', fontSize: 20 }}>←</ThemedText></TouchableOpacity>
        <ThemedText type="subtitle" style={{ color: '#fff' }}>Identity Match</ThemedText>
        <View style={styles.progressPill} />
      </View>

      <ThemedText type="smallBold" style={{ color: PINK }}>SAFETY SELFIE CHECK</ThemedText>
      <ThemedText type="subtitle" style={{ color: '#fff' }}>Confirm Female Rider Match</ThemedText>
      <ThemedText themeColor="textSecondary">Ensure the rider matches their profile photo below for a guaranteed secure trip.</ThemedText>

      <View style={styles.photosRow}>
        <View style={styles.photoBox}><ThemedText type="small" themeColor="textSecondary" style={styles.photoLabel}>Registered Profile</ThemedText></View>
        <View style={[styles.photoBox, { backgroundColor: '#0f2a1c' }]}><ThemedText type="small" style={[styles.photoLabel, { color: ACCENT_GREEN }]}>Live Selfie Scan</ThemedText></View>
      </View>

      <View style={styles.matchBanner}><ThemedText style={{ color: ACCENT_GREEN }}>🔄 Identity verified successfully by our biometric secure matching algorithm.</ThemedText></View>

      <View style={styles.tipsCard}>
        <ThemedText type="smallBold" style={{ color: '#fff' }}>Safe-Ride Best Practices</ThemedText>
        <ThemedText type="small" themeColor="textSecondary">🪖 Provide the pink safety helmet to the rider before starting.</ThemedText>
        <ThemedText type="small" themeColor="textSecondary">🛡️ Ensure the trip sharing PIN matches on both phones.</ThemedText>
      </View>

      <TouchableOpacity style={styles.matchButton} onPress={() => router.replace('/(trip)/active-navigation')}>
        <ThemedText style={{ color: '#0B0B0C', fontWeight: '700' }}>🔗 Start Secure Trip</ThemedText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C', padding: Spacing.four, gap: Spacing.two },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  progressPill: { width: 100, height: 8, borderRadius: 4, backgroundColor: PINK },
  photosRow: { flexDirection: 'row', gap: Spacing.two },
  photoBox: { flex: 1, height: 160, borderRadius: 10, backgroundColor: '#141517', justifyContent: 'flex-end', padding: Spacing.two },
  photoLabel: { textAlign: 'center' },
  matchBanner: { backgroundColor: '#0f2a1c', borderRadius: 12, padding: Spacing.three },
  tipsCard: { backgroundColor: '#141517', borderRadius: 12, padding: Spacing.three, gap: Spacing.two },
  matchButton: { backgroundColor: ACCENT_GREEN, borderRadius: 14, paddingVertical: Spacing.three, alignItems: 'center', marginTop: Spacing.two },
});