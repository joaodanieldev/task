import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import database from '../../config/firebase';
import { FontAwesome } from '@expo/vector-icons'
import styles from './style';

export default function Task({ navigation }){

  const [task, setTask] = useState([])

  function deleteTask(id){
    database.collection("Tasks").doc(id).delete()
  }

  useEffect(() =>{
    database.collection("Tasks").onSnapshot((query) =>{
      const list = []
      query.forEach((doc) => {
        list.push({...doc.data(), id: doc.id })
      })
      setTask(list)
    });
  }, [])

  return (
    <View style={styles.container}>
      <FlatList 
        showsVerticalScrollIndicator={false}
        data={task}
        renderItem={( {item} ) => {
          return(
            <View style={styles.tasks}>
              <TouchableOpacity 
                style={styles.deleteTask} 
                onPress={() => {
                  deleteTask(item.id)
                }}
              >
              <FontAwesome
                name="star"
                size={23}
                color="#f92e6a"
              >
              </FontAwesome>
              </TouchableOpacity>
              <Text style style={styles.descriptionTask}
                onPress={() => {
                  navigation.navigate("Detalhes",{
                    id: item.id,
                    description: item.description
                  })
                }}
                >
                {item.description}
              </Text>
            </View>
          )
        } }
      />      
      <TouchableOpacity 
        style={styles.buttonNewTask} 
        onPress={() => navigation.navigate('Nova Tarefas')}
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>

    </View>
  )
}