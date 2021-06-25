import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style'
import { FontAwesome } from '@expo/vector-icons'
import database from '../../config/firebase';

export default function Details({ navigation, route }){
 const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
 const idTask = route.params.id

 function editTask(description, id){
   database.collection("Tasks").doc(id).update({
     description: descriptionEdit,
   })
   navigation.navigate("Tarefas")
 }
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Descrição</Text>
      <TextInput 
        style={styles.input}
        placeholder="Ex: estudar js"
        onChangeText={setDescriptionEdit}
        value={descriptionEdit}
      />
      <TouchableOpacity
        style={styles.buttonEditTask}
        onPress={() => {
          editTask(descriptionEdit, idTask)
        }}
      >
        <Text>
          <FontAwesome name="pencil" style={styles.iconButton} />  
        </Text>
      </TouchableOpacity>
    </View>
  )
}