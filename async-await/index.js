async function a(){
  console.log("a");
}
async function b(){
  console.log("b");
}
async function c(){
  console.log("c");
}

async function d(){
  await a();
  await b();
  await c();
  console.log("d");
}
d().then(()=>{}).catch(e => console.log(e));
