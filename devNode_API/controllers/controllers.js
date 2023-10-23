const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')
const Bootcamp = require('../models/Bootcamp');
const geocoder = require('../utils/geocoder')

// @desc    Get all controllers
// @route   Get /api/v1/controllers
// @access  Public

exports.getControllers = asyncHandler(async( req , res , next) => {
    
        const bootcamp = await Bootcamp.find();
        res.status(200).json({ success : true , count : bootcamp.length , data : bootcamp })
    
    
});

// @desc    Get all controllers
// @route   Get /api/v1/controllers/:id
// @access  Public

exports.getControllerId = asyncHandler(async ( req , res , next) => {
    
        const bootcamp = await Bootcamp.findById(req.params.id);
        if(!bootcamp) {
           return  next(new ErrorResponse(`Bootcamp not found with id of ${req.param.id}` , 400));
        }else {
            res.status(200).json({ success : true , data : bootcamp })
        }
        
    
});

// @desc    POST data
// @route   POST /api/v1/controller/
// @access  Public

exports.getController = asyncHandler(async ( req , res , next) => {
    // console.log(req.body)
    // res.status(200).json({ success : true , msg : "Post request" })


    // send the data another way
    
        const bootcamp = await Bootcamp.create(req.body);

        res.status(201).json({
        success : true,
        data : bootcamp
    })
    
});

// @desc    create new controllers
// @route   POST /api/v1/controllers
// @access  Private

exports.createController = ( req , res , next) => {
    res.status(200).json({ success : true , msg : "create new development" })
}

// @desc    update controllers
// @route   PUT /api/v1/controllers/:id
// @access  Private

exports.updateController = asyncHandler(async ( req , res , next) => {
    
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id , req.body , {
            new : true,
            runValidators : true
        });
    
        if(!bootcamp) {
            return  next(new ErrorResponse(`Bootcamp not found with id of ${req.param.id}` , 400));
        }
        res.status(200).json({ success : true , data : bootcamp})
   
})

// @desc    delete controllers
// @route   DELETE /api/v1/controllers/:id
// @access  Private

exports.deleteController = asyncHandler(async ( req , res , next) => {

   
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    
        if(!bootcamp) {
            return  next(new ErrorResponse(`Bootcamp not found with id of ${req.param.id}` , 400));
        }
        res.status(200).json({ success : true , data : {}})
})

// @desc    Get bootcamp within a radius
// @route   DELETE /api/v1/controllers/radius/:zipcode/:distance
// @access  Private

exports.getBootcampInRadius = asyncHandler(async ( req , res , next) => {
    const {zipcode , distance} = req.params;

    // get lat/lon form geocoder
    const loc = await geocoder.geocode(zipcode);
    const lat = loc[0].latitude;
    const lng = loc[0].longitude;

    // calc radius using radians
    // divide dist by radius of earth
    // Earth radius = 3,963 mi / 6,378 km

    const radius = distance / 3963;

    const bootcamps = await Bootcamp.find({
        location : {$geoWithin: { $centerSphere: [ [ lng, lat ], radius ] }}
    });

    res.status(200).json({
        success: true,
        count: bootcamps.length,
        data: bootcamps
    });

})
