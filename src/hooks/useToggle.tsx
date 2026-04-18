import { useCallback, useState } from "react"

interface ToggleProps {
    init?: boolean,
}

export const useToggle = ({init = false}:ToggleProps={}) => {

    const [ value, setValue ] = useState<boolean>(init);
    const toggle = useCallback(() => setValue((prev) => !prev), [])
    
  return {
    value,
    setValue,
    toggle
  }
}
