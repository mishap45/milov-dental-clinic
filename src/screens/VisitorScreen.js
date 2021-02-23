import React from 'react'
import styled from 'styled-components/native'

import { GrayText } from '../components/Visitor/Visitor'
import BlueButton from '../components/BlueButton/BlueButton'
import HistoryCard from '../components/HistoryCard/HistoryCard'
import {View} from "react-native";

const VisitorScreen = ({ route }) => {
    const { fullName, phone } = route.params;

    return (
        <ContainerVisitor>
            <FullName>{fullName}</FullName>
            <GrayText>{phone}</GrayText>

            <Buttons>
                <BlueButton text={'Формула зубів'} bc={'2A86FF'} />
                <View>
                    <BlueButton ml icon phone bc={'84D269'} />
                </View>
            </Buttons>

            <HistoryHeader>Історія відвідувань</HistoryHeader>
            <HistoryCard/>
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

export default VisitorScreen