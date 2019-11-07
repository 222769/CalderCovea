(function( $ ) {
  // constants
  var SHOW_CLASS = 'show',
      HIDE_CLASS = 'hide',
      ACTIVE_CLASS = 'active';

  $( '.tabs' ).on( 'click', 'li a', function(e){
    e.preventDefault();
    var $tab = $( this ),
         href = $tab.attr( 'href' );

     $( '.active' ).removeClass( ACTIVE_CLASS );
     $tab.addClass( ACTIVE_CLASS );

     $( '.show' )
        .removeClass( SHOW_CLASS )
        .addClass( HIDE_CLASS )
        .hide();

      $(href)
        .removeClass( HIDE_CLASS )
        .addClass( SHOW_CLASS )
        .hide()
        .fadeIn( 550 );
  });
})( jQuery );

function encrypt()
{
var pass=document.getElementById('password').value;
var hide=document.getElementById('hide').value;
if(pass=="")

//Error checking, will warn that their is no password in input box
{
document.getElementById('err').innerHTML='Error:Password is missing';
return false;
}
else

//Encrypts the password into a hash
{
document.getElementById("hide").value = document.getElementById("password").value;
var hash = CryptoJS.MD5(pass);
document.getElementById('password').value=hash;
return true;
}
}
