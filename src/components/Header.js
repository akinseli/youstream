import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useDispatch, useSelector } from 'react-redux'

export default function Header({ height }) {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { colors } = useTheme()
  const currentTheme = useSelector(state => state.myDarMode)
  const mycolor = colors.iconColor
  return (
    <View
      style={{
        //marginTop: 2,
         //position:"absolute",
       
       // top:0,
        left:0,
        right:0,
        height: 45,
        backgroundColor: colors.headerColor,
        flexDirection: "row",
        justifyContent: "space-between",
        elevation: 4,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          margin: 5,
        }}
      >
        <MaterialIcons
          style={{
            marginLeft: 20,
          }}
          name="subscriptions"
          size={32}
          color="red"
        />

        <Text
          style={{
            fontSize: 22,
            marginLeft: 5,
            // color:mycolor,
            fontWeight: "bold",
          }}
        >
          YouTube
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: 150,
          margin: 5,
        }}
      >
        <MaterialIcons name="videocam" size={32} color={mycolor} />
        <MaterialIcons
          name="search"
          size={32}
          color={mycolor}
          onPress={() => navigation.navigate("search")}
        />
        <MaterialIcons
          name="account-circle"
          size={32}
          color={mycolor}
          onPress={() => dispatch({
            type: "change_theme",
            payload: !currentTheme,
          })}
        />
      </View>
    </View>
  );
}
