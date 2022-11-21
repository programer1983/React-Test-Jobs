import React from 'react'

const Select = ({value, sprtedPosts, defaultname, options}) => {
  return (
    <select
       value={value}
       onChange={(e) => sprtedPosts(e.target.value)}
    >
        <option value="">{defaultname}</option>

        {options.map((option) => (
            <option key={option.value} value={option.value}>
                {option.name}
            </option>
        ))}
    </select>
  )
}

export default Select