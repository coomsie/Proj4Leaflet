var crs = new L.Proj.CRS('EPSG:2193',
	'+proj=tmerc +lat_0=0 +lon_0=173 +k=0.9996 +x_0=1600000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
	{
		transformation: new L.Transformation(1, 4020900, -1, 19998100),
		resolutions: [
			4233.341800016934,
			2116.670900008467,
			1058.3354500042335,
			529.1677250021168,
			264.5838625010584,
			198.43789687579377,
			132.2919312505292,
			66.1459656252646,
			26.458386250105836,
			13.229193125052918,
			6.614596562526459,
			5.291677250021167,
			3.9687579375158752,
			2.6458386250105836,
			2.116670900008467,
			1.0583354500042335,
			0.5291677250021167,
			0.26458386250105836,
			0.13229193125052918,
			0.06614596562526459
		]
	});


// pass crs into map constructor
var map = new L.Map('map', {
  crs: crs,
	continuousWorld: true,
	worldCopyJump: false
});

// create new TiledMapLayer from esri-leaflet
var url = 'http://gis{s}.ecan.govt.nz/arcgis/rest/services/Imagery/NZAM_11010_Christchurch_20110224/MapServer',
attrib = 'Land Information New Zealand http://creativecommons.org/licenses/by/3.0/nz/';
var tLayer = new L.esri.TiledMapLayer(url, {
  maxZoom: 19,
  minZoom: 0,
  continuousWorld: true,
  attribution: attrib,
	subdomains: '123'
});

map.addLayer(tLayer);
// set map view and add layer
map.setView([-43.53164, 172.63620], 10);

L.esri.dynamicMapLayer("http://gis.ecan.govt.nz/arcgis/rest/services/Public/District_Planning_Zones/MapServer", {
  opacity : 0.25,
  layers: [0],

}).addTo(map);


function onMapMouseMove(e) {
	//console.log("xy: " + e.latlng);
}

map.on('mousemove', onMapMouseMove);
