import { useEffect } from 'react'

export const useDebounce = (value: any, setValue: Function, timer: number) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      setValue(value)
    }, timer)
    return () => {
      clearTimeout(timerId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])
}
