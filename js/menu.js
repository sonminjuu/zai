$(document).ready(function(){

    var click=0;
    $(".tab_right_in1").click(function(){
        if (click == 0){
        $("#m_menu").animate({
            left: "0",
      });
      click=1;
    }

      else if(click==1){
        $("#m_menu").animate({
            left: "100%",
          });
           click=0;
      }
    });

    

    
}); //end