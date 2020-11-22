import React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomePage from '../page/Home';
import ListPage from '../page/List';
import Welcome from '../page/Welcome';
import Login from '../page/Login';
import DetailPage from '../page/Detail';
function BottomTab(){
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={(route)=>{
                tabBarIcon: ({focused,color,size})=>{
                    let iconName;
                    if (route.name === '首页') {
                        iconName = 'home'
                      } else if (route.name === '列表') {
                        iconName = 'list' 
                      }
                    return (
                        <Ionicons
                            name = {iconName}
                            size={26}
                            color={color}
                        />
                    )
                }
            }}
            tabBarOptions={{
                showIcon: true,
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                showLabel: true,
                style: {
                    backgroundColor: '#eee',
                    paddingBottom: 0,
                    borderTopWidth: 0.5,
                    borderTopColor: '#ccc',
                },
                labelStyle:{
                    fontSize: 16,
                    margin:8
                }
            }}
        >
            <Tab.Screen name="首页" component={HomePage} />
            <Tab.Screen name="列表" component={ListPage} />
        </Tab.Navigator>
    )
}

function NavigateBottom (){
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Welcome" 
                    component={Welcome} 
                    options={{
                        headerTitle: 'Welcome'
                    }}
                />
                <Stack.Screen 
                    name="Login" 
                    component={Login} 
                    options={{
                        headerTitle: 'Login'
                    }}
                />
                <Stack.Screen 
                    name="Home" 
                    component={BottomTab} 
                    options={{
                        headerLeft:null,
                        headerTitle: '课程'
                    }}
                />
                <Stack.Screen 
                    name="Detail" 
                    component={DetailPage} 
                    options={{
                        headerTitle: 'Detail'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigateBottom;