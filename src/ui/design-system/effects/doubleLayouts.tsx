interface dbLayoutsProps{
    children : React.ReactNode;
}

export const DoubleLayouts = ({children}:dbLayoutsProps) => {
  return (
    <span className='relative text-amber-700'>{children}<span className="text-amber-400 absolute -top-0.5 left-0">{children}</span></span>
  )
}