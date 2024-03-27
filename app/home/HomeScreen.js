import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-web";
import { useNavigation } from '@react-navigation/native';

// Home component
function HomeScreen() {
  const navigation = useNavigation();

  return (
    // Main container for the Home component
    <View style={styles.container}>
      <ScrollView style={styles.mainContainer}>
        {/* Title section */}
        <View style={styles.mainTitle}>
          <Text style={styles.header}>Welcome to Foodie's Corner</Text>
          <Text style={styles.description}>
            Explore delicious recipes, save your favorites, and keep track of your search history.
          </Text>
        </View>

        {/* Image section */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../img/images.jpeg')}
            style={styles.image}
          />
        </View>

        {/* Paragraph section */}
        <View style={styles.paragraphContainer}>
          <Text style={styles.paragraphText}>

            "Welcome to Food-Recipe-App   your ultimate destination for culinary inspiration! Whether you're a seasoned chef or a cooking novice, our app provides a treasure trove of mouthwatering recipes to suit every taste and occasion. Explore a vast collection of delicious dishes from around the world, discover new ingredients, and master culinary techniques with ease. With intuitive search functionality, personalized recommendations, and the ability to save your favorite recipes for later, Food-Recipe-App   is your go-to companion for all things food. Start your gastronomic adventure today!"

          </Text>
        </View>
      </ScrollView>

      {/* Footer section */}
      <View style={styles.footer}>

        <View style={styles.content}>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Explore Recipes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ContactUs')}>
              <Text style={styles.buttonText}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Feedback')}>
              <Text style={styles.buttonText}>Feedback</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

// Styles for the Home component
const styles = StyleSheet.create({
  container: {
   flex: 1,
    flexDirection: 'inherit',
    backgroundColor: '#fcebd5', // Background color
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#fcebd5",
    padding: 50,
  },
  mainTitle: {
    marginBottom: 16,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: '#160a06', // Font color
  },
  imageContainer: {
    marginBottom: 16,
    alignItems: "center",
  },
  image: {
    width: '70%',
    height: 300,
    borderRadius: 8,
  },
  paragraphContainer: {
    marginBottom: 26,
    backgroundColor: "#fcebd5", // Background color
    paddingHorizontal: 26,
  },
  paragraphText: {
    fontSize: 16,
    color: "#160a06", // Font color
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fcebd5', // Background color
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  menuIcon: {
    padding: 20,
  },
  menuText: {
    fontSize: 18,
    color: '#160a06', // Font color
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#160a06', // Font color
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#160a06', // Font color
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#160a06', // Button background color
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fcebd5', // Button text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
