import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const FavoriteRecipesScreen = ({ navigation }) => {
  const favoriteRecipes = []; // Get favorite recipes from your storage

  const navigateToRecipeDetails = (recipe) => {
    // Navigate to RecipeDetailsScreen with the selected recipe
    navigation.navigate('RecipeDetails', { recipe });
  };

  return (
    <View>
      <Text>Favorite Recipes</Text>
      <FlatList
        data={favoriteRecipes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToRecipeDetails(item)}>
            <Text>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default FavoriteRecipesScreen;
