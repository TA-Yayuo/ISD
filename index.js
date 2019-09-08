/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HeaderMain from './src/components/sameComponents/HeaderMain';
import SurfingCate1 from './src/components/surfingComponents/SurfingCate1';
import SurfingTab from './src/components/surfingComponents/SurfingTab';
import HeaderOther from './src/components/sameComponents/HeaderOther';
import ListProduct from './src/components/dependencyComponent/ListProduct';
import MainTab from './src/components/mainComponents/MainTab';
import TestMenuOp from './src/components/dependencyComponent/TestMenuOp';
import ProductDetail from './src/components/productDetails/ProductDetail';

AppRegistry.registerComponent(appName, () => ProductDetail);
