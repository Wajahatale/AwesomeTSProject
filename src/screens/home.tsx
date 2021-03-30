import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { app } from '../constants/firebase';
import firebase from 'firebase';
import { Button, Input } from '../components';

const App : FC = () => {
    const [msg, setMsg] = useState<string | null>(null);

    const signOut = () => {
        app.auth().signOut();
    }

    const post = async () => {

        // let postssRef = app.database().ref("posts");
        
        // if(msg){
            const data = {
                msg,
                timeStamp: JSON.stringify(Date.now()),
                approved: false
            }
            // Alert.alert('Post');
            Alert.alert('',data.timeStamp);
            try {
                // postssRef.push(data);
                // Alert.alert('Tried', JSON.stringify(Date.now()));
                await app.firestore().collection('posts').add(data);
                
            } catch (err) {
                Alert.alert('failed');
                console.log('error',err);
            }

        // } else {
        //     Alert.alert('Missing Fields')
        // }
    }

    return (
        <View style={styles.container}>
            <Text>
                Home Screen
            </Text>
            <Button title="Sign Out" onPress={signOut}/>
            <View>
                <Input placeholder="Write Something Here" onChangeText={(text) => setMsg(text)}/>
                <Button title="Post" onPress={post} />
            </View>
        </View>
    )
}

export default App;

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    }
)