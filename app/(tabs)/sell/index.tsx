import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

<<<<<<< HEAD
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
=======
const SELLING_STEPS = [
  {
    icon: 'camera-outline',
    title: 'Take Great Photos',
    description: 'Use natural light and capture multiple angles. Show any imperfections clearly.',
    tips: [
      'Use good lighting',
      'Take photos from all angles',
      'Show size reference',
      'Capture any flaws',
    ],
  },
  {
    icon: 'document-text-outline',
    title: 'Describe Your Item',
    description: 'Be detailed and honest about the condition. Include all relevant information.',
    tips: [
      'Accurate measurements',
      'Brand and size details',
      'Material composition',
      'Condition description',
    ],
  },
  {
    icon: 'pricetag-outline',
    title: 'Set the Right Price',
    description: 'Research similar items to price competitively. Consider item condition.',
    tips: [
      'Check similar listings',
      'Factor in condition',
      'Consider shipping costs',
      'Set competitive price',
    ],
  },
  {
    icon: 'cube-outline',
    title: 'Shipping & Packaging',
    description: 'Package items securely and ship promptly after sale.',
    tips: [
      'Use appropriate packaging',
      'Protect fragile items',
      'Ship within 2 days',
      'Track all shipments',
    ],
>>>>>>> Carrito de compras
  },
];

export default function SellScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
<<<<<<< HEAD
        <Text style={styles.headerTitle}>Sell an Item</Text>
=======
        <Text style={styles.headerTitle}>Start Selling</Text>
>>>>>>> Carrito de compras
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

<<<<<<< HEAD
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
=======
      <View style={styles.stepsContainer}>
        <Text style={styles.sectionTitle}>How to Sell Successfully</Text>
        
        {SELLING_STEPS.map((step, index) => (
          <View key={index} style={styles.stepCard}>
            <View style={styles.stepHeader}>
              <View style={styles.iconContainer}>
                <Ionicons name={step.icon} size={32} color="#FF385C" />
              </View>
              <View style={styles.stepTitleContainer}>
                <Text style={styles.stepNumber}>Step {index + 1}</Text>
                <Text style={styles.stepTitle}>{step.title}</Text>
              </View>
            </View>
            
            <Text style={styles.stepDescription}>{step.description}</Text>
            
            <View style={styles.tipsList}>
              {step.tips.map((tip, tipIndex) => (
                <View key={tipIndex} style={styles.tipItem}>
                  <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
                  <Text style={styles.tipText}>{tip}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
>>>>>>> Carrito de compras
      </View>

      <Link href="/sell/new" asChild>
        <TouchableOpacity style={styles.button}>
<<<<<<< HEAD
          <Text style={styles.buttonText}>List an Item</Text>
=======
          <Text style={styles.buttonText}>Start Selling</Text>
>>>>>>> Carrito de compras
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
<<<<<<< HEAD
  tipsSection: {
=======
  stepsContainer: {
>>>>>>> Carrito de compras
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
<<<<<<< HEAD
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
=======
    marginBottom: 24,
  },
  stepCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
>>>>>>> Carrito de compras
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
<<<<<<< HEAD
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
=======
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#FFF5F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  stepTitleContainer: {
    flex: 1,
  },
  stepNumber: {
    fontSize: 14,
    color: '#FF385C',
    fontWeight: '600',
    marginBottom: 4,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  stepDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 16,
  },
  tipsList: {
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    padding: 12,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  tipText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#444',
>>>>>>> Carrito de compras
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