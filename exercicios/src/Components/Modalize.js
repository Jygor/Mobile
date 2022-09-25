import React, {useState, useRef} from "react";
import { View, Text, FlatList } from "react-native";
import { Modalize } from "react-native-modalize";
import Select from "../Components/select"
import Jogos from "../Components/JogosLib"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import games from "../Components/ModalizeList"
export default function Modal() {
  const modalizeRef = useRef(null);
  function onOpen(){
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
  

  return (
    <View style={{flex: 1}}> 
      <View style={{height: 470}}>
      <TouchableOpacity onPress={onOpen}
      value={false}>
        <Select />
      </TouchableOpacity>
        <Modalize
          style={{backgroundColor: '#0E1647'}}
          ref={modalizeRef}
          snapPoint={300}
        >
          <TouchableOpacity>
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
            </TouchableOpacity>
        </Modalize>
        </View>
    </View>

  )
  } 