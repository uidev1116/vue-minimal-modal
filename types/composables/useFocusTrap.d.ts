import type { Ref } from 'vue'
import type { ActivateOptions, DeactivateOptions, Options } from 'focus-trap'
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
export declare const useFocusTrap: (
  targetRef: Ref<HTMLElement | null>,
  options?: Options
) => UseFocusTrapReturn
//# sourceMappingURL=useFocusTrap.d.ts.map
