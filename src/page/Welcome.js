import React,{Component} from 'react';
import {
  Alert,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableNativeFeedback
} from 'react-native';
const { width, height } = Dimensions.get("window");
class Welcome extends Component{
  render(){
    const {navigation} = this.props;
    return (
      <View style={styles.container}> 
        <View style={styles.block1}>
          <Text style={styles.text1}>
            Your Home.
            <Text style={styles.text2}>
              {" "}
              Greener.
            </Text>
          </Text>
          <Text style={styles.text3}>
            Enjoy the experience.
          </Text>
        </View>
        <View style={styles.block2}>
          <Image
              source={require("../assets/images/illustration_1.png")}
              resizeMode="contain"
              style={{ width, height: height / 2, overflow: "visible" }}
            />
        </View>
        <View style={styles.block3}>
          <TouchableNativeFeedback onPress={() => navigation.navigate("Login")}>
              <View style={styles.buttonStyles}>
                <Text style={styles.textLogin}>
                  Login
                </Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => {Alert.alert('signup')}}>
              <View style={styles.buttonStyles2}>
                <Text style={styles.textSign}>
                  SignUp
                </Text>
              </View>
            </TouchableNativeFeedback>
            
            <View>
              <Text style={styles.textEnd}>
                Terms of service
              </Text>
            </View>
        </View>
      </View> 
    )
  }
}
const styles = StyleSheet.create({ 
    container: { 
      flex: 1, 
      backgroundColor: '#FFFFFF'
    }, 
    block1:{
      alignItems: "center",
      justifyContent: "flex-end",
      flex:0.4
    },
    text1:{
      fontSize:26,
      textAlign: "center",
      fontWeight: "bold"
    },
    text2:{
      fontSize:26,
      color:"#0AC4BA",
    },
    text3:{
      fontSize:18,
      color:"#C5CCD6",
      marginTop: 25 / 2 
    },
    block2:{
      alignItems: "center",
      justifyContent: "center"
    },
    block3:{
      flex:0.5,
      justifyContent: "center",
      marginLeft:25/2,
      marginRight:25/2
    },
    buttonStyles:{
      borderRadius:6,
      height: 16 * 3,
      justifyContent: "center",
      marginVertical: 25 / 3,
      shadowColor: "#323643",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 10,
      color:"#FFFFFF",
      backgroundColor:"#2BDA8E"
    },
    textLogin:{
      textAlign:'center',
      fontWeight: "500",
      color:"#FFFFFF",
    },
    buttonStyles2:{
      borderRadius:6,
      height: 16 * 3,
      justifyContent: "center",
      marginVertical: 25 / 3,
      shadowColor: "#323643",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 10,
      color:"#000000",
      backgroundColor:"#EEEEEE"
    },
    textSign:{
      textAlign:'center',
      fontWeight:'500'
    },
    textEnd:{
      textAlign:'center',
      fontSize:12,
      color:'#9DA3B4',
      marginTop: 2
    }
}); 
export default Welcome;
