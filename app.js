
const anytimeViewCount = "CAMSAhAB";
const anytimeUploadDate = "CAI%253D";
const over20ViewCount = "CAMSBBABGAI%253D";
const over20UploadDate = "CAISAhgC";

$(function(){

	var search = function() {
		var keyword = $("#keyword").val();
		if (keyword === "") { return; }
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
	};
	$("#keyword").focus();
	$("#keyword").on("keypress",function(e) {
		if(e.which == 13) {
			search();
		}
	});
	$("#go-button").click(search);
});
