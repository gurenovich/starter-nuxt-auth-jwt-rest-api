const { Strategy, ExtractJwt } = require('passport-jwt')
const { prisma } = require('../prisma/generated/prisma-client')
const { JWT } = require('../keys')

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT
}

module.exports = new Strategy(options, async (payload, done) => {
  try {
    const candidate = await prisma.user({ id: payload.userId })

    if (candidate) {
      done(null, candidate)
    } else {
      done(null, false)
    }
  } catch (error) {
    console.error(error)
  }
})
