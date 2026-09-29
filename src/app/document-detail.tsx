import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

// TODO: replace with real document lookup by docId
const MOCK_DOC = {
  title: "Driver's License",
  docNumber: 'DL-****-****-8901',
  issuedState: 'California (CA)',
  expiry: 'Oct 14, 2026',
  status: 'Valid',
  note: 'Your Driver\'s License is currently valid and approved for platform use. We will notify you 30 days before expiration. Keep physical copies available during trips as per local regulations.',
};

export default function DocumentDetailScreen() {
  const router = useRouter();
  const { docId } = useLocalSearchParams<{ docId?: string }>();
  const doc = MOCK_DOC; // TODO: look up by docId

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><ThemedText style={{ color: '#fff', fontSize: 20 }}>←</ThemedText></TouchableOpacity>
        <ThemedText type="subtitle" style={{ color: '#fff' }}>{doc.title}</ThemedText>
        <ThemedText style={{ color: '#fff' }}>⋮</ThemedText>
      </View>

      <View style={styles.previewBox}>
        <View style={styles.maskedPill} />
        <ThemedText style={{ fontSize: 24 }}>🪪</ThemedText>
        <ThemedText type="small" themeColor="textSecondary">PREVIEW MASKED</ThemedText>
      </View>

      <ThemedText type="smallBold" style={{ color: '#fff' }}>Details</ThemedText>
      <View style={styles.fieldBox}><ThemedText type="small" themeColor="textSecondary">Document Number</ThemedText><ThemedText style={{ color: '#fff' }}>{doc.docNumber}</ThemedText></View>
      <View style={styles.fieldBox}><ThemedText type="small" themeColor="textSecondary">Issued State</ThemedText><ThemedText style={{ color: '#fff' }}>{doc.issuedState}</ThemedText></View>
      <View style={styles.row2}>
        <View style={[styles.fieldBox, { flex: 1 }]}><ThemedText type="small" themeColor="textSecondary">Expiration Date</ThemedText><ThemedText style={{ color: '#fff' }}>{doc.expiry}</ThemedText></View>
        <View style={[styles.fieldBox, { flex: 1 }]}><ThemedText type="small" themeColor="textSecondary">Status</ThemedText><ThemedText style={{ color: '#22C55E' }}>{doc.status}</ThemedText></View>
      </View>

      <View style={styles.infoBox}><ThemedText type="small" themeColor="textSecondary">ⓘ {doc.note}</ThemedText></View>

      <View style={{ flex: 1 }} />
      <TouchableOpacity style={styles.updateButton} onPress={() => router.push({ pathname: '/(auth)/upload-document', params: { title: doc.title, docId } })}>
        <ThemedText style={{ color: '#0B0B0C', fontWeight: '700' }}>📄 Update Document</ThemedText>
      </TouchableOpacity>
      <ThemedText type="small" themeColor="textSecondary" style={{ textAlign: 'center' }}>Updating your document will place your account under review temporarily.</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C', padding: Spacing.four, gap: Spacing.three, paddingBottom: Spacing.four },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  previewBox: { backgroundColor: '#141517', borderRadius: 12, alignItems: 'center', justifyContent: 'center', gap: 4, paddingVertical: Spacing.six, position: 'relative' },
  maskedPill: { position: 'absolute', top: Spacing.two, right: Spacing.two, width: 60, height: 16, borderRadius: 8, backgroundColor: '#22C55E' },
  fieldBox: { backgroundColor: '#141517', borderRadius: 10, padding: Spacing.three, gap: 4 },
  row2: { flexDirection: 'row', gap: Spacing.three },
  infoBox: { backgroundColor: '#141517', borderRadius: 12, padding: Spacing.three },
  updateButton: { backgroundColor: '#22C55E', borderRadius: 14, paddingVertical: Spacing.three, alignItems: 'center' },
});