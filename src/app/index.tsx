import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [points, setPoints] = useState(0);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      <View style={styles.avatarSection}>
        <View style={styles.avatarCircle}>
          <Ionicons name="person-circle" size={104} color="#999" />
          <View style={styles.badge}>
            <Ionicons name="checkmark" size={20} color="#00e000" />
          </View>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.details}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>Sasmitha Ashinsana</Text>

        <Text style={styles.label}>Email</Text>
        <View style={styles.row}>
          <Ionicons name="mail" size={16} color="#000" />
          <Text style={[styles.value, styles.rowText]}>
            psaperera@students.nsbm.ac.lk
          </Text>
        </View>

        <Text style={styles.label}>Points</Text>
        <View style={styles.row}>
          <Ionicons name="star" size={16} color="#000" />
          <Text style={[styles.value, styles.rowText]}>{points}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.fab}
        onPress={() => setPoints(points + 1)}
      >
        <Ionicons name="add" size={26} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#000",
    paddingTop: 48,
    paddingBottom: 16,
    alignItems: "center",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  avatarSection: {
    alignItems: "center",
    marginTop: 24,
    marginBottom: 24,
  },
  avatarCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  avatar: {
    width: 104,
    height: 104,
    borderRadius: 52,
  },
  badge: {
    position: "absolute",
    right: 4,
    bottom: 4,
  },
  divider: {
    height: 1.5,
    backgroundColor: "#000",
    marginHorizontal: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    marginTop: 14,
  },
  value: {
    fontSize: 14,
    color: "#333",
    marginTop: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  rowText: {
    marginTop: 0,
    marginLeft: 8,
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 30,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
});
