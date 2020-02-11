import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from './src/screens/Home';
import Comment from './src/screens/Comment';

const HomeStack = createStackNavigator({
        Home: {
            screen: Home,
        },
    },
    {
        headerMode: 'none',
    },
);

const CommentStack = createStackNavigator({
        Home: HomeStack,
        Comment: {
            screen: Comment,
            navigationOptions: {
                headerTitle: 'comments',
            },

        },
    },
);

CommentStack.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    if (navigation.state.index === 1 || navigation.state.index === 2) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};

const tabNavigator = createBottomTabNavigator(
    {

        Comment: CommentStack,
    },
);
export default createAppContainer(tabNavigator);
