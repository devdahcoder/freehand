(function() {
    let buttons = document.querySelectorAll(".arrow");
    let counter = 0;
    let img = document.querySelector(".main-img");
    let images = [
      `https://images.unsplash.com/photo-1597006404681-b488cffcdec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
      `https://images.unsplash.com/photo-1597075561373-cf8898ec7290?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
      `https://images.unsplash.com/photo-1596972595738-8e0a62e82f25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
      `https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
      `https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
    ];

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (button.classList.contains("arrow-left")) {
                counter--;
                if (counter < 0) {
                    counter = images.length - 1;
                }
                img.src = images[counter];
                }
                if (button.classList.contains("arrow-right")) {
                counter++;
                if (counter > images.length - 1) {
                    counter = 0;
                }
                img.src = images[counter];
                }
        })
    })
})();