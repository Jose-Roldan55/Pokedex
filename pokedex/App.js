import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './Search';
import ListScreen from './ListScreen'

const HomeScreen = ({ navigation }) => {

  return (
    <ImageBackground source={require('./pokemonbackground.png')} style={styles.pokedexDisplay}>

      <View style={styles.container}>
        <View style={styles.pokedex}>

          <ImageBackground source={require('./background.png')} style={styles.pokedexDisplay2} imageStyle={{
            borderRadius: 30, borderWidth: 2.4, borderColor: 'rgb(58, 58, 58)',
            backgroundColor: 'rgb(243, 237, 237)',
          }}>

            <Text style={styles.title}>Pokédex</Text>
            <TouchableOpacity onPress={() => { navigation.navigate('Search') }} style={styles.button}>
              <Text style={{ color: '#626262' }}>Comenzar</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>
    </ImageBackground>
  );
};

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical:20,
  },
  pokedex: {
    width: 350,
    height: '95%',
    borderRadius: 30,
    borderWidth: 2,
    alignItems: 'end',
    justifyContent: 'end',
    borderColor: 'rgb(58, 58, 58)',
    backgroundColor: 'rgb(243, 237, 237)',
    paddingVertical:25,
  },
  pokedexDisplay: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pokedexDisplay2: {
    width: '95%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:30,
  },
  title: {
    color: '#fff',
    borderWidth: 2,
    borderColor: '#fff',
    height: 35,
    fontWeight: 'bold',
    padding: 10,
    alignContent: 'center',
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  button: {
    backgroundColor: '#e7e7e7',
    borderBottomWidth: 5,
    borderBottomColor: '#b7b7b7',
    color: '#626262',
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 30,
  },
});

export default App;
