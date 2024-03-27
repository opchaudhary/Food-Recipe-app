import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, AsyncStorage } from 'react-native';

const SearchHistoryScreen = ({ navigation }) => {
  const [searchHistory, setSearchHistory] = useState([]);


  const saveToSearchHistory = async (query) => {
    // Save search query to AsyncStorage
    const updatedHistory = [...searchHistory, query];
    setSearchHistory(updatedHistory);
    await AsyncStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
  };
  
  useEffect(() => {
    // Fetch search history from AsyncStorage or any storage mechanism
    AsyncStorage.getItem('searchHistory').then((data) => {
      if (data) {
        setSearchHistory(JSON.parse(data));
      }
    });
  }, []);

  const navigateToSearchResult = (query) => {
    // Navigate to SearchScreen with the selected query
    navigation.navigate('Search', { initialQuery: query });
  };

  return (
    <View>
      <Text>Search History</Text>
      <FlatList
        data={searchHistory}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToSearchResult(item)}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SearchHistoryScreen;
