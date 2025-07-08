import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import axios from 'axios';

const Search = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const getPokemon = async (pokemon) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      setPokemonData(response.data);
      setErrorMessage('');
    } catch (error) {
      setPokemonData(null);
      setErrorMessage('Pokemon no encontrado :(');
    }
  };

  const handleSearch = () => {
    getPokemon(searchTerm.toLowerCase());
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
      }}>
      <View
        style={{
          width: '80%',
          height: '85%',
          borderRadius: 30,
          padding: '2%',
          backgroundColor: 'rgb(243, 237, 237)',
        }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 25,
            borderWidth: 2,
            backgroundColor: 'white',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '100%',
              paddingVertical: '1%',
              borderTopLeftRadius: 23,
              borderTopRightRadius: 23,
              borderBottomWidth: 2,
              backgroundColor: '#B40D1D',
              alignItems: 'center',
            }}>
            <TextInput
              style={{
                borderWidth: 2,
                marginTop: '5%',
                borderColor: '#fff',
                backgroundColor: 'transparent',
                color: '#fff',
                borderRadius: 10,
                height: 30,
                paddingLeft: 10,
              }}
              placeholder="Buscar..."
              placeholderTextColor="#fff"
              value={searchTerm}
              onChangeText={(text) => setSearchTerm(text)}
              onSubmitEditing={handleSearch}
            />
            <TouchableOpacity
              style={{
                backgroundColor: '#04B590',
                paddingVertical: 6,
                marginVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 10,
                marginLeft: 10,
                borderBottomWidth: 3,
                borderBottomColor: '#126957',
              }}
              onPress={handleSearch}>
              <Text style={{ color: '#fff', fontWeight: 400 }}>Buscar</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={{ marginTop: '5%', flex: 1, width: '100%' }}>
            {pokemonData ? (
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonData.id}.png`,
                  }}
                  style={{ width: 100, height: 100 }}
                />
                <Text style={{ fontSize: 20, fontWeight: 400, margin: 5 }}>
                  {pokemonData.name.toUpperCase()}
                </Text>
                {pokemonData.abilities.map((ability, index) => (
                  <Text key={index} style={{ fontSize: 14, marginTop: 5 }}>
                    {ability.ability.name}
                  </Text>
                ))}
                <Text
                  style={{
                    paddingHorizontal: 15,
                    paddingVertical: 5,
                    marginTop: 20,
                    borderColor: '#B40D1D',
                    borderWidth: 2,
                    borderRadius: 30,
                    fontSize: 14,
                  }}>
                  {pokemonData.types[0].type.name}
                </Text>
                <Text style={{ margin: 20 }}>No.{pokemonData.id}</Text>
                <View style={{ alignItems: 'start', marginVertical:'5%' }}>
                  <Text style={{ alignSelf: 'center', marginBottom: 5 }}>
                    Hp : {pokemonData.stats[0].base_stat}
                  </Text>
                  <View
                    style={{
                      height: 6,
                      width: `${pokemonData.stats[0].base_stat}%`,
                      backgroundColor: '#04B590',
                      borderRadius: 50,
                      justifyContent: 'start',
                    }}
                  />
                  <Text style={{ alignSelf: 'center', margin: 5 }}>
                    Ataque : {pokemonData.stats[1].base_stat}
                  </Text>
                  <View
                    style={{
                      height: 5,
                      width: `${pokemonData.stats[1].base_stat}%`,
                      backgroundColor: '#B40D1D',
                      borderRadius: 50,
                    }}
                  />
                  <Text style={{ alignSelf: 'center', margin: 5 }}>
                    Defensa : {pokemonData.stats[2].base_stat}
                  </Text>
                  <View
                    style={{
                      height: 5,
                      width: `${pokemonData.stats[2].base_stat}%`,
                      backgroundColor: '#1F83B5',
                      borderRadius: 50,
                    }}
                  />
                  <Text style={{ alignSelf: 'center', margin: 5 }}>
                    Ataque Especial : {pokemonData.stats[3].base_stat}
                  </Text>
                  <View
                    style={{
                      height: 5,
                      width: `${pokemonData.stats[3].base_stat}%`,
                      backgroundColor: '#B5B01F',
                      borderRadius: 50,
                    }}
                  />
                  <Text style={{ alignSelf: 'center', margin: 5 }}>
                    Defensa Especial : {pokemonData.stats[4].base_stat}
                  </Text>
                  <View
                    style={{
                      height: 5,
                      width: `${pokemonData.stats[4].base_stat}%`,
                      backgroundColor: '#024669',
                      borderRadius: 50,
                    }}
                  />
                  <Text style={{ alignSelf: 'center', margin: 5 }}>
                    Velocidad : {pokemonData.stats[5].base_stat}
                  </Text>
                  <View
                    style={{
                      height: 5,
                      width: `${pokemonData.stats[5].base_stat}%`,
                      backgroundColor: '#AB04B5',
                      borderRadius: 50,
                    }}
                  />
                </View>
              </View>
            ) : (
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={require('./pokeball_icon_136305.png')}
                  style={{ width: 100, height: 100 }}
                />
                <Text style={{ fontSize: 20 }}>No pokemons :(</Text>
                <Text>{errorMessage}</Text>
              </View>
            )}
          </ScrollView>
          <View
            style={{
              width: '100%',
              height: '18%',
              paddingVertical: '1%',
              borderBottomLeftRadius: 23,
              borderBottomRightRadius: 23,
              borderTopWidth: 2,
              backgroundColor: '#B40D1D',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              onPress={() => {
                /* Lógica para manejar el botón de inicio */
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('./casa.png')}
                  style={{ width: 24, height: 24, marginRight: 15 }}
                />
                <Text style={{ color: '#ffffff', fontSize: 20 }}>Home</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                () => {
                  navigation.navigate('ListScreen');
                };
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('./lista.png')}
                  style={{ width: 24, height: 24, marginRight: 15 }}
                />
                <Text style={{ color: '#ffffff', fontSize: 20 }}>Lista</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Search;
