var hello = (data) =>{
    console.log("Data"+data)
}

var hey = (callback) => {
    callback("callback")
}

hey(hello)