// Main Program
jQuery( document ).ready( function() {

	var bodyEl = jQuery( document );

	var width = window.innerWidth;
	//var width = "100%";

	var height = window.innerHeight;
	//var height = "100%";

	var strHtml = "<svg id='mainSvg' width='" + width + "' height='" + height + "'></svg>";

	jQuery( "body" ).append( strHtml );

	/*jQuery("<svg></svg>" ).appendTo( "body" )
		.attr( "id", "mainSvg" )
		.attr( "width", "100%" )
		.attr( "height", "100%" );*/

	var s = Snap( "#mainSvg" ); // s = svg Snap element

	s.rect( 100, 100, 100, 100 );

});