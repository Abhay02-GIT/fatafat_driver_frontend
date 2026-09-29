import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';

export default function AddBankAccountScreen() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', accountNumber: '', confirmAccountNumber: '', ifsc: '' });
  const [verifiedBank, setVerifiedBank] = useState<string | null>(null);
  const update = (k: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><ThemedText style={{ color: '#fff', fontSize: 20 }}>←</ThemedText></TouchableOpacity>
        <ThemedText type="subtitle" style={{ color: '#fff' }}>Bank Details</ThemedText>
        <View style={{ width: 20 }} />
      </View>

      <ThemedText type="subtitle" style={{ color: '#fff' }}>Payout Destination</ThemedText>
      <ThemedText themeColor="textSecondary">Enter your bank account details securely to receive your earnings.</ThemedText>

      <ThemedText type="smallBold" style={{ color: '#fff' }}>Account Holder Name</ThemedText>
      <TextInput style={styles.input} placeholder="As it appears on your bank statement" placeholderTextColor="#60646C" value={form.name} onChangeText={update('name')} />

      <ThemedText type="smallBold" style={{ color: '#fff' }}>Account Number</ThemedText>
      <TextInput style={styles.input} placeholder="Enter account number" placeholderTextColor="#60646C" keyboardType="number-pad" value={form.accountNumber} onChangeText={update('accountNumber')} />

      <ThemedText type="smallBold" style={{ color: '#fff' }}>Confirm Account Number</ThemedText>
      <TextInput style={styles.input} placeholder="Re-enter account number" placeholderTextColor="#60646C" keyboardType="number-pad" value={form.confirmAccountNumber} onChangeText={update('confirmAccountNumber')} />

      <ThemedText type="smallBold" style={{ color: '#fff' }}>IFSC Code</ThemedText>
      <View style={styles.ifscRow}>
        <TextInput style={[styles.input, { flex: 1 }]} placeholder="E.G. HDFC0001234" placeholderTextColor="#60646C" autoCapitalize="characters" value={form.ifsc} onChangeText={update('ifsc')} />
        <TouchableOpacity onPress={() => setVerifiedBank('State Bank of India')}><ThemedText style={{ color: ACCENT }}>Verify</ThemedText></TouchableOpacity>
      </View>
      {verifiedBank && (
        <View style={styles.verifiedBox}>
          <ThemedText style={{ color: ACCENT }}>✓ </ThemedText>
          <View><ThemedText type="smallBold" style={{ color: '#fff' }}>{verifiedBank}</ThemedText><ThemedText type="small" themeColor="textSecondary">Connaught Place Branch, New Delhi</ThemedText></View>
        </View>
      )}

      <View style={styles.lockBox}><ThemedText type="small" themeColor="textSecondary">🔒 Your bank details are encrypted and stored securely.</ThemedText></View>

      <TouchableOpacity style={styles.saveButton} onPress={() => router.back()}>
        <ThemedText style={{ color: '#0B0B0C', fontWeight: '700' }}>Save Bank Details</ThemedText>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C' },
  content: { padding: Spacing.four, gap: Spacing.two, paddingBottom: Spacing.six },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  input: { backgroundColor: '#ffffff', borderRadius: 10, paddingHorizontal: Spacing.three, paddingVertical: Spacing.two, color: '#000', fontSize: 15 },
  ifscRow: { flexDirection: 'row', gap: Spacing.two, alignItems: 'center' },
  verifiedBox: { flexDirection: 'row', backgroundColor: '#141517', borderRadius: 10, padding: Spacing.three, gap: 4 },
  lockBox: { backgroundColor: '#141517', borderRadius: 10, padding: Spacing.three, marginTop: Spacing.two },
  saveButton: { backgroundColor: ACCENT, borderRadius: 14, paddingVertical: Spacing.three, alignItems: 'center', marginTop: Spacing.three },
});