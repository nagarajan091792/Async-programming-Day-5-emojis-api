async function foo () {
  try{
  let res =  await fetch("https://emojihub.herokuapp.com/api/random")
  var res1=  await res.json()
  
  
  console.log(res1)
      var div = document.createElement("div");
      div.innerHTML=`
      <div class="card text-white  mb-3 card_center">
<div  class="card-header bg-primary"><h4>Welcome to Emoji Hub</h4></div>
<div class="card-body bg-danger">
<h6>Emoji</h6>
<div>${res1.htmlCode}</div>
<h6>Name</h6>
<p class="card-text">${res1.name}</p>
<h6>Category</h6>
<p class="card-text">${res1.category}</p>
<h6>Group</h6>
  <p class="card-text">${res1.group}</p>
</div>
</div>
      `
      document.body.append(div);
  }

catch(error){
  console.log(error)
 
}
}
foo()
