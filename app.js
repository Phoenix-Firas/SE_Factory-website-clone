
var header_links = document.getElementById('header-links');
var landing_section = document.getElementById('landing-section');
// var body = document.body;
var home = document.getElementById('home'); 
var train = document.getElementById('train'); 
var hire = document.getElementById('hire'); 
var fqas = document.getElementById('fqas'); 
var blog = document.getElementById('blog'); 
var about = document.getElementById('hire'); 
var apply = document.getElementById('apply');

var header_links_list = [home, train, hire, fqas, blog, about, apply];

header_links.addEventListener('click', ()=>{
    var i = 0;
    console.log( header_links_list[i])
    for(i = 0; i<=header_links_list.length; i++){
    header_links_list[i].style.display = 'flex';
    }
console.log( header_links_list[i])
})




///////////////////////////////////////////////////



