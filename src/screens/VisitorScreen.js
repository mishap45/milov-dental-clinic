import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { View, FlatList, Dimensions, ActivityIndicator, Linking } from 'react-native'

import { GrayText } from '../components/Visitor/Visitor'
import BlueButton from '../components/BlueButton/BlueButton'
import HistoryCard from '../components/HistoryCard/HistoryCard'
import { visitorsApi } from '../api'
import AddButton from '../components/AddButton/AddButton'

const VisitorScreen = ({ route, navigation }) => {
    const { fullName, phone, id } = route.params;
    const [visits, setVisits] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        visitorsApi.show(id).then(({ data }) => {
            setVisits(data.data.visits);
            setIsLoading(false)
        })
    }, []);

    return (
        <ContainerVisitor>
            <FullName>{fullName}</FullName>
            <GrayText>{phone}</GrayText>

            <Buttons>
                <BlueButton text={'Формула зубів'} bc={'2A86FF'} />
                <View>
                    <BlueButton ml icon phone bc={'84D269'} onPress={() => Linking.openURL(`tel:${phone}`)} />
                </View>
            </Buttons>

            <HistoryHeader>Історія відвідувань</HistoryHeader>
            <FlatList
                data={visits}
                renderItem={({ item }) => (
                    isLoading
                        ? <ActivityIndicator size={'large'} color={'#2A86FF'} />
                        : <HistoryCard dentNumber={item.dentNumber} date={item.date}
                                 price={item.price}
                                 diagnosis={item.diagnosis} time={item.time}/>
                )}
                keyExtractor={item => item._id}
                style={{ height: Dimensions.get('window').height, paddingTop: 10 }}
            />

            <ButtonBlock>
                <AddButton AddScreen={() => navigation.navigate('AddVisitScreen')} />
            </ButtonBlock>
        </ContainerVisitor>
    )
};

const HistoryHeader = styled.Text`
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    margin-top: 40px;
    margin-bottom: 25px
`;

const Buttons = styled.View`
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-between
`;

const FullName = styled.Text`
    font-size: 30px;
    font-weight: 800;
    line-height: 30px;
    margin-bottom: 3px
`;

const ContainerVisitor = styled.View`
    padding: 25px
`;

const ButtonBlock = styled.View`
    position: absolute;
    right: 25px;
    bottom: 42%
`;

export default VisitorScreen