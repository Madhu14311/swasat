// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
//   Modal,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// const navigation = useNavigation();


// const grievances = [
//   { id: "G001", title: "Road Damage", department: "Public Works" },
//   { id: "G002", title: "Water Supply Issue", department: "Municipal" },
//   { id: "G003", title: "Street Light Issue", department: "Electricity" },
// ];

// const officers = [
//   "Vamsi Ediga",
//   "Y. Raja Shekar",
//   "Madhu",
// ];

// export default function AssignGrievance() {
//   const [selectedGrievance, setSelectedGrievance] = useState(null);
//   const [assignedTo, setAssignedTo] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);

//   const assignHandler = () => {
//     alert(
//       `Grievance ${selectedGrievance.id} assigned to ${assignedTo}`
//     );
//     setModalVisible(false);
//     setAssignedTo(null);
//     setSelectedGrievance(null);
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.card}>
//       <Text style={styles.id}>#{item.id}</Text>
//       <Text style={styles.title}>{item.title}</Text>
//       <Text>Department: {item.department}</Text>

//       <TouchableOpacity
//         style={styles.assignBtn}
//         onPress={() => {
//           setSelectedGrievance(item);
//           setModalVisible(true);
//         }}
//       >
//         <Text style={styles.assignText}>Assign</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.header}>
//   <TouchableOpacity onPress={() => navigation.goBack()}>
//     <Ionicons name="arrow-back" size={24} color="#fff" />
//   </TouchableOpacity>

//   <Text style={styles.heading}>All Grievances</Text>


//     <View style={styles.container}>
//       <Text style={styles.heading}>📌 Assign Grievance</Text>

//       <FlatList
//         data={grievances}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//       />

//       {/* ASSIGN MODAL */}
//       <Modal visible={modalVisible} transparent animationType="slide">
//         <View style={styles.modal}>
//           <View style={styles.modalBox}>
//             <Text style={styles.modalTitle}>
//               Assign {selectedGrievance?.id}
//             </Text>

//             {officers.map((officer, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.officer,
//                   assignedTo === officer && styles.selected,
//                 ]}
//                 onPress={() => setAssignedTo(officer)}
//               >
//                 <Text>{officer}</Text>
//               </TouchableOpacity>
//             ))}

//             <TouchableOpacity
//               style={[
//                 styles.confirmBtn,
//                 !assignedTo && { opacity: 0.5 },
//               ]}
//               disabled={!assignedTo}
//               onPress={assignHandler}
//             >
//               <Text style={styles.confirmText}>Confirm Assignment</Text>
//             </TouchableOpacity>

//             <TouchableOpacity onPress={() => setModalVisible(false)}>
//               <Text style={styles.cancel}>Cancel</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
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
//   },
//   id: {
//     fontSize: 12,
//     color: "#888",
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   assignBtn: {
//     marginTop: 10,
//     backgroundColor: "#0b3c6d",
//     padding: 8,
//     borderRadius: 6,
//     alignItems: "center",
//   },
//   assignText: {
//     color: "#fff",
//     fontSize: 13,
//   },
//   modal: {
//     flex: 1,
//     backgroundColor: "rgba(0,0,0,0.5)",
//     justifyContent: "center",
//   },
//   modalBox: {
//     backgroundColor: "#fff",
//     margin: 20,
//     padding: 20,
//     borderRadius: 10,
//   },
//   modalTitle: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   officer: {
//     padding: 10,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 6,
//     marginVertical: 5,
//   },
//   selected: {
//     backgroundColor: "#dff6ff",
//     borderColor: "#0b3c6d",
//   },
//   confirmBtn: {
//     marginTop: 15,
//     backgroundColor: "#0b3c6d",
//     padding: 10,
//     borderRadius: 6,
//     alignItems: "center",
//   },
//   confirmText: {
//     color: "#fff",
//     fontSize: 13,

//   },
//   cancel: {
//     marginTop: 10,
//     textAlign: "center",
//     color: "red",
//   },
// });
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const grievances = [
  { id: "G001", title: "Road Damage", department: "Public Works" },
  { id: "G002", title: "Water Supply Issue", department: "Municipal" },
  { id: "G003", title: "Street Light Issue", department: "Electricity" },
];

const officers = ["Vamsi Ediga", "Y. Raja Shekar", "Madhu"];

export default function AssignGrievance() {
  const navigation = useNavigation(); // ✅ FIXED LOCATION

  const [selectedGrievance, setSelectedGrievance] = useState(null);
  const [assignedTo, setAssignedTo] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const assignHandler = () => {
    alert(`Grievance ${selectedGrievance.id} assigned to ${assignedTo}`);
    setModalVisible(false);
    setAssignedTo(null);
    setSelectedGrievance(null);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.id}>#{item.id}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text>Department: {item.department}</Text>

      <TouchableOpacity
        style={styles.assignBtn}
        onPress={() => {
          setSelectedGrievance(item);
          setModalVisible(true);
        }}
      >
        <Text style={styles.assignText}>Assign</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      {/* 🔹 HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Assign Grievance</Text>
      </View>

      {/* 🔹 CONTENT */}
      <View style={styles.container}>
        <FlatList
          data={grievances}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>

      {/* 🔹 MODAL */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modal}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>
              Assign {selectedGrievance?.id}
            </Text>

            {officers.map((officer, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.officer,
                  assignedTo === officer && styles.selected,
                ]}
                onPress={() => setAssignedTo(officer)}
              >
                <Text>{officer}</Text>
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              style={[
                styles.confirmBtn,
                !assignedTo && { opacity: 0.5 },
              ]}
              disabled={!assignedTo}
              onPress={assignHandler}
            >
              <Text style={styles.confirmText}>Confirm Assignment</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.cancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0b3c6d",
    padding: 15,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 12,
  },
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f4f6f8",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
  },
  id: { fontSize: 12, color: "#888" },
  title: { fontSize: 16, fontWeight: "bold" },
  assignBtn: {
    marginTop: 10,
    backgroundColor: "#0b3c6d",
    padding: 8,
    borderRadius: 6,
    alignItems: "center",
  },
  assignText: { color: "#fff", fontSize: 13 },
  modal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
  },
  modalBox: {
    backgroundColor: "#fff",
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  officer: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    marginVertical: 5,
  },
  selected: { backgroundColor: "#dff6ff", borderColor: "#0b3c6d" },
  confirmBtn: {
    marginTop: 15,
    backgroundColor: "#0b3c6d",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  confirmText: { color: "#fff" },
  cancel: { marginTop: 10, textAlign: "center", color: "red" },
});
