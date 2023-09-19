import { useEffect, useState } from "react"

export type LevelType = "local" | "development" | "staging" | "production"

export const LEVEL = {
  LOCAL: "local" as LevelType,
  DEVELOPMENT: "development" as LevelType,
  STAGING: "staging" as LevelType,
  PRODUCTION: "production" as LevelType,
}

export const getEnvLevel = (): LevelType => {
  switch (true) {
    case originContainsString("localhost"):
      return LEVEL.LOCAL
    case originContainsString("alpha"):
    case originContainsString("development"):
      return LEVEL.DEVELOPMENT
    case originContainsString("beta"):
    case originContainsString("staging"):
    case originContainsString("www-qa"):
    case originContainsString("www-dev"):
      return LEVEL.STAGING
    default:
      return LEVEL.PRODUCTION
  }
}

const originContainsString = (target: string) => {
  try {
    return window.location.origin.indexOf(target) > -1
  } catch (_) {
    return false
  }
}

export const useEnvLevel = () => {
  const [level, setLevel] = useState<LevelType>(LEVEL.PRODUCTION)

  useEffect(() => {
    setLevel(getEnvLevel())
  }, [])

  return level
}
