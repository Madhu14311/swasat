import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function VisitorsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#000" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Today's Visitors</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginTop: 20 },
  backButton: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    position: 'absolute', 
    top: 50, 
    left: 20 
  },
  backText: { marginLeft: 5, fontSize: 16 },
});
