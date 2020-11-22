import React,{Component} from 'react';
import {Image, StyleSheet,View} from 'react-native';
import {screenSize} from '../../utils/tools';
class PageLoading extends Component{
    render(){
        return(
           <View style={styles.pageLoading}>
               <Image
                    style={styles.loadingPic}
                    source={require('../../assets/loading.gif')}
               />
           </View>
        )
    }

}
const styles = StyleSheet.create({
    pageLoading:{
        width:screenSize.width,
        height:screenSize.width - 207,
        justifyContent:'center',
        alignItems:'center'
    },
    loadingPic:{
        width:60,
        height:60
    }
})
export default PageLoading;