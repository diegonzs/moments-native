import { useNavigation } from '@react-navigation/native'
import useKeyboard from '@rnhooks/keyboard'
import cx from 'classix'
import dayjs from 'dayjs'
import { SafeAreaView, Pressable, View } from 'react-native'
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory'

import { useBottomSheet } from '../../../hooks'
import { useMomentById } from '../../../hooks/moments'
import colors from '../../../theme/colors'
import { RootStackScreenProps, RouteName } from '../../../types/routes'
import DeleteIcon from '../../icons/delete'
import EditIcon from '../../icons/edit'
import FileTextIcon from '../../icons/file-text'
import MoreVertIcon from '../../icons/more-vert'
import PlusIcon from '../../icons/plus'
import RocketIcon from '../../icons/rocket'
import ScrollIcon from '../../icons/scroll'
import TagIcon from '../../icons/tag'
import { OptionList } from '../../option-list'
import { Row } from '../../row'
import { Typography } from '../../typography'

type navigationType =
  RootStackScreenProps<RouteName.MomentDetails>['navigation']

interface FooterProps {
  onDeletePress: () => void
  momentId: string
  isEditMode: boolean
}

export const Footer: React.FC<FooterProps> = ({
  momentId,
  isEditMode,
  onDeletePress,
}) => {
  const nav = useNavigation<navigationType>()
  const moment = useMomentById(momentId)
  const [visible] = useKeyboard()
  const {
    BottomSheet: OptionBottomSheet,
    openBottomSheet: openOptionsBottomSheet,
    closeBottomSheet: closeOptionsBottomSheet,
  } = useBottomSheet({ snapPoints: ['35%', '35', '50%'] })
  const {
    BottomSheet: AddMenuBottomSheet,
    openBottomSheet: openAddMenuBottomSheet,
    closeBottomSheet: closeAddMenuBottomSheet,
  } = useBottomSheet({ snapPoints: ['25%', '25%', '50%'] })

  const editedDate = moment.updatedAt ?? moment.createdAt

  const goToAllDetails = () => {
    nav.navigate(RouteName.AllDetails, { id: momentId })
  }
  const goToAddTag = () => nav.navigate(RouteName.AddTag, { momentId })
  const goToAddProcess = () => nav.navigate(RouteName.AddProcess, { momentId })

  const goToPrompt = () => {
    nav.navigate(RouteName.PromptSelect, { momentId })
  }

  const toggleDetailsView = () => {
    nav.navigate(RouteName.MomentDetails, {
      id: momentId,
      isEditMode: !isEditMode,
    })
  }

  return (
    <>
      <OptionBottomSheet>
        <OptionList
          cb={closeOptionsBottomSheet}
          data={[
            {
              id: 'tags',
              title: 'Set tags',
              icon: <TagIcon className="text-secondary-dark" />,
              action: goToAddTag,
            },
            {
              id: 'process',
              title: 'Process',
              icon: <RocketIcon className="text-secondary-dark" />,
              action: goToAddProcess,
            },
            {
              id: 'prompt',
              title: 'Use prompts',
              icon: <ScrollIcon className="text-secondary-dark" />,
              action: goToPrompt,
            },
          ]}
        />
      </OptionBottomSheet>

      <AddMenuBottomSheet>
        <OptionList
          cb={closeAddMenuBottomSheet}
          data={[
            {
              id: 'delete',
              title: 'Delete',
              icon: <DeleteIcon className="text-secondary-dark" />,
              action: onDeletePress,
            },
            {
              id: 'edit',
              title: isEditMode ? 'View' : 'Edit',
              icon: <EditIcon className="text-secondary-dark" />,
              action: toggleDetailsView,
            },
            {
              id: 'details',
              title: 'All details',
              icon: <FileTextIcon className="text-secondary-dark" />,
              action: goToAllDetails,
            },
          ]}
        />
      </AddMenuBottomSheet>

      <SafeAreaView>
        <KeyboardAccessoryView
          alwaysVisible
          hideBorder
          style={{ backgroundColor: colors.background.DEFAULT }}
        >
          <Row
            className={cx(
              'justify-between items-center px-5 pt-2 border-t border-primary-10 bg-background',
              visible && 'translate-y-[20px]',
            )}
          >
            {isEditMode && (
              <Pressable onPress={openOptionsBottomSheet} hitSlop={10}>
                <View className="border border-primary-20 w-8 h-8 rounded-[4px] flex justify-center items-center flex-row">
                  <PlusIcon className="text-primary scale-[.65]" />
                </View>
              </Pressable>
            )}
            <Typography
              variant="caption"
              className="text-primary-40 text-center"
            >
              Last change {dayjs(editedDate).format('h:mm a')}
            </Typography>
            <Pressable onPress={openAddMenuBottomSheet} hitSlop={10}>
              <MoreVertIcon className="text-primary" />
            </Pressable>
          </Row>
        </KeyboardAccessoryView>
      </SafeAreaView>
    </>
  )
}
