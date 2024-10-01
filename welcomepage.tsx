import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.ImageSize}
      source={require('assets/splash.png')}
      />
      <Text style={styles.title}>Chef App</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'light green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageSize: {
    width: 150,
    height: 150,
    marginBottom:20,
  },
  title: {
    fontSize: 10,
    bottom: 20,
    left: 20,
    textAlign: 'center',
  },
});
