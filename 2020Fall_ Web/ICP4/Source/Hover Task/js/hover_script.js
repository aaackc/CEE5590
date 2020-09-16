function upDate(previewPic) {
    /* This Function is used for the first image to
       1) change the url for the background image of the div with the id = "image"
       to the source file of the preview image

       2) Change the text  of the div with the id = "image"
       to the alt text of the preview image
       */
    document.getElementById("image").style.backgroundImage = "url('https://cdn.sallysbakingaddiction.com/wp-content/uploads/2017/06/moist-chocolate-cupcakes-7.jpg')";
    document.getElementById("image").innerHTML = "Batter is Ready!";


}

function upDate2ndImage(previewPic){
    /* This Function is used for the second image to
   1) change the url for the background image of the div with the id = "image"
   to the source file of the preview image

   2) Change the text  of the div with the id = "image"
   to the alt text of the preview image
   */
    document.getElementById("image").style.backgroundImage = "url('https://cdn.sallysbakingaddiction.com/wp-content/uploads/2017/06/moist-chocolate-cupcakes-6.jpg')";
    document.getElementById("image").innerHTML = "Perfect Baking.";
}


function upDate3rdImage(previewPic){
    /* This Function is used for the third image to
   1) change the url for the background image of the div with the id = "image"
   to the source file of the preview image

   2) Change the text  of the div with the id = "image"
   to the alt text of the preview image
   */
    document.getElementById("image").style.backgroundImage = "url('https://cdn.sallysbakingaddiction.com/wp-content/uploads/2017/06/moist-chocolate-cupcakes-5.jpg')";
    document.getElementById("image").innerHTML = "Yummy Yummy Cupcake.";
}

function unDo() {
    /* This function is used to
   1) Update the url for the background image of the div with the id = "image"
   back to the orginal-image.  You can use the css code to see what that original URL was

   2) Change the text  of the div with the id = "image"
   back to the original text.  You can use the html code to see what that original text was
   */

    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML = "Hover over an image below to display here."
}
