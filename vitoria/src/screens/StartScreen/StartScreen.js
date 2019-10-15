import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { Input } from 'react-native-elements';
import logo from "../../../assets/icone.png";

import theme from '../../styles/theme';

export default function StartScreen({ navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={{width:150, height:150}}/>
      </View>

      <Input
        inputStyle={styles.txtInput}
        containerStyle={styles.input}
        placeholder='Login'
      />
      <Input
        inputStyle={styles.txtInput}
        containerStyle={styles.input}
        placeholder='Senha'
      />
      <Ripple
        style={styles.button}
        rippleContainerBorderRadius={10}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.txtButton}>LOGAR</Text>
      </Ripple>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
  button: {
    marginVertical: 25,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: theme.outherColor
  },
  txtButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.secondaryColor
  },
  input: {
    width: '80%',
    marginVertical: 15
  },
  txtInput: {
    color: theme.secondaryColor
  }
});



