import React from 'react'

export default function InputField({type, name, placeholder}) {
  return (
    <div>
        <input type={type} name={name} placeholder={placeholder} />
    </div>
  )
}
