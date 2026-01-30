import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

// Dummy survey data
const surveyData = [
  { name: 'Aware of Rights', population: 650, color: '#27ae60', legendFontColor: '#333', legendFontSize: 11 },
  { name: 'Unaware', population: 350, color: '#c0392b', legendFontColor: '#333', legendFontSize: 12 },
];

// Department-wise awareness
const deptSurvey = [
  { label: 'IT', value: 80, color: '#2980b9' },
  { label: 'HR', value: 60, color: '#27ae60' },
  { label: 'Finance', value: 40, color: '#f39c12' },
  { label: 'Admin', value: 30, color: '#c0392b' },
];

// MPs and MLAs
const parliamentMembers = [
  { title: 'MPs', value: 543, color: '#0b3c6d' },
  { title: 'MLAs', value: 403, color: '#16a34a' },
];

// Card Component
const Card = ({ title, children, color }) => (
  <View style={[styles.card, { borderLeftColor: color || '#0b3c6d' }]}>
    <Text style={styles.cardTitle}>{title}</Text>
    {children}
  </View>
);

export default function Constitutional() {
  const maxValue = Math.max(...deptSurvey.map(d => d.value));

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Constitutional Survey & Political Data</Text>

      {/* MPs / MLAs Cards */}
      <View style={styles.metricGrid}>
        {parliamentMembers.map((item, idx) => (
          <Card key={idx} title={item.title} color={item.color}>
            <Text style={styles.big}>{item.value}</Text>
          </Card>
        ))}
      </View>

      {/* PIE CHART */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Citizen Awareness Overview</Text>
        <PieChart
          data={surveyData}
          width={screenWidth - 40}
          height={220}
          chartConfig={{ color: () => '#000' }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
        />
      </View>

      {/* BAR CHART */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Department-wise Awareness</Text>
        {deptSurvey.map((dept, idx) => (
          <View key={idx} style={{ marginBottom: 15 }}>
            <Text style={{ marginBottom: 5 }}>{dept.label} ({dept.value})</Text>
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
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#f4f6f8' },
  pageTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },

  metricGrid: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    marginRight: 10,
    borderRadius: 10,
    borderLeftWidth: 5,
  },
  cardTitle: { fontWeight: 'bold', marginBottom: 10 },
  big: { fontSize: 22, fontWeight: 'bold', color: '#0b3c6d' },

  section: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 20 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },

  barBackground: { width: '100%', height: 20, backgroundColor: '#e5e7eb', borderRadius: 10 },
  barFill: { height: 20, borderRadius: 10 },
});
