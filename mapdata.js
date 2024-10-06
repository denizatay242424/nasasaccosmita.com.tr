var simplemaps_continentmap_mapdata={
  main_settings: {
    //General settings
		width: "700", //or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    popups: "detect",
    
		//State defaults
		state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "https://simplemaps.com",
    border_size: 1.5,
    border_color: "#ffffff",
    all_states_inactive: "no",
    all_states_zoomable: "no",
    
		//Location defaults
		location_description: "Location description",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
		//Label defaults
		label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 100,
    label_font: "Arial",
    hide_labels: "no",
   
		//Zoom settings
		manual_zoom: "no",
    back_image: "no",
    arrow_box: "no",
    navigation_size: "40",
    navigation_color: "#f7f7f7",
    navigation_border_color: "#636363",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
		//Popup settings
		popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
		//Advanced settings
		div: "map",
    auto_load: "yes",
    rotate: "0",
    url_new_tab: "yes",
    images_directory: "default",
    import_labels: "no",
    fade_time: 0.1,
    link_text: "View Website"
  },
  state_specific: {
    SA: {
      name: "South America",
      description: "Industrial Production: Approximately 5% of global industrial production.Energy Consumption: 6-7% of global energy consumption.Greenhouse Gas Emissions: South America produces approximately 3-5% of global carbon emissions. While industrial carbon emissions are relatively low in this region, deforestation and agricultural activities in particular are a major source of greenhouse gas emissions.",
      color: "#CC33FF",
      hover_color: "#751d92",
      url: "default"
    },
    NA: {
      name: "North Amerika",
      description: "Industrial Production: Approximately 18-20% of global industrial production.Energy Consumption: 17% of global energy consumption.Greenhouse Gas Emission: North America is responsible for approximately 18-20% of global carbon emissions. The USA is the world's second largest carbon emitter, with annual carbon emissions of around 15 tons per capita.",
      color: "#3366FF",
      hover_color: "#1c388c",
      url: "default"
    },
    EU: {
      name: "Europe",
      description: "Industrial Production: It provides approximately 15-20% of global industrial production.Energy Consumption: 10% of global energy consumption.Greenhouse Gas Emission: Europe is responsible for approximately 8-10% of global carbon emissions. It has taken significant steps to reduce carbon emissions, especially since the 1990s.",
      color: "#FF3366",
      hover_color: "#c0264d",
     
    },
    AF: {
      name: "Africa",
      description: "Industrial Production: 2% of global industrial production.Energy Consumption: 3% of global energy consumption.Greenhouse Gas Emissions: Africa is responsible for approximately 3-4% of global carbon emissions. Although industrial and energy consumption are low, many regions with limited access to energy still rely on fossil fuels. South Africa is Africa's largest source of carbon emissions due to its use of coal.",
      color: "#33FF66",
      hover_color: "#1a8535",
      url: "default"
    },
    NS: {
      name: "Asia",
      description: "Industrial Production: Approximately 50-55% of global industrial production. China alone accounts for more than 30%.Energy Consumption: 40-45% of global energy consumption.Greenhouse Gas Emissions: Asia is responsible for approximately 50-55% of global greenhouse gas emissions. ",
      color: "#FFCC33",
      hover_color: "#ac4422",
      url: "default"
    },
    SS: {
      name: "Asia",
      description: "Industrial Production: Approximately 50-55% of global industrial production. China alone accounts for more than 30%.Energy Consumption: 40-45% of global energy consumption.Greenhouse Gas Emissions: Asia is responsible for approximately 50-55% of global greenhouse gas emissions.",
      color: "#FFCC33",
      hover_color: "#ac4422",
      url: "default"
    },
    ME: {
      name: "Asia",
      description: "dIndustrial Production: Approximately 50-55% of global industrial production. China alone accounts for more than 30%.Energy Consumption: 40-45% of global energy consumption.Greenhouse Gas Emissions: Asia is responsible for approximately 50-55% of global greenhouse gas emissions.",
      color: "#FFCC33",
      hover_color: "#ac4422",
      url: "default"
    },
    OC: {
      name: "Oceania",
      description: "Industrial Production: Less than 1% of global industrial production.Energy Consumption: 1-2% of global energy consumption.Greenhouse Gas Emissions: Oceania is responsible for approximately 1.5% of global carbon emissions. Australia is one of the world leaders in per capita carbon emissions due to coal exports and fossil fuel-based energy production",
      color: "#FF33CC",
      hover_color: "#b1238d",
      url: "default"
    }
  },
  locations: {
    "0": {
      name: "New York",
      lat: 40.71,
      lng: -74.0059731,
      description: "",
      color: "default",
      url: "default",
      size: "default"
    },
    "1": {
      name: "London",
      lat: 51.5073346,
      lng: -0.1276831,
      description: "",
      color: "default",
      url: "default"
    }
  },
  labels: {}
};

