
import { Context } from './Context'


class CelestrakGpDataError extends Error {

  isCelestrakGpDataError = true

  sdk = 'CelestrakGpData'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  CelestrakGpDataError
}

