$(document).ready(function(){
  $(".searchWord").focus();
  $(".searchWord").one("keyup",function(e){
  if(e.keyCode==32){
  window.location.href='https://en.wikipedia.org/wiki/Special:Random';
  }
  else{
    $(".searchWord").keyup(function(e){
    if(e.keyCode==13){  
   
      $.ajax({
      url:"",
      dataType:'json',
      type:'get',
      //  srsearch:$(".searchWord").val(),
      success:function(data){
         console.log(data);
      }
      
    })
    
    
    }//if end
    })
    
    }
  })
})
