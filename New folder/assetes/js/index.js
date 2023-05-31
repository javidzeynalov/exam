const navbar_btn = document.querySelector(".navbar_btn");
const res_nav = document.querySelector(".res_nav");



navbar_btn.addEventListener("click",function () {
    res_nav.classList.toggle("click_btn");
    
})



const cards_api = document.querySelector(".cards_api")

fetch("http://localhost:3000/ExamAPI")
.then((res)=>res.json())
.then((data)=>{
    data.forEach((item,i) => {

        if (i<4) {

            const card_get = document.createElement("div");
            card_get.classList.add("card_get");
            const img = document.createElement("img");
            img.classList.add("api_img")
            img.src=item.img;
            
            const name = document.createElement("p");
            name.classList.add("api_name");
            const header = document.createElement("h4");
            header.classList.add("api_header")
            const body = document.createElement("p");
            body.classList.add("api_body");

            name.innerText=item.name;
            header.innerText=item.header;
            body.innerText=item.body;




            cards_api.append(card_get);
            card_get.append(img,name,header,body);
        }
        
    });
})

// create start


const create = document.querySelector(".create");
const post = document.createElement("a");
post.innerText="Create";
post.href="post.html";
post.target="_blank";

create.append(post);

// create end


// delete start
const delet = document.querySelector(".delete");

delet.addEventListener("click",function () {
    fetch("http://localhost:3000/ExamAPI/5",{
        method:"delete",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'applicxation/json'
        }
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
    })
    
})

// delete end

// loadMore start
const More = document.querySelector(".more");
const load_more = document.createElement("a");
load_more.innerText="Load more";
load_more.href="more.html";
load_more.target="_blank";

More.append(load_more);

// loadMore end

