import React,{ useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function Login({ setPage }) {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const sendOtp = () => {
    if (mobile.length !== 10) {
      Alert.alert("Invalid Mobile", "Enter a valid 10-digit mobile number");
      return;
    }
    setOtpSent(true);
    Alert.alert("OTP Sent", "OTP has been sent to your mobile number");
  };

  const verifyOtp = () => {
    if (otp.length !== 6) {
      Alert.alert("Invalid OTP", "Enter a 6-digit OTP");
      return;
    }
    setOtpVerified(true);
    Alert.alert("Success", "OTP verified successfully");
    setPage && setPage("Home");
  };

  const handleLogin = () => {
    if (!mobile || !password) {
      Alert.alert("Error", "Fill all fields");
      return;
    }

    if (otpSent && !otpVerified) {
      Alert.alert("Error", "Please verify OTP");
      return;
    }

    Alert.alert("Success", "Logged in successfully");
    setPage && setPage("Home");
  };

  const handleForgotPassword = () => {
    Alert.alert("Forgot Password", "Password reset flow not implemented yet.");
  };

  return (
    <LinearGradient
      colors={["#227972", "#65b55e"]}
      style={styles.container}
    >
      <KeyboardAvoidingView
        style={styles.centered}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          keyboardShouldPersistTaps="handled"
        >
          {/* TITLE */}
          <View style={styles.titleWrapper}>
            <Text style={styles.pageTitle}>Login</Text>
          </View>

          {/* FORM CARD */}
          <View style={styles.card}>
            <Input
              icon="call-outline"
              placeholder="Mobile Number"
              keyboardType="number-pad"
              maxLength={10}
              value={mobile}
              onChangeText={setMobile}
            />

            {!otpSent && (
              <Input
                icon="lock-closed-outline"
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            )}

            {otpSent && !otpVerified && (
              <Input
                icon="key-outline"
                placeholder="Enter OTP"
                keyboardType="number-pad"
                maxLength={6}
                value={otp}
                onChangeText={setOtp}
              />
            )}

            {!otpSent ? (
              <TouchableOpacity style={styles.otpBtn} onPress={sendOtp}>
                <Text style={styles.otpText}>Send OTP / Login</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.verifyBtn} onPress={verifyOtp}>
                <Text style={styles.verifyText}>Verify OTP</Text>
              </TouchableOpacity>
            )}

            {/* FORGOT PASSWORD */}
            <TouchableOpacity
              style={{ alignSelf: "flex-end", marginBottom: 14 }}
              onPress={handleForgotPassword}
            >
              <Text style={{ color: "#227972", fontWeight: "600" }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>

            {/* LOGIN BUTTON */}
            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            {/* SIGN UP LINK */}
          <TouchableOpacity
  style={{ marginTop: 20 }}
  onPress={() => setPage("signup")}
>
  <Text style={styles.linkText}>
    Don't have an account? <Text style={{ fontWeight: "bold" }}>Sign Up</Text>
  </Text>
</TouchableOpacity>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
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
  container: { flex: 1 },
  centered: { flex: 1, justifyContent: "center" },

  titleWrapper: {
    alignItems: "center",
    marginBottom: 30,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 24,
    padding: 20,
    elevation: 5,
  },

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

  loginBtn: {
    backgroundColor: "#227972",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
  },
  loginText: { color: "#fff", fontSize: 16, fontWeight: "600" },

  linkText: { color: "#227972", textAlign: "center", fontSize: 15 },
});
