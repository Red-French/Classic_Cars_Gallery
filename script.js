$( document ).ready(function() {

  $("a").click(function(event) {
    
    let chosenPic = event.target.name + ".jpg"
    let chosenPicLocation = './img/' + chosenPic;
    let carMake = event.target.alt;
    let intro = document.getElementsByClassName('intro')[0];

    if(intro) {intro.remove();};
    
    document.getElementsByClassName('detail-image')[0].src = chosenPicLocation;
    document.getElementsByClassName('detail-image-title')[0].innerHTML = carMake;
  });

});