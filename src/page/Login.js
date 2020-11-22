import React,{Component} from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableNativeFeedback
} from 'react-native';

const VALID_USERNAME = "admin";
const VALID_PASSWORD = "123456";
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:"",
            errors:[]
        }
    }
    handleLogin = ()=>{
        const {navigation} = this.props;
        const {username,password} = this.state;
        Keyboard.dismiss();
        const error = [];
        if (username !== VALID_USERNAME){
            error.push("username")
        }
        if (password !== VALID_PASSWORD){
            error.push("password")
        }
        this.setState({
            errors: error
        })
        if (!error.length) {
            navigation.navigate("Home");
        }
    }
    render(){
        const { errors,username,password} = this.state;
        const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);
        return (
            <KeyboardAvoidingView 
                style={styles.login}
                behavior={"padding"}
            >
                <View style={styles.content}>
                    <Text style={styles.title}>
                        Login
                    </Text>
                    <View style={styles.inputContent}>
                        <Text style={styles.labelStyle}>
                            {'username'}
                        </Text>
                        <TextInput
                            style={[styles.inputStyles,hasErrors("username")]}
                            autoComplete="off"
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType={'default'}
                            defaultValue={""}
                            onChangeText={text => this.setState({ username: text })}
                        />
                    </View>
                    <View style={styles.inputContent}>
                            <Text style={styles.labelStyle}>
                                {'password'}
                            </Text>
                            <TextInput
                                style={[styles.inputStyles,hasErrors("password")]}
                                secureTextEntry={true}
                                autoComplete="off"
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType={'default'}
                                defaultValue={""}
                                onChangeText={text => this.setState({ password: text })}
                            />
                        </View>
                    <TouchableNativeFeedback onPress={()=>this.handleLogin()}>
                        <View
                            style={styles.button}
                        >
                            <Text style={styles.textLogin}>Login</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
     login: {

    },
      content:{
          paddingLeft:32,
          paddingRight:32
      },
      title:{
          fontSize:26,
          fontWeight: "bold"
      },
      inputContent:{
        marginTop:20
      },
      labelStyle:{
        fontSize: 14,
        fontWeight: "500",
        color: "#323643",
      },
      inputStyles:{
        borderColor: "#323643",
        borderRadius: 0,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: "#C5CCD6",
        fontSize: 14,
        fontWeight: "500",
        color: "#323643",
        height:48,
        marginTop:5,
        padding: 0
      },
      hasErrors: {
        borderBottomWidth: 1,
        borderBottomColor: "red",
      },
      button:{
        borderRadius:6,
        height: 16 * 3,
        justifyContent: "center",
        marginVertical: 25 / 3,
        shadowColor: "#323643",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        color:"#FFFFFF",
        backgroundColor:"#2BDA8E",
        marginTop:20
      },
       textLogin:{
        textAlign:'center',
        fontWeight: "500",
        color:"#FFFFFF",
      }
})
export default Login;