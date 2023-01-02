import { cx } from 'classix'
import { Pressable } from 'react-native'

import { useBottomSheet } from '../../hooks'
import { Column } from '../column'
import CheckIcon from '../icons/check'
import DeleteIcon from '../icons/delete'
import EditIcon from '../icons/edit'
import { OptionList } from '../option-list/option-list'
import { Row } from '../row'
import { Typography } from '../typography'

interface GoalItemProps {
  isCompleted?: boolean
  content: string
  date?: string
}

export const GoalItem: React.FC<GoalItemProps> = ({
  isCompleted = false,
  date,
  content,
}) => {
  const { BottomSheet, openBottomSheet } = useBottomSheet({
    snapPoints: ['20%', '20%'],
  })
  return (
    <>
      <Pressable onLongPress={openBottomSheet}>
        <Row className={cx(isCompleted ? 'items-start' : 'items-center')}>
          <Row
            className={cx(
              'justify-center items-center w-8 h-8 mr-4 rounded-full',
              isCompleted && 'bg-primary-60 border-none',
              !isCompleted && 'border-2 border-primary',
            )}
          >
            {isCompleted && <CheckIcon className="text-background-nav" />}
          </Row>
          <Column>
            <Typography
              variant="subtitle"
              weight="600"
              className={cx(isCompleted ? 'text-primary-40' : 'text-primary')}
            >
              {content}
            </Typography>
            {date && (
              <Typography className="text-primary-40 mt-2" variant="caption">
                Completed at {date}.
              </Typography>
            )}
          </Column>
        </Row>
      </Pressable>
      <BottomSheet>
        <OptionList
          data={[
            {
              id: 'delete',
              title: 'Delete',
              icon: <DeleteIcon className="text-secondary-dark" />,
              action: () => null,
            },
            {
              id: 'edit',
              title: 'Edit',
              icon: <EditIcon className="text-secondary-dark" />,
              action: () => null,
            },
          ]}
        />
      </BottomSheet>
    </>
  )
}
