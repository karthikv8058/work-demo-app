import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from './styles'
import { TouchableOpacity, ScrollView, FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';


const data = [
    
    {
      title:'Home',
      content:'Home Data'
    },
    {
      title:'Contact',
      content:'Contact Data'
    },
    {
      title:'Settings',
      content:'Settings Data'
    },
    {
      title:'Gallery',
      content:'Gellery Data'
    },
    {
      title:'Details',
      content:'Details Data'
    },
    {
      title:'404 page',
      content:'No Data Found'
    },
    {
      title:'404 page',
      content:'No Data Found'
    },
    {
      title:'404 page',
      content:'No Data Found'
    },
    {
      title:'404 page',
      content:'No Data Found'
    },
    {
      title:'404 page',
      content:'No Data Found'
    }
  ]

export default class Feed extends Component {
    constructor(props){
        super(props);

        this.state={
            click:false
        }
    }
    renderData=(data)=>{
        return(
            <View style={{
                flex:1,
                flexDirection:'row',
                backgroundColor:'#265663',
                width:'100%',
                alignItems:'center',
                justifyContent:'center',
                paddingVertical:10,
            marginBottom:5}}>
                <Text style={{color:'#fff',flex:1,flexDirection:'column',textAlign:'center'}}>{data.item.title}</Text>
                <Text style={{color:'#fff',flex:1,flexDirection:'column',textAlign:'center'}}>{data.item.content}</Text>
                
                </View>
                
        )
    }
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <ScrollView style={{
                    height:400,
                    width:'100%',
                    backgroundColor:'#abc7eb',
                    padding:30}}>
                    <FlatList
                    data={this.state.click?data:''}
                    renderItem={(item)=>this.renderData(item)}
                    />
                    <View style={{flex:1,height:60}}></View>
                </ScrollView>
                <View style={styles.center}>
                {/* <Text style={styles.title}>Data</Text> */}
                <TouchableOpacity activeOpacity={.8} onPress={()=>this.setState({click:!this.state.click})}>
        <Text style={styles.btnLoad}>{ this.state.click?'Unload Data':'Load Data'}</Text>
                </TouchableOpacity>             
                {/* <Button title="Go to Feed Item" onPress={()=> this.props.navigation.navigate('Details')} /> */}
                </View>
            </SafeAreaView>
            
        )
    }
}
