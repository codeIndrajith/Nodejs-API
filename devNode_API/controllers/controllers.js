// @desc    Get all controllers
// @route   Get /api/v1/controllers
// @access  Public

exports.getControllers = ( req , res , next) => {
    res.status(200).json({ success : true , msg : "Show all controllers" })
}

// @desc    Get data
// @route   Get /api/v1/controller/:id
// @access  Public

exports.getController = ( req , res , next) => {
    res.status(200).json({ success : true , data : { id : 1} })
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

exports.updateController = ( req , res , next) => {
    res.status(200).json({ success : true , msg : `Update in id : ${req.params.id} `})
}

// @desc    delete controllers
// @route   DELETE /api/v1/controllers/:id
// @access  Private

exports.deleteController = ( req , res , next) => {
    res.status(200).json({ success : true , msg : `Delete in id : ${req.params.id}` })
}


