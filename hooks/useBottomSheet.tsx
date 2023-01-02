import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProps,
} from '@gorhom/bottom-sheet'
import useKeyboard from '@rnhooks/keyboard'
import { useCallback, useMemo, useRef } from 'react'

import { wait } from '../utils'

interface UseBottomSheetProps {
  snapPoints?: string[]
}

export const useBottomSheet = ({ snapPoints }: UseBottomSheetProps) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null)
  const [visible, dismiss] = useKeyboard()
  const defaultSnapPoints = useMemo(() => ['25%', '25%', '50%'], [])
  const openBottomSheet = async () => {
    if (visible) {
      dismiss()
      await wait(150)
    }
    bottomSheetRef.current?.present()
  }
  const closeBottomSheet = () => {
    bottomSheetRef.current?.close()
  }
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior="close"
        appearsOnIndex={1}
        opacity={0}
      />
    ),
    [],
  )
  const BottomSheet = useMemo(() => {
    const BottomSheetComponent: React.FC<Partial<BottomSheetModalProps>> = ({
      children,
      ...props
    }) => {
      return (
        <BottomSheetModal
          ref={bottomSheetRef}
          snapPoints={snapPoints || defaultSnapPoints}
          keyboardBlurBehavior="restore"
          index={0}
          backdropComponent={renderBackdrop}
          keyboardBehavior="interactive"
          {...props}
        >
          {children}
        </BottomSheetModal>
      )
    }
    return BottomSheetComponent
  }, [bottomSheetRef, renderBackdrop, defaultSnapPoints, snapPoints])

  return {
    bottomSheetRef,
    openBottomSheet,
    closeBottomSheet,
    BottomSheet,
  }
}
