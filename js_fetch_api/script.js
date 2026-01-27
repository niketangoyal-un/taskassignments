async function getUserData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        let s="";
    data.forEach(element => {
        s+=`<div class="card" style="width: 18rem;">
  
  <div class="card-body">
    <h5 class="card-title">${element.name}</h5>
    <p class="card-text">${element.email}</p>
        <p class="card-text">${element.phone}</p>
    <p class="card-text">${element.username}</p>

    <a href="${element.website}" class="btn btn-primary">${element.website}</a>
  </div>
</div>`;
    });
    console.log(data);
    return s;
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}
const getdata=async()=>{

   
    let users=document.getElementsByClassName("users");
    users[0].innerHTML= await getUserData();;
}
getdata()