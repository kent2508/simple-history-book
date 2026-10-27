import { useEffect, useState } from 'react'
import { periods as staticPeriods, type Period } from '../data/periods'
import { supabase } from '../lib/supabase'

interface UsePeriodsResult {
  periods: Period[]
  loading: boolean
  /** Nguồn dữ liệu thực tế đang dùng */
  source: 'supabase' | 'static'
  error: string | null
}

/**
 * Nạp danh sách triều đại. Nếu Supabase đã cấu hình và có bảng `periods`,
 * dữ liệu lấy từ đó; ngược lại dùng dữ liệu tĩnh đóng gói sẵn.
 */
export function usePeriods(): UsePeriodsResult {
  const [periods, setPeriods] = useState<Period[]>(staticPeriods)
  const [loading, setLoading] = useState<boolean>(supabase !== null)
  const [source, setSource] = useState<'supabase' | 'static'>('static')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!supabase) return

    let active = true

    supabase
      .from('periods')
      .select('*')
      .order('start_year', { ascending: true })
      .then(({ data, error }) => {
        if (!active) return

        if (error || !data || data.length === 0) {
          // Không có bảng/không có dữ liệu: giữ dữ liệu tĩnh
          if (error) setError(error.message)
          setSource('static')
        } else {
          setPeriods(data as unknown as Period[])
          setSource('supabase')
        }
        setLoading(false)
      })

    return () => {
      active = false
    }
  }, [])

  return { periods, loading, source, error }
}
