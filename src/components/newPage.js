import React,{Component} from 'react';
import { StyleSheet } from 'react-native';
import {WebView} from 'react-native-webview';

class NewPage extends Component{
  render(){
    return(
      <WebView
          source={{ uri:'https://www.bilibili.com/' }}
          style={styles.webview}
      />
    )
  }
}
const styles = StyleSheet.create({
  webview:{
    marginTop:20
  }
})
export default NewPage;