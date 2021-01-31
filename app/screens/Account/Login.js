import React from "react";
import {StyleSheet, View, ScrollView, Text, Image} from "react-native";
import {Divider} from "react-native-elements";
import {NavigationHelpersContext, useNavigation} from "@react-navigation/native";


export default function Login(){
    return(
        <ScrollView>
           <Image 
           source={require("../../img/user.png")}
           resizeMode="contain"
           style={styles.logo}
           />
           <View style={styles.viewContainer}>
               <Text> Login Form </Text>
               <CreateAccount />
           </View>
        </ScrollView>
    );
}

function CreateAccount(){
    const navigation = useNavigation();
    return(
        <Text style={styles.textRegister}> 
            No tienes una cuenta?{"  "}
            <Text 
            onPress ={() => navigation.navigate("register")}
            style={styles.btnRegister}>
                Registrate
            </Text>
        </Text>
    )

}

const styles = StyleSheet.create({
    logo: {
        width:"100%",
        height: 180,
        marginTop:50 
    },
    viewContainer:{
        marginRight: 40,
        marginLeft: 40,

    },
    textRegister:{
        marginTop:  15,
        marginLeft: 10,
        marginRight: 10,
    },
    btnRegister:{
        color:"#1E85E1",
        fontWeight: "bold"
        
    }
});