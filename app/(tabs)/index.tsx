import { sharedStyles as styles } from '../../styles/shared'

import { Text, View, StyleSheet } from 'react-native';

const index = () => {
  return (
    <View style={styles.container}>
          <Text style={styles.title}>Welcome to Fitness App!</Text>
    </View>
  );
}

export default index