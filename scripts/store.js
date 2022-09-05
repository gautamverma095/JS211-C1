let data=JSON.parse(localStorage.getItem("mobile_data"))||[];

append(data);

function append(data){
    let container=document.getElementById("mobile_list");
    container.innerHTML="";
    data.forEach((el,index)=>{
        let img=document.createElement("img");
        img.src=el.image;
        let br=document.createElement("p");
        br.innerText=el.brand;
        let nam=document.createElement("p");
        nam.innerText=el.name;
        let rate=document.createElement("p");
        rate.innerText=el.price;
        let remove=document.createElement("button");
        remove.innerText="REMOVE";
        remove.setAttribute("class","remove");
        remove.addEventListener("click",function(){
            del(index)
        });
        let box=document.createElement("div");
        box.setAttribute("class","mobile");
        box.append(img,br,nam,rate,remove);
        container.append(box);
    })
};

function del(index){
      data.splice(index,1);
      localStorage.setItem("mobile_data",JSON.stringify(data));
      window.location.reload();
};
document.getElementById("select_filter").addEventListener("change",function(){
    let fil=document.getElementById("select_filter");
    let filtered=data.filter((el)=>{
        return el.brand===fil.value
    });
    append(filtered)
});

document.getElementById("sort_lth").addEventListener("click",function(){
    data.sort((a,b)=>{
        return a.price-b.price;

    });append(data)
})

document.getElementById("sort_htl").addEventListener("click",function(){
    data.sort((a,b)=>{
        return b.price-a.price;

    });append(data)
})

   