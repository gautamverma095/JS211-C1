/*
Use local storage as your database. And store data with key as "mobile_data". The mobile object will be :-
{
brand: String,
name: String,
price: Number,
image: String
}

Example:- 
{
brand: "apple", (oneplus/nokia)
name: "Iphone 13",
price: 74000,
image: "https://www.iphone.com/image.jpg"
}

*/
function create(brand,name,price,image){
    this.brand=brand;
    this.name=name;
    this.price=Number(price);
    this.image=image;
}

document.querySelector("form").addEventListener("submit",getdata);

function getdata(event){
    event.preventDefault();

   let brand=document.getElementById("mobile_brand").value;
   let name=document.getElementById("mobile_name").value;
   let price=document.getElementById("mobile_price").value;
   let image=document.getElementById("mobile_image").value;

   let p=new create(brand,name,price,image);

   let data=JSON.parse(localStorage.getItem("mobile_data"))||[];
   data.push(p)
   localStorage.setItem("mobile_data",JSON.stringify(data))
   window.location.reload()

}