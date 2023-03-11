import { cx } from 'classix'
import { Pressable } from 'react-native'

import { useBottomSheet } from '../../hooks'
import { useDeleteGoal, useToggleCompleted } from '../../hooks/goals'
import { Goal } from '../../models'
import { Column } from '../column'
import CheckIcon from '../icons/check'
import DeleteIcon from '../icons/delete'
import { OptionList } from '../option-list/option-list'
import { Row } from '../row'
import { Typography } from '../typography'

interface GoalItemProps {
  goal: Goal
}

export const GoalItem: React.FC<GoalItemProps> = ({ goal }) => {
  const { isCompleted, title, completedAt } = goal
  const handleToggleCompleted = useToggleCompleted(goal)
  const handleDelete = useDeleteGoal(goal)
  const { BottomSheet, openBottomSheet } = useBottomSheet({
    snapPoints: ['20%', '20%'],
  })

  return (
    <>
      <Pressable onLongPress={openBottomSheet}>
        <Row className={cx(isCompleted ? 'items-start' : 'items-center')}>
          <Pressable onPress={handleToggleCompleted}>
            <Row
              className={cx(
                'justify-center items-center w-8 h-8 mr-4 rounded-full',
                isCompleted && 'bg-primary-60 border-none',
                !isCompleted && 'border-2 border-primary',
              )}
            >
              {isCompleted && <CheckIcon className="text-background-nav" />}
            </Row>
          </Pressable>
          <Column>
            <Typography
              variant="subtitle"
              weight="600"
              className={cx(isCompleted ? 'text-primary-40' : 'text-primary')}
            >
              {title}
            </Typography>
            {isCompleted && completedAt && (
              <Typography className="text-primary-40 mt-2" variant="caption">
                Completed at {completedAt.toDateString()}.
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
              action: handleDelete,
            },
            // {
            //   id: 'edit',
            //   title: 'Edit',
            //   icon: <EditIcon className="text-secondary-dark" />,
            //   action: () => null,
            // },
          ]}
        />
      </BottomSheet>
    </>
  )
}
