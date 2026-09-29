import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';
const ICONS: Record<string, string> = { index: '🏠', trips: '🚗', earnings: '💳', account: '👤' };

export function CustomTabBar({ state, descriptors, navigation }: any) {
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <View style={styles.row}>
        {state.routes.map((route: any, i: number) => {
          const { options } = descriptors[route.key];
          const label = options.title ?? route.name;
          const isFocused = state.index === i;
          return (
            <TouchableOpacity
              key={route.key}
              style={styles.tab}
              onPress={() => {
                const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
                if (!isFocused && !event.defaultPrevented) navigation.navigate(route.name);
              }}>
              <ThemedText style={{ fontSize: 20, opacity: isFocused ? 1 : 0.5 }}>{ICONS[route.name] ?? '•'}</ThemedText>
              <ThemedText type="small" style={{ color: isFocused ? ACCENT : '#60646C' }}>{label}</ThemedText>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#0B0B0C', borderTopWidth: 1, borderTopColor: '#2E3135' },
  row: { flexDirection: 'row' },
  tab: { flex: 1, alignItems: 'center', gap: 2, paddingVertical: Spacing.two },
});