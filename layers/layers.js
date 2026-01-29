ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-60.040301, -3.144787, -60.020556, -3.134258]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AnexoIIBaciadeEvoluo_1 = new ol.format.GeoJSON();
var features_AnexoIIBaciadeEvoluo_1 = format_AnexoIIBaciadeEvoluo_1.readFeatures(json_AnexoIIBaciadeEvoluo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AnexoIIBaciadeEvoluo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIIBaciadeEvoluo_1.addFeatures(features_AnexoIIBaciadeEvoluo_1);
var lyr_AnexoIIBaciadeEvoluo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIIBaciadeEvoluo_1, 
                style: style_AnexoIIBaciadeEvoluo_1,
                popuplayertitle: 'Anexo II - Bacia de Evolução',
                interactive: true,
                title: '<img src="styles/legend/AnexoIIBaciadeEvoluo_1.png" /> Anexo II - Bacia de Evolução'
            });
var format_AnexoIPortodeManaus_2 = new ol.format.GeoJSON();
var features_AnexoIPortodeManaus_2 = format_AnexoIPortodeManaus_2.readFeatures(json_AnexoIPortodeManaus_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AnexoIPortodeManaus_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIPortodeManaus_2.addFeatures(features_AnexoIPortodeManaus_2);
var lyr_AnexoIPortodeManaus_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIPortodeManaus_2, 
                style: style_AnexoIPortodeManaus_2,
                popuplayertitle: 'Anexo I -  Porto de Manaus',
                interactive: true,
                title: '<img src="styles/legend/AnexoIPortodeManaus_2.png" /> Anexo I -  Porto de Manaus'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_AnexoIIBaciadeEvoluo_1.setVisible(true);lyr_AnexoIPortodeManaus_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AnexoIIBaciadeEvoluo_1,lyr_AnexoIPortodeManaus_2];
lyr_AnexoIIBaciadeEvoluo_1.set('fieldAliases', {'id': 'id', 'Name': 'Nome', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIPortodeManaus_2.set('fieldAliases', {'id': 'id', 'Name': 'Nome', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIIBaciadeEvoluo_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIPortodeManaus_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIIBaciadeEvoluo_1.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIPortodeManaus_2.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIPortodeManaus_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});