import { FC, ReactNode } from "react"
import styles from "./appLayout.module.scss"

export interface IAppLayoutProps {
  children: ReactNode
}

export const AppLayout: FC<IAppLayoutProps> = ({ children }) => {
  return <div className={styles.root}>{children}</div>
}

export default AppLayout
