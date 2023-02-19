import { onUnmounted } from 'vue'
import { hideOthers } from 'aria-hidden'

import type { Ref } from 'vue'
import type { Undo } from 'aria-hidden'

export interface UseAriaHiddenReturn {
  /**
   * Marks everything as aria-hidden
   *
   */
  hide: () => void

  /**
   * Unmarks everything as aria-hidden
   *
   */
  unhide: () => void
}

export const useAriaHidden = (
  targetRef: Ref<HTMLElement | null>,
  parentRef?: Ref<HTMLElement>,
  markerName?: string
): UseAriaHiddenReturn => {
  let undo: undefined | Undo

  const hide = () => {
    if (targetRef.value) {
      undo = hideOthers(targetRef.value, parentRef?.value, markerName)
    }
  }

  const unhide = () => {
    if (undo && typeof undo === 'function') {
      undo()
    }
  }

  onUnmounted(() => unhide())

  return {
    hide,
    unhide,
  }
}
