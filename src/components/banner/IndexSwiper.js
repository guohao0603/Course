import React,{Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import SwiperItem from './SwiperItem';
import Swiper from 'react-native-swiper';
import {screenSize} from '../../utils/tools';
class IndexSwiper extends Component{
    render(){
        const {swiperData,navigation} = this.props;
        let swiperHeight = styles.swiperSize.height;
        return (
            <View
                height={swiperHeight}
            >
                <Swiper
                    key={swiperData.length}
                    height={swiperHeight}
                    autoplay={true}
                    loop={true}
                    activeDotColor={'#fff'}
                    paginationStyle={styles.pagination}
                >
                    {
                        swiperData.map((item,index)=>{
                            return(
                                <SwiperItem 
                                    data={item}
                                    key={index}
                                    styles={styles} 
                                    navigation={navigation}
                                />
                            )
                        })
                    }
                </Swiper>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    swiperSize:{
        width:screenSize.width,
        height:screenSize.width * 360 /1200
    },
    pagination:{
        bottom: 5
    }
})
export default IndexSwiper;