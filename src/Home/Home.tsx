import { gql, useQuery } from "@apollo/client"
import React, { useEffect } from "react"
import { getCharacters } from "./gql/getCharacters"

const Home = () => {
  const { data, error } = useQuery(getCharacters)

  useEffect(() => {
    console.log(data, error)
  }, [data])

  return (
    <div>
      {error && <p>error</p>}
      {data && <p>Success</p>}
    </div>
  )
}

export default Home
