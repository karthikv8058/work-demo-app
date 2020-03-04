import React from 'react';
import { View, Text,Image,Dimensions } from 'react-native';
import { styles } from '../styles';
import Car from '../img/Car3.jpg';
const{height,width} = Dimensions.get('window');
const{heightScreen,widthScreen} = Dimensions.get('screen');
export default function tab3() {
    return (
        <View style={[styles.center,{backgroundColor:'#000'}]}>
            <Text style={styles.title}>Tab 1</Text>
            <View style={{flex:1}}>
                <Image style={{width:width,height:300,resizeMode:'cover'}} source={Car}/>
            </View>
        </View>
    )
}
