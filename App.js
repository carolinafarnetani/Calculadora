import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import Content from './src/component/Content';
import Header from './src/component/Header';





export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Content />
      <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
      <Image style={{width:300, resizeMode:'contain'}} source={require('./assets/pincel.png')}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Cursive',
  },
});
