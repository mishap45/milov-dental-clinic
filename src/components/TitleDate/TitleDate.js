import React from 'react'
import styled from 'styled-components/native'

const TitleDate = ({ date }) => <GroupTitle>{ date }</GroupTitle>;

const GroupTitle = styled.Text`    
    font-weight: 800;
    font-size: 22px;
    color: #222;
    padding-top: 25px;
    padding-bottom: 15px;
    background-color: #f1f1f1
`;

export default TitleDate
