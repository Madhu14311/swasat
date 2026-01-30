
// import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import StatCard from './StatCard';
// import GrievanceStatus from './GrievanceStatus';


// export default function DashboardScreen() {
//   return (
//     <ScrollView style={styles.container}>

//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Raise Grievance Dashboard</Text>
//         <View style={styles.headerRight}>
//           <Ionicons name="search" size={20} color="#fff" />
//           <Ionicons name="notifications" size={20} color="#fff" style={{ marginLeft: 15 }} />
//           <Text style={styles.admin}>Admin</Text>
//         </View>
//       </View>


//       <View style={styles.stats}>
//         <StatCard title="Total Grievances" value="1,250" color="#f39c12" />
//         <StatCard title="Pending" value="420" color="#2980b9" />
//         <StatCard title="Resolved" value="780" color="#27ae60" />
//         <StatCard title="Escalated" value="50" color="#c0392b" />
//       </View>

//       <GrievanceStatus />

//       {/* CHART PLACEHOLDERS */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Grievance Status Overview</Text>
//         <View style={styles.chartPlaceholder}>
//           <Text>Pie Chart Here</Text>
//         </View>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Department Wise Grievances</Text>
//         <View style={styles.chartPlaceholder}>
//           <Text>Bar Chart Here</Text>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#f4f6f8' },

//   header: {
//     backgroundColor: '#0b3c6d',
//     padding: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   headerTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
//   headerRight: { flexDirection: 'row', alignItems: 'center' },
//   admin: { color: '#fff', marginLeft: 15 },

//   stats: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     padding: 15,
//   },

//   section: {
//     backgroundColor: '#fff',
//     margin: 15,
//     padding: 15,
//     borderRadius: 10,
//   },
//   sectionTitle: { fontWeight: 'bold', marginBottom: 10 },

//   chartPlaceholder: {
//     height: 180,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ecf0f1',
//     borderRadius: 8,
//   },
// });
// import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import StatCard from './StatCard';
// import GrievanceStatus from './GrievanceStatus';


// // ✅ ADDED (required for charts)
// import { PieChart, BarChart } from 'react-native-chart-kit';

// const screenWidth = Dimensions.get('window').width;

// export default function DashboardScreen() {
//   return (
//     <ScrollView style={styles.container}>

//       {/* HEADER */}
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Raise Grievance Dashboard</Text>
//         <View style={styles.headerRight}>
//           <Ionicons name="search" size={20} color="#fff" />
//           <Ionicons
//             name="notifications"
//             size={20}
//             color="#fff"
//             style={{ marginLeft: 15 }}
//           />
//           <Text style={styles.admin}>Admin</Text>
//         </View>
//       </View>

//       {/* STATS */}
//       <View style={styles.stats}>
//         <StatCard title="Total Grievances" value="1,250" color="#f39c12" />
//         <StatCard title="Pending" value="420" color="#2980b9" />
//         <StatCard title="Resolved" value="780" color="#27ae60" />
//         <StatCard title="Escalated" value="50" color="#c0392b" />
//       </View>

//       {/* STATUS LIST */}
//       <GrievanceStatus />

//       {/* PIE CHART */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Grievance Status Overview</Text>

//         <PieChart
//           data={[
//             {
//               name: 'Pending',
//               population: 420,
//               color: '#2980b9',
//               legendFontColor: '#333',
//               legendFontSize: 12,
//             },
//             {
//               name: 'Resolved',
//               population: 780,
//               color: '#27ae60',
//               legendFontColor: '#333',
//               legendFontSize: 12,
//             },
//             {
//               name: 'Escalated',
//               population: 50,
//               color: '#c0392b',
//               legendFontColor: '#333',
//               legendFontSize: 12,
//             },
//           ]}
//           width={screenWidth - 60}
//           height={220}
//           chartConfig={{
//             color: () => '#000',
//           }}
//           accessor="population"
//           backgroundColor="transparent"
//           paddingLeft="15"
//         />
//       </View>

//       {/* BAR CHART */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Department Wise Grievances</Text>

//         <BarChart
        
//   data={{
//     labels: ['IT', 'HR', 'Finance', 'Admin'],
//     datasets: [{ data: [300, 200, 450, 300] }],
     
//   }}
//   width={screenWidth - 60}
//   height={300}
//   fromZero
//   withInnerLines={false}
//   showValuesOnTopOfBars
//   segments={5}
//   chartConfig={{
//     backgroundGradientFrom: '#ffffff',
//     backgroundGradientTo: '#ffffff',
//     decimalPlaces: 0,
//     barPercentage: 0.7,
//     color: (opacity = 1) => `rgba(11, 60, 109, ${opacity})`,
//     labelColor: () => '#444',
//     propsForLabels: {
//       fontSize: 13,
//       fontWeight: '600',
//     },
//   }}
//   style={{
//     borderRadius: 12,
//     paddingTop: 20,
//   }}
// />

//       </View>
//         <View style={styles.metricGrid}>
//         <Card title="Average Resolution Time">
//           <Text style={styles.big}>{metrics.avg.toFixed(1)} days</Text>
//           <Text style={styles.mutedSmall}>Across resolved grievances</Text>
//         </Card>
 
//         <Card title="Citizens’ Satisfaction">
//           <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
//             <Text style={[styles.big, { color: "#16a34a" }]}>{metrics.sat}%</Text>
//             <View style={styles.satBar}>
//               <View style={[styles.satFill, { width: `${metrics.sat}%` }]} />
//             </View>
//           </View>
//           <Text style={styles.mutedSmall}>Based on feedback surveys</Text>
//         </Card>
//       </View>

//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#f4f6f8' },

//   header: {
//     backgroundColor: '#0b3c6d',
//     padding: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   headerTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
//   headerRight: { flexDirection: 'row', alignItems: 'center' },
//   admin: { color: '#fff', marginLeft: 15 },

//   stats: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     padding: 15,
//   },

//   section: {
//     backgroundColor: '#fff',
//     margin: 15,
//     padding: 15,
//     borderRadius: 10,
//   },
//   sectionTitle: { fontWeight: 'bold', marginBottom: 10 },
// });
// import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import StatCard from './StatCard';
// import GrievanceStatus from './GrievanceStatus';
// import { PieChart, BarChart } from 'react-native-chart-kit';

// const screenWidth = Dimensions.get('window').width;

// // ✅ Custom Card component for metrics
// const Card = ({ title, children }) => (
//   <View style={styles.card}>
//     <Text style={styles.cardTitle}>{title}</Text>
//     {children}
//   </View>
// );

// export default function DashboardScreen() {
//   // Dummy metrics data
//   const metrics = {
//     avg: 4.7,
//     sat: 82,
//   };

//   return (
//     <ScrollView style={styles.container}>
//       {/* HEADER */}
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Dashboard</Text>
//         <View style={styles.headerRight}>
//           <Ionicons name="search" size={20} color="#fff" />
//           <Ionicons name="notifications" size={20} color="#fff" style={{ marginLeft: 15 }} />
//           <Text style={styles.admin}>Admin</Text>
//         </View>
//       </View>

//       {/* STATS */}
//       <View style={styles.stats}>
//         <StatCard title="Todays visitors" value="1,250" color="#f39c12" />
//         <StatCard title="Pending Approvals" value="420" color="#2980b9" />
//         <StatCard title="Approved" value="780" color="#27ae60" />
//         <StatCard title="Rejected" value="50" color="#c0392b" />
//       </View>

//       {/* STATUS LIST */}
//       <GrievanceStatus />

//       {/* PIE CHART */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Grievance Status Overview</Text>
//         <PieChart
//           data={[
//             { name: 'Pending', population: 420, color: '#2980b9', legendFontColor: '#333', legendFontSize: 12 },
//             { name: 'Resolved', population: 780, color: '#27ae60', legendFontColor: '#333', legendFontSize: 12 },
//             { name: 'Escalated', population: 50, color: '#c0392b', legendFontColor: '#333', legendFontSize: 12 },
//           ]}
//           width={screenWidth - 60}
//           height={220}
//           chartConfig={{ color: () => '#000' }}
//           accessor="population"
//           backgroundColor="transparent"
//           paddingLeft="15"
//         />
//       </View>

//       {/* BAR CHART */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Department Wise Grievances</Text>
//         <BarChart
//           data={{
//             labels: ['visitors', 'pending Approvals', 'Approved', 'Rejected'],
//             datasets: [{ data: [300, 200, 450, 300] }],
//           }}
//           width={screenWidth - 60}
//           height={300}
//           fromZero
//           showValuesOnTopOfBars
//           withInnerLines={true}
//           segments={5}
//           chartConfig={{
//             backgroundGradientFrom: '#fff',
//             backgroundGradientTo: '#fff',
//             decimalPlaces: 0,
//             barPercentage: 0.7,
//             color: (opacity = 1) => `rgba(11, 60, 109, ${opacity})`,
          
//             propsForLabels: { fontSize: 13, fontWeight: '600' },
//           }}
//           style={{ borderRadius: 12, paddingTop: 20 }}
//         />
//       </View>

//       {/* METRICS CARDS */}
//       <View style={styles.metricGrid}>
//         <Card title="Average Resolution Time">
//           <Text style={styles.big}>{metrics.avg.toFixed(1)} days</Text>
//           <Text style={styles.mutedSmall}>Across resolved grievances</Text>
//         </Card>

//         <Card title="Citizens’ Satisfaction">
//           <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
//             <Text style={[styles.big, { color: '#16a34a' }]}>{metrics.sat}%</Text>
//             <View style={styles.satBar}>
//               <View style={[styles.satFill, { width: `${metrics.sat}%` }]} />
//             </View>
//           </View>
//           <Text style={styles.mutedSmall}>Based on feedback surveys</Text>
//         </Card>
//       </View>





//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#f4f6f8' },

//   header: {
//     backgroundColor: '#0b3c6d',
//     padding: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   headerTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
//   headerRight: { flexDirection: 'row', alignItems: 'center' },
//   admin: { color: '#fff', marginLeft: 15 },

//   stats: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     padding: 15,
//   },

//   section: {
//     backgroundColor: '#fff',
//     margin: 15,
//     padding: 15,
//     borderRadius: 10,
//   },
//   sectionTitle: { fontWeight: 'bold', marginBottom: 10 },

//   metricGrid: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 15,
//   },
//   card: {
//     backgroundColor: '#fff',
//     padding: 15,
//     borderRadius: 10,
//     flex: 1,
//     marginRight: 10,
//   },
//   cardTitle: { fontWeight: 'bold', marginBottom: 10 },
//   big: { fontSize: 22, fontWeight: 'bold' },
//   mutedSmall: { fontSize: 12, color: '#666' },
//   satBar: { flex: 1, height: 8, backgroundColor: '#e5e7eb', borderRadius: 4 },
//   satFill: { height: 8, backgroundColor: '#16a34a', borderRadius: 4 },
// });
// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Dimensions,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';

// import StatCard from './StatCard';
// import GrievanceStatus from './GrievanceStatus';

// import { PieChart, BarChart } from 'react-native-chart-kit';
// import VisitorsScreen from './screens/VisitorsScreen';
// import PendingApprovalsScreen from './screens/PendingApprovalsScreen';


// const screenWidth = Dimensions.get('window').width;

// // ✅ Reusable metric card
// const Card = ({ title, children, style }) => (
//   <View style={[styles.card, style]}>
//     <Text style={styles.cardTitle}>{title}</Text>
//     {children}
//   </View>
// );

// export default function DashboardScreen() {
//   const navigation = useNavigation();

//   // ✅ Centralized dashboard data
//   const stats = {
//     visitors: 1250,
//     pending: 420,
//     approved: 780,
//     rejected: 50,
//   };

//   const metrics = {
//     avgResolution: 4.7,
//     satisfaction: 82,
//   };

//   return (
//     <ScrollView
//       style={styles.container}
//       contentContainerStyle={{ paddingBottom: 30 }}
//       showsVerticalScrollIndicator={false}
//     >
//       {/* HEADER */}
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Dashboard</Text>
//         <View style={styles.headerRight}>
//           <Ionicons name="search" size={20} color="#fff" />
//           <Ionicons
//             name="notifications-outline"
//             size={20}
//             color="#fff"
//             style={{ marginLeft: 15 }}
//           />
//           <Text style={styles.admin}>Admin</Text>
//         </View>
//       </View>

//       {/* STATS */}
//       <View style={styles.stats}>
//         <StatCard
//           title="Today's Visitors"
//           value={stats.visitors}
//           color="#f39c12"
//           onPress={() => navigation.navigate('VisitorsScreen')}
//         />

//         <StatCard
//           title="Pending Approvals"
//           value={stats.pending}
//           color="#2980b9"
//           onPress={() => navigation.navigate('PendingApprovals')}
//         />

//         <StatCard
//           title="Approved"
//           value={stats.approved}
//           color="#27ae60"
//           onPress={() => navigation.navigate('ApprovedList')}
//         />

//         <StatCard
//           title="Rejected"
//           value={stats.rejected}
//           color="#c0392b"
//           onPress={() => navigation.navigate('RejectedList')}
//         />
//       </View>

//       {/* STATUS LIST */}
//       <GrievanceStatus />

//       {/* PIE CHART */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Overview</Text>

//         <PieChart
//           data={[
//             {
//               name: 'Pending',
//               population: stats.pending,
//               color: '#2980b9',
//               legendFontColor: '#333',
//               legendFontSize: 12,
//             },
//             {
//               name: 'Resolved',
//               population: stats.approved,
//               color: '#27ae60',
//               legendFontColor: '#333',
//               legendFontSize: 12,
//             },
//             {
//               name: 'Escalated',
//               population: stats.rejected,
//               color: '#c0392b',
//               legendFontColor: '#333',
//               legendFontSize: 12,
//             },
//           ]}
//           width={screenWidth - 40}
//           height={220}
//           accessor="population"
//           backgroundColor="transparent"
//           paddingLeft="15"
//           chartConfig={{
//             color: () => '#000',
//           }}
//         />
//       </View>

//       {/* BAR CHART */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Department-wise Overview</Text>

//         <BarChart
//           data={{
//             labels: ['Visitors', 'Pending', 'Approved', 'Rejected'],
//             datasets: [{ data: Object.values(stats) }],
//           }}
//           width={screenWidth - 40}
//           height={280}
//           fromZero
//           showValuesOnTopOfBars
//           withInnerLines
//           chartConfig={{
//             backgroundGradientFrom: '#fff',
//             backgroundGradientTo: '#fff',
//             decimalPlaces: 0,
//             barPercentage: 0.65,
//             color: (opacity = 1) => `rgba(11, 60, 109, ${opacity})`,
//             labelColor: () => '#333',
//             propsForLabels: { fontSize: 12 },
//           }}
//           style={{ borderRadius: 12 }}
//         />
//       </View>

//       {/* METRICS */}
//       <View style={styles.metricGrid}>
//         <Card title="Average Resolution Time" style={{ marginRight: 10 }}>
//           <Text style={styles.big}>{metrics.avgResolution.toFixed(1)} days</Text>
//           <Text style={styles.mutedSmall}>Across resolved grievances</Text>
//         </Card>

//         <Card title="Citizens’ Satisfaction">
//           <View style={styles.satRow}>
//             <Text style={[styles.big, { color: '#16a34a' }]}>
//               {metrics.satisfaction}%
//             </Text>

//             <View style={styles.satBar}>
//               <View
//                 style={[
//                   styles.satFill,
//                   { width: `${metrics.satisfaction}%` },
//                 ]}
//               />
//             </View>
//           </View>

//           <Text style={styles.mutedSmall}>Based on feedback surveys</Text>
//         </Card>
//       </View>
//     </ScrollView>
//   );
// }
// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#f4f6f8' },
//   header: {
//     backgroundColor: '#0b3c6d',
//     padding: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   headerTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
//   headerRight: { flexDirection: 'row', alignItems: 'center' },
//   admin: { color: '#fff', marginLeft: 15 },

//   stats: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     padding: 15,
//   },

//   section: {
//     backgroundColor: '#fff',
//     margin: 15,
//     padding: 15,
//     borderRadius: 10,
//   },
//   sectionTitle: { fontWeight: 'bold', marginBottom: 10 },

//   metricGrid: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 15,
//   },

//   card: {
//     backgroundColor: '#fff',
//     padding: 15,
//     borderRadius: 10,
//     flex: 1,
//   },

//   cardTitle: { fontWeight: 'bold', marginBottom: 10 },

//   big: { fontSize: 22, fontWeight: 'bold' },
//   mutedSmall: { fontSize: 12, color: '#666' },

//   satRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//   },
//   satBar: {
//     flex: 1,
//     height: 8,
//     backgroundColor: '#e5e7eb',
//     borderRadius: 4,
//   },
//   satFill: {
//     height: 8,
//     backgroundColor: '#16a34a',
//     borderRadius: 4,
//   },
// });
// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Dimensions,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';

// import StatCard from './StatCard';
// import GrievanceStatus from './GrievanceStatus';

// import { PieChart, BarChart } from 'react-native-chart-kit';
// import VisitorsScreen from './screens/VisitorsScreen';
// import ApprovedScreen from './screens/ApprovedScreen';


// const screenWidth = Dimensions.get('window').width;

// // ✅ Reusable metric card
// const Card = ({ title, children, style }) => (
//   <View style={[styles.card, style]}>
//     <Text style={styles.cardTitle}>{title}</Text>
//     {children}
//   </View>
// );

// export default function DashboardScreen() {
//   const navigation = useNavigation();

//   // ✅ Centralized dashboard data
//   const stats = {
//     visitors: 1250,
//     pending: 420,
//     approved: 780,
//     rejected: 50,
//   };

//   const metrics = {
//     avgResolution: 4.7,
//     satisfaction: 82,
//   };

//   return (
//     <ScrollView
//       style={styles.container}
//       contentContainerStyle={{ paddingBottom: 30 }}
//       showsVerticalScrollIndicator={false}
//     >
//       {/* HEADER */}
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Dashboard</Text>
//         <View style={styles.headerRight}>
//           <Ionicons name="search" size={20} color="#fff" />
//           <Ionicons
//             name="notifications-outline"
//             size={20}
//             color="#fff"
//             style={{ marginLeft: 15 }}
//           />
//           <Text style={styles.admin}>Admin</Text>
//         </View>
//       </View>

//       {/* STATS */}
//       <View style={styles.stats}>
//         <StatCard
//           title="Total Grievances"
//           value={stats.visitors}
//           color="#f39c12"
//           // onPress={() => navigation.navigate('Visitors')}
//           onPress={() =>
//   navigation.navigate('Dashboard', {
//     screen: 'Visitors',
//   })
// }

//         />

//         <StatCard
//           title="Pending Approvals"
//           value={stats.pending}
//           color="#2980b9"
//        onPress={() =>
//   navigation.navigate('Dashboard', {
//     screen: 'PendingApprovals',
//   })
// }

//         />

//               <StatCard
//           title="Resolved"
//           value={stats.pending}
//           color="#2980b9"
//        onPress={() =>
//   navigation.navigate('Dashboard', {
//     screen: 'ApprovedList',
//   })
// }
//         />

//         <StatCard
//           title="Escalated"
//           value={stats.rejected}
//           color="#c0392b"
//              onPress={() =>
//   navigation.navigate('Dashboard', {
//     screen: 'RejectedList',
//   })
// }
//         />
//       </View>

//       {/* STATUS LIST */}
//       <GrievanceStatus />

//       {/* PIE CHART */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Overview</Text>

//         <PieChart
//           data={[
//             {
//               name: 'Pending',
//               population: stats.pending,
//               color: '#2980b9',
//               legendFontColor: '#333',
//               legendFontSize: 12,
//             },
//             {
//               name: 'Resolved',
//               population: stats.approved,
//               color: '#27ae60',
//               legendFontColor: '#333',
//               legendFontSize: 12,
//             },
//             {
//               name: 'Escalated',
//               population: stats.rejected,
//               color: '#c0392b',
//               legendFontColor: '#333',
//               legendFontSize: 12,
//             },
//           ]}
//           width={screenWidth - 40}
//           height={220}
//           accessor="population"
//           backgroundColor="transparent"
//           paddingLeft="15"
//           chartConfig={{
//             color: () => '#000',
//           }}
//         />
//       </View>

//       {/* BAR CHART */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Department-wise Overview</Text>

//         <BarChart
//           data={{
//             labels: ['Visitors', 'Pending', 'Approved', 'Rejected'],
//             datasets: [{ data: Object.values(stats) }],
//           }}
//           width={screenWidth - 40}
//           height={280}
//           fromZero
//           showValuesOnTopOfBars
//           withInnerLines
//           chartConfig={{
//             backgroundGradientFrom: '#fff',
//             backgroundGradientTo: '#fff',
//             decimalPlaces: 0,
//             barPercentage: 0.65,
//             color: (opacity = 1) => `rgba(11, 60, 109, ${opacity})`,
//             labelColor: () => '#333',
//             propsForLabels: { fontSize: 12 },
//           }}
//           style={{ borderRadius: 12 }}
//         />
//       </View>

//       {/* METRICS */}
//       <View style={styles.metricGrid}>
//         <Card title="Average Resolution Time" style={{ marginRight: 10 }}>
//           <Text style={styles.big}>{metrics.avgResolution.toFixed(1)} days</Text>
//           <Text style={styles.mutedSmall}>Across resolved grievances</Text>
//         </Card>

//         <Card title="Citizens’ Satisfaction">
//           <View style={styles.satRow}>
//             <Text style={[styles.big, { color: '#16a34a' }]}>
//               {metrics.satisfaction}%
//             </Text>

//             <View style={styles.satBar}>
//               <View
//                 style={[
//                   styles.satFill,
//                   { width: `${metrics.satisfaction}%` },
//                 ]}
//               />
//             </View>
//           </View>

//           <Text style={styles.mutedSmall}>Based on feedback surveys</Text>
//         </Card>
//       </View>
//     </ScrollView>
//   );
// }
// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#f4f6f8' },
//   header: {
//     backgroundColor: '#0b3c6d',
//     padding: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   headerTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
//   headerRight: { flexDirection: 'row', alignItems: 'center' },
//   admin: { color: '#fff', marginLeft: 15 },

//   stats: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     padding: 15,
//   },

//   section: {
//     backgroundColor: '#fff',
//     margin: 15,
//     padding: 15,
//     borderRadius: 10,
//   },
//   sectionTitle: { fontWeight: 'bold', marginBottom: 10 },

//   metricGrid: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 15,
//   },

//   card: {
//     backgroundColor: '#fff',
//     padding: 15,
//     borderRadius: 10,
//     flex: 1,
//   },

//   cardTitle: { fontWeight: 'bold', marginBottom: 10 },

//   big: { fontSize: 22, fontWeight: 'bold' },
//   mutedSmall: { fontSize: 12, color: '#666' },

//   satRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//   },
//   satBar: {
//     flex: 1,
//     height: 8,
//     backgroundColor: '#e5e7eb',
//     borderRadius: 4,
//   },
//   satFill: {
//     height: 8,
//     backgroundColor: '#16a34a',
//     borderRadius: 4,
//   },
// });
// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Dimensions,
//   TouchableOpacity,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';

// import StatCard from './StatCard';
// import GrievanceStatus from './GrievanceStatus';

// import { PieChart, BarChart } from 'react-native-chart-kit';

// const screenWidth = Dimensions.get('window').width;

// // ✅ Reusable metric card
// const Card = ({ title, children, style }) => (
//   <View style={[styles.card, style]}>
//     <Text style={styles.cardTitle}>{title}</Text>
//     {children}
//   </View>
// );

// export default function DashboardScreen() {
//   const navigation = useNavigation();

//   // ✅ Centralized dashboard data
//   const stats = {
//     visitors: 1250,
//     pending: 420,
//     approved: 780,
//     rejected: 50,
//   };

//   const metrics = {
//     avgResolution: 4.7,
//     satisfaction: 82,
//   };

//   return (
//     <ScrollView
//       style={styles.container}
//       contentContainerStyle={{ paddingBottom: 30 }}
//       showsVerticalScrollIndicator={false}
//     >
//       {/* HEADER */}
//       <View style={styles.header}>
//         {/* ✅ HAMBURGER MENU */}
//         <TouchableOpacity onPress={() => navigation.openDrawer()}>
//           <Ionicons name="menu" size={26} color="#fff" />
//         </TouchableOpacity>

//         <Text style={styles.headerTitle}>Dashboard</Text>

//         <View style={styles.headerRight}>
//           <Ionicons name="search" size={20} color="#fff" />
//           <Ionicons
//             name="notifications-outline"
//             size={20}
//             color="#fff"
//             style={{ marginLeft: 15 }}
//           />
//           <Text style={styles.admin}>Admin</Text>
//         </View>
//       </View>

//       {/* STATS */}
//       <View style={styles.stats}>
//         <StatCard
//           title="Total Grievances"
//           value={stats.visitors}
//           color="#f39c12"
//           onPress={() =>
//             navigation.navigate('Dashboard', {
//               screen: 'Visitors',
//             })
//           }
//         />

//         <StatCard
//           title="Pending Approvals"
//           value={stats.pending}
//           color="#2980b9"
//           onPress={() =>
//             navigation.navigate('Dashboard', {
//               screen: 'PendingApprovals',
//             })
//           }
//         />

//         <StatCard
//           title="Resolved"
//           value={stats.approved}
//           color="#27ae60"
//           onPress={() =>
//             navigation.navigate('Dashboard', {
//               screen: 'ApprovedList',
//             })
//           }
//         />

//         <StatCard
//           title="Escalated"
//           value={stats.rejected}
//           color="#c0392b"
//           onPress={() =>
//             navigation.navigate('Dashboard', {
//               screen: 'RejectedList',
//             })
//           }
//         />
//       </View>

//       {/* STATUS LIST */}
//       <GrievanceStatus />

//       {/* PIE CHART */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Overview</Text>

//         <PieChart
//           data={[
//             {
//               name: 'Pending',
//               population: stats.pending,
//               color: '#2980b9',
//               legendFontColor: '#333',
//               legendFontSize: 12,
//             },
//             {
//               name: 'Resolved',
//               population: stats.approved,
//               color: '#27ae60',
//               legendFontColor: '#333',
//               legendFontSize: 12,
//             },
//             {
//               name: 'Escalated',
//               population: stats.rejected,
//               color: '#c0392b',
//               legendFontColor: '#333',
//               legendFontSize: 12,
//             },
//           ]}
//           width={screenWidth - 40}
//           height={220}
//           accessor="population"
//           backgroundColor="transparent"
//           paddingLeft="15"
//           chartConfig={{
//             color: () => '#000',
//           }}
//         />
//       </View>

//       {/* BAR CHART */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Department-wise Overview</Text>

//         <BarChart
//           data={{
//             labels: ['Visitors', 'Pending', 'Approved', 'Rejected'],
//             datasets: [{ data: Object.values(stats) }],
//           }}
//           width={screenWidth - 40}
//           height={280}
//           fromZero
//           showValuesOnTopOfBars
//           withInnerLines
//           chartConfig={{
//             backgroundGradientFrom: '#fff',
//             backgroundGradientTo: '#fff',
//             decimalPlaces: 0,
//             barPercentage: 0.65,
//             color: (opacity = 1) => `rgba(11, 60, 109, ${opacity})`,
//             labelColor: () => '#333',
//             propsForLabels: { fontSize: 12 },
//           }}
//           style={{ borderRadius: 12 }}
//         />
//       </View>

//       {/* METRICS */}
//       <View style={styles.metricGrid}>
//         <Card title="Average Resolution Time" style={{ marginRight: 10 }}>
//           <Text style={styles.big}>{metrics.avgResolution.toFixed(1)} days</Text>
//           <Text style={styles.mutedSmall}>Across resolved grievances</Text>
//         </Card>

//         <Card title="Citizens’ Satisfaction">
//           <View style={styles.satRow}>
//             <Text style={[styles.big, { color: '#16a34a' }]}>
//               {metrics.satisfaction}%
//             </Text>

//             <View style={styles.satBar}>
//               <View
//                 style={[
//                   styles.satFill,
//                   { width: `${metrics.satisfaction}%` },
//                 ]}
//               />
//             </View>
//           </View>

//           <Text style={styles.mutedSmall}>Based on feedback surveys</Text>
//         </Card>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#f4f6f8' },
//   header: {
//     backgroundColor: '#0b3c6d',
//     padding: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   headerTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
//   headerRight: { flexDirection: 'row', alignItems: 'center' },
//   admin: { color: '#fff', marginLeft: 15 },

//   stats: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     padding: 15,
//   },

//   section: {
//     backgroundColor: '#fff',
//     margin: 15,
//     padding: 15,
//     borderRadius: 10,
//   },
//   sectionTitle: { fontWeight: 'bold', marginBottom: 10 },

//   metricGrid: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 15,
//   },

//   card: {
//     backgroundColor: '#fff',
//     padding: 15,
//     borderRadius: 10,
//     flex: 1,
//   },

//   cardTitle: { fontWeight: 'bold', marginBottom: 10 },

//   big: { fontSize: 22, fontWeight: 'bold' },
//   mutedSmall: { fontSize: 12, color: '#666' },

//   satRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//   },
//   satBar: {
//     flex: 1,
//     height: 8,
//     backgroundColor: '#e5e7eb',
//     borderRadius: 4,
//   },
//   satFill: {
//     height: 8,
//     backgroundColor: '#16a34a',
//     borderRadius: 4,
//   },
// });




import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
 
import StatCard from './StatCard';
import GrievanceStatus from './GrievanceStatus';
 
import { PieChart, BarChart } from 'react-native-chart-kit';
 
const screenWidth = Dimensions.get('window').width;
 
// ✅ Reusable metric card
const Card = ({ title, children, style }) => (
  <View style={[styles.card, style]}>
    <Text style={styles.cardTitle}>{title}</Text>
    {children}
  </View>
);
 
export default function DashboardScreen() {
  const navigation = useNavigation();
 
  // ✅ Centralized dashboard data
  const stats = {
    visitors: 1250,
    pending: 420,
    approved: 780,
    rejected: 50,
  };
 
  const metrics = {
    avgResolution: 4.7,
    satisfaction: 82,
  };
 
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 30 }}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER WITH MENU + HOME BUTTONS */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          {/* Menu Button */}
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            style={styles.iconButton}
          >
            <Ionicons name="menu" size={28} color="#fff" />
          </TouchableOpacity>
 
          {/* Home Button */}
          {/* <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.iconButton}
          >
            <Ionicons name="home" size={28} color="#fff" />
          </TouchableOpacity> */}
        </View>
 
        {/* Header Title */}
        <Text style={styles.headerTitle}>Dashboard</Text>
 
        {/* Right side icons */}
        <View style={styles.headerRight}>
          <Ionicons name="search" size={20} color="#fff" marginTop={20} />
          <Ionicons
            name="notifications-outline"
            size={20}
            color="#fff"
            style={{ marginLeft: 15, marginTop: 20 }}
          />
          <Text style={styles.admin}>Admin</Text>
        </View>
      </View>
 
      {/* STATS */}
      <View style={styles.stats}>
        <StatCard
          title="Total Grievances"
          value={stats.visitors}
          color="#f39c12"
          onPress={() =>
            navigation.navigate('Dashboard', {
              screen: 'Visitors',
            })
          }
        />
 
        <StatCard
          title="Pending Approvals"
          value={stats.pending}
          color="#2980b9"
          onPress={() =>
            navigation.navigate('Dashboard', {
              screen: 'PendingApprovals',
            })
          }
        />
 
        <StatCard
          title="Resolved"
          value={stats.approved}
          color="#27ae60"
          onPress={() =>
            navigation.navigate('Dashboard', {
              screen: 'ApprovedList',
            })
          }
        />
 
        <StatCard
          title="Escalated"
          value={stats.rejected}
          color="#c0392b"
          onPress={() =>
            navigation.navigate('Dashboard', {
              screen: 'RejectedList',
            })
          }
        />
      </View>
 
      {/* STATUS LIST */}
      <GrievanceStatus />
 
      {/* PIE CHART */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Overview</Text>
 
        <PieChart
          data={[
            {
              name: 'Pending',
              population: stats.pending,
              color: '#2980b9',
              legendFontColor: '#333',
              legendFontSize: 12,
            },
            {
              name: 'Resolved',
              population: stats.approved,
              color: '#27ae60',
              legendFontColor: '#333',
              legendFontSize: 12,
            },
            {
              name: 'Escalated',
              population: stats.rejected,
              color: '#c0392b',
              legendFontColor: '#333',
              legendFontSize: 12,
            },
          ]}
          width={screenWidth - 40}
          height={220}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          chartConfig={{
            color: () => '#000',
          }}
        />
      </View>
 
      {/* BAR CHART */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Department-wise Overview</Text>
 
        <BarChart
          data={{
            labels: ['Visitors', 'Pending', 'Approved', 'Rejected'],
            datasets: [{ data: Object.values(stats) }],
          }}
          width={screenWidth - 40}
          height={280}
          fromZero
          showValuesOnTopOfBars
          withInnerLines
          chartConfig={{
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            decimalPlaces: 0,
            barPercentage: 0.65,
            color: (opacity = 1) => `rgba(11, 60, 109, ${opacity})`,
            labelColor: () => '#333',
            propsForLabels: { fontSize: 12 },
          }}
          style={{ borderRadius: 12 }}
        />
      </View>
 
      {/* METRICS */}
      <View style={styles.metricGrid}>
        <Card title="Average Resolution Time" style={{ marginRight: 10 }}>
          <Text style={styles.big}>{metrics.avgResolution.toFixed(1)} days</Text>
          <Text style={styles.mutedSmall}>Across resolved grievances</Text>
        </Card>
 
        <Card title="Citizens’ Satisfaction">
          <View style={styles.satRow}>
            <Text style={[styles.big, { color: '#16a34a' }]}>
              {metrics.satisfaction}%
            </Text>
 
            <View style={styles.satBar}>
              <View
                style={[
                  styles.satFill,
                  { width: `${metrics.satisfaction}%` },
                ]}
              />
            </View>
          </View>
 
          <Text style={styles.mutedSmall}>Based on feedback surveys</Text>
        </Card>
      </View>
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f6f8', },
  header: {
    backgroundColor: '#0b3c6d',
    padding: 25,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconButton: {
    marginRight: 10,
    marginTop: 20,
  },
  headerTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginTop: 20 },
  headerRight: { flexDirection: 'row', alignItems: 'center' },
  admin: { color: '#fff', marginLeft: 15, marginTop: 20 },
 
  stats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 15,
    marginTop: 10,
  },
 
  section: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 15,
    borderRadius: 10,
  },
  sectionTitle: { fontWeight: 'bold', marginBottom: 10 },
 
  metricGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
 
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flex: 1,
  },
 
  cardTitle: { fontWeight: 'bold', marginBottom: 10 },
 
  big: { fontSize: 22, fontWeight: 'bold' },
  mutedSmall: { fontSize: 12, color: '#666' },
 
  satRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  satBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
  },
  satFill: {
    height: 8,
    backgroundColor: '#16a34a',
    borderRadius: 4,
  },
});