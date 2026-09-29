    import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

type Props = {
  icon?: string; // emoji, e.g. '🚕'
  title: string;
  subtitle?: string;
};

export function AuthHeader({ icon, title, subtitle }: Props) {
  const router = useRouter();
  return (
    <View style={styles.wrap}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => (router.canGoBack() ? router.back() : router.replace('/(auth)/login'))}>
        <ThemedText style={styles.backArrow}>←</ThemedText>
      </TouchableOpacity>

      {icon && <ThemedText style={styles.icon}>{icon}</ThemedText>}

      <ThemedText type="subtitle" style={styles.title}>
        {title}
      </ThemedText>
      {subtitle && (
        <ThemedText themeColor="textSecondary" style={styles.subtitle}>
          {subtitle}
        </ThemedText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: Spacing.two, marginBottom: Spacing.four },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.two,
  },
  backArrow: { color: '#ffffff', fontSize: 20 },
  icon: { fontSize: 28, marginBottom: Spacing.one },
  title: { color: '#ffffff' },
  subtitle: {},
});