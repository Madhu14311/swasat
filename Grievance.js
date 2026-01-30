import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
} from "react-native";
 
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import MapView from "react-native-maps";
 
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
 
 
const locationData = {
  Visakhapatnam: {
    Bheemunipatnam: ["Village A", "Village B"],
    Anandapuram: ["Village C", "Village D"],
  },
  Vijayawada: {
    Gannavaram: ["Village E", "Village F"],
    Ibrahimpatnam: ["Village G", "Village H"],
  },
  Guntur: {
    Tenali: ["Village I", "Village J"],
    Mangalagiri: ["Village K", "Village L"],
  },
};
 
const districtCoords = {
  Visakhapatnam: { lat: 17.6868, lng: 83.2185 },
  Vijayawada: { lat: 16.5062, lng: 80.648 },
  Guntur: { lat: 16.3067, lng: 80.4365 },
};
 
const grievanceCategories = {
  Roads: ["Potholes", "Street Lights", "Road Damage"],
  Water: ["No Supply", "Leakage", "Low Pressure"],
  Electricity: ["Power Cut", "Transformer", "Billing"],
  Sanitation: ["Garbage", "Drainage", "Mosquitoes"],
};
 
 
export default function Grievance({ setPage, addRequest }) {
  const mapRef = useRef(null);

  const [district, setDistrict] = useState("");
  const [mandal, setMandal] = useState("");
  const [village, setVillage] = useState("");

  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [image, setImage] = useState(null);
  const [document, setDocument] = useState(null);

  const pickImage = async () => {
    const res = await ImagePicker.launchImageLibraryAsync({ quality: 0.7 });
    if (!res.canceled) setImage(res.assets[0]);
  };

  const pickDocument = async () => {
    const res = await DocumentPicker.getDocumentAsync({});
    if (res.assets) setDocument(res.assets[0]);
  };

  const handleSubmit = () => {
    if (!category || !description) {
      alert("Fill all required fields");
      return;
    }

    const newRequest = {
      id: "REQ-" + Date.now(),
      type: "Grievance",
      category,
      description,
      status: "Pending",
      officer: "Not Assigned",
      createdAt: new Date().toISOString(),
      expected: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      resolution: "",
      beforeImage: image?.uri || null,
    };

    addRequest(newRequest);
    setPage("Requests");
  };


  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#4d1be6" />

      <LinearGradient colors={["#2200ff", "#4114f7"]} style={styles.header}>
        <Text style={styles.headerTitle}>Raise Grievance</Text>
        <Text style={styles.headerSub}>Submit your complaint</Text>
      </LinearGradient>

      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.row}>
          <View style={styles.mapWrapper}>
            <MapView
              ref={mapRef}
              style={styles.map}
              initialRegion={{
                latitude: 15.9129,
                longitude: 79.74,
                latitudeDelta: 5,
                longitudeDelta: 5,
              }}
            />
          </View>

          <View style={{ flex: 1 }}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Location</Text>

              <View style={styles.pickerBox}>
                <Picker
                  selectedValue={district}
                  onValueChange={(v) => {
                    setDistrict(v);
                    setMandal("");
                    setVillage("");
                    if (districtCoords[v] && mapRef.current) {
                      mapRef.current.animateToRegion(
                        {
                          latitude: districtCoords[v].lat,
                          longitude: districtCoords[v].lng,
                          latitudeDelta: 0.3,
                          longitudeDelta: 0.3,
                        },
                        1000,
                      );
                    }
                  }}
                >
                  <Picker.Item label="Select District" value="" />
                  {Object.keys(locationData).map((d) => (
                    <Picker.Item key={d} label={d} value={d} />
                  ))}
                </Picker>
              </View>

              <View style={styles.pickerBox}>
                <Picker
                  selectedValue={mandal}
                  enabled={!!district}
                  onValueChange={(v) => setMandal(v)}
                >
                  <Picker.Item label="Select Mandal" value="" />
                  {district &&
                    Object.keys(locationData[district]).map((m) => (
                      <Picker.Item key={m} label={m} value={m} />
                    ))}
                </Picker>
              </View>

              <View style={styles.pickerBox}>
                <Picker
                  selectedValue={village}
                  enabled={!!mandal}
                  onValueChange={(v) => setVillage(v)}
                >
                  <Picker.Item label="Select Village" value="" />
                  {district &&
                    mandal &&
                    locationData[district][mandal].map((v) => (
                      <Picker.Item key={v} label={v} value={v} />
                    ))}
                </Picker>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Grievance Category</Text>

          <View style={styles.pickerBox}>
            <Picker
              selectedValue={category}
              onValueChange={(v) => {
                setCategory(v);
                setSubCategory("");
              }}
            >
              <Picker.Item label="Select Category" value="" />
              {Object.keys(grievanceCategories).map((c) => (
                <Picker.Item key={c} label={c} value={c} />
              ))}
            </Picker>
          </View>

          <View style={styles.pickerBox}>
            <Picker
              selectedValue={subCategory}
              enabled={!!category}
              onValueChange={(v) => setSubCategory(v)}
            >
              <Picker.Item label="Select Issue" value="" />
              {category &&
                grievanceCategories[category].map((s) => (
                  <Picker.Item key={s} label={s} value={s} />
                ))}
            </Picker>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Grievance Details</Text>

          <TextInput
            placeholder="Complaint Title"
            style={styles.input}
            value={title}
            onChangeText={setTitle}
          />

          <TextInput
            placeholder="Complaint Description"
            style={[styles.input, { height: 100 }]}
            multiline
            value={description}
            onChangeText={setDescription}
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Attachments</Text>

          <View style={styles.uploadRow}>
            <TouchableOpacity style={styles.uploadBtnHalf} onPress={pickImage}>
              <Text>📷 Image</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.uploadBtnHalf}
              onPress={pickDocument}
            >
              <Text>📄 Document</Text>
            </TouchableOpacity>
          </View>
        </View>

        <LinearGradient
          colors={["#4014df", "#310edf"]}
          style={styles.submitBtn}
        >
          {/* <TouchableOpacity
            onPress={() =>
              navigation.navigate("Preview", {
                district,
                mandal,
                village,
                category,
                subCategory,
                title,
                description,
              })
            }
          >
            <Text style={styles.submitText}>Submit Grievance</Text>
          </TouchableOpacity> */}
          <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}
 
 
function ServicesScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.pageTitle}>My Requests</Text>
      <Text>• Submitted Complaints</Text>
      <Text>• Status Tracking</Text>
    </View>
  );
}
 
 
function ProfileScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.pageTitle}>Profile</Text>
      <Text>Name: Citizen</Text>
      <Text>State: Andhra Pradesh</Text>
    </View>
  );
}
 
 
function GrievancePreviewScreen({ route }) {
  const { district, mandal, village, category, subCategory, title, description } =
    route.params;
 
  return (
    <ScrollView style={styles.preview}>
      <Text style={styles.previewTitle}>Grievance Submitted</Text>
      <Text>District: {district}</Text>
      <Text>Mandal: {mandal}</Text>
      <Text>Village: {village}</Text>
      <Text>Category: {category}</Text>
      <Text>Issue: {subCategory}</Text>
      <Text>Title: {title}</Text>
      <Text>Description: {description}</Text>
    </ScrollView>
  );
}
 
 
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
 
function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let icon;
          if (route.name === "Home") icon = "home";
          if (route.name === "Services") icon = "briefcase";
          if (route.name === "Profile") icon = "person";
          return <Ionicons name={icon} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#ff6f00",
      })}
    >
      <Tab.Screen name="Home" component={RaiseGrievanceScreen} />
      <Tab.Screen name="Services" component={ServicesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
 


    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={BottomTabs} />
        <Stack.Screen name="Preview" component={GrievancePreviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>


 
 
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fdf6ec" },
  header: {
    paddingVertical: 24,
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: { fontSize: 24, color: "#fff", fontWeight: "bold" },
  headerSub: { color: "#fff" },
  body: { padding: 16 },
 
  card: {
    backgroundColor: "#fff",
    padding: 12,
    marginVertical: 8,
    borderRadius: 16,
    elevation: 4,
  },
  cardTitle: { fontWeight: "bold", marginBottom: 6 },
 
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 14,
    padding: 12,
    marginVertical: 6,
    backgroundColor: "#fafafa",
  },
 
  submitBtn: {
    marginVertical: 20,
    padding: 14,
    borderRadius: 18,
    alignItems: "center",
  },
  submitText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
 
  row: { flexDirection: "row", gap: 8 },
  mapWrapper: {
    flex: 1,
    height: 260,
    borderRadius: 16,
    overflow: "hidden",
  },
  map: { flex: 1 },
 
  pickerBox: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 14,
    marginVertical: 6,
    backgroundColor: "#fafafa",
  },
 
  uploadRow: { flexDirection: "row", gap: 10 },
  uploadBtnHalf: {
    flex: 1,
    backgroundColor: "#eee",
    padding: 12,
    borderRadius: 14,
    alignItems: "center",
  },
 
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fdf6ec",
  },
  pageTitle: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
 
  preview: { padding: 16 },
  previewTitle: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
});