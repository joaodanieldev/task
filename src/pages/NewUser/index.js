import React, {useEffect, useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import firebase from '../../config/firebase';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles'

export default function Login({navigation}){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorRegister, setErrorRegister] = useState("");

  const registerFirebase = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {

        let user = userCredential.user;
        navigation.navigate("Tarefas", { idUser: user.uid })
   
      })
      .catch((error) => {
        setErrorRegister(true)
        let errorCode = error.code;
        let errorMessage = error.message;
        // ..
      });

  };


  return(
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" :"height"}
      style={styles.container}
    >
      <Text style={styles.title}>Criar a conta de Tarefa</Text>
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
      {errorRegister === true
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
            style={styles.buttonRegister}
          >
            <Text style={styles.textButtonRegister}>Registrar</Text>
          </TouchableOpacity>
        :
          <TouchableOpacity
            style={styles.buttonRegister}
            onPress={registerFirebase}
          >
            <Text style={styles.textButtonRegister}>Registrar</Text>
          </TouchableOpacity>
      }

      <Text style={styles.login}>
        Já tem cadastro ? 
      </Text>
      <Text 
        style={styles.linkLogin}
        onPress={() => navigation.navigate("Login")}
      >
        Clique aqui!
      </Text>
      <View style={{height:100}} />

    </KeyboardAvoidingView>
    
  )
}