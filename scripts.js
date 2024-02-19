 // Require the necessary modules for the ArcGIS API
 require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/Sketch",
    "esri/widgets/Home"
  ], function(esriConfig, Map, MapView, Sketch, Home) {
    // Set the API key obtained from https://developers.arcgis.com/api-keys/ on the user dashboard, without the api key most basemap services would require sign in
   // esriConfig.apiKey = "AAPKfe75a1a0fdf64f4eb98ecedea8361482hVRNN1YTOm4xBGR2FveYly67Eyu7dhvwd_Kl4dOg0QdIUnXDzEA2tk0bJdQS00z6";

    // Create a new map with the arcgis-topographic basemap
    const map = new Map({
      basemap: "arcgis/topographic"  // basemap styles service, others include, streets, satellite, hybrid, and gray
    });

    // Create a new MapView and set its properties
    const view = new MapView({
      map: map,
      center: [114.2985, 30.5843], // Longitude, latitude for Wuhan, Hubei Province, China
      zoom: 13, // Zoom level
      container: "viewDiv" // Div element to contain the map view
    });

    // Create a Sketch widget and add it to the view on the top-right section of the webmap
    // The Sketch widget allows users to create and edit graphics on the map, such as points, lines, and polygons
   // It provides tools for drawing, editing, and deleting graphics
    const sketchWidget = new Sketch({
      view: view
    });
    view.ui.add(sketchWidget, "top-right");

    // Create a Home widget and add it to the view top-left section of the webmap
    //the home widget when clicked, it makes the map go to it's original display  extent or auto upgrade if cannot fit in current display
    const homeWidget = new Home({
      view: view
    });
    view.ui.add(homeWidget, "top-left");
  });