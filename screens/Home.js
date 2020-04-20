import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.push('ColorPalette')}>
        <Text>Solarized</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
