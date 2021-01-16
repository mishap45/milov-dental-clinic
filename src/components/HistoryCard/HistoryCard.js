import React from 'react'
import styled from 'styled-components/native'
import { FontAwesome5 } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { Text } from 'react-native'

const HistoryCard = () => {
    return (
        <HistoryBlock>
            <HistoryCardRow>
                <Ionicons name="md-medical" size={16} color="#A3A3A3" />
                <HistoryCardLabel>Зуб: <Text style={{ fontWeight: '600' }}>12</Text></HistoryCardLabel>
            </HistoryCardRow>

            <HistoryCardRow>
                <FontAwesome5 name="clipboard-list" size={16} color="#A3A3A3" />
                <HistoryCardLabel>Діагноз: <Text style={{ fontWeight: '600' }}>fucking</Text></HistoryCardLabel>
            </HistoryCardRow>

            <HistoryCardRow style={{ justifyContent: 'space-between', marginTop: 15 }}>
                <GroupDateBlock>
                    <GroupDate>11.10.2020 - 15:30</GroupDate>
                </GroupDateBlock>

                <GroupDateBlock>
                    <GreenGroupDate>100$</GreenGroupDate>
                </GroupDateBlock>
            </HistoryCardRow>
        </HistoryBlock>
    )
};

const HistoryCardRow = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 3.5px
    margin-bottom: 3.5px
`;

const HistoryCardLabel = styled.Text`
    font-size: 16px;
    margin-left: 10px
`;

const HistoryBlock = styled.View`
    shadow-color: gray;
    elevation: .5;
    shadow-opacity: .2;
    shadow-radius: 10px;
    padding: 20px 25px;
    border-radius: 10px;
    background: #f1f1f1 
`;

const GroupDate = styled.Text`
    font-weight: 600;
    color: #fff;
    font-size: 14px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    background: #2A86FF;
    width: 150px
`;

const GreenGroupDate = styled.Text`
    font-weight: 600;
    color: #318842;
    font-size: 14px;
    width: 70px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    background: rgba(132, 210, 105, .21)
`;

const GroupDateBlock = styled.View`
    border-radius: 18px;
    overflow: hidden
`;

export default HistoryCard