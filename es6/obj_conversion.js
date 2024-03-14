var userdata = {
    name:"AJ",
    gender:"Male",
    mobile:123456789
}

// to convert object into string
console.log(userdata);
var mydata = JSON.stringify(userdata);
console.log(mydata)

//string to object
var objdata = JSON.parse(mydata)
console.log(objdata)