import React from 'react'
import { Container, Content, Form, Item, Input, Label } from 'native-base'
import { Formik } from 'formik'
import { View } from 'react-native'

import BlueButton from '../components/BlueButton/BlueButton'
import { visitApi } from '../api'

const AddVisitScreen = ({ navigation, route }) => {
    const { id } = route.params;

    const Add = (values) => {
        visitApi.add(values).then(() => {
          return navigation.navigate('VisitorsListScreen')
      })
    };

    return (
        <Container>
            <Content style={{ padding: 12 }}>
                <Formik
                    initialValues={{ dentNumber: '', diagnosis: '', price: '', date: '', time: '', visitor: '' }}
                    onSubmit={values => {
                        values.visitor = id;
                        Add(values);

                        values.dentNumber = '';
                        values.diagnosis = '';
                        values.price = '';
                        values.date = '';
                        values.time = ''
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <>
                            <Item floatingLabel style={{marginRight: 12, marginLeft: 12, marginTop: 12, marginBottom: 12}}>
                                <Label>Номер зуба</Label>
                                <Input keyboardType='numeric' onChangeText={handleChange('dentNumber')}
                                       onBlur={handleBlur('dentNumber')}
                                       value={values.dentNumber} style={{marginTop: 12}}/>
                            </Item>

                            <Item floatingLabel style={{marginBottom: 50, marginRight: 12, marginLeft: 12}}>
                                <Label>Діагноз</Label>
                                <Input onChangeText={handleChange('diagnosis')}
                                       onBlur={handleBlur('diagnosis')}
                                       value={values.diagnosis} style={{marginTop: 12}}/>
                            </Item>

                            <Item floatingLabel style={{marginBottom: 50, marginRight: 12, marginLeft: 12}}>
                                <Label>Ціна</Label>
                                <Input keyboardType='numeric' onChangeText={handleChange('price')}
                                       onBlur={handleBlur('price')}
                                       value={values.price} style={{marginTop: 12}}/>
                            </Item>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Item floatingLabel style={{marginBottom: 50, marginRight: 12, marginLeft: 12, width: '40%'}}>
                                    <Label>Дата</Label>
                                    <Input onChangeText={handleChange('date')}
                                           onBlur={handleBlur('date')}
                                           value={values.date} style={{marginTop: 12}}/>
                                </Item>

                                <Item floatingLabel style={{marginBottom: 50, marginRight: 12, marginLeft: 12, width: '40%'}}>
                                    <Label>Година</Label>
                                    <Input onChangeText={handleChange('time')}
                                           onBlur={handleBlur('time')}
                                           value={values.time} style={{marginTop: 12}}/>
                                </Item>
                            </View>

                            <BlueButton text={'Добавити візит'} bc={'84D269'} onPress={handleSubmit}/>
                        </>
                    )}
                </Formik>
                <Form style={{ padding: 12 }}>



                </Form>
            </Content>
        </Container>
    )
};

export default AddVisitScreen