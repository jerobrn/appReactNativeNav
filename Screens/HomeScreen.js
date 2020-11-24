import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class HomeScreen extends Component {

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.Text}>Bienvenido! </Text>
                <Text style={styles.Text}>    Seleccioná del menú la opción buscar, ingresá el nombre de la banda y el tema para obtener la letra completa.
                </Text>
                
                <StatusBar style="auto" />
            </View>
        );
    }
    
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Text:{

        
        fontSize: 25,
        padding: 20,
        textAlign: 'center',
       
    }
  });