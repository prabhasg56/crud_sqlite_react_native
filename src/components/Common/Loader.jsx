import { ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'
import { primaryColor } from '../../styles/GlobalStyles'

const Loader = (size, color) => {
    return (
        <ActivityIndicator size={size || 15} color={color || primaryColor} />
    )
}

export default Loader

const styles = StyleSheet.create({})