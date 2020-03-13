//var thumbContainer = document.getElementById("video_thumb");
var VideoContainer = document.getElementById("video_info");
//var plContainer = document.getElementById("video_pl");

var i = 0;

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://raw.githubusercontent.com/Albina-fazenda/repo2/master/R1.json');

ourRequest.onload = function() {
var OurData=JSON.parse(ourRequest.responseText);
renderHTML(OurData);


};

ourRequest.send();



function renderHTML(data) {

   // var htmlStringthumb =  data[i].thumb;
   // var htmlStringname =  data[i].name;
   // var htmlStringpl =  data[i].pl;
    
 

    

    for (i = 0; i < data.length; i++) {


        var htmlString = '<a href="' + data[i].name +'"> <img src="' + data[i].thumb + '" style="width:640px;height:360px;border:0;"></a>';

        VideoContainer.insertAdjacentHTML('beforeend',htmlString);

        console.log(htmlString);

        
      }

  
   //console.log(htmlStringname);
   //console.log(htmlStringpl);



}