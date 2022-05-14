exports.success = function(req, res, mensaje,status){

    const statusCode = status || 201;

    res.status(statusCode).send({
        error: false,
        status: statusCode,
        body: mensaje,

    });
}

exports.error = function(req, res, mensaje,status){

    const statusCode = status || 401;

    res.status(statusCode).send({
        error: true,
        status: statusCode,
        body: mensaje,

    });
}