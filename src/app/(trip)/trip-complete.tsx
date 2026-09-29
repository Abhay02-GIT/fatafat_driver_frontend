import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';
const TAGS = ['Polite', 'On Time', 'Clean'];

export default function TripCompleteScreen() {
  const router = useRouter();
  const [rating, setRating] = useState(5);
  const [selectedTags, setSelectedTags] = useState<string[]>(['Polite', 'On Time']);

  const toggleTag = (tag: string) => setSelectedTags((tags) => (tags.includes(tag) ? tags.filter((t) => t !== tag) : [...tags, tag]));
  const finish = () => router.replace('/(tabs)'); // TODO: submit rating + tags to backend

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconCircle}><ThemedText style={{ fontSize: 36, color: '#0B0B0C' }}>✓</ThemedText></View>
      <ThemedText type="subtitle" style={styles.title}>Trip Complete</ThemedText>

      <View style={styles.earningCard}><ThemedText type="small" themeColor="textSecondary">FINAL EARNING</ThemedText><ThemedText type="title" style={{ color: ACCENT }}>₹210</ThemedText></View>

      <View style={styles.rateCard}>
        <ThemedText type="smallBold" style={{ color: '#fff' }}>Rate your rider</ThemedText>
        <View style={styles.starsRow}>
          {[1, 2, 3, 4, 5].map((n) => (
            <TouchableOpacity key={n} onPress={() => setRating(n)}><ThemedText style={{ fontSize: 28, color: n <= rating ? '#F59E0B' : '#2E3135' }}>★</ThemedText></TouchableOpacity>
          ))}
        </View>
        <View style={styles.tagsRow}>
          {TAGS.map((tag) => {
            const active = selectedTags.includes(tag);
            return (
              <TouchableOpacity key={tag} style={[styles.tagPill, active && styles.tagPillActive]} onPress={() => toggleTag(tag)}>
                <ThemedText type="small" style={{ color: active ? '#0B0B0C' : '#fff' }}>{tag}</ThemedText>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View style={{ flex: 1 }} />

      <TouchableOpacity style={styles.submitButton} onPress={finish}><ThemedText style={{ color: '#0B0B0C', fontWeight: '700' }}>Submit & Go Online</ThemedText></TouchableOpacity>
      <TouchableOpacity style={styles.stayOfflineButton} onPress={finish}><ThemedText style={{ color: '#fff' }}>Stay Offline</ThemedText></TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C', paddingHorizontal: Spacing.four, paddingTop: Spacing.six, paddingBottom: Spacing.four, gap: Spacing.three },
  iconCircle: { width: 90, height: 90, borderRadius: 45, backgroundColor: ACCENT, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' },
  title: { color: '#fff', textAlign: 'center' },
  earningCard: { backgroundColor: '#141517', borderRadius: 14, padding: Spacing.three, alignItems: 'center', gap: 4 },
  rateCard: { backgroundColor: '#141517', borderRadius: 14, padding: Spacing.three, gap: Spacing.three, alignItems: 'center' },
  starsRow: { flexDirection: 'row', gap: Spacing.two },
  tagsRow: { flexDirection: 'row', gap: Spacing.two },
  tagPill: { paddingHorizontal: Spacing.three, paddingVertical: Spacing.one, borderRadius: 16, backgroundColor: '#2E3135' },
  tagPillActive: { backgroundColor: ACCENT },
  submitButton: { backgroundColor: ACCENT, borderRadius: 14, paddingVertical: Spacing.three, alignItems: 'center' },
  stayOfflineButton: { borderWidth: 1, borderColor: '#2E3135', borderRadius: 14, paddingVertical: Spacing.three, alignItems: 'center' },
});