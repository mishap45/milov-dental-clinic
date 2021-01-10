import { StatusBar } from 'expo-status-bar'
import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'

const App = () => {
  return (
    <Container>
        <Group>
            <GroupTitle>MiLov</GroupTitle>
            <GroupItem>
                <Avatar source={{ uri: 'https://re.vwp.su/pic/290719/Luna/image_2.jpg' }} />

                <View style={{ flex: 1 }}>
                    <FullName>Luna Star</FullName>
                    <GrayText>Blow Job</GrayText>
                </View>

                <GroupDateBlock>
                    <GroupDate>12:30</GroupDate>
                </GroupDateBlock>
            </GroupItem>
        </Group>
      <StatusBar style="auto" />
    </Container>
  );
};

const GroupDateBlock = styled.View`
    border-radius: 18px;
    overflow: hidden
`;

const GroupDate = styled.Text`
    font-weight: 600;
    color: #4294ff;
    font-size: 14px;
    width: 70px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    background: #e9f5ff;
`;

const GrayText = styled.Text`
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

const GroupItem = styled.View`
    padding: 20px 0;
    flex-direction: row;
    align-items: center
`;

const GroupTitle = styled.Text`    
    font-weight: 800;
    font-size: 22px;
    color: #222
`;

const Group = styled.View`
    padding: 0 20px
`;

const Container = styled.View`
    flex: 1;
    margin-top: 50px
`;

export default App
