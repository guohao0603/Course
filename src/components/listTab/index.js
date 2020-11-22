import React,{Component} from 'react';
import {
    ScrollView,
    View,
    StyleSheet
} from 'react-native';
import TabItem from './tabItem';
class ListTab extends Component{
    render(){
        const {fieldData,onTabClick,curIdx} = this.props;
        return(
            <View style={styles.tabContainer}>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                >
                    {
                        fieldData.map((item,index)=>{
                            return (
                                <TabItem
                                    data={item}
                                    index={index}
                                    key={index}
                                    curIdx={curIdx}
                                    onTabClick={onTabClick}
                                    styles={styles}
                                />
                            )
                        })
                    }
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    tabContainer:{
        height:35,
        backgroundColor:'#fff',
        borderBottomColor:'#eee',
        borderBottomWidth:1
    },
    tabItem:{
        justifyContent:'center',
        alignItems:'center',
        height:35,
        paddingLeft:20,
        paddingRight:20,
        borderBottomWidth:2,
        borderBottomColor:'transparent'
    },
    tabItemCurrent:{
        borderBottomColor:'#23b8ff'
    },
    tabItemText:{
        fontSize:14,
        color:'#333'
    },
    tabItemTextCurrent:{
        color:'#23b8ff'
    },

})
export default ListTab;