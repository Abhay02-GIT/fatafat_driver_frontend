import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Switch, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';
const SOS_RED = '#ef4444';

export default function SafetyCentreScreen() {
  const router = useRouter();
  const [shareLive, setShareLive] = useState(true);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View style={styles.avatar} />
        <ThemedText type="subtitle" style={{ color: '#fff' }}>Safety Centre</ThemedText>
        <TouchableOpacity onPress={() => router.push('/notifications')}><ThemedText style={{ fontSize: 18 }}>🔔</ThemedText></TouchableOpacity>
      </View>

      <View style={styles.sosCard}>
        <ThemedText type="smallBold" style={{ color: SOS_RED }}>Emergency SOS</ThemedText>
        <ThemedText type="small" themeColor="textSecondary">Hold to alert emergency services and your trusted contacts immediately.</ThemedText>
        <TouchableOpacity style={styles.sosButton} onPress={() => router.push('/(trip)/sos-active')}>
          <ThemedText style={{ color: '#fff', fontWeight: '700' }}>⚠ HOLD FOR 3 SECONDS</ThemedText>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.cardTop}><ThemedText>📍</ThemedText><ThemedText type="smallBold" style={{ color: '#fff' }}>Share Live Trip</ThemedText></View>
        <ThemedText type="small" themeColor="textSecondary">Automatically share your location and trip status with trusted contacts.</ThemedText>
        <View style={styles.toggleRow}>
          <ThemedText type="small" style={{ color: ACCENT }}>{shareLive ? 'Active' : 'Off'}</ThemedText>
          <Switch value={shareLive} onValueChange={setShareLive} trackColor={{ true: ACCENT }} />
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardTop}><ThemedText>🛡️</ThemedText><ThemedText type="smallBold" style={{ color: '#fff' }}>Insurance Coverage</ThemedText></View>
        <ThemedText type="small" themeColor="textSecondary">You are protected with ₹10L Term Life & Accidental coverage while online.</ThemedText>
        <TouchableOpacity><ThemedText type="small" style={{ color: '#fff' }}>View Policy →</ThemedText></TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.cardTop}><ThemedText>📖</ThemedText><ThemedText type="smallBold" style={{ color: '#fff' }}>Safety Guidelines</ThemedText></View>
        <ThemedText type="small" themeColor="textSecondary">Review community standards, de-escalation techniques, and best practices for a safe ride experience.</ThemedText>
        <TouchableOpacity style={styles.smallButton}><ThemedText type="small" style={{ color: '#fff' }}>Read Guidelines</ThemedText></TouchableOpacity>
      </View>

      <View style={styles.contactsCard}>
        <View style={styles.cardTop}><ThemedText type="smallBold" style={{ color: '#fff' }}>Trusted Contacts</ThemedText><ThemedText type="small" style={{ color: ACCENT }}>+ ADD</ThemedText></View>
        {[{ n: 'Maria (Wife)', p: '+91 98765 43210' }, { n: 'Rahul (Brother)', p: '+91 87654 32109' }].map((c) => (
          <View key={c.n} style={styles.contactRow}>
            <View style={styles.contactAvatar}><ThemedText style={{ color: '#fff' }}>{c.n[0]}</ThemedText></View>
            <View style={{ flex: 1 }}><ThemedText type="smallBold" style={{ color: '#fff' }}>{c.n}</ThemedText><ThemedText type="small" themeColor="textSecondary">{c.p}</ThemedText></View>
            <ThemedText style={{ color: ACCENT }}>✓</ThemedText>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C' },
  content: { padding: Spacing.four, gap: Spacing.three, paddingBottom: Spacing.six },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  avatar: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#2E3135' },
  sosCard: { backgroundColor: '#2a1213', borderRadius: 14, padding: Spacing.three, gap: Spacing.two },
  sosButton: { backgroundColor: '#2E3135', borderRadius: 12, paddingVertical: Spacing.three, alignItems: 'center' },
  card: { backgroundColor: '#141517', borderRadius: 14, padding: Spacing.three, gap: Spacing.two },
  cardTop: { flexDirection: 'row', gap: Spacing.two, alignItems: 'center' },
  toggleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  smallButton: { backgroundColor: '#2E3135', borderRadius: 10, paddingVertical: Spacing.two, alignItems: 'center' },
  contactsCard: { backgroundColor: '#141517', borderRadius: 14, padding: Spacing.three, gap: Spacing.three },
  contactRow: { flexDirection: 'row', gap: Spacing.two, alignItems: 'center' },
  contactAvatar: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#2E3135', alignItems: 'center', justifyContent: 'center' },
});