let toggle = document.querySelector('.toggle-button');
let collapse = document.querySelector('.toggle-collapse');
let times = document.querySelector('.times');

// let collapseDisplay = document.querySelector('.toggle-collapse-display');

// let collapseToggle = document.querySelector(".collapse-toggle")
//
// bringOutCollapse = () =>{
//   collapse.style.display = 'block';
// }
//
toggle.addEventListener('click' , function(){
  collapse.style.display = 'block';

});
times.addEventListener('click' , function(){
  collapse.style.display = 'none';

});

// with masonry
// new Masonry(".posts .grid", {
//     itemSelector : '.grid-item',
//     gutter : 20
// });
var msnry = new Masonry( '.grid', {
  itemSelector: '.grid-item'
});
