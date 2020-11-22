import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

class MainTitle extends Component{
    render(){
        const {title} = this.props;
        return (
            <View style={styles.mainTitle}>
                <Text>{title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainTitle:{
        justifyContent:'center',
        height: 44,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 16
    }
})

export default MainTitle;