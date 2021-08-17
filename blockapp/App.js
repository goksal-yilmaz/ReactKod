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
        
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>

        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>

        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>

        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>

        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>

        <View style={styles.boxorange}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.boxblue}/>
        <View style={styles.box}/>
        <View style={styles.box}/>

        <View style={styles.boxorange}/>
        <View style={styles.boxorange}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.boxorange}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.boxblue}/>
        <View style={styles.box}/>
        <View style={styles.box}/>

        <View style={styles.boxblue}/>
        <View style={styles.boxblue}/>
        <View style={styles.boxblue}/>
        <View style={styles.boxblue}/>
        <View style={styles.boxorange}/>
        <View style={styles.boxorange}/>
        <View style={styles.box}/>
        <View style={styles.boxblue}/>
        <View style={styles.box}/>
        <View style={styles.box}/>

        <View style={styles.boxpurple}/>
        <View style={styles.boxpurple}/>
        <View style={styles.boxpurple}/>
        <View style={styles.boxpurple}/>
        <View style={styles.boxgreen}/>
        <View style={styles.boxgreen}/>
        <View style={styles.boxorange}/>
        <View style={styles.boxblue}/>
        <View style={styles.box}/>
        <View style={styles.box}/>

        <View style={styles.boxpurple}/>
        <View style={styles.boxpurple}/>
        <View style={styles.boxpurple}/>
        <View style={styles.boxpurple}/>
        <View style={styles.boxgreen}/>
        <View style={styles.boxgreen}/>
        <View style={styles.boxorange}/>
        <View style={styles.boxorange}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        
        </View>

        <View style={styles.footer}>
        
        <View style={styles.boxfooter}/>
        <View style={styles.boxfooter}/>
        <View style={styles.boxfooter}/>
        <View style={styles.boxfooter}/>
        <View style={styles.boxblue}/>
        <View style={styles.boxfooter}/>
        <View style={styles.boxfooter}/>
        <View style={styles.boxfooter}/>
        <View style={styles.boxfooter}/>

        <View style={styles.boxorange}/>
        <View style={styles.boxorange}/>
        <View style={styles.boxfooter}/>
        <View style={styles.boxfooter}/>
        <View style={styles.boxblue}/>
        <View style={styles.boxfooter}/>
        <View style={styles.boxfooter}/>
        <View style={styles.boxpurple}/>
        <View style={styles.boxpurple}/>

        <View style={styles.boxfooter}/>
        <View style={styles.boxorange}/>
        <View style={styles.boxfooter}/>
        <View style={styles.boxfooter}/>
        <View style={styles.boxblue}/>
        <View style={styles.boxfooter}/>
        <View style={styles.boxfooter}/>
        <View style={styles.boxpurple}/>
        <View style={styles.boxpurple}/>

        <View style={styles.boxfooter}/>
        <View style={styles.boxfooter}/>
        <View style={styles.boxfooter}/>
        <View style={styles.boxfooter}/>
        <View style={styles.boxblue}/>
        <View style={styles.boxfooter}/>
        <View style={styles.boxfooter}/>
        <View style={styles.boxfooter}/>
        <View style={styles.boxfooter}/>
        
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
  backgroundColor:'#C7D4DC',
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

boxorange:{
  backgroundColor:'#C97A26',
  marginTop:2,
  marginLeft:2,
  width:25,
  height:25,
  borderRadius:5,
},

boxblue:{
  backgroundColor:'#4C65C7',
  marginTop:2,
  marginLeft:2,
  width:25,
  height:25,
  borderRadius:5,
},

boxpurple:{
  backgroundColor:'#9162AB',
  marginTop:2,
  marginLeft:2,
  width:25,
  height:25,
  borderRadius:5,
},

boxgreen:{
  backgroundColor:'#64A697',
  marginTop:2,
  marginLeft:2,
  width:25,
  height:25,
  borderRadius:5,
},

boxfooter:{
  backgroundColor:'white',
  marginTop:2,
  marginLeft:2,
  width:25,
  height:25,
  borderRadius:5,
}
});
