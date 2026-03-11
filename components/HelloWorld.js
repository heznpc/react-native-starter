import { View, Text, StyleSheet } from 'react-native';

export default function HelloWorld({ name = 'World' }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, {name}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});
