import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function Signup({ setPage }) {
  const [name, setName] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const sendOtp = () => {
    if (aadhaar.length !== 12) {
      Alert.alert("Invalid Aadhaar", "Enter 12 digit Aadhaar number");
      return;
    }
    setOtpSent(true);
    Alert.alert("OTP Sent", "OTP sent to Aadhaar linked mobile");
  };

  const verifyOtp = () => {
    if (otp.length !== 6) {
      Alert.alert("Invalid OTP", "Enter 6 digit OTP");
      return;
    }
    setOtpVerified(true);
    Alert.alert("Verified", "Aadhaar verified successfully");
  };

  const handleSignup = () => {
    if (!otpVerified) {
      Alert.alert("Error", "Please verify Aadhaar OTP");
      return;
    }

    if (!name || !mobile || !password || !confirmPassword) {
      Alert.alert("Error", "Fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    Alert.alert("Success", "Account created successfully");
    setPage("Home");
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <LinearGradient colors={["#227972", "#65b55e"]} style={styles.container}>

        {/* HEADER */}
        <View style={styles.header}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="#fff"
            onPress={() => setPage("Home")}
          />
          <Text style={styles.headerTitle}>Sign Up</Text>
        </View>

        {/* FORM */}
        <View style={styles.card}>
          <Input icon="person-outline" placeholder="Full Name" value={name} onChangeText={setName} />

          {/* AADHAAR */}
          <Input
            icon="card-outline"
            placeholder="Aadhaar Number"
            keyboardType="number-pad"
            maxLength={12}
            value={aadhaar}
            onChangeText={setAadhaar}
          />

          {!otpSent && (
            <TouchableOpacity style={styles.otpBtn} onPress={sendOtp}>
              <Text style={styles.otpText}>Send OTP</Text>
            </TouchableOpacity>
          )}

          {otpSent && !otpVerified && (
            <>
              <Input
                icon="key-outline"
                placeholder="Enter OTP"
                keyboardType="number-pad"
                maxLength={6}
                value={otp}
                onChangeText={setOtp}
              />
              <TouchableOpacity style={styles.verifyBtn} onPress={verifyOtp}>
                <Text style={styles.verifyText}>Verify OTP</Text>
              </TouchableOpacity>
            </>
          )}

          {otpVerified && (
            <Text style={styles.verified}>✔ Aadhaar Verified</Text>
          )}

          {/* MOBILE */}
          <Input
            icon="call-outline"
            placeholder="Mobile Number"
            keyboardType="number-pad"
            value={mobile}
            onChangeText={setMobile}
          />

          {/* PASSWORD */}
          <Input icon="lock-closed-outline" placeholder="Password" secureTextEntry />
          <Input icon="lock-open-outline" placeholder="Confirm Password" secureTextEntry />

          <TouchableOpacity style={styles.signupBtn} onPress={handleSignup}>
            <Text style={styles.signupText}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

/* INPUT COMPONENT */
const Input = ({ icon, ...props }) => (
  <View style={styles.inputBox}>
    <Ionicons name={icon} size={20} color="#777" />
    <TextInput {...props} style={styles.input} placeholderTextColor="#999" />
  </View>
);

/* STYLES */
const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40 },
  header: { flexDirection: "row", alignItems: "center", paddingHorizontal: 20, marginBottom: 30 },
  headerTitle: { color: "#fff", fontSize: 22, fontWeight: "bold", marginLeft: 14 },

  card: { backgroundColor: "#fff", marginHorizontal: 20, borderRadius: 24, padding: 20 },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 14,
  },

  input: { flex: 1, marginLeft: 10, fontSize: 15 },

  otpBtn: {
    backgroundColor: "#e0f2f1",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 14,
  },

  otpText: { color: "#227972", fontWeight: "600" },

  verifyBtn: {
    backgroundColor: "#227972",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 14,
  },

  verifyText: { color: "#fff", fontWeight: "600" },

  verified: { color: "green", textAlign: "center", marginBottom: 14 },

  signupBtn: {
    backgroundColor: "#227972",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },

  signupText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});