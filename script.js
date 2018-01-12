$( document ).ready(function() {

  const imgLinks = $(".carImage");
  let i = imgLinks.length;

  while (i--) {
    imgLinks[i].addEventListener("click", handleCarSelectionClick);
  }

  function handleCarSelectionClick(event) {
    let chosenPic = event.srcElement.name + ".jpg";;
    let chosenPicLocation = './img/' + chosenPic;
    let carMakeCaption = event.target.alt;
    let intro = $(".intro");

    if(intro) {intro.remove();};  // remove intro text

    // load chosen pic/caption
    $(".detail-image").attr("src", chosenPicLocation);
    $(".detail-image-title").html(carMakeCaption);
  }

  // WITHOUT EVENT LISTENERS
  // $("a").click(function(event) {
  //   let chosenPic = event.target.name + ".jpg"
  //   let chosenPicLocation = './img/' + chosenPic;
  //   let carMakeCaption = event.target.alt;
  //   let intro = document.getElementsByClassName('intro')[0];

  //   if(intro) {intro.remove();};
    
  //   document.getElementsByClassName('detail-image')[0].src = chosenPicLocation;
  //   document.getElementsByClassName('detail-image-title')[0].innerHTML = carMakeCaption;
  // });

});