// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';

// export default function ManageGrievance() {
//   const [grievances, setGrievances] = useState([
//     {
//       id: '1',
//       title: 'Water Supply Issue',
//       department: 'Municipality',
//       status: 'Pending',
//       date: '12-Jan-2026',
//     },
//     {
//       id: '2',
//       title: 'Road Damage Complaint',
//       department: 'Public Works',
//       status: 'In Progress',
//       date: '10-Jan-2026',
//     },
//     {
//       id: '3',
//       title: 'Electricity Outage',
//       department: 'Electricity',
//       status: 'Resolved',
//       date: '08-Jan-2026',
//     },
//   ]);

//   const updateStatus = (id, status) => {
//     setGrievances(
//       grievances.map(g =>
//         g.id === id ? { ...g, status } : g
//       )
//     );
//   };

//   const confirmResolve = (id) => {
//     Alert.alert(
//       'Resolve Grievance',
//       'Mark this grievance as resolved?',
//       [
//         { text: 'Cancel' },
//         { text: 'Resolve', onPress: () => updateStatus(id, 'Resolved') },
//       ]
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>🛠 Manage Grievances</Text>

//       <FlatList
//         data={grievances}
//         keyExtractor={item => item.id}
//         showsVerticalScrollIndicator={false}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <Text style={styles.cardTitle}>{item.title}</Text>
//             <Text>Department: {item.department}</Text>
//             <Text>Date: {item.date}</Text>
//             <Text
//               style={[
//                 styles.status,
//                 item.status === 'Resolved' && styles.resolved,
//                 item.status === 'Pending' && styles.pending,
//                 item.status === 'In Progress' && styles.progress,
//               ]}
//             >
//               Status: {item.status}
//             </Text>

//             {item.status !== 'Resolved' && (
//               <TouchableOpacity
//                 style={styles.resolveBtn}
//                 onPress={() => confirmResolve(item.id)}
//               >
//                 <Text style={styles.btnText}>Mark as Resolved</Text>
//               </TouchableOpacity>
//             )}
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f4f6f8',
//     padding: 15,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//   },

//   card: {
//     backgroundColor: '#fff',
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 12,
//     elevation: 3,
//   },
//   cardTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },

//   status: {
//     marginTop: 5,
//     fontWeight: 'bold',
//   },
//   pending: { color: '#e67e22' },
//   progress: { color: '#2980b9' },
//   resolved: { color: '#27ae60' },

//   resolveBtn: {
//     backgroundColor: '#27ae60',
//     padding: 10,
//     borderRadius: 6,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   btnText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function ManageGrievance() {
  const navigation = useNavigation(); // ✅ added

  const [grievances, setGrievances] = useState([
    {
      id: '1',
      title: 'Water Supply Issue',
      department: 'Municipality',
      status: 'Pending',
      date: '12-Jan-2026',
    },
    {
      id: '2',
      title: 'Road Damage Complaint',
      department: 'Public Works',
      status: 'In Progress',
      date: '10-Jan-2026',
    },
    {
      id: '3',
      title: 'Electricity Outage',
      department: 'Electricity',
      status: 'Resolved',
      date: '08-Jan-2026',
    },
  ]);

  const updateStatus = (id, status) => {
    setGrievances(
      grievances.map(g =>
        g.id === id ? { ...g, status } : g
      )
    );
  };

  const confirmResolve = (id) => {
    Alert.alert(
      'Resolve Grievance',
      'Mark this grievance as resolved?',
      [
        { text: 'Cancel' },
        { text: 'Resolve', onPress: () => updateStatus(id, 'Resolved') },
      ]
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {/* 🔹 HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Manage Grievances</Text>
      </View>

      {/* 🔹 CONTENT */}
      <View style={styles.container}>
        <FlatList
          data={grievances}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text>Department: {item.department}</Text>
              <Text>Date: {item.date}</Text>

              <Text
                style={[
                  styles.status,
                  item.status === 'Resolved' && styles.resolved,
                  item.status === 'Pending' && styles.pending,
                  item.status === 'In Progress' && styles.progress,
                ]}
              >
                Status: {item.status}
              </Text>

              {item.status !== 'Resolved' && (
                <TouchableOpacity
                  style={styles.resolveBtn}
                  onPress={() => confirmResolve(item.id)}
                >
                  <Text style={styles.btnText}>Mark as Resolved</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0b3c6d',
    padding: 15,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    padding: 15,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  status: {
    marginTop: 5,
    fontWeight: 'bold',
  },
  pending: { color: '#e67e22' },
  progress: { color: '#2980b9' },
  resolved: { color: '#27ae60' },
  resolveBtn: {
    backgroundColor: '#27ae60',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
