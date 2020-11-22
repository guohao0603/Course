import React,{Component} from 'react';
import { StyleSheet } from 'react-native';
import {WebView} from 'react-native-webview';

class Detail extends Component{
  render(){
    const {route} = this.props;
    const {courseId} = route.params;
    return(
      <WebView
          source={{ uri:'https://ke.qq.com/course/'+ courseId }}
          style={styles.webview}
          startInLoadingState={true}
      />
    )
  }
}
const styles = StyleSheet.create({
  webview:{
    
  }
})
export default Detail;