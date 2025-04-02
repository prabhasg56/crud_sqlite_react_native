import { StyleSheet, View, Text, StatusBar, SafeAreaView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { lightColor } from '../../styles/GlobalStyles';

const GoBack = ({ title }) => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <AntDesign name="arrowleft" size={20} onPress={() => navigation.goBack()} style={styles.titleText} />
                <Text style={styles.titleText}>{title}</Text>
            </View>
        </SafeAreaView>
    );
}

export default GoBack;

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: lightColor,
        paddingTop: StatusBar.currentHeight || 0, // Ensures status bar area is reserved
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: lightColor,
        gap: 5,
        height: 40,
        paddingHorizontal: 10,
        paddingBottom: 10
    },
    titleText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    }
});
