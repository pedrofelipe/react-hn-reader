// This is just a simple sample code to show you the usage of the api
// Feel free to rewrite and improve or delete and start from scratch
$(document).ready(function(){
	$.get('https://hacker-news.firebaseio.com/v0/topstories.json', function(res1) {
		var nwsArr = res1.forEach(function(r){
			$.get('https://hacker-news.firebaseio.com/v0/item/' + r + '.json', function(res2) {
				$('.list').append('<li class="story">' + res2.title + '</li>');
			});
		});
	});
});