import React, { useState,  useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Modal } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation(); 

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          name="arrow-forward"
          size={24}
           color="black"
          onPress={() => navigation.navigate('Second')}
        />
      ),
    });
  }, [navigation]);

  return (
    
    <View style={styles.container}>
      
      {!modalVisible && (
        <Pressable
          style={styles.textButton}
          onPress={() => setModalVisible(true)} 
        >
          <Text>HomeScreen</Text>
          <Text>Show SecondScreen</Text>
        </Pressable>
      )}
      
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContent}>
          <Text>This is modal...</Text>
          <Pressable
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.buttonText}>Close</Text>
          </Pressable>
          
        </View>
      </Modal>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    borderRadius: 5,
  },

});