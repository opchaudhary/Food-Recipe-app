// Layout.js
import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Sidebar from './Sidebar';
import Header from './Header';
import Constants from 'expo-constants'; // to obtain the height of the status bar, including any notch or other screen features on the device
import HomeScreen from './HomeScreen';

const Layout = ({ children }) => {
  return (
    // SafeAreaView ensures content is displayed below the device's status bar
    <SafeAreaView style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
      {/* Main container for the layout */}
      <View style={styles.container}>
        {/* Header component */}
        <Header />

        {/* Sidebar component */}
        <Sidebar />

        {/* Home component (you might want to customize this based on your app structure) */}
        <HomeScreen />

        {/* Main content area */}
        <View style={styles.content}>{children}</View>
      </View>
    </SafeAreaView>
  );
};

// Styles for the Layout component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '##7B1FA2', // Background color for the entire layout
  },
  content: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff', // Background color for the main content area
  },
});

export default Layout;
