import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { SectionList, ActivityIndicator, Alert, RefreshControl } from 'react-native'
import Swipeable from 'react-native-swipeable-row'
import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

import Visitor from '../components/Visitor/Visitor'
import TitleDate from '../components/TitleDate/TitleDate'
import AddButton from '../components/AddButton/AddButton'
import { visitApi } from '../api'

const VisitorsListScreen = ({ navigation }) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getVisit = () => {
        setIsLoading(true);
        visitApi.get().then(({ data }) => {
            setData(data.data);
            setIsLoading(false)
        })
    };

    useEffect(() => {
        getVisit()
    }, []);

    const removeVisit = (id) => {
        Alert.alert(
            'Видалити візит',
            'Ви дійсно хочете видалити візит?',
            [
                {
                    text: 'Ні',
                    style: 'cancel'
                },
                {
                    text: 'Видалити',
                    onPress: () => {
                        setIsLoading(true);
                        const result = data.map(g => {
                            g.data = g.data.filter(item => item._id !== id);
                            return g
                        });
                        setData(result);
                        visitApi.remove(id).then(() => getVisit())
                    }
                }
            ]
        )
    };

    return (
        <Container>
            <Group>
                {isLoading
                    ? <ActivityIndicator size={'large'} color={'#2A86FF'} />
                    : data && <SectionList
                    sections={data}
                    keyExtractor={(item) => item._id}
                    renderItem={({item}) => <Swipeable rightButtons={[
                        <SwipeViewButtonGray><Feather name="edit-2" size={32} color="white" /></SwipeViewButtonGray>,
                        <SwipeViewButton onPress={() => removeVisit(item._id)}>
                            <AntDesign name="close" size={32} color="white" />
                        </SwipeViewButton>
                    ]}>
                        <Visitor description={item.diagnosis} name={item.visitor.fullName}
                                 date={item.time} active={item.active} navigation={navigation}
                                 phone={item.visitor.phone} id={item.visitor._id}
                        />
                    </Swipeable>}
                    refreshControl={
                        <RefreshControl
                            refreshing={isLoading}
                            onRefresh={getVisit}
                        />
                    }
                    renderSectionHeader={({ section: { title } }) => (
                        <TitleDate date={title} />
                    )}
                />}
            </Group>

            <ButtonBlock>
                <AddButton AddScreen={() => navigation.navigate('AddVisitorScreen')} />
            </ButtonBlock>
        </Container>
    );
};

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

export default VisitorsListScreen
