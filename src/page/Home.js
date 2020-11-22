import React,{Component} from 'react';
import {
    View,
    ScrollView,
    RefreshControl
} from 'react-native';
import {getCourseDatas} from '../model/indexModel';
import IndexSwiper from '../components/banner/IndexSwiper';
import MainTitle from '../components/mainTitle/index';
import RecomCourseList from '../components/recomCouresList/index';
import CourseList from '../components/courseList/index';
import {filterFieldData} from '../utils/ext';
class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            swiperData:[],
            fieldData:[],
            courseData:[],
            recomCourseData:[],
            isRefreshing:true,
        }
    }
    getCourseDatas(){
        getCourseDatas().then((res)=>{
            const data = res.result;
            setTimeout(()=>{
                this.setState({
                    swiperData: data.swipers,
                    fieldData: [{field_name:'推荐课程',field:''}].concat(data.fields),
                    courseData: data.courses,
                    recomCourseData: data.recomCourses
                },()=>{
                    //console.log(this.state)
                    if (this.state.isRefreshing){
                        this.setState({
                            isRefreshing:false
                        })
                    }
                })
            },1000)
        })
    }
    renderMainTitle (data){
        if (data){
            return (
                <MainTitle
                    title={data && data.field_name}
                />
            )
        }
    }
    onPageRefresh(){
        if (this.state.isRefreshing){
            return;
        }
        this.setState({
            isRefreshing:true
        });
        this.getCourseDatas()
    }
    renderRefreshControl(options){
        const {isRefreshing,onPageRefresh,tintColor,title,titleColor} = options;
        return(
            <RefreshControl
                refreshing={isRefreshing}
                onRefresh={onPageRefresh.bind(this)}
                tintColor={tintColor}
                title={title}
                titleColor={titleColor}
            />
        )
    }
    componentDidMount(){
        this.getCourseDatas()
        
    }
    render (){
        const {navigation} = this.props;
        const {swiperData,fieldData,courseData,recomCourseData,isRefreshing} = this.state;
        return (
            <ScrollView
                automaticallyAdjustContentInsets={false}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    this.renderRefreshControl({
                        isRefreshing,
                        onPageRefresh:this.onPageRefresh,
                        title:'正在加载中',
                        titleColor:'#666',
                        tintColor:'#666'
                    })
                }
            >
                <IndexSwiper 
                    swiperData={swiperData}
                    navigation={navigation}    
                />
                {
                    this.renderMainTitle(fieldData[0])
                }
                {
                    <RecomCourseList
                        recomCourseData={recomCourseData}
                        navigation={navigation}  
                    />
                }
               
                {
                    this.renderMainTitle(fieldData[1])
                }
                {
                    <CourseList
                        courseData={filterFieldData(courseData,'0',true)}
                        navigation={navigation}
                    />
                }
                {
                    this.renderMainTitle(fieldData[2])
                }
                {
                    <CourseList
                        courseData={filterFieldData(courseData,'1',true)}
                        navigation={navigation}
                    />
                }
                { 
                    this.renderMainTitle(fieldData[3])
                }
                {
                    <CourseList
                        courseData={filterFieldData(courseData,'2',true)}
                        navigation={navigation}
                    />
                }
                {
                    this.renderMainTitle(fieldData[4])
                }
                {
                    <CourseList
                        courseData={filterFieldData(courseData,'3',true)}
                        navigation={navigation}
                    />
                }
                
            </ScrollView>
        )
    }
}

export default HomePage;
