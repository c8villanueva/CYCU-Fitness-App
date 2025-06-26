import { Text, View, StyleSheet } from 'react-native';

const home = () => {
  return (
    <View style={styles.container}>
          <Text style={styles.title}>[home screen]</Text>
    </View>
  );
}

export default home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
    paddingBottom: 15,
  }
});
