ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3763").setExtent([-30081.485776, 103156.094894, -29799.834334, 103339.591609]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ParcelasBUPI_Fev_1 = new ol.format.GeoJSON();
var features_ParcelasBUPI_Fev_1 = format_ParcelasBUPI_Fev_1.readFeatures(json_ParcelasBUPI_Fev_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_ParcelasBUPI_Fev_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelasBUPI_Fev_1.addFeatures(features_ParcelasBUPI_Fev_1);
var lyr_ParcelasBUPI_Fev_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParcelasBUPI_Fev_1, 
                style: style_ParcelasBUPI_Fev_1,
                popuplayertitle: 'ParcelasBUPI_Fev',
                interactive: true,
                title: '<img src="styles/legend/ParcelasBUPI_Fev_1.png" /> ParcelasBUPI_Fev'
            });
var format_PrediosERAA_2 = new ol.format.GeoJSON();
var features_PrediosERAA_2 = format_PrediosERAA_2.readFeatures(json_PrediosERAA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_PrediosERAA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrediosERAA_2.addFeatures(features_PrediosERAA_2);
var lyr_PrediosERAA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrediosERAA_2, 
                style: style_PrediosERAA_2,
                popuplayertitle: 'PrediosERAA',
                interactive: true,
                title: '<img src="styles/legend/PrediosERAA_2.png" /> PrediosERAA'
            });
var format_LimitesAdmin_3 = new ol.format.GeoJSON();
var features_LimitesAdmin_3 = format_LimitesAdmin_3.readFeatures(json_LimitesAdmin_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_LimitesAdmin_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesAdmin_3.addFeatures(features_LimitesAdmin_3);
var lyr_LimitesAdmin_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesAdmin_3, 
                style: style_LimitesAdmin_3,
                popuplayertitle: 'LimitesAdmin',
                interactive: false,
                title: '<img src="styles/legend/LimitesAdmin_3.png" /> LimitesAdmin'
            });
var format_LimiteExpropriacao_4 = new ol.format.GeoJSON();
var features_LimiteExpropriacao_4 = format_LimiteExpropriacao_4.readFeatures(json_LimiteExpropriacao_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_LimiteExpropriacao_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteExpropriacao_4.addFeatures(features_LimiteExpropriacao_4);
var lyr_LimiteExpropriacao_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteExpropriacao_4, 
                style: style_LimiteExpropriacao_4,
                popuplayertitle: 'LimiteExpropriacao',
                interactive: true,
                title: '<img src="styles/legend/LimiteExpropriacao_4.png" /> LimiteExpropriacao'
            });
var group_CRUS_Aveiro_Agueda = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'CRUS_Aveiro_Agueda'});
var group_RAN_REN = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'RAN_REN'});
var group_Ortofotos = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Ortofotos'});
var group_blOrdenamentoAlterado = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: '-bl-OrdenamentoAlterado'});
var group_ParcelasAntigasERAA = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'ParcelasAntigasERAA'});
var group_AnaliseAreas = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'AnaliseAreas'});

lyr_GoogleSatellite_0.setVisible(true);lyr_ParcelasBUPI_Fev_1.setVisible(true);lyr_PrediosERAA_2.setVisible(true);lyr_LimitesAdmin_3.setVisible(true);lyr_LimiteExpropriacao_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ParcelasBUPI_Fev_1,lyr_PrediosERAA_2,lyr_LimitesAdmin_3,lyr_LimiteExpropriacao_4];
lyr_ParcelasBUPI_Fev_1.set('fieldAliases', {'fid': 'fid', 'area_m2': 'area_m2', });
lyr_PrediosERAA_2.set('fieldAliases', {'Parcela': 'Parcela', 'AreaTotal': 'AreaTotal', 'BUPI': 'BUPI', 'Artigo Matriz': 'Artigo Matriz', 'Artigo Antigo': 'Artigo Antigo', 'Descrição Predial': 'Descrição Predial', 'Morada': 'Morada', 'Nome': 'Nome', 'Contribuinte': 'Contribuinte', 'Telefone': 'Telefone', 'Observações': 'Observações', 'AreaCadernetaAtual': 'AreaCadernetaAtual', 'AreasProj_x_AreasMatriz': 'AreasProj_x_AreasMatriz', 'RAN': 'RAN', 'REN': 'REN', 'MatrizBupi': 'MatrizBupi', });
lyr_LimitesAdmin_3.set('fieldAliases', {'fid': 'fid', 'DICOFRE': 'DICOFRE', 'Freguesia': 'Freguesia', 'Municipio': 'Municipio', 'Ilha': 'Ilha', 'TAA': 'TAA', 'Area_T_ha': 'Area_T_ha', 'Area_EA_ha': 'Area_EA_ha', 'Distrito': 'Distrito', 'Des_Simpli': 'Des_Simpli', 'layer': 'layer', });
lyr_LimiteExpropriacao_4.set('fieldAliases', {});
lyr_ParcelasBUPI_Fev_1.set('fieldImages', {'fid': '', 'area_m2': '', });
lyr_PrediosERAA_2.set('fieldImages', {'Parcela': 'TextEdit', 'AreaTotal': 'TextEdit', 'BUPI': 'TextEdit', 'Artigo Matriz': 'TextEdit', 'Artigo Antigo': 'TextEdit', 'Descrição Predial': 'TextEdit', 'Morada': 'TextEdit', 'Nome': 'TextEdit', 'Contribuinte': 'TextEdit', 'Telefone': 'TextEdit', 'Observações': 'TextEdit', 'AreaCadernetaAtual': 'TextEdit', 'AreasProj_x_AreasMatriz': 'TextEdit', 'RAN': 'TextEdit', 'REN': 'TextEdit', 'MatrizBupi': 'TextEdit', });
lyr_LimitesAdmin_3.set('fieldImages', {'fid': '', 'DICOFRE': '', 'Freguesia': '', 'Municipio': '', 'Ilha': '', 'TAA': '', 'Area_T_ha': '', 'Area_EA_ha': '', 'Distrito': '', 'Des_Simpli': '', 'layer': '', });
lyr_LimiteExpropriacao_4.set('fieldImages', {});
lyr_ParcelasBUPI_Fev_1.set('fieldLabels', {'fid': 'no label', 'area_m2': 'inline label - visible with data', });
lyr_PrediosERAA_2.set('fieldLabels', {'Parcela': 'inline label - visible with data', 'AreaTotal': 'inline label - visible with data', 'BUPI': 'inline label - visible with data', 'Artigo Matriz': 'inline label - visible with data', 'Artigo Antigo': 'inline label - visible with data', 'Descrição Predial': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Contribuinte': 'inline label - visible with data', 'Telefone': 'inline label - visible with data', 'Observações': 'inline label - visible with data', 'AreaCadernetaAtual': 'inline label - visible with data', 'AreasProj_x_AreasMatriz': 'inline label - visible with data', 'RAN': 'inline label - visible with data', 'REN': 'inline label - visible with data', 'MatrizBupi': 'inline label - visible with data', });
lyr_LimitesAdmin_3.set('fieldLabels', {'fid': 'no label', 'DICOFRE': 'no label', 'Freguesia': 'inline label - always visible', 'Municipio': 'no label', 'Ilha': 'no label', 'TAA': 'no label', 'Area_T_ha': 'no label', 'Area_EA_ha': 'no label', 'Distrito': 'no label', 'Des_Simpli': 'no label', 'layer': 'no label', });
lyr_LimiteExpropriacao_4.set('fieldLabels', {});
lyr_LimiteExpropriacao_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});