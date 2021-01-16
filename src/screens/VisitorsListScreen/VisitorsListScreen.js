import React from 'react'
import styled from 'styled-components/native'
import { SectionList } from 'react-native'

import Visitor from '../../components/Visitor/Visitor'
import TitleDate from '../../components/TitleDate/TitleDate'
import AddButton from '../../components/AddButton/AddButton'
import visitors from '../../Data/visitors'

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

const VisitorsListScreen = ({ navigation }) => {
    return (
        <Container>
            <Group>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <Visitor uri={item.uri} description={item.description} name={item.name}
                                                       date={item.date} active={item.active} navigation={navigation}
                                                       phone={item.phone}
                    />}
                    renderSectionHeader={({ section: { title } }) => (
                        <TitleDate date={title} />
                    )}
                />
            </Group>

            <ButtonBlock>
                <AddButton/>
            </ButtonBlock>
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

export default VisitorsListScreen
