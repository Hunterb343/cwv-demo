import { FC } from "react"
import styles from "./hero.module.scss"
import { PictureCarfoxPresents } from "./pictureCarfoxPresents/pictureCarfoxPresents"

const ITEMS = [
  "NextJs",
  "Stencils",
  "Typescript",
  "SCSS",
  "Auth0 Client Setup",
  "Global Header & Footer",
  "Env Settings",
  "Jest Setup",
  "Package json QoL Scripts",
  "Configs",
  "Suggested Patterns",
]

export const Hero: FC = () => (
  <section className={styles.root}>
    <div className={styles.flex}>
      <div className={styles.image}>
        <PictureCarfoxPresents />
      </div>
      <div className={styles.content}>
        <h1 className={styles.heading}>Create Carfax App</h1>
        <p>
          create-carfax-app is a boilerplate to accelerate development. We added our battle tested tools, technologies
          and configs on top of the venerable NextJs framework.
        </p>
        <ul className={styles.featureList}>
          {ITEMS.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)

export default Hero
