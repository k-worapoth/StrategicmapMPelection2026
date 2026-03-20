var wms_layers = [];


        var lyr_EsriTopographic_0 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_CM1GYOR_AREA_1 = new ol.format.GeoJSON();
var features_CM1GYOR_AREA_1 = format_CM1GYOR_AREA_1.readFeatures(json_CM1GYOR_AREA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CM1GYOR_AREA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CM1GYOR_AREA_1.addFeatures(features_CM1GYOR_AREA_1);
var lyr_CM1GYOR_AREA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CM1GYOR_AREA_1, 
                style: style_CM1GYOR_AREA_1,
                popuplayertitle: 'ผลสีเขียวเหลืองส้มแดงตามพื้นที่',
                interactive: true,
    title: 'ผลสีเขียวเหลืองส้มแดงตามพื้นที่'<br />\
    <img src="styles/legend/CM1GYOR_AREA_1_0.png" /> 1<br />\
    <img src="styles/legend/CM1GYOR_AREA_1_1.png" /> 2<br />\
    <img src="styles/legend/CM1GYOR_AREA_1_2.png" /> 3<br />\
    <img src="styles/legend/CM1GYOR_AREA_1_3.png" /> 4<br />' });
var format_GYOR_PARTYLIST_CM1_2026_2 = new ol.format.GeoJSON();
var features_GYOR_PARTYLIST_CM1_2026_2 = format_GYOR_PARTYLIST_CM1_2026_2.readFeatures(json_GYOR_PARTYLIST_CM1_2026_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GYOR_PARTYLIST_CM1_2026_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GYOR_PARTYLIST_CM1_2026_2.addFeatures(features_GYOR_PARTYLIST_CM1_2026_2);
var lyr_GYOR_PARTYLIST_CM1_2026_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GYOR_PARTYLIST_CM1_2026_2, 
                style: style_GYOR_PARTYLIST_CM1_2026_2,
                popuplayertitle: '%ผลต่างคะแนนพรรค',
                interactive: true,
    title: 'GYOR_PARTYLIST_CM1_2026<br />\
    <img src="styles/legend/GYOR_PARTYLIST_CM1_2026_2_0.png" /> ผลต่างคะแนนพรรคมากกว่า 39.1% ของผู้มาใช้สิทธิ์<br />\
    <img src="styles/legend/GYOR_PARTYLIST_CM1_2026_2_1.png" /> ผลต่างคะแนนพรรค 25.56- 39.1%<br />\
    <img src="styles/legend/GYOR_PARTYLIST_CM1_2026_2_2.png" /> ผลต่างคะแนนพรรค 12.02-25.56% ของผู้มาใช้สิทธิ์<br />\
    <img src="styles/legend/GYOR_PARTYLIST_CM1_2026_2_3.png" /> ผลต่างคะแนนพรรคน้อยกว่า 12.02% ของผู้มาใช้สิทธิ์<br />' });
var format_CM1GYOR_3 = new ol.format.GeoJSON();
var features_CM1GYOR_3 = format_CM1GYOR_3.readFeatures(json_CM1GYOR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CM1GYOR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CM1GYOR_3.addFeatures(features_CM1GYOR_3);
var lyr_CM1GYOR_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CM1GYOR_3, 
                style: style_CM1GYOR_3,
                popuplayertitle: '%ผลต่างคะแนนผู้สมัคร',
                interactive: true,
    title: '%ผลต่างผู้สมัคร<br />\
    <img src="styles/legend/CM1GYOR_3_0.png" /> ผลต่างคะแนนผู้สมัครมากกว่า 37.78% ของผู้มาใช้สิทธิ์<br />\
    <img src="styles/legend/CM1GYOR_3_1.png" /> ผลต่างคะแนนผู้สมัคร 23.92-37.78% ของผู้มาใช้สิทธิ์<br />\
    <img src="styles/legend/CM1GYOR_3_2.png" /> ผลต่างคะแนนผู้สมัคร 10.06-23.92% ของผู้มาใช้สิทธิ์<br />\
    <img src="styles/legend/CM1GYOR_3_3.png" /> ผลต่างคะแนนผู้สมัครน้อยกว่า 10.06% ของผู้มาใช้สิทธิ์<br />' });
var group_GYOR = new ol.layer.Group({
                                layers: [lyr_CM1GYOR_AREA_1,lyr_GYOR_PARTYLIST_CM1_2026_2,lyr_CM1GYOR_3,],
                                fold: 'open',
                                title: 'GYOR'});

lyr_EsriTopographic_0.setVisible(true);lyr_CM1GYOR_AREA_1.setVisible(true);lyr_GYOR_PARTYLIST_CM1_2026_2.setVisible(true);lyr_CM1GYOR_3.setVisible(true);
var layersList = [lyr_EsriTopographic_0,group_GYOR];
lyr_CM1GYOR_AREA_1.set('fieldAliases', {'id': 'id', 'cat': 'cat', 'Name': 'Name', 'moo': 'moo', 'population': 'population', 'tambon': 'tambon', 'area': 'area', 'layer': 'layer', 'path': 'path', });
lyr_GYOR_PARTYLIST_CM1_2026_2.set('fieldAliases', {'ref': 'ref', 'reg_off': 'reg_off', 'tambon': 'tambon', 'el_num': 'el_num', 'el_place': 'el_place', 'POPE': 'POPE', 'EPOP': 'EPOP', 'latitude': 'latitude', 'longitude': 'longitude', '2_PPLE': '2_PPLE', '6_PT': '6_PT', '7_DP': '7_DP', '5_PJT': '5_PJT', '4_KLA': '4_KLA', '2_PPLE%': '2_PPLE%', '6_PT_1': '6_PT_1', '7_DP_1': '7_DP_1', '5_PJT_1': '5_PJT_1', '4_KLA_1': '4_KLA_1', 'pplediff%': 'pplediff%', 'GYORpeople': 'GYORpeople', '46_PPLE': '46_PPLE', '9_PT': '9_PT', '37_PJT': '37_PJT', '27_DP': '27_DP', '46_PPLE_1': '46_PPLE_1', '9_PT_1': '9_PT_1', '37_PJT_1': '37_PJT_1', '27_DP_1': '27_DP_1', '%diffparty': '%diffparty', 'GYORparty': 'GYORparty', 'halforange': 'halforange', 'cat': 'cat', 'field_34': 'field_34', 'field_35': 'field_35', 'field_36': 'field_36', 'field_37': 'field_37', });
lyr_CM1GYOR_3.set('fieldAliases', {'ref': 'ref', 'reg_off': 'reg_off', 'tambon': 'tambon', 'el_num': 'el_num', 'el_place': 'el_place', 'POPE': 'POPE', 'EPOP': 'EPOP', 'latitude': 'latitude', 'longitude': 'longitude', '2_PPLE': '2_PPLE', '6_PT': '6_PT', '7_DP': '7_DP', '5_PJT': '5_PJT', '4_KLA': '4_KLA', '2_PPLE%': '2_PPLE%', '6_PT_1': '6_PT_1', '7_DP_1': '7_DP_1', '5_PJT_1': '5_PJT_1', '4_KLA_1': '4_KLA_1', 'pplediff%': 'pplediff%', 'GYORpeople': 'GYORpeople', '46_PPLE': '46_PPLE', '9_PT': '9_PT', '37_PJT': '37_PJT', '27_DP': '27_DP', '46_PPLE_1': '46_PPLE_1', '9_PT_1': '9_PT_1', '37_PJT_1': '37_PJT_1', '27_DP_1': '27_DP_1', '%diffparty': '%diffparty', 'GYORparty': 'GYORparty', 'halforange': 'halforange', 'cat': 'cat', 'field_34': 'field_34', 'field_35': 'field_35', 'field_36': 'field_36', 'field_37': 'field_37', });
lyr_CM1GYOR_AREA_1.set('fieldImages', {'id': 'TextEdit', 'cat': 'TextEdit', 'Name': 'TextEdit', 'moo': 'TextEdit', 'population': 'TextEdit', 'tambon': 'TextEdit', 'area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_GYOR_PARTYLIST_CM1_2026_2.set('fieldImages', {'ref': 'TextEdit', 'reg_off': 'TextEdit', 'tambon': 'TextEdit', 'el_num': 'TextEdit', 'el_place': 'TextEdit', 'POPE': 'TextEdit', 'EPOP': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', '2_PPLE': 'TextEdit', '6_PT': 'TextEdit', '7_DP': 'TextEdit', '5_PJT': 'TextEdit', '4_KLA': 'TextEdit', '2_PPLE%': 'TextEdit', '6_PT_1': 'TextEdit', '7_DP_1': 'TextEdit', '5_PJT_1': 'TextEdit', '4_KLA_1': 'TextEdit', 'pplediff%': 'TextEdit', 'GYORpeople': 'TextEdit', '46_PPLE': 'TextEdit', '9_PT': 'TextEdit', '37_PJT': 'TextEdit', '27_DP': 'TextEdit', '46_PPLE_1': 'TextEdit', '9_PT_1': 'TextEdit', '37_PJT_1': 'TextEdit', '27_DP_1': 'TextEdit', '%diffparty': 'TextEdit', 'GYORparty': 'TextEdit', 'halforange': 'TextEdit', 'cat': 'TextEdit', 'field_34': 'TextEdit', 'field_35': 'TextEdit', 'field_36': 'TextEdit', 'field_37': 'TextEdit', });
lyr_CM1GYOR_3.set('fieldImages', {'ref': 'TextEdit', 'reg_off': 'TextEdit', 'tambon': 'TextEdit', 'el_num': 'TextEdit', 'el_place': 'TextEdit', 'POPE': 'TextEdit', 'EPOP': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', '2_PPLE': 'TextEdit', '6_PT': 'TextEdit', '7_DP': 'TextEdit', '5_PJT': 'TextEdit', '4_KLA': 'TextEdit', '2_PPLE%': 'TextEdit', '6_PT_1': 'TextEdit', '7_DP_1': 'TextEdit', '5_PJT_1': 'TextEdit', '4_KLA_1': 'TextEdit', 'pplediff%': 'TextEdit', 'GYORpeople': 'TextEdit', '46_PPLE': 'TextEdit', '9_PT': 'TextEdit', '37_PJT': 'TextEdit', '27_DP': 'TextEdit', '46_PPLE_1': 'TextEdit', '9_PT_1': 'TextEdit', '37_PJT_1': 'TextEdit', '27_DP_1': 'TextEdit', '%diffparty': 'TextEdit', 'GYORparty': 'TextEdit', 'halforange': 'TextEdit', 'cat': 'TextEdit', 'field_34': 'TextEdit', 'field_35': 'TextEdit', 'field_36': 'TextEdit', 'field_37': 'TextEdit', });
lyr_CM1GYOR_AREA_1.set('fieldLabels', {'id': 'hidden field', 'cat': 'hidden field', 'Name': 'hidden field', 'moo': 'hidden field', 'population': 'hidden field', 'tambon': 'inline label - visible with data', 'area': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_GYOR_PARTYLIST_CM1_2026_2.set('fieldLabels', {'ref': 'hidden field', 'reg_off': 'hidden field', 'tambon': 'inline label - visible with data', 'el_num': 'hidden field', 'el_place': 'inline label - visible with data', 'POPE': 'hidden field', 'EPOP': 'hidden field', 'latitude': 'inline label - visible with data', 'longitude': 'hidden field', '2_PPLE': 'inline label - visible with data', '6_PT': 'inline label - visible with data', '7_DP': 'inline label - visible with data', '5_PJT': 'inline label - visible with data', '4_KLA': 'inline label - visible with data', '2_PPLE%': 'hidden field', '6_PT_1': 'inline label - visible with data', '7_DP_1': 'hidden field', '5_PJT_1': 'hidden field', '4_KLA_1': 'hidden field', 'pplediff%': 'hidden field', 'GYORpeople': 'hidden field', '46_PPLE': 'hidden field', '9_PT': 'hidden field', '37_PJT': 'hidden field', '27_DP': 'inline label - visible with data', '46_PPLE_1': 'hidden field', '9_PT_1': 'hidden field', '37_PJT_1': 'hidden field', '27_DP_1': 'hidden field', '%diffparty': 'hidden field', 'GYORparty': 'hidden field', 'halforange': 'hidden field', 'cat': 'hidden field', 'field_34': 'hidden field', 'field_35': 'hidden field', 'field_36': 'hidden field', 'field_37': 'hidden field', });
lyr_CM1GYOR_3.set('fieldLabels', {'ref': 'hidden field', 'reg_off': 'hidden field', 'tambon': 'inline label - visible with data', 'el_num': 'hidden field', 'el_place': 'inline label - visible with data', 'POPE': 'inline label - visible with data', 'EPOP': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', '2_PPLE': 'inline label - visible with data', '6_PT': 'inline label - visible with data', '7_DP': 'inline label - visible with data', '5_PJT': 'inline label - visible with data', '4_KLA': 'inline label - visible with data', '2_PPLE%': 'hidden field', '6_PT_1': 'hidden field', '7_DP_1': 'hidden field', '5_PJT_1': 'hidden field', '4_KLA_1': 'hidden field', 'pplediff%': 'hidden field', 'GYORpeople': 'hidden field', '46_PPLE': 'inline label - visible with data', '9_PT': 'inline label - visible with data', '37_PJT': 'inline label - visible with data', '27_DP': 'inline label - visible with data', '46_PPLE_1': 'hidden field', '9_PT_1': 'hidden field', '37_PJT_1': 'hidden field', '27_DP_1': 'hidden field', '%diffparty': 'hidden field', 'GYORparty': 'hidden field', 'halforange': 'hidden field', 'cat': 'hidden field', 'field_34': 'hidden field', 'field_35': 'hidden field', 'field_36': 'hidden field', 'field_37': 'hidden field', });
lyr_CM1GYOR_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
