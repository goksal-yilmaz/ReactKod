import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 



export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{fontSize:25, marginRight:15, marginLeft:15, marginTop:15,}}>29</Text>
          <FontAwesome5 name="crown" size={40} color="#E89607" />
          <Text style={{fontSize:25, color:'#A4A5B1', marginRight:15, marginLeft:15, marginTop:15,}}>77</Text> 
        </View>
        
        
        <View style={styles.content}>
        
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>

        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>

        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>

        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>

        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>

        <View style={[styles.box, {backgroundColor:'#C97A26',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#4C65C7',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>

        <View style={[styles.box, {backgroundColor:'#C97A26',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C97A26',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C97A26',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#4C65C7',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>

        <View style={[styles.box, {backgroundColor:'#4C65C7',}]}></View>
        <View style={[styles.box, {backgroundColor:'#4C65C7',}]}></View>
        <View style={[styles.box, {backgroundColor:'#4C65C7',}]}></View>
        <View style={[styles.box, {backgroundColor:'#4C65C7',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C97A26',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C97A26',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#4C65C7',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>

        <View style={[styles.box, {backgroundColor:'#9162AB',}]}></View>
        <View style={[styles.box, {backgroundColor:'#9162AB',}]}></View>
        <View style={[styles.box, {backgroundColor:'#9162AB',}]}></View>
        <View style={[styles.box, {backgroundColor:'#9162AB',}]}></View>
        <View style={[styles.box, {backgroundColor:'#64A697',}]}></View>
        <View style={[styles.box, {backgroundColor:'#64A697',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C97A26',}]}></View>
        <View style={[styles.box, {backgroundColor:'#4C65C7',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>

        <View style={[styles.box, {backgroundColor:'#9162AB',}]}></View>
        <View style={[styles.box, {backgroundColor:'#9162AB',}]}></View>
        <View style={[styles.box, {backgroundColor:'#9162AB',}]}></View>
        <View style={[styles.box, {backgroundColor:'#9162AB',}]}></View>
        <View style={[styles.box, {backgroundColor:'#64A697',}]}></View>
        <View style={[styles.box, {backgroundColor:'#64A697',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C97A26',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C97A26',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C7D4DC',}]}></View>
        </View>

        <View style={styles.footer}>
        
        <View style={[styles.box, {backgroundColor:'white',}]}></View>
        <View style={[styles.box, {backgroundColor:'white',}]}></View>
        <View style={[styles.box, {backgroundColor:'white'}]}></View>
        <View style={[styles.box, {backgroundColor:'white',}]}></View>
        <View style={[styles.box, {backgroundColor:'#4C65C7',}]}></View>
        <View style={[styles.box, {backgroundColor:'white',}]}></View>
        <View style={[styles.box, {backgroundColor:'white',}]}></View>
        <View style={[styles.box, {backgroundColor:'white',}]}></View>
        <View style={[styles.box, {backgroundColor:'white',}]}></View>

        <View style={[styles.box, {backgroundColor:'#C97A26',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C97A26',}]}></View>
        <View style={[styles.box, {backgroundColor:'white'}]}></View>
        <View style={[styles.box, {backgroundColor:'white',}]}></View>
        <View style={[styles.box, {backgroundColor:'#4C65C7',}]}></View>
        <View style={[styles.box, {backgroundColor:'white',}]}></View>
        <View style={[styles.box, {backgroundColor:'white',}]}></View>
        <View style={[styles.box, {backgroundColor:'#9162AB',}]}></View>
        <View style={[styles.box, {backgroundColor:'#9162AB',}]}></View>

        <View style={[styles.box, {backgroundColor:'white',}]}></View>
        <View style={[styles.box, {backgroundColor:'#C97A26',}]}></View>
        <View style={[styles.box, {backgroundColor:'white'}]}></View>
        <View style={[styles.box, {backgroundColor:'white',}]}></View>
        <View style={[styles.box, {backgroundColor:'#4C65C7',}]}></View>
        <View style={[styles.box, {backgroundColor:'white',}]}></View>
        <View style={[styles.box, {backgroundColor:'white',}]}></View>
        <View style={[styles.box, {backgroundColor:'#9162AB',}]}></View>
        <View style={[styles.box, {backgroundColor:'#9162AB',}]}></View>

        <View style={[styles.box, {backgroundColor:'white',}]}></View>
        <View style={[styles.box, {backgroundColor:'white',}]}></View>
        <View style={[styles.box, {backgroundColor:'white'}]}></View>
        <View style={[styles.box, {backgroundColor:'white',}]}></View>
        <View style={[styles.box, {backgroundColor:'#4C65C7',}]}></View>
        <View style={[styles.box, {backgroundColor:'white',}]}></View>
        <View style={[styles.box, {backgroundColor:'white',}]}></View>
        <View style={[styles.box, {backgroundColor:'white',}]}></View>
        <View style={[styles.box, {backgroundColor:'white',}]}></View>
        
        </View>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
container: {
  display:'flex',
  flex:1,
  flexDirection:'column',
  justifyContent:'center',
  margin:50,
  marginLeft:60,
  alignItems: 'center',
},

header:{
marginRight:25,
marginBottom:15,
flexDirection:'row',
justifyContent:'center',
},

content:{
  flexDirection:'row',
  flexWrap:'wrap',
  alignContent:'center'
},

box:{
  marginTop:2,
  marginLeft:2,
  width:25,
  height:25,
  borderRadius:5,
},

footer:{
flexDirection:'row',
flexWrap:'wrap',
margin:20,
marginRight:10,
position:'relative',
top:10,

},


});
