import Animated from "react-native-reanimated";
export declare const getIsAfterActive: (
  currentIndex: Animated.Node<number>,
  activeIndex: Animated.Node<number>
) => Animated.Node<number>;
export declare const hardReset: (
  position: Animated.Value<number>,
  finished: Animated.Value<number>,
  time: Animated.Value<number>,
  toValue: Animated.Value<number>
) => Animated.Node<number>;
export declare const setupCell: (
  currentIndex: Animated.Value<number>,
  size: Animated.Node<number>,
  offset: Animated.Node<number>,
  isAfterActive: Animated.Value<number>,
  prevToValue: Animated.Value<number>,
  prevSpacerIndex: Animated.Value<number>,
  activeIndex: Animated.Node<number>,
  activeCellSize: Animated.Node<number>,
  hoverOffset: Animated.Node<number>,
  spacerIndex: Animated.Value<number>,
  toValue: Animated.Value<number>,
  position: Animated.Value<number>,
  time: Animated.Value<number>,
  finished: Animated.Value<number>,
  runSpring: Animated.Node<number>,
  onFinished: Animated.Node<number>,
  isDraggingCell: Animated.Node<number>,
  placeholderOffset: Animated.Value<number>,
  prevIsDraggingCell: Animated.Value<number>,
  clock: Animated.Clock,
  disabled: Animated.Node<number>
) => Animated.Node<number>;
export declare function springFill(
  clock: Animated.Clock,
  state: Animated.SpringState,
  config: Animated.SpringConfig
): Animated.Node<number>;
