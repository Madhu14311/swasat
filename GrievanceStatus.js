// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const Card = ({ title, value, color }) => (
//   <View style={[styles.card, { backgroundColor: color }]}>
//     <Text style={styles.cardTitle}>{title}</Text>
//     <Text style={styles.cardValue}>{value}</Text>
//   </View>
// );

// export default  GrievanceStatus = () => {
//   return (
//     <View style={styles.statusContainer}>
//       <Card title="Total Grievances" value="1,250" color="#e96443" />
//       <Card title="Pending Grievances" value="420" color="#3498db" />
//       <Card title="Resolved Grievances" value="780" color="#2ecc71" />
//       <Card title="Escalated Grievances" value="50" color="#c0392b" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   statusContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//   },
//   card: {
//     borderRadius: 8,
//     padding: 20,
//     width: '23%', // Distribute space evenly
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   cardTitle: {
//     fontSize: 14,
//     color: '#fff',
//     marginBottom: 5,
//     fontWeight: '600',
//   },
//   cardValue: {
//     fontSize: 28,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ title, value, color }) => (
  <View style={[styles.card, { backgroundColor: color }]}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardValue}>{value}</Text>
  </View>
);

export default function GrievanceStatus() {
  return (
    <View style={styles.statusContainer}>
      <Card title="Total" value="1,250" color="#e96443" />
      <Card title="Pending" value="420" color="#3498db" />
      <Card title="Resolved" value="780" color="#2ecc71" />
      <Card title="Escalated" value="50" color="#c0392b" />
    </View>
  );
}

const styles = StyleSheet.create({
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 19,
    marginBottom: 15,
  },
  card: {
    borderRadius: 8,
    padding: 15,
    width: '22%', 
    elevation: 3,
  },
  cardTitle: {
    fontSize: 12,
    color: '#fff',
  },
  cardValue: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
