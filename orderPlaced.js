document.cookie = "orderId="+0 +",counter="+0

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

let httpRequest = new XMLHttpRequest(),
jsonArray,
method = "GET",
jsonRequestURL = "https://6168d48e09e030001712c0e0.mockapi.io/ordenes/"+today.getMinutes();

httpRequest.open(method, jsonRequestURL, true);
httpRequest.onreadystatechange = function()
{
    if(httpRequest.readyState === 4 && httpRequest.status === 200)
    {
        // convert JSON into JavaScript object
        jsonArray = JSON.parse(httpRequest.responseText)
        console.log(jsonArray)    
        jsonArray.push(
            {
                "id": (jsonArray.length)+1,"date":today,"amount":["counter"] ,"product":["userOrder"]
            })

        // send with new request the updated JSON file to the server:
        httpRequest.open("POST", jsonRequestURL, true)
        httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        httpRequest.send(jsonArray)
    }
}
httpRequest.send(null);
