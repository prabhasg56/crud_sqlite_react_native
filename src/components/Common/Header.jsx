import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View, Dimensions, Platform } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { lightColor } from '../../styles/GlobalStyles';

const { width, height } = Dimensions.get('window');

const Header = ({ showNav = false, title = '', backgroundColor = lightColor }) => {
    const navigation = useNavigation();

    const toggleDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

    return (
        <>
            {/* Status Bar */}
            <StatusBar backgroundColor={backgroundColor} barStyle="light-content" />

            {/* Header Container */}
            <View style={[styles.container, { backgroundColor, height: height * 0.06 }]}>
                {/* Left: Menu Icon */}
                {showNav ? (
                    <TouchableOpacity style={styles.menuIcon} onPress={toggleDrawer}>
                        <Feather name="menu" size={width * 0.07} color="white" />
                    </TouchableOpacity>
                ) : (
                    <View style={{ flex: 1 }} />
                )}

                {/* Center: Title */}
                <View style={styles.titleContainer}>
                    <Text style={[styles.title, { fontSize: width * 0.05 }]}>{title}</Text>
                </View>

                {/* Right: Empty for Spacing */}
                <View style={{ flex: 1 }} />
            </View>
        </>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: width * 0.04, // Dynamic padding
        paddingTop: Platform.OS === 'ios' ? height * 0.03 : 0, // Extra space for iOS
    },
    menuIcon: {
        flex: 1,
    },
    titleContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
