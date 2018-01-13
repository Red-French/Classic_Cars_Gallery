$( document ).ready(function() {

  const imgLinks = $(".carImage");
  let i = imgLinks.length;

  while (i--) {
    imgLinks[i].addEventListener("click", handleCarSelectionClick);
  }

  function handleCarSelectionClick(event) {
    const autoClicked = event.srcElement.name;
    const chosenPic = './img/' + autoClicked + ".jpg";
    const chosenAutoHistory = './partials/' + autoClicked + ".html";

    const carMakeCaption = event.target.alt;
    const intro = $(".intro");

    if(intro) {intro.remove();};  // remove intro text

    // load chosen auto's pic, caption and history in DOM
    $(".detail-image").attr("src", chosenPic);
    $(".detail-image-title").html(carMakeCaption);
    console.log(chosenAutoHistory);
    $(".autoSummary").load(chosenAutoHistory);
  }

  // WITHOUT EVENT LISTENERS
  // $("a").click(function(event) {
  //   document.getElementsByClassName('detail-image')[0].src = chosenPic;
  //   document.getElementsByClassName('detail-image-title')[0].innerHTML = carMakeCaption;
  // });

});