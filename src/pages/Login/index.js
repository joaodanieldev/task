import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform  } from 'react-native';
import styles from './styles'

import firebase from '../../config/firebase';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Login({navigation}){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  const loginFirebase = () => {

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        let user = userCredential.user;
        
        navigation.navigate("Tarefas", { idUser: user.uid })
      })
      .catch((error) => {
        setErrorLogin(true)
        let errorCode = error.code;
        let errorMessage = error.message;
      });

  }

  useEffect(()=> {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
       navigation.navigate("Tarefas", { idUser: user.uid })
      } 
    });
  }, [])

  return(
   <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" :"height"}
    style={styles.container}
   >
     <Text style={styles.title}>Tarefas</Text>
     <TextInput 
      style={styles.input}
      placeholder="Email"
      type="text"
      onChangeText={(text) => setEmail(text)}
      value={email}
     />
    <TextInput 
      style={styles.input}
      secureTextEntry={true}
      placeholder="Senha"
      type="text"
      onChangeText={(text) => setPassword(text)}
      value={password}
    />
    {errorLogin === true
      ?
      <View style={styles.contentAlert}>
        <MaterialCommunityIcons 
          name="alert-circle"
          size={24}
          color="#bdbdbd"
        />
        <Text style={styles.warningAlert}>Inválido e-mail ou senha</Text>
      </View>
      :
      <View />
    }
    {email === "" || password === "" 
      ?
        <TouchableOpacity
          disabled={true}
          style={styles.buttonLogin}
        >
          <Text style={styles.textButtonLogin}>Login</Text>
        </TouchableOpacity>
      :
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={loginFirebase}
        >
          <Text style={styles.textButtonLogin}>Login</Text>
        </TouchableOpacity>
    }

    <Text style={styles.resgitration}>
      Não tem registro? 
    </Text>
    <Text 
      style={styles.linkSubscribe}
      onPress={() => navigation.navigate("NewUser")}
    >
      Clique aqui!
    </Text>
    <View style={{height:100}} />
   </KeyboardAvoidingView>
  )
}