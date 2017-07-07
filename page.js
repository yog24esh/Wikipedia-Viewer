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
      url:"https://en.wikipedia.org/w/api.php",
      dataType:'jsonp',
      type:'GET',
      data:{
        action:'opensearch',
        format:'json',
        search: $(".searchWord").val(),
       
      },
      //  srsearch:$(".searchWord").val(),
      success:function(response){
        $('.wrap').css("margin-top","4%");
        $('.wrap').hide();
        $('.results').text("You searched on:"+$('.searchWord').val() + '"');
       for(var i=0;i<response[1].length;i++){
         var wiki_article = document.createElement('div');
         wiki_article.className = 'wiki_article';
      var wiki_link = document.createElement('a');
         wiki_link.setAttribute('href',response[3][i]);
         wiki_link.setAttribute("target",'_blank');
         wiki_link.appendChild(wiki_article);
         
         var title = document.createElement('h4');
         var title_text = document.createTextNode(response[1][i]);
         title.appendChild(title_text);
         wiki_article.appendChild(title);
         
         var summary = document.createElement('p');
         var summary_text = document.createTextNode(response[3][i]);
         summary.appendChild(summary_text);
         wiki_article.appendChild(summary);
         document.body.appendChild(wiki_link);
       } ;
        
      },
      
    })
    
    
    }//if end
    })
    
    }
  })
})
