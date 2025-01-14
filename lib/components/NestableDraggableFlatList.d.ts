import React from "react";
import Animated from "react-native-reanimated";
import { DraggableFlatListProps } from "../types";
import { FlatList } from "react-native-gesture-handler";
export declare function NestableDraggableFlatListInner<T>(
  props: DraggableFlatListProps<T>,
  ref?: React.ForwardedRef<FlatList<T>>
): JSX.Element;
export declare const NestableDraggableFlatList: <T>(
  props: Omit<
    import("react-native").FlatListProps<T>,
    | "onDragEnd"
    | "keyExtractor"
    | "data"
    | "renderItem"
    | "debug"
    | "scrollEnabled"
    | "autoscrollThreshold"
    | "autoscrollSpeed"
    | "animationConfig"
    | "dragHitSlop"
    | "activationDistance"
    | "dragItemOverflow"
    | "outerScrollOffset"
    | "enabledPanGestureHandler"
    | "containerStyle"
    | "onDragBegin"
    | "onPlaceholderIndexChange"
    | "onRelease"
    | "onScrollOffsetChange"
    | "renderPlaceholder"
    | "simultaneousHandlers"
    | "onAnimValInit"
  > & {
    data: T[];
    activationDistance?: number | undefined;
    animationConfig?: Partial<Animated.SpringConfig> | undefined;
    autoscrollSpeed?: number | undefined;
    autoscrollThreshold?: number | undefined;
    containerStyle?: import("react-native").StyleProp<
      import("react-native").ViewStyle
    >;
    debug?: boolean | undefined;
    dragItemOverflow?: boolean | undefined;
    keyExtractor: (item: T, index: number) => string;
    onDragBegin?: ((index: number) => void) | undefined;
    onDragEnd?:
      | ((params: import("../types").DragEndParams<T>) => void)
      | undefined;
    onPlaceholderIndexChange?: ((placeholderIndex: number) => void) | undefined;
    onRelease?: ((index: number) => void) | undefined;
    onScrollOffsetChange?: ((scrollOffset: number) => void) | undefined;
    renderItem: import("../types").RenderItem<T>;
    renderPlaceholder?: import("../types").RenderPlaceholder<T> | undefined;
    simultaneousHandlers?: React.Ref<any> | React.Ref<any>[] | undefined;
    outerScrollOffset?: Animated.Node<number> | undefined;
    onAnimValInit?:
      | ((animVals: {
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
          panGestureState: Animated.Value<
            import("react-native-gesture-handler").State
          >;
          placeholderOffset: Animated.Value<number>;
          resetTouchedCell: Animated.Node<number>;
          scrollOffset: Animated.Value<number>;
          scrollViewSize: Animated.Value<number>;
          spacerIndexAnim: Animated.Value<number>;
          touchAbsolute: Animated.Value<number>;
          touchCellOffset: Animated.Node<number>;
          touchInit: Animated.Value<number>;
        }) => void)
      | undefined;
    enabledPanGestureHandler?: boolean | undefined;
  } & Partial<
      Readonly<{
        autoscrollThreshold: number;
        autoscrollSpeed: number;
        animationConfig: import("react-native-reanimated").WithSpringConfig;
        scrollEnabled: boolean;
        dragHitSlop:
          | import("react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon").HitSlop
          | undefined;
        activationDistance: number;
        dragItemOverflow: boolean;
        outerScrollOffset: Animated.Value<number>;
        enabledPanGestureHandler: boolean;
      }>
    > & {
      ref?: React.ForwardedRef<FlatList<T>> | undefined;
    }
) => ReturnType<typeof NestableDraggableFlatListInner>;
