import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView} from 'react-native';


//import axios from 'axios';
const axios = require("axios");

export default class ObtenerLetra extends Component {

  constructor(props){
    super(props);
    this.state = {flag:false, banda:'', tema:''};
    this.handlerBanda.bind(this);
    this.handlerTema.bind(this);
  }
  

//Handler input banda
handlerBanda(text){
  this.setState({banda: text})
}

//Handler input Tema
handlerTema(text){
  this.setState({tema: text})

  }

 
// Handler de Boton
handlerBtn(){

var banda = this.state.banda;
var tema = this.state.tema;
var parametros=  banda + "/" + tema;


var url= "https://api.lyrics.ovh/v1/"+parametros;

axios.get (url)
.then(response=>{

  
this.setState( () => {return {flag:true ,data: response.data.lyrics, banda: banda , tema: tema }});

})


}

// RENDER

 render(){

   
var resultados;
if(this.state.flag){
resultados = (
<View style={{flex: 1,padding: 20}}>
<ScrollView>
<Text style={styles.titleText}>{this.state.tema}</Text>
<Text style={styles.paragraph}>{this.state.data}</Text>
</ScrollView>
</View>
)

}else{
resultados = <Text></Text> 
}

         return (
          <View
           style={{
            flex: 1,
            padding: 20
          }}
          >

            
              <Text
               style={styles.titleText}
              >Busca la Letra de tu Tema</Text>

              <TextInput  
              placeholder='Banda'
              style={styles.textIn}
              onChangeText ={text => this.handlerBanda(text)} 
             />
         
              <TextInput  
              placeholder='Canción'
              style={styles.textIn}
              onChangeText ={text => this.handlerTema(text)}
              />
              <Button color="#007AFF" onPress={this.handlerBtn.bind(this)} title="Obtener Letra"/> 
           
            {resultados}

          </View>
             );
  
  }

 }







 //Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    textAlign: 'center',
    height: 'auto'
  },
textIn:{

  height: 40, 
  borderColor: 'gray', 
  borderWidth: 1, 
  margin:3 
},

titleText: {
  
  fontSize: 25,
  padding: 20,
  textAlign: 'center',
}

});
