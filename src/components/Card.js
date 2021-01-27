import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const Card = (props) => {

    return (
        <TouchableOpacity
        //onPress={()=>navigation.navigate("videoplayer",{videoId:props.videoId,title:props.title})} 
        >
            <View style={{ marginBottom: 10 }}>
                <Image
                    source={{ uri: "https://images.unsplash.com/photo-1499088513455-78ed88b7a5b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=671&q=80" }}
                    style={{
                        width: "100%",
                        height: 200
                    }}
                />
                <View style={{
                    flexDirection: "row",
                    margin: 5
                }}>
                    <MaterialIcons name="account-circle" size={40} color="#212121" />
                    <View
                        style={{
                            marginLeft: 10
                        }}
                    >
                        <Text style={{
                            fontSize: 20,
                            width: Dimensions.get("screen").width - 50,
                            textcolor: "grey"

                        }}
                            ellipsizeMode="tail"
                            numberOfLines={2}
                        >{props.title}</Text>
                        <Text style={{
                            textcolor: "grey"


                        }}>{props.channel}</Text>
                    </View>

                </View>
            </View>
        </TouchableOpacity>

    )
}

export default Card