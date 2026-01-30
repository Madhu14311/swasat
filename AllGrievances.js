// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
// } from "react-native";

// const grievances = [
//   {
//     id: "G001",
//     title: "Road Damage",
//     department: "Public Works",
//     status: "Pending",
//     date: "12-Jan-2026",
//   },
//   {
//     id: "G002",
//     title: "Water Supply Issue",
//     department: "Municipal",
//     status: "In Progress",
//     date: "10-Jan-2026",
//   },
//   {
//     id: "G003",
//     title: "Street Light Not Working",
//     department: "Electricity",
//     status: "Resolved",
//     date: "08-Jan-2026",
//   },
// ];

// export default function AllGrievances() {
//   const renderItem = ({ item }) => (
//     <View style={styles.card}>
//       <Text style={styles.id}>#{item.id}</Text>
//       <Text style={styles.title}>{item.title}</Text>
//       <Text>Department: {item.department}</Text>
//       <Text>Date: {item.date}</Text>

//       <Text
//         style={[
//           styles.status,
//           item.status === "Resolved"
//             ? styles.resolved
//             : item.status === "In Progress"
//             ? styles.progress
//             : styles.pending,
//         ]}
//       >
//         {item.status}
//       </Text>

//       <TouchableOpacity style={styles.viewBtn}>
//         <Text style={styles.viewText}>View Details</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>📋 All Grievances</Text>

//       <FlatList
//         data={grievances}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         contentContainerStyle={{ paddingBottom: 20 }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 15,
//     backgroundColor: "#f4f6f8",
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   card: {
//     backgroundColor: "#fff",
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 12,
//     elevation: 2,
//   },
//   id: {
//     fontSize: 12,
//     color: "#888",
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginVertical: 5,
//   },
//   status: {
//     marginTop: 8,
//     fontWeight: "bold",
//   },
//   pending: {
//     color: "#e74c3c",
//   },
//   progress: {
//     color: "#f39c12",
//   },
//   resolved: {
//     color: "#2ecc71",
//   },
//   viewBtn: {
//     marginTop: 10,
//     backgroundColor: "#0b3c6d",
//     padding: 8,
//     borderRadius: 6,
//     alignItems: "center",
//   },
//   viewText: {
//     color: "#fff",
//     fontSize: 13,
//   },
// });
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const grievances = [
  {
    id: "G001",
    title: "Road Damage",
    department: "Public Works",
    status: "Pending",
    date: "12-Jan-2026",
  },
  {
    id: "G002",
    title: "Water Supply Issue",
    department: "Municipal",
    status: "In Progress",
    date: "10-Jan-2026",
  },
  {
    id: "G003",
    title: "Street Light Not Working",
    department: "Electricity",
    status: "Resolved",
    date: "08-Jan-2026",
  },
];

export default function AllGrievances() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.id}>#{item.id}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text>Department: {item.department}</Text>
      <Text>Date: {item.date}</Text>

      <Text
        style={[
          styles.status,
          item.status === "Resolved"
            ? styles.resolved
            : item.status === "In Progress"
            ? styles.progress
            : styles.pending,
        ]}
      >
        {item.status}
      </Text>

      <TouchableOpacity style={styles.viewBtn}>
        <Text style={styles.viewText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* 🔙 HEADER WITH BACK BUTTON */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.heading}>All Grievances</Text>
      </View>

      <FlatList
        data={grievances}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
  },

  /* HEADER */
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0b3c6d",
    padding: 15,
  },
  heading: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 12,
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    margin: 15,
    elevation: 2,
  },
  id: {
    fontSize: 12,
    color: "#888",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
  },
  status: {
    marginTop: 8,
    fontWeight: "bold",
  },
  pending: { color: "#e74c3c" },
  progress: { color: "#f39c12" },
  resolved: { color: "#2ecc71" },

  viewBtn: {
    marginTop: 10,
    backgroundColor: "#0b3c6d",
    padding: 8,
    borderRadius: 6,
    alignItems: "center",
  },
  viewText: {
    color: "#fff",
    fontSize: 13,
  },
});
