import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { ItemStack, ProfileStack } from './StackRoutes';
import { lightColor, primaryColor } from '../styles/GlobalStyles';

const Tab = createBottomTabNavigator();

const BottomTabRoutes = () => {
    const tabRoutes = [
        {
            name: "Item",
            component: ItemStack,
            label: "Items",
            header: false,
        },
        {
            name: "Profile",
            component: ProfileStack,
            label: "Profile",
            header: false,
        },

    ]
    return (
        <Tab.Navigator
            initialRouteName="Item"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let routeName = route.name;
                    let iconComponent;

                    if (routeName === "Item") {
                        iconName = focused ? 'tasks' : 'tasks';
                        iconComponent = <FontAwesome5 name={iconName} size={size} color={color} />

                    } else if (routeName === "Profile") {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                        iconComponent = <Ionicons name={iconName} size={size} color={color} />
                    } 

                    // You can return any component that you like here!
                    return iconComponent;
                },
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor:'#0c3841',
                tabBarStyle:{
                    backgroundColor: lightColor,
                }
            })}
        >
            {
                tabRoutes?.map((tab) => {
                    return (
                        <Tab.Screen
                            name={tab?.name}
                            component={tab?.component}
                            key={tab?.name}

                            options={{
                                tabBarLabel: tab?.label,
                                headerShown: tab?.header,
                            }}
                        />
                    )
                })
            }

        </Tab.Navigator>
    )
}

export default BottomTabRoutes

const styles = StyleSheet.create({})