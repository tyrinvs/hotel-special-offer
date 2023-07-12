if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        for(var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

document.querySelectorAll(".function__language,.header__hotel-list").forEach(function(dropDownWrapper) {
    
    const dropDownBtn = dropDownWrapper.querySelector(".function__language-btn,.hotel__btn");
    const dropDownList = dropDownWrapper.querySelector(".function__language-list,.hotel__list");
    const dropDownListItems = dropDownList.querySelectorAll(".language-list__item,.hotel__list-item");

    dropDownBtn.addEventListener('click', function() {
        dropDownList.classList.toggle('function__language-list_visible');
    });

    dropDownListItems.forEach(function (listItem) {
        listItem.addEventListener('click', function(e) {
            e.stopPropagation();
            dropDownBtn.innerHTML = this.innerHTML;
            dropDownList.classList.remove('function__language-list_visible');
        });
    });

    document.addEventListener('click', function(e) {
        if (e.target !== dropDownBtn) {
            dropDownList.classList.remove('function__language-list_visible');
        }
    });
});

document.querySelector('.header__burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header__row').classList.toggle('open');
});