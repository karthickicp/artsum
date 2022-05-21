// image upload
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $(".image-upload-wrap").hide();

      $(".file-upload-image").attr("src", e.target.result);
      $(".file-upload-content").show();

      $(".image-title").html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    removeUpload();
  }
}
// remove uploaded image
function removeUpload() {
  $(".file-upload-input").replaceWith($(".file-upload-input").clone());
  $(".file-upload-content").hide();
  $(".image-upload-wrap").show();
}
$(".image-upload-wrap").bind("dragover", function () {
  $(".image-upload-wrap").addClass("image-dropping");
});
$(".image-upload-wrap").bind("dragleave", function () {
  $(".image-upload-wrap").removeClass("image-dropping");
});

// jquery
$(document).ready(function () {
  $("#shareBlock").cShare({
    description: "jQuery plugin - C Share buttons...",
    showButtons: ["fb", "twitter", "email"],
  });
});

// slick slider
$(".multiple-items").slick({
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
});

// magnify on hover
$(function () {
  $(".product-img").jqZoom({
    selectorWidth: 30,
    selectorHeight: 30,
    viewerWidth: 400,
    viewerHeight: 300,
  });
});
// open img in new tab
function swipe() {
  var imgPath = document.getElementById("uploaded-img");
  var url = imgPath.getAttribute("src");
  window.open(url, "_blank");
}
// dropdown
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("mobileDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// increment decrement
// Select increment and decrement buttons
const incrementCount = document.getElementsByClassName("increment-count");
const decrementCount = document.getElementsByClassName("decrement-count");
for (i = 0; i < incrementCount.length; i++) {
  var incrementBtn = incrementCount[i];
  incrementBtn.addEventListener("click", (e) => {
    let btnClicked = e.target;
    let parent = btnClicked.parentElement.parentElement.children[1];
    let count = parseInt(parent.innerHTML);
    count++;
    parent.innerHTML = count;
    updateCartTotal();
  });
}
for (i = 0; i < decrementCount.length; i++) {
  var incrementBtn = decrementCount[i];
  incrementBtn.addEventListener("click", (e) => {
    let btnClicked = e.target;
    let parent = btnClicked.parentElement.parentElement.children[1];
    let count = parseInt(parent.innerHTML);
    if (count === 1) {
      return false;
    } else {
      count--;
    }
    parent.innerHTML = count;
    updateCartTotal();
  });
}
// handle Close
const removeItemFromCart = () => {
  const closeIcons = document.getElementsByClassName("fa-xmark");
  for (let i = 0; i < closeIcons.length; i++) {
    const closeIcon = closeIcons[i];
    closeIcon.addEventListener("click", (e) => {
      let buttonClicked = e.target;
      buttonClicked.parentElement.remove();
      updateCartTotal();
    });
  }
};
const updateCartTotal = () => {
  const closeIcons = document.getElementsByClassName("fa-xmark");
  let totalPrice = document.querySelectorAll(".total-price");
  let cartItemContainer = document.getElementsByClassName("cart-items");
  let total = 0;
  for (i = 0; i < cartItemContainer.length; i++) {
    let cartItem = cartItemContainer[i];
    let price = parseFloat(
      cartItem.querySelector("p").innerText.replace("$", "")
    );
    let quantity = cartItem.getElementsByClassName("total-count")[0].innerHTML;
    total = total + price * quantity;
    totalPrice[0].innerHTML = `$ ${total}`;
  }
  if (closeIcons.length === 0) {
    totalPrice[0].innerHTML = "$ 0";
  }
  return total;
};
updateCartTotal();
