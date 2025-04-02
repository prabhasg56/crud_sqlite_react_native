import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import { primaryColor as defaultBackgroundColor } from '../../styles/GlobalStyles';

const CustomButton = ({ onPress, label, primaryColor, secondaryColor, loader }) => {
    return (
        <TouchableOpacity style={{ ...styles.buttonContainer, backgroundColor: primaryColor || defaultBackgroundColor }} disabled={loader} onPress={onPress}>
            <CustomText style={styles.btnText}>
                {loader ? <ActivityIndicator color={'#fff'} size={23} /> : label}
            </CustomText>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonContainer: {
        paddingVertical: 10,
        marginHorizontal: 10,
        marginTop: 18,
        borderRadius: 6
    },
    btnText: { textAlign: 'center', color: '#fff', fontWeight: 700, fontSize: 17 }
})