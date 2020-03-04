import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function screen1({navigation}) {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.center}>
            <Text style={styles.title}>Settings</Text>
            <View>
                <TouchableOpacity onPress={()=> navigation.navigate('Bottom Tabs')}>
                    <Text style={[styles.title,{color:'red'}]}>View Bottom Tabs</Text>
                </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    )
}
