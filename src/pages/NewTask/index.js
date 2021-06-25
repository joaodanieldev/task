import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import database from '../../config/firebase';
import styles from './style';
import { FontAwesome } from '@expo/vector-icons'

export default function NewTask({ navigation }){

  const [description, setDescription] = useState(null)

  function addTask() {
    database.collection("Tasks").add({
      description: description,
      status: false
    })
    navigation.navigate("Tarefas")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Descrição</Text>
      <TextInput 
        style={styles.input}
        placeholder="Ex: estudar js"
        onChangeText={setDescription}
        value={description}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => {addTask()}}
      >
        <Text>
          <FontAwesome name="save" style={styles.iconButton} />  
        </Text>
      </TouchableOpacity>
    </View>
  )
}