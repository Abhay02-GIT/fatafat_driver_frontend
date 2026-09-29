import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';
const OTP_LENGTH = 4;
const COD_AMOUNT = 45.5;
const DELIVERY_FEE = 8.25;

export default function DropVerificationCodScreen() {
  const router = useRouter();
  const [otp] = useState(['', '', '', '']); // TODO: wire real OTP input
  const [cashReceived, setCashReceived] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><ThemedText style={{ color: '#fff', fontSize: 20 }}>←</ThemedText></TouchableOpacity>
        <ThemedText type="subtitle" style={{ color: '#fff' }}>Drop Verification</ThemedText>
        <View style={{ width: 20 }} />
      </View>

      <View style={styles.orderCard}>
        <View style={styles.orderTop}>
          <View><ThemedText type="small" themeColor="textSecondary">ORDER ID</ThemedText><ThemedText type="smallBold" style={{ color: '#fff' }}>#PKG-8492-BX</ThemedText></View>
          <View style={styles.parcelPill}><ThemedText type="small" style={{ color: '#fff' }}>📦 Parcel</ThemedText></View>
        </View>
        <View style={styles.recipientRow}><View style={styles.avatar} /><View><ThemedText type="smallBold" style={{ color: '#fff' }}>Sarah Jenkins</ThemedText><ThemedText type="small" themeColor="textSecondary">+1 (555) 019-8472</ThemedText></View></View>
        <View style={styles.dropoffBox}>
          <ThemedText>📍</ThemedText>
          <View style={{ flex: 1 }}><ThemedText type="small" themeColor="textSecondary">DROP-OFF</ThemedText><ThemedText type="smallBold" style={{ color: '#fff' }}>1428 Elm Street, Apt 4B</ThemedText><ThemedText type="small" themeColor="textSecondary">Leave at front door if no answer.</ThemedText></View>
        </View>
      </View>

      <ThemedText type="subtitle" style={{ color: '#fff' }}>Verification Required</ThemedText>
      <View style={styles.otpCard}>
        <ThemedText type="smallBold" themeColor="textSecondary">ENTER RECIPIENT OTP</ThemedText>
        <View style={styles.otpRow}>{otp.map((d, i) => <View key={i} style={styles.otpBox}><ThemedText style={{ color: '#fff' }}>{d || '•'}</ThemedText></View>)}</View>
        <ThemedText type="small" themeColor="textSecondary" style={{ textAlign: 'center' }}>OR</ThemedText>
        <TouchableOpacity style={styles.signatureButton}><ThemedText style={{ color: '#fff' }}>✍️ Capture Signature</ThemedText></TouchableOpacity>
      </View>

      <View style={styles.codCard}>
        <ThemedText type="smallBold" style={{ color: '#F59E0B' }}>💵 Cash on Delivery</ThemedText>
        <View style={styles.codRow}><ThemedText style={{ color: '#fff' }}>Amount to Collect</ThemedText><ThemedText type="subtitle" style={{ color: '#fff' }}>₹{COD_AMOUNT.toFixed(2)}</ThemedText></View>
        <TouchableOpacity style={styles.checkboxRow} onPress={() => setCashReceived((v) => !v)}>
          <View style={[styles.checkbox, cashReceived && styles.checkboxChecked]} />
          <ThemedText style={{ color: '#fff' }}>I have received ₹{COD_AMOUNT.toFixed(2)} in cash</ThemedText>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }} />
      <View style={styles.feeRow}><ThemedText type="small" themeColor="textSecondary">YOUR EARNING — Delivery Fee</ThemedText><ThemedText type="smallBold" style={{ color: ACCENT }}>₹{DELIVERY_FEE.toFixed(2)}</ThemedText></View>
      <TouchableOpacity style={[styles.completeButton, cashReceived && styles.completeButtonActive]} disabled={!cashReceived} onPress={() => router.replace('/(tabs)')}>
        <ThemedText style={{ color: cashReceived ? '#0B0B0C' : '#60646C', fontWeight: '700' }}>✓ Complete Delivery</ThemedText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C', padding: Spacing.four, gap: Spacing.three },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  orderCard: { backgroundColor: '#141517', borderRadius: 14, padding: Spacing.three, gap: Spacing.two },
  orderTop: { flexDirection: 'row', justifyContent: 'space-between' },
  parcelPill: { backgroundColor: ACCENT, borderRadius: 8, paddingHorizontal: Spacing.two, paddingVertical: 2, alignSelf: 'flex-start' },
  recipientRow: { flexDirection: 'row', gap: Spacing.two, alignItems: 'center' },
  avatar: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#2E3135' },
  dropoffBox: { flexDirection: 'row', gap: Spacing.two, backgroundColor: '#0B0B0C', borderRadius: 10, padding: Spacing.three },
  otpCard: { backgroundColor: '#141517', borderRadius: 14, padding: Spacing.three, gap: Spacing.two, alignItems: 'center' },
  otpRow: { flexDirection: 'row', gap: Spacing.two },
  otpBox: { width: 48, height: 48, borderRadius: 10, borderWidth: 1, borderColor: '#2E3135', alignItems: 'center', justifyContent: 'center' },
  signatureButton: { backgroundColor: '#2E3135', borderRadius: 10, paddingVertical: Spacing.two, paddingHorizontal: Spacing.four },
  codCard: { borderWidth: 1, borderColor: '#F59E0B', borderRadius: 14, padding: Spacing.three, gap: Spacing.two },
  codRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  checkboxRow: { flexDirection: 'row', gap: Spacing.two, alignItems: 'center' },
  checkbox: { width: 20, height: 20, borderRadius: 4, borderWidth: 1, borderColor: '#2E3135' },
  checkboxChecked: { backgroundColor: ACCENT, borderColor: ACCENT },
  feeRow: { flexDirection: 'row', justifyContent: 'space-between' },
  completeButton: { backgroundColor: '#2E3135', borderRadius: 14, paddingVertical: Spacing.three, alignItems: 'center' },
  completeButtonActive: { backgroundColor: ACCENT },
});