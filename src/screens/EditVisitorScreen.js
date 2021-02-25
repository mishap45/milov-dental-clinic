import React from 'react'
import { Container, Content, Form, Item, Input, Label } from 'native-base'
import { Formik } from 'formik'

import BlueButton from '../components/BlueButton/BlueButton'
import { visitorsApi } from '../api'

const AddVisitorScreen = ({ navigation, route }) => {
    const { id, fullName, phone } = route.params;

    const Edit = (values) => {
        visitorsApi.patch(id, values).then(() => {
          return navigation.navigate('VisitsListScreen')
      })
    };

    return (
        <Container>
            <Content style={{ padding: 12 }}>
                <Formik
                    initialValues={{ fullName: fullName, phone: phone }}
                    onSubmit={values => {
                        Edit(values);

                        values.fullName = '';
                        values.phone = ''
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <>
                            <Item floatingLabel style={{marginRight: 12, marginLeft: 12, marginTop: 12, marginBottom: 12}}>
                                <Label>Ім'я</Label>
                                <Input onChangeText={handleChange('fullName')}
                                       onBlur={handleBlur('fullName')}
                                       value={values.fullName} style={{marginTop: 12}}/>
                            </Item>

                            <Item floatingLabel style={{marginBottom: 50, marginRight: 12, marginLeft: 12}}>
                                <Label>Телефон</Label>
                                <Input keyboardType='numeric' onChangeText={handleChange('phone')}
                                       onBlur={handleBlur('phone')}
                                       value={values.phone} style={{marginTop: 12}}/>
                            </Item>

                            <BlueButton text={'Редагувати пацієнта'} bc={'84D269'} onPress={handleSubmit}/>
                        </>
                    )}
                </Formik>
                <Form style={{ padding: 12 }}>



                </Form>
            </Content>
        </Container>
    )
};

export default AddVisitorScreen