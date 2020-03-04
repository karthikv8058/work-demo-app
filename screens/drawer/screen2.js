import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import { styles } from '../styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function screen2({navigation}) {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.center}>
            <Text style={styles.title}>Settings</Text>
            <View>
                <TouchableOpacity onPress={()=> navigation.navigate('Top Tabs')}>
                    <Text style={[styles.title,{color:'red'}]}>View Top Tabs</Text>
                </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    )
}
  