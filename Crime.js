import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function Crime({ setPage, addRequest }) {
  const [crimeData, setCrimeData] = useState({
    title: "",
    description: "",
    image: null,
  });

  // ✅ EXPO IMAGE PICKER
  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      alert("Permission required to access gallery");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setCrimeData({
        ...crimeData,
        image: result.assets[0].uri,
      });
    }
  };

  // const submitCrime = () => {
  //   if (!crimeData.title || !crimeData.description) {
  //     alert("Please fill all fields");
  //     return;
  //   }

  //   console.log("Crime Submitted:", crimeData);
  //   alert("Crime submitted successfully!");
  // };

  const handleSubmit = () => {
    if (!crimeData.title || !crimeData.description) {
      alert("Fill all fields");
      return;
    }

    const newRequest = {
      id: "REQ-" + Date.now(),
      type: "Crime",
      category: crimeData.title,
      description: crimeData.description,
      status: "Pending",
      officer: "Not Assigned",
      createdAt: new Date().toISOString(),
      expected: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      resolution: "",
      beforeImage: crimeData.image,
    };

    addRequest(newRequest);
    setPage("Requests");
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Post a Crime</Text>

      <TextInput
        placeholder="Crime Title"
        style={styles.input}
        value={crimeData.title}
        onChangeText={(text) => setCrimeData({ ...crimeData, title: text })}
      />

      <TextInput
        placeholder="Crime Description"
        style={[styles.input, styles.textArea]}
        multiline
        value={crimeData.description}
        onChangeText={(text) =>
          setCrimeData({ ...crimeData, description: text })
        }
      />

      <TouchableOpacity style={styles.imageBtn} onPress={pickImage}>
        <Text style={styles.imageBtnText}>Upload Image</Text>
      </TouchableOpacity>

      {crimeData.image && (
        <Image source={{ uri: crimeData.image }} style={styles.image} />
      )}

      {/* <TouchableOpacity style={styles.submitBtn} onPress={submitCrime}>
        <Text style={styles.submitText}>Submit Crime</Text>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={handleSubmit} style={styles.submitBtn}>
        <Text style={styles.submitText}>Submit Crime</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f2f2f2',
    flexGrow: 1,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  imageBtn: {
    backgroundColor: '#1976d2',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  imageBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
  submitBtn: {
    backgroundColor: '#2e7d32',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
