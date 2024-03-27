import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './app/home/HomeScreen'; 
import RecipeSearchScreen from './app/home/SearchScreen';
import RecipeDetailScreen from './app/home/RecipeDetailsScreen';
import FavoriteRecipesScreen from './app/home/FavoriteRecipesScreen';
import Sidebar from './app/home/Sidebar';
import SearchScreen from './app/home/SearchScreen';
import RecipeCard from './app/home/RecipeCard';
import RecipeFetcher from './app/home/Recipefetcher';
import Registration from './app/Registration';
import Login from './app/Login';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Sidebar/>
      <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="Sidebar" component={Sidebar} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Recipefetcher" component={RecipeFetcher} />
        <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
        <Stack.Screen name="FavoriteRecipes" component={FavoriteRecipesScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
