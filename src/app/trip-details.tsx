import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';

// TODO: replace with real trip passed via route params
const TRIP = {
  date: 'Oct 24, 2:30 PM',
  rider: 'Alex D.',
  rating: 4.5,
  distance: '12.4 mi',
  duration: '28 min',
  baseFare: 3.5,
  distanceFare: 14.88,
  timeFare: 6.16,
  platformFee: 4.91,
};

export default function TripDetailsScreen() {
  const router = useRouter();
  const gross = TRIP.baseFare + TRIP.distanceFare + TRIP.timeFare;
  const net = gross - TRIP.platformFee;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ThemedText style={{ color: '#fff', fontSize: 20 }}>←</ThemedText>
        </TouchableOpacity>
        <ThemedText type="subtitle" style={{ color: '#fff' }}>Trip Details</ThemedText>
        <ThemedText style={{ color: '#fff' }}>?</ThemedText>
      </View>

      <View style={styles.mapPlaceholder}>
        <ThemedText type="small" themeColor="textSecondary">{TRIP.date}</ThemedText>
      </View>

      <View style={styles.riderRow}>
        <View style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <ThemedText type="smallBold" style={{ color: '#fff' }}>{TRIP.rider}</ThemedText>
          <ThemedText type="small" style={{ color: '#F59E0B' }}>★ {TRIP.rating}</ThemedText>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <ThemedText type="smallBold" style={{ color: '#fff' }}>{TRIP.distance}</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">{TRIP.duration}</ThemedText>
        </View>
      </View>

      <View style={styles.receiptCard}>
        <ThemedText type="smallBold" style={{ color: '#fff' }}>Receipt</ThemedText>
        <ReceiptRow label="Base Fare" value={TRIP.baseFare} />
        <ReceiptRow label={`Distance (${TRIP.distance})`} value={TRIP.distanceFare} />
        <ReceiptRow label={`Time (${TRIP.duration})`} value={TRIP.timeFare} />
        <View style={styles.divider} />
        <ReceiptRow label="Gross Earnings" value={gross} bold />
        <ReceiptRow label="Platform Fee" value={-TRIP.platformFee} negative />
        <View style={styles.divider} />
        <ReceiptRow label="Net Earning" value={net} bold accent />
      </View>

      <TouchableOpacity style={styles.helpButton}>
        <ThemedText style={{ color: '#fff' }}>🎧 Get Help with this Trip</ThemedText>
      </TouchableOpacity>
    </ScrollView>
  );
}

function ReceiptRow({
  label,
  value,
  bold,
  negative,
  accent,
}: {
  label: string;
  value: number;
  bold?: boolean;
  negative?: boolean;
  accent?: boolean;
}) {
  return (
    <View style={styles.receiptRow}>
      <ThemedText
        type={bold ? 'smallBold' : 'small'}
        style={{ color: negative ? '#ef4444' : accent ? ACCENT : '#fff' }}>
        {label}
      </ThemedText>
      <ThemedText
        type={bold ? 'smallBold' : 'small'}
        style={{ color: negative ? '#ef4444' : accent ? ACCENT : '#fff' }}>
        {negative ? '-' : ''}₹{Math.abs(value).toFixed(2)}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C' },
  content: { padding: Spacing.four, gap: Spacing.three, paddingBottom: Spacing.six },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  mapPlaceholder: { height: 160, borderRadius: 12, backgroundColor: '#141517', justifyContent: 'flex-end', padding: Spacing.two },
  riderRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.three, backgroundColor: '#141517', borderRadius: 12, padding: Spacing.three },
  avatar: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#2E3135' },
  receiptCard: { backgroundColor: '#141517', borderRadius: 12, padding: Spacing.three, gap: Spacing.two },
  receiptRow: { flexDirection: 'row', justifyContent: 'space-between' },
  divider: { height: 1, backgroundColor: '#2E3135' },
  helpButton: { borderWidth: 1, borderColor: '#2E3135', borderRadius: 12, paddingVertical: Spacing.three, alignItems: 'center' },
});