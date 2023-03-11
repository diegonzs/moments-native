import { cx } from 'classix'
import { useState } from 'react'

import { Column } from '../column'
import { Row } from '../row'
import { Switcher } from '../switcher'
import { Typography } from '../typography'

interface SwitchOptionsProps {
  title: string
  description: string
  isDisabled?: boolean
  defaultValue?: boolean
  onPress?: (newState: boolean) => void
  value?: boolean
}

export const SwitchOption: React.FC<SwitchOptionsProps> = ({
  title,
  description,
  isDisabled = false,
  defaultValue = false,
  value,
  onPress,
}) => {
  const [isActive, setIsActive] = useState<boolean>(defaultValue)
  const value_ = value ?? isActive
  const handlePress = () => {
    if (!isDisabled) {
      setIsActive((newState) => {
        onPress && onPress(!newState)
        return !newState
      })
    }
  }
  return (
    <Row className="justify-between">
      <Column className={cx('max-w-[180px]', isDisabled && 'opacity-40')}>
        <Typography
          variant="subtitle"
          weight="600"
          className={cx('text-primary mb-2')}
        >
          {title}
        </Typography>
        <Typography variant="caption" weight="500" className="text-primary-60">
          {description}
        </Typography>
      </Column>
      <Switcher
        isActive={value_}
        isDisabled={isDisabled}
        onPress={handlePress}
      />
    </Row>
  )
}
