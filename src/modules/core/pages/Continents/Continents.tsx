import React from 'react'

import { useGetContinentsQuery } from '~operations'

const Continents = () => {
  const { data, loading, error } = useGetContinentsQuery()

  if (data) {
    return (
      <div style={{ margin: 16 }}>
        <p>A list of continents:</p>
        <ul>
          {data.continents.map(({ code, name }) => (
            <li key={code}>{name}</li>
          ))}
        </ul>
      </div>
    )
  }

  if (loading) {
    return <span>Loading...</span>
  }

  if (error) {
    return <span>Something went wrong...</span>
  }

  return null
}

Continents.defaultProps = {}

Continents.displayName = 'Continents'

export default Continents
