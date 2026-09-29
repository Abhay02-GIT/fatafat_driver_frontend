import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';

// TODO: shown instead of the generic incoming-request screen when driver's vehicle type is 'parcel'
export default function DeliveryRequestScreen() {
  const router = useRouter();
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    if (secondsLeft <= 0) { router.replace('/(trip)/request-expired'); return; }
    const t = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [secondsLeft, router]);

  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.topArea}>
        <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}><ThemedText style={{ color: '#fff', fontSize: 18 }}>✕</ThemedText></TouchableOpacity>
        <View style={styles.parcelPill}><ThemedText style={{ color: '#fff' }}>📦 PARCEL</ThemedText></View>
      </SafeAreaView>

      <View style={styles.countdownWrap}>
        <View style={styles.countdownCircle}><ThemedText type="title" style={{ color: '#fff' }}>{secondsLeft}</ThemedText><ThemedText type="small" style={{ color: '#fff' }}>SECONDS</ThemedText></View>
      </View>

      <SafeAreaView edges={['bottom']} style={styles.sheet}>
        <View style={styles.sheetHandle} />
        <ThemedText type="small" themeColor="textSecondary">GUARANTEED DELIVERY FEE</ThemedText>
        <ThemedText type="title" style={{ color: ACCENT }}>₹14.50</ThemedText>
        <View style={styles.commissionPill}><ThemedText type="small" themeColor="textSecondary">Includes 18% Platform Commission</ThemedText></View>

        <View style={styles.parcelRow}>
          <ThemedText>📦</ThemedText>
          <View style={{ flex: 1 }}><ThemedText type="smallBold" style={{ color: '#fff' }}>Medium Box</ThemedText><ThemedText type="small" themeColor="textSecondary">Max 15 kg • Fragile</ThemedText></View>
          <ThemedText type="small" themeColor="textSecondary">Standard</ThemedText>
        </View>

        <View style={styles.routeRow}><View style={styles.dotWhite} /><View><ThemedText type="small" themeColor="textSecondary">PICKUP • 3 MIN AWAY (0.8 MI)</ThemedText><ThemedText type="smallBold" style={{ color: '#fff' }}>1024 Logistics Way, Loading Bay C</ThemedText></View></View>
        <View style={styles.routeRow}><View style={styles.dotOrange} /><View><ThemedText type="small" themeColor="textSecondary">DROPOFF • 14 MIN TRIP (4.2 MI)</ThemedText><ThemedText type="smallBold" style={{ color: '#fff' }}>885 Riverside Dr, Suite 400</ThemedText></View></View>

        <TouchableOpacity style={styles.acceptButton} onPress={() => router.replace('/(trip)/parcel-pickup-verification')}>
          <ThemedText style={{ color: '#0B0B0C', fontWeight: '700' }}>Accept Delivery →</ThemedText>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C' },
  topArea: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: Spacing.four },
  closeButton: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#141517', alignItems: 'center', justifyContent: 'center' },
  parcelPill: { backgroundColor: '#2E3135', borderRadius: 16, paddingHorizontal: Spacing.three, paddingVertical: Spacing.one },
  countdownWrap: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  countdownCircle: { width: 140, height: 140, borderRadius: 70, borderWidth: 4, borderColor: '#F59E0B', backgroundColor: '#0f2a17', alignItems: 'center', justifyContent: 'center' },
  sheet: { backgroundColor: '#141517', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: Spacing.four, gap: Spacing.two },
  sheetHandle: { width: 40, height: 4, borderRadius: 2, backgroundColor: '#2E3135', alignSelf: 'center' },
  commissionPill: { backgroundColor: '#0B0B0C', borderRadius: 10, padding: Spacing.two, alignSelf: 'flex-start' },
  parcelRow: { flexDirection: 'row', gap: Spacing.two, alignItems: 'center', backgroundColor: '#0B0B0C', borderRadius: 10, padding: Spacing.three, marginTop: Spacing.two },
  routeRow: { flexDirection: 'row', gap: Spacing.two, alignItems: 'flex-start' },
  dotWhite: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#fff', marginTop: 4 },
  dotOrange: { width: 10, height: 10, borderRadius: 2, backgroundColor: '#F59E0B', marginTop: 4 },
  acceptButton: { backgroundColor: ACCENT, borderRadius: 14, paddingVertical: Spacing.three, alignItems: 'center', marginTop: Spacing.two },
});