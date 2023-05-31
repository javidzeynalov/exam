const more_cards = document= document.querySelector(".more_cards");

fetch("http://localhost:3000/ExamAPI")
.then((res)=>res.json())
.then((data)=>{
    data.forEach((item,i) => {
        if (i<4) {
            
        
       const more_card = document.createElement("div");
      
       const img = document.createElement("img");
       const name= document.createElement("p");
       const header = document.createElement("h4");
       const body = document.createElement("p");

       img.src=item.img;
       name.innerText= item.name;
       header.innerText=item.header;
       body.innerText=item.body;

       more_cards.append(more_card);
       more_card.append(img,name,header,body);
    }
    });
    
})