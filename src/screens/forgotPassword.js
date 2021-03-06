import React from "react";
import { StyleSheet,Dimensions, Image,TouchableOpacity} from "react-native";
import {Container,View} from "native-base";
import { LinearGradient } from 'expo-linear-gradient';
import PasswordForm from "../components/passwordForm";
const { width, height } = Dimensions.get("window");

const forgotPassword = ({ navigation }) => {
    
    return(
        <Container style={styles.Fondo}  >
            <View  style={styles.viewHeather}>
            
              <LinearGradient 
                    colors={['#480048','#C04848']} 
                    style={styles.LinearGradient}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}> 
              </LinearGradient>
            </View>
            <View style={styles.vistaFlotante} >  
             <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
              </TouchableOpacity>
              <Image source={require("../../assets/logo.png")} style={styles.user} />

            </View>
            <View style={styles.centro}>
              <PasswordForm navigation={navigation}/> 
              
             
            </View>
             
            <View  style={styles.viewFoother}>
              <LinearGradient 
                    colors={['#480048','#C04848']} 
                    style={styles.LinearGradient}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 0, y: 1 }}> 
              </LinearGradient>
            </View>    
         </Container>
    );
}

const styles = StyleSheet.create({
    Fondo: {
      width: width,
      height: height,
      },
    
      LinearGradient: {
        height: height * 0.20,
        width: width 
        
      },
      header: {
          backgroundColor: '#3CCCD6',
        },

        vistaFlotante:{
            borderRadius: 40,
            backgroundColor: "#FFFFFF",
            width:width * 0.50,
            height:height * 0.30,
            alignSelf: "center",
            marginTop:-90,
            paddingTop:50,
            //borderColor: "#0000000",
            shadowRadius: 9,
            shadowOpacity: 0.2,
            shadowColor: "#000000",
            shadowOffset: { width: 7, height: 7 }
        },
      viewHeather:{
        height: height * 0.20,
        width: width ,
      },
      viewFoother:{
        height: height * 0.20,
        width: width ,
        marginTop:50,
      },
      pass:{
        textAlign: "right",
        paddingTop: 10
      },
      centro:{
        paddingTop:30,
        paddingLeft:30,
        marginRight:30,
      },
      user:{
        width: 140,
        height: 140,
        alignSelf: "center",
        
      }
  });
  
  export default forgotPassword;