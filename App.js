// // import 'react-native-gesture-handler';
// // import React from 'react';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createDrawerNavigator } from '@react-navigation/drawer';
// // import { GestureHandlerRootView } from 'react-native-gesture-handler';
// // import { TouchableOpacity } from 'react-native';
// // import { Ionicons } from '@expo/vector-icons';

// // import DashboardScreen from './DashboardScreen';
// // import Sidebar from './Sidebar';
// // import Usermanagement from './Usermanagement';

// // import AllGrievances from './AllGrievances';
// // import ManageGrievance from './ManageGrievance';
// // import AssignGrievance from './AssignGrievance';
// // import Reports from './Reports';
// // import Departments from './Departments';
// // import Constitutional from './Constitutional'

// // const Drawer = createDrawerNavigator();

// // export default function App() {
// //   return (
// //     <GestureHandlerRootView style={{ flex: 1 }}>
// //       <NavigationContainer>
// //         <Drawer.Navigator
// //           drawerContent={(props) => <Sidebar {...props} />}
// //           screenOptions={({ navigation }) => ({
// //             headerStyle: { backgroundColor: '#0b3c6d' },
// //             headerTintColor: '#fff',
// //             headerLeft: () => (
// //               <TouchableOpacity
// //                 onPress={() => navigation.openDrawer()}
// //                 style={{ marginLeft: 15 }}
// //               >
// //                 <Ionicons name="menu" size={24} color="#fff" />
// //               </TouchableOpacity>
// //             ),
// //           })}
// //         >
// //           <Drawer.Screen
// //             name="Dashboard"
// //             component={DashboardScreen}
// //             options={{ title: 'Raise Grievance Dashboard' }}
// //           />

      
// //           <Drawer.Screen
// //             name="User Management"
// //             component={Usermanagement}
// //             options={{ title: 'Usermanagement' }}
// //           />
// //           <Drawer.Screen
// //           name="All Grievances"
// //           component={ AllGrievances}
// //           options={{ title: 'AllGrievances'}}
// //           />
// //           <Drawer.Screen
// //           name="Manage Grievance"
// //           component={ ManageGrievance }
// //           options={{ title: 'ManageGrievance'}}
// //           />
// //           <Drawer.Screen
// //           name="Assign Grievance"
// //           component={AssignGrievance}
// //           options={{title: 'AssignGrievance'}}
// //           />
// //           <Drawer.Screen
// //           name="Reports and Analytics"
// //           component={Reports}
// //           options={{title: 'Reports'}}
// //           />
// //           <Drawer.Screen
// //           name='Departments'
// //           component={Departments}
// //           options={{title:'Departments'}}
// //           />
// //           <Drawer.Screen
// //           name='survey'
// //           component={Constitutional}
// //           options={{title:'Constitutional'}}
// //           />

// //         </Drawer.Navigator>
// //       </NavigationContainer>
// //     </GestureHandlerRootView>
// //   );
// // }
// import 'react-native-gesture-handler';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// import DashboardScreen from './DashboardScreen';
// import Sidebar from './Sidebar';
// import Usermanagement from './Usermanagement';
// import AllGrievances from './AllGrievances';
// import ManageGrievance from './ManageGrievance';
// import AssignGrievance from './AssignGrievance';
// import Reports from './Reports';
// import Departments from './Departments';
// import Constitutional from './Constitutional';

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <NavigationContainer>
//         <Drawer.Navigator
//           drawerContent={(props) => <Sidebar {...props} />}
//           screenOptions={({ navigation }) => ({
//             headerStyle: { backgroundColor: '#0b3c6d' },
//             headerTintColor: '#fff',
//             headerLeft: () => (
//               <TouchableOpacity
//                 onPress={() => navigation.openDrawer()}
//                 style={{ marginLeft: 15 }}
//               >
//                 <Ionicons name="menu" size={24} color="#fff" />
//               </TouchableOpacity>
//             ),
//           })}
//         >
//           <Drawer.Screen name="Dashboard" component={DashboardScreen} />
//           <Drawer.Screen name="User Management" component={Usermanagement} />
//           <Drawer.Screen name="All Grievances" component={AllGrievances} />
//           <Drawer.Screen name="Manage Grievance" component={ManageGrievance} />
//           <Drawer.Screen name="Assign Grievance" component={AssignGrievance} />
//           <Drawer.Screen name="Reports and Analytics" component={Reports} />
//           <Drawer.Screen name="Departments" component={Departments} />
//           <Drawer.Screen name="Constitutional Survey" component={Constitutional} />
//         </Drawer.Navigator>
//       </NavigationContainer>
//     </GestureHandlerRootView>
//   );
// }
// import 'react-native-gesture-handler';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// import DashboardScreen from './DashboardScreen';
// import Sidebar from './Sidebar';
// import DashboardStack from './DashboardStack';
// import { StackScreen } from 'react-native-screens';
// import Usermanagement from './Usermanagement';
// import AllGrievances from './AllGrievances';
// import ManageGrievance from './ManageGrievance';
// import AssignGrievance from './AssignGrievance';
// import Reports from './Reports';
// import Departments from './Departments';
// import Constitutional from './Constitutional'; // ✅ tabs screen


// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <NavigationContainer>
//         <Drawer.Navigator
//           drawerContent={(props) => <Sidebar {...props} />}
//           screenOptions={({ navigation }) => ({
//             headerStyle: { backgroundColor: '#0b3c6d' },
//             headerTintColor: '#fff',
//             headerLeft: () => (
//               <TouchableOpacity
//                 onPress={() => navigation.openDrawer()}
//                 style={{ marginLeft: 15 }}
//               >
//                 <Ionicons name="menu" size={24} color="#fff" />
//               </TouchableOpacity>
//             ),
//           })}
//         >
//           <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      
//           {/* <Drawer.Screen name="User Management" component={Usermanagement} />
//           <Drawer.Screen name="All Grievances" component={AllGrievances} />
//           <Drawer.Screen name="Manage Grievance" component={ManageGrievance} />
//           <Drawer.Screen name="Assign Grievance" component={AssignGrievance} />
//           <Drawer.Screen name="Reports and Analytics" component={Reports} />
//           <Drawer.Screen name="Departments" component={Departments} />
//           <Drawer.Screen
//             name="Constitutional survey"
//             component={Constitutional}
//           /> */}
//         </Drawer.Navigator>
//       </NavigationContainer>
//     </GestureHandlerRootView>
//   );
// }
// import 'react-native-gesture-handler';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// import Sidebar from './Sidebar';
// import DashboardStack from './DashboardStack';
// import Usermanagement from './Usermanagement';
// import AllGrievances from './AllGrievances';
// import ManageGrievance from './ManageGrievance';
// import AssignGrievance from './AssignGrievance';
// import Reports from './Reports';
// import Departments from './Departments';
// import Constitutional from './Constitutional';
// import Home from './Home';

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <NavigationContainer>
//         <Drawer.Navigator
//           drawerContent={(props) => <Sidebar {...props} />}
//           screenOptions={({ navigation, route }) => ({
//             headerStyle: { backgroundColor: '#0b3c6d' },
//             headerTintColor: '#fff',

//             // ✅ HIDE MENU ON HOME
//             headerLeft: route.name === 'Home'
//               ? null
//               : () => (
//                   <TouchableOpacity
//                     onPress={() => navigation.openDrawer()}
//                     style={{ marginLeft: 15 }}
//                   >
//                     <Ionicons name="menu" size={24} color="#fff" />
//                   </TouchableOpacity>
//                 ),
//           })}
//         >
//           {/* HOME – NO MENU */}
//           <Drawer.Screen
//             name="Home"
//             component={Home}
//             options={{ title: 'Home' }}
//           />

//           {/* DASHBOARD STACK */}
//           <Drawer.Screen
//             name="Dashboard"
//             component={DashboardStack}
//             options={{ title: 'Dashboard' }}
//           />

//           <Drawer.Screen name="User Management" component={Usermanagement} />
//           <Drawer.Screen name="All Grievances" component={AllGrievances} />
//           <Drawer.Screen name="Manage Grievance" component={ManageGrievance} />
//           <Drawer.Screen name="Assign Grievance" component={AssignGrievance} />
//           <Drawer.Screen name="Reports and Analytics" component={Reports} />
//           <Drawer.Screen name="Departments" component={Departments} />
//           <Drawer.Screen
//             name="Constitutional survey"
//             component={Constitutional}
//           />
//         </Drawer.Navigator>
//       </NavigationContainer>
//     </GestureHandlerRootView>
//   );
// }





// import 'react-native-gesture-handler';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// import Sidebar from './Sidebar';
// import DashboardStack from './DashboardStack';
// import Usermanagement from './Usermanagement';
// import AllGrievances from './AllGrievances';
// import ManageGrievance from './ManageGrievance';
// import AssignGrievance from './AssignGrievance';
// import Reports from './Reports';
// import Departments from './Departments';
// import Constitutional from './Constitutional';
// import Home from './Home';
// import DashboardScreen from './DashboardScreen';


// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <NavigationContainer>
//         <Drawer.Navigator
//           drawerContent={(props) => <Sidebar {...props} />}
//           screenOptions={({ navigation }) => ({
//             headerStyle: { backgroundColor: '#0b3c6d' },
//             headerTintColor: '#fff',
//             headerLeft: () => (
//               <TouchableOpacity
//                 onPress={() => navigation.openDrawer()}
//                 style={{ marginLeft: 15 }}
//               >
//                 <Ionicons name="menu" size={24} color="#fff" />
//               </TouchableOpacity>
//             ),
//           })}
//         >
//              {/* ✅ HOME */}
//           <Drawer.Screen
//             name="Home"
//             component={Home}
//             options={{ title: 'Home' }}
//           />
//           <Drawer.Screen
//             name="Dashboard"
//             component={DashboardStack}
//             options={{ headerShown: true }}
//           />
//            <Drawer.Screen name="User Management" component={Usermanagement} />
//            <Drawer.Screen name="All Grievances" component={AllGrievances} />
//            <Drawer.Screen name="Manage Grievance" component={ManageGrievance} />
//            <Drawer.Screen name="Assign Grievance" component={AssignGrievance} />
//            <Drawer.Screen name="Reports and Analytics" component={Reports} />
//            <Drawer.Screen name="Departments" component={Departments} />
//            <Drawer.Screen
//             name="Constitutional survey"
//             component={Constitutional}
//           /> 

          
         

//         </Drawer.Navigator>
//       </NavigationContainer>
//     </GestureHandlerRootView>
//   );
// }

// import 'react-native-gesture-handler';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

// import Sidebar from './Sidebar';
// import DashboardStack from './DashboardStack';
// import Usermanagement from './Usermanagement';
// import AllGrievances from './AllGrievances';
// import ManageGrievance from './ManageGrievance';
// import AssignGrievance from './AssignGrievance';
// import Reports from './Reports';
// import Departments from './Departments';
// import Constitutional from './Constitutional';
// import Home from './Home';

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <NavigationContainer>
//         <Drawer.Navigator
//           drawerContent={(props) => <Sidebar {...props} />}
//           screenOptions={{
//             headerStyle: { backgroundColor: '#0b3c6d' },
//             headerTintColor: '#fff',
//             headerLeft: () => null, // ❌ hide menu everywhere
//           }}
//         >
//           <Drawer.Screen
//             name="Home"
//             component={Home}
//             options={{ headerShown:true }}
//           />

//           {/* ✅ Dashboard handles its own header */}
//           <Drawer.Screen
//             name="Dashboard"
//             component={DashboardStack}
//             options={{ headerShown: true }}
//           />

//           <Drawer.Screen name="User Management" component={Usermanagement} />
//           <Drawer.Screen name="All Grievances" component={AllGrievances} />
//           <Drawer.Screen name="Manage Grievance" component={ManageGrievance} />
//           <Drawer.Screen name="Assign Grievance" component={AssignGrievance} />
//           <Drawer.Screen name="Reports and Analytics" component={Reports} />
//           <Drawer.Screen name="Departments" component={Departments} />
//           <Drawer.Screen
//             name="Constitutional survey"
//             component={Constitutional}
//           />
//         </Drawer.Navigator>
//       </NavigationContainer>
//     </GestureHandlerRootView>
//   );
// }










// import 'react-native-gesture-handler';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// import Sidebar from './Sidebar';
// import DashboardStack from './DashboardStack';
// import Usermanagement from './Usermanagement';
// import AllGrievances from './AllGrievances';
// import ManageGrievance from './ManageGrievance';
// import AssignGrievance from './AssignGrievance';
// import Reports from './Reports';
// import Departments from './Departments';
// import Constitutional from './Constitutional';
// import Home from './Home';

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <NavigationContainer>
//         <Drawer.Navigator
//           drawerContent={(props) => <Sidebar {...props} />}
//           screenOptions={({ navigation, route }) => ({
//             headerStyle: { backgroundColor: '#0b3c6d' },
//             headerTintColor: '#fff',

//             // 🔒 FIX #1 — FULL DRAWER LOCK
//             swipeEnabled: false,
//             gestureEnabled: false,
//             drawerType: 'front',

//             // ✅ Menu hidden on Home
//             headerLeft:
//               route.name === 'Home'
//                 ? null
//                 : () => (
//                     <TouchableOpacity
//                       onPress={() => navigation.openDrawer()}
//                       style={{ marginLeft: 15 }}
//                     >
//                       <Ionicons name="menu" size={24} color="#fff" />
//                     </TouchableOpacity>
//                   ),
//           })}
//         >
//           <Drawer.Screen name="Home" component={Home} />
//           <Drawer.Screen name="Dashboard" component={DashboardStack} />
//           <Drawer.Screen name="User Management" component={Usermanagement} />
//           <Drawer.Screen name="All Grievances" component={AllGrievances} />
//           <Drawer.Screen name="Manage Grievance" component={ManageGrievance} />
//           <Drawer.Screen name="Assign Grievance" component={AssignGrievance} />
//           <Drawer.Screen name="Reports and Analytics" component={Reports} />
//           <Drawer.Screen name="Departments" component={Departments} />
//           <Drawer.Screen
//             name="Constitutional survey"
//             component={Constitutional}
//           />
//         </Drawer.Navigator>
//       </NavigationContainer>
//     </GestureHandlerRootView>
//   );
// }
// import 'react-native-gesture-handler';
// import React, { useState, useEffect } from 'react';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// import Vamsi from './vamsi'; // 👈 unchanged
// import Sidebar from './Sidebar';
// import DashboardStack from './DashboardStack';
// import Usermanagement from './Usermanagement';
// import AllGrievances from './AllGrievances';
// import ManageGrievance from './ManageGrievance';
// import AssignGrievance from './AssignGrievance';
// import Reports from './Reports';
// import Departments from './Departments';
// import Constitutional from './Constitutional';
// import Home from './Home';

// const Drawer = createDrawerNavigator();

// export default function App() {
//   const [showDrawerApp, setShowDrawerApp] = useState(false);

//   /**
//    * 🔑 IMPORTANT:
//    * Since vamsi has no navigation,
//    * we switch after login animation time.
//    * (works perfectly for now)
//    */
//    useEffect(() => {
//     global.LOGIN_SUCCESS = () => setShowDrawerApp(true);
//     return () => {
//       global.LOGIN_SUCCESS = null;
//     };
//   }, []);

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <NavigationContainer>
//         {showDrawerApp ? (
//           <Drawer.Navigator
//             drawerContent={(props) => <Sidebar {...props} />}
//             screenOptions={({ navigation, route }) => ({
//               headerStyle: { backgroundColor: '#0b3c6d' },
//               headerTintColor: '#fff',
//               swipeEnabled: false,
//               gestureEnabled: false,
//               headerLeft:
//                 route.name === 'Home'
//                   ? null
//                   : () => (
//                       <TouchableOpacity
//                         onPress={() => navigation.openDrawer()}
//                         style={{ marginLeft: 15 }}
//                       >
//                         <Ionicons name="menu" size={24} color="#fff" />
//                       </TouchableOpacity>
//                     ),
//             })}
//           >
//             <Drawer.Screen name="Home" component={Home} />
//             <Drawer.Screen name="Dashboard" component={DashboardStack} />
//             <Drawer.Screen name="User Management" component={Usermanagement} />
//             <Drawer.Screen name="All Grievances" component={AllGrievances} />
//             <Drawer.Screen name="Manage Grievance" component={ManageGrievance} />
//             <Drawer.Screen name="Assign Grievance" component={AssignGrievance} />
//             <Drawer.Screen
//               name="Reports and Analytics"
//               component={Reports}
//             />
//             <Drawer.Screen name="Departments" component={Departments} />
//             <Drawer.Screen
//               name="Constitutional survey"
//               component={Constitutional}
//             />
//           </Drawer.Navigator>
//         ) : (
//           <Vamsi />
//         )}
//       </NavigationContainer>
//     </GestureHandlerRootView>
//   );
// }
// import 'react-native-gesture-handler';
// import React, { useState, useEffect } from 'react';
// import { GestureHandlerRootView, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { Ionicons } from '@expo/vector-icons';

// import Sidebar from './Sidebar';
// import Home from './Home';
// import DashboardScreen from './DashboardScreen';
// import AllGrievances from './AllGrievances';
// import ManageGrievance from './ManageGrievance';
// import AssignGrievance from './AssignGrievance';
// import Reports from './Reports';
// import Usermanagement from './Usermanagement';
// import Departments from './Departments';
// import Constitutional from './Constitutional';
// import Vamsi from './vamsi'; // login / splash screen

// const Drawer = createDrawerNavigator();

// export default function App() {
//   const [showDrawerApp, setShowDrawerApp] = useState(false);

//   useEffect(() => {
//     global.LOGIN_SUCCESS = () => setShowDrawerApp(true);
//     return () => {
//       global.LOGIN_SUCCESS = null;
//     };
//   }, []);

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <NavigationContainer>
//         {showDrawerApp ? (
//           <Drawer.Navigator
//             drawerContent={(props) => <Sidebar {...props} />}
//             screenOptions={({ navigation, route }) => ({
//               headerStyle: { backgroundColor: '#0b3c6d' },
//               headerTintColor: '#fff',
//               swipeEnabled: false,
//               gestureEnabled: false,

//               // ✅ Only Home has no toggle button
//               headerLeft:
//                 route.name === 'Home'
//                   ? null
//                   : () => (
//                       <TouchableOpacity
//                         onPress={() => navigation.openDrawer()}
//                         style={{ marginLeft: 15 }}
//                       >
//                         <Ionicons name="menu" size={24} color="#fff" />
//                       </TouchableOpacity>
//                     ),
//             })}
//           >
//             <Drawer.Screen name="Home" component={Home} />
//             <Drawer.Screen name="Dashboard" component={DashboardScreen} />
//             <Drawer.Screen name="All Grievances" component={AllGrievances} />
//             <Drawer.Screen name="Manage Grievance" component={ManageGrievance} />
//             <Drawer.Screen name="Assign Grievance" component={AssignGrievance} />
//             <Drawer.Screen name="Reports and Analytics" component={Reports} />
//             <Drawer.Screen name="User Management" component={Usermanagement} />
//             <Drawer.Screen name="Departments" component={Departments} />
//             <Drawer.Screen
//               name="Constitutional survey"
//               component={Constitutional}
//             />
//           </Drawer.Navigator>
//         ) : (
//           <Vamsi />
//         )}
//       </NavigationContainer>
//     </GestureHandlerRootView>
//   );
// }
// import 'react-native-gesture-handler';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// import Sidebar from './Sidebar';
// import DashboardStack from './DashboardStack';
// import Usermanagement from './Usermanagement';
// import AllGrievances from './AllGrievances';
// import ManageGrievance from './ManageGrievance';
// import AssignGrievance from './AssignGrievance';
// import Reports from './Reports';
// import Departments from './Departments';
// import Constitutional from './Constitutional';
// import Home from './Home';
// import vamsi from './vamsi';
// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <NavigationContainer>
//         <Drawer.Navigator
//           drawerContent={(props) => <Sidebar {...props} />}
//           screenOptions={({ navigation, route }) => ({
//             headerStyle: { backgroundColor: '#0b3c6d' },
//             headerTintColor: '#fff',

//             // ✅ HIDE MENU ON HOME
//             headerLeft: route.name === 'Home'
//               ? null
//               : () => (
//                   <TouchableOpacity
//                     onPress={() => navigation.openDrawer()}
//                     style={{ marginLeft: 15 }}
//                   >
//                     <Ionicons name="menu" size={24} color="#fff" />
//                   </TouchableOpacity>
//                 ),
//           })}
//         >
//           {/* HOME – NO MENU */}
//           <Drawer.Screen
//             name="Home"
//             component={Home}
//             options={{ title: 'Home' }}
//           />

//           {/* DASHBOARD STACK */}
//           <Drawer.Screen
//             name="Dashboard"
//             component={DashboardStack}
//             options={{ title: 'Dashboard' }}
//           />

//           <Drawer.Screen name="User Management" component={Usermanagement} />
//           <Drawer.Screen name="All Grievances" component={AllGrievances} />
//           <Drawer.Screen name="Manage Grievance" component={ManageGrievance} />
//           <Drawer.Screen name="Assign Grievance" component={AssignGrievance} />
//           <Drawer.Screen name="Reports and Analytics" component={Reports} />
//           <Drawer.Screen name="Departments" component={Departments} />
//           <Drawer.Screen
//             name="Constitutional survey"
//             component={Constitutional}
//           />
//         </Drawer.Navigator>
//           ) : (
//          <Vamsi />
//          )}

//       </NavigationContainer>
//     </GestureHandlerRootView>
//   );
// }

// import 'react-native-gesture-handler';
// import React, { useState, useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// import Sidebar from './Sidebar';
// import DashboardStack from './DashboardStack';
// import Usermanagement from './Usermanagement';
// import AllGrievances from './AllGrievances';
// import ManageGrievance from './ManageGrievance';
// import AssignGrievance from './AssignGrievance';
// import Reports from './Reports';
// import Departments from './Departments';
// import Constitutional from './Constitutional';
// import Home from './Home';
// import Vamsi from './vamsi';

// const Drawer = createDrawerNavigator();

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // 🔑 LOGIN CALLBACK FROM VAMSI
//   useEffect(() => {
//     global.LOGIN_SUCCESS = () => {
//       setIsLoggedIn(true);
//     };

//     return () => {
//       global.LOGIN_SUCCESS = null;
//     };
//   }, []);

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <NavigationContainer>
//         {isLoggedIn ? (
//           <Drawer.Navigator
//             drawerContent={(props) => <Sidebar {...props} />}
//             screenOptions={({ navigation, route }) => ({
//               headerStyle: { backgroundColor: '#0b3c6d' },
//               headerTintColor: '#fff',

//               // ❌ NO MENU ON HOME
//               headerLeft:
//                 route.name === 'Home'
//                   ? null
//                   : () => (
//                       <TouchableOpacity
//                         onPress={() => navigation.openDrawer()}
//                         style={{ marginLeft: 15 }}
//                       >
//                         <Ionicons name="menu" size={24} color="#fff" />
//                       </TouchableOpacity>
//                     ),
//             })}
//           >
//             {/* HOME */}
//             <Drawer.Screen
//               name="Home"
//               component={Home}
//               options={{ title: '' }}
//             />

//             {/* DASHBOARD */}
//             <Drawer.Screen
//               name="Dashboard"
//               component={DashboardStack}
//               options={{ title: 'Dashboard' }}
//             />

//             <Drawer.Screen name="User Management" component={Usermanagement} />
//             <Drawer.Screen name="All Grievances" component={AllGrievances} />
//             <Drawer.Screen name="Manage Grievance" component={ManageGrievance} />
//             <Drawer.Screen name="Assign Grievance" component={AssignGrievance} />
//             <Drawer.Screen
//               name="Reports and Analytics"
//               component={Reports}
//             />
//             <Drawer.Screen name="Departments" component={Departments} />
//             <Drawer.Screen
//               name="Constitutional survey"
//               component={Constitutional}
//             />
//           </Drawer.Navigator>
//         ) : (
//           // 🔐 LOGIN / SPLASH FIRST
//           <Vamsi />
//         )}
//       </NavigationContainer>
//     </GestureHandlerRootView>
//   );
// }



// import 'react-native-gesture-handler';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
 
// import Sidebar from './Sidebar';
// import DashboardStack from './DashboardStack';
// import Usermanagement from './Usermanagement';
// import AllGrievances from './AllGrievances';
// import ManageGrievance from './ManageGrievance';
// import AssignGrievance from './AssignGrievance';
// import Reports from './Reports';
// import Departments from './Departments';
// import Constitutional from './Constitutional';
// import Home from './Home';
 
// const Drawer = createDrawerNavigator();
 
// export default function App() {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // 🔑 LOGIN CALLBACK FROM VAMSI
//   useEffect(() => {
//     global.LOGIN_SUCCESS = () => {
//       setIsLoggedIn(true);
//     };

//     return () => {
//       global.LOGIN_SUCCESS = null;
//     };
//   }, []);
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <NavigationContainer>
//         <Drawer.Navigator
//   drawerContent={(props) => <Sidebar {...props} />}
//   screenOptions={{
//     headerShown: false,  
//   }}
// >
 
 
//           <Drawer.Screen name="Home" component={Home} />
//           <Drawer.Screen name="Dashboard" component={DashboardStack} />
//           <Drawer.Screen name="User Management" component={Usermanagement} />
//           <Drawer.Screen name="All Grievances" component={AllGrievances} />
//           <Drawer.Screen name="Manage Grievance" component={ManageGrievance} />
//           <Drawer.Screen name="Assign Grievance" component={AssignGrievance} />
//           <Drawer.Screen name="Reports and Analytics" component={Reports} />
//           <Drawer.Screen name="Departments" component={Departments} />
//           <Drawer.Screen
//             name="Constitutional survey"
//             component={Constitutional}
//           />
//         </Drawer.Navigator>
//           ) : (
//           // 🔐 LOGIN / SPLASH FIRST
//            <Vamsi />
//         )}
//       </NavigationContainer>
//     </GestureHandlerRootView>
//   );
// }
import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Sidebar from './Sidebar';
import DashboardStack from './DashboardStack';
import Usermanagement from './Usermanagement';
import AllGrievances from './AllGrievances';
import ManageGrievance from './ManageGrievance';
import AssignGrievance from './AssignGrievance';
import Reports from './Reports';
import Departments from './Departments';
import Constitutional from './Constitutional';
import Home from './Home';
import Vamsi from './vamsi'; // Make sure you import your login/splash component
import Profilee from './Profilee';

const Drawer = createDrawerNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 🔑 LOGIN CALLBACK
  useEffect(() => {
    global.LOGIN_SUCCESS = () => {
      setIsLoggedIn(true);
    };

    return () => {
      global.LOGIN_SUCCESS = null;
    };
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {isLoggedIn ? (
          <Drawer.Navigator
            drawerContent={(props) => <Sidebar {...props} />}
            screenOptions={{ headerShown: false }}
          >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Dashboard" component={DashboardStack} />
            <Drawer.Screen name="User Management" component={Usermanagement} />
            <Drawer.Screen name="All Grievances" component={AllGrievances} />
            <Drawer.Screen name="Manage Grievance" component={ManageGrievance} />
            <Drawer.Screen name="Assign Grievance" component={AssignGrievance} />
            <Drawer.Screen name="Reports and Analytics" component={Reports} />
            <Drawer.Screen name="Departments" component={Departments} />
            <Drawer.Screen
              name="Constitutional survey"
              component={Constitutional}
            />
              <Drawer.Screen name="Profile" component={Profilee} />
          </Drawer.Navigator>
            
        ) : (
          // 🔐 Show login/splash screen first
          <Vamsi />
        )}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
