type LogLevel = 0 | 1 | 2 | 3
type LogType = "debug" | "info" | "warn" | "error"

let _level = 1

const boo = ""

export const log = {
  setLevel: (level: LogLevel) => {
    _level = level
  },
  level: {
    error: 0 as LogLevel,
    warn: 1 as LogLevel,
    info: 2 as LogLevel,
    debug: 3 as LogLevel,
  },
  error(message?: any, ...optionalParams: any[]) {
    if (log.level.error >= _level) {
      safeConsole("error", message, ...optionalParams)
    }
  },
  warn(message?: any, ...optionalParams: any[]) {
    if (log.level.warn >= _level) {
      safeConsole("warn", message, ...optionalParams)
    }
  },
  info(message?: any, ...optionalParams: any[]) {
    if (log.level.info >= _level) {
      safeConsole("info", message, ...optionalParams)
    }
  },
  debug(message?: any, ...optionalParams: any[]) {
    if (log.level.debug >= _level) {
      safeConsole("debug", message, ...optionalParams)
    }
  },
}

const safeConsole = (type: LogType, message?: any, ...optionalParams: any[]) =>
  typeof console !== undefined ? console[type](...message, ...optionalParams) : undefined

export default log
