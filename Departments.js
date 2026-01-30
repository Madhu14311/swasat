import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// Dummy data for departments
const departments = [
  { name: 'IT', value: 50, color: '#2980b9' },
  { name: 'HR', value: 30, color: '#27ae60' },
  { name: 'Finance', value: 70, color: '#f39c12' },
  { name: 'Admin', value: 20, color: '#c0392b' },
  { name: 'Support', value: 40, color: '#8e44ad' },
  { name: 'Legal', value: 10, color: '#d35400' },
];

export default function Departments() {
  // Find max value to scale bars
  const maxValue = Math.max(...departments.map(d => d.value));

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Departments Overview</Text>

      {departments.map((dept, index) => (
        <View key={index} style={styles.departmentCard}>
          <Text style={styles.deptName}>
            {dept.name} ({dept.value})
          </Text>
          <View style={styles.barBackground}>
            <View
              style={[
                styles.barFill,
                {
                  width: `${(dept.value / maxValue) * 100}%`,
                  backgroundColor: dept.color,
                },
              ]}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#f4f6f8' },
  pageTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  departmentCard: { marginBottom: 15, backgroundColor: '#fff', padding: 15, borderRadius: 10 },
  deptName: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  barBackground: { width: '100%', height: 20, backgroundColor: '#e5e7eb', borderRadius: 10 },
  barFill: { height: 20, borderRadius: 10 },
});
