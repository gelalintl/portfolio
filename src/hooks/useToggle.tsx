import { useState } from "react"

interface ToggleProps {
    init?: boolean,
}

export const useToggle = ({init = false}:ToggleProps={}) => {

    const [ value, setValue ] = useState<boolean>(init);
    const toggle = () => setValue(!value)
    
  return {
    value,
    setValue,
    toggle
  }
}
