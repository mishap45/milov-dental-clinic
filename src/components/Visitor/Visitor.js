import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'

const Visitor = ({ name, description, date, active, navigation, phone }) => {

    const GroupDate = styled.Text`
    font-weight: 600;
    color: ${active ? '#fff' : '#4294ff'};
    font-size: 14px;
    width: 70px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    background: ${active ? '#2A86FF' : '#e9f5ff'};
`;

    const onVisitorScreen = () => navigation.navigate('VisitorScreen',
        { fullName: name, phone: phone });

    return (
        <GroupItem onPress={onVisitorScreen}>
            <Avatar source={require('../../assets/teeth.png')} />

            <View style={{ flex: 1 }}>
                <FullName>{ name }</FullName>
                <GrayText>{ description }</GrayText>
            </View>

            <GroupDateBlock>
                <GroupDate active={active} >{ date }</GroupDate>
            </GroupDateBlock>
        </GroupItem>
    );
};

const GroupDateBlock = styled.View`
    border-radius: 18px;
    overflow: hidden
`;

export const GrayText = styled.Text`
    color: #8B979F;
    font-size: 16px
`;

const FullName = styled.Text`
    font-weight: 600;
    font-size: 16px;
`;

const Avatar = styled.Image`
    border-radius: 50px;
    width: 40px;
    height: 40px;
    margin-right: 15px
`;

const GroupItem = styled.TouchableOpacity`
    padding: 20px 0;
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: #f3f3f3;
`;

export default Visitor
