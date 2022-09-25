import { useNavigation } from "@react-navigation/native";
import React, { useState, useRef } from "react";
import { SafeAreaView, Text, StyleSheet, Image, View, FlatList, TouchableOpacity} from "react-native"
import Button from "../Components/Botao3";
import Categoria2 from "../Components/Categoria2";
import categoriaList from "../Components/CategoriaLis";
import Data from "../Components/inputData"
import Select from "../Components/select"
import Descrição from "../Components/descriçao";
import Header1 from "../Components/Header1";
import jogosList from "../Components/JogosList";
import games from "../Components/ModalizeList";
import { Modalize } from "react-native-modalize";
import Jogos from "../Components/JogosLib"



export default function Pag3() {
    
    const navigation = useNavigation()
    const modalizeRef = useRef();
  const onOpen = () =>{
    modalizeRef.current?.open();
  }
  const [pressed, setPressed] = useState(false)
    const click = (item) => {
        jogosList.map(jogos => {
            if(jogos.id === item.id){
            setPressed(!pressed)
            item.id = !pressed
            }
        })
    }
    
    const [activeCard, setActiveCard] = useState(false)
    const handleActiveCLick = (item) => { 
           categoriaList.map(categoria => {
            item.name
            if(categoria.id === item.id || item.txt != item.name){
            setActiveCard(!activeCard)
            item.active = !activeCard
            }
            console.log("qualquer merda",categoria.id, item.id, item.txt, item.name)
           })

    }  
    //useEffect(() =>{
    //setActiveCard(false)},[activeCard === true])
    const handleActiveNoCLick = (item) => { 
        categoriaList.map(categoria => {
         if(categoria.id === item.id){
         setActiveCard(!activeCard)
         item.active = !activeCard
         }
        })

    }  
        console.log(activeCard)
      return(
        <>
             <SafeAreaView screenOptions={{headerShown: true }} style={style.container}>
            <Header1 onpress={() => navigation.goBack('Pag1')} />
            
            <View style={{ marginTop: 23, marginLeft: 8}}>
                <Text style={style.txt}>Categoria</Text>
            </View>
            
             <View >
                <FlatList 
                  
                   horizontal
                   data={categoriaList}
                   keyExtractor={item => item.id}
                   renderItem={({ item }) => { 
                    item.active
                    item.name = item.txt
                    return (
                        <>
                        {item.active && <Categoria2
                        onpress={() => handleActiveNoCLick(item)}
                        change={style.botao1}
                        source={item.source}
                        txt={item.txt} />} 
                        {!item.active && <Categoria2
                        onpress={() => handleActiveCLick(item)}
                        change={style.botao}
                        source={item.source}
                        txt={item.txt} />}
                        </> )}}
                /> 
                <Select onpress={onOpen} />
            
               
            </View>
                <Data />
                
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Text style={{fontSize: 19, color: '#DDE3F0', marginTop: 15}}>Descrição</Text>
                    <Text style={{fontSize: 16, color: '#ABB1CC', marginTop: 15}}> Max 100 caracteres </Text>
                </View>
                <Descrição />

                <Button
                     labelButton="Agendar" onpress={() => navigation.navigate('Pag4')}
                />
                
                
                
        </SafeAreaView> 
        
        <Modalize
                    style={{backgroundColor: '#0E1647', height:'100%'}}
                    ref={modalizeRef}
                    snapPoint={300}
                    adjustToContentHeight
                >
          <View style={{height:'100%', width:'100%'}}>
                        <FlatList
                        style={{backgroundColor: '#0E1647'}}
                        data={games}
                        renderItem={({item}) => { return (
                        <Jogos 
                        onPress={() => click(item)} 
                        source={item.source} 
                        title={item.title}
                        date={item.date}
                        date1={item.date1}
                        active={item.active} />)}}
                        keyExtractor={item => item.id}
                        />
                
            </View>
        </Modalize>
     
        
    
        </>
    );
}



const style = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#0E1647'
    },
    txt:{
        color: '#DDE3F0',
        fontSize: 23
    },
    botao: {
        width: 8,
        height: 8,
        backgroundColor: '#0E1647',
        marginBottom: 10,
        marginLeft: '65%',
        borderWidth:1,
        borderColor: '#0E1647', 
        borderRadius: 2
    },
      botao1: {
        width: 8,
        height: 8,
        backgroundColor: 'red',
        marginBottom: 10,
        marginLeft: '65%',
        borderWidth:1,
        borderColor: 'red', 
        borderRadius: 2
    }



})