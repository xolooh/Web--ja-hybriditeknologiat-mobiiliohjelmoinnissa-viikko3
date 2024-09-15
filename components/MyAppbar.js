import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View } from 'react-native';

const MyAppbar = () => {
    const navigation = useNavigation();
    const route = useRoute();
  
    const isHome = route.name === 'Home';
  
    return (
      <Appbar.Header style={{ backgroundColor: '#6200ee' }}>
        {!isHome && (
          <Appbar.BackAction onPress={() => navigation.goBack()} />
        )}
        {isHome && (
          <Appbar.Action
            icon="arrow-right"
            onPress={() => navigation.navigate('Second')}
          />
        )}
        <Appbar.Content title={route.name} />
      </Appbar.Header>
    );
  };

export default MyAppbar;
