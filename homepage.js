import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'C:\Users\RC_Student_lab\Desktop\MAST PART 2\MASTPART2\homepage.tsx./HomeScreen';  // Your custom menu HomeScreen
import CourseScreen from 'C:\Users\RC_Student_lab\Desktop\MAST PART 2\MASTPART2\course selection.tsx./DetailsScreen';
import DishScreen from 'C:\Users\RC_Student_lab\Desktop\MAST PART 2\MASTPART2\dishInformation.tsx./SettingsScreen';
import React from 'react';
import { View, Text } from 'react-native';

export default function DetailsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details Page</Text>
      </View>
    );
  }

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Course" component={CourseScreen} />
        <Stack.Screen name="Dish" component={DishScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
