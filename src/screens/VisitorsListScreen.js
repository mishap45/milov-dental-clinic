import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { FlatList, ActivityIndicator, Alert, RefreshControl, Text } from 'react-native'
import Swipeable from 'react-native-swipeable-row'
import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

import AddButton from '../components/AddButton/AddButton'
import { visitorsApi } from '../api'
import Visitor from '../components/Visitor/Visitor'

const VisitsListScreen = ({ navigation }) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getVisitors = () => {
        setIsLoading(true);
        visitorsApi.get().then(({ data }) => {
            setData(data.data);
            setIsLoading(false)
        })
    };

    useEffect(() => {
        getVisitors()
    }, []);

    const removeVisitor = (id) => {
        Alert.alert(
            'Видалити пацієнта',
            'Ви дійсно хочете видалити пацієнта?',
            [
                {
                    text: 'Ні',
                    style: 'cancel'
                },
                {
                    text: 'Видалити',
                    onPress: () => {
                        setIsLoading(true);
                        const result = data.filter(item => item._id !== id);
                        setData(result);
                        visitorsApi.remove(id).then(() => getVisitors())
                    }
                }
            ]
        )
    };

    return (
        <Container>
            <TextScreenParamsView>
                <TextScreenParams onPress={() => navigation.navigate('VisitsListScreen')}>
                    <Text style={{ color: '#2A86FF' }}>Відвідування</Text>
                </TextScreenParams>

                <TextScreenParamsActive>
                    <Text style={{ color: '#fff' }}>Пацієнти</Text>
                </TextScreenParamsActive>
            </TextScreenParamsView>
            <Group>
                {isLoading
                    ? <ActivityIndicator size={'large'} color={'#2A86FF'} />
                    : data && <FlatList
                    data={data}
                    keyExtractor={(item) => item._id}
                    renderItem={({item}) => <Swipeable rightButtons={[
                        <SwipeViewButtonGray onPress={() => navigation.navigate('EditVisitorScreen',
                            {
                                id: item._id,
                                fullName: item.fullName,
                                phone: item.phone
                            })}>
                            <Feather name="edit-2" size={32} color="white" />
                        </SwipeViewButtonGray>,

                        <SwipeViewButton onPress={() => removeVisitor(item._id)}>
                            <AntDesign name="close" size={32} color="white" />
                        </SwipeViewButton>
                    ]}>
                        <Visitor description={item.phone} name={item.fullName}
                                 navigation={navigation}
                                 phone={item.phone} id={item._id}
                        />
                    </Swipeable>}
                    refreshControl={
                        <RefreshControl
                            refreshing={isLoading}
                            onRefresh={getVisitors}
                        />
                    }
                />}
            </Group>

            <ButtonBlock>
                <AddButton AddScreen={() => navigation.navigate('AddVisitorScreen')} />
            </ButtonBlock>
        </Container>
    );
};

const TextScreenParams = styled.TouchableOpacity`
    text-align: center;
    border: 1px solid #2A86FF;
    padding: 5px;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 5px
`;

const TextScreenParamsActive = styled.TouchableOpacity`
    text-align: center;
    border: 1px solid #2A86FF;
    padding: 5px;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 5px;
    background-color: #2A86FF
`;

const TextScreenParamsView = styled.View`
    flex-direction: row;
    justify-content: center
`;

const SwipeViewButton = styled.TouchableOpacity`
    background-color: #F85A5A;
    height: 100%;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center
`;

const SwipeViewButtonGray = styled.TouchableOpacity`
    background-color: #B4C1CB;
    height: 100%;
    width: 75px;
    display: flex;
    justify-content: center;
    align-items: center
`;

const ButtonBlock = styled.View`
    position: absolute;
    bottom: 25px;
    right: 25px
`;

const Group = styled.View`
    padding: 0 20px;
    margin-bottom: 25px;
`;

const Container = styled.View`
    flex: 1;
    margin-top: 25px;
    margin-bottom: 50px
`;

export default VisitsListScreen
