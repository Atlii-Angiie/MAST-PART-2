import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';


export default function CourseScreen({}) {
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.menuText}>MENU</Text>
        <Image style={styles.ImageSize}
  source={require('assets/')}
  />
        <Text style={styles.selectText}>Select Course</Text>
      </View>
      
      <TouchableOpacity style={styles.courseButton}>
      <Image style={styles.ImageSize}
  source={require('assets/')}></Image>
        <Text style={styles.courseText}>Starter</Text>
      </TouchableOpacity>

      <Image style={styles.ImageSize}
  source={require('assets/')}></Image>
      <TouchableOpacity style={styles.courseButton}>
        <Text style={styles.courseText}>Main Course</Text>
      </TouchableOpacity>

      <Image style={styles.ImageSize}
  source={require('assets/')}></Image>
      <TouchableOpacity style={styles.courseButton}>
        <Text style={styles.courseText}>Dessert</Text>
      </TouchableOpacity>
    </View>
    </NavigationContainer>
  );  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#00FF6A',  // Bright green color
    width: '100%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 100,
  },
  menuText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  selectText: {
    fontSize: 30,
    fontWeight: '300',
  },
  courseButton: {
    width: 200,
    height: 100,
    backgroundColor: '#00FF6A',
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  courseText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  ImageSize: {
    width: 150,
    height: 150,
    marginBottom:20,
  },
});
