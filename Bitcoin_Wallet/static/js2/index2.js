var groceryMap = [
  new google.maps.LatLng(26.922070, 75.778885)

];
var gasMap = [
 
];
var hardwareMap = [

];
var all = groceryMap.concat(gasMap).concat(hardwareMap);
var groceryGas = groceryMap.concat(gasMap);
var groceryHardware = groceryMap.concat(hardwareMap);
var gasHardware = hardwareMap.concat(gasMap);
var mapOptions = {
  zoom: 9,
  center: new google.maps.LatLng(26.922070, 75.778885),
  mapTypeId: google.maps.MapTypeId.HYBRID
}
var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

var heatmap = new google.maps.visualization.HeatmapLayer({
  data: all
});
heatmap.set('radius', heatmap.get('radius') ? null : 50);
heatmap.setMap(map);
heatmap.setOptions({
  maxIntensity: 8
});

//$('#grocery').click(function() 
var x=30;
setInterval(function(){ 
x=x+20;

if(x==50)
{
  heatmap.setMap(null);
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: groceryMap
  });
  heatmap.set('radius', heatmap.get('radius') ? null : 50);
  heatmap.setMap(map);
}
//);
//$('#gas').click(function()
else if (x==70)
 {
  heatmap.setMap(null);
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: gasMap
  });
  heatmap.set('radius', heatmap.get('radius') ? null : 35);
  heatmap.setMap(map);
  heatmap.setOptions({
    maxIntensity: 200
  });
}
//);
//$('#hardware').click(function() 
else if (x==90)
{
  heatmap.setMap(null);
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: hardwareMap
  });
  heatmap.set('radius', heatmap.get('radius') ? null : 70);
  heatmap.setMap(map);
  heatmap.setOptions({
    maxIntensity: 3
  });
}
//);
//$('#groceryHardware').click(function()
 else if (x==90)
 {
  heatmap.setMap(null);
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: groceryHardware
  });
  heatmap.set('radius', heatmap.get('radius') ? null : 50);
  heatmap.setMap(map);
  heatmap.setOptions({
    maxIntensity: 10
  });
}
//);
//$('#gasHardware').click(function()
else if (x==90)
 {
  heatmap.setMap(null);
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: gasHardware
  });
  heatmap.set('radius', heatmap.get('radius') ? null : 50);
  heatmap.setMap(map);
  heatmap.setOptions({
    maxIntensity: 10
  });
}
//);
//$('#groceryGas').click(function()
else if (x==90)
 {
  heatmap.setMap(null);
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: groceryGas
  });
  heatmap.set('radius', heatmap.get('radius') ? null : 50);
  heatmap.setMap(map);
}
//);
//$('#all').click(function()
else if (x==90)
	{
  heatmap.setMap(null);
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: all
  });
  heatmap.set('radius', heatmap.get('radius') ? null : 50);
  heatmap.setMap(map);
  heatmap.setOptions({
    maxIntensity: 8
  });
}
//);


}, 4000); 