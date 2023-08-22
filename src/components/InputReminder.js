import React, { useState } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity, Image, AsyncStorage } from 'react-native'

import iconCheckmark from '../../assets/icon-checkmark.png'
import iconCancel from '../../assets/icon-cancel.png'

export default function InputReminder({ navigation }) {
  const [inputTextValue, setInputTextValue] = useState('');

  async function saveData(data) {
    if(data === '') {
      return
    }else {
      try{
        await AsyncStorage.setItem(data, data)
      }catch(error) {
        alert('Error recording reminder')
      }
    }
  }

  return(
    <View style={styles.container}>
      <TextInput 
        style={styles.textReminder} 
        onChangeText={text => setInputTextValue(text)}
        value={inputTextValue} 
      />

      <View style={styles.containerButtons}>
        <TouchableOpacity onPress={() => {
          saveData(inputTextValue.toString())
          navigation.navigate('Main')
        }}>
          <Image source={iconCheckmark} style={styles.iconButton}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Image source={iconCancel} style={styles.iconButton}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
    width: '100%'
  },
  textReminder: {
    width: '96%',
    height: 100,
    borderColor: '#707070',
    borderWidth: 3,
    borderRadius: 13,
    fontSize: 25, 
    padding: 10,
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: 120,
    padding: 10
  },
  iconButton: {
    margin: 30,
    height: 80,
    width: 80
  }
})