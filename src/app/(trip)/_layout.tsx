import { Stack } from 'expo-router';

export default function TripLayout() {
    return (
        <Stack screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
            <Stack.Screen name="incoming-request" />
            <Stack.Screen name="trip-accepted-summary" />
            <Stack.Screen name="en-route-pickup" />
            <Stack.Screen name="arrived-waiting" />
            <Stack.Screen name="safety-check" options={{ presentation: 'modal', animation: 'slide_from_bottom' }} />
            <Stack.Screen name="active-navigation" />
            <Stack.Screen name="trip-complete" />
            <Stack.Screen name="cancel-trip" options={{ presentation: 'modal', animation: 'slide_from_bottom' }} />
            <Stack.Screen name="chat" />
            <Stack.Screen name="calling" options={{ presentation: 'modal', animation: 'slide_from_bottom' }} />
            <Stack.Screen name="identity-check" />
            <Stack.Screen name="parcel-pickup-verification" />
            <Stack.Screen name="multi-stop-manifest" />
            <Stack.Screen name="sos-active" options={{ presentation: 'modal', animation: 'slide_from_bottom' }} />
            <Stack.Screen name="request-expired" />
            <Stack.Screen name="fare-match-discount" options={{ presentation: 'modal', animation: 'slide_from_bottom' }} />
            <Stack.Screen name="female-rider-verification" />
            <Stack.Screen name="pink-scooty-safety-badge" />
            <Stack.Screen name="safety-shield-sos" options={{ presentation: 'modal', animation: 'slide_from_bottom' }} />
            <Stack.Screen name="pink-scooty-trip-request" />
            <Stack.Screen name="carpool-trip-request" />
            <Stack.Screen name="per-stop-cancellation" options={{ presentation: 'modal', animation: 'slide_from_bottom' }} />
            <Stack.Screen name="delivery-request" />
            <Stack.Screen name="parcel-in-transit-navigation" />
            <Stack.Screen name="drop-verification-cod" />
        </Stack>
    );
}