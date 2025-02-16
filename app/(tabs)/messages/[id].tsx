import { View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const SAMPLE_MESSAGES = {
  '1': {
    user: {
      name: 'Sarah Mitchell',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
    messages: [
      {
        id: 1,
        text: 'Hi! Is the vintage denim jacket still available?',
        sender: 'them',
        time: '2:30 PM',
      },
      {
        id: 2,
        text: 'Yes, it is! Are you interested in purchasing it?',
        sender: 'me',
        time: '2:32 PM',
      },
      {
        id: 3,
        text: 'Great! Could you tell me more about the condition?',
        sender: 'them',
        time: '2:33 PM',
      },
    ],
  },
};

export default function ChatScreen() {
  const { id } = useLocalSearchParams();
  const [message, setMessage] = useState('');
  const chat = SAMPLE_MESSAGES[id];

  const sendMessage = () => {
    if (message.trim().length === 0) return;
    // Add message handling logic here
    setMessage('');
  };

  const renderMessage = ({ item }) => (
    <View style={[
      styles.messageContainer,
      item.sender === 'me' ? styles.myMessage : styles.theirMessage,
    ]}>
      <View style={[
        styles.messageBubble,
        item.sender === 'me' ? styles.myBubble : styles.theirBubble,
      ]}>
        <Text style={styles.messageText}>{item.text}</Text>
        <Text style={styles.messageTime}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.headerInfo}>
          <Image source={{ uri: chat.user.avatar }} style={styles.avatar} />
          <Text style={styles.userName}>{chat.user.name}</Text>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <Ionicons name="ellipsis-horizontal" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={chat.messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.messagesList}
        inverted={false}
      />

      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.attachButton}>
          <Ionicons name="add-circle-outline" size={24} color="#666" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <TouchableOpacity 
          style={[styles.sendButton, !message.trim() && styles.sendButtonDisabled]}
          onPress={sendMessage}
          disabled={!message.trim()}
        >
          <Ionicons 
            name="send" 
            size={24} 
            color={message.trim() ? '#FF385C' : '#666'} 
          />
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    padding: 4,
  },
  headerInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
  },
  moreButton: {
    padding: 4,
  },
  messagesList: {
    padding: 16,
  },
  messageContainer: {
    marginBottom: 16,
    flexDirection: 'row',
  },
  myMessage: {
    justifyContent: 'flex-end',
  },
  theirMessage: {
    justifyContent: 'flex-start',
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 20,
  },
  myBubble: {
    backgroundColor: '#FF385C',
    borderBottomRightRadius: 4,
  },
  theirBubble: {
    backgroundColor: '#f0f0f0',
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 16,
    marginBottom: 4,
  },
  messageTime: {
    fontSize: 12,
    color: '#666',
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  attachButton: {
    padding: 4,
    marginRight: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    maxHeight: 100,
  },
  sendButton: {
    padding: 4,
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
});