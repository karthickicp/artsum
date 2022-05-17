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
  console.log("drop down triggered");
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
