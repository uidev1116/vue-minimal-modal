import { watch, ref, onUnmounted, unref } from 'vue'
import { createFocusTrap } from 'focus-trap'

import type { Ref } from 'vue'
import type {
  ActivateOptions,
  DeactivateOptions,
  FocusTrap,
  Options,
} from 'focus-trap'

export interface UseFocusTrapReturn {
  /**
   * Indicates if the focus trap is currently active
   */
  isActive: Ref<boolean>

  /**
   * Indicates if the focus trap is currently paused
   */
  isPaused: Ref<boolean>

  /**
   * Activate the focus trap
   *
   * @see https://github.com/focus-trap/focus-trap#trapactivateactivateoptions
   * @param opts Activate focus trap options
   */
  activate: (opts?: ActivateOptions) => void

  /**
   * Deactivate the focus trap
   *
   * @see https://github.com/focus-trap/focus-trap#trapdeactivatedeactivateoptions
   * @param opts Deactivate focus trap options
   */
  deactivate: (opts?: DeactivateOptions) => void

  /**
   * Pause the focus trap
   *
   * @see https://github.com/focus-trap/focus-trap#trappause
   */
  pause: () => void

  /**
   * Unpauses the focus trap
   *
   * @see https://github.com/focus-trap/focus-trap#trapunpause
   */
  unpause: () => void
}

/**
 * Reactive focus-trap
 *
 * @param targetRef The target element to trap focus within
 * @param options Focus trap options
 */
export const useFocusTrap = (
  targetRef: Ref<HTMLElement | null>,
  options: Options = {}
): UseFocusTrapReturn => {
  let trap: undefined | FocusTrap

  const isActive = ref(false)
  const isPaused = ref(false)

  const activate = (opts?: ActivateOptions) => trap && trap.activate(opts)
  const deactivate = (opts?: DeactivateOptions) => trap && trap.deactivate(opts)

  const pause = () => {
    if (trap) {
      trap.pause()
      isPaused.value = true
    }
  }

  const unpause = () => {
    if (trap) {
      trap.unpause()
      isPaused.value = false
    }
  }

  watch(
    () => unref(targetRef),
    (el) => {
      if (!el) {
        return
      }

      if (trap) {
        return trap.updateContainerElements(el)
      }

      trap = createFocusTrap(el, {
        ...options,
        onActivate() {
          isActive.value = true

          if (options.onActivate) {
            options.onActivate()
          }
        },
        onDeactivate() {
          isActive.value = false

          if (options.onDeactivate) {
            options.onDeactivate()
          }
        },
      })
    },
    { flush: 'post' }
  )

  onUnmounted(() => deactivate())

  return {
    isActive,
    isPaused,
    activate,
    deactivate,
    pause,
    unpause,
  }
}
