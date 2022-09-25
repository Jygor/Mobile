import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image } from "react-native";


const Button = ({ labelButton, onpress}) => {
    return  (
        <TouchableOpacity style={style.botao1} onPress={onpress}>
                <Text style={style.fontB}>
                        {labelButton}
                </Text>
        </TouchableOpacity>
    )
}

export default Button

const style = StyleSheet.create ({ 
    botao1: {
        flexDirection: 'row',
        marginLeft: 7,
        width: '90%',
        backgroundColor: '#FF0000',
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginVertical: 15,
        marginLeft: 20
    },
    fontB: {
        flex: 2,
        fontSize: 20,
        color: '#DDE3F0',
        textAlign: 'center'

    }

})