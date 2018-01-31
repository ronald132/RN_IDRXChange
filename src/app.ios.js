import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { registerScreens } from './screens';
import { Navigation } from 'react-native-navigation';

const navigatorStyle = {
	navBarTranslucent: true,
	drawUnderNavBar: true,
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	statusBarTextColorSchema: 'light',
	drawUnderTabBar: true
};

class App extends Component {
	constructor(props) {
		super(props);
		registerScreens(null, null);
		this.startApp();
	}

	startApp(){
		Navigation.startTabBasedApp({
			tabs: [
				{
					label: 'Rate',
					screen: 'screen.Rate',
					title: 'Rate',
					navigatorStyle
				}
			],
			tabsStyle: {
				tabBarButtonColor: 'white',
				tabBarSelectedButtonColor: 'white',
				tabBarBackgroundColor: 'black'
			}
		});
	}
}

export default App;