function get_location(){
	if(Modernizr.geolocation){
		navigator.geolocation.getCurrentPosition(show_map);
	} else {
		document.write("No native suport, try other form.");
	}

}
