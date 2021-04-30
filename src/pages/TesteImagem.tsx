import React from 'react'
import {
    Image, StyleSheet, View
} from 'react-native'


import mainIcon from '../assets/mainIcon.png'

export function TesteImagem() {
    return (

        <View style={styles.container}>
            <Image source={mainIcon}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})