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
export declare const useBodyScrollLock: (
  targetRef: Ref<HTMLElement | null>
) => UseBodyScrollLockReturn
//# sourceMappingURL=useBodyScrollLock.d.ts.map
