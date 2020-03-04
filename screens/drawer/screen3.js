import React, { Component } from 'react'
import { View, Text,TouchableOpacity,TextInput,Dimensions,ScrollView ,SafeAreaView,Platform, Alert} from 'react-native'
import { styles } from '../styles';
import Icon from 'react-native-vector-icons/Ionicons';
// import { Icon } from 'react-native-paper/lib/typescript/src/components/Avatar/Avatar';
const {height,width} = Dimensions.get('window');

export default class screen3 extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            email:'',
            isCreated:false,
        }
        this.data=[]
    }
    _handleUsername = (r) => {
       this.setState({username:r})
    }
    _handlePassword = (r) => {
        this.setState({password:r})
     }
     _handleEmail = (r) => {
        this.setState({email:r})
     }

    _handlePress = () =>{
        if(this.state.username==='' || this.state.password==='' || this.state.email===''){
            Alert.alert('Incomplete Registration !');
        }else{
            this.setState({isCreated:true});
            this.data.push({id:this.state.username,pass:this.state.password,email:this.state.email});
            //console.warn(this.data);
            this.props.navigation.navigate('LoginView',{data:{id:this.state.username,pass:this.state.password,email:this.state.email}});
        } 
    }
    render(){

    return (

        <SafeAreaView style={{flex:1}}>
            <ScrollView>
                <View style={{height:height/2,width:width}}>
                        <View style={styles.center}>
                            {/* <Icon size={30} color={'red'} name={Platform.OS=='android'?'md-home-outline':'ios-home-outline'}></Icon> */}
                        <Text style={styles.title}>Create Account</Text>
                        </View>
                </View>
                <View style={{height:height/2}}>
                        <View style={styles.textBox}>
                            <TextInput ref="" onChangeText={ (r)=> {this._handleUsername(r)} }
                             style={{textAlign:'center'}} 
                             placeholder="Enter Username"/>
                        </View>
                        <View style={styles.textBox}>
                            <TextInput keyboardType={"default"} onChangeText={ (r)=> {this._handlePassword(r)} }
                             secureTextEntry={true} style={{textAlign:'center'}} placeholder="Enter Password"/>
                        </View>
                        <View style={styles.textBox}>
                            <TextInput onChangeText={ (r)=> {this._handleEmail(r)} } style={{textAlign:'center'}} placeholder="Enter Email"/>
                        </View>
                        <TouchableOpacity onPress={this._handlePress} style={styles.createAccount} activeOpacity={.8}>
                            <Text style={{textAlign:'center',color:'#fff',textTransform:'uppercase'}}>Sign Up</Text>
                        </TouchableOpacity>
                </View>
                
            </ScrollView>
        </SafeAreaView>
    )
    }
}
  