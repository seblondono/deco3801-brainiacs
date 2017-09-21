$(document).ready(function(){
 $.jqplot.config.enablePlugins = true;	
	$.get("/backend/data/visits", function(data, status){
		if (status=="success"){
			visits= JSON.parse(data);
			graph(visits);	
		}	        
	});
function graph(visits){    
console.log(visits)


    var data = [];
     for (let i =0, len = visits.length; i<len;i++){
	data.push([new Date(visits[i].fields.time),visits[i].fields.count]);
}
    plot2 = $.jqplot('chart2', [data], {
	title:'Unique Visits Per Day',
        axes: {
            xaxis: {
		label:'Day',
                renderer: $.jqplot.DateAxisRenderer,
		tickOptions:{formatString:'%b %#d'},
		
            },
		yaxis:{label:"Visits",
		min:0,
		
		 tickOptions:{formatString:'%d'}}
        },
	cursor: {show:false},
      series:[{lineWidth:4,}]
    });
 
}

$.get("/backend/data/comments",function(data, status){
	if (status=="success"){
		comments=JSON.parse(data);
		commentTable(comments);
	}
});
function commentTable(comments){
	out="<thead><tr><th>Name</th><th>Comment</th><th>Time</th></tr></thead><tbody>";
	for (i=0;i<comments.length;i++){
		fname=comments[i].fields.fname;
		lname=comments[i].fields.lname;
		email=comments[i].fields.email;
		comment = comments[i].fields.comment;
		time = new Date(comments[i].fields.time);
		timestr = time.toLocaleTimeString()+"</br>"+time.toLocaleDateString();
		namestr = fname+" "+lname+"</br>"+email;
		out+="<tr><td>"+[namestr, comment, timestr].join("</td><td>")+"</td></tr>";
	}
	out+="</tbody>"
	document.getElementById("commentstable").innerHTML = out;
}
});
