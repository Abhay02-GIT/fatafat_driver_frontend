import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';

export default function SafetyCheckScreen() {
  const router = useRouter();
  const [handedOver, setHandedOver] = useState(false);
  const [secured, setSecured] = useState(false);
  const canConfirm = handedOver && secured;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><ThemedText style={{ color: '#fff', fontSize: 18 }}>✕</ThemedText></TouchableOpacity>
        <ThemedText type="subtitle" style={{ color: '#fff' }}>Safety Check</ThemedText>
        <ThemedText style={{ color: '#fff' }}>?</ThemedText>
      </View>

      <View style={styles.iconCircle}><ThemedText style={{ fontSize: 36 }}>🏍️</ThemedText><View style={styles.iconBadge}><ThemedText style={{ color: '#fff', fontSize: 12 }}>✓</ThemedText></View></View>

      <ThemedText type="subtitle" style={styles.title}>Pre-Ride Safety</ThemedText>
      <ThemedText themeColor="textSecondary" style={styles.subtitle}>Ensure passenger safety before commencing the trip. Both items must be verified.</ThemedText>

      <TouchableOpacity style={styles.checkCard} onPress={() => setHandedOver((v) => !v)}>
        <View><ThemedText type="smallBold" style={{ color: '#fff' }}>Helmet handed over</ThemedText><ThemedText type="small" themeColor="textSecondary">Passenger has received the safety helmet.</ThemedText></View>
        <View style={[styles.checkbox, handedOver && styles.checkboxChecked]} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.checkCard} onPress={() => setSecured((v) => !v)}>
        <View><ThemedText type="smallBold" style={{ color: '#fff' }}>Helmet secured</ThemedText><ThemedText type="small" themeColor="textSecondary">Strap is fastened properly on passenger.</ThemedText></View>
        <View style={[styles.checkbox, secured && styles.checkboxChecked]} />
      </TouchableOpacity>

      <View style={styles.tipBox}>
        <ThemedText type="smallBold" style={{ color: '#F59E0B' }}>ⓘ Two-Wheeler Safety</ThemedText>
        <ThemedText type="small" themeColor="textSecondary">Maintain safe speeds, especially in traffic. Avoid sudden braking or sharp turns. Ensure passenger sits straight and holds securely.</ThemedText>
      </View>

      <View style={{ flex: 1 }} />

      <TouchableOpacity
        style={[styles.confirmButton, canConfirm && styles.confirmButtonActive]}
        disabled={!canConfirm}
        onPress={() => router.replace('/(trip)/active-navigation')}>
        <ThemedText style={{ color: canConfirm ? '#0B0B0C' : '#60646C', fontWeight: '700' }}>🏍️ Confirm & Start Trip</ThemedText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C', paddingHorizontal: Spacing.four, gap: Spacing.three, paddingBottom: Spacing.four },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: Spacing.two },
  iconCircle: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#141517', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: Spacing.two },
  iconBadge: { position: 'absolute', bottom: 0, right: 0, width: 24, height: 24, borderRadius: 12, backgroundColor: ACCENT, alignItems: 'center', justifyContent: 'center' },
  title: { color: '#fff', textAlign: 'center' },
  subtitle: { textAlign: 'center' },
  checkCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#141517', borderRadius: 12, padding: Spacing.three, gap: Spacing.three },
  checkbox: { width: 22, height: 22, borderRadius: 4, borderWidth: 1, borderColor: '#2E3135' },
  checkboxChecked: { backgroundColor: ACCENT, borderColor: ACCENT },
  tipBox: { backgroundColor: '#141517', borderRadius: 12, padding: Spacing.three, gap: 4 },
  confirmButton: { backgroundColor: '#2E3135', borderRadius: 14, paddingVertical: Spacing.three, alignItems: 'center' },
  confirmButtonActive: { backgroundColor: ACCENT },
});