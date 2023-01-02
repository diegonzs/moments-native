import { cx } from 'classix'
import React, { PropsWithChildren } from 'react'
import { StyleSheet, Text } from 'react-native'

type TypographyVariant =
  | 'caption'
  | 'title'
  | 'body'
  | 'tag'
  | 'content'
  | 'subtitle'
  | 'input'
  | 'button'

type TypographyWeight = '400' | '500' | '600' | '700'

interface TypographyProps extends PropsWithChildren {
  variant: TypographyVariant
  className?: string
  weight?: TypographyWeight
}

const weightStyle = StyleSheet.create({
  '400': {
    fontFamily: 'Inter_400Regular',
    fontWeight: '400',
  },
  '500': {
    fontFamily: 'Inter_500Medium',
    fontWeight: '500',
  },
  '600': {
    fontFamily: 'Inter_600SemiBold',
    fontWeight: '600',
  },
  '700': {
    fontFamily: 'Inter_700Bold',
    fontWeight: '700',
  },
})

const styles = StyleSheet.create({
  tag: {
    fontSize: 10,
  },
  content: {
    fontSize: 11,
  },
  caption: {
    fontSize: 12,
  },
  body: {
    fontSize: 14,
  },
  button: {
    fontSize: 16,
  },
  input: {
    fontSize: 16,
  },
  subtitle: {
    fontSize: 18,
  },
  title: {
    fontSize: 24,
  },
})

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className,
  weight = '400',
}) => {
  return (
    <Text
      style={[weightStyle[weight], styles[variant]]}
      className={cx(className)}
    >
      {children}
    </Text>
  )
}
