// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import GrievanceStatus from './GrievanceStatus';

// const menu = [
//   //  { name: 'Dashboard', icon: 'home' },
//   {name : 'All Grievances', icon: 'book'},
//   {name: 'Manage Grievance', icon:'construct'},
//   {name: 'Assign Grievance', icon:'person'},
//   {name: 'Reports and Analytics', icon:'trending-up'},
//   {name: 'User Management', icon:'people'},
//   {name: 'Departments', icon:'business'},
//   {name: 'Constitutional survey', icon:'clipboard'},
//   {name:'LogOut', icon:'power'},

// ];
// export default function Sidebar({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.logo}>e-Governance</Text>

//       {menu.map((item, index) => (
//         <TouchableOpacity
//           key={index}
//           style={styles.item}
//           onPress={() => navigation.navigate(item.name)}
//         >
//           <Ionicons name={item.icon} size={20} color="#fff" />
//           <Text style={styles.text}>{item.name}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0b3c6d',
//     paddingTop: 50,
//     paddingHorizontal: 15,
//   },
//   logo: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 30,
//   },
//   item: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 12,
//   },
//   text: {
//     color: '#fff',
//     marginLeft: 15,
//     fontSize: 15,
//   },
// });


// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// const menu = [
//   { name: 'All Grievances', icon: 'book' },
//   { name: 'Manage Grievance', icon: 'construct' },
//   { name: 'Assign Grievance', icon: 'person' },
//   { name: 'Reports and Analytics', icon: 'trending-up' },
//   { name: 'User Management', icon: 'people' },
//   { name: 'Departments', icon: 'business' },
//   { name: 'Constitutional survey', icon: 'clipboard' },
//   { name: 'LogOut', icon: 'power' },
// ];

// export default function Sidebar({ navigation, state }) {
//   const activeRoute = state.routeNames[state.index];
//   if (activeRoute === 'Home') return null; // hide sidebar for Home

//   return (
//     <View style={styles.container}>
//       <Text style={styles.logo}>e-Governance</Text>
//       {menu.map((item, index) => (
//         <TouchableOpacity
//           key={index}
//           style={styles.item}
//           onPress={() => {
//             if (item.name === 'LogOut') {
//               global.LOGIN_SUCCESS = null;
//               navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
//             } else {
//               navigation.navigate(item.name);
//             }
//           }}
//         >
//           <Ionicons name={item.icon} size={20} color="#fff" />
//           <Text style={styles.text}>{item.name}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0b3c6d',
//     paddingTop: 50,
//     paddingHorizontal: 15,
//   },
//   logo: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 30,
//   },
//   item: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 12,
//   },
//   text: {
//     color: '#fff',
//     marginLeft: 15,
//     fontSize: 15,
//   },
// });
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GrievanceStatus from './GrievanceStatus';
 
const menu = [

  {name : 'All Grievances', icon: 'book'},
  {name: 'Manage Grievance', icon:'construct'},
  {name: 'Assign Grievance', icon:'person'},
  {name: 'Reports and Analytics', icon:'trending-up'},
  {name: 'User Management', icon:'people'},
  {name: 'Departments', icon:'business'},
  {name: 'Constitutional survey', icon:'clipboard'},
  {name:'LogOut', icon:'power'},
 
];
export default function Sidebar({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>e-Governance</Text>
 
      {menu.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.item}
          onPress={() => navigation.navigate(item.name)}
        >
          <Ionicons name={item.icon} size={20} color="#fff" />
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b3c6d',
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  logo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  text: {
    color: '#fff',
    marginLeft: 15,
    fontSize: 15,
  },
});