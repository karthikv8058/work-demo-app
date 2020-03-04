import React from 'react';
import { View, Text,Image,Dimensions, ScrollView } from 'react-native';
import { styles } from '../styles';
import Car from '../img/Car1.jpg';
import Car4 from '../img/Car4.jpg';
const{height,width} = Dimensions.get('window');
const{heightScreen,widthScreen} = Dimensions.get('screen');
export default function tab1() {
    return (
        <View style={[styles.center,{backgroundColor:'#000'}]}>
            <Text style={styles.title}>Tab 1</Text>
            <View style={{flex:1}}>
                <ScrollView style={{maxHeight:height-400}} showsVerticalScrollIndicator={false}>
                    <View >
                        <Image style={{width:width,height:300,resizeMode:'cover'}} source={Car}/>
                        <Image style={{width:width,height:300,resizeMode:'cover'}} source={Car4}/>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
