let gal = document.getElementById("gallery");

let content = [
    {
        url: "image1.jpg",
        caption: "Humber arboretum  - photo by sandeep singh"
    },
    {
        url: "image2.jpg",
        caption: "Madison centre - photo by sandeep singh"
    },
    {
        url: "image3.jpg",
        caption: "Madison centre - photo by sandeep singh"
    },
    {
        url: "image4.jpg",
        caption: "Wonderful nature - photo by sandeep singh"
    }, {
        url: "image5.jpg",
        caption: "complex like life - photo by sandeep singh"
    },
    {
        url: "image6.jpg",
        caption: "Treasure hunt - photo by sandeep singh"
    },
    {
        url: "image7.jpg",
        caption: " Leading Lines photo - photo by sandeep singh"
    },
    {
        url: "image8.jpg",
        caption: "Amazing architecture of Barrett Centre For Technology Innovation - photo by sandeep singh"
    }, {
        url: "image9.jpg",
        caption: "sunset at Humberwood Blvd - photo by sandeep singh"
    },
    {
        url: "image10.jpg",
        caption: "POV shot of Humber arboretum - photo by sandeep singh"
    },
    {
        url: "image11.jpg",
        caption: "playing with lights  - photo by sandeep singh"
    },
    {
        url: "image12.jpg",
        caption: "Before dark - photo by sandeep singh"
    }

];

let ind = 0;
content.forEach(element => {
    ind++
     let newDiv = document.createElement('div');
     newDiv.classList.add("col-3", 'col');
        content = `<div index='${ind}' class="gallery-slide" caption="${element['caption']}" data="asset/${element['url']}"><img src="asset/${element['url']}"></div>`;
    newDiv.innerHTML = content;
    gal.appendChild(newDiv);
});
const clickData = document.querySelectorAll('.gallery-slide');
let galleryDisplay = document.getElementById('active-gal');
let curInd =  galleryDisplay.getAttribute('current-index');
const nextbtn = document.getElementById('next');
const prebtn = document.getElementById('pre');
let popup = document.getElementById("pop-up");
let cap = document.getElementById("caption-data");

clickData.forEach(element => {
    element.addEventListener('click', function() {
      const id = this.getAttribute('data');
      const caption = this.getAttribute('caption');
      const index = this.getAttribute('index');
      let galleryDisplay = document.getElementById('active-gal');
      galleryDisplay.setAttribute('current-index', index);
      galleryDisplay.src = id;
      cap.innerText = caption;
      if(index==1){
        prebtn.style.display = 'none';
      }
      else if (index==12) {
        nextbtn.style.display = 'none';
      }
      else {
        prebtn.style.display = 'block';
        nextbtn.style.display = 'block';
      }
      popup.style.display = "block";
    });
  });
//   next button

  nextbtn.addEventListener("click", function(){
    let galleryDisplay = document.getElementById('active-gal');
   let curInd =  galleryDisplay.getAttribute('current-index');
   if(curInd < 12){
    nextbtn.style.display = 'block';
   let num = parseInt(curInd);
   num++
   galleryDisplay.setAttribute("current-index", num); 
  
   if (num == 12) {
    nextbtn.style.display = 'none';
    prebtn.style.display = 'block';
   }
   else{
    nextbtn.style.display = 'block';
    prebtn.style.display = 'block';
   }
   const nextSlide = document.querySelector(`[index="${num}"]`);
   let nextPath = nextSlide.getAttribute('data');
   let captionData = nextSlide.getAttribute('caption');
   cap.innerText = captionData;
   galleryDisplay.src = nextPath;
   }
  });  
 //   previous btn
    prebtn.addEventListener("click", function(){
    let galleryDisplay = document.getElementById('active-gal');
   let curInd =  galleryDisplay.getAttribute('current-index');
   
   if(curInd > 1){
    prebtn.style.display = 'block';
   let num = parseInt(curInd);
   num--
   galleryDisplay.setAttribute("current-index", num); 

   if (num == 1) {
    prebtn.style.display = 'none';
    nextbtn.style.display = 'block';
   }
   else{
    prebtn.style.display = 'block';
    nextbtn.style.display = 'block';
   }
   const nextSlide = document.querySelector(`[index="${num}"]`);
   let nextPath = nextSlide.getAttribute('data');
   let captionData = nextSlide.getAttribute('caption');
   cap.innerText = captionData;
   galleryDisplay.src = nextPath;
   }
  });  

  let closes = document.getElementById('close');
  closes.addEventListener("click", function(){
    popup.style.display = "none";
  });

let bigGrid = document.getElementById('bigGrid');
bigGrid.addEventListener("click", function(){
    let three = document.querySelectorAll('.col');
    console.log(three);
    three.forEach(element => {
        element.classList.remove("col-3");
        element.classList.add("col-2");        
    });
});
let smallGrid = document.getElementById('smallGrid');
smallGrid.addEventListener("click", function(){
    let three = document.querySelectorAll('.col');
    console.log(three);
    three.forEach(element => {
        element.classList.remove("col-2");
        element.classList.add("col-3");        
    });
});
