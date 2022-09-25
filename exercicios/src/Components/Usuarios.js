import React from "react";
import { SafeAreaView, Text, StyleSheet, Image, View, Button} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";




export default function Categoria1({source, user}) {

    return (
        <View style={style.container}>
          <View style={{marginLeft:40, }} >
            <Image style={{width:60, height:60}} source={source}/>
          </View>
          

        </View>

        
    );
}

const style = StyleSheet.create ({
  container: {
    flexDirection: 'row',
    width: '100%',
    padding: 7
},
       
})