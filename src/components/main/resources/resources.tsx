/* eslint-disable prettier/prettier */
import { FC, useEffect, useState } from "react"
import styles from "./resources.module.scss"
import { SpinnerFox } from "@carfax-stencils/spinner"
import axios from "axios"
import Card from "@carfax-stencils/card"

export const Resources: FC = () => {
  const [thronesSrc, setThronesSrc] = useState<any[]>([])

  useEffect(() => {
    axios
      .get("https://thronesapi.com/api/v2/Characters")
      .then((response) => {
        setThronesSrc(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div className={styles.root}>
      {thronesSrc.length === 0 ? (
        <SpinnerFox />
      ) : (
        thronesSrc.map((character) => (
          <Card className={styles.GoT} key={character.id} padding={24}>
            <img src={character.imageUrl} alt="game of thrones" />
            <div>
              <h4>{character.fullName}</h4>
              <p>{character.title}</p>
              <p>{character.family}</p>
            </div>
          </Card>
        ))
      )}
    </div>
  )
}

//leverage flex box (test in elements)
//vertical & horizontal alignment
export default Resources
