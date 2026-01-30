
import 'react-native-gesture-handler';
import React, { useState, useEffect, useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Image,
  ImageBackground,
  TextInput,
  Modal,
  FlatList,
  ActivityIndicator,
  Animated,
  ScrollView,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import DashboardScreen from './DashboardScreen';
import Crime from './Crime';
import Problem from './Problem';
import Grievance from './Grievance';
import About from './About';
import Profilee from './Profilee';
import Servicess from './Servicess';





/* ================= ICON ASSETS ================= */
const welcomeBg = require('./assets/media.png');

const payBillsIcon = require('./assets/wallet_4874805.png');
const applyIdIcon = require('./assets/profile_965888.png');
const trackStatusIcon = require('./assets/phone_10750765.png');
const reportIssueIcon = require('./assets/threats_18288640.png');
const notificationIcon = require('./assets/notification_1827370.png');

const homeIcon = require('./assets/square_14034325.png');
const servicesIcon = require('./assets/settings_7088478.png');
const requestsIcon = require('./assets/request_8392178.png');
const profileIcon = require('./assets/user_15194189.png');

const { width } = Dimensions.get('window');

/* ================= NOTIFICATIONS DATA ================= */
const initialNotifications = [
  { id: '1', title: 'New Health Policy Launched', desc: 'Check out the details now.', type: 'health' },
  { id: '2', title: 'Education Grants Updated', desc: 'Your grants have been updated.', type: 'education' },
  { id: '3', title: 'Tax Deadline Extended', desc: 'Deadline extended to Feb 15.', type: 'tax' },
];

const notificationConfig = {
  health: { icon: 'medkit', color: '#2E7D32' },
  education: { icon: 'school', color: '#1565C0' },
  tax: { icon: 'card', color: '#EF6C00' },
};

/* ================= GESTURE-PROOF APP ================= */
export default function Apps() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MainApp />
    </GestureHandlerRootView>
  );
}

function MainApp() {
  const [page, setPage] = useState('Home');
  const [theme, setTheme] = useState(['#227972','#65b55ec3']);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const [requests, setRequests] = useState([]);
  const [selectedGrievance, setSelectedGrievance] = useState(null);



  const themes = [
    ['#223D79', '#1E4FA3'],
    ['#1B5E20', '#2E7D32'],
    ['#7B1FA2', '#512DA8'],
    ['#BF360C', '#E64A19'],
  ];

  const switchPage = (p) => {
    Animated.sequence([
      Animated.timing(fadeAnim, { toValue: 0, duration: 180, useNativeDriver: true }),
      Animated.timing(fadeAnim, { toValue: 1, duration: 180, useNativeDriver: true }),
    ]).start();
    setPage(p);
  };

  // const addRequest = (data) => {
  //   setRequests((prev) => [
  //     {
  //       id: Date.now().toString(),
  //       status: "pending", // default
  //       createdAt: new Date(),
  //       ...data,
  //     },
  //     ...prev,
  //   ]);
  // };



  const addRequest = (req) => {
    setRequests((prev) => [req, ...prev]);
  };


  // const newRequest = {
  //   id: "REQ-" + Date.now(),
  //   type: "Grievance", // or Crime / Problem
  //   // category,
  //   // description,
  //   status: "Submitted",
  //   officer: "Not Assigned",
  //   createdAt: new Date().toISOString(),
  //   expected: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  //   resolution: "",
  //   // beforeImage: imageUri || null,
  // };



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        {page === "Home" && <HomeScreen theme={theme} setPage={switchPage} />}
        {page === "Dashboard" && <DashboardScreen setPage={switchPage} />}
        {/* {page === 'Crime' && <Crime   setPage={switchPage}/>}
         {page === 'Problem' && <Problem   setPage={switchPage}/>}
          {page === 'Grievance' && <Grievance   setPage={switchPage}/>} */}
        {page === "Crime" && (
          <Crime setPage={switchPage} addRequest={addRequest} />
        )}
        {page === "Problem" && (
          <Problem setPage={switchPage} addRequest={addRequest} />
        )}
        {page === "Grievance" && (
          <Grievance setPage={switchPage} addRequest={addRequest} />
        )}

        {page === "About" && <About setPage={switchPage} />}

        {/* {page === 'Crime' && <GenericScreen theme={theme} setPage={switchPage} title="Post a Crime" />} */}

        {page === "TrackStatus" && (
          <GenericScreen
            theme={theme}
            setPage={switchPage}
            title="Track Status"
          />
        )}
        {page === "ReportIssue" && (
          <GenericScreen
            theme={theme}
            setPage={switchPage}
            title="Report Issue"
          />
        )}
        {/* {page === 'AboutUs' && <GenericScreen theme={theme} setPage={switchPage} title="About Us" />} */}
        {page === "Servicess" && <Servicess theme={theme} />}
        {/* {page === "Requests" && <RequestsScreen theme={theme} />} */}
        {page === "Requests" && (
          <RequestsScreen theme={theme} requests={requests} />
        )}

        {page === "Profilee" && <Profilee theme={theme} />}
        {page === "Notifications" && (
          <NotificationsScreen theme={theme} setPage={switchPage} />
        )}
      </Animated.View>

      {/* BOTTOM NAV */}
      {page !== "Notifications" && (
        <View style={styles.bottomNav}>
          <NavBtn
            icon={homeIcon}
            label="Home"
            onPress={() => switchPage("Home")}
          />
          <NavBtn
            icon={servicesIcon}
            label="Services"
            onPress={() => switchPage("Servicess")}
          />
          <NavBtn
            icon={requestsIcon}
            label="Requests"
            onPress={() => switchPage("Requests")}
          />
          <NavBtn
            icon={profileIcon}
            label="Profilee"
            onPress={() => switchPage("Profilee")}
          />
        </View>
      )}

      {/* THEME PALETTE */}
      <View style={styles.paletteWrapper}>
        {paletteOpen && (
          <View style={styles.palette}>
            {themes.map((t, i) => (
              <TouchableOpacity
                key={i}
                style={[styles.themeButton, { backgroundColor: t[0] }]}
                onPress={() => {
                  setTheme(t);
                  setPaletteOpen(false);
                }}
              />
            ))}
          </View>
        )}
        <TouchableOpacity
          style={[styles.paletteToggle, { backgroundColor: theme[0] }]}
          onPress={() => setPaletteOpen(!paletteOpen)}
        >
          <Text style={{ color: "#fff", fontSize: 18 }}>🎨</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

/* ================= NAV BUTTON ================= */
const NavBtn = ({ icon, label, onPress }) => (
  <TouchableOpacity style={styles.navItem} onPress={onPress}>
    <Image source={icon} style={styles.navIcon} />
    <Text style={styles.navText}>{label}</Text>
  </TouchableOpacity>
);


/* ================= HOME SCREEN ================= */
function HomeScreen({ theme, setPage }) {
  const actions = [
      { title: 'Dashboard', image: homeIcon, page: 'Dashboard' },
    { title: 'Post a Grievance', image: reportIssueIcon, page: 'Grievance' }, // icon fixed
    { title: 'Post a Crime', image: applyIdIcon, page: 'Crime' },
    { title: 'Post a Problem', image: trackStatusIcon, page: 'Problem' },
   
   
    {
  title: 'Survey and Feedback',
  subtitle: 'MPS AND MLAs',
  image: payBillsIcon,
  page: 'ReportIssue',
},

    { title: 'About', image: profileIcon, page: 'About' },
   
    { title: 'More...', image: servicesIcon, page: 'Dashboard' },
  ];

  return (
   <ScrollView
  showsVerticalScrollIndicator={false}
  contentContainerStyle={{ paddingBottom: 100 }}
>

      {/* <LinearGradient
        colors={theme}
        style={[styles.headerTab, { borderRadius: 20 }]}
      >
        <Text style={styles.headerTitle}>KNOW YOUR PLACE...</Text>
        <TouchableOpacity onPress={() => setPage("Notifications")}>
          <Image source={notificationIcon} style={styles.notificationIcon} />
          <View style={styles.notificationBadge} />
        </TouchableOpacity>
      </LinearGradient> */}
     <LinearGradient
  colors={theme}
  style={[styles.headerTab, { borderRadius: 20 }]}
>
  <Text style={styles.headerTitle}>CM CHEYUTHAA...🤝</Text>

  {/* RIGHT ICONS */}
  <View style={{ flexDirection: "row", alignItems: "center" }}>

    {/* NOTIFICATION ICON – FIRST */}
    <TouchableOpacity
      onPress={() => setPage("Notifications")}
      style={{ marginRight: 16 }}
    >
      <Image
        source={notificationIcon}
        style={styles.notificationIcon}
      />
      <View style={styles.notificationBadge} />
    </TouchableOpacity>

    {/* PROFILE ICON – SECOND */}
    <TouchableOpacity onPress={() => setPage("Profilee")}>
      <Image
        source={profileIcon}
        style={{ width: 26, height: 26 }}
      />
    </TouchableOpacity>

  </View>
</LinearGradient>



      <ImageBackground
        source={welcomeBg}
        style={[styles.welcomeTab, { borderRadius: 24 }]}
        imageStyle={{ borderRadius: 24 }}
      >
        {/* <View style={styles.welcomeOverlay}>
          <Text style={styles.welcomeText}>Welcome, Sarah</Text>
          <Text style={styles.subHeader}>Govt. Services at Your Fingertips</Text>
        </View> */}
      </ImageBackground>

   <View style={styles.actionsContainer}>
  {actions.map((a, i) => {
    const isDashboard = a.title === "Dashboard";

    return (
      <TouchableOpacity
        key={a.title}
        onPress={() => setPage(a.page)}
       
            
           style={[
  styles.actionButton,
  isDashboard && styles.dashboardButton,


        ]}
      >
        <LinearGradient 
          colors={theme}
          style={[
            styles.buttonInner,
            isDashboard && styles.dashboardInner,
            {borderRadius: 24 }
          ]}
        >
          <Image
            source={a.image}
            style={[
              styles.buttonIcon,
              isDashboard && { marginRight: 0, marginBottom: 6 },
            ]}
          />
          {/* <Text
            style={[
              styles.buttonText,
              isDashboard && { fontSize: 18, fontWeight: "bold" },
            ]}
          >
            {a.title}
          </Text> */}
          <View style={{ alignItems: 'center' }}>
  <Text style={styles.buttonText}>
    {a.title}
  </Text>

  {a.subtitle && (
    <Text style={styles.smallSubText}>
      {a.subtitle}
    </Text>
  )}
</View>

        </LinearGradient>
      </TouchableOpacity>
    );
  })}
</View>


 </ScrollView>
  );
}

/* ================= GENERIC SCREEN ================= */
function GenericScreen({ theme, setPage, title }) {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={theme} style={[styles.headerTab, { borderRadius: 24 }]}>
        <Ionicons name="arrow-back" size={24} color="#fff" onPress={() => setPage('Home')} />
        <Text style={styles.headerTitle}>{title}</Text>
      </LinearGradient>
    </View>
  );
}

/* ================= SERVICES SCREEN ================= */
function ServicesScreen({ theme }) {
  const services = ['Revenue Licence', 'Property Tax', 'Social Welfare', 'Birth Certificate'];

  return (
    <ScrollView
  showsVerticalScrollIndicator={false}
  contentContainerStyle={{ paddingBottom: 100 }}
>

      <LinearGradient colors={theme} style={styles.headerTab}>
        <Text style={styles.headerTitle}>Services</Text>
      </LinearGradient>

      <View style={styles.actionsContainer}>
        {services.map((s, i) => (
          <TouchableOpacity
            key={s}
            style={[styles.actionButton, i % 2 === 0 ? { marginRight: 10 } : { marginLeft: 10 }]}
          >
            <LinearGradient colors={theme} style={styles.buttonInner}>
              <Image source={payBillsIcon} style={styles.buttonIcon} />
              <Text style={styles.buttonText}>{s}</Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}









const renderCard = (item, index) => {
  return (
    <View key={index} style={styles.requestCard}>
      <Text style={styles.cardTitle}>{item.type}</Text>

      <Text style={styles.cardText}>
        <Text style={styles.label}>Title: </Text>
        {item.title}
      </Text>

      <Text style={styles.cardText}>
        <Text style={styles.label}>Description: </Text>
        {item.description}
      </Text>

      <View style={styles.statusRow}>
        <Text
          style={[
            styles.statusBadge,
            item.status === "Pending" && styles.pending,
            item.status === "Approved" && styles.approved,
            item.status === "Rejected" && styles.rejected,
          ]}
        >
          {item.status}
        </Text>
      </View>
    </View>
  );
};





/* ================= REQUESTS SCREEN ================= */
function RequestsScreen({ theme, requests }) {
  if (!requests || requests.length === 0) {
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient colors={theme} style={styles.headerTab}>
          <Text style={styles.headerTitle}>Requests</Text>
        </LinearGradient>
        <Text style={{ fontSize: 18, color: "#555", marginLeft: 14 }}>
          No requests submitted yet.
        </Text>
      </View>
    );
  }

  return (
   <ScrollView
  contentContainerStyle={{ paddingBottom: 30 }}
  showsVerticalScrollIndicator={false}
>
      <LinearGradient colors={theme} style={styles.headerTab}>
        <Text style={styles.headerTitle}>Requests</Text>
      </LinearGradient>

      {requests.map((req) => (
        <View
          key={req.id}
          style={{
            backgroundColor: "#fff",
            padding: 16,
            borderRadius: 16,
            marginBottom: 12,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 3,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#333" }}>
              {req.type}
            </Text>
            <Text
              style={{
                color:
                  req.status === "Pending"
                    ? "#f59e0b"
                    : req.status === "Approved"
                      ? "#22c55e"
                      : "#ef4444",
                fontWeight: "bold",
              }}
            >
              {req.status}
            </Text>
          </View>

          <Text style={{ marginTop: 6, color: "#555" }}>
            <Text style={{ fontWeight: "bold" }}>Category: </Text>
            {req.category || "N/A"}
          </Text>

          <Text style={{ marginTop: 4, color: "#555" }}>
            <Text style={{ fontWeight: "bold" }}>Description: </Text>
            {req.description}
          </Text>

          {req.beforeImage && (
            <Image
              source={{ uri: req.beforeImage }}
              style={{
                width: "100%",
                height: 180,
                borderRadius: 12,
                marginTop: 10,
                resizeMode: "cover",
              }}
            />
          )}

          <Text style={{ marginTop: 6, color: "#555" }}>
            <Text style={{ fontWeight: "bold" }}>Officer: </Text>
            {req.officer || "Not Assigned"}
          </Text>

          <Text style={{ marginTop: 4, color: "#555" }}>
            <Text style={{ fontWeight: "bold" }}>Submitted: </Text>
            {new Date(req.createdAt).toLocaleString()}
          </Text>

          {req.expected && (
            <Text style={{ marginTop: 4, color: "#555" }}>
              <Text style={{ fontWeight: "bold" }}>Expected Resolution: </Text>
              {new Date(req.expected).toLocaleDateString()}
            </Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
}





/* ================= NOTIFICATIONS ================= */
const NotificationItem = ({ item }) => {
  const config = notificationConfig[item.type];
  return (
    <View style={styles.notificationItem}>
      <View style={[styles.iconCircle, { backgroundColor: config.color + '22' }]}>
        <Ionicons name={config.icon} size={26} color={config.color} />
      </View>
      <View style={{ marginLeft: 14 }}>
        <Text style={styles.notificationItemTitle}>{item.title}</Text>
        <Text style={styles.notificationItemDesc}>{item.desc}</Text>
      </View>
    </View>
  );
};

function NotificationsScreen({ theme, setPage }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < initialNotifications.length) {
        setItems((prev) => [...prev, initialNotifications[index]]);
        index++;
      } else {
        clearInterval(interval);
        setLoading(false);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={theme} style={styles.notificationHeader}>
        <Ionicons name="arrow-back-outline" size={26} color="#fff" onPress={() => setPage('Home')} />
        <Text style={styles.notificationTitle}>Notifications</Text>
      </LinearGradient>

      {loading && items.length === 0 ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={theme[0]} />
        </View>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <NotificationItem item={item} />}
        />
      )}
    </View>
  );
}

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  headerTab: {
    margin: 30,
    borderRadius: 28,
    padding: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: { color: "#fff", fontSize: 22, fontWeight: "bold" },
  notificationIcon: { width: 28, height: 28 },
  notificationBadge: {
    position: "absolute",
    top: -2,
    right: -2,
    width: 10,
    height: 10,
    backgroundColor: "red",
    borderRadius: 5,
  },

  welcomeTab: { margin: 1, height: 220 },
  welcomeOverlay: {
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 25,
    borderRadius: 24,
  },
  welcomeText: { color: "#fff", fontSize: 24, fontWeight: "bold" },
  subHeader: { color: "#fff", marginTop: 6 },

// actionsContainer: {
//   flexDirection: "row",
//   flexWrap: "wrap",
//   justifyContent: "space-between",
//   marginHorizontal: 15,
// },
actionsContainer: {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  marginHorizontal: 15,
  marginTop: 20,
  borderRadius:20,
},


dashboardButton: {
  width: "100%",
  height: 90,
  marginBottom: 16,
},

dashboardInner: {
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
},

  // actionButton: { width: (width - 50) / 2, height: 80, marginBottom: 14 },
actionButton: {
  width: (width - 50) / 2,
  height: 80,
  marginBottom: 16,  
  borderRadius:24,

},


  buttonInner: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:24,
  },
  buttonIcon: { width: 32, height: 32, marginRight: 10 },
  buttonText: { color: "#fff", fontSize: 16,  marginLeft:-5},

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 8,
    backgroundColor: "#fff",
  },
  navItem: { alignItems: "center" },
  navIcon: { width: 22, height: 22 },
  navText: { fontSize: 14 },

  profileCard: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 20,
    alignItems: "center",
  },
  profilePhoto: { width: 100, height: 100, borderRadius: 50 },
  profileName: { fontSize: 22, fontWeight: "bold" },
  profileRole: { color: "#555" },
  editButton: {
    marginTop: 20,
    padding: 12,
    borderRadius: 24,
    backgroundColor: "#223D79",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 24,
    padding: 20,
  },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 14, padding: 10 },
  modalButtonSave: {
    marginTop: 10,
    backgroundColor: "#0f275c",
    padding: 12,
    borderRadius: 14,
    alignItems: "center",
  },

  notificationHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
  },
  notificationTitle: {
    flex: 1,
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  notificationItem: {
    flexDirection: "row",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  requestCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3,
  },
  requestTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
  },
  requestStatus: {
    fontSize: 13,
    color: "#ff9800",
    marginTop: 4,
  },
  requestTime: {
    fontSize: 12,
    color: "#888",
  },
  trackCard: {
    backgroundColor: "#fff",
    margin: 16,
    padding: 16,
    borderRadius: 18,
    elevation: 4,
  },
  detailsCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 16,
    elevation: 4,
  },
  viewDetailsBtn: {
    marginTop: 16,
    backgroundColor: "#4d1be6",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  viewText: {
    color: "#fff",
    fontWeight: "600",
  },
  smallSubText: {
  color: 'rgba(255,255,255,0.65)', // light text
  fontSize: 11,                  // smaller than title
  marginTop: 5,
  fontWeight: '400',
  letterSpacing: 0.5,
  marginRight:8,
},

 

});
