// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import DashboardScreen from './DashboardScreen';
// import VisitorsScreen from './screens/VisitorsScreen';
// import PendingApprovalsScreen from './screens/PendingApprovalsScreen';
// import ApprovedScreen from './screens/ApprovedScreen';
// import RejectedScreen from './screens/RejectedScreen';

// const Stack = createNativeStackNavigator();

// export default function DashboardStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="DashboardHome"
//         component={DashboardScreen}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen name="Visitors" component={VisitorsScreen} />
//       <Stack.Screen name="PendingApprovals" component={PendingApprovalsScreen} />
//       <Stack.Screen name="ApprovedList" component={ApprovedScreen} />
//       <Stack.Screen name="RejectedList" component={RejectedScreen} />
//     </Stack.Navigator>
//   );
// }
// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import DashboardScreen from './DashboardScreen';
// import VisitorsScreen from './screens/VisitorsScreen';
// import PendingApprovalsScreen from './screens/PendingApprovalsScreen';
// import ApprovedScreen from './screens/ApprovedScreen';
// import RejectedScreen from './screens/RejectedScreen';
// import DashboardScreen from './DashboardScreen';
// import DashboardScreen from './DashboardScreen';

// const Stack = createNativeStackNavigator();

// export default function DashboardStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="DashboardHome"
//         component={DashboardStack}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen name="Visitors" component={VisitorsScreen} />
//       <Stack.Screen name="PendingApprovals" component={PendingApprovalsScreen} />
//       <Stack.Screen name="ApprovedList" component={ApprovedScreen} />
//       <Stack.Screen name="RejectedList" component={RejectedScreen} />
//     </Stack.Navigator>
//   );
// }
// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import DashboardScreen from './DashboardScreen';
// import VisitorsScreen from './screens/VisitorsScreen';
// import PendingApprovalsScreen from './screens/PendingApprovalsScreen';
// import ApprovedScreen from './screens/ApprovedScreen';
// import RejectedScreen from './screens/RejectedScreen';

// const Stack = createNativeStackNavigator();

// export default function DashboardStack() {
//   return (
//     <Stack.Navigator>
//       {/* Dashboard main screen */}
//       <Stack.Screen
//         name="Dashboard"
//         component={DashboardScreen} // ✅ Correct here
//         options={{ headerShown: true }}
//       />

//       {/* Other nested screens */}
//       <Stack.Screen name="Visitors" component={VisitorsScreen} />
//       <Stack.Screen name="PendingApprovals" component={PendingApprovalsScreen} />
//       <Stack.Screen name="ApprovedList" component={ApprovedScreen} />
//       <Stack.Screen name="RejectedList" component={RejectedScreen} />
//     </Stack.Navigator>
//   );
// }
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
 
import DashboardScreen from "./DashboardScreen";
// import OtherDashboardScreen from "./OtherDashboardScreen"; // example other screen
 
const Stack = createNativeStackNavigator();
 
// Custom header for DashboardScreen
function DashboardHeader({ title }) {
  const navigation = useNavigation();
 
  return (
    <View style={styles.header}>
      {/* Menu Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Ionicons name="menu" size={28} color="#fff" />
      </TouchableOpacity>
 
      {/* Title */}
      <Text style={styles.title}>{title}</Text>
 
      {/* Home Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Ionicons name="home" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
 
export default function DashboardStack() {
  return (
    <Stack.Navigator>
      {/* DashboardScreen uses custom header */}
      <Stack.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{
          header: () => <DashboardHeader title="Dashboard" />,
        }}
      />
 
      {/* Other screens get default back button header */}
      <Stack.Screen
        name="OtherDashboardScreen"
        component={OtherDashboardScreen}
        options={{
          headerShown: true, // default back button appears
          title: "Details", // title shown in default header
        }}
      />
    </Stack.Navigator>
  );
}
 
const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: "#4CAF50", // change header color if you want
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    padding: 5,
  },
});