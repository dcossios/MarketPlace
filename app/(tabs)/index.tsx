import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SAMPLE_PRODUCTS = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985',
    title: 'Vintage Denim Jacket',
    price: 45,
    seller: 'Sarah M.',
    likes: 24,
    height: 200,
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9',
    title: 'Designer Sneakers',
    price: 85,
    seller: 'Mike R.',
    likes: 56,
    height: 280,
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3',
    title: 'Leather Crossbody Bag',
    price: 95,
    seller: 'Emma L.',
    likes: 42,
    height: 240,
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1583846717393-dc2412c95ed7',
    title: 'Vintage Silk Scarf',
    price: 25,
    seller: 'Julia K.',
    likes: 18,
    height: 180,
  },
];

const { width } = Dimensions.get('window');
const COLUMN_WIDTH = (width - 48) / 2;

function ProductCard({ item, style }) {
  return (
    <TouchableOpacity style={[styles.card, style]}>
      <Image 
        source={{ uri: item.image }} 
        style={[styles.image, { height: item.height }]}
      />
      <View style={styles.cardContent}>
        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <View style={styles.footer}>
          <View style={styles.sellerContainer}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' }}
              style={styles.sellerAvatar}
            />
            <Text style={styles.seller}>{item.seller}</Text>
          </View>
          <View style={styles.likes}>
            <Ionicons name="heart-outline" size={16} color="#666" />
            <Text style={styles.likesCount}>{item.likes}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function HomeScreen() {
  const leftColumnData = SAMPLE_PRODUCTS.filter((_, i) => i % 2 === 0);
  const rightColumnData = SAMPLE_PRODUCTS.filter((_, i) => i % 2 === 1);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Discover</Text>
      </View>
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.masonryContainer}>
          <View style={styles.column}>
            {leftColumnData.map(item => (
              <ProductCard 
                key={item.id} 
                item={item} 
                style={{ marginBottom: 16 }}
              />
            ))}
          </View>
          <View style={styles.column}>
            {rightColumnData.map(item => (
              <ProductCard 
                key={item.id} 
                item={item} 
                style={{ marginBottom: 16 }}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
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
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  scrollView: {
    flex: 1,
  },
  masonryContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 16,
  },
  column: {
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: COLUMN_WIDTH,
  },
  image: {
    width: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  cardContent: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
    color: '#000',
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FF385C',
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  sellerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sellerAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 6,
  },
  seller: {
    fontSize: 14,
    color: '#666',
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likesCount: {
    marginLeft: 4,
    fontSize: 14,
    color: '#666',
  },
});