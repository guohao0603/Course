import React,{Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import CourseItem from './courseItem';
import {screenSize} from '../../utils/tools';

class CourseList extends Component{
    render(){
        const {courseData,navigation} = this.props;
        return (
            <View style={styles.courseBoard}>
                {
                    courseData.map((item,index)=>{
                        return(
                            <CourseItem
                                data={item}
                                styles={styles}
                                index={index}
                                key={index}
                                navigation={navigation}
                            />
                        )
                    })
                }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    courseBoard:{
        width:screenSize.width
    },
    courseItem:{
        flexDirection:'row',
        height:80,
        backgroundColor:'#fff',
        borderBottomColor:'#eee',
        marginTop:10
    },
    courseItemFirst:{
        marginTop:0
    },
    imgView:{
        width:142,
        height:80
    },
    infoView:{
        position:'absolute',
        top:0,
        left:0,
        width:screenSize.width,
        height:80,
        paddingLeft:152,
        paddingTop:10,
        paddingBottom:10
    },
    courseName:{
        lineHeight:20
    },
    price:{
        color:'#f40',
        marginTop:5
    }
})
export default CourseList;