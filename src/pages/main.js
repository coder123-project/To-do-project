import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Image, TouchableOpacity, AsyncStorage } from 'react-native'

import ReminderList from '../components/ReminderList'

import circleAddIcon from '../../assets/icon-add-circle.png'
import circleRemoveIcon from '../../assets/icon-cancel.png'

export default function Main({ navigation }) {
  const [savedData, setSavedData] = useState([ ])
  
  useEffect(() => {
    async function getDataSaved() {
      try {
        let keys = await AsyncStorage.getAllKeys()
        
        if(keys !== null) {
          setSavedData(keys)
        }
      }catch(error) {
        alert('Error showing reminders')
      }
    }
    
    getDataSaved()
  })

  return(
    <View style={styles.container}>  
      <ReminderList Reminders={savedData} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('AddReminder')}>
          <Image source={circleAddIcon} style={styles.iconButtons}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => AsyncStorage.clear()}>
          <Image source={circleRemoveIcon} style={styles.iconButtons}></Image>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
  },
  iconButtons: {
    marginHorizontal: 50,
    marginVertical: 15,
    height: 60,
    width: 60,
  }  
})