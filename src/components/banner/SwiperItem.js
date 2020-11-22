import React,{Component} from 'react';
import {
    View,
    Image,
    TouchableWithoutFeedback
} from 'react-native';
import {directToPage} from '../../utils/ext';

class SwiperItem extends Component{
    render(){
        const {data,styles,navigation} = this.props;
        return (
            <TouchableWithoutFeedback
                style={styles.swiperSize}
                onPress={()=> directToPage(navigation,'Detail',{courseId:data.course_id})}
            >
                <Image
                    style={styles.swiperSize}
                    source={{uri:data.img}}
                />
            </TouchableWithoutFeedback>
        )
    }
}

export default SwiperItem;