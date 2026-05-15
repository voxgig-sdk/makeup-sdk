
import { Context } from './Context'


class MakeupError extends Error {

  isMakeupError = true

  sdk = 'Makeup'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  MakeupError
}

