/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 * @providesModule RNTesterList
 */
"use strict";

export type RNTesterExample = {
  key: string,
  module: Object
};

const ComponentExamples: Array<RNTesterExample> = [
  // {
  //   key: "ActivityIndicatorExample",
  //   module: require("./ActivityIndicatorExample")
  // },
  // {
  //   key: "ARTExample",
  //   module: require("./ARTExample")
  // },
  {
    key: "ButtonExample",
    module: require("./ButtonExample")
  },
  // {
  //   key: "FlatListExample",
  //   module: require("./FlatListExample")
  // },
  {
    key: "ImageExample",
    module: require("./ImageExample")
  },
  // {
  //   key: "KeyboardAvoidingViewExample",
  //   module: require("./KeyboardAvoidingViewExample")
  // },
  // {
  //   key: "LayoutEventsExample",
  //   module: require("./LayoutEventsExample")
  // },
  // {
  //   key: "ListViewExample",
  //   module: require("./ListViewExample")
  // },
  // {
  //   key: "ListViewGridLayoutExample",
  //   module: require("./ListViewGridLayoutExample")
  // },
  // {
  //   key: "ListViewPagingExample",
  //   module: require("./ListViewPagingExample")
  // },
  // {
  //   key: "MaskedViewExample",
  //   module: require("./MaskedViewExample")
  // },
  // {
  //   key: "ModalExample",
  //   module: require("./ModalExample")
  // },
  // {
  //   key: "MultiColumnExample",
  //   module: require("./MultiColumnExample")
  // },
  // {
  //   key: "NavigatorIOSColorsExample",
  //   module: require("./NavigatorIOSColorsExample")
  // },
  // {
  //   key: "NavigatorIOSExample",
  //   module: require("./NavigatorIOSExample")
  // },
  // {
  //   key: "PickerExample",
  //   module: require("./PickerExample")
  // },
  // {
  //   key: "PickerIOSExample",
  //   module: require("./PickerIOSExample")
  // },
  // {
  //   key: "ProgressViewIOSExample",
  //   module: require("./ProgressViewIOSExample")
  // },
  // {
  //   key: "RefreshControlExample",
  //   module: require("./RefreshControlExample")
  // },
  // {
  //   key: "ScrollViewExample",
  //   module: require("./ScrollViewExample")
  // },
  // {
  //   key: "SectionListExample",
  //   module: require("./SectionListExample")
  // },
  // {
  //   key: "SegmentedControlIOSExample",
  //   module: require("./SegmentedControlIOSExample")
  // },
  // {
  //   key: "SliderExample",
  //   module: require("./SliderExample")
  // },
  // {
  //   key: "StatusBarExample",
  //   module: require("./StatusBarExample")
  // },
  // {
  //   key: "SwipeableListViewExample",
  //   module: require("./SwipeableListViewExample")
  // },
  // {
  //   key: "SwitchExample",
  //   module: require("./SwitchExample")
  // },
  // {
  //   key: "TabBarIOSExample",
  //   module: require("./TabBarIOSExample")
  // },
  // {
  //   key: "TextExample",
  //   module: require("./TextExample.ios")
  // },
  // {
  //   key: "TextInputExample",
  //   module: require("./TextInputExample.ios")
  // },
  // {
  //   key: "TouchableExample",
  //   module: require("./TouchableExample")
  // },
  // {
  //   key: "TransparentHitTestExample",
  //   module: require("./TransparentHitTestExample")
  // },
  {
    key: "ViewExample",
    module: require("./ViewExample")
  }
  // {
  //   key: "WebViewExample",
  //   module: require("./WebViewExample")
  // }
];

const APIExamples: Array<RNTesterExample> = [
  // {
  //   key: "AccessibilityIOSExample",
  //   module: require("./AccessibilityIOSExample")
  // },
  // {
  //   key: "ActionSheetIOSExample",
  //   module: require("./ActionSheetIOSExample")
  // },
  // {
  //   key: "AlertExample",
  //   module: require("./AlertExample").AlertExample
  // },
  // {
  //   key: "AlertIOSExample",
  //   module: require("./AlertIOSExample")
  // },
  {
    key: "AnimatedExample",
    module: require("./AnimatedExample")
  },
  // {
  //   key: "AnExApp",
  //   module: require("./AnimatedGratuitousApp/AnExApp")
  // },
  // {
  //   key: "AppStateExample",
  //   module: require("./AppStateExample")
  // },
  // {
  //   key: "AsyncStorageExample",
  //   module: require("./AsyncStorageExample")
  // },
  {
    key: "BorderExample",
    module: require("./BorderExample")
  },
  // {
  //   key: "BoxShadowExample",
  //   module: require("./BoxShadowExample")
  // },
  // {
  //   key: "CameraRollExample",
  //   module: require("./CameraRollExample")
  // },
  // {
  //   key: "ClipboardExample",
  //   module: require("./ClipboardExample")
  // },
  // {
  //   key: "GeolocationExample",
  //   module: require("./GeolocationExample")
  // },
  // {
  //   key: "ImageEditingExample",
  //   module: require("./ImageEditingExample")
  // },
  {
    key: "LayoutAnimationExample",
    module: require("./LayoutAnimationExample")
  },
  {
    key: "LayoutExample",
    module: require("./LayoutExample")
  },
  {
    key: "LinkingExample",
    module: require("./LinkingExample")
  },
  {
    key: "NativeAnimationsExample",
    module: require("./NativeAnimationsExample")
  },
  // {
  //   key: "NetInfoExample",
  //   module: require("./NetInfoExample")
  // },
  // {
  //   key: "OrientationChangeExample",
  //   module: require("./OrientationChangeExample")
  // },
  {
    key: "PanResponderExample",
    module: require("./PanResponderExample")
  },
  // {
  //   key: "PointerEventsExample",
  //   module: require("./PointerEventsExample")
  // },
  // {
  //   key: "PushNotificationIOSExample",
  //   module: require("./PushNotificationIOSExample")
  // },
  // {
  //   key: "RCTRootViewIOSExample",
  //   module: require("./RCTRootViewIOSExample")
  // },
  // {
  //   key: "RTLExample",
  //   module: require("./RTLExample")
  // },
  // {
  //   key: "ShareExample",
  //   module: require("./ShareExample")
  // },
  // {
  //   key: "SnapshotExample",
  //   module: require("./SnapshotExample")
  // },
  // {
  //   key: "TimerExample",
  //   module: require("./TimerExample")
  // },
  {
    key: "TransformExample",
    module: require("./TransformExample")
  }
  // {
  //   key: "VibrationExample",
  //   module: require("./VibrationExample")
  // },
  // {
  //   key: "WebSocketExample",
  //   module: require("./WebSocketExample")
  // },
  // {
  //   key: "XHRExample",
  //   module: require("./XHRExample")
  // }
];

const Modules = {};

APIExamples.concat(ComponentExamples).forEach(Example => {
  Modules[Example.key] = Example.module;
});

const RNTesterList = {
  APIExamples,
  ComponentExamples,
  Modules
};

module.exports = RNTesterList;
