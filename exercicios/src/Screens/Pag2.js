import React from "react";
import { SafeAreaView, Text, StyleSheet, Image, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../Components/Botao2";
import Categoria1 from "../Components/Categoria1";
import Jogos from "../Components/Jogos"
import games from "../Components/JogosList"
import categoriaList from "../Components/CategoriaLis"


    
export default function Pag2() {
    const navigation = useNavigation()
    
    return (
        
        <SafeAreaView style={{ backgroundColor: '#0E1647', flex: 1 }}>
            <View style={{ flexDirection: "row" }}>
                <Image style={style.Foto}
                    source={require('../../assets/Foto.png')}
                />
                <Text style={style.Txt1}>
                    Óla, João Ygor
                    Hoje é dia de vitória
                </Text>
                <Button
                    labelButton="+" onpress={() => navigation.navigate('Pag3')}
                />
            </View>
            <View>
                <FlatList 
                   horizontal
                   data={categoriaList}
                   renderItem={({ item: g}) => { return <Categoria1 
                   source={g.source}
                   txt={g.txt} 
                   />}}
                   keyExtractor={item => item.id}

                />
            </View>
            <View style={style.partid}>
                <View>
                    <Text style={style.txt3}>Partidas Agendadas</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 16, color: '#ABB1CC' }}> Total 6</Text>
                </View>
            </View >
             <View>
                <FlatList
                        data={games}
                        renderItem={({item}) => { return (

                        <Jogos  
                        source={item.source} 
                        title={item.title}
                        active={item.active} 
                        subtitle={item.subtitle} 
                        date={item.date} 
                        status={item.status} 
                        status1={item.status1}  />)}}
                        keyExtractor={item => item.id}

                />
             </View>
        </SafeAreaView>

    );
} 

const style = StyleSheet.create({
    Foto: {
        flex: 1,
        flexDirection: "row",
        width: 60,
        height: 60,
        resizeMode: 'contain',
        marginTop: 15,
        marginLeft: 10

    },
    Txt1: {
        flex: 1,
        flexDirection: 'row',
        fontSize: 18,
        color: '#FAFAF8',
        textAlign: "left",
        justifyContent: "center",
        marginTop: 15
    },

    Foto2: {
        flex: 1,
        resizeMode: 'contain',
        width: 48,
        height: 48
    },
    txt3: {
        fontSize: 23,
        color: '#FAFAF8',
        marginRight: 80

    },
    partid: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
    }




})
