import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, AsyncStorage } from 'react-native'

import trashIcon from '../../assets/icon-trash.png'

export default function Reminder({ title }) {
  async function deleteReminder() {
    try{
      await AsyncStorage.removeItem(title.toString())
    }catch(error) {
      alert(error)
    }
  }

  return(
    <View style={styles.containerReminder}>
      <Text>{title}</Text>

      <TouchableOpacity style={styles.buttonDelete} onPress={async () => deleteReminder()}>
        <Image source={trashIcon} style={styles.iconSize}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  containerReminder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#4A4949',
    borderRadius: 13,
    width: '96%',
    height: 40,
    margin: 5,
    padding: 5
  },
  buttonDelete: {
    position: 'absolute',
    right: 0
  },
  iconSize: {
    height: 35,
    width: 35,
  }  
})