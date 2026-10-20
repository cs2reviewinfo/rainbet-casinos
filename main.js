(function(){
  var body=document.body,btn=document.querySelector('.menu-toggle'),scrim=document.querySelector('.scrim');
  var mobile=window.matchMedia('(max-width:1024px)');
  try{if(localStorage.getItem('rb-nav')==='hidden'&&!mobile.matches)body.classList.add('nav-hidden')}catch(e){}
  function sync(){btn.setAttribute('aria-expanded',mobile.matches?body.classList.contains('nav-open'):!body.classList.contains('nav-hidden'))}
  function close(){body.classList.remove('nav-open');sync()}
  btn.addEventListener('click',function(){
    if(mobile.matches){body.classList.toggle('nav-open')}
    else{body.classList.toggle('nav-hidden');try{localStorage.setItem('rb-nav',body.classList.contains('nav-hidden')?'hidden':'shown')}catch(e){}}
    sync();
  });
  scrim.addEventListener('click',close);
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
  document.querySelectorAll('.sidebar nav a').forEach(function(a){a.addEventListener('click',function(){if(mobile.matches)close()})});
  mobile.addEventListener('change',function(){body.classList.remove('nav-open');sync()});
  sync();
})();
