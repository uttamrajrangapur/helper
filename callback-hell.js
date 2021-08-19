function functionA (done) {
  setTimeout(function () {
    done(null, "functionA")
  }, 100)
}

function functionB (done) {
  setTimeout(function () {
    done(null, "functionB")
  }, 300)
}
function runSequentially (callback) {
  functionA((err, data) => {
    if (err) return callback(err)
    console.log(data)   // results of a
  
    functionB((err, data) => {
      if (err) return callback(err)
      console.log(data) // results of b
  
      // here you can continue running more tasks
    })
  })
}
runSequentially((err, val) => {
  if(err){
    console.log(err);
  }else {
    console.log(val);
  }
});