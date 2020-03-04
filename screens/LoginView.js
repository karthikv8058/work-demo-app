import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import {View,Image,TouchableOpacity,Text} from 'react-native';
import User from '../screens/img/user.png';
import Styles, { styles } from '../screens/styles';

export default class LoginView extends Component {
    
    render() {
        //console.log("prop",this.props.route.params.data);
        
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:1.5,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
                    <Image source={User} style={{resizeMode:'contain',width:150,height:150}}/>
                </View>
                <View style={{flex:4,backgroundColor:'#fff',padding:30}}>
                    <View style={{marginBottom:20}}>
                        <Text style={styles.textLabel}>Username</Text>
                        <Text style={styles.label}>{this.props.route.params.data.id}</Text>
                    </View>
                    <View style={{marginBottom:20}}>
                        <Text style={styles.textLabel}>Email</Text>
                        <Text style={styles.label}>{this.props.route.params.data.email}</Text>
                    </View>
                    <View style={{marginBottom:20}}>
                        <Text style={styles.colorLabel}>Name</Text>
                        <Text style={styles.label}>{this.props.route.params.data.id}</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
