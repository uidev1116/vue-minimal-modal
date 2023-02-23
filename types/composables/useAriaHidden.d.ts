import type { Ref } from 'vue'
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
export declare const useAriaHidden: (
  targetRef: Ref<HTMLElement | null>,
  parentRef?: Ref<HTMLElement>,
  markerName?: string
) => UseAriaHiddenReturn
//# sourceMappingURL=useAriaHidden.d.ts.map
