import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
<<<<<<< HEAD

export default function TabLayout() {
=======
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useCart } from '../context/CartContext';

export default function TabLayout() {
  const router = useRouter();
  const { itemCount } = useCart();

  const CartButton = () => (
    <TouchableOpacity
      onPress={() => router.push('/cart')}
      style={{ 
        padding: 8,
        marginRight: 16,
        position: 'relative',
      }}
    >
      <Ionicons name="cart-outline" size={24} color="#000" />
      {itemCount > 0 && (
        <View
          style={{
            position: 'absolute',
            top: 4,
            right: 4,
            backgroundColor: '#FF385C',
            borderRadius: 10,
            minWidth: 20,
            height: 20,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 6,
          }}
        >
          <Text style={{ color: '#fff', fontSize: 12, fontWeight: '600' }}>
            {itemCount}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );

>>>>>>> Carrito de compras
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#f0f0f0',
        },
        tabBarActiveTintColor: '#FF385C',
        tabBarInactiveTintColor: '#8E8E93',
<<<<<<< HEAD
        headerShown: false,
=======
        headerShown: true,
        headerRight: () => <CartButton />,
>>>>>>> Carrito de compras
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="sell"
        options={{
<<<<<<< HEAD
          title: 'Sell',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-outline" size={size} color={color} />
=======
          title: 'Add',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" size={size + 4} color={color} />
>>>>>>> Carrito de compras
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: 'Messages',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}