import { cx } from 'classix'
import { TouchableOpacity, View } from 'react-native'

import { Column } from '../column'
import { Row } from '../row'
import { Typography } from '../typography'

interface RowTabProps {
  options: string[]
  currentOption: string
  setCurrentOption: (val: string) => void
  className?: string
}

export const RowTab: React.FC<RowTabProps> = ({
  options,
  currentOption,
  setCurrentOption,
  className,
}) => {
  const isCurrentOption = (option: string) => option === currentOption
  return (
    <Row className={cx('justify-between mb-6', className)}>
      {options.map((option) => (
        <Column key={option} className="items-center">
          <TouchableOpacity onPress={() => setCurrentOption(option)}>
            <Typography
              variant="subtitle"
              weight="600"
              className={cx(
                'mb-1',
                isCurrentOption(option) ? 'text-primary' : 'text-primary-40',
              )}
            >
              {option}
            </Typography>
          </TouchableOpacity>
          {isCurrentOption(option) && (
            <View className="w-1 h-1 bg-secondary-light rounded-full" />
          )}
        </Column>
      ))}
    </Row>
  )
}
