import React, { Component } from 'react';
import {  } from 'react-native-safe-area-context';
import { View,Text,SafeAreaView,TouchableOpacity,TextInput,Image,StatusBar } from 'react-native';
import {AppColors, styles} from '../styles';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import Logo from '../img/logo.png';

export default class Login extends Component {
    render() {
        return (
            <SafeAreaView style={{flex:1,}}>
                <StatusBar backgroundColor={AppColors.themeC2}/>
                <LinearGradient
                start={{x: 1, y: 1}} end={{x: 1, y: 0}} 
                colors={[AppColors.themeC1,AppColors.themeC3,AppColors.themeC2]} 
                style={{
                        paddingHorizontal:35,justifyContent:'center',
                        flex:1
                        }}>
                    
                    <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
                        <Image source={Logo} style={{width:100,height:100,alignSelf:'center',marginTop:100,marginBottom:50}}/>
                        <Text style={{color:'#fff',fontSize:25,textAlign:'center',marginBottom:15,textTransform:'uppercase'}}>
                            Sign in
                        </Text>
                        <View style={{marginBottom:20}}>
                            <TextInput selectionColor="white" placeholder="Username" placeholderTextColor="white" style={[styles.textBox,{color:AppColors.white,height:45,padding:0,margin:0,backgroundColor:'transparent'}]}/>
                        </View>
                        <View style={{marginBottom:20}}>
                        <TextInput selectionColor="white" placeholder="Password" placeholderTextColor={'white'} style={[styles.textBox,{height:45,padding:0,margin:0,color:AppColors.white}]}/>
                        </View>
                        <View style={{marginBottom:20}}>
                            <TouchableOpacity style={{backgroundColor:AppColors.btnColor,padding:15}}>
                                <Text style={{textAlign:'center',color:AppColors.themeC1}}>LOGIN</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </LinearGradient>
            </SafeAreaView>
        )
    }
}
