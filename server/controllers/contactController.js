const {Contact} = require('../models/models');
const ApiError = require('../error/ApiError');

class ContactContoller{
   async create(req, res, next){
      try {
         const{name} = req.body
         const contact = await Contact.create({name})
         return res.json(contact)
      } catch (e) {
         next(ApiError.badRequest(e.message))
      }
   }
   async getAll(req, res){
      let contacts;
      return res.json(contacts)
   }
   async getOne(req, res){
      const{id} = req.params
      const contact = await Contact.findOne(
         {
            where: {id}
         },
      )
      return res.json(contact)
   }
}
module.exports = new ContactContoller();