import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import {DrawerDefaultNavigator} from './Navigators/DrawerDefaultNavigator';
import {DrawerCustomNavigator} from './Navigators/DrawerCustomNavigator.js';
import LoginScreen from './Screens/LoginScreen';
import {HomeScreen} from './Screens/HomeScreen';
import {DrawerContentScreen} from "./Screens/DrawerContentScreen";
import ObtenerLetra from './Screens/ObtenerLetra';

const Drawer = createDrawerNavigator();

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {isLoggedIn:false}
}

setLogin(){
    this.setState({isLoggedIn:true});
}

setLogout(){
   this.setState({isLoggedIn:false});
}
  
  render(){
    let screen;
if(!this.state.isLoggedIn)
{
   
 screen = <LoginScreen onLogin={()=> this.setLogin()}/>

  

}else{
  screen =
  <NavigationContainer>
    <Drawer.Navigator 
      initialRouteName="Home"
      headerMode={'none'}
      drawerContent={props => <DrawerContentScreen {...props} onLogout={() => this.setLogout()}/>}
      >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="ObtenerLetra" component={ObtenerLetra} />
      
    </Drawer.Navigator>
  </NavigationContainer>

  
    }
    return screen;

}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
