import { useState } from 'react';
import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';
const SERVICE_HOURS_ACTIVE = true; // TODO: from backend

export default function HomeScreen() {
  const router = useRouter();
  const [isOnline, setIsOnline] = useState(false);
  const earnings = 1240;
  const trips = 5;

  if (!SERVICE_HOURS_ACTIVE) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatar} />
          <ThemedText type="subtitle" style={{ color: '#fff' }}>Go Online</ThemedText>
          <TouchableOpacity onPress={() => router.push('/notifications')}>
            <ThemedText style={{ fontSize: 20 }}>🔔</ThemedText>
          </TouchableOpacity>
        </View>
        <View style={styles.centerCard}>
          <ThemedText style={{ fontSize: 40 }}>🌙</ThemedText>
          <ThemedText type="subtitle" style={{ color: '#fff' }}>Service Paused</ThemedText>
          <ThemedText themeColor="textSecondary" style={{ textAlign: 'center' }}>
            Bike service is available from 7:00 AM to 10:00 PM
          </ThemedText>
          <ThemedText type="small" themeColor="textSecondary">SERVICE OPENS IN</ThemedText>
          <ThemedText type="subtitle" style={{ color: '#fff' }}>4h 20m</ThemedText>
        </View>
        <TouchableOpacity style={styles.disabledButton} disabled>
          <ThemedText themeColor="textSecondary">Go Online</ThemedText>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar} />
        <ThemedText type="subtitle" style={{ color: isOnline ? ACCENT : '#fff' }}>
          {isOnline ? 'Go Online' : 'Offline'}
        </ThemedText>
        <TouchableOpacity onPress={() => router.push('/notifications')}>
          <ThemedText style={{ fontSize: 20 }}>🔔</ThemedText>
        </TouchableOpacity>
      </View>

      {!isOnline ? (
        <View style={styles.offlineCard}>
          <ThemedText type="subtitle" style={{ color: '#fff' }}>You're Offline</ThemedText>
          <ThemedText themeColor="textSecondary">Tap to start receiving trip requests</ThemedText>
          <TouchableOpacity style={styles.powerButton} onPress={() => setIsOnline(true)}>
            <ThemedText style={{ fontSize: 24, color: '#fff' }}>⏻</ThemedText>
          </TouchableOpacity>
          <ThemedText type="smallBold" style={{ color: ACCENT }}>GO ONLINE</ThemedText>
        </View>
      ) : (
        <View style={styles.onlineArea}>
          <View style={styles.questBanner}>
            <View>
              <ThemedText type="smallBold" style={{ color: '#F59E0B' }}>Quest Active</ThemedText>
              <ThemedText type="small" style={{ color: '#fff' }}>Complete 2 more trips to earn ₹200</ThemedText>
            </View>
          </View>

          {/* DEV ONLY: remove once real trip-matching exists */}
          <TouchableOpacity style={styles.devButton} onPress={() => router.push('/(trip)/incoming-request')}>
            <ThemedText type="small" style={{ color: ACCENT }}>[dev] Simulate incoming trip request →</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.goOfflineButton} onPress={() => setIsOnline(false)}>
            <ThemedText themeColor="textSecondary">⏻ Go Offline</ThemedText>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <ThemedText type="small" themeColor="textSecondary">💳 EARNINGS</ThemedText>
          <ThemedText type="subtitle" style={{ color: '#fff' }}>₹{earnings.toLocaleString()}</ThemedText>
        </View>
        <View style={styles.statCard}>
          <ThemedText type="small" themeColor="textSecondary">🧭 TRIPS</ThemedText>
          <ThemedText type="subtitle" style={{ color: '#fff' }}>{trips}</ThemedText>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C', paddingHorizontal: Spacing.four, gap: Spacing.three },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: Spacing.two },
  avatar: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#2E3135' },
  offlineCard: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: Spacing.three },
  powerButton: { width: 90, height: 90, borderRadius: 45, borderWidth: 2, borderColor: '#2E3135', alignItems: 'center', justifyContent: 'center' },
  onlineArea: { flex: 1, justifyContent: 'flex-end', gap: Spacing.three },
  questBanner: { backgroundColor: '#7C5A0B', borderRadius: 12, padding: Spacing.three },
  devButton: { alignItems: 'center', paddingVertical: Spacing.two },
  goOfflineButton: { alignItems: 'center', paddingVertical: Spacing.two },
  statsRow: { flexDirection: 'row', gap: Spacing.three, marginBottom: Spacing.four },
  statCard: { flex: 1, backgroundColor: '#141517', borderRadius: 12, padding: Spacing.three, gap: 4 },
  centerCard: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: Spacing.two, backgroundColor: '#141517', borderRadius: 16, marginBottom: Spacing.three },
  disabledButton: { backgroundColor: '#2E3135', borderRadius: 14, paddingVertical: Spacing.three, alignItems: 'center', marginBottom: Spacing.four },
});