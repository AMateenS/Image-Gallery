var arr=[
    {name:"Space satlite", image:"https://plus.unsplash.com/premium_photo-1733985565917-7e985e0b382b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"City view", image:"https://images.unsplash.com/photo-1732740674539-74d1f760acfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"},
    {name:"SSD memory", image:"https://images.unsplash.com/photo-1721332155545-c7a8005a2581?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Beach house", image:"https://images.unsplash.com/photo-1734246632356-534e1d1b6b3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Sunshine in forest", image:"https://images.unsplash.com/photo-1734275689167-5f458aacde63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D"},
    {name:"Hot air baloon", image:"https://images.unsplash.com/photo-1732951359297-8500c86dcbcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Mountain", image:"https://plus.unsplash.com/premium_photo-1690522330763-7cdc0f1eecc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDR8fHxlbnwwfHx8fHw%3D"},
    {name:"Cup of coffee", image:"https://images.unsplash.com/photo-1734120284108-e5e0ecdb738b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNTF8fHxlbnwwfHx8fHw%3D"},
    {name:"Sheep", image:"https://images.unsplash.com/photo-1734000402740-dc480cbbaeb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNzN8fHxlbnwwfHx8fHw%3D"},
    {name:"Black hole",image:"https://images.unsplash.com/photo-1734021619978-e544c3607c28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMDJ8fHxlbnwwfHx8fHw%3D"},
]

function showcade(){
    var clutter="";
    arr.forEach(function(obj){
        clutter += `<div class="block">
        <img class="cursor" src="${obj.image}" alt="image">
        <div class="content"></div>
        </div>`;
    })
    document.querySelector(".view").innerHTML=clutter;
}
function sech(){
var search=document.querySelector(".search");
var overlay=document.querySelector(".overlay");
search.addEventListener("focus", ()=>{
    overlay.style.display="block";
})
search.addEventListener("blur", ()=>{
    overlay.style.display="none"
})
}

showcade();
sech();