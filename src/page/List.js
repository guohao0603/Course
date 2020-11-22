import React,{Component} from 'react';
import {
    View,
    ScrollView,
    RefreshControl
} from 'react-native';
import {getCourseFields,getCourses} from '../model/listModel';
import ListTab from '../components/listTab/index';
import CourseList from '../components/courseList/index';
import commonStyles from '../commonStyles/index';
import PageLoading from '../components/pageLoading/index';
class ListPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            fieldData:[],
            curIdx: 0,
            curField:'all',
            courseData:{},// 缓存数据 减少重复请求
            // courseData:{
            //     'all':[],
            //     '0':[],
            //     '1':[],
            //     '2':[],
            //     '3':[]
            // }
            isRefreshing:false,
            pageLoadingShow:false
        }
    }
    getCourseFields (){
        getCourseFields().then((res)=>{
            const data = res.result;
            this.setState({
                fieldData:[{field:'all',field_name:'全部课程'}].concat(data),
            },()=>{
                // console.log(this.state)
            })
        })
    }
    getCourses(field){
        this.setState({
            pageLoadingShow:true
        })
        getCourses(field).then((res)=>{
            const data = res.result;
            this.state.courseData[field] = data;
            setTimeout(()=>{
                this.setState({
                    courseData: this.state.courseData,
                    pageLoadingShow:false
                })
            },1000)
        })
    }
    onTabClick(field,index){
        this.setState({
            curIdx:index,
            curField:field,
        },()=>{
            const {courseData,curField} = this.state;
            // if (courseData[curField]){
            //     console.log('From cache pool')
            //     console.log(this.state)
            // }else{
            //     this.getCourses(curField)
            //     console.log(this.state)
            //     console.log('From Ajax')
            // }
            !courseData[curField] && this.getCourses(curField)
        })
    }
    onPageRefresh(){
        const {isRefreshing,curField} = this.state;
        if (this.state.isRefreshing){
            return;
        }
        this.setState({
            isRefreshing:true
        },()=>{
            this.getCourses(curField)
        });
        setTimeout(()=>{
            this.setState({
                isRefreshing:false
            })
       },1000)
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
        this.getCourseFields()
        this.getCourses(this.state.curField)
    }
    render (){
        const {isRefreshing,fieldData,curIdx,courseData,curField,pageLoadingShow} = this.state;
        const {navigation} = this.props;
        return (
            <View style={commonStyles.container}>
                <ListTab
                    fieldData={fieldData}
                    curIdx={curIdx}
                    onTabClick={this.onTabClick.bind(this)}
                />
                <ScrollView
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
                    {
                        pageLoadingShow ? <PageLoading/> :
                        <CourseList
                            courseData={courseData[curField] || []}
                            navigation={navigation}
                        />
                    }
                    
                </ScrollView>
            </View>
        )
    }
}
export default ListPage;
