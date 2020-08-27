import React from 'react'

import { useGetContinentsQuery } from '~operations'

const Continents = () => {
  const { data, loading } = useGetContinentsQuery()

  const content = data ? (
    <ul>
      {data.continents.map(({ code, name }) => (
        <li key={code} data-testid='continent'>
          {name}
        </li>
      ))}
    </ul>
  ) : (
    <p>{loading ? 'Loading...' : 'Something went wrong, dude...'}</p>
  )

  return (
    <div style={{ margin: 16 }}>
      <p>A list of continents:</p>
      {content}
    </div>
  )
}

Continents.defaultProps = {}

Continents.displayName = 'Continents'

export default Continents
