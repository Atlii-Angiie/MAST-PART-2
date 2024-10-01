import React,{useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ }) {
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>
      
      
      <Text style={styles.itemCount}>Number of Items: {items.length}</Text>

      {/* Menu Item 1 */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => ('Details')}
      >
        <Text style={styles.menuText}>Go to Details</Text>
      </TouchableOpacity>

      {/* Menu Item 2 */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() =>('Settings')}
      >
        <Text style={styles.menuText}>Settings</Text>
      </TouchableOpacity>

      {/* Menu Item 3 */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => alert('Profile Selected')}
      >
        <Text style={styles.menuText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  itemCount: {
    fontSize: 18,
    marginBottom: 10,
  },
  menuItem: {
    padding: 15,
    backgroundColor: '#4CAF50',
    marginVertical: 10,
    width: '80%',
    borderRadius: 10,
  },
  menuText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
