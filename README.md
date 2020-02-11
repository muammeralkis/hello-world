# React Native Hiding Tab Bar

Hi everyone !
Unfortunately TextInput component doesn't work properly on android. I mean that when there is a bottomTabNavigator it seems for a while and it goes.
But I don't think that any Developer wants that. This is why I share my solution

![Repo List](https://github.com/muammeralkis/hello-world/blob/master/screenshots/Simulator%20Screen%20Shot%20-%20iPhone%206s%20-%202020-02-11%20at%2018.39.08.png)

```
YourStack.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    if (navigation.state.index === 1 || navigation.state.index === 2) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};
```
