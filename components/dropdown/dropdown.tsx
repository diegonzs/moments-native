import { PropsWithChildren } from 'react'
import { Pressable, View } from 'react-native'

import { useBottomSheet } from '../../hooks'
import { OptionElementProps, OptionList } from '../option-list'

export interface DropdownOptionProps {
  label: string
  value: string
}

interface DropdownProps extends PropsWithChildren {
  options: DropdownOptionProps[]
  onChange: (selected: string) => void
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  onChange,
  children,
}) => {
  const { BottomSheet, openBottomSheet, closeBottomSheet } = useBottomSheet({
    snapPoints: ['25%', '25%', '50%'],
  })

  const formatedOptions: OptionElementProps[] = options.map((option) => ({
    id: option.value,
    title: option.label,
    icon: null,
    action: () => onChange(option.value),
  }))

  return (
    <View>
      <Pressable onPress={openBottomSheet}>{children}</Pressable>
      <BottomSheet>
        <OptionList cb={closeBottomSheet} data={formatedOptions} />
      </BottomSheet>
    </View>
  )
}
