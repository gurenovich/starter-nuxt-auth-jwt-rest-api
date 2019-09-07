const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')
const { prisma } = require('../prisma/generated/prisma-client')
const { JWT } = require('../keys')

module.exports.login = async (req, res) => {
  const candidate = await prisma.user({ login: req.body.login })

  if (candidate) {
    isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      candidate.password
    )

    if (isPasswordCorrect) {
      const token = jwt.sign(
        {
          login: candidate.login,
          userId: candidate.id
        },
        JWT,
        { expiresIn: 60 * 60 }
      )
      res.json(token)
    } else {
      res.status(401).json({ message: 'The password is incorrect' })
    }
  } else {
    res.status(404).json({ message: 'User not found' })
  }
}

module.exports.registration = async (req, res) => {
  const candidate = await prisma.user({ login: req.body.login })
  if (candidate) {
    res.status(409).json({ message: 'This login is already busy' })
  } else {
    const salt = bcrypt.genSaltSync(10)
    const user = await prisma.createUser({
      login: req.body.login,
      password: bcrypt.hashSync(req.body.password, salt)
    })
    res.status(201).json(user)
  }
}
