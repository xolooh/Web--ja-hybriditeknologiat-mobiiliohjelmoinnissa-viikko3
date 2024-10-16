import React from 'react';
import { Appbar } from 'react-native-paper';

const CustomAppBar = ({ navigation, back }) => {
  return (
    <Appbar.Header>
      {back && (
        <Appbar.BackAction onPress={navigation.goBack} />
      )}
      <Appbar.Content title={back ? 'Second Screen' : 'Home Screen'} />
      {!back && (
        <Appbar.Action
          icon="arrow-right"
          onPress={() => navigation.navigate('Second')}
        />
      )}
    </Appbar.Header>
  );
};
export default CustomAppBar;