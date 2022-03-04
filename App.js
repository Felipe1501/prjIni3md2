import {React, useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [papinho1, setPapinho1] = useState();
  const [papinho2, setPapinho2] = useState();
  const [result, setResultado] = useState();

  function somar(){
    setResultado (parseFloat (papinho1) + parseFloat(papinho2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>METEU ESSA?</Text>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://p2.trrsf.com/image/fget/cf/1200/675/middle/images.terra.com/2022/03/01/the-batman-critica-filme-robert-pattinson.jpeg',
        }}
      />
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>QUE PAPINHO 1</Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          value={papinho1}
          placeholder='VALOR 1:'
          onChangeText={(texto)=>setPapinho1(texto)}
      />
    </View>
    <View style={styles.bloco}>
        <Text style={styles.textoBloco}>QUE PAPINHO 2</Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          placeholder='VALOR 2:'
          value={papinho2}
          onChangeText={(texto)=>setPapinho2(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
        style={styles.botao}
        onPress={somar}>
            <Text style={styles.textoBotao}>SOMAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <Text style={styles.texto}>RESULTADO: {result}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: '#7B68EE',
    fontSize: 30
  },
  textoBloco:{
    fontSize:30,
  },
  input:{
    borderColor:'#7B68EE',
    borderWidth:2,
    fontSize:30,
    width:'80%',
    textAlign: 'center'
  },
  bloco:{
    width:'100%',
    alignItems:'center',
    marginTop:30
  },
  botao:{
    backgroundColor:'#7B68EE',
    width:'80%',
    textAlign:'center'
  },
  textoBotao:{
    color:"#fff",
    fontSize:30
  },
  logo:{
    width: 80,
    height: 60
  }
});
