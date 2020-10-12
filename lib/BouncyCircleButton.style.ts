import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  shadowStyle: ViewStyle;
}

export const _container = (
  size: number,
  backgroundColor: string,
): ViewStyle => ({
  width: size,
  height: size,
  borderRadius: size / 2,
  backgroundColor,
  alignItems: "center",
  justifyContent: "center",
});

export default StyleSheet.create<Style>({
  container: {},
  shadowStyle: {
    shadowRadius: 8,
    shadowOpacity: 0.3,
    shadowColor: "#757575",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});
