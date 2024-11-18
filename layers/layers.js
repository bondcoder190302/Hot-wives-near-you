var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BoudaryWallL_1 = new ol.format.GeoJSON();
var features_BoudaryWallL_1 = format_BoudaryWallL_1.readFeatures(json_BoudaryWallL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoudaryWallL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BoudaryWallL_1.addFeatures(features_BoudaryWallL_1);
var lyr_BoudaryWallL_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BoudaryWallL_1, 
                style: style_BoudaryWallL_1,
                popuplayertitle: "Boudary Wall(L)",
                interactive: true,
                title: 'Boudary Wall(L)'
            });
var format_PipeLineL_2 = new ol.format.GeoJSON();
var features_PipeLineL_2 = format_PipeLineL_2.readFeatures(json_PipeLineL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PipeLineL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PipeLineL_2.addFeatures(features_PipeLineL_2);
var lyr_PipeLineL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PipeLineL_2, 
                style: style_PipeLineL_2,
                popuplayertitle: "Pipe Line(L)",
                interactive: true,
                title: 'Pipe Line(L)'
            });
var format_Datapressure2_3 = new ol.format.GeoJSON();
var features_Datapressure2_3 = format_Datapressure2_3.readFeatures(json_Datapressure2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Datapressure2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Datapressure2_3.addFeatures(features_Datapressure2_3);
var lyr_Datapressure2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Datapressure2_3, 
                style: style_Datapressure2_3,
                popuplayertitle: "Datapressure (2)",
                interactive: true,
    title: 'Datapressure (2)<br />\
    <img src="styles/legend/Datapressure2_3_0.png" /> false<br />\
    <img src="styles/legend/Datapressure2_3_1.png" /> true<br />'
        });
var format_wsl_clean_4 = new ol.format.GeoJSON();
var features_wsl_clean_4 = format_wsl_clean_4.readFeatures(json_wsl_clean_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wsl_clean_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wsl_clean_4.addFeatures(features_wsl_clean_4);
var lyr_wsl_clean_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wsl_clean_4, 
                style: style_wsl_clean_4,
                popuplayertitle: "wsl_clean",
                interactive: true,
                title: '<img src="styles/legend/wsl_clean_4.png" /> wsl_clean'
            });
var group_Boundary = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Boundary"});
var group_OLDDrain = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "OLDDrain"});
var group_WaterLineDiaText = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Water Line Dia Text"});
var group_Text2500 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Text-2500"});
var group_TextForElectrical = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Text For Electrical"});
var group_TextBuilding = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Text Building"});
var group_TextRoad = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Text Road"});
var group_Well = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Well"});
var group_Text500 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Text-500"});
var group_Pond = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Pond"});
var group_Valve = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Valve"});
var group_0 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "0"});
var group_Lake = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lake"});
var group_Steps = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Steps"});
var group_RoadBinding = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Road Binding"});
var group_SwmPool = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Swm Pool"});
var group_Gate = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Gate"});
var group_Tower = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Tower"});
var group_Tanks = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Tanks"});
var group_Road = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Road"});
var group_ElectricPole = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Electric Pole"});
var group_PipeLine = new ol.layer.Group({
                                layers: [lyr_PipeLineL_2,],
                                fold: "open",
                                title: "Pipe Line"});
var group_BoudaryWall = new ol.layer.Group({
                                layers: [lyr_BoudaryWallL_1,],
                                fold: "open",
                                title: "Boudary Wall"});
var group_WaterSupplyLine = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Water Supply Line"});
var group_WaterMeter = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Water Meter"});
var group_CompoundWall = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Compound Wall"});
var group_Building = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Building"});
var group_HTLine = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "H.T.Line"});
var group_FH = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "FH"});
var group_OLDCulvert = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "OLDCulvert"});
var group_Huts = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Huts"});
var group_Shed = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Shed"});
var group_Fencing = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Fencing"});

lyr_OpenStreetMap_0.setVisible(true);lyr_BoudaryWallL_1.setVisible(true);lyr_PipeLineL_2.setVisible(true);lyr_Datapressure2_3.setVisible(true);lyr_wsl_clean_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_BoudaryWall,group_PipeLine,lyr_Datapressure2_3,lyr_wsl_clean_4];
lyr_BoudaryWallL_1.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', });
lyr_PipeLineL_2.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', });
lyr_Datapressure2_3.set('fieldAliases', {'_uid_': '_uid_', 'elevation_': 'elevation_', 'distance_t': 'distance_t', 'composite_': 'composite_', 'rank': 'rank', 'Prstart': 'Prstart', 'Prend': 'Prend', 'Prdiff': 'Prdiff', 'Pr_leak': 'Pr_leak', 'st_x': 'st_x', 'st_y': 'st_y', 'Leakage': 'Leakage', 'Lbl_leak': 'Lbl_leak', });
lyr_wsl_clean_4.set('fieldAliases', {'Layer': 'Layer', 'SubClasses': 'SubClasses', 'EntityHand': 'EntityHand', 'ogr_style': 'ogr_style', 'color': 'color', 'Length': 'Length', });
lyr_BoudaryWallL_1.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHand': '', 'Text': '', 'ogr_style': '', 'font': '', 'angle': '', 'size': '', 'size_u': '', 'anchor': '', 'color': '', 'underline': '', 'plaintext': '', 'fcolor': '', 'flnum': '', 'bold': '', 'italic': '', 'dx': '', 'dx_u': '', 'dy': '', 'dy_u': '', });
lyr_PipeLineL_2.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHand': '', 'Text': '', 'ogr_style': '', 'font': '', 'angle': '', 'size': '', 'size_u': '', 'anchor': '', 'color': '', 'underline': '', 'plaintext': '', 'fcolor': '', 'flnum': '', 'bold': '', 'italic': '', 'dx': '', 'dx_u': '', 'dy': '', 'dy_u': '', });
lyr_Datapressure2_3.set('fieldImages', {'_uid_': 'Range', 'elevation_': 'Hidden', 'distance_t': 'Hidden', 'composite_': 'Hidden', 'rank': 'Hidden', 'Prstart': 'Hidden', 'Prend': 'Hidden', 'Prdiff': 'Hidden', 'Pr_leak': 'Hidden', 'st_x': 'Hidden', 'st_y': 'Hidden', 'Leakage': 'CheckBox', 'Lbl_leak': 'Hidden', });
lyr_wsl_clean_4.set('fieldImages', {'Layer': '', 'SubClasses': '', 'EntityHand': '', 'ogr_style': '', 'color': '', 'Length': '', });
lyr_BoudaryWallL_1.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', 'ogr_style': 'no label', 'font': 'no label', 'angle': 'no label', 'size': 'no label', 'size_u': 'no label', 'anchor': 'no label', 'color': 'no label', 'underline': 'no label', 'plaintext': 'no label', 'fcolor': 'no label', 'flnum': 'no label', 'bold': 'no label', 'italic': 'no label', 'dx': 'no label', 'dx_u': 'no label', 'dy': 'no label', 'dy_u': 'no label', });
lyr_PipeLineL_2.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', 'ogr_style': 'no label', 'font': 'no label', 'angle': 'no label', 'size': 'no label', 'size_u': 'no label', 'anchor': 'no label', 'color': 'no label', 'underline': 'no label', 'plaintext': 'no label', 'fcolor': 'no label', 'flnum': 'no label', 'bold': 'no label', 'italic': 'no label', 'dx': 'no label', 'dx_u': 'no label', 'dy': 'no label', 'dy_u': 'no label', });
lyr_Datapressure2_3.set('fieldLabels', {'_uid_': 'no label', 'Leakage': 'no label', });
lyr_wsl_clean_4.set('fieldLabels', {'Layer': 'no label', 'SubClasses': 'no label', 'EntityHand': 'no label', 'ogr_style': 'no label', 'color': 'no label', 'Length': 'no label', });
lyr_wsl_clean_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});