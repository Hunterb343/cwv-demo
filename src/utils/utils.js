import axios from "axios"

export const getCatByTemperament = (name, cats) => {
  switch (name) {
    case name.includes("Stark"):
      return cats.find((cat) => cat.temperament.includes("Loyal"))
    case "House Targaryen":
      return cats.find((cat) => cat.temperament.includes("Agile"))
    case "House Tarly":
      return cats.find((cat) => cat.temperament.includes("Warm"))
    case name.includes("Baratheon"):
      return cats.find((cat) => cat.temperament.includes("Outgoing"))
    case "House Lannister":
      return cats.find((cat) => cat.temperament.includes("Demanding"))
    case name.includes("Greyjoy"):
      return cats.find((cat) => cat.temperament.includes("Independent"))
    case "House Lanister":
      return cats.find((cat) => cat.temperament.includes("Demanding"))
    case "House Clegane":
      return cats.find((cat) => cat.temperament.includes("Dependent"))
    case "House Baelish":
      return cats.find((cat) => cat.temperament.includes("Intelligent"))
    case "House Seaworth":
      return cats.find((cat) => cat.temperament.includes("Gentle"))
    case name.includes("Tyrell"):
      return cats.find((cat) => cat.temperament.includes("Playful"))
    case "Free Folk":
      return cats.find((cat) => cat.temperament.includes("Mischievous"))
    case "Tarth":
      return cats.find((cat) => cat.temperament.includes("Active"))
    case "Naathi":
      return cats.find((cat) => cat.temperament.includes("Active"))
    case "Targaryan":
      return cats.find((cat) => cat.temperament.includes("Clever"))
    case name.includes("Bolton"):
      return cats.find((cat) => cat.temperament.includes("Energetic"))
    case name.includes("Mormont"):
      return cats.find((cat) => cat.temperament.includes("Interactive"))
    case "Sparrow":
      return cats.find((cat) => cat.temperament.includes("Affectionate"))
    case "Viper":
      return cats.find((cat) => cat.temperament.includes("Highly interactive"))
    default:
      return cats.find((cat) => cat.temperament.includes("Friendly"))
  }
}

export const fireMarketingAndAnalytics = (cats) => {
  let count = 500

  while (count > 0) {
    count--

    sleep(100)

    getBreed(cats[0].id)
  }

  return count
}

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const getBreed = async (breed) => {
  sleep(50)
  try {
    const response = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`, {
      headers: {
        "x-api-key": "live_vAap842HjOzn76VXxrYLgWhieOfAGSTfSHE2vLoMEdmkUXzzNvklLKHKRbp48uSp",
      },
    })

    return response
  } catch (error) {
    console.error(error)
  }
}
