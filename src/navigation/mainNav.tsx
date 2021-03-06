import React, { FC, useEffect, useState} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import firebase from 'firebase'
import AuthStack from './authstack';
import AppStack from './appstack';

const MainNav : FC = ()=>{
    const [user, setUser] = useState<any>(null);

    const bootstrap = () => {
        firebase.auth().onAuthStateChanged(_user => {
            if(_user){
                setUser(_user)
            }
        })
    }

    useEffect(() => {
        bootstrap()
    }, [])

    return(
        <NavigationContainer>
            {user !== null ? <AppStack/> : <AuthStack/>}
        </NavigationContainer>
    )
}

export default MainNav;