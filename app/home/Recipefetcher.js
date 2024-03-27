import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, Button, Image } from 'react-native';
import { ScrollView } from 'react-native-web';

const RecipeFetcher = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [query, setQuery] = useState('walnut');
  const API_ID = '582e62db';
  const API_KEY = '07beda73b72b13f86602bcb115347266';

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const response = await fetch(
          `https://api.edamam.com/api/recipes/v2?type=public&app_id=${API_ID}&app_key=${API_KEY}&q=${query}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setRecipeData(data.hits);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchRecipeData();
  }, [query]);

  const handleSearch = () => {
    fetchRecipeData();
  };

  const RecipeCard = ({ recipe }) => {
    return (
      <View style={styles.cardContainer}>
        <Image source={{ uri: recipe.image }} style={styles.image} />
        <Text style={styles.title}>{recipe.label}</Text>
        <Text style={styles.totalTime}>Total Time: {recipe.totalTime} min</Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.recipeFetcherContainer}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          value={query}
          onChangeText={setQuery}
          placeholder="Enter ingredient..."
        />
        <Button title="Search" onPress={handleSearch} />
      </View>
      {recipeData.length > 0 ? (
        <FlatList
          data={recipeData}
          keyExtractor={(item) => item.recipe.uri}
          renderItem={({ item }) => <RecipeCard recipe={item.recipe} />}
        />
      ) : (
        <Text>Loading recipe data...</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  recipeFetcherContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffe0b2',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    marginRight: 8,
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 12,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  totalTime: {
    fontSize: 14,
    color: '#888',
  },
});

export default RecipeFetcher;
