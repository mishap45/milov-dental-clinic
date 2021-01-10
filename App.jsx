import React from 'react'
import styled from 'styled-components/native'
import { SectionList } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import Visitor from './src/components/Visitor/Visitor'
import TitleDate from './src/components/TitleDate/TitleDate'
import AddButton from './src/components/AddButton/AddButton'
import visitors from './src/Data/visitors'

const DATA = [
    {
        title: "MiLov",
        data: visitors
    },
    {
        title: "MiLov1",
        data: visitors
    },
    {
        title: "MiLov2",
        data: visitors
    }
];

const App = () => {
  return (
    <Container>
        <Group>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Visitor uri={item.uri} description={item.description} name={item.name}
                    date={item.date} active={item.active}
                />}
                renderSectionHeader={({ section: { title } }) => (
                    <TitleDate date={title} />
                )}
            />
        </Group>

        <ButtonBlock>
            <AddButton/>
        </ButtonBlock>
        <StatusBar style="auto"/>
    </Container>
  );
};

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
`;

export default App
