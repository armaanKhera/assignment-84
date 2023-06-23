import React, { useState } from 'react';
import { View, TextInput, ScrollView, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useFonts } from 'expo-font';

const CreatePost = () => {
  const [previewImage, setPreviewImage] = useState('image_1');

  const preview_images = {
    image_1: require('../../assets/image_1.jpg'),
    image_2: require('../../assets/image_2.jpg'),
    image_3: require('../../assets/image_3.jpg'),
    image_4: require('../../assets/image_4.jpg'),
    image_5: require('../../assets/image_5.jpg'),
  };

  const [fontsLoaded] = useFonts({
    'OpenSans-Regular': require('../../assets/fonts/Open_Sans/static/OpenSans-Regular.ttf'),
    'OpenSans-Bold': require('../../assets/fonts/Open_Sans/static/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2F2F2',
      padding: 20,
    },
    dropdownContainer: {
      height: 40,
      marginBottom: 20,
    },
    dropdown: {
      backgroundColor: '#FFFFFF',
      borderWidth: 0,
      borderRadius: 5,
    },
    dropdownItem: {
      justifyContent: 'flex-start',
    },
    dropdownLabel: {
      fontFamily: 'OpenSans-Regular',
      fontSize: 16,
      color: '#333333',
    },
    dropdownList: {
      backgroundColor: '#FFFFFF',
      borderWidth: 0,
      borderRadius: 5,
      marginTop: -10,
    },
    captionContainer: {
      borderWidth: 1,
      borderColor: '#E0E0E0',
      borderRadius: 5,
      padding: 10,
      backgroundColor: '#FFFFFF',
    },
    captionInput: {
      fontFamily: 'OpenSans-Regular',
      fontSize: 16,
      color: '#333333',
    },
  });

  return (
    <ScrollView style={styles.container}>
      <DropDownPicker
        items={[
          { label: 'Image 1', value: 'image_1' },
          { label: 'Image 2', value: 'image_2' },
          { label: 'Image 3', value: 'image_3' },
          { label: 'Image 4', value: 'image_4' },
          { label: 'Image 5', value: 'image_5' },
        ]}
        defaultValue={previewImage}
        containerStyle={styles.dropdownContainer}
        style={styles.dropdown}
        itemStyle={styles.dropdownItem}
        labelStyle={styles.dropdownLabel}
        dropDownStyle={styles.dropdownList}
        onChangeItem={(item) => setPreviewImage(item.value)}
      />

      <View style={styles.captionContainer}>
        <TextInput
          placeholder="Enter caption..."
          placeholderTextColor="#888888"
          multiline={true}
          numberOfLines={4}
          style={styles.captionInput}
        />
      </View>
    </ScrollView>
  );
};

export default CreatePost;
