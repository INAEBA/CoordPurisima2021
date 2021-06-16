var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CoordinacionPurisima_3 = new ol.format.GeoJSON();
var features_CoordinacionPurisima_3 = format_CoordinacionPurisima_3.readFeatures(json_CoordinacionPurisima_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionPurisima_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionPurisima_3.addFeatures(features_CoordinacionPurisima_3);
var lyr_CoordinacionPurisima_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionPurisima_3, 
                style: style_CoordinacionPurisima_3,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionPurisima_3.png" /> Coordinacion Purisima'
            });
var format_EduacionMediaSuperiorySuperior_4 = new ol.format.GeoJSON();
var features_EduacionMediaSuperiorySuperior_4 = format_EduacionMediaSuperiorySuperior_4.readFeatures(json_EduacionMediaSuperiorySuperior_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EduacionMediaSuperiorySuperior_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EduacionMediaSuperiorySuperior_4.addFeatures(features_EduacionMediaSuperiorySuperior_4);
var lyr_EduacionMediaSuperiorySuperior_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EduacionMediaSuperiorySuperior_4, 
                style: style_EduacionMediaSuperiorySuperior_4,
                interactive: true,
                title: '<img src="styles/legend/EduacionMediaSuperiorySuperior_4.png" /> Eduacion MediaSuperior y Superior'
            });
var format_MicroregionMD2N_5 = new ol.format.GeoJSON();
var features_MicroregionMD2N_5 = format_MicroregionMD2N_5.readFeatures(json_MicroregionMD2N_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionMD2N_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionMD2N_5.addFeatures(features_MicroregionMD2N_5);
var lyr_MicroregionMD2N_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionMD2N_5, 
                style: style_MicroregionMD2N_5,
                interactive: false,
    title: 'Microregion MD2-N<br />\
    <img src="styles/legend/MicroregionMD2N_5_0.png" /> 1 - 24 Personas<br />\
    <img src="styles/legend/MicroregionMD2N_5_1.png" /> 24 - 74 Personas<br />\
    <img src="styles/legend/MicroregionMD2N_5_2.png" /> 74 - 153 Personas<br />\
    <img src="styles/legend/MicroregionMD2N_5_3.png" /> 153 - 256 Personas<br />\
    <img src="styles/legend/MicroregionMD2N_5_4.png" /> 256 - 403 Personas<br />'
        });
var format_MicroregionSF4_6 = new ol.format.GeoJSON();
var features_MicroregionSF4_6 = format_MicroregionSF4_6.readFeatures(json_MicroregionSF4_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionSF4_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionSF4_6.addFeatures(features_MicroregionSF4_6);
var lyr_MicroregionSF4_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionSF4_6, 
                style: style_MicroregionSF4_6,
                interactive: false,
    title: 'Microregion SF4<br />\
    <img src="styles/legend/MicroregionSF4_6_0.png" /> 3 - 26 Personas<br />\
    <img src="styles/legend/MicroregionSF4_6_1.png" /> 26 - 91 Personas<br />\
    <img src="styles/legend/MicroregionSF4_6_2.png" /> 91 - 169 Personas<br />\
    <img src="styles/legend/MicroregionSF4_6_3.png" /> 169 - 404 Personas<br />\
    <img src="styles/legend/MicroregionSF4_6_4.png" /> 404 - 642 Personas<br />'
        });
var format_MicroregionSF3_7 = new ol.format.GeoJSON();
var features_MicroregionSF3_7 = format_MicroregionSF3_7.readFeatures(json_MicroregionSF3_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionSF3_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionSF3_7.addFeatures(features_MicroregionSF3_7);
var lyr_MicroregionSF3_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionSF3_7, 
                style: style_MicroregionSF3_7,
                interactive: false,
    title: 'Microregion SF3<br />\
    <img src="styles/legend/MicroregionSF3_7_0.png" /> 4 - 53 Personas<br />\
    <img src="styles/legend/MicroregionSF3_7_1.png" /> 53 - 159 Personas<br />\
    <img src="styles/legend/MicroregionSF3_7_2.png" /> 159 - 347 Personas<br />\
    <img src="styles/legend/MicroregionSF3_7_3.png" /> 347 - 596 Personas<br />\
    <img src="styles/legend/MicroregionSF3_7_4.png" /> 596 - 826 Personas<br />'
        });
var format_MicroregionSF2N_8 = new ol.format.GeoJSON();
var features_MicroregionSF2N_8 = format_MicroregionSF2N_8.readFeatures(json_MicroregionSF2N_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionSF2N_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionSF2N_8.addFeatures(features_MicroregionSF2N_8);
var lyr_MicroregionSF2N_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionSF2N_8, 
                style: style_MicroregionSF2N_8,
                interactive: false,
    title: 'Microregion SF2-N<br />\
    <img src="styles/legend/MicroregionSF2N_8_0.png" /> 1 - 19 Personas<br />\
    <img src="styles/legend/MicroregionSF2N_8_1.png" /> 19 - 40 Personas<br />\
    <img src="styles/legend/MicroregionSF2N_8_2.png" /> 40 - 72 Personas<br />\
    <img src="styles/legend/MicroregionSF2N_8_3.png" /> 72 - 154 Personas<br />\
    <img src="styles/legend/MicroregionSF2N_8_4.png" /> 154 - 255 Personas<br />'
        });
var format_MicroregionSF1N_9 = new ol.format.GeoJSON();
var features_MicroregionSF1N_9 = format_MicroregionSF1N_9.readFeatures(json_MicroregionSF1N_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionSF1N_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionSF1N_9.addFeatures(features_MicroregionSF1N_9);
var lyr_MicroregionSF1N_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionSF1N_9, 
                style: style_MicroregionSF1N_9,
                interactive: false,
    title: 'Microregion SF1-N<br />\
    <img src="styles/legend/MicroregionSF1N_9_0.png" /> 2 - 19 Personas<br />\
    <img src="styles/legend/MicroregionSF1N_9_1.png" /> 19 - 41 Personas<br />\
    <img src="styles/legend/MicroregionSF1N_9_2.png" /> 41 - 70 Personas<br />\
    <img src="styles/legend/MicroregionSF1N_9_3.png" /> 70 - 124 Personas<br />\
    <img src="styles/legend/MicroregionSF1N_9_4.png" /> 124 - 221 Personas<br />'
        });
var format_MicroregionPR3N_10 = new ol.format.GeoJSON();
var features_MicroregionPR3N_10 = format_MicroregionPR3N_10.readFeatures(json_MicroregionPR3N_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionPR3N_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionPR3N_10.addFeatures(features_MicroregionPR3N_10);
var lyr_MicroregionPR3N_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionPR3N_10, 
                style: style_MicroregionPR3N_10,
                interactive: false,
    title: 'Microregion PR3-N<br />\
    <img src="styles/legend/MicroregionPR3N_10_0.png" /> 2 - 26 Personas<br />\
    <img src="styles/legend/MicroregionPR3N_10_1.png" /> 26 - 55 Personas<br />\
    <img src="styles/legend/MicroregionPR3N_10_2.png" /> 55 - 104 Personas<br />\
    <img src="styles/legend/MicroregionPR3N_10_3.png" /> 104 - 189 Personas<br />\
    <img src="styles/legend/MicroregionPR3N_10_4.png" /> 189 - 284 Personas<br />'
        });
var format_MicroregionPR2N_11 = new ol.format.GeoJSON();
var features_MicroregionPR2N_11 = format_MicroregionPR2N_11.readFeatures(json_MicroregionPR2N_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionPR2N_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionPR2N_11.addFeatures(features_MicroregionPR2N_11);
var lyr_MicroregionPR2N_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionPR2N_11, 
                style: style_MicroregionPR2N_11,
                interactive: false,
    title: 'Microregion PR2-N<br />\
    <img src="styles/legend/MicroregionPR2N_11_0.png" /> 3 - 23 Personas<br />\
    <img src="styles/legend/MicroregionPR2N_11_1.png" /> 23 - 54 Personas<br />\
    <img src="styles/legend/MicroregionPR2N_11_2.png" /> 54 - 99 Personas<br />\
    <img src="styles/legend/MicroregionPR2N_11_3.png" /> 99 - 223 Personas<br />\
    <img src="styles/legend/MicroregionPR2N_11_4.png" /> 223 - 372 Personas<br />'
        });
var format_MicroregionPR1N_12 = new ol.format.GeoJSON();
var features_MicroregionPR1N_12 = format_MicroregionPR1N_12.readFeatures(json_MicroregionPR1N_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionPR1N_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionPR1N_12.addFeatures(features_MicroregionPR1N_12);
var lyr_MicroregionPR1N_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionPR1N_12, 
                style: style_MicroregionPR1N_12,
                interactive: false,
    title: 'Microregion PR1-N<br />\
    <img src="styles/legend/MicroregionPR1N_12_0.png" /> 3 - 28 Personas<br />\
    <img src="styles/legend/MicroregionPR1N_12_1.png" /> 28 - 80 Personas<br />\
    <img src="styles/legend/MicroregionPR1N_12_2.png" /> 80 - 198 Personas<br />\
    <img src="styles/legend/MicroregionPR1N_12_3.png" /> 198 - 508 Personas<br />\
    <img src="styles/legend/MicroregionPR1N_12_4.png" /> 508 - 1013 Personas<br />'
        });
var format_MicroregionMD1N_13 = new ol.format.GeoJSON();
var features_MicroregionMD1N_13 = format_MicroregionMD1N_13.readFeatures(json_MicroregionMD1N_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionMD1N_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionMD1N_13.addFeatures(features_MicroregionMD1N_13);
var lyr_MicroregionMD1N_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionMD1N_13, 
                style: style_MicroregionMD1N_13,
                interactive: false,
    title: 'Microregion MD1-N<br />\
    <img src="styles/legend/MicroregionMD1N_13_0.png" /> 2 - 29 Personas<br />\
    <img src="styles/legend/MicroregionMD1N_13_1.png" /> 29 - 97 Personas<br />\
    <img src="styles/legend/MicroregionMD1N_13_2.png" /> 97 - 188 Personas<br />\
    <img src="styles/legend/MicroregionMD1N_13_3.png" /> 188 - 380 Personas<br />\
    <img src="styles/legend/MicroregionMD1N_13_4.png" /> 380 - 569 Personas<br />'
        });
var format_CoordinacionPurisima_14 = new ol.format.GeoJSON();
var features_CoordinacionPurisima_14 = format_CoordinacionPurisima_14.readFeatures(json_CoordinacionPurisima_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionPurisima_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionPurisima_14.addFeatures(features_CoordinacionPurisima_14);
var lyr_CoordinacionPurisima_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionPurisima_14, 
                style: style_CoordinacionPurisima_14,
                interactive: true,
                title: '<img src="styles/legend/CoordinacionPurisima_14.png" /> Coordinacion Purisima'
            });
var group_CoordinacionPurisimaRezago = new ol.layer.Group({
                                layers: [lyr_MicroregionMD2N_5,lyr_MicroregionSF4_6,lyr_MicroregionSF3_7,lyr_MicroregionSF2N_8,lyr_MicroregionSF1N_9,lyr_MicroregionPR3N_10,lyr_MicroregionPR2N_11,lyr_MicroregionPR1N_12,lyr_MicroregionMD1N_13,],
                                title: "Coordinacion Purisima Rezago"});
var group_DatosEducacinMediaSuperiorySuperior = new ol.layer.Group({
                                layers: [lyr_EduacionMediaSuperiorySuperior_4,],
                                title: "Datos Educación Media Superior y Superior"});
var group_CapazSecundarias = new ol.layer.Group({
                                layers: [lyr_CoordinacionPurisima_3,],
                                title: "Capaz Secundarias"});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleEarth_0,lyr_GoogleSatellite_1,lyr_OpenStreetMap_2,],
                                title: "Mapas Base"});

lyr_GoogleEarth_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_CoordinacionPurisima_3.setVisible(true);lyr_EduacionMediaSuperiorySuperior_4.setVisible(true);lyr_MicroregionMD2N_5.setVisible(true);lyr_MicroregionSF4_6.setVisible(true);lyr_MicroregionSF3_7.setVisible(true);lyr_MicroregionSF2N_8.setVisible(true);lyr_MicroregionSF1N_9.setVisible(true);lyr_MicroregionPR3N_10.setVisible(true);lyr_MicroregionPR2N_11.setVisible(true);lyr_MicroregionPR1N_12.setVisible(true);lyr_MicroregionMD1N_13.setVisible(true);lyr_CoordinacionPurisima_14.setVisible(true);
var layersList = [group_MapasBase,group_CapazSecundarias,group_DatosEducacinMediaSuperiorySuperior,group_CoordinacionPurisimaRezago,lyr_CoordinacionPurisima_14];
lyr_CoordinacionPurisima_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldAliases', {'Clave CT': 'Clave CT', 'Nombre CT': 'Nombre CT', 'Cve. Local': 'Cve. Local', 'Cve. Munic': 'Cve. Munic', 'Ageb': 'Ageb', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'Nivel': 'Nivel', });
lyr_MicroregionMD2N_5.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionSF4_6.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionSF3_7.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionSF2N_8.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', });
lyr_MicroregionSF1N_9.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionPR3N_10.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionPR2N_11.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionPR1N_12.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionMD1N_13.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', });
lyr_CoordinacionPurisima_14.set('fieldAliases', {'Micro': 'Micro', 'Coord': 'Coord', 'Muni': 'Muni', 'Region': 'Region', 'Analf': 'Analf', 'PrimIncom': 'PrimIncom', 'PrimComp': 'PrimComp', 'SecuComp': 'SecuComp', 'Rezago': 'Rezago', });
lyr_CoordinacionPurisima_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldImages', {'Clave CT': 'TextEdit', 'Nombre CT': 'TextEdit', 'Cve. Local': 'TextEdit', 'Cve. Munic': 'TextEdit', 'Ageb': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'Nivel': 'TextEdit', });
lyr_MicroregionMD2N_5.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionSF4_6.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionSF3_7.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionSF2N_8.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_MicroregionSF1N_9.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionPR3N_10.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionPR2N_11.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionPR1N_12.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionMD1N_13.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', });
lyr_CoordinacionPurisima_14.set('fieldImages', {'Micro': 'TextEdit', 'Coord': 'TextEdit', 'Muni': 'TextEdit', 'Region': 'TextEdit', 'Analf': 'TextEdit', 'PrimIncom': 'TextEdit', 'PrimComp': 'TextEdit', 'SecuComp': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_CoordinacionPurisima_3.set('fieldLabels', {});
lyr_EduacionMediaSuperiorySuperior_4.set('fieldLabels', {});
lyr_MicroregionMD2N_5.set('fieldLabels', {});
lyr_MicroregionSF4_6.set('fieldLabels', {});
lyr_MicroregionSF3_7.set('fieldLabels', {});
lyr_MicroregionSF2N_8.set('fieldLabels', {});
lyr_MicroregionSF1N_9.set('fieldLabels', {});
lyr_MicroregionPR3N_10.set('fieldLabels', {});
lyr_MicroregionPR2N_11.set('fieldLabels', {});
lyr_MicroregionPR1N_12.set('fieldLabels', {});
lyr_MicroregionMD1N_13.set('fieldLabels', {});
lyr_CoordinacionPurisima_14.set('fieldLabels', {'Micro': 'inline label', 'Coord': 'inline label', 'Muni': 'inline label', 'Region': 'inline label', 'Analf': 'inline label', 'PrimIncom': 'inline label', 'PrimComp': 'inline label', 'SecuComp': 'inline label', 'Rezago': 'inline label', });
lyr_CoordinacionPurisima_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});