window.addEventListener("load", firstimage)

//* Varibles //

let img1 = document.querySelector(".firstfoto");
let img2 = document.querySelector(".img2")
let img3 = document.querySelector(".img3")
let img4 = document.querySelector(".img4")
let img5 = document.querySelector(".img5")
let gallery = document.querySelector("#image")
let image1 = document.querySelector("#image1")
let overlay = document.querySelector("#galleryOverlay")
let rightarrow = document.querySelector("#rightButton");
let leftarrow = document.querySelector("#leftButton");
let foto = document.querySelector("#foto");
let fotoframe = document.querySelector("#fotoframe");
let rightside = document.querySelector("#rightside")
let leftside = document.querySelector("#leftside")



// * Removes the Border class from all 5 images //
function removerBorder() {
    console.log("removeBorder")
    img1.classList.remove("border");
    img2.classList.remove("border");
    img3.classList.remove("border");
    img4.classList.remove("border");
    img5.classList.remove("border");
}

// * Adds the img1 Class to the gallery ID, so that the first image is the one shown //
function firstimage() {
    gallery.classList.add("img1")
}


// * Changes the image og Gallery when one of the 5 images is clicked //
    img1.addEventListener("click", () => {
        console.log("img1 click", this)
        gallery.classList = "";
        removerBorder();
        gallery.offsetLeft;
        gallery.classList.add("img1")
        img1.classList.add("border")
    })
    img2.addEventListener("click", () => {
        console.log("img2 click", this)
        gallery.classList = "";
        removerBorder();
        gallery.offsetLeft;
        gallery.classList.add("img2")
        img2.classList.add("border");
    })
    img3.addEventListener("click", () => {
        console.log("img3 click", this)
        gallery.classList = "";
        removerBorder();
        gallery.offsetLeft;
        gallery.classList.add("img3")
        img3.classList.add("border");
    })
    img4.addEventListener("click", () => {
        console.log("img4 click", this)
        gallery.classList = "";
        removerBorder();
        gallery.offsetLeft;
        gallery.classList.add("img4")
        img4.classList.add("border");
    })
    img5.addEventListener("click", () => {
        console.log("img5 click", this)
        gallery.classList = "";
        removerBorder();
        gallery.offsetLeft;
        gallery.classList.add("img5")
        img5.classList.add("border");
    })

// * when clicked the image gallery will go fullscreen and add the current Class to The foto ID //

gallery.addEventListener("click", () => {
    console.log("shown")
    overlay.classList.add("shown");
    if (gallery.classList.contains("img1")) {
      foto.classList = "";
      foto.offsetLeft;
      foto.classList.add("img1");
    } else if (gallery.classList.contains("img2")) {
      foto.classList = "";
      foto.offsetLeft;
      foto.classList.add("img2");
    } else if (gallery.classList.contains("img3")) {
      foto.classList = "";
      foto.offsetLeft;
      foto.classList.add("img3");
    } else if (gallery.classList.contains("img4")) {
      foto.classList = "";
      foto.offsetLeft;
      foto.classList.add("img4");
    } else if (gallery.classList.contains("img5")) {
      foto.classList = "";
      foto.offsetLeft;
      foto.classList.add("img5");
    } else {
        foto.classList = "";
        foto.offsetLeft;
        foto.classList.add("img1");
    }

})

fotoframe.addEventListener("click", () => {
    overlay.classList.remove("shown");
})


// *  changes picture when the Right Arrow is click, by changing the class //

rightarrow.addEventListener("click", () => {
    console.log("rightarrow", this)
    if (foto.classList.contains("img1")) {
        foto.classList = "";
        gallery.classList = "";
        foto.offsetLeft;
        gallery.offsetLeft;
        foto.classList.add("img2")
        gallery.classList.add("img2")
    } else if (foto.classList.contains("img2")) {
        foto.classList = "";
        gallery.classList = "";
        foto.offsetLeft;
        gallery.offsetLeft;
        foto.classList.add("img3");
        gallery.classList.add("img3");
    } else if (foto.classList.contains("img3")) {
        foto.classList = "";
        gallery.classList = "";
        foto.offsetLeft;
        gallery.offsetLeft;
        foto.classList.add("img4");
        gallery.classList.add("img4");
    } else if (foto.classList.contains("img4")) {
        foto.classList = "";
        gallery.classList = "";
        foto.offsetLeft;
        gallery.offsetLeft;
        foto.classList.add("img5");
        gallery.classList.add("img5");
    } else {
        foto.classList = "";
        gallery.classList = "";
        foto.offsetLeft;
        gallery.offsetLeft;
        foto.classList.add("img1");
        gallery.classList.add("img1");
    }
})

// *  changes picture when the Right Arrow is click, by changing the class //

leftarrow.addEventListener("click", () => {
  console.log("leftarrow", this);
  if (foto.classList.contains("img1")) {
    foto.classList = "";
    gallery.classList = "";
    foto.offsetLeft;
    gallery.offsetLeft;
    foto.classList.add("img5");
    gallery.classList.add("img5");
  } else if (foto.classList.contains("img5")) {
    foto.classList = "";
    gallery.classList = "";
    foto.offsetLeft;
    gallery.offsetLeft;
    foto.classList.add("img4");
    gallery.classList.add("img4");
  } else if (foto.classList.contains("img4")) {
    foto.classList = "";
    gallery.classList = "";
    foto.offsetLeft;
    gallery.offsetLeft;
    foto.classList.add("img3");
    gallery.classList.add("img3");
  } else if (foto.classList.contains("img3")) {
    foto.classList = "";
    gallery.classList = "";
    foto.offsetLeft;
    gallery.offsetLeft;
    foto.classList.add("img2");
    gallery.classList.add("img2");
  } else {
    foto.classList = "";
    gallery.classList = "";
    foto.offsetLeft;
    gallery.offsetLeft;
    foto.classList.add("img1");
    gallery.classList.add("img1");
  }
});


// *  changes picture when the RightSide of the Image is click, by changing the class //

rightside.addEventListener("click", () => {
  console.log("rightarrow", this);
  if (foto.classList.contains("img1")) {
    foto.classList = "";
    gallery.classList = "";
    foto.offsetLeft;
    gallery.offsetLeft;
    foto.classList.add("img2");
    gallery.classList.add("img2");
  } else if (foto.classList.contains("img2")) {
    foto.classList = "";
    gallery.classList = "";
    foto.offsetLeft;
    gallery.offsetLeft;
    foto.classList.add("img3");
    gallery.classList.add("img3");
  } else if (foto.classList.contains("img3")) {
    foto.classList = "";
    gallery.classList = "";
    foto.offsetLeft;
    gallery.offsetLeft;
    foto.classList.add("img4");
    gallery.classList.add("img4");
  } else if (foto.classList.contains("img4")) {
    foto.classList = "";
    gallery.classList = "";
    foto.offsetLeft;
    gallery.offsetLeft;
    foto.classList.add("img5");
    gallery.classList.add("img5");
  } else {
    foto.classList = "";
    gallery.classList = "";
    foto.offsetLeft;
    gallery.offsetLeft;
    foto.classList.add("img1");
    gallery.classList.add("img1");
  }
});

//*  changes picture when the LeftSide of the Image is click, by changing the class //

leftside.addEventListener("click", () => {
  console.log("leftarrow", this);
  if (foto.classList.contains("img1")) {
    foto.classList = "";
    gallery.classList = "";
    foto.offsetLeft;
    gallery.offsetLeft;
    foto.classList.add("img5");
    gallery.classList.add("img5");
  } else if (foto.classList.contains("img5")) {
    foto.classList = "";
    gallery.classList = "";
    foto.offsetLeft;
    gallery.offsetLeft;
    foto.classList.add("img4");
    gallery.classList.add("img4");
  } else if (foto.classList.contains("img4")) {
    foto.classList = "";
    gallery.classList = "";
    foto.offsetLeft;
    gallery.offsetLeft;
    foto.classList.add("img3");
    gallery.classList.add("img3");
  } else if (foto.classList.contains("img3")) {
    foto.classList = "";
    gallery.classList = "";
    foto.offsetLeft;
    gallery.offsetLeft;
    foto.classList.add("img2");
    gallery.classList.add("img2");
  } else {
    foto.classList = "";
    gallery.classList = "";
    foto.offsetLeft;
    gallery.offsetLeft;
    foto.classList.add("img1");
    gallery.classList.add("img1");
  }
});
