import { Pressable, StyleSheet } from 'react-native'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'

import colors from '../../theme/colors'

interface SwitcherProps {
  isActive: boolean
  onPress: () => void
  isDisabled?: boolean
}

export const Switcher: React.FC<SwitcherProps> = ({
  isActive,
  onPress,
  isDisabled = false,
}) => {
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(isActive ? 24.5 : 0),
        },
      ],
    }
  }, [isActive])
  const handleOnPress = () => {
    if (isDisabled) return
    return onPress()
  }
  return (
    <Pressable onPress={handleOnPress}>
      <Animated.View
        style={[
          styles.container,
          {
            opacity: isDisabled ? 0.4 : 1,
            backgroundColor: isActive
              ? colors.primary.DEFAULT
              : colors.primary[20],
          },
        ]}
      >
        <Animated.View
          style={[
            styles.ball,
            {
              borderColor: isActive
                ? colors.primary.DEFAULT
                : colors.primary[20],
            },
            animatedStyles,
          ]}
        />
      </Animated.View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 56,
    borderRadius: 40,
  },
  ball: {
    borderRadius: 9999,
    width: 30,
    height: 30,
    borderWidth: 2,
    borderColor: colors.primary.DEFAULT,
    backgroundColor: colors.offWhite,
  },
})
