import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { SectionList, Text } from 'react-native'
import Swipeable from 'react-native-swipeable-row'
import axios from 'axios'

import Visitor from '../components/Visitor/Visitor'
import TitleDate from '../components/TitleDate/TitleDate'
import AddButton from '../components/AddButton/AddButton'
import visitors from '../Data/visitors'
import { visitApi } from '../api'

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
    const [data, setData] = useState(null);

    useEffect(() => {
        visitApi.get().then(({ data }) => {
            setData(data.data)
        })
    }, []);

    return (
        <Container>
            <Group>
                {data && <SectionList
                    sections={data}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({item}) => <Swipeable rightButtons={[<Text>one</Text>, <Text>two</Text>]}>
                        <Visitor description={item.diagnosis} name={item.visitor.fullName}
                                 date={item.time} active={item.active} navigation={navigation}
                                 phone={item.phone}
                        />
                    </Swipeable>}
                    renderSectionHeader={({ section: { title } }) => (
                        <TitleDate date={title} />
                    )}
                />}
            </Group>

            <ButtonBlock>
                <AddButton AddScreen={() => navigation.navigate('AddVisitorScreen')} />
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
