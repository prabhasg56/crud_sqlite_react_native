import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native'

import StackRoutes from './StackRoutes';

export const navigationRef = createNavigationContainerRef();

const MainComponents = () => {
  return (
    <NavigationContainer ref={navigationRef}>
     <StackRoutes/>
    </NavigationContainer>
  )
}

export default MainComponents

const styles = StyleSheet.create({})