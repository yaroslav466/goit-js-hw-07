import { galleryItems } from './gallery-items.js';
// Change code below this line


const listEl = document.querySelector(".gallery");


const renderList = (arr, container) => {
    const markup = arr.map((item) => `<li class="gallery_item"> 
    <a class="gallery_link" href="${item.original}">
    <img
        class="gallery_image"
        src="${item.preview}"
        data-source ="${item.original}"
        alt="${item.description}"
        width="360"
        />
    </a>
    </li>`
    ).join("");

    container.insertAdjacentHTML("afterbegin", markup);
}
const handleListClick = (e) => {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
    return;
 }
    
    const imgClick = e.target;
    const chosenImgSource = imgClick.getAttribute("data-source");
    const galleryItem = galleryItems
        .find(item => item.original === chosenImgSource);
    if (galleryItem) {
        console.log(galleryItem.original); 
    }
    const instance = basicLightbox.create(`
     <div class="modal"> 
         <li class="gallery_item">
            <img 
                src="${galleryItem.original}" 
                class="gallery_image"
                data-source="${galleryItem.original}"
                alt="${galleryItem.description}"
            />
        </li>
     </div>
`);

instance.show(); 
};



renderList(galleryItems, listEl);
listEl.addEventListener("click", handleListClick);
