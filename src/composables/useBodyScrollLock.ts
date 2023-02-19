import { onUnmounted } from 'vue'
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock'

import type { Ref } from 'vue'
import type { BodyScrollOptions } from 'body-scroll-lock'

export interface UseBodyScrollLockReturn {
  /**
   * disable body element scroll
   *
   * @see https://github.com/willmcpo/body-scroll-lock#options
   * @param opts Body scroll options
   */
  disableScroll: (opts?: BodyScrollOptions) => void

  /**
   * enable body element scroll
   *
   */
  enableScroll: () => void
}

export const useBodyScrollLock = (
  targetRef: Ref<HTMLElement | null>
): UseBodyScrollLockReturn => {
  const disableScroll = (options?: BodyScrollOptions) => {
    if (targetRef.value) {
      disableBodyScroll(targetRef.value, options)
    }
  }

  const enableScroll = () => {
    if (targetRef.value) {
      enableBodyScroll(targetRef.value)
    }
  }

  onUnmounted(() => clearAllBodyScrollLocks())

  return {
    disableScroll,
    enableScroll,
  }
}
