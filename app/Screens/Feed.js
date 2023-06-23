import React from 'react';
import { View, ScrollView, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import postsData from './temp_posts.json';

const FeedScreen = ({ navigation }) => {
  const goToPostScreen = () => {
    navigation.navigate('Post');
  };

  return (
    <ScrollView contentContainerStyle={styles.feedContainer}>
      {postsData.map((post, index) => (
        <TouchableOpacity key={index} style={styles.postBox} onPress={goToPostScreen}>
          <View style={styles.postHeader}>
            <Image source={{ uri: post.profilePicture }} style={styles.profilePicture} />
            <Text style={styles.userID}>{post.username}</Text>
          </View>
          <Image source={{ uri: post.postPicture }} style={styles.postImage} resizeMode="cover" />
          <View style={styles.postContent}>
            <Text style={styles.postTitle}>{post.postTitle}</Text>
            <Text style={styles.postDescription}>{post.postDescription}</Text>
          </View>
          <View style={styles.postFooter}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Like</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Comment</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Share</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  feedContainer: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  postBox: {
    width: '90%',
    maxWidth: 500,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userID: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  postImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  postContent: {
    padding: 10,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  postDescription: {
    fontSize: 14,
    color: '#888',
  },
  postFooter: {
    flexDirection: 'row',
    height: 30,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#ccc',
  },
  buttonText: {
    fontSize: 14,
    color: '#888',
  },
});

export default FeedScreen;
