import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';

const MENU = [
    { icon: '📄', label: 'Vehicle Documents', badge: 'ok' as const, route: '/(auth)/register-documents' },
    { icon: '💳', label: 'Earnings & Payouts', route: '/payout-history' },
    { icon: '🛡️', label: 'Safety Centre', route: '/safety-centre' },
    { icon: '❓', label: 'Help & Support', route: '/help-support' },
    { icon: '👥', label: 'Refer a Rider', route: '/refer-a-rider', trailing: 'Earn ₹50' },
];

export default function AccountScreen() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.header}>
                    <View style={styles.avatar} />
                    <ThemedText type="subtitle" style={{ color: '#fff' }}>Rider</ThemedText>
                    <ThemedText style={{ fontSize: 18 }}>🔔</ThemedText>
                </View>

                <View style={styles.profileCard}>
                    <View>
                        <ThemedText type="subtitle" style={{ color: '#fff' }}>Marcus J. Chen</ThemedText>
                        <ThemedText type="small" themeColor="textSecondary">Cab Service</ThemedText>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <ThemedText type="small" style={{ color: '#F59E0B' }}>⭐ 4.9</ThemedText>
                        <ThemedText type="small" themeColor="textSecondary">2.4k Trips</ThemedText>
                    </View>
                </View>

                <View style={styles.row2}>
                    <View style={styles.statusCard}>
                        <View style={styles.statusTop}><ThemedText style={{ fontSize: 16 }}>🚗</ThemedText><ThemedText style={{ color: ACCENT }}>✓</ThemedText></View>
                        <ThemedText type="smallBold" style={{ color: '#fff' }}>Vehicle</ThemedText>
                        <ThemedText type="small" style={{ color: ACCENT }}>Verified</ThemedText>
                    </View>
                    <View style={styles.statusCard}>
                        <View style={styles.statusTop}><ThemedText style={{ fontSize: 16 }}>🪪</ThemedText><ThemedText style={{ color: ACCENT }}>✓</ThemedText></View>
                        <ThemedText type="smallBold" style={{ color: '#fff' }}>License</ThemedText>
                        <ThemedText type="small" style={{ color: ACCENT }}>Valid till 2026</ThemedText>
                    </View>
                </View>

                {MENU.map((m) => (
                    <TouchableOpacity key={m.label} style={styles.menuRow} onPress={() => m.route && router.push(m.route as any)}>
                        <View style={styles.menuLeft}><ThemedText style={{ fontSize: 18 }}>{m.icon}</ThemedText><ThemedText style={{ color: '#fff' }}>{m.label}</ThemedText></View>
                        {m.badge === 'ok' && <View style={styles.greenPill} />}
                        {m.trailing && <ThemedText type="small" style={{ color: ACCENT }}>{m.trailing}</ThemedText>}
                        {!m.badge && !m.trailing && <ThemedText themeColor="textSecondary">›</ThemedText>}
                    </TouchableOpacity>
                ))}

                <TouchableOpacity
                    style={styles.signOutButton}
                    // TODO: clear session state before navigating
                    onPress={() => router.replace('/(auth)/login')}>
                    <ThemedText style={{ color: '#F59E0B' }}>⇥ Sign Out</ThemedText>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0B0B0C' },
    content: { padding: Spacing.four, gap: Spacing.three, paddingBottom: Spacing.six },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    avatar: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#2E3135' },
    profileCard: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#141517', borderRadius: 14, padding: Spacing.three },
    row2: { flexDirection: 'row', gap: Spacing.three },
    statusCard: { flex: 1, backgroundColor: '#141517', borderRadius: 12, padding: Spacing.three, gap: 4 },
    statusTop: { flexDirection: 'row', justifyContent: 'space-between' },
    menuRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#141517', borderRadius: 12, padding: Spacing.three },
    menuLeft: { flexDirection: 'row', gap: Spacing.three, alignItems: 'center' },
    greenPill: { width: 36, height: 10, borderRadius: 6, backgroundColor: ACCENT },
    signOutButton: { alignItems: 'center', borderWidth: 1, borderColor: '#F59E0B', borderRadius: 12, paddingVertical: Spacing.three, marginTop: Spacing.two },
});