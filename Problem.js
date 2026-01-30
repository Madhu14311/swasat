import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
 
export default function Problem({ setPage, addRequest }) {
  const [screen, setScreen] = useState("form");

  const [problemData, setProblemData] = useState({
    title: "",
    description: "",
    department: "",
    location: "",
    image: null,
  });

  // -------- WEB IMAGE PICKER --------
  const pickImageWeb = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = (event) => {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = () => {
        setProblemData({ ...problemData, image: reader.result });
      };
      reader.readAsDataURL(file);
    };

    input.click();
  };

  // -------- SUBMIT --------
  // const submitProblem = () => {
  //   if (!problemData.title || !problemData.description) {
  //     alert("Please fill required fields");
  //     return;
  //   }
  //   setScreen("details");
  // };

  const handleSubmit = () => {
    if (!problemData.title || !problemData.description) {
      alert("Fill all required fields");
      return;
    }

    const newRequest = {
      id: "REQ-" + Date.now(),
      type: "Problem",
      category: problemData.department,
      description: problemData.description,
      status: "Pending",
      officer: "Not Assigned",
      createdAt: new Date().toISOString(),
      expected: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      resolution: "",
      beforeImage: problemData.image,
    };

    addRequest(newRequest);
    setPage("Requests");
  };


  // -------- FORM SCREEN --------
  if (screen === "form") {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>📝 Post a Problem</Text>
        <TextInput
          style={styles.input}
          placeholder="Problem Title"
          value={problemData.title}
          onChangeText={(text) =>
            setProblemData({ ...problemData, title: text })
          }
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Describe the Problem"
          multiline
          value={problemData.description}
          onChangeText={(text) =>
            setProblemData({ ...problemData, description: text })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Department"
          value={problemData.department}
          onChangeText={(text) =>
            setProblemData({ ...problemData, department: text })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Location"
          value={problemData.location}
          onChangeText={(text) =>
            setProblemData({ ...problemData, location: text })
          }
        />
        <TouchableOpacity style={styles.imageBtn} onPress={pickImageWeb}>
          <Text style={styles.btnText}>📷 Upload Image</Text>
        </TouchableOpacity>
        {problemData.image && (
          <Image source={{ uri: problemData.image }} style={styles.preview} />
        )}
        {/* <TouchableOpacity style={styles.submitBtn} onPress={submitProblem}>
          <Text style={styles.btnText}>Submit Problem</Text>
        </TouchableOpacity> */}
        /
        <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
          <Text style={styles.btnText}>Submit Problem</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  // -------- DETAILS SCREEN --------
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>✅ Problem Submitted</Text>

      <Text style={styles.label}>Title</Text>
      <Text style={styles.value}>{problemData.title}</Text>

      <Text style={styles.label}>Description</Text>
      <Text style={styles.value}>{problemData.description}</Text>

      <Text style={styles.label}>Department</Text>
      <Text style={styles.value}>{problemData.department}</Text>

      <Text style={styles.label}>Location</Text>
      <Text style={styles.value}>{problemData.location}</Text>

      {problemData.image && (
        <Image source={{ uri: problemData.image }} style={styles.preview} />
      )}

      {/* <TouchableOpacity
        style={styles.submitBtn}
        onPress={() => {
          setProblemData({
            title: "",
            description: "",
            department: "",
            location: "",
            image: null,
          });
          setScreen("form");
        }}
      >
        <Text style={styles.btnText}>Post Another Problem</Text>
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
        <Text style={styles.btnText}>Submit Problem</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
 
// -------- STYLES --------
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#e8eaef",
    flexGrow: 1,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#38bdf8",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#e0e7ee",
    color: "#161515",
    padding: 14,
    borderRadius: 12,
    marginBottom: 15,
  },
  textArea: {
    height: 110,
  },
  imageBtn: {
    backgroundColor: "#334155",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  submitBtn: {
    backgroundColor: "#22c55e",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 20,
  },
  btnText: {
    color: "#2e2b2b",
    fontWeight: "bold",
  },
  preview: {
    width: "100%",
    height: 220,
    borderRadius: 14,
    marginTop: 10,
  },
  label: {
    color: "#17191a",
    marginTop: 12,
  },
  value: {
    color: "#2e2b2b",
    fontSize: 16,
  },
});