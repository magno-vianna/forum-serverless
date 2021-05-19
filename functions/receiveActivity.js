module.exports = function receiveActivity(request, response){
    console.log(request.body)
    response.send(JSON.stringify(request.body))
}