import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Text, StyleSheet, Image, View, FlatList} from "react-native"


export default function Pag3() {
    const navigation = useNavigation()


    return (

        <SafeAreaView style={{flex:1, backgroundColor: "#0E1647"}}>
          <View>
            <Image style={{width: '100%'}} source={require('../../assets/image1.png')}>
              
            </Image>
          </View>       

        
        </SafeAreaView> 

    
    );
}

const style = StyleSheet.create ({
    



})