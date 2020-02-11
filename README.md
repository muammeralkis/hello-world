# React Native Hiding Tab Bar

Hi everyone !
Unfortunately TextInput component doesn't work properly on android. I mean that when there is a bottomTabNavigator it seems for a while and it goes.
But I don't think that any Developer wants that. This is why I share my solution


YourStack.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    if (navigation.state.index === 1 || navigation.state.index === 2) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};
