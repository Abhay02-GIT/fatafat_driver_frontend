import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

export default function SosActiveScreen() {
  const router = useRouter();
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const t = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [secondsLeft]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconCircle}><ThemedText style={{ fontSize: 32, color: '#ef4444' }}>✱</ThemedText></View>
      <ThemedText type="title" style={styles.title}>Connecting to Safety Desk...</ThemedText>
      <ThemedText style={styles.subtitle}>Your live location and trip details are being securely transmitted to emergency services.</ThemedText>
      <View style={styles.pulseCircle} />
      <ThemedText style={styles.cancelHint}>If this was a mistake, you can cancel within {secondsLeft} seconds.</ThemedText>
      <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()}>
        <ThemedText style={{ color: '#fff', fontWeight: '700' }}>✕ Cancel SOS</ThemedText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ef4444', padding: Spacing.four, alignItems: 'center', gap: Spacing.three, justifyContent: 'center' },
  iconCircle: { width: 64, height: 64, borderRadius: 32, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  title: { color: '#fff', textAlign: 'center' },
  subtitle: { color: '#fde2e2', textAlign: 'center' },
  pulseCircle: { width: 160, height: 60, borderRadius: 30, backgroundColor: 'rgba(255,255,255,0.3)' },
  cancelHint: { color: '#fde2e2', textAlign: 'center' },
  cancelButton: { backgroundColor: '#0B0B0C', borderRadius: 14, paddingVertical: Spacing.three, paddingHorizontal: Spacing.six },
});