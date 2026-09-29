import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const CATEGORIES = [
  { icon: '🧭', label: 'Trip Issues' },
  { icon: '💳', label: 'Earnings & Payouts' },
  { icon: '👤', label: 'Account & Security' },
  { icon: '🛡️', label: 'Safety & Emergency', highlight: true },
];
const ARTICLES = ['How do I update my vehicle information?', 'Understanding my weekly payout statement', 'Reporting a rude passenger'];

export default function HelpSupportScreen() {
  const router = useRouter();
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><ThemedText style={{ color: '#fff', fontSize: 20 }}>←</ThemedText></TouchableOpacity>
        <ThemedText type="subtitle" style={{ color: '#fff' }}>Rider</ThemedText>
        <ThemedText style={{ fontSize: 18 }}>🔔</ThemedText>
      </View>

      <ThemedText type="subtitle" style={{ color: '#fff' }}>Help & Support</ThemedText>
      <View style={styles.searchBox}><ThemedText themeColor="textSecondary">🔍 Search for help...</ThemedText></View>

      <View style={styles.sectionHeader}><ThemedText type="smallBold" style={{ color: '#fff' }}>Recent Trip</ThemedText><ThemedText type="small" themeColor="textSecondary">See All</ThemedText></View>
      <View style={styles.tripCard}>
        <View style={styles.tripTop}>
          <ThemedText>🚗</ThemedText>
          <View style={{ flex: 1 }}><ThemedText type="smallBold" style={{ color: '#fff' }}>Downtown to Airport</ThemedText><ThemedText type="small" themeColor="textSecondary">Today, 2:30 PM • Trip #TRP-8921</ThemedText></View>
          <ThemedText type="small" style={{ color: '#22C55E' }}>Completed</ThemedText>
        </View>
        <TouchableOpacity style={styles.reportButton}><ThemedText type="small" style={{ color: '#fff' }}>⚠ Report Issue with this Trip</ThemedText></TouchableOpacity>
      </View>

      <ThemedText type="smallBold" style={{ color: '#fff' }}>Categories</ThemedText>
      <View style={styles.grid}>
        {CATEGORIES.map((c) => (
          <TouchableOpacity key={c.label} style={[styles.categoryCard, c.highlight && styles.categoryCardHighlight]}>
            <ThemedText style={{ fontSize: 20 }}>{c.icon}</ThemedText>
            <ThemedText type="smallBold" style={{ color: c.highlight ? '#ef4444' : '#fff' }}>{c.label}</ThemedText>
          </TouchableOpacity>
        ))}
      </View>

      <ThemedText type="smallBold" style={{ color: '#fff' }}>Popular Articles</ThemedText>
      {ARTICLES.map((a) => (
        <TouchableOpacity key={a} style={styles.articleRow}><ThemedText style={{ color: '#fff', flex: 1 }}>{a}</ThemedText><ThemedText themeColor="textSecondary">›</ThemedText></TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.chatButton}><ThemedText style={{ color: '#fff' }}>💬 Start Live Chat</ThemedText></TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C' },
  content: { padding: Spacing.four, gap: Spacing.three, paddingBottom: Spacing.six },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  searchBox: { backgroundColor: '#141517', borderRadius: 10, padding: Spacing.three },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  tripCard: { backgroundColor: '#141517', borderRadius: 12, padding: Spacing.three, gap: Spacing.two },
  tripTop: { flexDirection: 'row', gap: Spacing.two, alignItems: 'center' },
  reportButton: { backgroundColor: '#2E3135', borderRadius: 10, paddingVertical: Spacing.two, alignItems: 'center' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.three },
  categoryCard: { width: '47%', backgroundColor: '#141517', borderRadius: 12, padding: Spacing.three, gap: Spacing.two, alignItems: 'center' },
  categoryCardHighlight: { borderWidth: 1, borderColor: '#ef4444' },
  articleRow: { flexDirection: 'row', backgroundColor: '#141517', borderRadius: 10, padding: Spacing.three, alignItems: 'center' },
  chatButton: { borderWidth: 1, borderColor: '#2E3135', borderRadius: 12, paddingVertical: Spacing.three, alignItems: 'center' },
});