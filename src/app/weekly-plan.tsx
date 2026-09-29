import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';


import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';
const STANDARD_FEE_RATE = 0.25;
const WEEKLY_PASS_PRICE = 399;
const WEEKLY_PASS_FEE_RATE = 0.05;
const AVG_FARE = 250; // TODO: derive from real trip history

export default function WeeklyPlanScreen() {
  const router = useRouter();
  const [estimatedTrips, setEstimatedTrips] = useState(40);

  const grossEstimate = estimatedTrips * AVG_FARE;
  const standardCost = grossEstimate * STANDARD_FEE_RATE;
  const passCost = WEEKLY_PASS_PRICE + grossEstimate * WEEKLY_PASS_FEE_RATE;
  const savings = Math.max(0, standardCost - passCost);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><ThemedText style={{ color: '#fff', fontSize: 20 }}>←</ThemedText></TouchableOpacity>
        <ThemedText type="subtitle" style={{ color: '#fff' }}>Weekly Plan</ThemedText>
        <View style={{ width: 20 }} />
      </View>

      <View style={styles.iconBox}><ThemedText style={{ fontSize: 24 }}>💰</ThemedText></View>
      <ThemedText type="subtitle" style={styles.title}>Max Earnings Plan</ThemedText>
      <ThemedText themeColor="textSecondary" style={styles.subtitle}>Pay a flat fee and keep 95% of every fare. Stop paying high commissions on long trips.</ThemedText>

      <View style={styles.planCard}>
        <View style={styles.planTop}>
          <ThemedText type="subtitle" style={{ color: '#fff' }}>Weekly Pass</ThemedText>
          <View style={{ alignItems: 'flex-end' }}><ThemedText type="subtitle" style={{ color: '#fff' }}>₹{WEEKLY_PASS_PRICE}</ThemedText><ThemedText type="small" themeColor="textSecondary">per week</ThemedText></View>
        </View>
        {['Keep 95% of all trip fares', 'Zero hidden surge fees', 'Priority dispatch on airport runs'].map((b) => (
          <View key={b} style={styles.benefitRow}><ThemedText style={{ color: ACCENT }}>✓</ThemedText><ThemedText style={{ color: '#fff' }}>{b}</ThemedText></View>
        ))}
      </View>

      <View style={styles.calcCard}>
        <ThemedText type="smallBold" style={{ color: '#fff' }}>🧮 Savings Calculator</ThemedText>
        <ThemedText type="small" themeColor="textSecondary">See how much you save based on your weekly trip volume compared to the standard 25% commission rate.</ThemedText>
        <View style={styles.sliderRow}>
          <ThemedText type="smallBold" style={{ color: '#fff' }}>Estimated Weekly Trips</ThemedText>
          <ThemedText type="smallBold" style={{ color: '#F59E0B' }}>{estimatedTrips}</ThemedText>
        </View>
        {/* NOTE: swap for @react-native-community/slider once installed; using +/- buttons meanwhile */}
        <View style={styles.stepperRow}>
          <TouchableOpacity onPress={() => setEstimatedTrips((n) => Math.max(10, n - 5))} style={styles.stepperButton}><ThemedText style={{ color: '#fff' }}>−</ThemedText></TouchableOpacity>
          <View style={styles.stepperTrack}><View style={[styles.stepperFill, { width: `${((estimatedTrips - 10) / 90) * 100}%` }]} /></View>
          <TouchableOpacity onPress={() => setEstimatedTrips((n) => Math.min(100, n + 5))} style={styles.stepperButton}><ThemedText style={{ color: '#fff' }}>+</ThemedText></TouchableOpacity>
        </View>
        <View style={styles.compareRow}>
          <View style={styles.compareBox}><ThemedText type="small" themeColor="textSecondary">Standard (25% fee)</ThemedText><ThemedText type="smallBold" style={{ color: '#fff' }}>₹{standardCost.toFixed(0)}</ThemedText></View>
          <View style={styles.compareBox}><ThemedText type="small" themeColor="textSecondary">Weekly Pass (₹399 + 5%)</ThemedText><ThemedText type="smallBold" style={{ color: ACCENT }}>₹{passCost.toFixed(0)}</ThemedText></View>
        </View>
        <View style={styles.savingsRow}><ThemedText style={{ color: '#fff' }}>Your Weekly Savings</ThemedText><View style={styles.savingsPill}><ThemedText style={{ color: '#0B0B0C', fontWeight: '700' }}>₹{savings.toFixed(0)}</ThemedText></View></View>
      </View>

      <ThemedText type="small" themeColor="textSecondary" style={{ textAlign: 'center' }}>
        Subscription auto-renews weekly. Cancel anytime before the next billing cycle. Tolls and taxes remain 100% yours. Read full terms.
      </ThemedText>

      <TouchableOpacity style={styles.subscribeButton} onPress={() => router.back()}>
        <ThemedText style={{ color: '#0B0B0C', fontWeight: '700' }}>Subscribe Now →</ThemedText>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C' },
  content: { padding: Spacing.four, gap: Spacing.three, paddingBottom: Spacing.six },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  iconBox: { width: 56, height: 56, borderRadius: 14, backgroundColor: '#22C55E', alignSelf: 'center', alignItems: 'center', justifyContent: 'center' },
  title: { color: '#fff', textAlign: 'center' },
  subtitle: { textAlign: 'center' },
  planCard: { backgroundColor: '#0f2a17', borderRadius: 14, borderWidth: 1, borderColor: ACCENT, padding: Spacing.three, gap: Spacing.two },
  planTop: { flexDirection: 'row', justifyContent: 'space-between' },
  benefitRow: { flexDirection: 'row', gap: Spacing.two },
  calcCard: { backgroundColor: '#141517', borderRadius: 14, padding: Spacing.three, gap: Spacing.two },
  sliderRow: { flexDirection: 'row', justifyContent: 'space-between' },
  stepperRow: { flexDirection: 'row', gap: Spacing.two, alignItems: 'center' },
  stepperButton: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#2E3135', alignItems: 'center', justifyContent: 'center' },
  stepperTrack: { flex: 1, height: 6, borderRadius: 3, backgroundColor: '#2E3135', overflow: 'hidden' },
  stepperFill: { height: '100%', backgroundColor: '#F59E0B' },
  compareRow: { flexDirection: 'row', gap: Spacing.two },
  compareBox: { flex: 1, backgroundColor: '#0B0B0C', borderRadius: 10, padding: Spacing.two, gap: 4 },
  savingsRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  savingsPill: { backgroundColor: ACCENT, borderRadius: 8, paddingHorizontal: Spacing.three, paddingVertical: 4 },
  subscribeButton: { backgroundColor: ACCENT, borderRadius: 14, paddingVertical: Spacing.three, alignItems: 'center' },
});