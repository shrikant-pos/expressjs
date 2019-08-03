module.exports.session_invalid = function(req, res, next){
  // if (Date.now() > 1544945400000) {
  //   res.status('501').send( {
  //     status: 501
  //   , url: req.originalUrl 
  //   }); 
  // }
  // else 
  if(req.session === undefined){
    res.status('401').send( {
      status: 401
    , url: req.originalUrl 
    });
  }  
  else {    
    return next() //otherwise continue
  }
}

module.exports.not_implemented = function(req, res, next){
  // the status option, or res.statusCode = 404
  // are equivalent, however with the option we
  // get the "status" local available as well
  //res.status('404').send({ status: 404, url: req.url });
  res.sendStatus(501);
}

module.exports.page_not_found = function(req, res, next){
    // the status option, or res.statusCode = 404
    // are equivalent, however with the option we
    // get the "status" local available as well
    //res.status('404').send({ status: 404, url: req.url });
    res.sendStatus(404);
}

module.exports.page_error = function(err, req, res, next){
  // we may use properties of the error object
  // here and next(err) appropriately, or if
  // we possibly recovered from the error, simply next().
  res.status('500').send( {
      status: err.status || 500
    , error:  err.message || 'something went wrong'
  });
}

module.exports.asyncHandler = fn => (req, res, next) =>
Promise
  .resolve(fn(req, res, next))
  .catch(next)