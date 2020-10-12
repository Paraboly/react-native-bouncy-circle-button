<img alt="React Native Bouncy Circle Button" src="assets/logo.png" width="1050"/>

[![Fully customizable bouncy animated circle button for React Native by Paraboly](https://img.shields.io/badge/-Fully%20customizable%20bouncy%20animated%20circle%20button%20for%20React%20Native%20by%20Paraboly-orange?style=for-the-badge)](https://github.com/Paraboly/react-native-bouncy-circle-button)

[![npm version](https://img.shields.io/npm/v/@paraboly/react-native-bouncy-circle-button.svg?style=for-the-badge)](https://www.npmjs.com/package/@paraboly/react-native-bouncy-circle-button)
[![npm](https://img.shields.io/npm/dt/@paraboly/react-native-bouncy-circle-button.svg?style=for-the-badge)](https://www.npmjs.com/package/@paraboly/react-native-bouncy-circle-button)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Bouncy Circle Button"
        src="assets/Screenshots/RN-Bouncy-Circle-Button.gif" />
</p>

# Installation

Add the dependency:

```bash
npm i @paraboly/react-native-bouncy-circle-button
```

## Peer Dependencies

<h5><i>IMPORTANT! You need install them</i></h5>

```js
"react-native-androw": "=> 0.0.34",
"@freakycoder/react-native-bounceable": ">= 0.2.0"
```

# Usage

## Import

```jsx
import BouncyCircleButton from "@paraboly/react-native-bouncy-circle-button";
```

## Fundamental Usage

```jsx
<BouncyCircleButton onPress={() => {}}>
  <AnyComponent />
</BouncyCircleButton>
```

# Configuration - Props

| Property        |   Type    |  Default  | Description                                            |
| --------------- | :-------: | :-------: | ------------------------------------------------------ |
| onPress         | function  | undefined | set your onPress functionality                         |
| children        | component | undefined | set the inside BouncyCircleButton's children component |
| size            |  number   |    50     | change the size of the button                          |
| backgroundColor |   color   |   #fff    | change the background of the button                    |
| shadowStyle     |   style   |  default  | change the shadow style of the button                  |

## Future Plans

- [x] ~~LICENSE~~

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Bouncy Circle Button is available under the MIT license. See the LICENSE file for more info.
