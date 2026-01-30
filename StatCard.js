// import { View, Text, StyleSheet } from 'react-native';

// export default function StatCard({ title, value, color }) {
//   return (
//     <View style={[styles.card, { backgroundColor: color }]}>
//       <Text style={styles.title}>{title}</Text>
//       <Text style={styles.value}>{value}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     width: '48%',
//     padding: 20,
//     borderRadius: 10,
//     marginBottom: 15,
//   },
//   title: {
//     color: '#fff',
//     fontSize: 14,
//   },
//   value: {
//     color: '#fff',
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginTop: 8,
//   },
// });
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function StatCard({ title, value, color, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: color }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  value: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  title: {
    fontSize: 14,
    color: "#fff",
    marginTop: 4,
  },
});
