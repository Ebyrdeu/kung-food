"use strict";

const previewSidebarItem = document.querySelectorAll('.preview-sidebar_item'),
    previewSidebarItems = document.querySelector('.preview-sidebar_items'),
    previewContent = document.querySelectorAll('.preview-content'),
    mainCarouselSidebarItem = document.querySelectorAll('.main-carousel-sidebar_item'),
    mainCarouselSidebarItems = document.querySelector('.main-carousel-sidebar_items'),
    mainCarouselContent = document.querySelectorAll('.main-carousel-content');

const hideContent = (contentSelector,itemSelector) => {
    contentSelector.forEach(e => e.classList.add('hide'));

    itemSelector.forEach(e => e.classList.remove(`active`));
    

};
const showContent = (contentSelector, itemSelector, index = 0) => {
    contentSelector[index].classList.remove('hide');
    itemSelector[index].classList.add('active');

    // Annars dem skulle konflikterna med varandra kunde inte hitta bättre väg att göra tbh
    mainCarouselSidebarItem[index].classList.add('active-circle');
}


const clickable = (contentSelector, itemSelector, itemsSelector) => {
    itemsSelector.addEventListener('click', evt =>  {
        const target = evt.target;
        if (target && target.classList.contains(target.classList[0])) {
            itemSelector.forEach((item, index) => {
                if (target === item) {
                    hideContent(contentSelector,itemSelector);
                    showContent(contentSelector,itemSelector,index)
                }
            })
        }
    
    })

}

// för första "slider"
hideContent(previewContent,previewSidebarItem,);
showContent(previewContent,previewSidebarItem);
clickable(previewContent,previewSidebarItem, previewSidebarItems);


// för andra "slider"
hideContent(mainCarouselContent,mainCarouselSidebarItem);
showContent(mainCarouselContent,mainCarouselSidebarItem);
clickable(mainCarouselContent,mainCarouselSidebarItem,mainCarouselSidebarItems);
