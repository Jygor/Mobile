import React from "react";
import { SafeAreaView, Text, StyleSheet, Image, View, Button} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";




export default function Categoria1({source, txt}) {

    return (
        <SafeAreaView>    
     
                <View style={[style.box, {marginLeft: 10}]}>
                    <View>
                        <Image style={style.icon} source={source} />
                    </View>
                        <Text style={style.txt}>
                            {txt}
                        </Text>
                </View>
          
        </SafeAreaView>

        
    );
}

const style = StyleSheet.create ({
    box:{
        width: 104,
        height: 120,
        backgroundColor: '#1D2766',
        borderRadius: 8,
        margin: 5, 
        marginTop: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
        },
        icon: {
            width: 48,
            height: 48,
            resizeMode: 'contain'
        },
        txt: {
            color: '#FAFAF8',
            fontSize: 17,
            textAlign: 'center',
            marginTop: 10
        }
})