import React,{useState} from 'react';
import { StyleSheet, Text, View,ScrollView,TextInput,FlatList,ActivityIndicator,Animated} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MiniCard from '../components/MiniCard';
// import MiniCard from '../components/MiniCard'
// import {useTheme} from '@react-navigation/native'
// import {useSelector,useDispatch} from 'react-redux'

//GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=[AIzaSyAsqCyHadbHxiEZ4OyfwcrlinixgqZtYvw]



const SearchScreen = ()=>{
   const [value,setValue] = useState("")
   const [miniCardData,setMiniCard] = useState([])
   const [loading,setLoading] = useState(false)
   const fetchData = () =>{
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyAsqCyHadbHxiEZ4OyfwcrlinixgqZtYvw`)
    .then(res=>res.json())
    .then(data=>{

        setLoading(false)
        // dispatch({type:"add",payload:data.items})
        setMiniCard(data.items)
    })
}
  return(
      <View style={{
          flex:1,
          marginTop:4
          }}>
          <View style={{
              padding:5,
              flexDirection:"row",
              justifyContent:"space-around",
              elevation:5,
             backgroundColor:"white",
            alignItems:'center'
        
          }}>
             <MaterialIcons
             style={{color:'grey'}}
             name="arrow-back" size={32}
             />
             <TextInput
             style={{
                 width:"70%",
                 backgroundColor:"#e6e6e6"
                }}
             value={value}
             onChangeText={(text)=>setValue(text)}
 />
             <MaterialIcons
             style={{color:'grey'}}
             name="send"
             size={32}
             onPress={()=>fetchData()}
             />
          </View>
           {loading ?<ActivityIndicator style={{marginTop:10}} size="large" color="red"/>:null } 

          <FlatList
           data={miniCardData}
           renderItem={({item})=>{
               return <MiniCard
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
               />
           }}
           keyExtractor={item=>item.id.videoId}
          />
        
      </View>
  )
}

export default SearchScreen
