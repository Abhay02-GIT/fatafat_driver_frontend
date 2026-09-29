import { markUploaded } from '@/lib/documents-store';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';

export default function UploadDocumentScreen() {
  const router = useRouter();
  const { title, docId } = useLocalSearchParams<{ title?: string; docId?: string }>();
  const [docNumber, setDocNumber] = useState('');
  const [expiry, setExpiry] = useState('');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity onPress={() => router.back()}>
        <ThemedText style={{ color: '#fff', fontSize: 20 }}>←</ThemedText>
      </TouchableOpacity>
      <ThemedText type="subtitle" style={{ color: '#fff' }}>
        Upload {title ?? 'Document'}
      </ThemedText>

      <View style={styles.infoBox}>
        <ThemedText type="small" themeColor="textSecondary">
          Clear photos are required — ensure all corners are visible, text is legible, and there is no glare. Place on a dark background.
        </ThemedText>
      </View>

      <TouchableOpacity style={styles.photoBox}>
        <ThemedText style={{ fontSize: 26 }}>📷</ThemedText>
        <ThemedText type="smallBold" style={{ color: '#fff' }}>Scan Front</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.photoBox}>
        <ThemedText style={{ fontSize: 26 }}>🖼️</ThemedText>
        <ThemedText type="smallBold" style={{ color: '#fff' }}>Upload Back</ThemedText>
      </TouchableOpacity>

      <View style={styles.row2}>
        <TouchableOpacity style={styles.sourceButton}>
          <ThemedText style={{ color: '#fff' }}>📷 Camera</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sourceButton}>
          <ThemedText style={{ color: '#fff' }}>🖼️ Gallery</ThemedText>
        </TouchableOpacity>
      </View>

      <ThemedText type="small" themeColor="textSecondary">Document Number</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Enter exact number from card"
        placeholderTextColor="#60646C"
        value={docNumber}
        onChangeText={setDocNumber}
      />

      <ThemedText type="small" themeColor="textSecondary">Expiry Date</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="mm/dd/yyyy"
        placeholderTextColor="#60646C"
        value={expiry}
        onChangeText={setExpiry}
      />

      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() => {
          if (docId) markUploaded(docId);
          router.back();
        }}>
        <ThemedText style={styles.uploadText}>Upload Document</ThemedText>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C' },
  content: { padding: Spacing.four, gap: Spacing.three, paddingBottom: Spacing.six },
  infoBox: { backgroundColor: '#141517', borderRadius: 12, padding: Spacing.three },
  photoBox: {
    height: 120, borderRadius: 12, backgroundColor: '#18191B',
    alignItems: 'center', justifyContent: 'center', gap: 6,
  },
  row2: { flexDirection: 'row', gap: Spacing.three },
  sourceButton: {
    flex: 1, backgroundColor: '#18191B', borderRadius: 10,
    paddingVertical: Spacing.two, alignItems: 'center',
  },
  input: {
    borderRadius: 10, borderWidth: 1, borderColor: '#2E3135', backgroundColor: '#18191B',
    color: '#fff', paddingHorizontal: Spacing.three, paddingVertical: Spacing.two, fontSize: 15,
  },
  uploadButton: { backgroundColor: ACCENT, borderRadius: 14, paddingVertical: Spacing.three, alignItems: 'center' },
  uploadText: { color: '#0B0B0C', fontWeight: '700', fontSize: 16 },
});