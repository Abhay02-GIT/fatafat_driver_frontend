import { Tabs } from 'expo-router';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { CustomTabBar } from '@/components/custom-tab-bar';

export default function TabsLayout() {
  return (
    <>
      <AnimatedSplashOverlay />
      <Tabs screenOptions={{ headerShown: false }} tabBar={(props) => <CustomTabBar {...props} />}>
        <Tabs.Screen name="index" options={{ title: 'Home' }} />
        <Tabs.Screen name="trips" options={{ title: 'Trips' }} />
        <Tabs.Screen name="earnings" options={{ title: 'Earnings' }} />
        <Tabs.Screen name="account" options={{ title: 'Account' }} />
      </Tabs>
    </>
  );
}