import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

const ACCENT = '#22C55E';
const QUICK_REPLIES = ['On my way', 'Reaching in 5 min', 'At the pickup'];

export default function ChatScreen() {
  const router = useRouter();
  const [messages, setMessages] = useState([
    { id: 'm1', from: 'me', text: 'I am at Gate 2, near the ATM' },
    { id: 'm2', from: 'them', text: 'Ok reaching in 2 min' },
    { id: 'm3', from: 'me', text: 'Please come to the left side' },
    { id: 'm4', from: 'them', text: 'Got it, coming' },
  ]);
  const [text, setText] = useState('');

  const send = (value: string) => {
    if (!value.trim()) return;
    setMessages((m) => [...m, { id: `${Date.now()}`, from: 'me', text: value }]);
    setText('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><ThemedText style={{ color: '#fff', fontSize: 20 }}>←</ThemedText></TouchableOpacity>
        <View style={{ flex: 1 }}><ThemedText type="smallBold" style={{ color: '#fff' }}>Anjali</ThemedText><ThemedText type="small" style={{ color: ACCENT }}>● EN ROUTE</ThemedText></View>
        <TouchableOpacity onPress={() => router.push('/(trip)/calling')}><ThemedText style={{ fontSize: 20, color: ACCENT }}>📞</ThemedText></TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.messages}>
        {messages.map((m) => (
          <View key={m.id} style={[styles.bubble, m.from === 'me' ? styles.bubbleMine : styles.bubbleTheirs]}>
            <ThemedText style={{ color: m.from === 'me' ? '#0B0B0C' : '#fff' }}>{m.text}</ThemedText>
          </View>
        ))}
      </ScrollView>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.quickRepliesRow}>
        {QUICK_REPLIES.map((q) => (
          <TouchableOpacity key={q} style={styles.quickReply} onPress={() => send(q)}><ThemedText type="small" style={{ color: '#fff' }}>{q}</ThemedText></TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.inputRow}>
        <TextInput style={styles.input} placeholder="Type a message..." placeholderTextColor="#60646C" value={text} onChangeText={setText} />
        <TouchableOpacity style={styles.sendButton} onPress={() => send(text)}><ThemedText style={{ color: '#0B0B0C' }}>➤</ThemedText></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0B0C' },
  header: { flexDirection: 'row', gap: Spacing.three, alignItems: 'center', padding: Spacing.four },
  messages: { padding: Spacing.four, gap: Spacing.two },
  bubble: { maxWidth: '75%', borderRadius: 14, padding: Spacing.two, paddingHorizontal: Spacing.three },
  bubbleMine: { backgroundColor: ACCENT, alignSelf: 'flex-end' },
  bubbleTheirs: { backgroundColor: '#2E3135', alignSelf: 'flex-start' },
  quickRepliesRow: { paddingHorizontal: Spacing.four, marginBottom: Spacing.two },
  quickReply: { backgroundColor: '#141517', borderRadius: 16, paddingHorizontal: Spacing.three, paddingVertical: Spacing.two, marginRight: Spacing.two },
  inputRow: { flexDirection: 'row', gap: Spacing.two, alignItems: 'center', padding: Spacing.four },
  input: { flex: 1, backgroundColor: '#141517', borderRadius: 20, paddingHorizontal: Spacing.three, paddingVertical: Spacing.two, color: '#fff' },
  sendButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: ACCENT, alignItems: 'center', justifyContent: 'center' },
});