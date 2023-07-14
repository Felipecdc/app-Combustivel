import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Modal, Keyboard } from 'react-native';

import Telaresultado from './src/Pages/Modal';

export default function App() {

  const [alcool, setAcool] = useState(null);
  const [gasolina, setGasolina] = useState(null);

  const [visibleModal, setVisibleModal] = useState(false);

  const [resultadoCalculo, setResultadoCalculo] = useState(null);

  function AbrirModal(){

    if(alcool && gasolina){
      const resultado = parseFloat(alcool) / parseFloat(gasolina);
      setResultadoCalculo(resultado)
      setVisibleModal(true);
    }
  }

  function FecharModal(){
    setAcool(null);
    setGasolina(null);
    setVisibleModal(false);
    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.areaImage}>
        <Image
        source={require('./src/img/logo.png')}
        />
        <Text style={styles.titulo}>Qual melhor opção?</Text>
      </View>

      <View style={styles.areaInput}>
        <Text style={styles.textInput}>Álcool (preço por litro)</Text>
        <TextInput
        value={alcool}
        keyboardType='numeric'
        placeholder='Ex: 4.50'
        onChangeText={(texto) => setAcool(texto)}
        style={styles.input}
        />
        <Text style={styles.textInput}>Gasolina (preço por litro)</Text>
        <TextInput
        value={gasolina}
        keyboardType='numeric'
        placeholder='Ex: 5.67'
        onChangeText={(texto) => setGasolina(texto)}
        style={styles.input}
        />
      </View>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.botao} onPress={AbrirModal}>
          <Text style={styles.textBotao}>Calcular</Text>
        </TouchableOpacity>
      </View>

      <Modal animationType='fade' transparent={false} visible={visibleModal} >
        <Telaresultado resultado={resultadoCalculo} alcool={alcool} gasolina={gasolina} fechar={FecharModal}/>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#101217'
  },
  areaImage:{
    alignItems: 'center',
  },
  titulo:{
    fontSize: 28,
    alignItems: 'center',
    marginTop: 15,
    color: '#fff',
    fontWeight: 'bold'
  },
  areaInput:{
    width: '90%',
  },
  textInput:{
    fontSize: 18,
    marginTop: 20,
    color: '#fff'
  },
  input:{
    fontSize: 18,
    marginTop: 10,
    height: 40,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#d7d7d7'
  },
  btnArea:{
    width: '90%',
    marginTop: 30
  },
  botao:{
    height: 45,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff3344'
  },
  textBotao:{
    fontSize: 22,
    fontWeight: 500,
    color:'#fff'
  }
});
