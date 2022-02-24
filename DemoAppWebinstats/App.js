/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};
import Webinstats from 'react-native-react-wis/Webinstats';
import WisInline from 'react-native-react-wis/WisInline';
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  wisPageview('Home Page');
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <View style={{margin: 20}}>
            <Button onPress={wisAddItem} title="Add Item" color="#841584" />
          </View>
          <View style={{margin: 20}}>
            <Button
              onPress={wisPageview}
              title="Send Pageview"
              color="#841584"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const wisPageview = function (paeName) {
  // example parameter map
  console.log('wis page view called');
  var map = {
    s: '1549',
    _cburl: '//wis.webinstats.com/',
    p: 'Other',
    wistest: 'aaa',
  }; // LEAVE THIS EMPTY IF IT'S NOT PURCHASE PAGE
  Webinstats._execute(map);
};
const wisAddItem = function () {
  console.log('wis add item called');
  Webinstats.addItem( '1549','//wis.webinstats.com/','123','1','1300.50','shoes','Adidas White Sneaker');
  Webinstats.addItem( '1549','//wis.webinstats.com/','456','1','13.50','other','Green EarRings');
};
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
