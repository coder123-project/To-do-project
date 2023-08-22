import React from 'react'
import { StyleSheet, ScrollView} from 'react-native'

import Reminder from '../components/Reminder'

export default function ReminderList({ Reminders }) {
  return(
    <ScrollView styles={styles.container}>
      {Reminders.map(item => (
        <Reminder key={item} title={item}/>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    width: '98%',
  }
})