import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function NewListingScreen() {
  const [images, setImages] = useState([]);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImages([...images, result.assets[0].uri]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeButton}>
          <Ionicons name="close" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New Listing</Text>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Add Photos</Text>
          <Text style={styles.sectionSubtitle}>
            Add up to 8 photos. The first photo will be your cover image.
          </Text>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.imageList}
          >
            <TouchableOpacity 
              style={styles.addImageButton}
              onPress={pickImage}
            >
              <Ionicons name="add" size={40} color="#666" />
              <Text style={styles.addImageText}>Add Photos</Text>
            </TouchableOpacity>
            
            {images.map((uri, index) => (
              <View key={index} style={styles.imageContainer}>
                <Image source={{ uri }} style={styles.image} />
                <TouchableOpacity 
                  style={styles.removeImageButton}
                  onPress={() => setImages(images.filter((_, i) => i !== index))}
                >
                  <Ionicons name="close-circle" size={24} color="#FF385C" />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Details</Text>
          <TouchableOpacity style={styles.detailItem}>
            <Text style={styles.detailLabel}>Title</Text>
            <View style={styles.detailRight}>
              <Text style={styles.detailPlaceholder}>Add a title</Text>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.detailItem}>
            <Text style={styles.detailLabel}>Category</Text>
            <View style={styles.detailRight}>
              <Text style={styles.detailPlaceholder}>Select category</Text>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.detailItem}>
            <Text style={styles.detailLabel}>Condition</Text>
            <View style={styles.detailRight}>
              <Text style={styles.detailPlaceholder}>Select condition</Text>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.detailItem}>
            <Text style={styles.detailLabel}>Size</Text>
            <View style={styles.detailRight}>
              <Text style={styles.detailPlaceholder}>Select size</Text>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.detailItem}>
            <Text style={styles.detailLabel}>Brand</Text>
            <View style={styles.detailRight}>
              <Text style={styles.detailPlaceholder}>Add brand</Text>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.detailItem}>
            <Text style={styles.detailLabel}>Price</Text>
            <View style={styles.detailRight}>
              <Text style={styles.detailPlaceholder}>Set price</Text>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.detailItem, styles.lastDetailItem]}>
            <Text style={styles.detailLabel}>Description</Text>
            <View style={styles.detailRight}>
              <Text style={styles.detailPlaceholder}>Add description</Text>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </View>
          </TouchableOpacity>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  closeButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  nextButton: {
    padding: 4,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF385C',
  },
  content: {
    flex: 1,
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  imageList: {
    flexDirection: 'row',
  },
  addImageButton: {
    width: 120,
    height: 120,
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  addImageText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  imageContainer: {
    position: 'relative',
    marginRight: 12,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 12,
  },
  removeImageButton: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  lastDetailItem: {
    borderBottomWidth: 0,
  },
  detailLabel: {
    fontSize: 16,
    color: '#000',
  },
  detailRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailPlaceholder: {
    fontSize: 16,
    color: '#666',
    marginRight: 8,
  },
});