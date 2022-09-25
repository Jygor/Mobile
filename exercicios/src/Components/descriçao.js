import React from "react";
import { StyleSheet, View, Text, Image} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Descrição() {


    return (
        <SafeAreaView style={{width: '90%',height: 100 ,backgroundColor: '#FFF', marginVertical: 20, marginHorizontal: 20, borderRadius: 7, backgroundColor:'#1D2766'}}>
            <TextInput 
            maxLength={100}
            multiline={true}
            style={{fontSize: 18, color: '#FFF', margin: 8}} 
                   
            />
        </SafeAreaView>

    )
    } 

const style = StyleSheet.create ({ 
  

})