import React from 'react'
import styled from 'styled-components/native'

const HeaderText = ({ text }) => <BlueText>{text}</BlueText>;

const BlueText = styled.Text`
    font-size: 20px;
    color: #2A86FF;
    font-weight: 600
`;

export default HeaderText