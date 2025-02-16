import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const SELLING_TIPS = [
  {
    icon: 'camera-outline',
    title: 'Take great photos',
    description: 'Use natural light and take photos from multiple angles',
  },
  {
    icon: 'text-outline',
    title: 'Write detailed descriptions',
    description: 'Include size, condition, measurements, and brand',
  },
  {
    icon: 'pricetag-outline',
    title: 'Price it right',
    description: 'Check similar items to set a competitive price',
  },
  {
    icon: 'time-outline',
    title: 'Be responsive',
    description: 'Quick responses lead to more sales',
  },
];

export default function SellScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Sell an Item</Text>
      </View>

      <View style={styles.hero}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04' }}
          style={styles.heroImage}
        />
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>Turn Your Closet into Cash</Text>
          <Text style={styles.heroSubtitle}>
            Join thousands of sellers who've found new homes for their clothes
          </Text>
        </View>
      </View>

      <View style={styles.tipsSection}>
        <Text style={styles.sectionTitle}>Selling Tips</Text>
        <View style={styles.tipsGrid}>
          {SELLING_TIPS.map((tip, index) => (
            <View key={index} style={styles.tipCard}>
              <Ionicons name={tip.icon} size={32} color="#FF385C" />
              <Text style={styles.tipTitle}>{tip.title}</Text>
              <Text style={styles.tipDescription}>{tip.description}</Text>
            </View>
          ))}
        </View>
      </View>

      <Link href="/sell/new" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>List an Item</Text>
          <Ionicons name="arrow-forward" size={20} color="#fff" />
        </TouchableOpacity>
      </Link>
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
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  hero: {
    position: 'relative',
    height: 200,
    marginBottom: 24,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
  tipsSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  tipsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  tipCard: {
    width: '47%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 8,
  },
  tipDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF385C',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});