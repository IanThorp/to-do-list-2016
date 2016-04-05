$( document ).ready( function() {

  loginLinkListener();
  loginSubmitListener();
  createUserLinkListener();
});

var loginLinkListener = function(){
  $( "#login_link" ).on( "click", function( event ){
    event.preventDefault();

    var ajaxRequest = $.ajax({
      method: "get",
      url: "/users/login",
    });

    ajaxRequest.done( function( data ){
      if ( $( '#login_form' ).length === 1 ) {
        $( '#login_form' ).remove();
      } else {
        $( '#new_user_form' ).remove();
        $( 'body' ).append( data );
      }
    });

    ajaxRequest.fail( function(){
      console.log( "Request failed" );
    });
  });
}

var loginSubmitListener = function(){
  $( "body" ).on( "submit", "#login_form", function( event ){
    event.preventDefault();
    var form_data = $( this ).serialize();
    var ajaxRequest = $.ajax({
      method: "post",
      url: "/users/login",
      data: form_data
    });

    ajaxRequest.done( function(){
      $( "#login_form" ).remove();
    });

    ajaxRequest.fail( function(){
      console.log( "Login error" )
    });
  });
}

var createUserLinkListener = function(){
  $( "#create_link" ).on( "click", function( event ){
    event.preventDefault();
    var ajaxRequest = $.ajax({
      method: "get",
      url: "/users/new"
    });

    ajaxRequest.done( function( data ){
      if ( $( "#new_user_form" ).length === 1 ) {
        $( "#new_user_form" ).remove();
      } else {
      $( "#login_form" ).remove();
      $( "body" ).append( data );
      }
    });

    ajaxRequest.fail( function(){
      console.log( "Create new user request failed" );
    });
  });
}

var createUserSubmitListener = function(){
  $( "body" ).on( "submit", "#new_user_form", function( event ){
    event.preventDefault();

  })
}
