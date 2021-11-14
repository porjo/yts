
const anytimeViewCount = "CAMSAhAB";
const anytimeUploadDate = "CAI%253D";
const over20ViewCount = "CAMSBBABGAI%253D";
const over20UploadDate = "CAISAhgC";

$(function(){

	$("#go-button").click(function() {
		var keyword = $("#keyword").val();
		var over20 = $("#over20").is(":checked");
		var dateSort = $("#dateSort").is(":checked");

		//console.log(over20, dateSort);

		var url = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(keyword) + '&sp=';
		if(over20){
			if(dateSort) {
				url += over20UploadDate;
			} else {
				url += over20ViewCount;
			}
		} else {
			if(dateSort) {
				url += anytimeUploadDate;
			} else {
				url += anytimeViewCount;
			}
		}
		//console.log(url);
		window.open(url);
	});
});
