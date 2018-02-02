import { Navigation } from 'react-native-navigation';

import Rate from './modules/rate/Rate';

export function registerScreens(store, provider){
	Navigation.registerComponent('screen.Rate', () => Rate, store, provider);	
}