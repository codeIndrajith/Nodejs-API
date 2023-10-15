const Bootcamp = require('../models/Bootcamp');

// @desc    Get all controllers
// @route   Get /api/v1/controllers
// @access  Public

exports.getControllers = async ( req , res , next) => {
    try {
        const bootcamp = await Bootcamp.find();
        res.status(200).json({ success : true , count : bootcamp.length , data : bootcamp })
    } catch(err) {
        res.status(400).json({success : false})
    }
};

// @desc    Get all controllers
// @route   Get /api/v1/controllers/:id
// @access  Public

exports.getControllerId = async ( req , res , next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);
        if(!bootcamp) {
            res.status(400).json({success : false , msg : "Data is not in database"})
        }else {
            res.status(200).json({ success : true , data : bootcamp })
        }
        
    } catch(err) {
        res.status(400).json({success : false})
    }
};

// @desc    POST data
// @route   POST /api/v1/controller/
// @access  Public

exports.getController = async ( req , res , next) => {
    // console.log(req.body)
    // res.status(200).json({ success : true , msg : "Post request" })


    // send the data another way
    try {
        const bootcamp = await Bootcamp.create(req.body);

        res.status(201).json({
        success : true,
        data : bootcamp
    })
    } catch (err) {
        res.status(400).json({success : false})
    }
}

// @desc    create new controllers
// @route   POST /api/v1/controllers
// @access  Private

exports.createController = ( req , res , next) => {
    res.status(200).json({ success : true , msg : "create new development" })
}

// @desc    update controllers
// @route   PUT /api/v1/controllers/:id
// @access  Private

exports.updateController = async ( req , res , next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id , req.body , {
            new : true,
            runValidators : true
        });
    
        if(!bootcamp) {
            res.status(400).json({success : false})
        }
        res.status(200).json({ success : true , data : bootcamp})
    } catch (err) {
        res.status(400).json({success : false , msg : "update unsuccessfully"})
    }
}

// @desc    delete controllers
// @route   DELETE /api/v1/controllers/:id
// @access  Private

exports.deleteController = async ( req , res , next) => {

    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    
        if(!bootcamp) {
            res.status(400).json({success : false})
        }
        res.status(200).json({ success : true , data : {}})
    } catch (err) {
        res.status(400).json({success : false , msg : "Delete unsuccessfully"})
    }
}


