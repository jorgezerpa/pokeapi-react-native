import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Keyboard } from 'react-native'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {  user, userDetails } from '../../utils/userDB';
import useAuth from '../../hooks/useAuth';

export default function LoginForm() {
    const [error, setError] = useState('');
    const { login } = useAuth();

    const formik = useFormik({
    initialValues: initialValues(),
    validateOnChange: false,
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formData) =>{
        setError('');
        const {username, password} = formData;
        if(username !== user.username || password !== user.password ){
            setError('El usuario no esta autenticado.');
        } else{
            login(userDetails);
        }

    } 
  })
  
  
   return (
    <View>
        <Text style={styles.title} >Iniciar sesión</Text>
        <TextInput placeholder='usuario' style={styles.input} autoCapitalize='none' value={formik.values.username} onChangeText={(text)=>{formik.setFieldValue('username', text)}} />
        <TextInput placeholder='contraseña' style={styles.input} secureTextEntry autoCapitalize='none' value={formik.values.password} onChangeText={(text)=>{formik.setFieldValue('password', text)}} />
        <Button title='Entrar' onPress={()=>formik.handleSubmit()}  />
        <Text style={styles.error}>{ formik.errors.username }</Text>
        <Text style={styles.error}>{ formik.errors.password }</Text>
        <Text style={styles.error}>{ error }</Text>
    </View>
  )
}

function initialValues(){
    return{
        username: '',
        password: ''
    }
}

function validationSchema(){
    return {
        username: Yup.string().required("El usuario es obligatorio"),
        password: Yup.string().required("La contraseña es obligatoria"),
    }
}


const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 15,
        marginTop: 50,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    button: {
        width: 200,
        backgroundColor: "#f00"
    },
    error: {
        textAlign: 'center',
        color: '#f00',
        marginTop: 20
    }
})