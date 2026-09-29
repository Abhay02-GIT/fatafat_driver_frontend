import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';

export default function EnRoutePickupScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.turnCard}>
        <ThemedText style={{ fontSize: 18 }}>➜</ThemedText>
        <View style={{ flex: 1 }}><ThemedText type="smallBold" style={{ color: '#fff' }}>Turn right on Market St</ThemedText><ThemedText type="small" themeColor="textSecondary">In 500 ft • 1 min</ThemedText></View>
        <ThemedText style={{ fontSize: 18 }}>🔊</ThemedText>
      </SafeAreaView>

      <View style={styles.map}>
        <TouchableOpacity style={styles.crosshair}><ThemedText style={{ fontSize: 18 }}>◎</ThemedText></TouchableOpacity>
        <TouchableOpacity style={styles.sos}><ThemedText style={{ color: '#ef4444', fontSize: 18 }}>✱</ThemedText></TouchableOpacity>
      </View>

      <SafeAreaView edges={['bottom']} style={styles.sheet}>
        <View style={styles.sheetHandle} />
        <View style={styles.riderRow}>
          <View style={styles.avatar} />
          <View style={{ flex: 1 }}><ThemedText type="smallBold" style={{ color: '#fff' }}>Anjali</ThemedText><ThemedText type="small" style={{ color: '#F59E0B' }}>⭐ 4.8</ThemedText></View>
          <View style={{ alignItems: 'flex-end' }}><ThemedText type="smallBold" style={{ color: '#fff' }}>4 min</ThemedText><ThemedText type="small" themeColor="textSecondary">1.2 mi away</ThemedText></View>
        </View>

        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.secondaryButton} onPress={() => router.push('/(trip)/calling')}><ThemedText style={{ color: '#fff' }}>📞 Call</ThemedText></TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton} onPress={() => router.push('/(trip)/chat')}><ThemedText style={{ color: '#fff' }}>💬 Chat</ThemedText></TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.arrivedButton} onPress={() => router.replace('/(trip)/arrived-waiting')}><ThemedText style={{ color: ACCENT, fontWeight: '700' }}>Arrived</ThemedText></TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C' },
  turnCard: { flexDirection: 'row', alignItems: 'center', gap: Spacing.two, margin: Spacing.four, backgroundColor: '#141517', borderRadius: 14, padding: Spacing.three },
  map: { flex: 1, position: 'relative' },
  crosshair: { position: 'absolute', bottom: Spacing.four, left: Spacing.four, width: 40, height: 40, borderRadius: 20, backgroundColor: '#141517', alignItems: 'center', justifyContent: 'center' },
  sos: { position: 'absolute', top: Spacing.four, right: Spacing.four, width: 40, height: 40, borderRadius: 20, backgroundColor: '#141517', alignItems: 'center', justifyContent: 'center' },
  sheet: { backgroundColor: '#141517', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: Spacing.four, gap: Spacing.three },
  sheetHandle: { width: 40, height: 4, borderRadius: 2, backgroundColor: '#2E3135', alignSelf: 'center' },
  riderRow: { flexDirection: 'row', gap: Spacing.three, alignItems: 'center' },
  avatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#2E3135' },
  actionsRow: { flexDirection: 'row', gap: Spacing.two },
  secondaryButton: { flex: 1, backgroundColor: '#2E3135', borderRadius: 10, paddingVertical: Spacing.two, alignItems: 'center' },
  arrivedButton: { alignItems: 'center', paddingVertical: Spacing.one },
});