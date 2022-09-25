import React from "react";
import {createStackNavigator} from "@react-navigation/stack"
import Pag1 from "../Screens/Pag1"
import Pag2 from "../Screens/Pag2"
import Pag3 from "../Screens/Pag3"
import Pag4 from "../Screens/Pag4"

const Stack = createStackNavigator()

const Routes = () => {
    return(
        <Stack.Navigator 
        initialRouteName="Pag1"> 
            <Stack.Screen options={{headerShown: false}} name="Pag1" component={Pag1}/>
            <Stack.Screen options={{headerShown: false}} name="Pag2" component={Pag2} />
            <Stack.Screen options={{headerShown: false}} screenOptions={{headerShown: true }}  name="Pag3" component={Pag3} />
            <Stack.Screen options={{headerShown: false}} name="Pag4" component={Pag4}/>
        </Stack.Navigator>

    ) 

}

export default Routes