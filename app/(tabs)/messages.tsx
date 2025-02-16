import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SAMPLE_CHATS = [
  {
    id: '1',
    user: {
      name: 'Sarah Mitchell',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      online: true,
    },
    lastMessage: 'Is this still available?',
    time: '2m ago',
    unread: 2,
  },
  {
    id: '2',
    user: {
      name: 'Michael Ross',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      online: false,
    },
    lastMessage: "Great! I'll take it.",
    time: '1h ago',
    unread: 0,
  },
  {
    id: '3',
    user: {
      name: 'Emma Lewis',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
      online: true,
    },
    lastMessage: 'Could you do $40?',
    time: '3h ago',
    unread: 1,
  },
];

function ChatItem({ chat }) {
  return (
    <TouchableOpacity style={styles.chatItem}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: chat.user.avatar }} style={styles.avatar} />
        {chat.user.online && <View style={styles.onlineIndicator} />}
      </View>
      <View style={styles.chatInfo}>
        <View style={styles.chatHeader}>
          <Text style={styles.userName}>{chat.user.name}</Text>
          <Text style={styles.timeText}>{chat.time}</Text>
        </View>
        <View style={styles.chatPreview}>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {chat.lastMessage}
          </Text>
          {chat.unread > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadText}>{chat.unread}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function MessagesScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
      </View>
      
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            placeholder="Search messages..."
            style={styles.searchInput}
            placeholderTextColor="#666"
          />
        </View>
      </View>

      <FlatList
        data={SAMPLE_CHATS}
        renderItem={({ item }) => <ChatItem chat={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={styles.chatList}
      />
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
  searchContainer: {
    padding: 16,
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
  chatList: {
    flex: 1,
  },
  chatItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  onlineIndicator: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#4CAF50',
    borderWidth: 2,
    borderColor: '#fff',
  },
  chatInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  timeText: {
    fontSize: 12,
    color: '#666',
  },
  chatPreview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lastMessage: {
    fontSize: 14,
    color: '#666',
    flex: 1,
    marginRight: 8,
  },
  unreadBadge: {
    backgroundColor: '#FF385C',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  unreadText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});