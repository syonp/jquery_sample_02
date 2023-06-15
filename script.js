// Fade Sample ////////////
$( function() {

  $(".fade").fadeTo(0,1.0); // 初期状態 50%

  $(".fade").hover(
    function(){
      $(this).fadeTo("fast", 1.0); // マウスが載ったら100%までフェードする
    },
    function(){
      $(this).fadeTo("slow", 0.2); // マウスが離れたら50%に戻す
    }
  );

});

// Animate Sample //////////
$( function(){
  $("#left").click( function(){
    $('#move').animate( { 'left': '-=200px' } , { 'duration': 100 } );
  });
  $("#right").click( function(){
    $('#move').animate( { 'left': '+=200px' } , { 'duration': 1000 } );
  });
  $("#center").click( function(){
    var optionObj = new Object();
    optionObj.left = $('body').outerWidth() / 2 - 100;
    $('#move').animate( optionObj , { 'duration': 1000 } );
  });
});
