import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

export default function CallingScreen() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(45);
  const [muted, setMuted] = useState(false);
  const [speaker, setSpeaker] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
  const ss = String(seconds % 60).padStart(2, '0');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <ThemedText type="smallBold" style={{ color: '#22C55E', letterSpacing: 1 }}>CALLING RIDER...</ThemedText>
        <ThemedText style={{ color: '#fff', fontSize: 18 }}>{mm}:{ss}</ThemedText>
      </View>

      <View style={styles.avatarCircle} />
      <ThemedText type="subtitle" style={{ color: '#fff', textAlign: 'center' }}>Anjali</ThemedText>
      <View style={styles.routeChip}>
        <ThemedText type="small" style={{ color: '#22C55E' }}>HSR Layout</ThemedText>
        <ThemedText type="small" themeColor="textSecondary"> → </ThemedText>
        <ThemedText type="small" style={{ color: '#22C55E' }}>Indiranagar</ThemedText>
      </View>

      <View style={{ flex: 1 }} />

      <View style={styles.controlsRow}>
        <TouchableOpacity style={styles.controlButton} onPress={() => setSpeaker((v) => !v)}><ThemedText style={{ fontSize: 20 }}>{speaker ? '🔊' : '🔈'}</ThemedText></TouchableOpacity>
        <TouchableOpacity style={styles.endCallButton} onPress={() => router.back()}><ThemedText style={{ fontSize: 24 }}>📵</ThemedText></TouchableOpacity>
        <TouchableOpacity style={styles.controlButton} onPress={() => setMuted((v) => !v)}><ThemedText style={{ fontSize: 20 }}>{muted ? '🔇' : '🎤'}</ThemedText></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C', padding: Spacing.four, gap: Spacing.three },
  center: { alignItems: 'center', gap: 4, marginTop: Spacing.four },
  avatarCircle: { width: 160, height: 160, borderRadius: 80, borderWidth: 3, borderColor: '#22C55E', backgroundColor: '#141517', alignSelf: 'center' },
  routeChip: { flexDirection: 'row', alignSelf: 'center', backgroundColor: '#141517', borderRadius: 16, paddingHorizontal: Spacing.three, paddingVertical: Spacing.one },
  controlsRow: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: Spacing.four },
  controlButton: { width: 56, height: 56, borderRadius: 28, backgroundColor: '#141517', alignItems: 'center', justifyContent: 'center' },
  endCallButton: { width: 64, height: 64, borderRadius: 32, backgroundColor: '#ef4444', alignItems: 'center', justifyContent: 'center' },
});