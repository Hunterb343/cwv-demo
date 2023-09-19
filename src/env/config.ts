import { useMemo } from "react"
import { useEnvLevel, LevelType } from "./envLevel"

export interface IEnvConfig {}

const production: IEnvConfig = {}

const staging: IEnvConfig = {
  ...production,
}

const development: IEnvConfig = {
  ...staging, // Same as staging
}

const local: IEnvConfig = {
  ...development, // Same as development
}

export const getEnvConfig = (level: LevelType) =>
  Object.freeze(
    {
      development,
      local,
      production,
      staging,
    }[level],
  )

export const useEnvConfig = () => {
  const level = useEnvLevel()
  return useMemo(() => getEnvConfig(level), [level])
}
