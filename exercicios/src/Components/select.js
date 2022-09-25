import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";
import Button from "react";
import Modalize from 'react-native-modalize'

export default function Data({onpress}) {
    return (
        <TouchableOpacity onPress={onpress}
        style={{ height: 85, marginHorizontal: 25}} >
            <View style={style.select}>
              <Text style={style.txt2}>Selecione um servidor</Text>
              <Image style={{width:8, height: 10, marginLeft:40}}source={require('../../assets/seta.png')} />
            </View>     
        </TouchableOpacity>

    )
}

const style = StyleSheet.create ({ 
  select: {
    flex: 1,
    backgroundColor: '#0E1647',
    borderWidth: 2,
    borderColor: '#1D2766',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    
  },
  txt2: {
    fontSize: 17,
    color: '#DDE3F0',
    marginLeft: 70

  }

})