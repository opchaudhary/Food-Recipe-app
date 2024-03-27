import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

const Sidebar = () => {
  const navigation = useNavigation();
  const [collapsed, setCollapsed] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(250); // Initial width of sidebar

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
    setSidebarWidth(collapsed ? 250 : 50); // Set sidebar width based on collapse/expand state
  };

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={[styles.sidebar, { width: sidebarWidth }]}>
      <TouchableOpacity onPress={toggleCollapse} style={styles.menuIcon}>
        <Icon name={collapsed ? "chevron-right" : "chevron-left"} size={24} color="white" />
      </TouchableOpacity>

      {!collapsed && (
        <View>
          <TouchableOpacity onPress={() => navigateToScreen('HomeScreen')} style={styles.sidebarItem}>
            <Icon name="home" size={24} color="white" style={styles.icon} />
            <Text style={styles.sidebarText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigateToScreen('Recipefetcher')} style={styles.sidebarItem}>
            <Icon name="grid" size={24} color="white" style={styles.icon} />
            <Text style={styles.sidebarText}>Recipes</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigateToScreen('FavoriteRecipesScreen')} style={styles.sidebarItem}>
            <Icon name="archive" size={24} color="white" style={styles.icon} />
            <Text style={styles.sidebarText}>Favorite Recipes</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigateToScreen('Login')} style={styles.sidebarItem}>
            <Icon name="lock" size={24} color="white" style={styles.icon} />
            <Text style={styles.sidebarText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToScreen('Registration')} style={styles.sidebarItem}>
            <Icon name="pen" size={24} color="white" style={styles.icon} />
            <Text style={styles.sidebarText}>Register</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: '#160a06', // Background color
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 1,
    transitionProperty: 'width',
    transitionDuration: '0.5s',
    transitionTimingFunction: 'ease',
  },
  menuIcon: {
    marginBottom: 10,
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  sidebarText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Sidebar;
