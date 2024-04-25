import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";

import User from './src/images/user.png'
import Email from './src/images/email.png'
import Senha from './src/images/senha.png'
import Numero from './src/images/celular.png'
import { List, MD3Colors, MD3LightTheme as DefaultTheme } from 'react-native-paper';



// configuração das inputs
const Cadastro = () => {

  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');
  const [matricula, setMatricula] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <>
      <View style={{marginLeft:40}}>
        <Text  style={{color:'#000',fontSize: 20 }}> Torne-se um </Text>
        <Text style={{ color: 'red', fontSize: 30 }}> ASSOCIADO </Text>
      </View>


      <View style={estilo.configCart}>
        {/* input Nome */}
        <View>
          <View style={estilo.input}>
            <View style={estilo.configImg}>
              <Image source={User} style={estilo. imgSpace} />
            </View>
            <TextInput onChangeText={setNome} value={nome} placeholder="Nome Completo"></TextInput>
          </View>
          {/* input Email */}
          <View style={estilo.input}>
            <View style={estilo.configImg}>
              <Image source={Email} style={estilo. imgSpace} />
            </View>

            <TextInput onChangeText={setEmail} value={email} placeholder="Email" ></TextInput>

          </View>
          {/* input Senha */}
          <View style={estilo.input}>
            
            <View style={estilo.configImg}>
              <Image source={Senha} style={estilo. imgSpace} />
            </View>

            <TextInput onChangeText={setSenha} value={senha} placeholder="Senha"></TextInput>


          </View>
          {/* Identificação */}
          <View>
              <List.Section style={{alignItems:'center'}}>
                  <List.Accordion
                    titleStyle={{color:'#000'}}
                    rippleColor={'#FF2222'}
                    style={{backgroundColor:'#fff', width:300, height:60, borderRadius:13}}
                    title="Identificação">
                    <List.Item title="ADIM" />
                    <List.Item title="Funcionario" />
                    <List.Item title="Aluno" />
                    <List.Item title="Responsavel" />
                  </List.Accordion>
              </List.Section>
          </View>

          {/* input Numero */}
          <View style={estilo.input}>
            <View style={estilo.configImg}>
              <Image source={Numero} style={estilo. imgSpace} />
            </View>

            <TextInput onChangeText={setNumero} value={numero} placeholder="Número de telefone"></TextInput>

          </View>

        </View>

        <TouchableOpacity style={estilo.button}>
          <Text style={{ textAlign: 'center', color: 'white', padding: 10, fontSize: 16 }}>Cadastrar</Text>
        </TouchableOpacity>

      </View>

    </>
  );

};

export default function App() {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ECECEC' }}>
      <Cadastro></Cadastro>
    </SafeAreaView>

  );

};


const estilo = StyleSheet.create({
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    margin: 15,
    flexDirection: 'row',
    height:60,
    width: 300,
  },
  configImg: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  configCart: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FF2222',
    borderRadius: 10,
    height: 45,
    width: 300,
  },
  imgSpace:{
    marginLeft:3
  }
})

