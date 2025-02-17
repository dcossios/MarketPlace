import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
=======
import { CartProvider } from './context/CartContext';
>>>>>>> Carrito de compras

declare global {
  interface Window {
    frameworkReady?: () => void;
  }
}

export default function RootLayout() {
  useEffect(() => {
    window.frameworkReady?.();
  }, []);

  return (
<<<<<<< HEAD
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
=======
    <CartProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen 
          name="cart" 
          options={{
            presentation: 'modal',
            headerShown: true,
            title: 'Shopping Cart',
          }} 
        />
      </Stack>
      <StatusBar style="auto" />
    </CartProvider>
  );
}
>>>>>>> Carrito de compras
