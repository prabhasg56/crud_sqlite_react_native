import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import Header from '../components/Common/Header';

const ScreenWrapper = ({ children, showNav, title,navigation }) => {
    return (
        <>
            <Header open={true} navigation={navigation} showNav={showNav} title={title} />
            <SafeAreaView style={styles.container}>
                {children}
            </SafeAreaView>
        </>
    )
}

export default ScreenWrapper

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})