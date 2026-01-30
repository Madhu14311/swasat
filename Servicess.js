// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';

// const DEPARTMENTS = [
//   'Revenue Department',
//   'Health Department',
//   'Education Department',
//   'Police Department',
//   'Municipal Department',
//   'Social Welfare',
//   'Transport Department',
// ];

// export default function Servicess({ theme }) {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [selectedDept, setSelectedDept] = useState('Revenue Department');

//   return (
//     <View style={{ flex: 1 }}>

//       {/* HEADER */}
//       <LinearGradient colors={theme} style={styles.header}>
//         <TouchableOpacity onPress={() => setDrawerOpen(true)}>
//           <Ionicons name="menu" size={28} color="#fff" />
//         </TouchableOpacity>

//         <Text style={styles.headerTitle}>Services</Text>
//       </LinearGradient>

//       {/* CONTENT */}
//       <ScrollView contentContainerStyle={{ padding: 16 }}>
//         <Text style={styles.sectionTitle}>{selectedDept}</Text>

//         <View style={styles.card}>
//           <Text style={styles.serviceItem}>• Apply Certificate</Text>
//           <Text style={styles.serviceItem}>• Track Application</Text>
//           <Text style={styles.serviceItem}>• Lodge Complaint</Text>
//           <Text style={styles.serviceItem}>• View Schemes</Text>
//         </View>
//       </ScrollView>

//       {/* DRAWER */}
//       {drawerOpen && (
//         <View style={styles.drawerOverlay}>
//           <View style={styles.drawer}>
//             <Text style={styles.drawerTitle}>Departments</Text>

//             {DEPARTMENTS.map((dept) => (
//               <TouchableOpacity
//                 key={dept}
//                 style={styles.drawerItem}
//                 onPress={() => {
//                   setSelectedDept(dept);
//                   setDrawerOpen(false);
//                 }}
//               >
//                 <Text style={styles.drawerText}>{dept}</Text>
//               </TouchableOpacity>
//             ))}

//             <TouchableOpacity
//               style={styles.closeBtn}
//               onPress={() => setDrawerOpen(false)}
//             >
//               <Text style={{ color: '#fff' }}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       )}

//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   header: {
//     padding: 18,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerTitle: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginLeft: 16,
//   },

//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     marginBottom: 12,
//   },

//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     padding: 16,
//     elevation: 3,
//   },

//   serviceItem: {
//     fontSize: 15,
//     paddingVertical: 6,
//     color: '#333',
//   },

//   drawerOverlay: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0,0,0,0.4)',
//   },

//   drawer: {
//     width: '75%',
//     backgroundColor: '#fff',
//     height: '100%',
//     padding: 20,
//   },

//   drawerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },

//   drawerItem: {
//     paddingVertical: 14,
//     borderBottomWidth: 1,
//     borderColor: '#eee',
//   },

//   drawerText: {
//     fontSize: 16,
//     color: '#333',
//   },

//   closeBtn: {
//     marginTop: 20,
//     backgroundColor: '#223D79',
//     padding: 12,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
// });
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const DATA = {
  'Revenue Department': [
    'Land Records',
    'Income Certificate',
    'Caste Certificate',
  ],
  'Health Department': [
    'Hospital Complaint',
    'Ambulance Service',
    'Health Scheme',
  ],
  'Education Department': [
    'Scholarship',
    'School Transfer',
    'Exam Issue',
  ],
  'Police Department': [
    'General Complaint',
    'Cyber Crime',
    'Traffic Issue',
  ],
  'Municipal Department': [
    'Garbage Issue',
    'Water Supply',
    'Street Light',
  ],
};

export default function ServicesPage({ theme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);

  const [department, setDepartment] = useState(null);
  const [category, setCategory] = useState(null);

  const departments = Object.keys(DATA);
  const categories = department ? DATA[department] : [];

  return (
    <View style={{ flex: 1 }}>

      {/* HEADER */}
      <LinearGradient colors={theme} style={styles.header}>
        <TouchableOpacity onPress={() => setMenuOpen(true)}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Services</Text>
      </LinearGradient>

      {/* PAGE CONTENT */}
      <ScrollView contentContainerStyle={{ padding: 16 }}>

        {/* DEPARTMENT DROPDOWN */}
        <Text style={styles.label}>Department</Text>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setDeptOpen(!deptOpen)}
        >
          <Text style={styles.dropdownText}>
            {department || 'Select Department'}
          </Text>
          <Ionicons
            name={deptOpen ? 'chevron-up' : 'chevron-down'}
            size={22}
          />
        </TouchableOpacity>

        {deptOpen && (
          <View style={styles.dropdownList}>
            {departments.map((d) => (
              <TouchableOpacity
                key={d}
                style={styles.dropdownItem}
                onPress={() => {
                  setDepartment(d);
                  setCategory(null);
                  setDeptOpen(false);
                }}
              >
                <Text style={styles.dropdownItemText}>{d}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* CATEGORY DROPDOWN */}
        <Text style={[styles.label, { marginTop: 20 }]}>Category</Text>
        <TouchableOpacity
          disabled={!department}
          style={[
            styles.dropdown,
            !department && { opacity: 0.5 },
          ]}
          onPress={() => setCatOpen(!catOpen)}
        >
          <Text style={styles.dropdownText}>
            {category || 'Select Category'}
          </Text>
          <Ionicons
            name={catOpen ? 'chevron-up' : 'chevron-down'}
            size={22}
          />
        </TouchableOpacity>

        {catOpen && (
          <View style={styles.dropdownList}>
            {categories.map((c) => (
              <TouchableOpacity
                key={c}
                style={styles.dropdownItem}
                onPress={() => {
                  setCategory(c);
                  setCatOpen(false);
                }}
              >
                <Text style={styles.dropdownItemText}>{c}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* RAISE REQUEST */}
        <TouchableOpacity
          disabled={!department || !category}
          style={{ marginTop: 40 }}
        >
          <LinearGradient
            colors={theme}
            style={[
              styles.raiseBtn,
              (!department || !category) && { opacity: 0.5 },
            ]}
          >
            <Ionicons name="add-circle-outline" size={22} color="#fff" />
            <Text style={styles.raiseText}>Raise Request</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>

      {/* LEFT MENU (DEPARTMENTS) */}
      {menuOpen && (
        <View style={styles.menuOverlay}>
          <View style={styles.menu}>
            <Text style={styles.menuTitle}>Departments</Text>

            {departments.map((d) => (
              <TouchableOpacity
                key={d}
                style={styles.menuItem}
                onPress={() => {
                  setDepartment(d);
                  setCategory(null);
                  setMenuOpen(false);
                }}
              >
                <Text style={styles.menuText}>{d}</Text>
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setMenuOpen(false)}
            >
              <Text style={{ color: '#fff' }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
  },

  label: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },

  dropdown: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },

  dropdownText: {
    fontSize: 15,
    color: '#333',
  },

  dropdownList: {
    backgroundColor: '#fff',
    borderRadius: 14,
    marginTop: 8,
    elevation: 3,
    overflow: 'hidden',
  },

  dropdownItem: {
    padding: 14,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },

  dropdownItemText: {
    fontSize: 15,
    color: '#333',
  },

  raiseBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 20,
  },

  raiseText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },

  menuOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },

  menu: {
    width: '75%',
    backgroundColor: '#fff',
    height: '100%',
    padding: 20,
  },

  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  menuItem: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },

  menuText: {
    fontSize: 16,
    color: '#333',
  },

  closeBtn: {
    marginTop: 20,
    backgroundColor: '#223D79',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
});
