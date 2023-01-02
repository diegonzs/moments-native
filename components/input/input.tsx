import { cx } from 'classix'
import React, { ReactElement } from 'react'
import { TextInput, TextInputProps } from 'react-native'

import colors from '../../theme/colors'
import { Row } from '../row'

export const Input: React.FC<
  {
    Prefix?: ReactElement
    inputRef?: React.LegacyRef<TextInput>
  } & TextInputProps
> = ({ Prefix, className, inputRef, ...props }) => {
  return (
    <Row
      className={cx(
        'bg-background-input rounded-2xl h-16 px-6 text-primary items-center flex flex-row',
        className,
      )}
    >
      <>
        {Prefix}
        <TextInput
          {...props}
          ref={inputRef}
          style={{ fontSize: 16 }}
          selectionColor={colors.primary.DEFAULT}
          placeholderTextColor={colors.placeholder}
          className="flex-1"
        />
      </>
    </Row>
  )
}
