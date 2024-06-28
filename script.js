let search = document.getElementById('search');
let searchBar = document.getElementById('searchbar');
console.log(search);
console.log(searchBar);
search.addEventListener("click",()=>{
if(searchBar.style.display=="block"){
searchBar.style.display="none"
}else{
  searchBar.style.display="block"
}
})