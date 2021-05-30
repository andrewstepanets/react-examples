import { useRef, useEffect } from 'react'

const IputWithLabel = ({ id, label, value, type = "text", onIputchange, isFocused, children }) => {
  const inputRef = useRef()
  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isFocused])
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input ref={inputRef} id={id} type={type} value={value} onChange={onIputchange} autoFocus={isFocused} />
    </>
  )
}

export default IputWithLabel