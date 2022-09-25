import React from "react";
import { Text, StyleSheet, Image, View, FlatList, TouchableOpacity} from "react-native";


export default function Jogos({source,
    title,
    subtitle,
    date,
    status,
    active,
    status1,

 })

  
 {
    return ( 
         
         <View style={style.container}>
            <TouchableOpacity style={{width: '100%', flexDirection: 'row'}}>
            <View style={{marginLeft: 7}}>
                <Image source={source}/>
            </View>
            <View style={style.sectiondetails}>
                <View style={[style.sectiontexts, {marginBottom: 15}]}>
                    <Text style={style.title}>{title}</Text>  
                    <Text style={style.subtitle}>{subtitle}</Text>
                </View>
                <View style={style.sectiontexts}>
                    <View style={{flexDirection:'row'}}>
                        <Image style={style.icon}source={require('../../assets/Frame.png')}/>
                            <Text style={style.date}>{date}</Text>
                    </View>
                    {active?
                        <View style={{flexDirection: 'row'}}>
                            <Image style={style.icon1} source={require('../../assets/VectorV.png')}/> 
                                <Text style={style.status1}>{status}</Text>
                        </View>        
                        :
                        <View style={{flexDirection: 'row'}}>
                            <Image style={style.icon}source={require('../../assets/Vector.png')}/>
                                <Text style={style.status2}>{status1}</Text>
                        </View>}
                    
                </View>
                <View style={{borderWidth: 1, borderColor: '#1D2766', marginHorizontal: 15, marginTop: 7}}/>
            </View>
            </TouchableOpacity>
         </View>       
         
    );
    }

const style = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        width: '100%',
        padding: 5,
        
        
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
    subtitle: {
        fontSize: 15,
        color: '#ABB1CC'

    },
    date: {
        fontSize: 15,
        color: '#DDE3F0'
    },
    status1: {
        fontSize: 15,
        color: 'green'

    },
    status2: {
        fontSize: 15,
        color: '#E51C44'
    },
    icon: {
        width: 15,
        height: 20,
        marginRight: 5
    },
    icon1: {
        width: 20,
        height: 25,
        marginRight: 5,
        

    }

})