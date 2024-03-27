// import React from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// const RecipeCard = ({ recipe }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{recipe.label}</Text>
//       <Image source={{ uri: recipe.image }} style={styles.image} />

//       <Text style={styles.subtitle}>Ingredients:</Text>
//       {recipe.ingredientLines.map((ingredient, index) => (
//         <Text key={index} style={styles.ingredient}>{ingredient}</Text>
//       ))}

//       <View style={styles.buttonsContainer}>
//         <TouchableOpacity onPress={() => Linking.openURL(recipe.url)}>
//           <Text style={styles.button}>View Recipe</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => Linking.openURL(recipe.shareAs)}>
//           <Text style={styles.button}>Share Recipe</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     padding: 10,
//     borderRadius: 8,
//     marginBottom: 20,
//     elevation: 2, // for Android shadow
//     shadowColor: '#000', // for iOS shadow
//     shadowOffset: { width: 0, height: 2 }, // for iOS shadow
//     shadowOpacity: 0.25, // for iOS shadow
//     shadowRadius: 3.84, // for iOS shadow
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     marginBottom: 10,
//     borderRadius: 8,
//   },
//   subtitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   ingredient: {
//     fontSize: 14,
//     marginBottom: 5,
//   },
//   buttonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 10,
//   },
//   button: {
//     fontSize: 16,
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });

// export default RecipeCard;
