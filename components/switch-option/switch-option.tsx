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
}

export const SwitchOption: React.FC<SwitchOptionsProps> = ({
  title,
  description,
  isDisabled = false,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false)
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
        isActive={isActive}
        isDisabled={isDisabled}
        onPress={() => setIsActive((val) => !val)}
      />
    </Row>
  )
}
