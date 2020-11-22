import React,{Component} from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback
} from 'react-native';

class TabItem extends Component{
    render(){
        const {data,onTabClick,styles,index,curIdx} = this.props;
        return(
            <View style={[styles.tabItem, index === curIdx && styles.tabItemCurrent]}>
                <TouchableWithoutFeedback
                    onPress={()=> onTabClick(data.field,index)}
                >
                    <Text
                        style={[styles.tabItemText,index === curIdx && styles.tabItemTextCurrent]}
                    >
                        {data.field_name}
                    </Text>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}
export default TabItem;