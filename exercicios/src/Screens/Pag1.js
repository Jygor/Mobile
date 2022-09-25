import { StackActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Text, StyleSheet, Image} from "react-native";


import Button from "../Components/Botao";

export default function Pag1() {
    const navigation = useNavigation()

    return (

        <SafeAreaView style={style.Txt1}>

            <Image style={style.Lee}
                source={require('../../assets/Image.png')}
        />
                    <Text style={style.Txt2}>
                        Conecte-se e organize suas jogatinas 
                    </Text>
                    <Text style={style.Txt3}>
                        Crie grupos para jogar seus games favoritos com seus amigos 
                    </Text>
                <Button
                     labelButton="Entrar com Discord" onpress={() => navigation.navigate ('Pag2')}
                />
        </SafeAreaView> 

    );
}

const style = StyleSheet.create ({
    Txt1: {
        flex: 1,
        backgroundColor: '#0E1647',
        alignItems: 'center',
        justifyContent: 'center'
         
    },
    Txt2: {
        fontSize: 35,
        color: "#DDE3F0",
        alignSelf: 'center',
        margin: 10,
        textAlign: 'center'
        
    },
    Txt3: {
        fontSize: 20,
        color: "#DDE3F0",
        textAlign: 'center',
        margin: 10
    },
    Lee: {
        width: 350,
        height: 350,
        resizeMode: 'contain',
        marginTop: 15
    
        
    }



})

