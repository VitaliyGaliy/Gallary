import React from 'react'
import { Provider, connect } from 'react-redux'
import { StackNavigator, addNavigationHelpers } from "react-navigation";
import Routes from "./config/routes";
import getStore from './redux'
import photos from './redux/modules/photos'

const AppNavigator = StackNavigator(Routes, {
    headerMode:'screen',
});

const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};

@connect(state => ({
    nav: state.nav
}))
class AppWithNavigationState extends React.Component {
    render() {
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
            />
        );
    }
}

const store = getStore(navReducer, photos)

const Main = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
)

export default Main
