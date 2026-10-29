import { useEffect, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface ModalPortalProps {
  children: ReactNode
  onClose: () => void
}

/**
 * Render nội dung modal ra thẳng document.body qua portal, để nó không bị
 * giới hạn bởi stacking context của phần tử cha (ví dụ auth bar có
 * position: sticky + backdrop-filter). Nhờ vậy overlay luôn phủ trên toàn trang.
 */
function ModalPortal({ children, onClose }: ModalPortalProps) {
  // Đóng bằng phím Esc
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return createPortal(children, document.body)
}

export default ModalPortal
