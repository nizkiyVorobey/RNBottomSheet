/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { BottomMenu } from './src/BottomMenu';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.startWrapper}>
          <Text>START</Text>
        </View>
        <BottomMenu />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  startWrapper: {
    backgroundColor: 'lightgreen',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
