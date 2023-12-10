const Cars = require('./cars-model');
const vinValidator = require('vin-validator');
const db = require('../../data/db-config.js');
//const knex = require('knex')

// const db = knex({
//   client: 'sqlite3',
//   connection: {
//     filename: './data/dealer.db3'
//   },
//   useNullAsDefault: true
// });

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const car = await Cars.getById(req.params.id);
    if(!car){
      //next({status:404, message: `car with id ${req.params.id} is not found`})
      res.status(404).json({message:`car with id ${req.params.id} is not found`})
    } else {
      req.car = car;
      next();
    }
  } catch(error){
    next(error);
  }
}

const checkCarPayload =  (req, res, next) => {
  // DO YOUR MAGIC
  const { vin, make, model, mileage} = req.body;
  const error = { status : 400 }

  if(vin === undefined){
    next({status: 400, message: `vin is missing`})
  } else if(make === undefined){
    next({status: 400, message: `make is missing`})
  } else if(model === undefined){
    next({status: 400, message: `model is missing`})
  } else if(mileage === undefined){
    next({status: 400, message: `mileage is missing`})
  } 

  if(error.message){
    next(error)
  } else {
    next()
  }
};

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const {vin} = req.body;

  if(!vinValidator.validate(vin)){
    next({status: 400, message: `vin ${vin} is invalid`})
  } else {
    next()
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  const { vin } = req.body;
  try {
    const existing = await db('cars')
      .where('vin',vin)
      .first()
      if(existing){
        res.status(404).json({message: `vin ${vin} already exists`});
      } else {
        next()
      } 
  } catch(error){
    next(error);
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}