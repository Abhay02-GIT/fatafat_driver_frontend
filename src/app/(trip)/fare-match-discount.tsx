import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';
const ORIGINAL_FARE = 24.5;
const MATCHED_FARE = 19.5;

export default function FareMatchDiscountScreen() {
  const router = useRouter();
  const [uploaded, setUploaded] = useState(false);
  const coverage = ORIGINAL_FARE - MATCHED_FARE;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><ThemedText style={{ color: '#fff', fontSize: 18 }}>✕</ThemedText></TouchableOpacity>
        <ThemedText type="subtitle" style={{ color: '#fff' }}>Fare Match</ThemedText>
        <View style={{ width: 18 }} />
      </View>

      <View style={styles.infoCard}>
        <ThemedText style={{ fontSize: 18, color: ACCENT }}>%</ThemedText>
        <ThemedText type="smallBold" style={{ color: '#fff' }}>Match a lower fare</ThemedText>
        <ThemedText type="small" themeColor="textSecondary">Apply a discount to match a competitor's price for this rider. The difference is fully funded by the platform; your earnings are not affected.</ThemedText>
      </View>

      <ThemedText type="smallBold" themeColor="textSecondary">COMPETITOR EVIDENCE</ThemedText>
      {!uploaded ? (
        <TouchableOpacity style={styles.uploadBox} onPress={() => setUploaded(true)}>
          <ThemedText style={{ fontSize: 24 }}>🖼️</ThemedText>
          <ThemedText type="smallBold" style={{ color: '#fff' }}>Upload screenshot</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">Required to approve match</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">or</ThemedText>
          <View style={styles.takePhotoButton}><ThemedText style={{ color: '#fff' }}>📷 Take photo</ThemedText></View>
        </TouchableOpacity>
      ) : (
        <View style={styles.fileRow}><ThemedText>🖼️</ThemedText><ThemedText style={{ color: '#fff', flex: 1 }}>competitor_fare.png</ThemedText><TouchableOpacity onPress={() => setUploaded(false)}><ThemedText style={{ color: '#ef4444' }}>🗑️</ThemedText></TouchableOpacity></View>
      )}

      <ThemedText type="smallBold" themeColor="textSecondary">FARE CALCULATION</ThemedText>
      <View style={styles.calcCard}>
        <View style={styles.calcRow}><ThemedText style={{ color: '#fff' }}>Original Fare</ThemedText><ThemedText style={{ color: '#fff' }}>₹{ORIGINAL_FARE.toFixed(2)}</ThemedText></View>
        <View style={styles.calcRow}><ThemedText style={{ color: '#fff' }}>Matched Fare</ThemedText><View style={styles.matchedInput}><ThemedText style={{ color: '#fff' }}>₹ {MATCHED_FARE.toFixed(2)}</ThemedText></View></View>
        <View style={styles.divider} />
        <View style={styles.calcRow}><ThemedText style={{ color: ACCENT }}>Platform Coverage</ThemedText><ThemedText style={{ color: ACCENT }}>+₹{coverage.toFixed(2)}</ThemedText></View>
        <ThemedText type="small" themeColor="textSecondary">Your gross earnings remain ₹{ORIGINAL_FARE.toFixed(2)}. Platform funds the ₹{coverage.toFixed(2)} discount.</ThemedText>
      </View>

      <TouchableOpacity style={[styles.confirmButton, uploaded && styles.confirmButtonActive]} disabled={!uploaded} onPress={() => router.back()}>
        <ThemedText style={{ color: uploaded ? '#0B0B0C' : '#60646C', fontWeight: '700' }}>✓ Credit & Continue</ThemedText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C', padding: Spacing.four, gap: Spacing.two },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  infoCard: { backgroundColor: '#141517', borderRadius: 12, padding: Spacing.three, gap: 4 },
  uploadBox: { borderWidth: 1, borderColor: '#2E3135', borderStyle: 'dashed', borderRadius: 12, alignItems: 'center', gap: 4, padding: Spacing.four },
  takePhotoButton: { backgroundColor: '#2E3135', borderRadius: 10, paddingHorizontal: Spacing.three, paddingVertical: Spacing.one, marginTop: Spacing.one },
  fileRow: { flexDirection: 'row', gap: Spacing.two, alignItems: 'center', backgroundColor: '#141517', borderRadius: 10, padding: Spacing.three },
  calcCard: { backgroundColor: '#141517', borderRadius: 12, padding: Spacing.three, gap: Spacing.two },
  calcRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  matchedInput: { borderWidth: 1, borderColor: '#2E3135', borderRadius: 8, paddingHorizontal: Spacing.two, paddingVertical: 4 },
  divider: { height: 1, backgroundColor: '#2E3135' },
  confirmButton: { backgroundColor: '#2E3135', borderRadius: 14, paddingVertical: Spacing.three, alignItems: 'center', marginTop: Spacing.two },
  confirmButtonActive: { backgroundColor: ACCENT },
});