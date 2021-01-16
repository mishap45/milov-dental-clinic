import React from 'react'
import styled from 'styled-components/native'

const AddButton = () => {
    return (
        <AddButtonBlock style={{
            shadowColor: '#2A86FF',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.7,
            shadowRadius: 3.5,
            elevation: 5
        }}>
            <AddButtonText>+</AddButtonText>
        </AddButtonBlock>
    )
};

const AddButtonBlock = styled.TouchableOpacity`
    width: 64px;
    height: 64px
    border-radius: 50px;
    background: #2A86FF;
`;

const AddButtonText = styled.Text`
    font-size: 25px;
    font-weight: 600;
    color: #fff;
    text-align: center;
    line-height: 64px
`;

export default AddButton