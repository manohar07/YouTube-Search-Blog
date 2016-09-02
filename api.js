$("#search").click(function(){
   	
   	var str=$("#youTube").val();
    console.log(str);
    var url="https://www.googleapis.com/youtube/v3/search?part=snippet&q="+str+"&type=video&key=AIzaSyBD5_N95bQXktIBLYLuu10kOxV_QKmZFow&maxResult=10";
	$.getJSON(url,function(data) {
   
    var arrayofsearch = data.items;
    console.log(arrayofsearch);

    var html = "<table border=1 cellspacing=0 cellpadding=5><tr><th>Thumbnail</th><th>Title</th><th>Link</th></tr>";
 
        for(var i=0;i<arrayofsearch.length;i++){
        // console.log(arrayofsearch[i].snippet.thumbnails.default.url);	
            html += "<tr><td><img src='"+arrayofsearch[i].snippet.thumbnails.default.url+"'</td><td>"+arrayofsearch[i].snippet.title+"</td><td><a href=\"https://www.youtube.com/watch?v="+arrayofsearch[i].id.videoId+"\" target=_new class=\"btn btn-primary\">Play video</a></td></tr>";
        
        }
 
        html += "</table>";
        
        $("#demo").html(html); 
    
    
 });
})