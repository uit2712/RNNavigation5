# React Navigation 5 in React Native
# What's new in this version?
## Component based configuration (Most important change)
In React Navigation 5, all of the configuration happens inside a component and is dynamic.\
Example:
```javascript
function App() {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="settings" component={Settings} />
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{ title: 'John Doe' }}
      />
    </Stack.Navigator>
  );
}
```
This means we have access to **props**, **state** and **context**, and can dynamically change the configuration for the navigator!
## New hooks
Hooks are great for stateful logic and code organization. Now we have several hooks for common use cases:\
- useNavigation
- useRoute
- useNavigationState
- useFocusEffect
- useIsFocused
- useLinking
- useScrollToTop
## Update options from component
We can dynamic change screen's configuration by using method *navigation.setOptions({...})*
```javascript
navigation.setOptions({
  headerRight: () => (
    <DoneButton
      onPress={async () => {
        await saveNote();
        navigation.replace('Notes');
      }}
    />
  ),
})
```
## Type checking with TypeScript
React Navigation is written with TypeScript and exports type definitions for TypeScript projects.
# More information
https://reactnavigation.org/blog/2020/02/06/react-navigation-5.0/
