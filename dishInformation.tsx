import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert,Button
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

const ImagePickerExample = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = () => {
    ImagePicker.launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const pickedImage = response.assets[0].uri;
        console.log('Selected image URI:', pickedImage);
      } else {
        console.log('No image selected');
      }
    });
  };

  return (
    <View>
      <Button title="Pick an Image" onPress={pickImage} />
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
};



const MenuScreen = () => {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUri, setImageUri] = useState(null);


  const pickImage = () => {
    ImagePicker.launchImageLibrary(
      { mediaType: 'photo', quality: 1 },
      (response) => {
        if (!response.didCancel && response.assets && response.assets.length > 0) {

        }
      },
    );
  };

  
  const handleAddMeal = () => {
    if (dishName && description && price) {
      Alert.alert('Meal Added', `Dish: ${dishName}\nDescription: ${description}\nPrice: ${price}`);
    } else {
      Alert.alert('Error', 'Please fill out all fields');
    }
  };

  
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header} />
      <Text style={styles.headerTitle}>MENU</Text>
      <TouchableOpacity style={styles.menuIcon}>
        <Text style={styles.menuIconText}>☰</Text>
      </TouchableOpacity>

      {/* Dish Name Input */}
      <Text style={styles.label}>Dish Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Dish name"
        value={dishName}
        onChangeText={setDishName}
      />

      {/* Image Picker */}
      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <Text style={styles.imagePickerText}>Insert Image</Text>
        )}
      </TouchableOpacity>

      {/* Description Input */}
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      {/* Price Input */}
      <Text style={styles.label}>Price</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      {/* Add Meal Button */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddMeal}>
        <Text style={styles.addButtonText}>Add Meal</Text>
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    height: 200,
    backgroundColor: '#00FF66',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 60,
    textAlign: 'center',
  },
  menuIcon: {
    position: 'absolute',
    right: 20,
    top: 50,
  },
  menuIconText: {
    fontSize: 24,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    fontSize: 16,
    width: '100%',
  },
  imagePicker: {
    backgroundColor: '#00FF66',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  imagePickerText: {
    color: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  addButton: {
    backgroundColor: '#00FF66',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MenuScreen;
