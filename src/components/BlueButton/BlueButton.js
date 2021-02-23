import React from 'react'
import styled from 'styled-components/native'
import { Foundation } from '@expo/vector-icons'

const BlueButton = ({ text, ml, icon, phone, bc, onPress }) => {

    const BlueButtonWrapper = styled.TouchableOpacity`
    border-radius: 30px;
    background: #${bc};
    height: 45px;
    margin-left: ${ml ? '10px' : '0'};   
    flex: 1;
`;

    return <BlueButtonWrapper onPress={onPress}>
        <ButtonText>{
            icon
                ? phone && <Foundation name="telephone" size={22} color="white" />
                : text
        }</ButtonText>
    </BlueButtonWrapper>
};


const ButtonText = styled.Text`
    color: #fff;
    text-align: center;
    line-height: 45px;
    font-size: 16px;
    font-weight: 500;
    padding-left: 15px;
    padding-right: 15px
`;

export default BlueButton