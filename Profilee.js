// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   SafeAreaView,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import Departments from './Departments';

// const MENU = [
//   { icon: "card-outline", title: "Department Status" },
//   { icon: "ticket-outline", title: "Reports" },
//   { icon: "document-text-outline", title: "User Management" },
 
// ];

// export default function Profilee() {
//   return (
//     <SafeAreaView style={styles.safe}>
//       <ScrollView>

//         {/* HEADER */}
//         <View style={styles.header}>
//           <Text style={styles.name}>Madhu</Text>
//           <Text style={styles.sub}>+91-9392319072</Text>
//           <Text style={styles.sub}>seetalammadhu123@gmail.com</Text>
//         </View>

      
//         <View style={styles.quickRow}>
//           <Quick icon="" label="Total Problems" />
//           <Quick icon="" label="Pending" />
//           <Quick icon="" label="Resolved" />
        
//         </View>

//         {/* MENU LIST */}
//         <View style={styles.menu}>
//           {MENU.map((item, index) => (
//             <TouchableOpacity key={index} style={styles.menuItem}>
//               <Ionicons name={item.icon} size={22} color="#444" />
//               <Text style={styles.menuText}>{item.title}</Text>
//               <Ionicons name="chevron-forward" size={20} color="#999" />
//             </TouchableOpacity>
//           ))}
//         </View>

//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// /* QUICK BUTTON */
// const Quick = ({ icon, label }) => (
//   <View style={styles.quickItem}>
//     <Ionicons name={icon} size={26} color="#444" />
//     <Text style={styles.quickText}>{label}</Text>
//   </View>
// );

// /* STYLES */
// const styles = StyleSheet.create({
//   safe: { flex: 1, backgroundColor: "#fff" },

//   header: {
//     backgroundColor: "#FDEDE4",
//     padding: 30,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//   },
//   name: { fontSize: 22, fontWeight: "bold" },
//   sub: { color: "#666", marginTop: 4 },

//   oneCard: {
//     backgroundColor: "#fff",
//     margin: 15,
//     padding: 15,
//     borderRadius: 12,
//     elevation: 2,
//   },
//   row: { flexDirection: "row", alignItems: "center" },
//   oneText: { color: "#FF5200", fontWeight: "bold", fontSize: 16 },
//   expired: {
//     marginLeft: 10,
//     backgroundColor: "#FFE3D6",
//     color: "#FF5200",
//     paddingHorizontal: 8,
//     paddingVertical: 2,
//     borderRadius: 6,
//     fontSize: 12,
//   },
//   saveText: { marginTop: 8, fontSize: 15 },
//   renew: { color: "#777", marginTop: 4 },

//   quickRow: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginVertical: 10,
//   },
//   quickItem: {
//     alignItems: "center",
//     width: "22%",
//   },
//   quickText: {
//     fontSize: 12,
//     marginTop: 6,
//     textAlign: "center",
//   },

//   menu: {
//     marginTop: 10,
//   },
//   menuItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 16,
//     borderBottomWidth: 0.5,
//     borderColor: "#eee",
//   },
//   menuText: {
//     flex: 1,
//     marginLeft: 15,
//     fontSize: 15,
//   },
// });
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

/* MENU DATA */
const MENU = [
  { icon: "card-outline", title: "Department Status" },
  { icon: "ticket-outline", title: "Reports" },
  { icon: "document-text-outline", title: "User Management" },
  { icon: "settings-outline", title: "Settings" },
{ icon: "log-out-outline", title: "Logout" },

];

export default function Profilee() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView>

        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.name}>Madhu</Text>
          <Text style={styles.sub}>+91-9392319072</Text>
          <Text style={styles.sub}>seetalammadhu123@gmail.com</Text>
        </View>

        {/* QUICK CARDS */}
        <View style={styles.quickRow}>
          <Quick label="Total Problems" value="120" />
          <Quick label="Pending" value="45" />
          <Quick label="Resolved" value="75" />
        </View>

        {/* MENU LIST */}
        <View style={styles.menu}>
          {MENU.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <Ionicons name={item.icon} size={22} color="#444" />
              <Text style={styles.menuText}>{item.title}</Text>
              <Ionicons name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

/* QUICK CARD COMPONENT */
const Quick = ({ label, value }) => {
  const getIcon = () => {
    if (label === "Total Problems") return "list-outline";
    if (label === "Pending") return "time-outline";
    if (label === "Resolved") return "checkmark-done-outline";
    return "information-circle-outline";
  };

  return (
    <View style={styles.quickCard}>
      <Ionicons name={getIcon()} size={28} color="#FF5200" />
      <Text style={styles.quickValue}>{value}</Text>
      <Text style={styles.quickText}>{label}</Text>
    </View>
  );
};

/* STYLES */
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },

  header: {
    backgroundColor: "#65b55ec3",
    padding: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  name: { fontSize: 22, fontWeight: "bold", color:"white" },
  sub: { color: "white", marginTop: 4 },

  /* QUICK CARDS */
  quickRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 12,
    marginTop: 15,
  },
  quickCard: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 6,
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  quickValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 6,
    color: "#223D79",
  },
  quickText: {
    fontSize: 12,
    marginTop: 4,
    textAlign: "center",
    color: "#666",
  },

  /* MENU */
  menu: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 0.5,
    borderColor: "#eee",
  },
  menuText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 15,
  },
});
