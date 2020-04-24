import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }) => {
  const [colorPalettes, setColorPalettes] = useState();

  const fetchPalettes = useCallback(async () => {
    const response = await fetch(URL);
    if (response.ok) {
      const palettes = await response.json();
      setColorPalettes(palettes);
    }
  }, []);

  useEffect(() => {
    fetchPalettes();
  }, [fetchPalettes]);

  return (
    <FlatList
      styles={styles.list}
      data={colorPalettes}
      keyExtractor={item => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          onPress={() => navigation.push('ColorPalette', item)}
          palette={item}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
});

export default Home;
