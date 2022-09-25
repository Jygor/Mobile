import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image } from "react-native";


const Button = ({ labelButton, onpress}) => {
    return  (
      <View>
      <View style={style.header} >
        <TouchableOpacity onPress={onpress}>
          <Image source={require('../../assets/header.png')}/>
        </TouchableOpacity>
       <View>
          <Text style={style.headerTitle}> Agendar partida</Text>
       </View>
      </View>

    </View>
    )
}

export default Button

const style = StyleSheet.create ({ 
  headerTitle: {  
    fontSize: 22,
    color: '#FFF', 
    fontWeight: 'bold',
    marginRight: 70
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    backgroundColor: '#1D2766',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    
  }
        

    },
)