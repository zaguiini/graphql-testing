import React from 'react'
import { useQuery } from '@apollo/client'

import getContinents from '~core/queries/getContinents.gql'

const Continents = () => {
  const { data, loading, error } = useQuery(getContinents)

  if (data) {
    return (
      <ul>
        {data.map(({ code, name }) => (
          <li key={code}>{name}</li>
        ))}
      </ul>
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
