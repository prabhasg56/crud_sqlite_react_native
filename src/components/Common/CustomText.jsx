import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomText = ({
    onPress,
    style = {},
    color = "gray",
    fontFamily = 'Roboto-Medium',
    fontSize = 14,
    children,
}) => {
    return (
        <Text
            onPress={onPress}
            ellipsizeMode="tail"
            style={[
                styles.text,
                { color, fontFamily, fontSize }, 
                style,
            ]}
        >
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
   
});

export default CustomText;
