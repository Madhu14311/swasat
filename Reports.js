import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
// Dummy SmallBtn component
const SmallBtn = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.smallBtn}>
    <Text style={{ color: '#fff', fontWeight: 'bold' }}>{text}</Text>
  </TouchableOpacity>
);

// Dummy Card component
const Card = ({ title, children, rightAction }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Text style={styles.cardTitle}>{title}</Text>
      {rightAction}
    </View>
    {children}
  </View>
);

// Dummy AnimatedBarsCard component
const AnimatedBarsCard = ({ title, items, compact, rightAction }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Text style={styles.cardTitle}>{title}</Text>
      {rightAction}
    </View>
    {items?.map((item, idx) => (
      <View key={idx} style={{ marginVertical: 4 }}>
        <Text>{item.label}: {item.value}</Text>
      </View>
    ))}
  </View>
);

export default function Reports() {
  const navigation = useNavigation();
  // Dummy actions
  const onRefresh = () => Alert.alert('Refreshed!');
  const onExport = () => Alert.alert('Exported!');

  // Dummy data
  const statusBars = [
    { label: 'Open', value: 120 },
    { label: 'Pending', value: 80 },
    { label: 'Resolved', value: 300 },
  ];
pp;
  const deptBarsOpen = [
    { label: 'IT', value: 50 },
    { label: 'Municipality', value: 30 },
    { label: 'Finance', value: 70 },
    { label: 'Electricity', value: 20 },
    { label: 'Education', value: 20 },
    { label: 'Revenue', value: 20 },
    { label: 'Transport', value: 20 },
  ];

  return (
    
    <ScrollView style={{ flex: 1, padding: 15 }}>
      <Card title="Reports & Analytics" rightAction={<SmallBtn text="↻ Refresh" onPress={onRefresh} />}>
        <Text style={styles.mutedSmall}>Animated bar analytics based on current data.</Text>
      </Card>

      <AnimatedBarsCard title="Status Distribution (Animated)" items={statusBars} compact />
      <AnimatedBarsCard
        title="Open Items by Department (Animated)"
        rightAction={<SmallBtn text="⬇ Export" onPress={onExport} />}
        items={deptBarsOpen}
        compact
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mutedSmall: { color: '#666', fontSize: 12, marginTop: 5 },
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 15 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  cardTitle: { fontWeight: 'bold', fontSize: 16 },
  smallBtn: { backgroundColor: '#0b3c6d', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5 },
});
