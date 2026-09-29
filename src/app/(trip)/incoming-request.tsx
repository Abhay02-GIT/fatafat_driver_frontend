import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';
const REQUEST_SECONDS = 10;

export default function IncomingRequestScreen() {
  const router = useRouter();
  const [secondsLeft, setSecondsLeft] = useState(REQUEST_SECONDS);

  useEffect(() => {
    if (secondsLeft <= 0) {
      router.back();
      return;
    }
    const t = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [secondsLeft, router]);

  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.header}>
        <View style={styles.avatar} />
        <ThemedText type="subtitle" style={{ color: '#fff' }}>Go Online</ThemedText>
        <ThemedText style={{ fontSize: 20 }}>🔔</ThemedText>
      </SafeAreaView>

      <View style={styles.map} />

      <SafeAreaView edges={['bottom']} style={styles.sheet}>
        <View style={styles.sheetHandle} />
        <View style={styles.requestTop}>
          <View>
            <ThemedText type="smallBold" style={{ color: ACCENT }}>INCOMING REQUEST</ThemedText>
            <ThemedText type="title" style={{ color: '#fff' }}>₹245</ThemedText>
          </View>
          <View style={styles.countdownCircle}><ThemedText type="subtitle" style={{ color: ACCENT }}>{secondsLeft}</ThemedText></View>
        </View>

        <View style={styles.routeBox}>
          <View style={styles.routeRow}><View style={styles.dotWhite} /><View><ThemedText type="small" themeColor="textSecondary">Pickup • 1.2km away</ThemedText><ThemedText type="smallBold" style={{ color: '#fff' }}>HSR Layout</ThemedText></View></View>
          <View style={styles.routeRow}><View style={styles.dotOrange} /><View><ThemedText type="small" themeColor="textSecondary">Drop-off</ThemedText><ThemedText type="smallBold" style={{ color: '#fff' }}>Indiranagar</ThemedText></View></View>
        </View>

        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.declineButton} onPress={() => router.back()}><ThemedText style={{ color: '#fff', fontWeight: '700' }}>Decline</ThemedText></TouchableOpacity>
          <TouchableOpacity style={styles.acceptButton} onPress={() => router.replace('/(trip)/trip-accepted-summary')}><ThemedText style={{ color: '#0B0B0C', fontWeight: '700' }}>Accept</ThemedText></TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: Spacing.four, paddingBottom: Spacing.two },
  avatar: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#2E3135' },
  map: { flex: 1, backgroundColor: '#0B0B0C' },
  sheet: { backgroundColor: '#141517', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: Spacing.four, gap: Spacing.three },
  sheetHandle: { width: 40, height: 4, borderRadius: 2, backgroundColor: '#2E3135', alignSelf: 'center' },
  requestTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  countdownCircle: { width: 48, height: 48, borderRadius: 24, borderWidth: 2, borderColor: ACCENT, alignItems: 'center', justifyContent: 'center' },
  routeBox: { gap: Spacing.two },
  routeRow: { flexDirection: 'row', gap: Spacing.two, alignItems: 'center' },
  dotWhite: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#fff' },
  dotOrange: { width: 10, height: 10, borderRadius: 2, backgroundColor: '#F59E0B' },
  actionsRow: { flexDirection: 'row', gap: Spacing.three },
  declineButton: { flex: 1, borderWidth: 1, borderColor: '#2E3135', borderRadius: 14, paddingVertical: Spacing.three, alignItems: 'center' },
  acceptButton: { flex: 1, backgroundColor: ACCENT, borderRadius: 14, paddingVertical: Spacing.three, alignItems: 'center' },
});