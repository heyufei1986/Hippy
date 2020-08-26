import '@localTypes/global';
import './global';
import {
  HippyEventEmitter,
  HippyEventListener,
} from './events';
import {colorParse} from './color';
import HippyReact from './hippy';
import AppRegistry from './adapters/app-registry';
import Animated from './adapters/animated';
import Easing from './adapters/easing';
import Animation from './modules/animation';
import AnimationSet from './modules/animation-set';
import View from './components/view';
import Text from './components/text';
import Image from './components/image';
import ListView from './components/list-view';
import RefreshWrapper from './components/refresh-wrapper';
import Navigator from './components/navigator';
import ViewPager from './components/view-pager';
import TextInput from './components/text-input';
import ScrollView from './components/scroll-view';
import Modal from './components/modal';
import Focusable from './components/focusable';
import WebView from './components/web-view';
import * as Native from './native';
import * as StyleSheet from './modules/stylesheet';
// import * as Style from '';



const {
  AsyncStorage,
  BackAndroid,
  Bridge,
  Clipboard,
  Cookie: NetworkModule,
  Device,
  HippyRegister,
  ImageLoader: ImageLoaderModule,
  NetworkInfo: NetInfo,
  UIManager: UIManagerModule,
} = Native;

const {
  callNative,
  callNativeWithPromise,
  callNativeWithCallbackId,
  removeNativeCallback,
} = Bridge;

const TimerModule = null;
const ConsoleModule = console;
const Platform = Device.platform;
const Hippy = HippyReact;
const RNfqb = HippyReact;
const ImageBackground = Image;

// Forward compatibilities
const RNfqbRegister = HippyRegister;
const RNfqbEventEmitter = HippyEventEmitter;
const RNfqbEventListener = HippyEventListener;


const Dimensions = {
  get(name: 'window' | 'screen') {
    return Device[name];
  },
};

const PixelRatio = {
  get() {
    return Device.screen.scale;
  },
};


import {getRootViewId, setRootContainer, getRootContainer} from './utils/node';
import {trace, setSilent} from './utils';

import renderer from './renderer';
import Document from './dom/document-node';
import Style from "@localTypes/style";
import {ClickableProps, LayoutableProps, TouchableProps} from "./types";
import {LayoutEvent, TouchEvent} from '@localTypes/event';

import {ListViewProps} from  './components/list-view';


export {
  colorParse,
  callNative,
  callNativeWithPromise,
  callNativeWithCallbackId,
  removeNativeCallback,
  RNfqbRegister,
  RNfqbEventEmitter,
  RNfqbEventListener,
  HippyRegister,
  HippyEventEmitter,
  HippyEventListener,
  AsyncStorage,
  AppRegistry,
  Animated,
  Easing,
  UIManagerModule,
  StyleSheet,
  Dimensions,
  PixelRatio,
  TimerModule,
  NetworkModule,
  NetInfo,
  Clipboard,
  ConsoleModule,
  ImageLoaderModule,
  Platform,
  BackAndroid,
  Animation,
  AnimationSet,
  Hippy,
  RNfqb,
  View,
  Text,
  Image,
  ListView,
  RefreshWrapper,
  Navigator,
  ViewPager,
  TextInput,
  ScrollView,
  Modal,
  Focusable,
  WebView,
  ImageBackground,

  getRootViewId,
  getRootContainer,
  setRootContainer,
  trace,
  setSilent,
  renderer,
  Document,
  Style,
  ClickableProps,
  LayoutableProps,
  TouchableProps,
  LayoutEvent,
  TouchEvent,
  ListViewProps,

};

export default HippyReact;
