import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../context/CartContext';

const SAMPLE_PRODUCTS = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985',
    title: 'Vintage Denim Jacket',
    price: 45,
    seller: 'Sarah M.',
    likes: 24,
    description: 'Classic vintage denim jacket in excellent condition. Features traditional button closure and two front pockets. Perfect for any casual outfit.',
    brand: 'Levi\'s',
    size: 'M',
    condition: 'Excellent',
    color: 'Blue',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9',
    title: 'Designer Sneakers',
    price: 85,
    seller: 'Mike R.',
    likes: 56,
    description: 'Premium designer sneakers in like-new condition. Comfortable fit with modern design.',
    brand: 'Nike',
    size: '42',
    condition: 'Like New',
    color: 'White',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3',
    title: 'Leather Crossbody Bag',
    price: 95,
    seller: 'Emma L.',
    likes: 42,
    description: 'Genuine leather crossbody bag with adjustable strap. Multiple compartments for organization.',
    brand: 'Coach',
    size: 'One Size',
    condition: 'Good',
    color: 'Brown',
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1583846717393-dc2412c95ed7',
    title: 'Vintage Silk Scarf',
    price: 25,
    seller: 'Julia K.',
    likes: 18,
    description: 'Beautiful vintage silk scarf with unique pattern. Perfect accessory for any outfit.',
    brand: 'Vintage',
    size: 'One Size',
    condition: 'Good',
    color: 'Multi',
  },
];

export default function ProductScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { addItem } = useCart();
  
  const product = SAMPLE_PRODUCTS.find(p => p.id === id);
  
  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Product not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={{ uri: product.image }} style={styles.image} />
        
        <View style={styles.content}>
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>{product.title}</Text>
              <Text style={styles.price}>${product.price}</Text>
            </View>
            <TouchableOpacity style={styles.likeButton}>
              <Ionicons name="heart-outline" size={24} color="#FF385C" />
              <Text style={styles.likeCount}>{product.likes}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.sellerContainer}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' }}
              style={styles.sellerAvatar}
            />
            <View style={styles.sellerInfo}>
              <Text style={styles.sellerName}>{product.seller}</Text>
              <Text style={styles.sellerRating}>⭐️ 4.8 (42 reviews)</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Details</Text>
            <View style={styles.detailsGrid}>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Brand</Text>
                <Text style={styles.detailValue}>{product.brand}</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Size</Text>
                <Text style={styles.detailValue}>{product.size}</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Condition</Text>
                <Text style={styles.detailValue}>{product.condition}</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Color</Text>
                <Text style={styles.detailValue}>{product.color}</Text>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.messageButton}
          onPress={() => {
            // Implement message seller logic
            console.log('Message seller');
          }}
        >
          <Ionicons name="chatbubble-outline" size={24} color="#FF385C" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.addToCartButton}
          onPress={() => {
            addItem({
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.image,
            });
          }}
        >
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 400,
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  price: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FF385C',
  },
  likeButton: {
    alignItems: 'center',
  },
  likeCount: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  sellerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    marginBottom: 24,
  },
  sellerAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  sellerInfo: {
    flex: 1,
  },
  sellerName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  sellerRating: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  detailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  detailItem: {
    width: '45%',
    backgroundColor: '#f8f8f8',
    padding: 12,
    borderRadius: 8,
  },
  detailLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '500',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
  },
  footer: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    backgroundColor: '#fff',
  },
  messageButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFF5F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: '#FF385C',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});