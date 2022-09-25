import React from "react";
import { Text, StyleSheet, Image, View, FlatList} from "react-native";


export default function Jogos({source,
    title,
    active,
    date,
    date1

 })

  
 {
    return ( 
         
         <View style={style.container}>
            <View style={{marginLeft: 7}}>
                <Image source={source}/>
            </View>
            <View style={style.sectiondetails}>
                <View style={[style.sectiontexts, {marginBottom: 15}]}>
                    <Text style={style.title}>{title}</Text>
                    <View >
                    <Image style={{width: 9, height: 9, marginTop:25}} source={require('../../assets/seta.png')} /> 
                    </View> 
                </View>
                <View style={style.sectiontexts}>
                    <View style={{flexDirection:'row'}}>
                            {active? <Text style={style.date}>{date}</Text> : <Text style={style.date}>{date1}</Text>}
                    </View>
                </View>
                <View style={{borderWidth: 1, borderColor: '#1D2766', marginHorizontal: 15, marginTop: 7}}/>
            </View>
         </View>       
         
    );
    }

const style = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        width: '100%',
        padding: 5
        
        
    },
    sectiondetails: {
        flex: 1
    
    },
    sectiontexts: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,

    },
    title: {
        fontSize: 20,
        color: '#DDE3F0'

    },
    date: {
        fontSize: 15,
        color: '#ABB1CC'
    },
    date1: {
        fontSize: 15,
        color: 'green'

    },

})