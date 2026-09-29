import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const PINK = '#ec4899';

export default function SafetyShieldSosScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.banner}><ThemedText style={{ color: '#fff', fontWeight: '700' }}>🛡️ Safe Ride Guaranteed Protection Active</ThemedText></View>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><ThemedText style={{ color: '#fff', fontSize: 20 }}>←</ThemedText></TouchableOpacity>
        <ThemedText type="subtitle" style={{ color: '#fff' }}>Safety Shield & SOS</ThemedText>
        <View style={styles.womenOnlyPill}><ThemedText type="small" style={{ color: '#fff' }}>📍 WOMEN ONLY</ThemedText></View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardTop}><ThemedText style={{ color: PINK }}>● Live Location Sharing Active</ThemedText><View style={styles.toggleOn} /></View>
        <View style={styles.divider} />
        <ThemedText type="smallBold" style={{ color: '#fff' }}>Emergency Contacts Notified</ThemedText>
        <ThemedText type="small" themeColor="textSecondary">👥 Husband, Mom, and 1 other are tracking this trip live.</ThemedText>
        <ThemedText type="smallBold" style={{ color: '#fff' }}>Secured Dispatch Connection</ThemedText>
        <ThemedText type="small" themeColor="textSecondary">🛡️ Dedicated Pink dispatch control room is monitoring your route.</ThemedText>
      </View>

      <View style={styles.routeCard}><ThemedText type="smallBold" themeColor="textSecondary">ROUTE PATROL ACTIVE</ThemedText></View>

      <TouchableOpacity style={styles.sosButton} onPress={() => router.push('/(trip)/sos-active')}>
        <ThemedText type="smallBold" style={{ color: '#fff' }}>CRITICAL EMERGENCY</ThemedText>
        <ThemedText style={{ color: '#fde2e2', textAlign: 'center' }}>Immediate Police & Dispatch Alarm</ThemedText>
        <ThemedText type="small" style={{ color: '#fde2e2', textAlign: 'center' }}>Pressing will alert emergency services, sound the alarm, and share instant audio recording.</ThemedText>
        <ThemedText type="title" style={{ color: '#fff' }}>SOS</ThemedText>
      </TouchableOpacity>

      <TouchableOpacity style={styles.supportButton}><ThemedText style={{ color: PINK }}>📞 Call Pink Support Desk</ThemedText></TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C', padding: Spacing.four, gap: Spacing.three },
  banner: { backgroundColor: PINK, borderRadius: 10, padding: Spacing.two, alignItems: 'center' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  womenOnlyPill: { backgroundColor: PINK, borderRadius: 12, paddingHorizontal: Spacing.two, paddingVertical: 4 },
  card: { backgroundColor: '#141517', borderRadius: 14, padding: Spacing.three, gap: Spacing.one },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  toggleOn: { width: 40, height: 22, borderRadius: 11, backgroundColor: PINK },
  divider: { height: 1, backgroundColor: '#2E3135', marginVertical: Spacing.one },
  routeCard: { backgroundColor: '#141517', borderRadius: 14, padding: Spacing.three, minHeight: 60 },
  sosButton: { backgroundColor: '#3a1216', borderRadius: 14, padding: Spacing.four, gap: Spacing.two, alignItems: 'center' },
  supportButton: { borderWidth: 1, borderColor: PINK, borderRadius: 12, paddingVertical: Spacing.three, alignItems: 'center' },
});