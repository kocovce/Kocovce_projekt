var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Nvrhnovchlmpverejnhoosvetlenia_1 = new ol.format.GeoJSON();
var features_Nvrhnovchlmpverejnhoosvetlenia_1 = format_Nvrhnovchlmpverejnhoosvetlenia_1.readFeatures(json_Nvrhnovchlmpverejnhoosvetlenia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nvrhnovchlmpverejnhoosvetlenia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nvrhnovchlmpverejnhoosvetlenia_1.addFeatures(features_Nvrhnovchlmpverejnhoosvetlenia_1);
var lyr_Nvrhnovchlmpverejnhoosvetlenia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nvrhnovchlmpverejnhoosvetlenia_1, 
                style: style_Nvrhnovchlmpverejnhoosvetlenia_1,
                interactive: true,
                title: '<img src="styles/legend/Nvrhnovchlmpverejnhoosvetlenia_1.png" /> Návrh nových lámp verejného osvetlenia'
            });
var format_Nvrhnovchlaviiek_2 = new ol.format.GeoJSON();
var features_Nvrhnovchlaviiek_2 = format_Nvrhnovchlaviiek_2.readFeatures(json_Nvrhnovchlaviiek_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nvrhnovchlaviiek_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nvrhnovchlaviiek_2.addFeatures(features_Nvrhnovchlaviiek_2);
var lyr_Nvrhnovchlaviiek_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nvrhnovchlaviiek_2, 
                style: style_Nvrhnovchlaviiek_2,
                interactive: true,
                title: '<img src="styles/legend/Nvrhnovchlaviiek_2.png" /> Návrh nových lavičiek'
            });
var format_Nvrhnovchodpadkovchkoov_3 = new ol.format.GeoJSON();
var features_Nvrhnovchodpadkovchkoov_3 = format_Nvrhnovchodpadkovchkoov_3.readFeatures(json_Nvrhnovchodpadkovchkoov_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nvrhnovchodpadkovchkoov_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nvrhnovchodpadkovchkoov_3.addFeatures(features_Nvrhnovchodpadkovchkoov_3);
var lyr_Nvrhnovchodpadkovchkoov_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nvrhnovchodpadkovchkoov_3, 
                style: style_Nvrhnovchodpadkovchkoov_3,
                interactive: true,
                title: '<img src="styles/legend/Nvrhnovchodpadkovchkoov_3.png" /> Návrh nových odpadkových košov'
            });
var format_Chodnky_4 = new ol.format.GeoJSON();
var features_Chodnky_4 = format_Chodnky_4.readFeatures(json_Chodnky_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chodnky_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chodnky_4.addFeatures(features_Chodnky_4);
var lyr_Chodnky_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Chodnky_4, 
                style: style_Chodnky_4,
                interactive: true,
                title: '<img src="styles/legend/Chodnky_4.png" /> Chodníky'
            });
var format_Laviky_5 = new ol.format.GeoJSON();
var features_Laviky_5 = format_Laviky_5.readFeatures(json_Laviky_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Laviky_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Laviky_5.addFeatures(features_Laviky_5);
var lyr_Laviky_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Laviky_5, 
                style: style_Laviky_5,
                interactive: true,
                title: '<img src="styles/legend/Laviky_5.png" /> Lavičky'
            });
var format_Obalovznado300modlaviiek_6 = new ol.format.GeoJSON();
var features_Obalovznado300modlaviiek_6 = format_Obalovznado300modlaviiek_6.readFeatures(json_Obalovznado300modlaviiek_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obalovznado300modlaviiek_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obalovznado300modlaviiek_6.addFeatures(features_Obalovznado300modlaviiek_6);
var lyr_Obalovznado300modlaviiek_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Obalovznado300modlaviiek_6, 
                style: style_Obalovznado300modlaviiek_6,
                interactive: true,
                title: '<img src="styles/legend/Obalovznado300modlaviiek_6.png" /> Obalová zóna do 300m od lavičiek'
            });
var format_Lampyverejnhoosvetlenia_7 = new ol.format.GeoJSON();
var features_Lampyverejnhoosvetlenia_7 = format_Lampyverejnhoosvetlenia_7.readFeatures(json_Lampyverejnhoosvetlenia_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lampyverejnhoosvetlenia_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lampyverejnhoosvetlenia_7.addFeatures(features_Lampyverejnhoosvetlenia_7);
var lyr_Lampyverejnhoosvetlenia_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lampyverejnhoosvetlenia_7, 
                style: style_Lampyverejnhoosvetlenia_7,
                interactive: true,
                title: '<img src="styles/legend/Lampyverejnhoosvetlenia_7.png" /> Lampy verejného osvetlenia'
            });
var format_Odpadkovkoe_8 = new ol.format.GeoJSON();
var features_Odpadkovkoe_8 = format_Odpadkovkoe_8.readFeatures(json_Odpadkovkoe_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Odpadkovkoe_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Odpadkovkoe_8.addFeatures(features_Odpadkovkoe_8);
var lyr_Odpadkovkoe_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Odpadkovkoe_8, 
                style: style_Odpadkovkoe_8,
                interactive: true,
                title: '<img src="styles/legend/Odpadkovkoe_8.png" /> Odpadkové koše'
            });
var format_Obalovznado300modnavrhovanchlaviiek_9 = new ol.format.GeoJSON();
var features_Obalovznado300modnavrhovanchlaviiek_9 = format_Obalovznado300modnavrhovanchlaviiek_9.readFeatures(json_Obalovznado300modnavrhovanchlaviiek_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obalovznado300modnavrhovanchlaviiek_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obalovznado300modnavrhovanchlaviiek_9.addFeatures(features_Obalovznado300modnavrhovanchlaviiek_9);
var lyr_Obalovznado300modnavrhovanchlaviiek_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Obalovznado300modnavrhovanchlaviiek_9, 
                style: style_Obalovznado300modnavrhovanchlaviiek_9,
                interactive: true,
                title: '<img src="styles/legend/Obalovznado300modnavrhovanchlaviiek_9.png" /> Obalová zóna do 300m od navrhovaných lavičiek'
            });
var format_Obalovznado200modnavrhovanchodpadkovchkoov_10 = new ol.format.GeoJSON();
var features_Obalovznado200modnavrhovanchodpadkovchkoov_10 = format_Obalovznado200modnavrhovanchodpadkovchkoov_10.readFeatures(json_Obalovznado200modnavrhovanchodpadkovchkoov_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obalovznado200modnavrhovanchodpadkovchkoov_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obalovznado200modnavrhovanchodpadkovchkoov_10.addFeatures(features_Obalovznado200modnavrhovanchodpadkovchkoov_10);
var lyr_Obalovznado200modnavrhovanchodpadkovchkoov_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Obalovznado200modnavrhovanchodpadkovchkoov_10, 
                style: style_Obalovznado200modnavrhovanchodpadkovchkoov_10,
                interactive: true,
                title: '<img src="styles/legend/Obalovznado200modnavrhovanchodpadkovchkoov_10.png" /> Obalová zóna do 200m od navrhovaných odpadkových košov'
            });
var lyr_Hustotnmapanavrhovanhoosvetlenia_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hustotná mapa navrhovaného osvetlenia",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hustotnmapanavrhovanhoosvetlenia_11.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1990726.209938, 6230668.070079, 1991751.283013, 6232473.716126]
                            })
                        });
var format_Stopasvetlalmpverejnhoosvetlenia_12 = new ol.format.GeoJSON();
var features_Stopasvetlalmpverejnhoosvetlenia_12 = format_Stopasvetlalmpverejnhoosvetlenia_12.readFeatures(json_Stopasvetlalmpverejnhoosvetlenia_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stopasvetlalmpverejnhoosvetlenia_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stopasvetlalmpverejnhoosvetlenia_12.addFeatures(features_Stopasvetlalmpverejnhoosvetlenia_12);
var lyr_Stopasvetlalmpverejnhoosvetlenia_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Stopasvetlalmpverejnhoosvetlenia_12, 
                style: style_Stopasvetlalmpverejnhoosvetlenia_12,
                interactive: true,
                title: '<img src="styles/legend/Stopasvetlalmpverejnhoosvetlenia_12.png" /> Stopa svetla lámp verejného osvetlenia'
            });
var format_Stopasvetlanavrhovanhoosvetlenia_13 = new ol.format.GeoJSON();
var features_Stopasvetlanavrhovanhoosvetlenia_13 = format_Stopasvetlanavrhovanhoosvetlenia_13.readFeatures(json_Stopasvetlanavrhovanhoosvetlenia_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stopasvetlanavrhovanhoosvetlenia_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stopasvetlanavrhovanhoosvetlenia_13.addFeatures(features_Stopasvetlanavrhovanhoosvetlenia_13);
var lyr_Stopasvetlanavrhovanhoosvetlenia_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Stopasvetlanavrhovanhoosvetlenia_13, 
                style: style_Stopasvetlanavrhovanhoosvetlenia_13,
                interactive: true,
                title: '<img src="styles/legend/Stopasvetlanavrhovanhoosvetlenia_13.png" /> Stopa svetla navrhovaného osvetlenia'
            });
var format_Obalovznado200mododpadkovchkoov_14 = new ol.format.GeoJSON();
var features_Obalovznado200mododpadkovchkoov_14 = format_Obalovznado200mododpadkovchkoov_14.readFeatures(json_Obalovznado200mododpadkovchkoov_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obalovznado200mododpadkovchkoov_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obalovznado200mododpadkovchkoov_14.addFeatures(features_Obalovznado200mododpadkovchkoov_14);
var lyr_Obalovznado200mododpadkovchkoov_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Obalovznado200mododpadkovchkoov_14, 
                style: style_Obalovznado200mododpadkovchkoov_14,
                interactive: true,
                title: '<img src="styles/legend/Obalovznado200mododpadkovchkoov_14.png" /> Obalová zóna do 200m od odpadkových košov'
            });
var lyr_Hustotnmapaosvetlenia_15 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hustotná mapa osvetlenia",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hustotnmapaosvetlenia_15.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1990726.441989, 6230634.525041, 1991693.428855, 6232465.601534]
                            })
                        });
var group_Analza = new ol.layer.Group({
                                layers: [lyr_Obalovznado300modnavrhovanchlaviiek_9,lyr_Obalovznado200modnavrhovanchodpadkovchkoov_10,lyr_Hustotnmapanavrhovanhoosvetlenia_11,lyr_Stopasvetlalmpverejnhoosvetlenia_12,lyr_Stopasvetlanavrhovanhoosvetlenia_13,lyr_Obalovznado200mododpadkovchkoov_14,lyr_Hustotnmapaosvetlenia_15,],
                                title: "Analýza"});
var group_Zozbierandta = new ol.layer.Group({
                                layers: [lyr_Chodnky_4,lyr_Laviky_5,lyr_Obalovznado300modlaviiek_6,lyr_Lampyverejnhoosvetlenia_7,lyr_Odpadkovkoe_8,],
                                title: "Zozbierané dáta"});
var group_Nvrhnovhousporiadaniaobianskejvybvenosti = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_Nvrhnovchlmpverejnhoosvetlenia_1,lyr_Nvrhnovchlaviiek_2,lyr_Nvrhnovchodpadkovchkoov_3,],
                                title: "Návrh nového usporiadania občianskej vybvenosti"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Nvrhnovchlmpverejnhoosvetlenia_1.setVisible(true);lyr_Nvrhnovchlaviiek_2.setVisible(true);lyr_Nvrhnovchodpadkovchkoov_3.setVisible(true);lyr_Chodnky_4.setVisible(true);lyr_Laviky_5.setVisible(true);lyr_Obalovznado300modlaviiek_6.setVisible(true);lyr_Lampyverejnhoosvetlenia_7.setVisible(true);lyr_Odpadkovkoe_8.setVisible(true);lyr_Obalovznado300modnavrhovanchlaviiek_9.setVisible(true);lyr_Obalovznado200modnavrhovanchodpadkovchkoov_10.setVisible(true);lyr_Hustotnmapanavrhovanhoosvetlenia_11.setVisible(true);lyr_Stopasvetlalmpverejnhoosvetlenia_12.setVisible(true);lyr_Stopasvetlanavrhovanhoosvetlenia_13.setVisible(true);lyr_Obalovznado200mododpadkovchkoov_14.setVisible(true);lyr_Hustotnmapaosvetlenia_15.setVisible(true);
var layersList = [group_Nvrhnovhousporiadaniaobianskejvybvenosti,group_Zozbierandta,group_Analza];
lyr_Nvrhnovchlmpverejnhoosvetlenia_1.set('fieldAliases', {'Unique_ID': 'Unique_ID', 'material': 'material', 'Poskodenie': 'Poskodenie', 'druh_ziaro': 'druh_ziaro', 'farba_svet': 'farba_svet', 'stopa_svet': 'stopa_svet', 'cislo_stlp': 'cislo_stlp', 'poznamka': 'poznamka', 'Image': 'Image', '__maps_fme': '__maps_fme', 'lampy atri': 'lampy atri', 'lampy at_1': 'lampy at_1', 'lampy at_2': 'lampy at_2', 'lampy at_3': 'lampy at_3', 'lampy at_4': 'lampy at_4', 'lampy at_5': 'lampy at_5', 'lampy at_6': 'lampy at_6', });
lyr_Nvrhnovchlaviiek_2.set('fieldAliases', {'material': 'Materiál', 'poskodenie': 'Poškodenie', 'operadlo': 'Operadlo', 'poznamka': 'Pozemok', });
lyr_Nvrhnovchodpadkovchkoov_3.set('fieldAliases', {'poskodenie': 'Poškodenie', 'material': 'Materiál', 'druh_odhad': 'Druh odpadu', 'poznamka': 'Pozemok', });
lyr_Chodnky_4.set('fieldAliases', {'material': 'Materiál', 'poskodenie': 'Poškodenie', 'poznamka': 'Poznámka', });
lyr_Laviky_5.set('fieldAliases', {'material': 'Materiál', 'poskodenie': 'Poškodenie', 'operadlo': 'Operadlo', 'poznamka': 'Pozemok', });
lyr_Obalovznado300modlaviiek_6.set('fieldAliases', {'material': 'material', 'poskodenie': 'poskodenie', 'operadlo': 'operadlo', 'poznamka': 'poznamka', });
lyr_Lampyverejnhoosvetlenia_7.set('fieldAliases', {'Unique_ID': 'Unique_ID', 'material': 'material', 'Poskodenie': 'Poskodenie', 'druh_ziaro': 'druh_ziaro', 'farba_svet': 'farba_svet', 'stopa_svet': 'stopa_svet', 'cislo_stlp': 'cislo_stlp', 'poznamka': 'poznamka', 'Image': 'Image', '__maps_fme': '__maps_fme', });
lyr_Odpadkovkoe_8.set('fieldAliases', {'poskodenie': 'Poškodenie', 'material': 'Materiál', 'druh_odhad': 'Druh odpadu', 'poznamka': 'Pozemok', });
lyr_Obalovznado300modnavrhovanchlaviiek_9.set('fieldAliases', {'material': 'material', 'poskodenie': 'poskodenie', 'operadlo': 'operadlo', 'poznamka': 'poznamka', });
lyr_Obalovznado200modnavrhovanchodpadkovchkoov_10.set('fieldAliases', {'poskodenie': 'poskodenie', 'material': 'material', 'druh_odhad': 'druh_odhad', 'poznamka': 'poznamka', });
lyr_Stopasvetlalmpverejnhoosvetlenia_12.set('fieldAliases', {'Unique_ID': 'Unique_ID', 'material': 'material', 'Poskodenie': 'Poskodenie', 'druh_ziaro': 'druh_ziaro', 'farba_svet': 'farba_svet', 'stopa_svet': 'stopa_svet', 'cislo_stlp': 'cislo_stlp', 'poznamka': 'poznamka', 'Image': 'Image', '__maps_fme': '__maps_fme', 'lampy atri': 'lampy atri', 'lampy at_1': 'lampy at_1', 'lampy at_2': 'lampy at_2', 'lampy at_3': 'lampy at_3', 'lampy at_4': 'lampy at_4', 'lampy at_5': 'lampy at_5', 'lampy at_6': 'lampy at_6', });
lyr_Stopasvetlanavrhovanhoosvetlenia_13.set('fieldAliases', {'Unique_ID': 'Unique_ID', 'material': 'material', 'Poskodenie': 'Poskodenie', 'druh_ziaro': 'druh_ziaro', 'farba_svet': 'farba_svet', 'stopa_svet': 'stopa_svet', 'cislo_stlp': 'cislo_stlp', 'poznamka': 'poznamka', 'Image': 'Image', '__maps_fme': '__maps_fme', 'lampy atri': 'lampy atri', 'lampy at_1': 'lampy at_1', 'lampy at_2': 'lampy at_2', 'lampy at_3': 'lampy at_3', 'lampy at_4': 'lampy at_4', 'lampy at_5': 'lampy at_5', 'lampy at_6': 'lampy at_6', });
lyr_Obalovznado200mododpadkovchkoov_14.set('fieldAliases', {'poskodenie': 'poskodenie', 'material': 'material', 'druh_odhad': 'druh_odhad', 'poznamka': 'poznamka', });
lyr_Nvrhnovchlmpverejnhoosvetlenia_1.set('fieldImages', {'Unique_ID': '', 'material': '', 'Poskodenie': '', 'druh_ziaro': '', 'farba_svet': '', 'stopa_svet': '', 'cislo_stlp': '', 'poznamka': '', 'Image': '', '__maps_fme': '', 'lampy atri': '', 'lampy at_1': '', 'lampy at_2': '', 'lampy at_3': '', 'lampy at_4': '', 'lampy at_5': '', 'lampy at_6': '', });
lyr_Nvrhnovchlaviiek_2.set('fieldImages', {'material': 'TextEdit', 'poskodenie': 'TextEdit', 'operadlo': 'TextEdit', 'poznamka': 'TextEdit', });
lyr_Nvrhnovchodpadkovchkoov_3.set('fieldImages', {'poskodenie': 'TextEdit', 'material': 'TextEdit', 'druh_odhad': 'TextEdit', 'poznamka': 'TextEdit', });
lyr_Chodnky_4.set('fieldImages', {'material': 'TextEdit', 'poskodenie': 'TextEdit', 'poznamka': 'TextEdit', });
lyr_Laviky_5.set('fieldImages', {'material': 'TextEdit', 'poskodenie': 'TextEdit', 'operadlo': 'TextEdit', 'poznamka': 'TextEdit', });
lyr_Obalovznado300modlaviiek_6.set('fieldImages', {'material': 'TextEdit', 'poskodenie': 'TextEdit', 'operadlo': 'TextEdit', 'poznamka': 'TextEdit', });
lyr_Lampyverejnhoosvetlenia_7.set('fieldImages', {'Unique_ID': 'Hidden', 'material': 'Hidden', 'Poskodenie': 'Hidden', 'druh_ziaro': 'Hidden', 'farba_svet': 'Hidden', 'stopa_svet': 'Hidden', 'cislo_stlp': 'Hidden', 'poznamka': 'Hidden', 'Image': 'Hidden', '__maps_fme': 'Hidden', });
lyr_Odpadkovkoe_8.set('fieldImages', {'poskodenie': 'TextEdit', 'material': 'TextEdit', 'druh_odhad': 'TextEdit', 'poznamka': 'TextEdit', });
lyr_Obalovznado300modnavrhovanchlaviiek_9.set('fieldImages', {'material': 'TextEdit', 'poskodenie': 'TextEdit', 'operadlo': 'TextEdit', 'poznamka': 'TextEdit', });
lyr_Obalovznado200modnavrhovanchodpadkovchkoov_10.set('fieldImages', {'poskodenie': 'TextEdit', 'material': 'TextEdit', 'druh_odhad': 'TextEdit', 'poznamka': 'TextEdit', });
lyr_Stopasvetlalmpverejnhoosvetlenia_12.set('fieldImages', {'Unique_ID': 'TextEdit', 'material': 'TextEdit', 'Poskodenie': 'TextEdit', 'druh_ziaro': 'TextEdit', 'farba_svet': 'TextEdit', 'stopa_svet': 'TextEdit', 'cislo_stlp': 'TextEdit', 'poznamka': 'TextEdit', 'Image': 'TextEdit', '__maps_fme': 'TextEdit', 'lampy atri': 'TextEdit', 'lampy at_1': 'TextEdit', 'lampy at_2': 'TextEdit', 'lampy at_3': 'TextEdit', 'lampy at_4': 'TextEdit', 'lampy at_5': 'TextEdit', 'lampy at_6': 'TextEdit', });
lyr_Stopasvetlanavrhovanhoosvetlenia_13.set('fieldImages', {'Unique_ID': 'TextEdit', 'material': 'TextEdit', 'Poskodenie': 'TextEdit', 'druh_ziaro': 'TextEdit', 'farba_svet': 'TextEdit', 'stopa_svet': 'TextEdit', 'cislo_stlp': 'TextEdit', 'poznamka': 'TextEdit', 'Image': 'TextEdit', '__maps_fme': 'TextEdit', 'lampy atri': 'TextEdit', 'lampy at_1': 'TextEdit', 'lampy at_2': 'TextEdit', 'lampy at_3': 'TextEdit', 'lampy at_4': 'TextEdit', 'lampy at_5': 'TextEdit', 'lampy at_6': 'TextEdit', });
lyr_Obalovznado200mododpadkovchkoov_14.set('fieldImages', {'poskodenie': 'TextEdit', 'material': 'TextEdit', 'druh_odhad': 'TextEdit', 'poznamka': 'TextEdit', });
lyr_Nvrhnovchlmpverejnhoosvetlenia_1.set('fieldLabels', {});
lyr_Nvrhnovchlaviiek_2.set('fieldLabels', {});
lyr_Nvrhnovchodpadkovchkoov_3.set('fieldLabels', {});
lyr_Chodnky_4.set('fieldLabels', {});
lyr_Laviky_5.set('fieldLabels', {});
lyr_Obalovznado300modlaviiek_6.set('fieldLabels', {});
lyr_Lampyverejnhoosvetlenia_7.set('fieldLabels', {});
lyr_Odpadkovkoe_8.set('fieldLabels', {});
lyr_Obalovznado300modnavrhovanchlaviiek_9.set('fieldLabels', {});
lyr_Obalovznado200modnavrhovanchodpadkovchkoov_10.set('fieldLabels', {});
lyr_Stopasvetlalmpverejnhoosvetlenia_12.set('fieldLabels', {});
lyr_Stopasvetlanavrhovanhoosvetlenia_13.set('fieldLabels', {});
lyr_Obalovznado200mododpadkovchkoov_14.set('fieldLabels', {});
lyr_Obalovznado200mododpadkovchkoov_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});