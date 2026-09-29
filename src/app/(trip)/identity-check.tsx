import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

// TODO: only shown when the driver's registered vehicle type is 'pink-scooty'
export default function IdentityCheckScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><ThemedText style={{ color: '#fff', fontSize: 20 }}>←</ThemedText></TouchableOpacity>
        <ThemedText type="subtitle" style={{ color: '#fff' }}>Identity Check</ThemedText>
        <ThemedText style={{ fontSize: 18 }}>🛡️</ThemedText>
      </View>

      <ThemedText type="subtitle" style={{ color: '#fff' }}>Pink Scooty Verification</ThemedText>
      <ThemedText themeColor="textSecondary">Confirm if the rider matches the photo below to ensure platform safety.</ThemedText>

      <View style={styles.photoBox} />

      <View style={styles.nameRow}>
        <ThemedText type="subtitle" style={{ color: '#fff' }}>Sarah Jenkins</ThemedText>
        <View style={styles.verifiedPill}><ThemedText type="small" style={{ color: '#22C55E' }}>✓ Verified Profile</ThemedText></View>
      </View>

      <View style={styles.infoBox}><ThemedText type="small" themeColor="textSecondary">ⓘ Refusing a ride due to a mismatch is required by policy and will not affect your acceptance rate.</ThemedText></View>

      <TouchableOpacity style={styles.matchButton} onPress={() => router.replace('/(trip)/active-navigation')}><ThemedText style={{ color: '#0B0B0C', fontWeight: '700' }}>✓ Identity Matches - Start Trip</ThemedText></TouchableOpacity>
      <TouchableOpacity style={styles.mismatchButton} onPress={() => router.back()}><ThemedText style={{ color: '#ef4444', fontWeight: '700' }}>⚠ Identity Mismatch</ThemedText></TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C', padding: Spacing.four, gap: Spacing.three },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  photoBox: { flex: 1, minHeight: 220, backgroundColor: '#141517', borderRadius: 14 },
  nameRow: { alignItems: 'center', gap: Spacing.two },
  verifiedPill: { backgroundColor: '#0f2a17', borderRadius: 12, paddingHorizontal: Spacing.three, paddingVertical: 4 },
  infoBox: { backgroundColor: '#141517', borderRadius: 12, padding: Spacing.three },
  matchButton: { backgroundColor: '#22C55E', borderRadius: 14, paddingVertical: Spacing.three, alignItems: 'center' },
  mismatchButton: { borderWidth: 1, borderColor: '#ef4444', borderRadius: 14, paddingVertical: Spacing.three, alignItems: 'center' },
});