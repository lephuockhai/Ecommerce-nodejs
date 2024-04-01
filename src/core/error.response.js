'use strict'
const StatusCode = {
    
    //4xx Client Error
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUEST: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOW : 405,
    NOT_ACCESSTABLE: 406,
    PROXY_AUTHEN_REQUIRE: 407,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    GONE: 410,
    LENGTH_REQUIRED: 411,
    PRECONDITION_FAILED: 412,
    REQUEST_TOO_LARGE: 413,
    REQUEST_URL_TOO_LONG: 414,
    UNSUPPORTED_MEDIA_TYPE: 415,
    RANGE_NOT_SATISFIABLE: 416,
    EXPECTATION_FAILED: 417,

    // 5xx Server Error
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVALIABLE: 503,
    GATEWAY_TIMEOUT: 504,
    HTTP_VERSION_NOT_SUPPORTED: 505,
    NETWORK_AUTHEN_REQUIRED: 511
}

const ReasonStatusCode = {

    //4xx Client Error
    BAD_REQUEST: 'The request cannot be fulfilled due to bad syntax',
    UNAUTHORIZED: 'The request was a legal request, but the server is refusing to respond to it. For use when authentication is possible but has failed or not yet been provided',
    PAYMENT_REQUEST: 'Reserved for future use',
    FORBIDDEN: 'Bad request error',
    NOT_FOUND: 'The requested page could not be found but may be available again in the future    ',
    METHOD_NOT_ALLOW : 'A request was made of a page using a request method not supported by that page',
    NOT_ACCESSTABLE: 'The server can only generate a response that is not accepted by the client',
    PROXY_AUTHEN_REQUIRE: 'The client must first authenticate itself with the proxy',
    REQUEST_TIMEOUT: 'The server timed out waiting for the request',
    CONFLICT: 'The request could not be completed because of a conflict in the request',
    GONE: 'The requested page is no longer available',
    LENGTH_REQUIRED: 'The "Content-Length" is not defined. The server will not accept the request without it',
    PRECONDITION_FAILED: 'The precondition given in the request evaluated to false by the server',
    REQUEST_TOO_LARGE: 'The server will not accept the request, because the request entity is too large',
    REQUEST_URL_TOO_LONG: 'The server will not accept the request, because the URI is too long. Occurs when you convert a POST request to a GET request with a long query information',
    UNSUPPORTED_MEDIA_TYPE: 'The server will not accept the request, because the media type is not supported',
    RANGE_NOT_SATISFIABLE: 'The client has asked for a portion of the file, but the server cannot supply that portion',
    EXPECTATION_FAILED: 'The server cannot meet the requirements of the Expect request-header field',

    // 5xx Server Error
    INTERNAL_SERVER_ERROR: 'A generic error message, given when no more specific message is suitable',
    NOT_IMPLEMENTED: 'The server either does not recognize the request method, or it lacks the ability to fulfill the request',
    BAD_GATEWAY: 'The server was acting as a gateway or proxy and received an invalid response from the upstream server',
    SERVICE_UNAVALIABLE:'The server is currently unavailable (overloaded or down)',
    GATEWAY_TIMEOUT: 'The server was acting as a gateway or proxy and did not receive a timely response from the upstream server',
    HTTP_VERSION_NOT_SUPPORTED: 'The server does not support the HTTP protocol version used in the request',
    NETWORK_AUTHEN_REQUIRED: 'The client needs to authenticate to gain network access'
}

//viet class ke thua Error cua JS
class ErrorRespone extends Error{
    constructor (message, status) {
        super(message)
        this.status = status
    }
}

//kế thừa xong thì bây giò sẽ viết các class lỗi 
class BadRequestError extends ErrorRespone {
    constructor (message =  ReasonStatusCode.FORBIDDEN, statusCode = StatusCode.FORBIDDEN) {
        super(message, statusCode)
    }
}

class ConflictRequestError extends ErrorRespone {
    constructor (message =  ReasonStatusCode.CONFLICT, statusCode = StatusCode.CONFLICT) {
        super(message, statusCode)
    }
}


module.exports = {
    ConflictRequestError, 
    BadRequestError
}