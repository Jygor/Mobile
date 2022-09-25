import React from "react";
import { StyleSheet, View, Text, Image} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Data() {
    return (
        <SafeAreaView style={{ marginHorizontal: 25}}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View>
              <Text style={[style.txt,{marginLeft: 8, marginVertical:20}]}>Dia e Mês</Text>
            </View>
            <View>
              <Text style={[style.txt, {marginRight:30}]}>Horário</Text>
              </View>
          </View>
        
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
          <View style={{flexDirection:'row'}}>
            <TextInput 
                      maxLength={2}
                      keyboardType='numeric'
                      style={style.input} /> 
              <View style={{justifyContent: 'center'}}>
                <Text style={{color: '#fff', fontSize: 20, marginLeft: 4}}>/</Text>
              </View>
            <TextInput 
                        maxLength={2}
                        keyboardType='numeric' 
                        style={style.input} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput 
                  maxLength={2}
                  keyboardType='numeric'
                  style={style.input} /> 
              <View style={{justifyContent: 'center'}}>
                <Text style={{color: '#fff', fontSize: 20, marginLeft: 4}}>:</Text>
              </View>
            <TextInput 
                  maxLength={2}
                  keyboardType='numeric'
                  style={style.input} 
            />
          </View>
          </View>
          </SafeAreaView>

    )
}

const style = StyleSheet.create ({ 
  txt: {
    fontSize: 20,
    color: '#DDE3F0',
    marginTop: 10
    
  },
  input:{
    backgroundColor: '#243189',
    width: 48,
    height: 48,
    borderRadius: 8,
    marginLeft: 5,
    fontSize: 15,
    color: '#DDE3F0',
    textAlign: 'center',
  },
  subselect:{
    width: 60,
    height: 55,
    backgroundColor: '#1D2766',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#1D2766'

  }
})