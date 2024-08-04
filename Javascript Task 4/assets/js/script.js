
// Dom one 



// document.addEventListener("DOMContentLoaded", () => {
//     const addButton = document.querySelector(".addButton");
//     const inputBox = document.querySelector(".inputBox");
//     const todoList = document.querySelector(".todoList");

//     addButton.addEventListener("click", () => {
//         const todoText = inputBox.value;

//         const todoItem = document.createElement("li");
//         todoItem.className = "todoItem";
//         todoItem.innerHTML = `
//             <span class="todoText">${todoText}</span>
//             <button class="delButton">
//                 <i class="fa-solid fa-trash"></i>
//             </button>
//         `;

//         todoList.appendChild(todoItem);

//         const delButton = todoItem.querySelector(".delButton");
//         delButton.addEventListener("click", () => {
//             todoItem.remove();
//         });

//         inputBox.value = ""; // Boş xananı təmizləyir
//     });

//     document.querySelectorAll(".delButton").forEach(button => {
//         button.addEventListener("click", (event) => {
//             event.target.closest("li").remove();
//         });
//     });
// });



// Dom two 



// const mainImage= document.getElementById('mainImage');
// const thumbnails= document.querySelectorAll('.footBox .itemBox img');
// const prevButton= document.getElementById('prev');
// const nextButton= document.getElementById('next');

// let currentIndex= 0;

// const images= [
//     'https://www.kate.net/funstuff/wallpapers/katenet-pinkflowerwallpaper2011_1600.jpg',
//     'https://t4.ftcdn.net/jpg/05/82/97/05/360_F_582970551_V9zUmJdiPUCyownaKd0OWWI6ZBMoH7WH.jpg',
//     'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//     'https://img.pikbest.com/origin/09/08/82/pIkbEsT4IpIkbEsTz3f.jpg!sw800',
//     'https://t3.ftcdn.net/jpg/05/73/42/58/360_F_573425894_JmV1xE7VCHHJD2phP0v18ukrk9HZN5m7.jpg',
//     'https://www.shutterstock.com/image-photo/arrangement-decoration-chinese-new-year-600nw-768084829.jpg'
// ];

// function showImage(index) {
//     mainImage.src= images[index];
// }

// thumbnails.forEach((thumbnail, index)=> {
//     thumbnail.src= images[index];
//     thumbnail.addEventListener('click', ()=> {
//         currentIndex= index;
//         showImage(currentIndex);
//     });
// });

// prevButton.addEventListener('click', ()=> {
//     currentIndex= (currentIndex > 0) ? currentIndex- 1 : images.length- 1;
//     showImage(currentIndex);
// });

// nextButton.addEventListener('click', ()=> {
//     currentIndex= (currentIndex < images.length- 1) ? currentIndex+ 1 : 0;
//     showImage(currentIndex);
// });

// function startSlideshow() {
//     setInterval(()=> {
//         currentIndex= (currentIndex < images.length- 1) ? currentIndex+ 1 : 0;
//         showImage(currentIndex);
//     }, 3000);
// }

// showImage(currentIndex);
// startSlideshow();



// Dom three 



// let images= [
//     {category:"nature", name:"forest", source:"./assets/image/forest.jpg"},
//     {category:"nature", name:"mountain", source:"./assets/image/mountains.jpg"},
//     {category:"nature", name:"light", source:"./assets/image/lights.jpg"},
//     {category:"car", name:"retro", source:"./assets/image/retro.jpg"},
//     {category:"car", name:"fast", source:"./assets/image/fast.jpg"},
//     {category:"car", name:"classic", source:"./assets/image/classic.jpg"},
//     {category:"people", name:"girl", source:"./assets/image/girl.jpg"},
//     {category:"people", name:"man", source:"./assets/image/man.jpg"},
//     {category:"people", name:"woman", source:"./assets/image/woman.jpg"},
// ]

// function filterImages(category) {
//     let gallery = document.getElementById('gallery');
//     gallery.innerHTML = '';

//     let filteredImages = images.filter(image => category === 'all' || image.category === category);

//     filteredImages.forEach(image => {
//         let card = document.createElement('div');
//         card.className = 'card';
//         card.innerHTML = `
//             <img src="${image.source}" alt="${image.name}">
//             <div class="card-body">
//                 <p>${image.name.charAt(0).toUpperCase() + image.name.slice(1)}</p>
//                 <p>Lorem ipsum dolor...</p>
//             </div>`;
//         gallery.appendChild(card);
//     });

//     let buttons = document.querySelectorAll('.textBox p');
//     buttons.forEach(button => button.classList.remove('selected'));
//     document.querySelector(`.textBox p[onclick="filterImages('${category}')"]`).classList.add('selected');
// }

// filterImages('all');



// Don four 



// let volume= document.querySelector(".parentBox");
//     let volume_bar= document.querySelector(".childBox");
//     let volume_width= volume.clientWidth;
//     let faiz= document.getElementById("faizBox");
        
// function updateVolume(percent) {
//     volume_bar.style.width= percent+ "%";
//     faiz.innerText= percent+ " %";
// }
//     volume.addEventListener("click", function(e) {
//         let percent= Math.round((e.offsetX/ volume_width)* 100);
//         updateVolume(percent);
//     });

//     document.getElementById("plus").addEventListener("click", function() {
//         let percent= Math.min(100, Math.round((volume_bar.clientWidth/ volume_width)* 100)+ 1);
//         updateVolume(percent);
//     });

//     document.getElementById("minus").addEventListener("click", function() {
//         let percent= Math.max(0, Math.round((volume_bar.clientWidth/ volume_width)* 100)- 1);
//         updateVolume(percent);
//     });

//     updateVolume(55);



// Dom five 



// const content = document.getElementById('contentBoxThree');
// const pages = document.querySelectorAll('.pagination .page');
// const prev = document.querySelector('.pagination .prev');
// const next = document.querySelector('.pagination .next');
// let currentPage = 1;
// const itemsPerPage = 10;
// const totalItems = 50;

// function displayItems(page) {
//     content.innerHTML = '';
//     const start = (page - 1) * itemsPerPage + 1;
//     const end = page * itemsPerPage;
//     for (let i = start; i <= end && i <= totalItems; i++) {
//         const item = document.createElement('li');
//         item.textContent = `Item ${i}`;
//         content.appendChild(item);
//     }
// }

// function updatePagination(page) {
//     pages.forEach(p => p.classList.remove('active'));
//     pages[page - 1].classList.add('active');
// }

// pages.forEach((page, index) => {
//     page.addEventListener('click', () => {
//         currentPage = index + 1;
//         displayItems(currentPage);
//         updatePagination(currentPage);
//     });
// });

// prev.addEventListener('click', () => {
//     if (currentPage > 1) {
//         currentPage--;
//         displayItems(currentPage);
//         updatePagination(currentPage);
//     }
// });

// next.addEventListener('click', () => {
//     if (currentPage < pages.length) {
//         currentPage++;
//         displayItems(currentPage);
//         updatePagination(currentPage);
//     }
// });

// displayItems(currentPage);
// updatePagination(currentPage);



// Dom six 















