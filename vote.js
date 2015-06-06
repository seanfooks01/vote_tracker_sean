var url, leftPhoto, rightPhoto;

  var Photo = function(url, score){
    this.url = url;
    this.score = score;
  }

var photos = [
  new Photo("images/01.jpg", 0),
  new Photo("images/02.jpg", 0),
  new Photo("images/03.jpg", 0),
  new Photo("images/04.jpg", 0),
  new Photo("images/05.jpg", 0),
  new Photo("images/06.jpg", 0),
  new Photo("images/07.jpg", 0),
  new Photo("images/08.jpg", 0),
  new Photo("images/09.jpg", 0),
  new Photo("images/10.jpg", 0),
  new Photo("images/11.jpg", 0),
  new Photo("images/12.jpg", 0),
  new Photo("images/13.jpg", 0),
  new Photo("images/14.jpg", 0)
];


var newLeft = function(){
  var randomLeft = Math.floor(Math.random()* photos.length);
  leftPhoto = photos[randomLeft];


  $("#image_one").attr("src", leftPhoto.url);
}

var newRight = function(){
  var randomRight = Math.floor(Math.random() * photos.length);
  rightPhoto = photos[randomRight];

  $("#image_two").attr("src", rightPhoto.url);
}

newLeft();
newRight();

$("#image_one").click(newLeft);
$("#image_two").click(newRight);



