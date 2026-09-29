import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { AuthHeader } from '@/components/auth/auth-header';
import { OtpInput } from '@/components/auth/otp-input';
import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';
const RESEND_SECONDS = 29;

export default function VerifyOtpScreen() {
  const router = useRouter();
  const { phone } = useLocalSearchParams<{ phone?: string }>();
  const [code, setCode] = useState('');
  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const t = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [secondsLeft]);

  const maskedPhone = phone ? `+91 ${phone.slice(0, 5)}${'*'.repeat(5)}` : '+91 *****00000';

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <AuthHeader
          title="Verify Phone"
          subtitle={`Enter the 6-digit code sent to\n${maskedPhone}`}
        />

        <OtpInput onChange={setCode} />

        <ThemedText type="small" themeColor="textSecondary" style={styles.resendRow}>
          Didn't receive the code?{' '}
          <ThemedText type="smallBold" style={{ color: '#ffffff' }}>
            {secondsLeft > 0 ? `00:${String(secondsLeft).padStart(2, '0')}` : 'Resend'}
          </ThemedText>
        </ThemedText>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.verifyButton, code.length < 6 && styles.verifyButtonDisabled]}
          disabled={code.length < 6}
          // TODO: call real verify-OTP API, then route based on new vs existing user
          onPress={() => router.push('/(auth)/become-rider')}>
          <ThemedText style={styles.verifyText}>Verify & Continue</ThemedText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C', justifyContent: 'space-between' },
  content: { paddingHorizontal: Spacing.four, paddingTop: Spacing.six, gap: Spacing.four },
  resendRow: { marginTop: Spacing.two },
  footer: { padding: Spacing.four },
  verifyButton: {
    backgroundColor: ACCENT,
    borderRadius: 14,
    paddingVertical: Spacing.three,
    alignItems: 'center',
  },
  verifyButtonDisabled: { opacity: 0.5 },
  verifyText: { color: '#0B0B0C', fontWeight: '700', fontSize: 16 },
});