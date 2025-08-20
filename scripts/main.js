let count=0;

const catagorybtnload= async()=>
{

    const res=  await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
    const btns= await res.json();
    display_catagories_button(btns.categories);

}
catagorybtnload();

async function videoloadfirstime()
{
const res= await fetch('https://openapi.programming-hero.com/api/phero-tube/videos');
const videos= await res.json();
videodisplay(videos.videos);
}
videoloadfirstime()


// console.log(count);
 const video_api_load= async(categoryId,istrue)=>
 {


const reswithcatgory= await fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${categoryId}`)
const videos_catogroized=await reswithcatgory.json();

 console.log(videos_catogroized.category)

if(videos_catogroized.category=="" && istrue==false)
{
    console.log("null")
    document.querySelector(".section_video_show").classList.add("hidden");
document.getElementById("oops").classList.remove("hidden")

}

else {
       document.querySelector(".section_video_show").classList.remove("hidden") 
document.getElementById("oops").classList.add("hidden")
    }
if(istrue==false)
{
videodisplay(videos_catogroized.category,istrue);
count=0;
}
else if(istrue==true)
{
    const res= await fetch('https://openapi.programming-hero.com/api/phero-tube/videos');
const videos= await res.json();
videodisplay(videos.videos,istrue);
count=count+1;
// console.log(count);

}


 }
//  video_api_load()
 function videodisplay(videos,istrue)
 {

//    console.log(videos);
// console.log(videos.others);

const section_video_show=document.querySelector(".section_video_show");
// document.getElementById("all")
section_video_show.innerHTML=" ";



if(videos.length<=0)
{
    console.log("null")
    document.querySelector(".section_video_show").classList.add("hidden");
document.getElementById("oops").classList.remove("hidden")

}

else {
       document.querySelector(".section_video_show").classList.remove("hidden") 
document.getElementById("oops").classList.add("hidden")





if( istrue==false )
{
section_video_show.innerHTML=" ";
}

else if(istrue==true && count<1)
{
    videos=videos.splice(0);
    // console.log(count);
}
else
{
videos=videos.splice(0,5);
}

//  if(videos.length<=0){
// // alert("lol")


// }





videos.forEach(video=>
    {


// section_video_show.innerHTML="";

video.authors.forEach(author=>{
const card=document.createElement("div");
card.classList="card bg-base-100  ";
    // console.log(author)

card.innerHTML=`



<figure class=" h-[50%] ">
    <img
      src="${video.thumbnail}"
      alt="${video.title}" />
  </figure>
  <div class="card-body   ">
    <div class="div flex card-title">

     <div class="chat-image avatar">
    <div class="w-10 rounded-full">
      <img
        alt="${author.profile_name}"
        src="${author.profile_picture}"
      />
    </div>
    
  </div>
   
    
    <div class="chat-bubble">${video.title}</div>

     
   

</div>
   <div class=" flex items-center gap-x-1 h-4 pt-2 ">
    <div class="text-[#171717B3] text-md">${author.profile_name}</div>
   

<div id="verified" class="">



${author.verified ? `<img src="assets/verify.png" alt="" class="w-[30px]" >` : ""}
</div>

   </div>
       <p class="text-[#171717B3] text-md">${video.
others.views}views</p>
  </div>




`





section_video_show.appendChild(card);
})
    



        //console.log(video.thumbnail)
    }
)






  } }




function  display_catagories_button(btns){
const catagories_btn=document.querySelector(".catagories_btn");

btns.forEach(btn => {
    // console.log(btn.category)
const button=document.createElement("button")

button.classList="btn  bg-[#25252533] text-[#252525B3]  "
button.innerHTML=`${btn.category}`
button.id=btn.category_id
catagories_btn.appendChild(button);

    
});


}
let x;
let y;
function clickme()
{

     const catagories_btn=document.querySelector(".catagories_btn");

if(event.target.tagName=="BUTTON")
{
    const x=[...document.querySelectorAll(" button")]
    x.forEach(e=>{
// console.log(e)

e.classList.add("bg-[#25252533]","text-[#252525B3]")
e.classList.remove("bg-[#FF1F3D]","text-white")
    })

    event.target.classList.add("bg-[#FF1F3D]","text-white")
}


   let istrue=false;
    
   
const catagory_id =event.target.id;

if(!document.getElementById(catagory_id).classList.contains("bg-[#FF1F3D]"))
{
    document.getElementById(catagory_id).classList="bg-[#FF1F3D] text-white"
y=catagory_id;
}

else if(y !=catagory_id)




 if(catagory_id=="all")
    {


// document.getElementById("all").setAttribute("disabled",true)
 istrue=true;
    }
// console.log(catagory_id)
video_api_load(catagory_id,istrue);


}


function allbutton()
{
 const x=[...document.querySelectorAll(".btn")]
    x.forEach(e=>{
// console.log(e)

e.classList.add("bg-[#25252533]","text-[#252525B3]")
e.classList.remove("bg-[#FF1F3D]","text-white")
    })

event.target.classList.add("bg-[#FF1F3D]","text-white")

}
// allbutton();


//search 
//searchengine input
//kbdsesrchbtn




const search_btn=document.getElementById("kbdsesrch");
search_btn.addEventListener("click",search)
 async function search()
{

const searchengine=document.getElementById("searchengine")
const values=searchengine.value;
console.log("clicked",values);


//using title
const res= await fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${values}`)
const data=await res.json();

// console.log(Array.isArray(data.videos))
 //using id

 const resid=await fetch(`https://openapi.programming-hero.com/api/phero-tube/video/${values}`);
 const data2=await resid.json();
// console.log(data2.video);
// const x=[...data2.video]
// console.log(x)


videodisplay(data.videos);
    
video_api_load(data.videos);

 onlyforid(data2.video)
 

}

function onlyforid(videos)
{
console.log(videos)



       document.querySelector(".section_video_show").classList.remove("hidden") 
document.getElementById("oops").classList.add("hidden")
    

    const section_video_show=document.querySelector(".section_video_show");
videos.authors.forEach(author=>{
const card=document.createElement("div");
card.classList="card bg-base-100  ";
    // console.log(author)

card.innerHTML=`



<figure class=" h-[50%] ">
    <img
      src="${videos.thumbnail}"
      alt="${videos.title}" />
  </figure>
  <div class="card-body   ">
    <div class="div flex card-title">

     <div class="chat-image avatar">
    <div class="w-10 rounded-full">
      <img
        alt="${author.profile_name}"
        src="${author.profile_picture}"
      />
    </div>
    
  </div>
   
    
    <div class="chat-bubble">${videos.title}</div>

     
   

</div>
   <div class=" flex items-center gap-x-1 h-4 pt-2 ">
    <div class="text-[#171717B3] text-md">${author.profile_name}</div>
   

<div id="verified" class="">



${author.verified ? `<img src="assets/verify.png" alt="" class="w-[30px]" >` : ""}
</div>

   </div>
       <p class="text-[#171717B3] text-md">${videos.
others.views}views</p>
  </div>




`





section_video_show.appendChild(card);
})

}



function navbarimg()
{
    window.location.reaload();
}

// console.log(document.querySelectorAll("o"))