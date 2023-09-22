/* eslint-disable prettier/prettier */
import { FC, useEffect, useState } from "react"
import styles from "./resources.module.scss"
import { SpinnerFox } from "@carfax-stencils/spinner"
import axios from "axios"
import Button from "@carfax-stencils/button"
import Card from "@carfax-stencils/card"
import { Modal, ModalHeader, ModalBody } from "@carfax-stencils/modal"
import { getCatByTemperament, fireMarketingAndAnalytics } from "../../../utils/utils"

export const Resources: FC = () => {
  const [thronesSRC, setThronesSRC] = useState<any[]>([])
  const [cats, setCats] = useState(null)
  const [visible, setVisible] = useState(false)
  const [activeCharacter, setActiveCharacter] = useState({
    fullName: "Cat",
    family: "Targaryen",
  })
  const [characterCatSRC, setCharacterCatSRC] = useState(null)

  const getThronesImages = async () => {
    try {
      const response = await axios.get("https://thronesapi.com/api/v2/Characters")
      setThronesSRC(response.data)
      setActiveCharacter(response.data[0])
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  const getCats = async () => {
    try {
      const response = await axios.get("https://api.thecatapi.com/v1/breeds", {
        headers: {
          "x-api-key": "live_vAap842HjOzn76VXxrYLgWhieOfAGSTfSHE2vLoMEdmkUXzzNvklLKHKRbp48uSp",
        },
      })
      const tempList = response.data.map((cat: { id: any; temperament: any }) => ({
        id: cat.id,
        temperament: cat.temperament,
      }))

      setCats(tempList)
    } catch (error) {
      console.error(error)
    }
  }

  const getCharacterCat = async (character: { family: any }) => {
    const characterCat = getCatByTemperament(character.family, cats)

    try {
      const response = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${characterCat.id}`, {
        headers: {
          "x-api-key": "live_vAap842HjOzn76VXxrYLgWhieOfAGSTfSHE2vLoMEdmkUXzzNvklLKHKRbp48uSp",
        },
      })

      setCharacterCatSRC(response.data[0].url)
    } catch (error) {
      console.error(error)
    }
    return
  }

  const getThronesCats = async () => {
    await getThronesImages()
    await getCats()
  }

  useEffect(() => {
    getThronesCats()
  }, [])

  return (
    <div className={styles.root}>
      {thronesSRC.length === 0 ? (
        <SpinnerFox />
      ) : (
        thronesSRC.map((character, charIndex) => (
          <Card className={styles.GoT} key={character.id} padding={24}>
            <img
              src={character.imageUrl}
              alt="game of thrones"
              loading={charIndex === 0 ? "eager" : "lazy"}
              fetchpriority={charIndex === 0 ? "high" : "low"}
            />
            <div>
              <h4>{character.fullName}</h4>
              <p>{character.title}</p>
              <p>{character.family}</p>
            </div>
            <Button
              onClick={async () => {
                await fireMarketingAndAnalytics(cats)
                setVisible(true)
                setActiveCharacter(character)
                getCharacterCat(character)
              }}
              theme="blue"
            >
              Find my Cat!
            </Button>
          </Card>
        ))
      )}

      <Modal
        isVisible={visible}
        onClose={() => {
          setVisible(false)
          setCharacterCatSRC(null)
        }}
      >
        <ModalHeader>{activeCharacter.fullName}</ModalHeader>
        <ModalBody>
          <div>{characterCatSRC ? <img src={characterCatSRC} alt="characters matching cat" /> : <span />}</div>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default Resources
