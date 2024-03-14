var userdata = {
    name:"AJ",
    gender:"Male",
    mobile:"123456789"
}

/*to print a single key*/  console.log(userdata.name)
/*to add a new key*/ userdata.email = "abc@gmail.com"
/*to delete a key*/ delete userdata.gender
console.log(userdata)