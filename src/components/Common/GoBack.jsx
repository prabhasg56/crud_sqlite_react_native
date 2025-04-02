import { StyleSheet, View,Text  } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { lightColor } from '../../styles/GlobalStyles';

const GoBack = ({title}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <AntDesign name="arrowleft" size={20}  onPress={() => navigation.goBack()}  style={styles.titleText}/>
            <Text style={styles.titleText}>{title}</Text>
        </View>
    )
}

export default GoBack;

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor: lightColor,
        gap:5,
        height:60,
        paddingHorizontal:10
    },
    titleText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform:'capitalize'
    }
})