const bcrypt = require('bcrypt');
const {User} = require('../models/models');
const jwt = require('jsonwebtoken');
const ApiError = require('../error/ApiError');

const generateJWT = (id, username, role) => {
   return jwt.sign(
      {id, username, role}.
      process.env.SECRET_KEY,
      {expiresIn: '24h'}
   )
}

class UserController{
   async registration(req, res, next){
      const {username, password, role} = req.body
      if(!username || !password){
         return next(ApiError.badRequest("Enter username and password"))
      }
      const candidate = await User.findOne({where:{username}})
      if(candidate){
         return next(ApiError.badRequest("The user already exists"))
      }
      const hashPassword = await bcrypt.hash(password, 4)
      const user = await User.create({username, role, password: hashPassword})
      const token = generateJWT(user.id, user.username, user.role)
      return res.json({token})
   }
   async login(req, res, next){
      const {username, password} = req.body
      const user = await User.findOne({where:{username}})
      if(!user){
         return next(ApiError.internal('User not found'))
      }
      let comparePassword = bcrypt.compareSync(password, user.password)
      if(!comparePassword){
         return next(ApiError.badRequest('Invalid password'))
      }
      const token = generateJWT(user.id, user.username, user.role)
      return res.json({token})
   }
   async check(req, res){
      const token = generateJWT(req.user.id, req.user.username, req.user.role)
      return res.json({token})
   }
}

module.exports = new UserController()