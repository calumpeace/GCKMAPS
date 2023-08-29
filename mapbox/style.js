
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "10kmBuffered_0": {
            "type": "geojson",
            "data": json_10kmBuffered_0
        }
                    ,
        "OpenStreetMap_1": {
            "type": "raster",
            "tiles": ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "6kmBuffered_2": {
            "type": "geojson",
            "data": json_6kmBuffered_2
        }
                    ,
        "3kmBuffered_3": {
            "type": "geojson",
            "data": json_3kmBuffered_3
        }
                    ,
        "DistrictBouroughUnitaryRedline_4": {
            "type": "geojson",
            "data": json_DistrictBouroughUnitaryRedline_4
        }
                    ,
        "EssexClusters_5": {
            "type": "geojson",
            "data": json_EssexClusters_5
        }
                    ,
        "EssexMarketTowns_6": {
            "type": "geojson",
            "data": json_EssexMarketTowns_6
        }
                    ,
        "HUG2MappedPostcodes_7": {
            "type": "geojson",
            "data": json_HUG2MappedPostcodes_7
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_10kmBuffered_0_0",
            "type": "fill",
            "source": "10kmBuffered_0",
            "layout": {},
            "paint": {'fill-opacity': 0.609, 'fill-color': '#d5623c'}
        }
,
        {
            "id": "lyr_OpenStreetMap_1_1",
            "type": "raster",
            "source": "OpenStreetMap_1"
        },
        {
            "id": "lyr_6kmBuffered_2_0",
            "type": "fill",
            "source": "6kmBuffered_2",
            "layout": {},
            "paint": {'fill-opacity': 0.686, 'fill-color': '#e0cd76'}
        }
,
        {
            "id": "lyr_3kmBuffered_3_0",
            "type": "fill",
            "source": "3kmBuffered_3",
            "layout": {},
            "paint": {'fill-opacity': 0.688, 'fill-color': '#84ff8e'}
        }
,
        {
            "id": "lyr_DistrictBouroughUnitaryRedline_4_0",
            "type": "fill",
            "source": "DistrictBouroughUnitaryRedline_4",
            "layout": {},
            "paint": {'fill-opacity': 0.84, 'fill-color': '#93c085'}
        }
,
        {
            "id": "lyr_EssexClusters_5_0",
            "type": "circle",
            "source": "EssexClusters_5",
            "layout": {},
            "paint": {'circle-radius': ['case', ['==', ['get', 'Stage'], 'Core'], ['/', 19.285714285714285, 2], ['==', ['get', 'Stage'], 'Core'], ['/', 17.678571428571427, 2], ['==', ['get', 'Stage'], 'Pipe'], ['/', 17.678571428571427, 2], ['==', ['get', 'Stage'], 'Pipe'], ['/', 19.285714285714285, 2], ['==', ['get', 'Stage'], 'Prospect'], ['/', 17.678571428571427, 2], ['==', ['get', 'Stage'], 'Prospect'], ['/', 19.285714285714285, 2], ['/', 17.678571428571427, 2], ['/', 19.285714285714285, 2], 0], 'circle-color': ['case', ['==', ['get', 'Stage'], 'Core'], '#c4de18', ['==', ['get', 'Stage'], 'Core'], '#488129', ['==', ['get', 'Stage'], 'Pipe'], '#b49600', ['==', ['get', 'Stage'], 'Pipe'], '#b49600', ['==', ['get', 'Stage'], 'Prospect'], '#cd7517', ['==', ['get', 'Stage'], 'Prospect'], '#cd7517', '#72e5a8', '#72e5a8', '#ffffff'], 'circle-opacity': ['case', ['==', ['get', 'Stage'], 'Core'], 1.0, ['==', ['get', 'Stage'], 'Core'], 1.0, ['==', ['get', 'Stage'], 'Pipe'], 1.0, ['==', ['get', 'Stage'], 'Pipe'], 1.0, ['==', ['get', 'Stage'], 'Prospect'], 1.0, ['==', ['get', 'Stage'], 'Prospect'], 1.0, 1.0, 1.0, 0], 'circle-stroke-width': ['case', ['==', ['get', 'Stage'], 'Core'], 0.7142857142857143, ['==', ['get', 'Stage'], 'Core'], 0.7142857142857143, ['==', ['get', 'Stage'], 'Pipe'], 0.7142857142857143, ['==', ['get', 'Stage'], 'Pipe'], 0.7142857142857143, ['==', ['get', 'Stage'], 'Prospect'], 0.7142857142857143, ['==', ['get', 'Stage'], 'Prospect'], 0.7142857142857143, 0.7142857142857143, 0.7142857142857143, 0], 'circle-stroke-color': ['case', ['==', ['get', 'Stage'], 'Core'], '#000000', ['==', ['get', 'Stage'], 'Core'], '#000000', ['==', ['get', 'Stage'], 'Pipe'], '#000000', ['==', ['get', 'Stage'], 'Pipe'], '#000000', ['==', ['get', 'Stage'], 'Prospect'], '#000000', ['==', ['get', 'Stage'], 'Prospect'], '#000000', '#000000', '#000000', '#000000']}
        }
,
        {
            "id": "lyr_EssexClusters_5_8",
            "type": "symbol",
            "source": "EssexClusters_5",
            "layout": {'text-offset': [0.0, 0.0], 'text-field': '', 'text-size': '10.085714285714284', 'text-font': ['Open Sans Regular']},
            "paint": {'text-color': '#323232'}
        }
,
        {
            "id": "lyr_EssexMarketTowns_6_0",
            "type": "circle",
            "source": "EssexMarketTowns_6",
            "layout": {},
            "paint": {'circle-radius': ['/', 14.285714285714285, 2], 'circle-color': '#487bb6', 'circle-opacity': 1.0, 'circle-stroke-width': 1.4285714285714286, 'circle-stroke-color': '#325780'}
        }
,
        {
            "id": "lyr_EssexMarketTowns_6_1",
            "type": "symbol",
            "source": "EssexMarketTowns_6",
            "layout": {'text-offset': [0.0, 0.0], 'text-field': ['get', 'address'], 'text-size': '10.085714285714284', 'text-font': ['Open Sans Regular']},
            "paint": {'text-color': '#323232'}
        }
,
        {
            "id": "lyr_HUG2MappedPostcodes_7_0",
            "type": "circle",
            "source": "HUG2MappedPostcodes_7",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#d5b43c', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
],
}