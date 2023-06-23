import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <TouchableOpacity style={styles.profilePictureContainer}>
          <Image
            source={require('../../pfp.jpeg')}
            style={styles.profilePicture}
          />
        </TouchableOpacity>
        <Text style={styles.userID}>
        User_ID098450345
        </Text>
      </View>
      <TouchableOpacity style={styles.editProfileButton}>
        <Text style={styles.editProfileButtonText}>Edit Profile</Text>
      </TouchableOpacity>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionButtonText}>Preferences</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionButtonText}>Privacy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionButtonText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionButtonText}>Security</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionButtonText}>Appearance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionButtonText}>Account Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionButtonText}>Privacy Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionButtonText}>About this App</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionButtonText}>Need Help?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionButtonText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePictureContainer: {
    borderRadius: 75,
    overflow: 'hidden',
  },
  profilePicture: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
  userID: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000',
  },
  editProfileButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  editProfileButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#888',
  },
  optionsContainer: {
    marginBottom: 10,
  },
  optionButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  optionButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#888',
  },
});

export default ProfileScreen;
