import React from 'react'
import styled from 'styled-components/native'

const AddButton = () => {
    return (
        <AddButtonBlock>
            <AddButtonText>+</AddButtonText>
        </AddButtonBlock>
    )
};

const AddButtonBlock = styled.TouchableOpacity`
    width: 64px;
    height: 64px
    border-radius: 50px;
    background: #2A86FF;
    shadow-color: #2A86FF;
    shadow-offset: {
        width: 0,
        height: 2,
    };
    shadow-opacity: 0.7;
    shadow-radius: 3.5;
    elevation: 5;
`;

const AddButtonText = styled.Text`
    font-size: 25px;
    font-weight: 600;
    color: #fff;
    text-align: center;
    line-height: 64px
`;

export default AddButton