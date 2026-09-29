import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

export function Field({
  label,
  placeholder,
  value,
  onChangeText,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (t: string) => void;
}) {
  return (
    <View style={styles.field}>
      <ThemedText type="small" themeColor="textSecondary">{label}</ThemedText>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#60646C"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

export function SelectField({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.field}>
      <ThemedText type="small" themeColor="textSecondary">{label}</ThemedText>
      <TouchableOpacity style={styles.input}>
        <ThemedText themeColor="textSecondary">{value}</ThemedText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  field: { gap: Spacing.one },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2E3135',
    backgroundColor: '#ffffff',
    color: '#000000',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    fontSize: 15,
    justifyContent: 'center',
  },
});