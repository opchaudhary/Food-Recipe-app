import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const RecipeDetailsScreen = ({ route }) => {
  const { recipe } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{recipe.label}</Text>

      <Text style={styles.subtitle}>Ingredients:</Text>
      <View style={styles.ingredientsContainer}>
        {recipe.ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.ingredient}>{ingredient}</Text>
        ))}
      </View>

      <Text style={styles.subtitle}>Instructions:</Text>
      <Text style={styles.instructions}>{recipe.instructions}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  ingredientsContainer: {
    marginBottom: 20,
  },
  ingredient: {
    fontSize: 16,
    marginBottom: 5,
  },
  instructions: {
    fontSize: 16,
  },
});

export default RecipeDetailsScreen;
