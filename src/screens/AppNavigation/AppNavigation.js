import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import VisitorsListScreen from '../VisitorsListScreen'
import VisitorScreen from '../VisitorScreen'
import AddVisitorScreen from '../AddVisitorScreen'
import AddVisitScreen from '../AddVisitScreen'
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
                    headerTitle: () => <HeaderText text='Відвідування' />,
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

            <Stack.Screen
                name="AddVisitorScreen"
                component={AddVisitorScreen}
                options={{
                    headerTitle: () => <HeaderText text='Додати пацієнта' />,
                    headerBackTitle: 'Назад'
                }}
            />

            <Stack.Screen
                name="AddVisitScreen"
                component={AddVisitScreen}
                options={{
                    headerTitle: () => <HeaderText text='Додати візит' />,
                    headerBackTitle: 'Назад'
                }}
            />
        </Stack.Navigator>
    );
};

export default AppNavigation