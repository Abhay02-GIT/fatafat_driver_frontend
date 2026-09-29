import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import {
  SplashBrand,
  SplashLoading,
  SplashMaintenance,
  SplashResumingTrip,
  SplashUpdateRequired,
} from '@/components/splash/splash-states';
import { ThemedText } from '@/components/themed-text';

type Status = 'brand' | 'loading' | 'maintenance' | 'update-required' | 'resuming-trip' | 'ready';

// TEMP — set true to preview all screens by tapping "Next" on the device.
// Set to false to run the real bootstrap flow.
const DEBUG_PREVIEW_MODE = false;

const PREVIEW_ORDER: Status[] = [
  'brand',
  'loading',
  'maintenance',
  'update-required',
  'resuming-trip',
];

export default function SessionCheckScreen() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>('brand');
  const [previewIndex, setPreviewIndex] = useState(0);

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    if (DEBUG_PREVIEW_MODE) {
      setStatus(PREVIEW_ORDER[previewIndex]);
      return;
    }

    let cancelled = false;

    async function bootstrap() {
      await wait(700);
      if (cancelled) return;
      setStatus('loading');

      // TODO: replace with real calls — remote config / auth check
      const { maintenanceMode, updateRequired, hasActiveTrip } = await checkAppState();
      if (cancelled) return;

      if (maintenanceMode) return setStatus('maintenance');
      if (updateRequired) return setStatus('update-required');
      if (hasActiveTrip) {
        setStatus('resuming-trip');
        await wait(1200);
        if (cancelled) return;
      }

      setStatus('ready');
      router.replace('/(auth)/login');
    }

    bootstrap();
    return () => {
      cancelled = true;
    };
  }, [router, previewIndex]);

  function renderScreen() {
    switch (status) {
      case 'brand':
        return <SplashBrand />;
      case 'maintenance':
        return <SplashMaintenance />;
      case 'update-required':
        return <SplashUpdateRequired onUpdate={() => {}} />;
      case 'resuming-trip':
        return <SplashResumingTrip />;
      default:
        return <SplashLoading />;
    }
  }

  return (
    <View style={{ flex: 1 }}>
      {renderScreen()}
      {DEBUG_PREVIEW_MODE && (
        <View style={styles.devBar}>
          <ThemedText style={styles.devLabel}>
            {previewIndex + 1}/{PREVIEW_ORDER.length}: {PREVIEW_ORDER[previewIndex]}
          </ThemedText>
          <TouchableOpacity
            style={styles.devButton}
            onPress={() => setPreviewIndex((i) => (i + 1) % PREVIEW_ORDER.length)}>
            <ThemedText style={styles.devButtonText}>Next →</ThemedText>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// TODO: replace mock with your real session/config API
async function checkAppState() {
  await wait(900);
  return { maintenanceMode: false, updateRequired: false, hasActiveTrip: false };
}

const styles = StyleSheet.create({
  devBar: {
    position: 'absolute',
    bottom: 40,
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.85)',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  devLabel: { color: '#ffffff', fontSize: 12 },
  devButton: {
    backgroundColor: '#22C55E',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  devButtonText: { color: '#0B0B0C', fontWeight: '700' },
});