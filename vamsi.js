// import React, { useEffect, useRef, useState } from "react";
// import {
//   View,
//   Text,
//   Animated,
//   StyleSheet,
//   Dimensions,
//   TouchableOpacity,
//   TextInput,
// } from "react-native";
 
// const { width, height } = Dimensions.get("window");
 
// /* Onboarding numbers only (matter later) */
// const DATA = ["1", "2", "3", "4", "5"];
 
// export default function vamsi() {
//   /* ---------------- STATES ---------------- */
//   const [screen, setScreen] = useState("title");
//   // title → onboarding → login
 
//   const [currentIndex, setCurrentIndex] = useState(0);
 
//   /* ---------------- ANIMATIONS ---------------- */
//   const titleScale = useRef(new Animated.Value(0.5)).current;
//   const titleOpacity = useRef(new Animated.Value(0)).current;
 
//   const glowPulse = useRef(new Animated.Value(1)).current;
//   const loginAnim = useRef(new Animated.Value(0)).current;
 
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const flatListRef = useRef(null);
 
//   /* ---------------- TITLE ANIMATION (ONCE) ---------------- */
//   useEffect(() => {
//     if (screen === "title") {
//       Animated.parallel([
//         Animated.timing(titleScale, {
//           toValue: 1,
//           duration: 900,
//           useNativeDriver: true,
//         }),
//         Animated.timing(titleOpacity, {
//           toValue: 1,
//           duration: 900,
//           useNativeDriver: true,
//         }),
//       ]).start(() => {
//         setTimeout(() => setScreen("onboarding"), 1200);
//       });
//     }
//   }, [screen]);
 
//   /* ---------------- GLOW LOOP ---------------- */
//   useEffect(() => {
//     Animated.loop(
//       Animated.sequence([
//         Animated.timing(glowPulse, {
//           toValue: 1.25,
//         //   duration: 1200,
//           useNativeDriver: true,
//         }),
//         Animated.timing(glowPulse, {
//           toValue: 1,
//         //   duration: 1200,
//           useNativeDriver: true,
//         }),
//       ])
//     ).start();
//   }, []);
 
//   /* ---------------- LOGIN ENTRY ---------------- */
//   useEffect(() => {
//     if (screen === "login") {
//       Animated.timing(loginAnim, {
//         toValue: 1,
//         // duration: 600,
//         useNativeDriver: true,
//       }).start();
//     }
//   }, [screen]);
 
//   /* ---------------- NEXT BUTTON ---------------- */
//   const handleNext = () => {
//     if (currentIndex < DATA.length - 1) {
//       flatListRef.current.scrollToOffset({
//         offset: (currentIndex + 1) * width,
//         animated: true,
//       });
//     } else {
//       setScreen("login");
//     }
//   };
 
//   /* ================== RENDER ================== */
//   return (
//     <>
//       {/* -------- TITLE PAGE -------- */}
//       {screen === "title" && (
//         <View style={styles.center}>
//           <Animated.Text
//             style={[
//               styles.titleText,
//               {
//                 opacity: titleOpacity,
//                 transform: [{ scale: titleScale }],
//               },
//             ]}
//           >
//             KNOW YOUR PLACE
//           </Animated.Text>
//         </View>
//       )}
 
//       {/* -------- ONBOARDING -------- */}
//       {screen === "onboarding" && (
//         <View style={styles.container}>
//           {/* Skip */}
//           <TouchableOpacity
//             style={styles.skipBtn}
//             onPress={() => setScreen("login")}
//           >
//             <Text style={styles.skipText}>Skip</Text>
//           </TouchableOpacity>
 
//           <Animated.FlatList
//             ref={flatListRef}
//             data={DATA}
//             horizontal
//             pagingEnabled
//             showsHorizontalScrollIndicator={false}
//             keyExtractor={(item) => item}
//             onMomentumScrollEnd={(e) =>
//               setCurrentIndex(
//                 Math.round(e.nativeEvent.contentOffset.x / width)
//               )
//             }
//             onScroll={Animated.event(
//               [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//               { useNativeDriver: false }
//             )}
//             renderItem={({ item, index }) => {
//               const inputRange = [
//                 (index - 1) * width,
//                 index * width,
//                 (index + 1) * width,
//               ];
 
//               const scale = scrollX.interpolate({
//                 inputRange,
//                 outputRange: [0.7, 1, 0.7],
//                 extrapolate: "clamp",
//               });
 
//               return (
//                 <View style={styles.slide}>
//                   <Animated.View
//                     style={[
//                       styles.glow,
//                       { transform: [{ scale }, { scale: glowPulse }] },
//                     ]}
//                   />
//                   <Animated.Text
//                     style={[styles.number, { transform: [{ scale }] }]}
//                   >
//                     {item}
//                   </Animated.Text>
//                 </View>
//               );
//             }}
//           />
 
//           {/* Footer */}
//           <View style={styles.footer}>
//             <Text style={styles.footerTitle}>Know Your Place</Text>
 
//             <View style={styles.dots}>
//               {DATA.map((_, i) => (
//                 <View
//                   key={i}
//                   style={[
//                     styles.dot,
//                     currentIndex === i && styles.activeDot,
//                   ]}
//                 />
//               ))}
//             </View>
 
//             <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
//               <Text style={styles.nextText}>
//                 {currentIndex === DATA.length - 1 ? "Done" : "Next"}
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       )}
 
//       {/* -------- LOGIN -------- */}
//       {screen === "login" && (
//         <Animated.View
//           style={[
//             styles.loginContainer,
//             {
//               opacity: loginAnim,
//               transform: [
//                 {
//                   translateY: loginAnim.interpolate({
//                     inputRange: [0, 1],
//                     outputRange: [40, 0],
//                   }),
//                 },
//               ],
//             },
//           ]}
//         >
//           <Text style={styles.loginTitle}>Login</Text>
 
//           <TextInput
//             placeholder="Email"
//             placeholderTextColor="#aaa"
//             style={styles.input}
//           />
//           <TextInput
//             placeholder="Password"
//             placeholderTextColor="#aaa"
//             secureTextEntry
//             style={styles.input}
//           />
 
//           <TouchableOpacity style={styles.loginBtn}>
//             <Text style={styles.loginBtnText}>Login</Text>
//           </TouchableOpacity>
//         </Animated.View>
//       )}
//     </>
//   );
// }
 
// /* ================= STYLES ================= */
 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#0B0F1A",
//   },
//   center: {
//     flex: 1,
//     backgroundColor: "#0B0F1A",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   titleText: {
//     fontSize: 38,
//     fontWeight: "900",
//     color: "#FFFFFF",
//     letterSpacing: 2,
//   },
//   skipBtn: {
//     position: "absolute",
//     top: 40,
//     right: 20,
//     zIndex: 10,
//   },
//   skipText: {
//     color: "#aaa",
//     fontSize: 16,
//   },
//   slide: {
//     width,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   glow: {
//     position: "absolute",
//     width: 260,
//     height: 260,
//     borderRadius: 130,
//     backgroundColor: "#3D7BFF",
//     opacity: 0.6,
//   },
//   number: {
//     fontSize: 120,
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   footer: {
//     height: height * 0.28,
//     alignItems: "center",
//   },
//   footerTitle: {
//     color: "#fff",
//     fontSize: 24,
//     marginBottom: 15,
//   },
//   dots: {
//     flexDirection: "row",
//     marginBottom: 20,
//   },
//   dot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: "#555",
//     marginHorizontal: 6,
//   },
//   activeDot: {
//     width: 18,
//     backgroundColor: "#3D7BFF",
//   },
//   nextBtn: {
//     backgroundColor: "#3D7BFF",
//     paddingHorizontal: 40,
//     paddingVertical: 14,
//     borderRadius: 30,
//   },
//   nextText: {
//     color: "#fff",
//     fontSize: 16,
//   },
//   loginContainer: {
//     flex: 1,
//     backgroundColor: "#0B0F1A",
//     justifyContent: "center",
//     padding: 20,
//   },
//   loginTitle: {
//     color: "#fff",
//     fontSize: 28,
//     textAlign: "center",
//     marginBottom: 30,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#3D7BFF",
//     borderRadius: 10,
//     padding: 14,
//     color: "#fff",
//     marginBottom: 20,
//   },
//   loginBtn: {
//     backgroundColor: "#3D7BFF",
//     padding: 15,
//     borderRadius: 10,
//     alignItems: "center",
//   },
//   loginBtnText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "600",
//   },
// });
// import React, { useEffect, useRef, useState } from "react";
// import {
//   View,
//   Text,
//   Animated,
//   StyleSheet,
//   Dimensions,
//   TouchableOpacity,
//   TextInput,
// } from "react-native";

// const { width, height } = Dimensions.get("window");
// const DATA = ["1", "2", "3", "4", "5"];

// export default function vamsi() {
//   const [screen, setScreen] = useState("title");
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const titleScale = useRef(new Animated.Value(0.5)).current;
//   const titleOpacity = useRef(new Animated.Value(0)).current;
//   const glowPulse = useRef(new Animated.Value(1)).current;
//   const loginAnim = useRef(new Animated.Value(0)).current;

//   const scrollX = useRef(new Animated.Value(0)).current;
//   const flatListRef = useRef(null);

//   useEffect(() => {
//     if (screen === "title") {
//       Animated.parallel([
//         Animated.timing(titleScale, {
//           toValue: 1,
//           duration: 900,
//           useNativeDriver: true,
//         }),
//         Animated.timing(titleOpacity, {
//           toValue: 1,
//           duration: 900,
//           useNativeDriver: true,
//         }),
//       ]).start(() => {
//         setTimeout(() => setScreen("onboarding"), 1200);
//       });
//     }
//   }, [screen]);

//   useEffect(() => {
//     Animated.loop(
//       Animated.sequence([
//         Animated.timing(glowPulse, {
//           toValue: 1.25,
//           useNativeDriver: true,
//         }),
//         Animated.timing(glowPulse, {
//           toValue: 1,
//           useNativeDriver: true,
//         }),
//       ])
//     ).start();
//   }, []);

//   useEffect(() => {
//     if (screen === "login") {
//       Animated.timing(loginAnim, {
//         toValue: 1,
//         useNativeDriver: true,
//       }).start();
//     }
//   }, [screen]);

//   const handleNext = () => {
//     if (currentIndex < DATA.length - 1) {
//       flatListRef.current.scrollToOffset({
//         offset: (currentIndex + 1) * width,
//         animated: true,
//       });
//     } else {
//       setScreen("login");
//     }
//   };

//   return (
//     <>
//       {screen === "title" && (
//         <View style={styles.center}>
//           <Animated.Text
//             style={[
//               styles.titleText,
//               {
//                 opacity: titleOpacity,
//                 transform: [{ scale: titleScale }],
//               },
//             ]}
//           >
//             KNOW YOUR PLACE
//           </Animated.Text>
//         </View>
//       )}

//       {screen === "onboarding" && (
//         <View style={styles.container}>
//           <TouchableOpacity
//             style={styles.skipBtn}
//             onPress={() => setScreen("login")}
//           >
//             <Text style={styles.skipText}>Skip</Text>
//           </TouchableOpacity>

//           <Animated.FlatList
//             ref={flatListRef}
//             data={DATA}
//             horizontal
//             pagingEnabled
//             showsHorizontalScrollIndicator={false}
//             keyExtractor={(item) => item}
//             onMomentumScrollEnd={(e) =>
//               setCurrentIndex(
//                 Math.round(e.nativeEvent.contentOffset.x / width)
//               )
//             }
//             onScroll={Animated.event(
//               [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//               { useNativeDriver: false }
//             )}
//             renderItem={({ item, index }) => {
//               const inputRange = [
//                 (index - 1) * width,
//                 index * width,
//                 (index + 1) * width,
//               ];

//               const scale = scrollX.interpolate({
//                 inputRange,
//                 outputRange: [0.7, 1, 0.7],
//                 extrapolate: "clamp",
//               });

//               return (
//                 <View style={styles.slide}>
//                   <Animated.View
//                     style={[
//                       styles.glow,
//                       { transform: [{ scale }, { scale: glowPulse }] },
//                     ]}
//                   />
//                   <Animated.Text
//                     style={[styles.number, { transform: [{ scale }] }]}
//                   >
//                     {item}
//                   </Animated.Text>
//                 </View>
//               );
//             }}
//           />

//           <View style={styles.footer}>
//             <Text style={styles.footerTitle}>Know Your Place</Text>

//             <View style={styles.dots}>
//               {DATA.map((_, i) => (
//                 <View
//                   key={i}
//                   style={[
//                     styles.dot,
//                     currentIndex === i && styles.activeDot,
//                   ]}
//                 />
//               ))}
//             </View>

//             <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
//               <Text style={styles.nextText}>
//                 {currentIndex === DATA.length - 1 ? "Done" : "Next"}
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       )}

//       {screen === "login" && (
//         <Animated.View
//           style={[
//             styles.loginContainer,
//             {
//               opacity: loginAnim,
//               transform: [
//                 {
//                   translateY: loginAnim.interpolate({
//                     inputRange: [0, 1],
//                     outputRange: [40, 0],
//                   }),
//                 },
//               ],
//             },
//           ]}
//         >
//           <Text style={styles.loginTitle}>Login</Text>

//           <TextInput
//             placeholder="Email"
//             placeholderTextColor="#aaa"
//             style={styles.input}
//           />
//           <TextInput
//             placeholder="Password"
//             placeholderTextColor="#aaa"
//             secureTextEntry
//             style={styles.input}
//           />

//           {/* 🔥 ONLY CHANGE IS HERE */}
//           <TouchableOpacity
//             style={styles.loginBtn}
//             onPress={() => {
//               global.LOGIN_SUCCESS?.();
//             }}
//           >
//             <Text style={styles.loginBtnText}>Login</Text>
//           </TouchableOpacity>
//         </Animated.View>
//       )}
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#0B0F1A" },
//   center: {
//     flex: 1,
//     backgroundColor: "#0B0F1A",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   titleText: {
//     fontSize: 38,
//     fontWeight: "900",
//     color: "#FFFFFF",
//     letterSpacing: 2,
//   },
//   skipBtn: { position: "absolute", top: 40, right: 20, zIndex: 10 },
//   skipText: { color: "#aaa", fontSize: 16 },
//   slide: { width, justifyContent: "center", alignItems: "center" },
//   glow: {
//     position: "absolute",
//     width: 260,
//     height: 260,
//     borderRadius: 130,
//     backgroundColor: "#3D7BFF",
//     opacity: 0.6,
//   },
//   number: { fontSize: 120, color: "#fff", fontWeight: "bold" },
//   footer: { height: height * 0.28, alignItems: "center" },
//   footerTitle: { color: "#fff", fontSize: 24, marginBottom: 15 },
//   dots: { flexDirection: "row", marginBottom: 20 },
//   dot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: "#555",
//     marginHorizontal: 6,
//   },
//   activeDot: { width: 18, backgroundColor: "#3D7BFF" },
//   nextBtn: {
//     backgroundColor: "#3D7BFF",
//     paddingHorizontal: 40,
//     paddingVertical: 14,
//     borderRadius: 30,
//   },
//   nextText: { color: "#fff", fontSize: 16 },
//   loginContainer: {
//     flex: 1,
//     backgroundColor: "#0B0F1A",
//     justifyContent: "center",
//     padding: 20,
//   },
//   loginTitle: {
//     color: "#fff",
//     fontSize: 28,
//     textAlign: "center",
//     marginBottom: 30,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#3D7BFF",
//     borderRadius: 10,
//     padding: 14,
//     color: "#fff",
//     marginBottom: 20,
//   },
//   loginBtn: {
//     backgroundColor: "#3D7BFF",
//     padding: 15,
//     borderRadius: 10,
//     alignItems: "center",
//   },
//   loginBtnText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "600",
//   },
// });
// import React, { useEffect, useRef, useState } from "react";
// import {
//   View,
//   Text,
//   Animated,
//   StyleSheet,
//   Dimensions,
//   TouchableOpacity,
//   TextInput,
//   ScrollView,
// } from "react-native";
// import { Image } from "react-native";

 
// const { width, height } = Dimensions.get("window");
 
// /* ================= ONBOARDING LIST DATA ================= */
 
// const DATA = [
//   {
//     title: "Crime Categories",
//     items: [
//        require("./assets/crim.png"),
//       // "Corruption",
//       // "Vandalism",
//       // "Traffic Violations",
//       // "Sexual Violence",
//       // "Drug Abuse",
//       // "Unhygienic F&B",
//       // "Social Injustice",
//     ],
//   },
//   {
//     title: "Grievance Departments",
//     items: [
      
//        require("./assets/grev.png"),
//       // "Revenue Department",
//       // "Municipal Administration & Urban Development",
//       // "Panchayat Raj & Rural Development",
//       // "Police Department",
//       // "Electricity Department",
//       // "Health Department",
//       // "Education Department",
//       // "Transport Department",
//       // "Water Resources / Irrigation",
//       // "Social Welfare (BC / SC / ST)",
//       // "Housing Department",
//     ],
//   },
//   {
//     title: "Common Problems",
//     items: [
//        require("./assets/prb.png"),
//       // "Drinking Water Shortage / Supply Issue",
//       // "Garbage Collection & Sanitation",
//       // "Bad Roads & Potholes",
//       // "Power Cuts / Low Voltage",
//       // "Land & Property Disputes",
//       // "Ration Card / PDS Issues",
//       // "Pension / Welfare Scheme Delays",
//       // "Hospital Services & Ambulance Delays",
//       // "Street Lights Not Working",
//       // "Certificate / Document Delays",
//       // "Income / Caste / Residence Issues",
//     ],
//   },
// ];
 
// export default function App() {
//   const [screen, setScreen] = useState("title");
//   const [currentIndex, setCurrentIndex] = useState(0);
 
//   /* ================= ANIMATIONS ================= */
 
//   const titleScale = useRef(new Animated.Value(0.5)).current;
//   const titleOpacity = useRef(new Animated.Value(0)).current;
//   const glowPulse = useRef(new Animated.Value(1)).current;
//   const loginAnim = useRef(new Animated.Value(0)).current;
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const flatListRef = useRef(null);
 
//   /* ================= TITLE ================= */
 
//   useEffect(() => {
//     if (screen === "title") {
//       Animated.parallel([
//         Animated.timing(titleScale, {
//           toValue: 1,
//           duration: 900,
//           useNativeDriver: true,
//         }),
//         Animated.timing(titleOpacity, {
//           toValue: 1,
//           duration: 900,
//           useNativeDriver: true,
//         }),
//       ]).start(() => setTimeout(() => setScreen("onboarding"), 1200));
//     }
//   }, [screen]);
 
//   /* ================= GLOW LOOP ================= */
 
//   useEffect(() => {
//     Animated.loop(
//       Animated.sequence([
//         Animated.timing(glowPulse, {
//           toValue: 1.2,
//           duration: 1200,
//           useNativeDriver: true,
//         }),
//         Animated.timing(glowPulse, {
//           toValue: 1,
//           duration: 1200,
//           useNativeDriver: true,
//         }),
//       ])
//     ).start();
//   }, []);
 
//   /* ================= LOGIN ENTRY ================= */
 
//   useEffect(() => {
//     if (screen === "login") {
//       Animated.timing(loginAnim, {
//         toValue: 1,
//         duration: 600,
//         useNativeDriver: true,
//       }).start();
//     }
//   }, [screen]);
 
//   /* ================= NEXT BUTTON ================= */
 
//   const handleNext = () => {
//     if (currentIndex < DATA.length - 1) {
//       flatListRef.current.scrollToOffset({
//         offset: (currentIndex + 1) * width,
//         animated: true,
//       });
//     } else {
//       setScreen("login");
//     }
//   };
 
//   return (
//     <>
//       {/* ================= TITLE ================= */}
//       {screen === "title" && (
//         <View style={styles.center}>
//           <Animated.Text
//             style={[
//               styles.titleText,
//               { opacity: titleOpacity, transform: [{ scale: titleScale }] },
//             ]}
//           >
//             KNOW YOUR PLACE
//           </Animated.Text>
//         </View>
//       )}
 
//       {/* ================= ONBOARDING ================= */}
//       {screen === "onboarding" && (
//         <View style={styles.container}>
//           <TouchableOpacity
//             style={styles.skipBtn}
//             onPress={() => setScreen("login")}
//           >
//             <Text style={styles.skipText}>Skip</Text>
//           </TouchableOpacity>
 
//           <Animated.FlatList
//             ref={flatListRef}
//             data={DATA}
//             horizontal
//             pagingEnabled
//             showsHorizontalScrollIndicator={false}
//             keyExtractor={(_, i) => i.toString()}
//             onMomentumScrollEnd={(e) =>
//               setCurrentIndex(
//                 Math.round(e.nativeEvent.contentOffset.x / width)
//               )
//             }
//             onScroll={Animated.event(
//               [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//               { useNativeDriver: false }
//             )}
//             renderItem={({ item, index }) => {
//               const inputRange = [
//                 (index - 1) * width,
//                 index * width,
//                 (index + 1) * width,
//               ];
 
//               const scale = scrollX.interpolate({
//                 inputRange,
//                 outputRange: [0.9, 1, 0.9],
//               });
 
//               return (
//                 <View style={styles.slide}>
//                   <Animated.View
//                     style={[
//                       styles.glow,
//                       { transform: [{ scale }, { scale: glowPulse }] },
//                     ]}
//                   />
 
//                   <Animated.View
//                     style={[styles.listCard, { transform: [{ scale }] }]}
//                   >
//                     <Text style={styles.listTitle}>{item.title}</Text>
 
//                     <ScrollView showsVerticalScrollIndicator={false}>
//                     <View style={styles.imageGrid}>
//   {item.items.map((img, i) => (
//     <Image
//       key={i}
//       source={img}
//       style={styles.itemImage}
//       resizeMode="contain"
//     />
//   ))}
// </View>

//                     </ScrollView>
//                   </Animated.View>
//                 </View>
//               );
//             }}
//           />
 
//           <View style={styles.footer}>
//             <View style={styles.dots}>
//               {DATA.map((_, i) => (
//                 <View
//                   key={i}
//                   style={[styles.dot, currentIndex === i && styles.activeDot]}
//                 />
//               ))}
//             </View>
 
//             <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
//               <Text style={styles.nextText}>
//                 {currentIndex === DATA.length - 1 ? "Done" : "Next"}
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       )}
 
//       {/* ================= LOGIN ================= */}
//       {screen === "login" && (
//         <Animated.View
//           style={[
//             styles.loginContainer,
//             {
//               opacity: loginAnim,
//               transform: [
//                 {
//                   translateY: loginAnim.interpolate({
//                     inputRange: [0, 1],
//                     outputRange: [40, 0],
//                   }),
//                 },
//               ],
//             },
//           ]}
//         >
//           <Text style={styles.loginTitle}>Login</Text>
 
//           <TextInput
//             placeholder="User ID / Email"
//             placeholderTextColor="#aaa"
//             style={styles.input}
//           />
//           <TextInput
//             placeholder="Password"
//             placeholderTextColor="#aaa"
//             secureTextEntry
//             style={styles.input}

//           />
//            <TouchableOpacity
//              style={styles.loginBtn}
//              onPress={() => {
//                global.LOGIN_SUCCESS?.();
//              }}
//              >
 
         
//             <Text style={styles.loginBtnText}>Login</Text>
//           </TouchableOpacity>
//         </Animated.View>
//       )}
 
//       {/* ================= HOME ================= */}
     
//     </>
//   );
// }
 

 
// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#0B0F1A" },
//   center: {
//     flex: 1,
//     backgroundColor: "#0B0F1A",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   titleText: {
//     fontSize: 38,
//     fontWeight: "900",
//     color: "#fff",
//     letterSpacing: 2,
//   },
//   skipBtn: { position: "absolute", top: 40, right: 20, zIndex: 10 },
//   skipText: { color: "#aaa", fontSize: 16 },
 
//   slide: { width, justifyContent: "center", alignItems: "center" },
//   glow: {
//     position: "absolute",
//     width: 300,
//     height: 300,
//     borderRadius: 150,
//     backgroundColor: "#3D7BFF",
//     opacity: 0.35,
//   },
 
//   listCard: {
//     backgroundColor: "rgba(255,255,255,0.08)",
//     borderRadius: 20,
//     padding: 20,
//     width: width * 0.85,
//     maxHeight: height * 0.6,
//   },
//   listTitle: {
//     color: "#fff",
//     fontSize: 22,
//     fontWeight: "800",
//     marginBottom: 12,
//     textAlign: "center",
//   },
//   listItem: {
//     color: "#ddd",
//     fontSize: 16,
//     marginVertical: 4,
//     lineHeight: 22,
//   },
 
//   footer: { height: height * 0.22, alignItems: "center" },
//   dots: { flexDirection: "row", marginBottom: 18 },
//   dot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: "#555",
//     marginHorizontal: 6,
//   },
//   activeDot: { width: 18, backgroundColor: "#3D7BFF" },
 
//   nextBtn: {
//     backgroundColor: "#3D7BFF",
//     paddingHorizontal: 40,
//     paddingVertical: 14,
//     borderRadius: 30,
//   },
//   nextText: { color: "#fff", fontSize: 16 },
 
//   loginContainer: {
//     flex: 1,
//     backgroundColor: "#0B0F1A",
//     justifyContent: "center",
//     padding: 20,
//   },
//   loginTitle: {
//     color: "#fff",
//     fontSize: 28,
//     textAlign: "center",
//     marginBottom: 30,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#3D7BFF",
//     borderRadius: 10,
//     padding: 14,
//     color: "#fff",
//     marginBottom: 20,
//   },
//   loginBtn: {
//     backgroundColor: "#3D7BFF",
//     padding: 15,
//     borderRadius: 10,
//     alignItems: "center",
//   },
//   loginBtnText: { color: "#fff", fontSize: 16 },
 
//   homeTitle: {
//     color: "#fff",
//     fontSize: 26,
//     fontWeight: "800",
//   },
//   imageGrid: {
//   flexDirection: "row",
//   flexWrap: "wrap",
//   justifyContent: "center",
// },

// itemImage: {
//   width: 280,
//   height: 280,
//   margin: 0,
//   borderRadius: 12,
// },

// });
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from "react-native";

const { width, height } = Dimensions.get("window");

/* ================= ONBOARDING DATA ================= */

const DATA = [

    {
    title: "Grievance Departments",
    image: require("./assets/grev.png"),
  },
  {
    title: "Crime Categories",
    image: require("./assets/crim.png"),
  },

  {
    title: "Common Problems",
    image: require("./assets/prb.png"),
  },
];

export default function App() {
  const [screen, setScreen] = useState("title");
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    if (screen === "title") {
      setTimeout(() => setScreen("onboarding"), 1200);
    }
  }, [screen]);

  const handleNext = () => {
    if (currentIndex < DATA.length - 1) {
      flatListRef.current.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      setScreen("login");
    }
  };

  return (
    <>
      {/* ================= TITLE ================= */}
      {screen === "title" && (
        <View style={styles.center}>
          <Text style={styles.titleText}>KNOW YOUR PLACE</Text>
        </View>
      )}

      {/* ================= ONBOARDING ================= */}
      {screen === "onboarding" && (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.skipBtn}
            onPress={() => setScreen("login")}
          >
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>

          <FlatList
            ref={flatListRef}
            data={DATA}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, i) => i.toString()}
            onMomentumScrollEnd={(e) =>
              setCurrentIndex(
                Math.round(e.nativeEvent.contentOffset.x / width)
              )
            }
            renderItem={({ item }) => (
              <View style={styles.slide}>
                <Text style={styles.listTitle}>{item.title}</Text>
                <Image
                  source={item.image}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>
            )}
          />

          <View style={styles.footer}>
            <View style={styles.dots}>
              {DATA.map((_, i) => (
                <View
                  key={i}
                  style={[styles.dot, currentIndex === i && styles.activeDot]}
                />
              ))}
            </View>

            <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
              <Text style={styles.nextText}>
                {currentIndex === DATA.length - 1 ? "Done" : "Next"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* ================= LOGIN ================= */}
      {screen === "login" && (
        <View style={styles.loginContainer}>
          <Text style={styles.loginTitle}>Login</Text>

          <TextInput
            placeholder="User ID / Email"
            placeholderTextColor="#aaa"
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry
            style={styles.input}
          />
           <TouchableOpacity
             style={styles.loginBtn}
             onPress={() => {
               global.LOGIN_SUCCESS?.();
             }}
             >

          {/* <TouchableOpacity style={styles.loginBtn}> */}
            <Text style={styles.loginBtnText}>Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0F1A",
  },
  center: {
    flex: 1,
    backgroundColor: "#0B0F1A",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 36,
    fontWeight: "900",
    color: "#fff",
    letterSpacing: 2,
  },
  skipBtn: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 10,
  },
  skipText: {
    color: "#aaa",
    fontSize: 16,
  },
  slide: {
    width,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  listTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 20,
    textAlign: "center",
  },
  image: {
    width: width * 0.85,
    height: height * 0.45,
    borderRadius: 16,
  },
  footer: {
    height: height * 0.22,
    alignItems: "center",
  },
  dots: {
    flexDirection: "row",
    marginBottom: 18,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#555",
    marginHorizontal: 6,
  },
  activeDot: {
    width: 18,
    backgroundColor: "#3D7BFF",
  },
  nextBtn: {
    backgroundColor: "#3D7BFF",
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 30,
  },
  nextText: {
    color: "#fff",
    fontSize: 16,
  },
  loginContainer: {
    flex: 1,
    backgroundColor: "#0B0F1A",
    justifyContent: "center",
    padding: 20,
  },
  loginTitle: {
    color: "#fff",
    fontSize: 28,
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#3D7BFF",
    borderRadius: 10,
    padding: 14,
    color: "#fff",
    marginBottom: 20,
  },
  loginBtn: {
    backgroundColor: "#3D7BFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  loginBtnText: {
    color: "#fff",
    fontSize: 16,
  },
});
