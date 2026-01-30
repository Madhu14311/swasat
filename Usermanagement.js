import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from "react-native";

export default function Usermanagement() {
  const [users, setUsers] = useState([
    { id: "1", name: "John Moses", role: "Admin", email: "JM@ap.gov.in", status: "Active" },
    { id: "2", name: "Vamsi Ediga", role: "District Officer", email: "vamsi@ap.gov.in", status: "Active" },
    { id: "3", name: "Y. Raja Shekar", role: "District Officer", email: "shekar@ap.gov.in", status: "Active" },
    
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [form, setForm] = useState({ name: "", role: "", email: "" });

  const openAdd = () => {
    setEditingUser(null);
    setForm({ name: "", role: "", email: "" });
    setModalVisible(true);
  };

  const openEdit = (user) => {
    setEditingUser(user);
    setForm(user);
    setModalVisible(true);
  };

  const saveUser = () => {
    if (!form.name || !form.role || !form.email) {
      Alert.alert("Error", "Fill all fields");
      return;
    }

    if (editingUser) {
      setUsers(users.map(u => (u.id === editingUser.id ? form : u)));
    } else {
      setUsers([...users, { ...form, id: Date.now().toString(), status: "Active" }]);
    }

    setModalVisible(false);
  };

  const deleteUser = (id, name) => {
    Alert.alert("Confirm", `Delete ${name}?`, [
      { text: "Cancel" },
      { text: "Delete", onPress: () => setUsers(users.filter(u => u.id !== id)) },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>👥 User Management</Text> */}

      <TouchableOpacity style={styles.addBtn} onPress={openAdd}>
        <Text style={styles.addText}>➕ Add New User</Text>
      </TouchableOpacity>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.role}</Text>
            <Text>{item.email}</Text>
            <Text>Status: {item.status}</Text>

            <View style={styles.actions}>
              <TouchableOpacity style={styles.editBtn} onPress={() => openEdit(item)}>
                <Text style={styles.btnText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteBtn}
                onPress={() => deleteUser(item.id, item.name)}
              >
                <Text style={styles.btnText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

   
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modal}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>
              {editingUser ? "Edit User" : "Add User"}
            </Text>

            <TextInput
              placeholder="Name"
              style={styles.input}
              value={form.name}
              onChangeText={(v) => setForm({ ...form, name: v })}
            />
            <TextInput
              placeholder="Role"
              style={styles.input}
              value={form.role}
              onChangeText={(v) => setForm({ ...form, role: v })}
            />
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={form.email}
              onChangeText={(v) => setForm({ ...form, email: v })}
            />

            <TouchableOpacity style={styles.saveBtn} onPress={saveUser}>
              <Text style={styles.btnText}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={{ marginTop: 10 }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#d9e3e1",
  },
  title: {
    fontSize: 22,
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  addBtn: {
    backgroundColor: "#00adb5",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  addText: { color: "#fff", fontWeight: "bold" },
  card: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: { fontSize: 16, fontWeight: "bold" },
  actions: {
    flexDirection: "row",
    marginTop: 8,
    gap: 10,
  },
  editBtn: {
    backgroundColor: "#007bff",
    padding: 8,
    borderRadius: 6,
  },
  deleteBtn: {
    backgroundColor: "#e94560",
    padding: 8,
    borderRadius: 6,
  },
  btnText: { color: "#fff" },
  modal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
  },
  modalBox: {
    backgroundColor: "#fff",
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: { fontSize: 18, marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 6,
    marginBottom: 10,
  },
  saveBtn: {
    backgroundColor: "#00adb5",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
  },
});
