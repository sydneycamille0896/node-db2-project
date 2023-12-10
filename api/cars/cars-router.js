// DO YOUR MAGIC
const router = require('express').Router();
const Cars = require('./cars-model');
const {checkCarId,checkCarPayload,checkVinNumberValid,checkVinNumberUnique} = require('./cars-middleware');

router.get('/', async (req,res,next)=>{
    try {
        const data = await Cars.getAll();
        res.json(data);
    } catch(error){
        next(error);
    }
})

router.get('/:id', checkCarId, async (req,res,next)=>{
    try{
        console.log(req.body);
        const data = await Cars.getById(req.params.id);
        res.json(data);
    } catch(error){
        next(error)
    }
})

router.post('/', checkCarPayload,checkVinNumberUnique,checkVinNumberValid,  async (req,res,next) => {
    try {
        // const data = await Cars.create({
        //     vin: req.body.vin,
        //     make: req.body.make,
        //     model: req.body.model,
        //     mileage: req.body.mileage,
        //     title: req.body.title,
        //     transmission: req.body.transmission
        // });
        const data = await Cars.create(req.body);
        res.status(201).json(data);
        console.log(data);
    } catch(error){
        next(error)
    }
})

router.use((err,req,res,next)=>{ // eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = router;
