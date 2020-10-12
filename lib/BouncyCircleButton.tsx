import * as React from "react";
import Androw from "react-native-androw";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles, { _container } from "./BouncyCircleButton.style";

interface IBouncyCircleButtonProps {
  size?: number;
  backgroundColor?: string;
  children?: React.ReactChild;
  shadowStyle?: Object;
  onPress: () => void;
}

const BouncyCircleButton = (props: IBouncyCircleButtonProps) => {
  const {
    size = 50,
    children,
    shadowStyle,
    backgroundColor = "#fff",
    onPress,
  } = props;
  return (
    <Androw style={[styles.shadowStyle, shadowStyle]}>
      <RNBounceable
        {...props}
        style={_container(size, backgroundColor)}
        onPress={onPress}
      >
        {children}
      </RNBounceable>
    </Androw>
  );
};

export default BouncyCircleButton;
