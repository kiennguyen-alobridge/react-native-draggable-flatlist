import React from "react";
import Animated from "react-native-reanimated";
import { State as GestureState } from "react-native-gesture-handler";
export default function AnimatedValueProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element;
export declare function useAnimatedValues(): {
  activationDistance: Animated.Value<number>;
  activeCellOffset: Animated.Value<number>;
  activeCellSize: Animated.Value<number>;
  activeIndexAnim: Animated.Value<number>;
  containerSize: Animated.Value<number>;
  disabled: Animated.Value<number>;
  horizontalAnim: Animated.Value<0 | 1>;
  hoverAnim: Animated.Node<number>;
  hoverAnimConstrained: Animated.Node<number>;
  hoverAnimUnconstrained: Animated.Node<number>;
  hoverOffset: Animated.Node<number>;
  isDraggingCell: Animated.Node<0 | 1>;
  isTouchActiveNative: Animated.Value<number>;
  panGestureState: Animated.Value<GestureState>;
  placeholderOffset: Animated.Value<number>;
  resetTouchedCell: Animated.Node<number>;
  scrollOffset: Animated.Value<number>;
  scrollViewSize: Animated.Value<number>;
  spacerIndexAnim: Animated.Value<number>;
  touchAbsolute: Animated.Value<number>;
  touchCellOffset: Animated.Node<number>;
  touchInit: Animated.Value<number>;
};
