import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <View>
      <Text>Search Recipes</Text>
      <TextInput
        placeholder="Enter keyword or ingredient"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

export default SearchScreen;
