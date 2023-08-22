import React from 'react'
import { StyleSheet, View } from 'react-native'

import InputReminder from '../components/InputReminder'

export default function AddReminder({ navigation }) {
  return(
    <View style={styles.container}>
      <InputReminder navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
  }
})