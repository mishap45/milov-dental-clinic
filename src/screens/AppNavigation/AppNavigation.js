import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import VisitsListScreen from '../VisitsListScreen'
import VisitorScreen from '../VisitorScreen'
import AddVisitorScreen from '../AddVisitorScreen'
import AddVisitScreen from '../AddVisitScreen'
import EditVisitScreen from '../EditVisitScreen'
import EditVisitorScreen from '../EditVisitorScreen'
import VisitorsListScreen from '../VisitorsListScreen'
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
                name="VisitsListScreen"
                component={VisitsListScreen}
                options={{
                    headerTitle: () => <HeaderText text='Відвідування' />,
                    headerTitleAlign: 'left'
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

            <Stack.Screen
                name="EditVisitScreen"
                component={EditVisitScreen}
                options={{
                    headerTitle: () => <HeaderText text='Редагувати візит' />,
                    headerBackTitle: 'Назад'
                }}
            />

            <Stack.Screen
                name="EditVisitorScreen"
                component={EditVisitorScreen}
                options={{
                    headerTitle: () => <HeaderText text='Редагувати пацієнта' />,
                    headerBackTitle: 'Назад'
                }}
            />

            <Stack.Screen
                name="VisitorsListScreen"
                component={VisitorsListScreen}
                options={{
                    headerTitle: () => <HeaderText text='Пацієнти' />,
                    headerTitleAlign: 'left',
                    headerLeft: null
                }}
            />
        </Stack.Navigator>
    );
};

export default AppNavigation