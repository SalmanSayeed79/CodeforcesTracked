import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet,ScrollView, Text, View ,TextInput,TouchableOpacity, Button} from 'react-native';
import Item from './items'

export default function MainPage({navigation}) {
  const [data,setData]=useState([])
  const [loading,setLoading]=useState(true)
  const [handle,setHandle]=useState('hossainzarif')
  
  console.log('okkkkkkk')
  const getData=async ()=>{
    let url=`https://codeforces.com/api/user.status?handle=${handle}&from=1&count=50`
    console.log('ok')
    let data=await (await fetch(url)).json()
    data=data.result
    setData(data)
  }





  return (
    <View style={styles.container}>
       <View style={styles.navbar}><Text style={styles.navbar_text}>Codeforces Hacked</Text></View>
       <View style={styles.entry_fields}>
          <Text style={styles.entry_label}>Enter the handle of the user: </Text>
          <TextInput onChangeText={(txt)=>setHandle(txt)} style={styles.entry} placeholder='Handle'></TextInput>
          <TouchableOpacity onPress={getData}><Text style={styles.button}>Submit</Text></TouchableOpacity>   
       </View>
       <Button onPress={()=>navigation.navigate('Login')} title="Go to login Page"/>
        <ScrollView style={styles.main_part}>
        {
          data.map(a=>
          {
            if(a.verdict=="OK"){
              return(
                <Item c_id={a.contestId} index={a.problem.index} name={a.problem.name} rating={a.problem.rating}/>
              )
            }
            })}
        
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems:"stretch",
    justifyContent: "flex-start",
  },
  navbar:{
    backgroundColor:"orangered",
    //marginBottom:1000,
    flex:.1,
    justifyContent:"center",
    alignItems:"center"
  }, 
  navbar_text:{
    //fontFamily:"sans-serif", 
    fontSize:25,
    color:"white",
    fontWeight:"800"
  },
  entry_fields:{
    flex:.2,
    //backgroundColor:'red',
    marginTop:70,
    alignItems:"center",
    justifyContent:"flex-start",
    fontSize:17
  },
  entry:{
    width:500,
    borderStyle:"solid",
    borderColor:"grey",
    borderBottomWidth:1,
    textAlign:"center",
    marginTop:10,
  },
  entry_label:{
    fontSize:18,
    textAlign:"center"
  },
  text_input:{
    width:550,
    flex:.05,
    backgroundColor:"white"
  },
  button:{
    backgroundColor:"orangered",
    color:'white',
    paddingVertical:10,
    paddingHorizontal:20,
    borderRadius:5,
    marginTop:10,

  },
  main_part:{
    flex:.8,
    //backgroundColor:'red',
    textAlign:'center',
    marginBottom:50,
    marginTop:20
  }
});
