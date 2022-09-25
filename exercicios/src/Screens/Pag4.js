import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Text, StyleSheet, Image, View, FlatList} from "react-native"
import Button from "../Components/Botao";
import Header from "../Components/Header2"
import Ultima from "../Components/ultima"
import Usuarios from "../Components/Usuarios"
import usuariosList from "../Components/UsuariosList";
import Categoria1 from "../Components/Categoria1";
import categoriaList from "../Components/CategoriaLis";



export default function Pag3() {
    const navigation = useNavigation()


    return (

        <SafeAreaView style={{flex:1, backgroundColor: "#0E1647"}}>
            <Header onpress={() => navigation.goBack('Pag1')}/>
            <Ultima />
            
            <View style={{ flexDirection: 'row', justifyContent:'space-around', marginBottom: 55}}>
                <Text style={style.title}>Jogadores</Text>
                <Text style={style.subtitle}>total 3</Text>
            </View> 
            <View>
                <FlatList
                        data={usuariosList}
                        renderItem={({ item: g}) => { return <Usuarios
                        source={g.source} 
                        title={g.title}
                        active={g.active} 
                        subtitle={g.subtitle} 
                        date={g.date} 
                        status={g.status} 
                        status1={g.status1}  />}}
                        keyExtractor={item => item.id}

                    />
            </View>  
            <Button 
                     labelButton="Entrar na Partida" onpress={() => navigation.goBack('Pag1')}
            />
        </SafeAreaView> 

    
    );
}

const style = StyleSheet.create ({
    title:{
        fontSize: 22,
        color: '#FFF',
      },
      subtitle: {
        fontSize: 18,
        color: '#FFF',
      }
        



})