import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        initialRouteName="session-check"
        screenOptions={{ headerShown: false, animation: 'fade' }}>
        <Stack.Screen name="session-check" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(trip)" />
        <Stack.Screen name="notifications" options={{ presentation: 'modal', animation: 'slide_from_bottom' }} />
        <Stack.Screen name="trip-details" options={{ presentation: 'modal', animation: 'slide_from_bottom' }} />
        <Stack.Screen name="earnings-activity" />
        <Stack.Screen name="payout-history" />
        <Stack.Screen name="safety-centre" />
        <Stack.Screen name="help-support" />
        <Stack.Screen name="refer-a-rider" />
        <Stack.Screen name="document-detail" />
        <Stack.Screen name="add-bank-account" />
        <Stack.Screen name="weekly-plan" />
        <Stack.Screen name="payout-detail" />

      </Stack>
    </ThemeProvider>
  );
}