import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import VisitorsListScreen from '../VisitorsListScreen/VisitorsListScreen'
import VisitorScreen from '../VisitorScreen/VisitorScreen'
import HeaderText from '../../components/HeaderText/HeaderText'

const Stack = createStackNavigator();

const AppNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: '#2A86FF',
                headerStyle: {
                    elevation: .8,
                    shadowOpacity: .8
                }
            }}
            headerMode="screen"
        >
            <Stack.Screen
                name="VisitorsListScreen"
                component={VisitorsListScreen}
                options={{
                    headerTitle: () => <HeaderText text='Пацієнти' />,
                    headerTitleAlign: 'left',
                }}
            />

            <Stack.Screen
                name="VisitorScreen"
                component={VisitorScreen}
                options={{
                    headerTitle: () => <HeaderText text='Картка пацієнта' />,
                    headerBackTitle: 'Назад'
                }}
            />
        </Stack.Navigator>
    );
};

export default AppNavigation