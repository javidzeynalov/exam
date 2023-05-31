const create_btn= document.querySelector(".create_btn")


create_btn.addEventListener("click",function () {

    const Name = document.querySelector(".name").value;
    const Header = document.querySelector(".header").value;
    const Body = document.querySelector(".body").value;
    const Photo = document.querySelector(".photo").value;


    let obj={
        name: Name,
        header: Header,
        body: Body,
        img: Photo
    }


    fetch("http://localhost:3000/ExamAPI",{
        method:"post",
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body:JSON.stringify(obj)
        
    })

    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
    })
    
})