import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const CATEGORIES = [
  'All',
  'Tops',
  'Dresses',
  'Pants',
  'Shoes',
  'Accessories',
  'Outerwear',
];

const FILTERS = {
  condition: ['New', 'Like New', 'Good', 'Fair'],
  size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  color: ['Black', 'White', 'Red', 'Blue', 'Green', 'Yellow', 'Pink'],
  price: ['Under $25', '$25-$50', '$50-$100', '$100+'],
};

const TRENDING_SEARCHES = [
  'vintage denim',
  'summer dress',
  'nike sneakers',
  'leather jacket',
  'designer bags',
];

export default function SearchScreen() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    condition: [],
    size: [],
    color: [],
    price: [],
  });

  const toggleFilter = (type, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(item => item !== value)
        : [...prev[type], value],
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            placeholder="Search items..."
            style={styles.searchInput}
            placeholderTextColor="#666"
          />
        </View>
      </View>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
        {CATEGORIES.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryChip,
              activeCategory === category && styles.activeCategory,
            ]}
            onPress={() => setActiveCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                activeCategory === category && styles.activeCategoryText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.filterHeader}>
        <TouchableOpacity 
          style={styles.filterButton}
          onPress={() => setShowFilters(!showFilters)}
        >
          <Ionicons name="options-outline" size={20} color="#000" />
          <Text style={styles.filterButtonText}>Filters</Text>
        </TouchableOpacity>
        {Object.values(selectedFilters).some(arr => arr.length > 0) && (
          <TouchableOpacity 
            style={styles.clearButton}
            onPress={() => setSelectedFilters({
              condition: [],
              size: [],
              color: [],
              price: [],
            })}
          >
            <Text style={styles.clearButtonText}>Clear All</Text>
          </TouchableOpacity>
        )}
      </View>

      {showFilters ? (
        <ScrollView style={styles.filtersContainer}>
          {Object.entries(FILTERS).map(([filterType, options]) => (
            <View key={filterType} style={styles.filterSection}>
              <Text style={styles.filterTitle}>
                {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
              </Text>
              <View style={styles.filterOptions}>
                {options.map((option) => (
                  <TouchableOpacity
                    key={option}
                    style={[
                      styles.filterChip,
                      selectedFilters[filterType].includes(option) && styles.activeFilterChip,
                    ]}
                    onPress={() => toggleFilter(filterType, option)}
                  >
                    <Text style={[
                      styles.filterChipText,
                      selectedFilters[filterType].includes(option) && styles.activeFilterChipText,
                    ]}>
                      {option}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}
        </ScrollView>
      ) : (
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Trending Searches</Text>
          {TRENDING_SEARCHES.map((search, index) => (
            <TouchableOpacity key={index} style={styles.trendingItem}>
              <Ionicons name="trending-up-outline" size={20} color="#666" />
              <Text style={styles.trendingText}>{search}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
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
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  categories: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 8,
  },
  activeCategory: {
    backgroundColor: '#FF385C',
  },
  categoryText: {
    fontSize: 14,
    color: '#666',
  },
  activeCategoryText: {
    color: '#fff',
  },
  filterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterButtonText: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: '500',
  },
  clearButton: {
    padding: 8,
  },
  clearButtonText: {
    color: '#FF385C',
    fontSize: 14,
    fontWeight: '500',
  },
  filtersContainer: {
    flex: 1,
    padding: 16,
  },
  filterSection: {
    marginBottom: 24,
  },
  filterTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  filterOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  activeFilterChip: {
    backgroundColor: '#FF385C',
  },
  filterChipText: {
    fontSize: 14,
    color: '#666',
  },
  activeFilterChipText: {
    color: '#fff',
  },
  content: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  trendingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  trendingText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#333',
  },
});