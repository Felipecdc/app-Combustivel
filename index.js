import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Telaresultado({ resultado, fechar, alcool, gasolina}){

    function calculo(resultado){
        if(resultado <= 0.7){
            return <Text>Compensa usar Álcool</Text>
        }else{
            return <Text>Compensa usar Gasolina</Text>
        }
    }

    return(
        <View style={styles.ViewModal}>
            <View style={styles.modal}>
                <Image
                source={require('../../img/gas.png')}
                />
                <Text style={styles.titulo}>{calculo(resultado)}</Text>
            </View>

            <View style={styles.precos}>
                <Text style={styles.titulopreco}>Com os preços:</Text>
                <Text style={styles.combustivel}>Ácool: {alcool}</Text>
                <Text style={styles.combustivel}>Gasolina: {gasolina}</Text>
            </View>

            <View style={styles.areBtn}>
                <TouchableOpacity style={styles.botao} onPress={fechar}>
                    <Text style={styles.textBotao}>Calcular novamente</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    ViewModal:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#101217'
    },
    modal:{
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo:{
        color: 'green',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 15
    },
    precos:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulopreco:{
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    combustivel:{
        color:'#fff',
        fontSize: 17,
        fontWeight: 300,
        marginTop: 5,
    },
    areBtn:{
        marginTop: 20,
    },
    botao:{
        width: 250,
        borderColor: '#ff0000',
        borderWidth: 1,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBotao:{
        fontSize: 15,
        padding: 10,
        color: 'red'
    }
})