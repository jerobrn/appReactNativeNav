/*
import React, {Component} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import {HomeScreen} from "../Screens/HomeScreen";
import ObtenerLetra from "../Screens/ObtenerLetra";
import {DrawerContentScreen} from "../Screens/DrawerContentScreen";
console.log(HomeScreen, ObtenerLetra);

const Drawer = createDrawerNavigator();

export class DrawerCustomNavigator extends Component {

    render(){
        return(
            <Drawer.Navigator 
                initialRouteName="Home"
                headerMode={'none'}
                drawerContent={props => <DrawerContentScreen {...props}/>}
                onLogout={() => this.setLogout()}
            >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="ObtenerLetra" component={ObtenerLetra} />
            </Drawer.Navigator>
        );
    }
    
}
*/
