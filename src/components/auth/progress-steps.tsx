import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';

export function ProgressSteps({
  current,
  total,
  label,
}: {
  current: number;
  total: number;
  label?: string;
}) {
  return (
    <View style={{ gap: Spacing.one }}>
      {label && (
        <ThemedText type="smallBold" style={{ color: ACCENT }}>
          {label}
        </ThemedText>
      )}
      <View style={styles.row}>
        {Array.from({ length: total }).map((_, i) => (
          <View
            key={i}
            style={[styles.bar, i < current ? styles.barActive : styles.barInactive]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 6 },
  bar: { flex: 1, height: 4, borderRadius: 2 },
  barActive: { backgroundColor: ACCENT },
  barInactive: { backgroundColor: '#2E3135' },
});