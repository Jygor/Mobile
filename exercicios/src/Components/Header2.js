import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image } from "react-native";


const Button = ({ labelButton, onpress}) => {
    return  (
      <View>
      <View style={style.header} >
        <TouchableOpacity onPress={onpress}>
          <Image style={style.image} source={require('../../assets/header.png')}/>
        </TouchableOpacity>
       <View>
          <Text style={style.headerTitle}> Agendar partida</Text>
       </View>
       <TouchableOpacity onPress={onpress}>
          <Image style={style.image} source={require('../../assets/blutt.png')}/>
        </TouchableOpacity>
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

  },
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    backgroundColor: '#1D2766',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  }, 
  image: {
    width: 24,
    height: 24,
    marginHorizontal: 20
  }
        

    },
)