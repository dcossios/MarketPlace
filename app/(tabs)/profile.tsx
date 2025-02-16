import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileInfo}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' }}
            style={styles.profileImage}
          />
          <View style={styles.stats}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>124</Text>
              <Text style={styles.statLabel}>Listings</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>1.2k</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>890</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.bio}>
          <Text style={styles.name}>Sarah Mitchell</Text>
          <Text style={styles.bioText}>Vintage fashion lover 🌟 | Sustainable style advocate 🌿</Text>
        </View>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My Listings</Text>
        {/* Add listings grid here */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  stats: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: '600',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  bio: {
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  bioText: {
    fontSize: 14,
    color: '#666',
  },
  editButton: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
});