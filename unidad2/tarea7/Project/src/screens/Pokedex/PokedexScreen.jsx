import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { THEME } from "../../theme/styles";

const PokedexScreen = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    if (!pokemonName) {
      setError("Please enter a Pokémon name");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      if (!response.ok) {
        throw new Error("Unable to fetch Pokémon data");
      }
      const data = await response.json();
      setPokemonData(data);
    } catch (err) {
      setError(
        "Unable to fetch Pokémon data. Make sure the Pokémon name is correct."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokédex</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa el nombre de un Pokémon"
        onChangeText={(text) => setPokemonName(text.toLowerCase())}
      />
      <Button title="Buscar" onPress={fetchData} />
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={{ color: "red", marginTop: 16 }}>{error}</Text>}
      {pokemonData && (
        <View style={{ marginTop: 16 }}>
          <Text style={styles.title}>Detalles:</Text>
          <View style={styles.pokemonContainer}>
            <Text style={styles.text}>Nombre: {pokemonData.name}</Text>
            <Text style={styles.text}>Peso: {pokemonData.height}</Text>
            <Text style={styles.text}>Altura: {pokemonData.weight}</Text>
            <Text style={styles.text}>Abilidades:</Text>
            <View>
              {pokemonData.abilities.map((ability, index) => (
                <Text style={styles.textAbility} key={index}>
                  {ability.ability.name}
                </Text>
              ))}
            </View>
          </View>
          <View style={styles.pokemonImageContainer}>
            <Image
              source={{ uri: pokemonData.sprites.front_default }}
              style={styles.image}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.RED,
    padding: 16,
  },
  title: {
    fontSize: 20,
    color: THEME.COLORS.WHITE,
  },
  input: {
    backgroundColor: THEME.COLORS.WHITE,
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginTop: 10,
    marginBottom: 16,
  },
  pokemonContainer: {
    padding: 16,
    borderRadius: 10,
    backgroundColor: THEME.COLORS.BLUE.PICTON,
    marginTop: 16,
  },
  text: {
    fontSize: 18,
    color: THEME.COLORS.WHITE,
  },
  textAbility: {
    fontSize: 18,
    color: THEME.COLORS.WHITE,
    marginLeft: 16,
  },
  pokemonImageContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: "80%",
    height: 200,
  },
});

export default PokedexScreen;
