import { View, Text } from 'react-native'
import React from 'react'
import LoginForm from '../components/auth/LoginForm';
import UserData from '../components/auth/UserData';
import useAuth from '../hooks/useAuth';


export default function Account() {
  const {auth} = useAuth();
  console.log(auth)

  return (
    <View>
      { auth ? <UserData /> : <LoginForm /> }
    </View>
  )
}