let count=0;
let s=[];
let z;

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
 function videodisplay(videos,istrue,short)
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



// y.forEach(n=>{
//     if(parseInt(
//     videos.
//  others.views.split("k").toString())>n)

//  {console.log("video",videos)}

// })

// console.log(z,"zzzz")

// let y=s.sort()
//  console.log(s,"s")

let sfort=short;
  document.getElementById("sort").addEventListener("click",()=>
{
 let videocopy=[...videos];
   /// short=true;
    console.log(videocopy,"videocopy")
   // videodisplay(null,null,true)
    //console.log(short)
emni(videocopy);
    
}
)
if(sfort==true)
{
    
videos=videos.sort((a,b)=>

{
let views1=parseInt(a.others.views.split("k").toString())*1000;
let views2=parseInt(b.others.views.split("k").toString())*1000;

return views2-views1;
}

)}

  

// console.log(videos)
videos.forEach(video=>
    {


video.authors.forEach(author=>{
const card=document.createElement("div");
card.classList="card bg-base-100  ";
    // console.log(author)

    
card.innerHTML=`



<figure class=" h-[50%] relative">
    <img
      src="${video.thumbnail}"
      alt="${video.title}" class="h-full  w-full object-cover" />
${video.others.posted_date?.length==0?"":`<span class="absolute bottom-2 right-2 bg-black text-white text-xs rounded ">${gettime(video.others.posted_date)}</span>`}

  </figure>
    <div class="div flex flex-col  md:flex-row py-2 px-0 gap-2 items-center">   
    <div class="">
      <img
        alt="${author.profile_name}"
        src="${author.profile_picture}"
     class="w-10 h-10 rounded-full object-cover" />
    </div>
  
    <div class="flex flex-col items-center md:block">
<div class="text-xl font-bold">${video.title}</div>
   <div class=" flex  items-center gap-x-1 ">
    <div class="text-[#171717B3] text-md">${author.profile_name}</div>

${author.verified===true ? `<img src="assets/verify.png" alt="" class="w-[25px] object-cover" >` : ""}
</div>
       <div class="text-[#171717B3] text-md">${video.
others.views}views</div>
</div>




`





section_video_show.appendChild(card);
})
    


 
        //console.log(video.thumbnail)
    

    
})





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



const searchengine=document.getElementById("searchengine")
const search_btn=document.getElementById("kbdsesrch");
searchengine.addEventListener("keyup",search)
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
card.classList="card  ";
    // console.log(author)

card.innerHTML=`



<figure class=" h-[50%] ">
    <img
      src="${videos.thumbnail}"
      alt="${videos.title}" class="h-full  w-full object-cover" />


  </figure>
    <div class="div flex flex-col  md:flex-row py-2 px-0 gap-2 items-center">   
    <div class="">
      <img
        alt="${author.profile_name}"
        src="${author.profile_picture}"
     class="w-10 h-10 rounded-full object-cover" />
    </div>
  
    <div class="flex flex-col items-center md:block">
<div class="text-xl font-bold">${videos.title}</div>
   <div class=" flex  items-center gap-x-1 ">
    <div class="text-[#171717B3] text-md">${author.profile_name}</div>

${author.verified===true ? `<img src="assets/verify.png" alt="" class="w-[25px] object-cover" >` : ""}
</div>
       <div class="text-[#171717B3] text-md">${videos.
others.views}views</div>
</div>




`





section_video_show.appendChild(card);
})

}



const gettime=(data)=>
{
//     console.log(data)
// const day=parseInt(data/3104000);

const hour=parseInt(data/3600);
const day=parseInt(hour/24);
const week=parseInt(day/7);
const month=parseInt(week/4)
const year=parseInt(month/12);
const remseconds=(data%3600);
const minute=parseInt(remseconds/60)
const second=parseInt(remseconds%60)
return(" "+ year+ " year " +hour+ " hour "+ minute+ " minute "+second+ " seconds")

}

// console.log(document.querySelectorAll("o"))

function emni(take)
{
console.log(take,"take")
videodisplay(take,false,true);
}
