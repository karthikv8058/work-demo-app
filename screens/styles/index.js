import {StyleSheet,Dimensions} from 'react-native';
import App from '../../App';
const {height,width} = Dimensions.get('window');

export const AppColors = {
    themeC1:'#2c6397',
    themeC2:'#64edc1',
    themeC3:'#1892b4',
    btnColor:'#63ebc2',
    white:'#fff'
}

export const styles = StyleSheet.create({
    center:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:36,
        textTransform:'uppercase',
        marginBottom:15
    },
    marginTop:{
        marginTop:15
    },
    btnLoad:{
        paddingHorizontal:25,
        paddingVertical:10,
        backgroundColor:'#008f7c',
        borderRadius:25,
        color:'#fff',
        textAlign:'center',
        fontSize:18
    },
    textBox:{
        width:'100%',
        borderColor:AppColors.white,
        borderWidth:1,
        alignSelf:'center',
        marginBottom:15,
        textAlign:'center',
        color:'#fff'
    },
    createAccount:{
        width:'90%',
        textAlign:'center',
        paddingVertical:15,
        backgroundColor:'#5e00c9',
        alignSelf:'center',
        color:'#fff'
    },
    textLabel:{
        color:'#b0b1b1',
        fontSize:14
    },
    label:{
        color:'#000',
        fontSize:16,
        fontWeight:'bold'
    },
    colorLabel:{
        color:'#0256b5',
        fontWeight:'bold',
        fontSize:14
    },
    triangleCorner: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth:width,
        borderTopWidth:height/2,
        borderRightColor: 'transparent',
        borderTopColor: '#fff'
      }
})