import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

const ListScreen = ({ navigation }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20'); // Adjust the limit as needed
        setPokemonList(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchPokemonList();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={pokemonList}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Search', { pokemonName: item.name })}
              style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
            >
              <Text style={{ fontSize: 18 }}>{item.name.toUpperCase()}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default ListScreen;
