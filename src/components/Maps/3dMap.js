import React from "react";

// reactstrap components
import { Container } from "reactstrap";

import {Component} from 'react';
import ReactMapGL from 'react-map-gl';
import {fromJS} from 'immutable';
import 'mapbox-gl/dist/mapbox-gl.css';
import Iframe from 'react-iframe';

const TOKEN = "pk.eyJ1IjoiaHAtbnVuZXMiLCJhIjoiY2pqNHAxaHIxMDA3aTNrbW15OGx2NW4ybiJ9.pHzT2FAtpO-Xhnc3PzJsFA"

const mapStyle = fromJS({
    version: 8,
    sources: {
         streets: {
                                 type: "geojson",
                                 data: {
                                       type: "FeatureCollection",
                                       features: [
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 95488,
                                       area_id: 95488,
                                       cells50cm_: 484,
                                       globalid: "{B13C1234-BA60-4213-A9C1-6F079CDC9EF9}",
                                       gnd1st_del: 9.7,
                                       gnd_cells5: 484,
                                       gnd_majori: 9765,
                                       gnd_maxcm: 9799,
                                       gnd_meancm: 9611.32438017,
                                       gnd_median: 9617,
                                       gnd_min_m: 93.62,
                                       gnd_mincm: 9362,
                                       gnd_minori: 9362,
                                       gnd_rangec: 437,
                                       gnd_stdcm: 123.23120506,
                                       gnd_variet: 337,
                                       hgt_cells5: 484,
                                       hgt_majori: 600,
                                       hgt_maxcm: 876,
                                       hgt_meancm: 679.44214876,
                                       hgt_median: 6.8,
                                       hgt_medi_1: 680,
                                       hgt_mincm: 324,
                                       hgt_minori: 324,
                                       hgt_rangec: 552,
                                       hgt_stdcm: 104.57852619,
                                       hgt_variet: 267,
                                       majoritycm: 10329,
                                       maxcm_1st: 10371,
                                       mblr: "SF5957014",
                                       meancm_1st: 10290.7892562,
                                       median_1st: 103.32,
                                       mediancm_1: 10332,
                                       mincm_1st: 9693,
                                       minoritycm: 9693,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 103.71,
                                       rangecm_1s: 678,
                                       sf16_bldgi: "201006.0095488",
                                       stdcm_1st: 110.53102949,
                                       varietycm_: 151,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.4273925,
                                       37.72618598899999
                                       ],
                                       [
                                       -122.42735642799998,
                                       37.72616867099998
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 98575,
                                       area_id: 98575,
                                       cells50cm_: 476,
                                       globalid: "{B99ADFC4-039E-4249-9C69-B57825E10DE3}",
                                       gnd1st_del: 9.72,
                                       gnd_cells5: 476,
                                       gnd_majori: 9547,
                                       gnd_maxcm: 9827,
                                       gnd_meancm: 9639.37605042,
                                       gnd_median: 9643,
                                       gnd_min_m: 93.95,
                                       gnd_mincm: 9395,
                                       gnd_minori: 9395,
                                       gnd_rangec: 432,
                                       gnd_stdcm: 119.57322294,
                                       gnd_variet: 305,
                                       hgt_cells5: 476,
                                       hgt_majori: 589,
                                       hgt_maxcm: 870,
                                       hgt_meancm: 669.31092437,
                                       hgt_median: 6.87,
                                       hgt_medi_1: 687,
                                       hgt_mincm: 261,
                                       hgt_minori: 261,
                                       hgt_rangec: 609,
                                       hgt_stdcm: 136.07255219,
                                       hgt_variet: 299,
                                       majoritycm: 10371,
                                       maxcm_1st: 10429,
                                       mblr: "SF5957015",
                                       meancm_1st: 10308.68067227,
                                       median_1st: 103.67,
                                       mediancm_1: 10367,
                                       mincm_1st: 9668,
                                       minoritycm: 9668,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 104.29,
                                       rangecm_1s: 761,
                                       sf16_bldgi: "201006.0098575",
                                       stdcm_1st: 161.15135548,
                                       varietycm_: 153,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42743377300002,
                                       37.726067288000024
                                       ],
                                       [
                                       -122.42743703999996,
                                       37.72606886
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 121352,
                                       area_id: 121352,
                                       cells50cm_: 424,
                                       globalid: "{9A97EDA7-6BB2-44B2-A454-8E68597D361F}",
                                       gnd1st_del: 8.7,
                                       gnd_cells5: 424,
                                       gnd_majori: 9754,
                                       gnd_maxcm: 9757,
                                       gnd_meancm: 9619.09669811,
                                       gnd_median: 9626,
                                       gnd_min_m: 94.35,
                                       gnd_mincm: 9435,
                                       gnd_minori: 9435,
                                       gnd_rangec: 322,
                                       gnd_stdcm: 101.03372587,
                                       gnd_variet: 241,
                                       hgt_cells5: 424,
                                       hgt_majori: 576,
                                       hgt_maxcm: 882,
                                       hgt_meancm: 680.26415094,
                                       hgt_median: 6.81,
                                       hgt_medi_1: 681,
                                       hgt_mincm: 336,
                                       hgt_minori: 336,
                                       hgt_rangec: 546,
                                       hgt_stdcm: 105.57696843,
                                       hgt_variet: 259,
                                       majoritycm: 10302,
                                       maxcm_1st: 10348,
                                       mblr: "SF5957013",
                                       meancm_1st: 10299.37971698,
                                       median_1st: 103.05,
                                       mediancm_1: 10305,
                                       mincm_1st: 10052,
                                       minoritycm: 10052,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 103.48,
                                       rangecm_1s: 296,
                                       sf16_bldgi: "201006.0121352",
                                       stdcm_1st: 41.03213954,
                                       varietycm_: 104,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42734755200001,
                                       37.726245010000014
                                       ],
                                       [
                                       -122.427311476,
                                       37.72622768799999
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 98575,
                                       area_id: 98575,
                                       cells50cm_: 476,
                                       globalid: "{B99ADFC4-039E-4249-9C69-B57825E10DE3}",
                                       gnd1st_del: 9.72,
                                       gnd_cells5: 476,
                                       gnd_majori: 9547,
                                       gnd_maxcm: 9827,
                                       gnd_meancm: 9639.37605042,
                                       gnd_median: 9643,
                                       gnd_min_m: 93.95,
                                       gnd_mincm: 9395,
                                       gnd_minori: 9395,
                                       gnd_rangec: 432,
                                       gnd_stdcm: 119.57322294,
                                       gnd_variet: 305,
                                       hgt_cells5: 476,
                                       hgt_majori: 589,
                                       hgt_maxcm: 870,
                                       hgt_meancm: 669.31092437,
                                       hgt_median: 6.87,
                                       hgt_medi_1: 687,
                                       hgt_mincm: 261,
                                       hgt_minori: 261,
                                       hgt_rangec: 609,
                                       hgt_stdcm: 136.07255219,
                                       hgt_variet: 299,
                                       majoritycm: 10371,
                                       maxcm_1st: 10429,
                                       mblr: "SF5957015",
                                       meancm_1st: 10308.68067227,
                                       median_1st: 103.67,
                                       mediancm_1: 10367,
                                       mincm_1st: 9668,
                                       minoritycm: 9668,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 104.29,
                                       rangecm_1s: 761,
                                       sf16_bldgi: "201006.0098575",
                                       stdcm_1st: 161.15135548,
                                       varietycm_: 153,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42743377300002,
                                       37.726067288000024
                                       ],
                                       [
                                       -122.42743703999996,
                                       37.72606886
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 95488,
                                       area_id: 95488,
                                       cells50cm_: 484,
                                       globalid: "{B13C1234-BA60-4213-A9C1-6F079CDC9EF9}",
                                       gnd1st_del: 9.7,
                                       gnd_cells5: 484,
                                       gnd_majori: 9765,
                                       gnd_maxcm: 9799,
                                       gnd_meancm: 9611.32438017,
                                       gnd_median: 9617,
                                       gnd_min_m: 93.62,
                                       gnd_mincm: 9362,
                                       gnd_minori: 9362,
                                       gnd_rangec: 437,
                                       gnd_stdcm: 123.23120506,
                                       gnd_variet: 337,
                                       hgt_cells5: 484,
                                       hgt_majori: 600,
                                       hgt_maxcm: 876,
                                       hgt_meancm: 679.44214876,
                                       hgt_median: 6.8,
                                       hgt_medi_1: 680,
                                       hgt_mincm: 324,
                                       hgt_minori: 324,
                                       hgt_rangec: 552,
                                       hgt_stdcm: 104.57852619,
                                       hgt_variet: 267,
                                       majoritycm: 10329,
                                       maxcm_1st: 10371,
                                       mblr: "SF5957014",
                                       meancm_1st: 10290.7892562,
                                       median_1st: 103.32,
                                       mediancm_1: 10332,
                                       mincm_1st: 9693,
                                       minoritycm: 9693,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 103.71,
                                       rangecm_1s: 678,
                                       sf16_bldgi: "201006.0095488",
                                       stdcm_1st: 110.53102949,
                                       varietycm_: 151,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.427388903,
                                       37.72612622600002
                                       ],
                                       [
                                       -122.42739350900001,
                                       37.726128437
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 121352,
                                       area_id: 121352,
                                       cells50cm_: 424,
                                       globalid: "{9A97EDA7-6BB2-44B2-A454-8E68597D361F}",
                                       gnd1st_del: 8.7,
                                       gnd_cells5: 424,
                                       gnd_majori: 9754,
                                       gnd_maxcm: 9757,
                                       gnd_meancm: 9619.09669811,
                                       gnd_median: 9626,
                                       gnd_min_m: 94.35,
                                       gnd_mincm: 9435,
                                       gnd_minori: 9435,
                                       gnd_rangec: 322,
                                       gnd_stdcm: 101.03372587,
                                       gnd_variet: 241,
                                       hgt_cells5: 424,
                                       hgt_majori: 576,
                                       hgt_maxcm: 882,
                                       hgt_meancm: 680.26415094,
                                       hgt_median: 6.81,
                                       hgt_medi_1: 681,
                                       hgt_mincm: 336,
                                       hgt_minori: 336,
                                       hgt_rangec: 546,
                                       hgt_stdcm: 105.57696843,
                                       hgt_variet: 259,
                                       majoritycm: 10302,
                                       maxcm_1st: 10348,
                                       mblr: "SF5957013",
                                       meancm_1st: 10299.37971698,
                                       median_1st: 103.05,
                                       mediancm_1: 10305,
                                       mincm_1st: 10052,
                                       minoritycm: 10052,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 103.48,
                                       rangecm_1s: 296,
                                       sf16_bldgi: "201006.0121352",
                                       stdcm_1st: 41.03213954,
                                       varietycm_: 104,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42734395799998,
                                       37.726185235
                                       ],
                                       [
                                       -122.42734612200003,
                                       37.726186273999986
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 139731,
                                       area_id: 139731,
                                       cells50cm_: 367,
                                       globalid: "{15A43D02-BAE8-43E5-9013-833DA708F6C7}",
                                       gnd1st_del: 6.64,
                                       gnd_cells5: 367,
                                       gnd_majori: 8968,
                                       gnd_maxcm: 9016,
                                       gnd_meancm: 8901.28065395,
                                       gnd_median: 8905,
                                       gnd_min_m: 87.51,
                                       gnd_mincm: 8751,
                                       gnd_minori: 8752,
                                       gnd_rangec: 265,
                                       gnd_stdcm: 64.12071578,
                                       gnd_variet: 201,
                                       hgt_cells5: 367,
                                       hgt_majori: 549,
                                       hgt_maxcm: 660,
                                       hgt_meancm: 510.98092643,
                                       hgt_median: 5.29,
                                       hgt_medi_1: 529,
                                       hgt_mincm: 142,
                                       hgt_minori: 142,
                                       hgt_rangec: 518,
                                       hgt_stdcm: 104.59217369,
                                       hgt_variet: 224,
                                       majoritycm: 9415,
                                       maxcm_1st: 9601,
                                       mblr: "SF5957031",
                                       meancm_1st: 9412.25340599,
                                       median_1st: 94.15,
                                       mediancm_1: 9415,
                                       mincm_1st: 9146,
                                       minoritycm: 9146,
                                       p2010_name: "SanfranI_03996.flt",
                                       p2010_zmax: 313.4982,
                                       p2010_zmin: 287.8995,
                                       peak_1st_m: 96.01,
                                       rangecm_1s: 455,
                                       sf16_bldgi: "201006.0139731",
                                       stdcm_1st: 75.93722191,
                                       varietycm_: 204,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.427926823,
                                       37.72641833900002
                                       ],
                                       [
                                       -122.42790891700004,
                                       37.72640982899998
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 142744,
                                       area_id: 142744,
                                       cells50cm_: 360,
                                       globalid: "{9D71A0CA-0825-4851-941B-A9C4DE7B3058}",
                                       gnd1st_del: 6.33,
                                       gnd_cells5: 360,
                                       gnd_majori: 8953,
                                       gnd_maxcm: 8957,
                                       gnd_meancm: 8890.50277778,
                                       gnd_median: 8931,
                                       gnd_min_m: 86.24,
                                       gnd_mincm: 8624,
                                       gnd_minori: 8624,
                                       gnd_rangec: 333,
                                       gnd_stdcm: 83.01927482,
                                       gnd_variet: 145,
                                       hgt_cells5: 360,
                                       hgt_majori: 311,
                                       hgt_maxcm: 592,
                                       hgt_meancm: 351.38333333,
                                       hgt_median: 3.31,
                                       hgt_medi_1: 331,
                                       hgt_mincm: 199,
                                       hgt_minori: 199,
                                       hgt_rangec: 393,
                                       hgt_stdcm: 91.16327081,
                                       hgt_variet: 202,
                                       majoritycm: 9259,
                                       maxcm_1st: 9331,
                                       mblr: "SF5957032",
                                       meancm_1st: 9241.89444444,
                                       median_1st: 92.57,
                                       mediancm_1: 9257,
                                       mincm_1st: 9121,
                                       minoritycm: 9121,
                                       p2010_name: "SanfranI_03991.flt",
                                       p2010_zmax: 322.5828,
                                       p2010_zmin: 274.2325,
                                       peak_1st_m: 93.31,
                                       rangecm_1s: 210,
                                       sf16_bldgi: "201006.0142744",
                                       stdcm_1st: 35.29250742,
                                       varietycm_: 128,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42788467100002,
                                       37.72647512200001
                                       ],
                                       [
                                       -122.42792066,
                                       37.726491915
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 143146,
                                       area_id: 143146,
                                       cells50cm_: 357,
                                       globalid: "{144FA3C4-205D-470E-A13B-2FBE86BF5707}",
                                       gnd1st_del: 6.67,
                                       gnd_cells5: 357,
                                       gnd_majori: 8897,
                                       gnd_maxcm: 9069,
                                       gnd_meancm: 8908.1372549,
                                       gnd_median: 8897,
                                       gnd_min_m: 87.6,
                                       gnd_mincm: 8760,
                                       gnd_minori: 8760,
                                       gnd_rangec: 309,
                                       gnd_stdcm: 79.28105299,
                                       gnd_variet: 222,
                                       hgt_cells5: 357,
                                       hgt_majori: 619,
                                       hgt_maxcm: 668,
                                       hgt_meancm: 508.92156863,
                                       hgt_median: 5.6,
                                       hgt_medi_1: 560,
                                       hgt_mincm: 171,
                                       hgt_minori: 171,
                                       hgt_rangec: 497,
                                       hgt_stdcm: 126.42795364,
                                       hgt_variet: 231,
                                       majoritycm: 9423,
                                       maxcm_1st: 9540,
                                       mblr: "SF5957030",
                                       meancm_1st: 9417.09803922,
                                       median_1st: 94.27,
                                       mediancm_1: 9427,
                                       mincm_1st: 9217,
                                       minoritycm: 9217,
                                       p2010_name: "SanfranI_03997.flt",
                                       p2010_zmax: 313.7134,
                                       p2010_zmin: 287.0901,
                                       peak_1st_m: 95.4,
                                       rangecm_1s: 323,
                                       sf16_bldgi: "201006.0143146",
                                       stdcm_1st: 70.99855146,
                                       varietycm_: 199,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42797210200003,
                                       37.726360519000025
                                       ],
                                       [
                                       -122.42795419999999,
                                       37.726352007
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 98575,
                                       area_id: 98575,
                                       cells50cm_: 476,
                                       globalid: "{B99ADFC4-039E-4249-9C69-B57825E10DE3}",
                                       gnd1st_del: 9.72,
                                       gnd_cells5: 476,
                                       gnd_majori: 9547,
                                       gnd_maxcm: 9827,
                                       gnd_meancm: 9639.37605042,
                                       gnd_median: 9643,
                                       gnd_min_m: 93.95,
                                       gnd_mincm: 9395,
                                       gnd_minori: 9395,
                                       gnd_rangec: 432,
                                       gnd_stdcm: 119.57322294,
                                       gnd_variet: 305,
                                       hgt_cells5: 476,
                                       hgt_majori: 589,
                                       hgt_maxcm: 870,
                                       hgt_meancm: 669.31092437,
                                       hgt_median: 6.87,
                                       hgt_medi_1: 687,
                                       hgt_mincm: 261,
                                       hgt_minori: 261,
                                       hgt_rangec: 609,
                                       hgt_stdcm: 136.07255219,
                                       hgt_variet: 299,
                                       majoritycm: 10371,
                                       maxcm_1st: 10429,
                                       mblr: "SF5957015",
                                       meancm_1st: 10308.68067227,
                                       median_1st: 103.67,
                                       mediancm_1: 10367,
                                       mincm_1st: 9668,
                                       minoritycm: 9668,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 104.29,
                                       rangecm_1s: 761,
                                       sf16_bldgi: "201006.0098575",
                                       stdcm_1st: 161.15135548,
                                       varietycm_: 153,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42743737100001,
                                       37.72612704800002
                                       ],
                                       [
                                       -122.42740130300001,
                                       37.72610972899997
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 95488,
                                       area_id: 95488,
                                       cells50cm_: 484,
                                       globalid: "{B13C1234-BA60-4213-A9C1-6F079CDC9EF9}",
                                       gnd1st_del: 9.7,
                                       gnd_cells5: 484,
                                       gnd_majori: 9765,
                                       gnd_maxcm: 9799,
                                       gnd_meancm: 9611.32438017,
                                       gnd_median: 9617,
                                       gnd_min_m: 93.62,
                                       gnd_mincm: 9362,
                                       gnd_minori: 9362,
                                       gnd_rangec: 437,
                                       gnd_stdcm: 123.23120506,
                                       gnd_variet: 337,
                                       hgt_cells5: 484,
                                       hgt_majori: 600,
                                       hgt_maxcm: 876,
                                       hgt_meancm: 679.44214876,
                                       hgt_median: 6.8,
                                       hgt_medi_1: 680,
                                       hgt_mincm: 324,
                                       hgt_minori: 324,
                                       hgt_rangec: 552,
                                       hgt_stdcm: 104.57852619,
                                       hgt_variet: 267,
                                       majoritycm: 10329,
                                       maxcm_1st: 10371,
                                       mblr: "SF5957014",
                                       meancm_1st: 10290.7892562,
                                       median_1st: 103.32,
                                       mediancm_1: 10332,
                                       mincm_1st: 9693,
                                       minoritycm: 9693,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 103.71,
                                       rangecm_1s: 678,
                                       sf16_bldgi: "201006.0095488",
                                       stdcm_1st: 110.53102949,
                                       varietycm_: 151,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42738676800003,
                                       37.726193298
                                       ],
                                       [
                                       -122.42738742199998,
                                       37.72619243899999
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 95488,
                                       area_id: 95488,
                                       cells50cm_: 484,
                                       globalid: "{B13C1234-BA60-4213-A9C1-6F079CDC9EF9}",
                                       gnd1st_del: 9.7,
                                       gnd_cells5: 484,
                                       gnd_majori: 9765,
                                       gnd_maxcm: 9799,
                                       gnd_meancm: 9611.32438017,
                                       gnd_median: 9617,
                                       gnd_min_m: 93.62,
                                       gnd_mincm: 9362,
                                       gnd_minori: 9362,
                                       gnd_rangec: 437,
                                       gnd_stdcm: 123.23120506,
                                       gnd_variet: 337,
                                       hgt_cells5: 484,
                                       hgt_majori: 600,
                                       hgt_maxcm: 876,
                                       hgt_meancm: 679.44214876,
                                       hgt_median: 6.8,
                                       hgt_medi_1: 680,
                                       hgt_mincm: 324,
                                       hgt_minori: 324,
                                       hgt_rangec: 552,
                                       hgt_stdcm: 104.57852619,
                                       hgt_variet: 267,
                                       majoritycm: 10329,
                                       maxcm_1st: 10371,
                                       mblr: "SF5957014",
                                       meancm_1st: 10290.7892562,
                                       median_1st: 103.32,
                                       mediancm_1: 10332,
                                       mincm_1st: 9693,
                                       minoritycm: 9693,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 103.71,
                                       rangecm_1s: 678,
                                       sf16_bldgi: "201006.0095488",
                                       stdcm_1st: 110.53102949,
                                       varietycm_: 151,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42738742199998,
                                       37.72619243899999
                                       ],
                                       [
                                       -122.427387543,
                                       37.72619249799999
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 95488,
                                       area_id: 95488,
                                       cells50cm_: 484,
                                       globalid: "{B13C1234-BA60-4213-A9C1-6F079CDC9EF9}",
                                       gnd1st_del: 9.7,
                                       gnd_cells5: 484,
                                       gnd_majori: 9765,
                                       gnd_maxcm: 9799,
                                       gnd_meancm: 9611.32438017,
                                       gnd_median: 9617,
                                       gnd_min_m: 93.62,
                                       gnd_mincm: 9362,
                                       gnd_minori: 9362,
                                       gnd_rangec: 437,
                                       gnd_stdcm: 123.23120506,
                                       gnd_variet: 337,
                                       hgt_cells5: 484,
                                       hgt_majori: 600,
                                       hgt_maxcm: 876,
                                       hgt_meancm: 679.44214876,
                                       hgt_median: 6.8,
                                       hgt_medi_1: 680,
                                       hgt_mincm: 324,
                                       hgt_minori: 324,
                                       hgt_rangec: 552,
                                       hgt_stdcm: 104.57852619,
                                       hgt_variet: 267,
                                       majoritycm: 10329,
                                       maxcm_1st: 10371,
                                       mblr: "SF5957014",
                                       meancm_1st: 10290.7892562,
                                       median_1st: 103.32,
                                       mediancm_1: 10332,
                                       mincm_1st: 9693,
                                       minoritycm: 9693,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 103.71,
                                       rangecm_1s: 678,
                                       sf16_bldgi: "201006.0095488",
                                       stdcm_1st: 110.53102949,
                                       varietycm_: 151,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.427387543,
                                       37.72619249799999
                                       ],
                                       [
                                       -122.4273925,
                                       37.72618598899999
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 98575,
                                       area_id: 98575,
                                       cells50cm_: 476,
                                       globalid: "{B99ADFC4-039E-4249-9C69-B57825E10DE3}",
                                       gnd1st_del: 9.72,
                                       gnd_cells5: 476,
                                       gnd_majori: 9547,
                                       gnd_maxcm: 9827,
                                       gnd_meancm: 9639.37605042,
                                       gnd_median: 9643,
                                       gnd_min_m: 93.95,
                                       gnd_mincm: 9395,
                                       gnd_minori: 9395,
                                       gnd_rangec: 432,
                                       gnd_stdcm: 119.57322294,
                                       gnd_variet: 305,
                                       hgt_cells5: 476,
                                       hgt_majori: 589,
                                       hgt_maxcm: 870,
                                       hgt_meancm: 669.31092437,
                                       hgt_median: 6.87,
                                       hgt_medi_1: 687,
                                       hgt_mincm: 261,
                                       hgt_minori: 261,
                                       hgt_rangec: 609,
                                       hgt_stdcm: 136.07255219,
                                       hgt_variet: 299,
                                       majoritycm: 10371,
                                       maxcm_1st: 10429,
                                       mblr: "SF5957015",
                                       meancm_1st: 10308.68067227,
                                       median_1st: 103.67,
                                       mediancm_1: 10367,
                                       mincm_1st: 9668,
                                       minoritycm: 9668,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 104.29,
                                       rangecm_1s: 761,
                                       sf16_bldgi: "201006.0098575",
                                       stdcm_1st: 161.15135548,
                                       varietycm_: 153,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42743137500003,
                                       37.72613471300002
                                       ],
                                       [
                                       -122.42743235299999,
                                       37.726133428000026
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 98575,
                                       area_id: 98575,
                                       cells50cm_: 476,
                                       globalid: "{B99ADFC4-039E-4249-9C69-B57825E10DE3}",
                                       gnd1st_del: 9.72,
                                       gnd_cells5: 476,
                                       gnd_majori: 9547,
                                       gnd_maxcm: 9827,
                                       gnd_meancm: 9639.37605042,
                                       gnd_median: 9643,
                                       gnd_min_m: 93.95,
                                       gnd_mincm: 9395,
                                       gnd_minori: 9395,
                                       gnd_rangec: 432,
                                       gnd_stdcm: 119.57322294,
                                       gnd_variet: 305,
                                       hgt_cells5: 476,
                                       hgt_majori: 589,
                                       hgt_maxcm: 870,
                                       hgt_meancm: 669.31092437,
                                       hgt_median: 6.87,
                                       hgt_medi_1: 687,
                                       hgt_mincm: 261,
                                       hgt_minori: 261,
                                       hgt_rangec: 609,
                                       hgt_stdcm: 136.07255219,
                                       hgt_variet: 299,
                                       majoritycm: 10371,
                                       maxcm_1st: 10429,
                                       mblr: "SF5957015",
                                       meancm_1st: 10308.68067227,
                                       median_1st: 103.67,
                                       mediancm_1: 10367,
                                       mincm_1st: 9668,
                                       minoritycm: 9668,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 104.29,
                                       rangecm_1s: 761,
                                       sf16_bldgi: "201006.0098575",
                                       stdcm_1st: 161.15135548,
                                       varietycm_: 153,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42743235299999,
                                       37.726133428000026
                                       ],
                                       [
                                       -122.42743246499998,
                                       37.72613348300001
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 98575,
                                       area_id: 98575,
                                       cells50cm_: 476,
                                       globalid: "{B99ADFC4-039E-4249-9C69-B57825E10DE3}",
                                       gnd1st_del: 9.72,
                                       gnd_cells5: 476,
                                       gnd_majori: 9547,
                                       gnd_maxcm: 9827,
                                       gnd_meancm: 9639.37605042,
                                       gnd_median: 9643,
                                       gnd_min_m: 93.95,
                                       gnd_mincm: 9395,
                                       gnd_minori: 9395,
                                       gnd_rangec: 432,
                                       gnd_stdcm: 119.57322294,
                                       gnd_variet: 305,
                                       hgt_cells5: 476,
                                       hgt_majori: 589,
                                       hgt_maxcm: 870,
                                       hgt_meancm: 669.31092437,
                                       hgt_median: 6.87,
                                       hgt_medi_1: 687,
                                       hgt_mincm: 261,
                                       hgt_minori: 261,
                                       hgt_rangec: 609,
                                       hgt_stdcm: 136.07255219,
                                       hgt_variet: 299,
                                       majoritycm: 10371,
                                       maxcm_1st: 10429,
                                       mblr: "SF5957015",
                                       meancm_1st: 10308.68067227,
                                       median_1st: 103.67,
                                       mediancm_1: 10367,
                                       mincm_1st: 9668,
                                       minoritycm: 9668,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 104.29,
                                       rangecm_1s: 761,
                                       sf16_bldgi: "201006.0098575",
                                       stdcm_1st: 161.15135548,
                                       varietycm_: 153,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42743246499998,
                                       37.72613348300001
                                       ],
                                       [
                                       -122.42743737100001,
                                       37.72612704800002
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 121352,
                                       area_id: 121352,
                                       cells50cm_: 424,
                                       globalid: "{9A97EDA7-6BB2-44B2-A454-8E68597D361F}",
                                       gnd1st_del: 8.7,
                                       gnd_cells5: 424,
                                       gnd_majori: 9754,
                                       gnd_maxcm: 9757,
                                       gnd_meancm: 9619.09669811,
                                       gnd_median: 9626,
                                       gnd_min_m: 94.35,
                                       gnd_mincm: 9435,
                                       gnd_minori: 9435,
                                       gnd_rangec: 322,
                                       gnd_stdcm: 101.03372587,
                                       gnd_variet: 241,
                                       hgt_cells5: 424,
                                       hgt_majori: 576,
                                       hgt_maxcm: 882,
                                       hgt_meancm: 680.26415094,
                                       hgt_median: 6.81,
                                       hgt_medi_1: 681,
                                       hgt_mincm: 336,
                                       hgt_minori: 336,
                                       hgt_rangec: 546,
                                       hgt_stdcm: 105.57696843,
                                       hgt_variet: 259,
                                       majoritycm: 10302,
                                       maxcm_1st: 10348,
                                       mblr: "SF5957013",
                                       meancm_1st: 10299.37971698,
                                       median_1st: 103.05,
                                       mediancm_1: 10305,
                                       mincm_1st: 10052,
                                       minoritycm: 10052,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 103.48,
                                       rangecm_1s: 296,
                                       sf16_bldgi: "201006.0121352",
                                       stdcm_1st: 41.03213954,
                                       varietycm_: 104,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42734228900002,
                                       37.72625163700002
                                       ],
                                       [
                                       -122.42734755200001,
                                       37.726245010000014
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 95488,
                                       area_id: 95488,
                                       cells50cm_: 484,
                                       globalid: "{B13C1234-BA60-4213-A9C1-6F079CDC9EF9}",
                                       gnd1st_del: 9.7,
                                       gnd_cells5: 484,
                                       gnd_majori: 9765,
                                       gnd_maxcm: 9799,
                                       gnd_meancm: 9611.32438017,
                                       gnd_median: 9617,
                                       gnd_min_m: 93.62,
                                       gnd_mincm: 9362,
                                       gnd_minori: 9362,
                                       gnd_rangec: 437,
                                       gnd_stdcm: 123.23120506,
                                       gnd_variet: 337,
                                       hgt_cells5: 484,
                                       hgt_majori: 600,
                                       hgt_maxcm: 876,
                                       hgt_meancm: 679.44214876,
                                       hgt_median: 6.8,
                                       hgt_medi_1: 680,
                                       hgt_mincm: 324,
                                       hgt_minori: 324,
                                       hgt_rangec: 552,
                                       hgt_stdcm: 104.57852619,
                                       hgt_variet: 267,
                                       majoritycm: 10329,
                                       maxcm_1st: 10371,
                                       mblr: "SF5957014",
                                       meancm_1st: 10290.7892562,
                                       median_1st: 103.32,
                                       mediancm_1: 10332,
                                       mincm_1st: 9693,
                                       minoritycm: 9693,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 103.71,
                                       rangecm_1s: 678,
                                       sf16_bldgi: "201006.0095488",
                                       stdcm_1st: 110.53102949,
                                       varietycm_: 151,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42735645200003,
                                       37.726168605
                                       ],
                                       [
                                       -122.42736306900002,
                                       37.726159904999975
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 95488,
                                       area_id: 95488,
                                       cells50cm_: 484,
                                       globalid: "{B13C1234-BA60-4213-A9C1-6F079CDC9EF9}",
                                       gnd1st_del: 9.7,
                                       gnd_cells5: 484,
                                       gnd_majori: 9765,
                                       gnd_maxcm: 9799,
                                       gnd_meancm: 9611.32438017,
                                       gnd_median: 9617,
                                       gnd_min_m: 93.62,
                                       gnd_mincm: 9362,
                                       gnd_minori: 9362,
                                       gnd_rangec: 437,
                                       gnd_stdcm: 123.23120506,
                                       gnd_variet: 337,
                                       hgt_cells5: 484,
                                       hgt_majori: 600,
                                       hgt_maxcm: 876,
                                       hgt_meancm: 679.44214876,
                                       hgt_median: 6.8,
                                       hgt_medi_1: 680,
                                       hgt_mincm: 324,
                                       hgt_minori: 324,
                                       hgt_rangec: 552,
                                       hgt_stdcm: 104.57852619,
                                       hgt_variet: 267,
                                       majoritycm: 10329,
                                       maxcm_1st: 10371,
                                       mblr: "SF5957014",
                                       meancm_1st: 10290.7892562,
                                       median_1st: 103.32,
                                       mediancm_1: 10332,
                                       mincm_1st: 9693,
                                       minoritycm: 9693,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 103.71,
                                       rangecm_1s: 678,
                                       sf16_bldgi: "201006.0095488",
                                       stdcm_1st: 110.53102949,
                                       varietycm_: 151,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42736306900002,
                                       37.726159904999975
                                       ],
                                       [
                                       -122.42736278299999,
                                       37.72615171000001
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 95488,
                                       area_id: 95488,
                                       cells50cm_: 484,
                                       globalid: "{B13C1234-BA60-4213-A9C1-6F079CDC9EF9}",
                                       gnd1st_del: 9.7,
                                       gnd_cells5: 484,
                                       gnd_majori: 9765,
                                       gnd_maxcm: 9799,
                                       gnd_meancm: 9611.32438017,
                                       gnd_median: 9617,
                                       gnd_min_m: 93.62,
                                       gnd_mincm: 9362,
                                       gnd_minori: 9362,
                                       gnd_rangec: 437,
                                       gnd_stdcm: 123.23120506,
                                       gnd_variet: 337,
                                       hgt_cells5: 484,
                                       hgt_majori: 600,
                                       hgt_maxcm: 876,
                                       hgt_meancm: 679.44214876,
                                       hgt_median: 6.8,
                                       hgt_medi_1: 680,
                                       hgt_mincm: 324,
                                       hgt_minori: 324,
                                       hgt_rangec: 552,
                                       hgt_stdcm: 104.57852619,
                                       hgt_variet: 267,
                                       majoritycm: 10329,
                                       maxcm_1st: 10371,
                                       mblr: "SF5957014",
                                       meancm_1st: 10290.7892562,
                                       median_1st: 103.32,
                                       mediancm_1: 10332,
                                       mincm_1st: 9693,
                                       minoritycm: 9693,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 103.71,
                                       rangecm_1s: 678,
                                       sf16_bldgi: "201006.0095488",
                                       stdcm_1st: 110.53102949,
                                       varietycm_: 151,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42736278299999,
                                       37.72615171000001
                                       ],
                                       [
                                       -122.42736280799998,
                                       37.726151644000026
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 95488,
                                       area_id: 95488,
                                       cells50cm_: 484,
                                       globalid: "{B13C1234-BA60-4213-A9C1-6F079CDC9EF9}",
                                       gnd1st_del: 9.7,
                                       gnd_cells5: 484,
                                       gnd_majori: 9765,
                                       gnd_maxcm: 9799,
                                       gnd_meancm: 9611.32438017,
                                       gnd_median: 9617,
                                       gnd_min_m: 93.62,
                                       gnd_mincm: 9362,
                                       gnd_minori: 9362,
                                       gnd_rangec: 437,
                                       gnd_stdcm: 123.23120506,
                                       gnd_variet: 337,
                                       hgt_cells5: 484,
                                       hgt_majori: 600,
                                       hgt_maxcm: 876,
                                       hgt_meancm: 679.44214876,
                                       hgt_median: 6.8,
                                       hgt_medi_1: 680,
                                       hgt_mincm: 324,
                                       hgt_minori: 324,
                                       hgt_rangec: 552,
                                       hgt_stdcm: 104.57852619,
                                       hgt_variet: 267,
                                       majoritycm: 10329,
                                       maxcm_1st: 10371,
                                       mblr: "SF5957014",
                                       meancm_1st: 10290.7892562,
                                       median_1st: 103.32,
                                       mediancm_1: 10332,
                                       mincm_1st: 9693,
                                       minoritycm: 9693,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 103.71,
                                       rangecm_1s: 678,
                                       sf16_bldgi: "201006.0095488",
                                       stdcm_1st: 110.53102949,
                                       varietycm_: 151,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42736280799998,
                                       37.726151644000026
                                       ],
                                       [
                                       -122.42737269600002,
                                       37.72613739799999
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 95488,
                                       area_id: 95488,
                                       cells50cm_: 484,
                                       globalid: "{B13C1234-BA60-4213-A9C1-6F079CDC9EF9}",
                                       gnd1st_del: 9.7,
                                       gnd_cells5: 484,
                                       gnd_majori: 9765,
                                       gnd_maxcm: 9799,
                                       gnd_meancm: 9611.32438017,
                                       gnd_median: 9617,
                                       gnd_min_m: 93.62,
                                       gnd_mincm: 9362,
                                       gnd_minori: 9362,
                                       gnd_rangec: 437,
                                       gnd_stdcm: 123.23120506,
                                       gnd_variet: 337,
                                       hgt_cells5: 484,
                                       hgt_majori: 600,
                                       hgt_maxcm: 876,
                                       hgt_meancm: 679.44214876,
                                       hgt_median: 6.8,
                                       hgt_medi_1: 680,
                                       hgt_mincm: 324,
                                       hgt_minori: 324,
                                       hgt_rangec: 552,
                                       hgt_stdcm: 104.57852619,
                                       hgt_variet: 267,
                                       majoritycm: 10329,
                                       maxcm_1st: 10371,
                                       mblr: "SF5957014",
                                       meancm_1st: 10290.7892562,
                                       median_1st: 103.32,
                                       mediancm_1: 10332,
                                       mincm_1st: 9693,
                                       minoritycm: 9693,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 103.71,
                                       rangecm_1s: 678,
                                       sf16_bldgi: "201006.0095488",
                                       stdcm_1st: 110.53102949,
                                       varietycm_: 151,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42737269600002,
                                       37.72613739799999
                                       ],
                                       [
                                       -122.42738183300004,
                                       37.72613550699998
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 95488,
                                       area_id: 95488,
                                       cells50cm_: 484,
                                       globalid: "{B13C1234-BA60-4213-A9C1-6F079CDC9EF9}",
                                       gnd1st_del: 9.7,
                                       gnd_cells5: 484,
                                       gnd_majori: 9765,
                                       gnd_maxcm: 9799,
                                       gnd_meancm: 9611.32438017,
                                       gnd_median: 9617,
                                       gnd_min_m: 93.62,
                                       gnd_mincm: 9362,
                                       gnd_minori: 9362,
                                       gnd_rangec: 437,
                                       gnd_stdcm: 123.23120506,
                                       gnd_variet: 337,
                                       hgt_cells5: 484,
                                       hgt_majori: 600,
                                       hgt_maxcm: 876,
                                       hgt_meancm: 679.44214876,
                                       hgt_median: 6.8,
                                       hgt_medi_1: 680,
                                       hgt_mincm: 324,
                                       hgt_minori: 324,
                                       hgt_rangec: 552,
                                       hgt_stdcm: 104.57852619,
                                       hgt_variet: 267,
                                       majoritycm: 10329,
                                       maxcm_1st: 10371,
                                       mblr: "SF5957014",
                                       meancm_1st: 10290.7892562,
                                       median_1st: 103.32,
                                       mediancm_1: 10332,
                                       mincm_1st: 9693,
                                       minoritycm: 9693,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 103.71,
                                       rangecm_1s: 678,
                                       sf16_bldgi: "201006.0095488",
                                       stdcm_1st: 110.53102949,
                                       varietycm_: 151,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42738183300004,
                                       37.72613550699998
                                       ],
                                       [
                                       -122.427388903,
                                       37.72612622600002
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 95488,
                                       area_id: 95488,
                                       cells50cm_: 484,
                                       globalid: "{B13C1234-BA60-4213-A9C1-6F079CDC9EF9}",
                                       gnd1st_del: 9.7,
                                       gnd_cells5: 484,
                                       gnd_majori: 9765,
                                       gnd_maxcm: 9799,
                                       gnd_meancm: 9611.32438017,
                                       gnd_median: 9617,
                                       gnd_min_m: 93.62,
                                       gnd_mincm: 9362,
                                       gnd_minori: 9362,
                                       gnd_rangec: 437,
                                       gnd_stdcm: 123.23120506,
                                       gnd_variet: 337,
                                       hgt_cells5: 484,
                                       hgt_majori: 600,
                                       hgt_maxcm: 876,
                                       hgt_meancm: 679.44214876,
                                       hgt_median: 6.8,
                                       hgt_medi_1: 680,
                                       hgt_mincm: 324,
                                       hgt_minori: 324,
                                       hgt_rangec: 552,
                                       hgt_stdcm: 104.57852619,
                                       hgt_variet: 267,
                                       majoritycm: 10329,
                                       maxcm_1st: 10371,
                                       mblr: "SF5957014",
                                       meancm_1st: 10290.7892562,
                                       median_1st: 103.32,
                                       mediancm_1: 10332,
                                       mincm_1st: 9693,
                                       minoritycm: 9693,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 103.71,
                                       rangecm_1s: 678,
                                       sf16_bldgi: "201006.0095488",
                                       stdcm_1st: 110.53102949,
                                       varietycm_: 151,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42739350900001,
                                       37.726128437
                                       ],
                                       [
                                       -122.42740020399998,
                                       37.72611940799999
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 98575,
                                       area_id: 98575,
                                       cells50cm_: 476,
                                       globalid: "{B99ADFC4-039E-4249-9C69-B57825E10DE3}",
                                       gnd1st_del: 9.72,
                                       gnd_cells5: 476,
                                       gnd_majori: 9547,
                                       gnd_maxcm: 9827,
                                       gnd_meancm: 9639.37605042,
                                       gnd_median: 9643,
                                       gnd_min_m: 93.95,
                                       gnd_mincm: 9395,
                                       gnd_minori: 9395,
                                       gnd_rangec: 432,
                                       gnd_stdcm: 119.57322294,
                                       gnd_variet: 305,
                                       hgt_cells5: 476,
                                       hgt_majori: 589,
                                       hgt_maxcm: 870,
                                       hgt_meancm: 669.31092437,
                                       hgt_median: 6.87,
                                       hgt_medi_1: 687,
                                       hgt_mincm: 261,
                                       hgt_minori: 261,
                                       hgt_rangec: 609,
                                       hgt_stdcm: 136.07255219,
                                       hgt_variet: 299,
                                       majoritycm: 10371,
                                       maxcm_1st: 10429,
                                       mblr: "SF5957015",
                                       meancm_1st: 10308.68067227,
                                       median_1st: 103.67,
                                       mediancm_1: 10367,
                                       mincm_1st: 9668,
                                       minoritycm: 9668,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 104.29,
                                       rangecm_1s: 761,
                                       sf16_bldgi: "201006.0098575",
                                       stdcm_1st: 161.15135548,
                                       varietycm_: 153,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42740132799996,
                                       37.72610966399998
                                       ],
                                       [
                                       -122.42740794200002,
                                       37.72610096300002
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 98575,
                                       area_id: 98575,
                                       cells50cm_: 476,
                                       globalid: "{B99ADFC4-039E-4249-9C69-B57825E10DE3}",
                                       gnd1st_del: 9.72,
                                       gnd_cells5: 476,
                                       gnd_majori: 9547,
                                       gnd_maxcm: 9827,
                                       gnd_meancm: 9639.37605042,
                                       gnd_median: 9643,
                                       gnd_min_m: 93.95,
                                       gnd_mincm: 9395,
                                       gnd_minori: 9395,
                                       gnd_rangec: 432,
                                       gnd_stdcm: 119.57322294,
                                       gnd_variet: 305,
                                       hgt_cells5: 476,
                                       hgt_majori: 589,
                                       hgt_maxcm: 870,
                                       hgt_meancm: 669.31092437,
                                       hgt_median: 6.87,
                                       hgt_medi_1: 687,
                                       hgt_mincm: 261,
                                       hgt_minori: 261,
                                       hgt_rangec: 609,
                                       hgt_stdcm: 136.07255219,
                                       hgt_variet: 299,
                                       majoritycm: 10371,
                                       maxcm_1st: 10429,
                                       mblr: "SF5957015",
                                       meancm_1st: 10308.68067227,
                                       median_1st: 103.67,
                                       mediancm_1: 10367,
                                       mincm_1st: 9668,
                                       minoritycm: 9668,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 104.29,
                                       rangecm_1s: 761,
                                       sf16_bldgi: "201006.0098575",
                                       stdcm_1st: 161.15135548,
                                       varietycm_: 153,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42740794200002,
                                       37.72610096300002
                                       ],
                                       [
                                       -122.42740766800001,
                                       37.72609276600002
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 98575,
                                       area_id: 98575,
                                       cells50cm_: 476,
                                       globalid: "{B99ADFC4-039E-4249-9C69-B57825E10DE3}",
                                       gnd1st_del: 9.72,
                                       gnd_cells5: 476,
                                       gnd_majori: 9547,
                                       gnd_maxcm: 9827,
                                       gnd_meancm: 9639.37605042,
                                       gnd_median: 9643,
                                       gnd_min_m: 93.95,
                                       gnd_mincm: 9395,
                                       gnd_minori: 9395,
                                       gnd_rangec: 432,
                                       gnd_stdcm: 119.57322294,
                                       gnd_variet: 305,
                                       hgt_cells5: 476,
                                       hgt_majori: 589,
                                       hgt_maxcm: 870,
                                       hgt_meancm: 669.31092437,
                                       hgt_median: 6.87,
                                       hgt_medi_1: 687,
                                       hgt_mincm: 261,
                                       hgt_minori: 261,
                                       hgt_rangec: 609,
                                       hgt_stdcm: 136.07255219,
                                       hgt_variet: 299,
                                       majoritycm: 10371,
                                       maxcm_1st: 10429,
                                       mblr: "SF5957015",
                                       meancm_1st: 10308.68067227,
                                       median_1st: 103.67,
                                       mediancm_1: 10367,
                                       mincm_1st: 9668,
                                       minoritycm: 9668,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 104.29,
                                       rangecm_1s: 761,
                                       sf16_bldgi: "201006.0098575",
                                       stdcm_1st: 161.15135548,
                                       varietycm_: 153,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42740766800001,
                                       37.72609276600002
                                       ],
                                       [
                                       -122.427407693,
                                       37.72609270200002
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 98575,
                                       area_id: 98575,
                                       cells50cm_: 476,
                                       globalid: "{B99ADFC4-039E-4249-9C69-B57825E10DE3}",
                                       gnd1st_del: 9.72,
                                       gnd_cells5: 476,
                                       gnd_majori: 9547,
                                       gnd_maxcm: 9827,
                                       gnd_meancm: 9639.37605042,
                                       gnd_median: 9643,
                                       gnd_min_m: 93.95,
                                       gnd_mincm: 9395,
                                       gnd_minori: 9395,
                                       gnd_rangec: 432,
                                       gnd_stdcm: 119.57322294,
                                       gnd_variet: 305,
                                       hgt_cells5: 476,
                                       hgt_majori: 589,
                                       hgt_maxcm: 870,
                                       hgt_meancm: 669.31092437,
                                       hgt_median: 6.87,
                                       hgt_medi_1: 687,
                                       hgt_mincm: 261,
                                       hgt_minori: 261,
                                       hgt_rangec: 609,
                                       hgt_stdcm: 136.07255219,
                                       hgt_variet: 299,
                                       majoritycm: 10371,
                                       maxcm_1st: 10429,
                                       mblr: "SF5957015",
                                       meancm_1st: 10308.68067227,
                                       median_1st: 103.67,
                                       mediancm_1: 10367,
                                       mincm_1st: 9668,
                                       minoritycm: 9668,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 104.29,
                                       rangecm_1s: 761,
                                       sf16_bldgi: "201006.0098575",
                                       stdcm_1st: 161.15135548,
                                       varietycm_: 153,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.427407693,
                                       37.72609270200002
                                       ],
                                       [
                                       -122.427417568,
                                       37.72607846400001
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 98575,
                                       area_id: 98575,
                                       cells50cm_: 476,
                                       globalid: "{B99ADFC4-039E-4249-9C69-B57825E10DE3}",
                                       gnd1st_del: 9.72,
                                       gnd_cells5: 476,
                                       gnd_majori: 9547,
                                       gnd_maxcm: 9827,
                                       gnd_meancm: 9639.37605042,
                                       gnd_median: 9643,
                                       gnd_min_m: 93.95,
                                       gnd_mincm: 9395,
                                       gnd_minori: 9395,
                                       gnd_rangec: 432,
                                       gnd_stdcm: 119.57322294,
                                       gnd_variet: 305,
                                       hgt_cells5: 476,
                                       hgt_majori: 589,
                                       hgt_maxcm: 870,
                                       hgt_meancm: 669.31092437,
                                       hgt_median: 6.87,
                                       hgt_medi_1: 687,
                                       hgt_mincm: 261,
                                       hgt_minori: 261,
                                       hgt_rangec: 609,
                                       hgt_stdcm: 136.07255219,
                                       hgt_variet: 299,
                                       majoritycm: 10371,
                                       maxcm_1st: 10429,
                                       mblr: "SF5957015",
                                       meancm_1st: 10308.68067227,
                                       median_1st: 103.67,
                                       mediancm_1: 10367,
                                       mincm_1st: 9668,
                                       minoritycm: 9668,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 104.29,
                                       rangecm_1s: 761,
                                       sf16_bldgi: "201006.0098575",
                                       stdcm_1st: 161.15135548,
                                       varietycm_: 153,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.427417568,
                                       37.72607846400001
                                       ],
                                       [
                                       -122.42742671600003,
                                       37.72607656500003
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 98575,
                                       area_id: 98575,
                                       cells50cm_: 476,
                                       globalid: "{B99ADFC4-039E-4249-9C69-B57825E10DE3}",
                                       gnd1st_del: 9.72,
                                       gnd_cells5: 476,
                                       gnd_majori: 9547,
                                       gnd_maxcm: 9827,
                                       gnd_meancm: 9639.37605042,
                                       gnd_median: 9643,
                                       gnd_min_m: 93.95,
                                       gnd_mincm: 9395,
                                       gnd_minori: 9395,
                                       gnd_rangec: 432,
                                       gnd_stdcm: 119.57322294,
                                       gnd_variet: 305,
                                       hgt_cells5: 476,
                                       hgt_majori: 589,
                                       hgt_maxcm: 870,
                                       hgt_meancm: 669.31092437,
                                       hgt_median: 6.87,
                                       hgt_medi_1: 687,
                                       hgt_mincm: 261,
                                       hgt_minori: 261,
                                       hgt_rangec: 609,
                                       hgt_stdcm: 136.07255219,
                                       hgt_variet: 299,
                                       majoritycm: 10371,
                                       maxcm_1st: 10429,
                                       mblr: "SF5957015",
                                       meancm_1st: 10308.68067227,
                                       median_1st: 103.67,
                                       mediancm_1: 10367,
                                       mincm_1st: 9668,
                                       minoritycm: 9668,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 104.29,
                                       rangecm_1s: 761,
                                       sf16_bldgi: "201006.0098575",
                                       stdcm_1st: 161.15135548,
                                       varietycm_: 153,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42742671600003,
                                       37.72607656500003
                                       ],
                                       [
                                       -122.42743377300002,
                                       37.726067288000024
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 98575,
                                       area_id: 98575,
                                       cells50cm_: 476,
                                       globalid: "{B99ADFC4-039E-4249-9C69-B57825E10DE3}",
                                       gnd1st_del: 9.72,
                                       gnd_cells5: 476,
                                       gnd_majori: 9547,
                                       gnd_maxcm: 9827,
                                       gnd_meancm: 9639.37605042,
                                       gnd_median: 9643,
                                       gnd_min_m: 93.95,
                                       gnd_mincm: 9395,
                                       gnd_minori: 9395,
                                       gnd_rangec: 432,
                                       gnd_stdcm: 119.57322294,
                                       gnd_variet: 305,
                                       hgt_cells5: 476,
                                       hgt_majori: 589,
                                       hgt_maxcm: 870,
                                       hgt_meancm: 669.31092437,
                                       hgt_median: 6.87,
                                       hgt_medi_1: 687,
                                       hgt_mincm: 261,
                                       hgt_minori: 261,
                                       hgt_rangec: 609,
                                       hgt_stdcm: 136.07255219,
                                       hgt_variet: 299,
                                       majoritycm: 10371,
                                       maxcm_1st: 10429,
                                       mblr: "SF5957015",
                                       meancm_1st: 10308.68067227,
                                       median_1st: 103.67,
                                       mediancm_1: 10367,
                                       mincm_1st: 9668,
                                       minoritycm: 9668,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 104.29,
                                       rangecm_1s: 761,
                                       sf16_bldgi: "201006.0098575",
                                       stdcm_1st: 161.15135548,
                                       varietycm_: 153,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42743703999996,
                                       37.72606886
                                       ],
                                       [
                                       -122.42744311099999,
                                       37.726060674999985
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 121352,
                                       area_id: 121352,
                                       cells50cm_: 424,
                                       globalid: "{9A97EDA7-6BB2-44B2-A454-8E68597D361F}",
                                       gnd1st_del: 8.7,
                                       gnd_cells5: 424,
                                       gnd_majori: 9754,
                                       gnd_maxcm: 9757,
                                       gnd_meancm: 9619.09669811,
                                       gnd_median: 9626,
                                       gnd_min_m: 94.35,
                                       gnd_mincm: 9435,
                                       gnd_minori: 9435,
                                       gnd_rangec: 322,
                                       gnd_stdcm: 101.03372587,
                                       gnd_variet: 241,
                                       hgt_cells5: 424,
                                       hgt_majori: 576,
                                       hgt_maxcm: 882,
                                       hgt_meancm: 680.26415094,
                                       hgt_median: 6.81,
                                       hgt_medi_1: 681,
                                       hgt_mincm: 336,
                                       hgt_minori: 336,
                                       hgt_rangec: 546,
                                       hgt_stdcm: 105.57696843,
                                       hgt_variet: 259,
                                       majoritycm: 10302,
                                       maxcm_1st: 10348,
                                       mblr: "SF5957013",
                                       meancm_1st: 10299.37971698,
                                       median_1st: 103.05,
                                       mediancm_1: 10305,
                                       mincm_1st: 10052,
                                       minoritycm: 10052,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 103.48,
                                       rangecm_1s: 296,
                                       sf16_bldgi: "201006.0121352",
                                       stdcm_1st: 41.03213954,
                                       varietycm_: 104,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42731150100003,
                                       37.72622762200001
                                       ],
                                       [
                                       -122.42731811700004,
                                       37.726218933999974
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 121352,
                                       area_id: 121352,
                                       cells50cm_: 424,
                                       globalid: "{9A97EDA7-6BB2-44B2-A454-8E68597D361F}",
                                       gnd1st_del: 8.7,
                                       gnd_cells5: 424,
                                       gnd_majori: 9754,
                                       gnd_maxcm: 9757,
                                       gnd_meancm: 9619.09669811,
                                       gnd_median: 9626,
                                       gnd_min_m: 94.35,
                                       gnd_mincm: 9435,
                                       gnd_minori: 9435,
                                       gnd_rangec: 322,
                                       gnd_stdcm: 101.03372587,
                                       gnd_variet: 241,
                                       hgt_cells5: 424,
                                       hgt_majori: 576,
                                       hgt_maxcm: 882,
                                       hgt_meancm: 680.26415094,
                                       hgt_median: 6.81,
                                       hgt_medi_1: 681,
                                       hgt_mincm: 336,
                                       hgt_minori: 336,
                                       hgt_rangec: 546,
                                       hgt_stdcm: 105.57696843,
                                       hgt_variet: 259,
                                       majoritycm: 10302,
                                       maxcm_1st: 10348,
                                       mblr: "SF5957013",
                                       meancm_1st: 10299.37971698,
                                       median_1st: 103.05,
                                       mediancm_1: 10305,
                                       mincm_1st: 10052,
                                       minoritycm: 10052,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 103.48,
                                       rangecm_1s: 296,
                                       sf16_bldgi: "201006.0121352",
                                       stdcm_1st: 41.03213954,
                                       varietycm_: 104,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42731811700004,
                                       37.726218933999974
                                       ],
                                       [
                                       -122.42731784400003,
                                       37.72621071999998
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 121352,
                                       area_id: 121352,
                                       cells50cm_: 424,
                                       globalid: "{9A97EDA7-6BB2-44B2-A454-8E68597D361F}",
                                       gnd1st_del: 8.7,
                                       gnd_cells5: 424,
                                       gnd_majori: 9754,
                                       gnd_maxcm: 9757,
                                       gnd_meancm: 9619.09669811,
                                       gnd_median: 9626,
                                       gnd_min_m: 94.35,
                                       gnd_mincm: 9435,
                                       gnd_minori: 9435,
                                       gnd_rangec: 322,
                                       gnd_stdcm: 101.03372587,
                                       gnd_variet: 241,
                                       hgt_cells5: 424,
                                       hgt_majori: 576,
                                       hgt_maxcm: 882,
                                       hgt_meancm: 680.26415094,
                                       hgt_median: 6.81,
                                       hgt_medi_1: 681,
                                       hgt_mincm: 336,
                                       hgt_minori: 336,
                                       hgt_rangec: 546,
                                       hgt_stdcm: 105.57696843,
                                       hgt_variet: 259,
                                       majoritycm: 10302,
                                       maxcm_1st: 10348,
                                       mblr: "SF5957013",
                                       meancm_1st: 10299.37971698,
                                       median_1st: 103.05,
                                       mediancm_1: 10305,
                                       mincm_1st: 10052,
                                       minoritycm: 10052,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 103.48,
                                       rangecm_1s: 296,
                                       sf16_bldgi: "201006.0121352",
                                       stdcm_1st: 41.03213954,
                                       varietycm_: 104,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42731784400003,
                                       37.72621071999998
                                       ],
                                       [
                                       -122.42731786899998,
                                       37.72621065300001
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 121352,
                                       area_id: 121352,
                                       cells50cm_: 424,
                                       globalid: "{9A97EDA7-6BB2-44B2-A454-8E68597D361F}",
                                       gnd1st_del: 8.7,
                                       gnd_cells5: 424,
                                       gnd_majori: 9754,
                                       gnd_maxcm: 9757,
                                       gnd_meancm: 9619.09669811,
                                       gnd_median: 9626,
                                       gnd_min_m: 94.35,
                                       gnd_mincm: 9435,
                                       gnd_minori: 9435,
                                       gnd_rangec: 322,
                                       gnd_stdcm: 101.03372587,
                                       gnd_variet: 241,
                                       hgt_cells5: 424,
                                       hgt_majori: 576,
                                       hgt_maxcm: 882,
                                       hgt_meancm: 680.26415094,
                                       hgt_median: 6.81,
                                       hgt_medi_1: 681,
                                       hgt_mincm: 336,
                                       hgt_minori: 336,
                                       hgt_rangec: 546,
                                       hgt_stdcm: 105.57696843,
                                       hgt_variet: 259,
                                       majoritycm: 10302,
                                       maxcm_1st: 10348,
                                       mblr: "SF5957013",
                                       meancm_1st: 10299.37971698,
                                       median_1st: 103.05,
                                       mediancm_1: 10305,
                                       mincm_1st: 10052,
                                       minoritycm: 10052,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 103.48,
                                       rangecm_1s: 296,
                                       sf16_bldgi: "201006.0121352",
                                       stdcm_1st: 41.03213954,
                                       varietycm_: 104,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42731786899998,
                                       37.72621065300001
                                       ],
                                       [
                                       -122.42732775899997,
                                       37.72619640900001
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 121352,
                                       area_id: 121352,
                                       cells50cm_: 424,
                                       globalid: "{9A97EDA7-6BB2-44B2-A454-8E68597D361F}",
                                       gnd1st_del: 8.7,
                                       gnd_cells5: 424,
                                       gnd_majori: 9754,
                                       gnd_maxcm: 9757,
                                       gnd_meancm: 9619.09669811,
                                       gnd_median: 9626,
                                       gnd_min_m: 94.35,
                                       gnd_mincm: 9435,
                                       gnd_minori: 9435,
                                       gnd_rangec: 322,
                                       gnd_stdcm: 101.03372587,
                                       gnd_variet: 241,
                                       hgt_cells5: 424,
                                       hgt_majori: 576,
                                       hgt_maxcm: 882,
                                       hgt_meancm: 680.26415094,
                                       hgt_median: 6.81,
                                       hgt_medi_1: 681,
                                       hgt_mincm: 336,
                                       hgt_minori: 336,
                                       hgt_rangec: 546,
                                       hgt_stdcm: 105.57696843,
                                       hgt_variet: 259,
                                       majoritycm: 10302,
                                       maxcm_1st: 10348,
                                       mblr: "SF5957013",
                                       meancm_1st: 10299.37971698,
                                       median_1st: 103.05,
                                       mediancm_1: 10305,
                                       mincm_1st: 10052,
                                       minoritycm: 10052,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 103.48,
                                       rangecm_1s: 296,
                                       sf16_bldgi: "201006.0121352",
                                       stdcm_1st: 41.03213954,
                                       varietycm_: 104,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42732775899997,
                                       37.72619640900001
                                       ],
                                       [
                                       -122.42733689900001,
                                       37.726194513
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 121352,
                                       area_id: 121352,
                                       cells50cm_: 424,
                                       globalid: "{9A97EDA7-6BB2-44B2-A454-8E68597D361F}",
                                       gnd1st_del: 8.7,
                                       gnd_cells5: 424,
                                       gnd_majori: 9754,
                                       gnd_maxcm: 9757,
                                       gnd_meancm: 9619.09669811,
                                       gnd_median: 9626,
                                       gnd_min_m: 94.35,
                                       gnd_mincm: 9435,
                                       gnd_minori: 9435,
                                       gnd_rangec: 322,
                                       gnd_stdcm: 101.03372587,
                                       gnd_variet: 241,
                                       hgt_cells5: 424,
                                       hgt_majori: 576,
                                       hgt_maxcm: 882,
                                       hgt_meancm: 680.26415094,
                                       hgt_median: 6.81,
                                       hgt_medi_1: 681,
                                       hgt_mincm: 336,
                                       hgt_minori: 336,
                                       hgt_rangec: 546,
                                       hgt_stdcm: 105.57696843,
                                       hgt_variet: 259,
                                       majoritycm: 10302,
                                       maxcm_1st: 10348,
                                       mblr: "SF5957013",
                                       meancm_1st: 10299.37971698,
                                       median_1st: 103.05,
                                       mediancm_1: 10305,
                                       mincm_1st: 10052,
                                       minoritycm: 10052,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 103.48,
                                       rangecm_1s: 296,
                                       sf16_bldgi: "201006.0121352",
                                       stdcm_1st: 41.03213954,
                                       varietycm_: 104,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42733689900001,
                                       37.726194513
                                       ],
                                       [
                                       -122.42734395799998,
                                       37.726185235
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 121352,
                                       area_id: 121352,
                                       cells50cm_: 424,
                                       globalid: "{9A97EDA7-6BB2-44B2-A454-8E68597D361F}",
                                       gnd1st_del: 8.7,
                                       gnd_cells5: 424,
                                       gnd_majori: 9754,
                                       gnd_maxcm: 9757,
                                       gnd_meancm: 9619.09669811,
                                       gnd_median: 9626,
                                       gnd_min_m: 94.35,
                                       gnd_mincm: 9435,
                                       gnd_minori: 9435,
                                       gnd_rangec: 322,
                                       gnd_stdcm: 101.03372587,
                                       gnd_variet: 241,
                                       hgt_cells5: 424,
                                       hgt_majori: 576,
                                       hgt_maxcm: 882,
                                       hgt_meancm: 680.26415094,
                                       hgt_median: 6.81,
                                       hgt_medi_1: 681,
                                       hgt_mincm: 336,
                                       hgt_minori: 336,
                                       hgt_rangec: 546,
                                       hgt_stdcm: 105.57696843,
                                       hgt_variet: 259,
                                       majoritycm: 10302,
                                       maxcm_1st: 10348,
                                       mblr: "SF5957013",
                                       meancm_1st: 10299.37971698,
                                       median_1st: 103.05,
                                       mediancm_1: 10305,
                                       mincm_1st: 10052,
                                       minoritycm: 10052,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 103.48,
                                       rangecm_1s: 296,
                                       sf16_bldgi: "201006.0121352",
                                       stdcm_1st: 41.03213954,
                                       varietycm_: 104,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42734612200003,
                                       37.726186273999986
                                       ],
                                       [
                                       -122.42735315099998,
                                       37.726176791
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 139731,
                                       area_id: 139731,
                                       cells50cm_: 367,
                                       globalid: "{15A43D02-BAE8-43E5-9013-833DA708F6C7}",
                                       gnd1st_del: 6.64,
                                       gnd_cells5: 367,
                                       gnd_majori: 8968,
                                       gnd_maxcm: 9016,
                                       gnd_meancm: 8901.28065395,
                                       gnd_median: 8905,
                                       gnd_min_m: 87.51,
                                       gnd_mincm: 8751,
                                       gnd_minori: 8752,
                                       gnd_rangec: 265,
                                       gnd_stdcm: 64.12071578,
                                       gnd_variet: 201,
                                       hgt_cells5: 367,
                                       hgt_majori: 549,
                                       hgt_maxcm: 660,
                                       hgt_meancm: 510.98092643,
                                       hgt_median: 5.29,
                                       hgt_medi_1: 529,
                                       hgt_mincm: 142,
                                       hgt_minori: 142,
                                       hgt_rangec: 518,
                                       hgt_stdcm: 104.59217369,
                                       hgt_variet: 224,
                                       majoritycm: 9415,
                                       maxcm_1st: 9601,
                                       mblr: "SF5957031",
                                       meancm_1st: 9412.25340599,
                                       median_1st: 94.15,
                                       mediancm_1: 9415,
                                       mincm_1st: 9146,
                                       minoritycm: 9146,
                                       p2010_name: "SanfranI_03996.flt",
                                       p2010_zmax: 313.4982,
                                       p2010_zmin: 287.8995,
                                       peak_1st_m: 96.01,
                                       rangecm_1s: 455,
                                       sf16_bldgi: "201006.0139731",
                                       stdcm_1st: 75.93722191,
                                       varietycm_: 204,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42794928900003,
                                       37.726388514
                                       ],
                                       [
                                       -122.427926823,
                                       37.72641833900002
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 139731,
                                       area_id: 139731,
                                       cells50cm_: 367,
                                       globalid: "{15A43D02-BAE8-43E5-9013-833DA708F6C7}",
                                       gnd1st_del: 6.64,
                                       gnd_cells5: 367,
                                       gnd_majori: 8968,
                                       gnd_maxcm: 9016,
                                       gnd_meancm: 8901.28065395,
                                       gnd_median: 8905,
                                       gnd_min_m: 87.51,
                                       gnd_mincm: 8751,
                                       gnd_minori: 8752,
                                       gnd_rangec: 265,
                                       gnd_stdcm: 64.12071578,
                                       gnd_variet: 201,
                                       hgt_cells5: 367,
                                       hgt_majori: 549,
                                       hgt_maxcm: 660,
                                       hgt_meancm: 510.98092643,
                                       hgt_median: 5.29,
                                       hgt_medi_1: 529,
                                       hgt_mincm: 142,
                                       hgt_minori: 142,
                                       hgt_rangec: 518,
                                       hgt_stdcm: 104.59217369,
                                       hgt_variet: 224,
                                       majoritycm: 9415,
                                       maxcm_1st: 9601,
                                       mblr: "SF5957031",
                                       meancm_1st: 9412.25340599,
                                       median_1st: 94.15,
                                       mediancm_1: 9415,
                                       mincm_1st: 9146,
                                       minoritycm: 9146,
                                       p2010_name: "SanfranI_03996.flt",
                                       p2010_zmax: 313.4982,
                                       p2010_zmin: 287.8995,
                                       peak_1st_m: 96.01,
                                       rangecm_1s: 455,
                                       sf16_bldgi: "201006.0139731",
                                       stdcm_1st: 75.93722191,
                                       varietycm_: 204,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42790891700004,
                                       37.72640982899998
                                       ],
                                       [
                                       -122.42789087900002,
                                       37.726433644999986
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 142744,
                                       area_id: 142744,
                                       cells50cm_: 360,
                                       globalid: "{9D71A0CA-0825-4851-941B-A9C4DE7B3058}",
                                       gnd1st_del: 6.33,
                                       gnd_cells5: 360,
                                       gnd_majori: 8953,
                                       gnd_maxcm: 8957,
                                       gnd_meancm: 8890.50277778,
                                       gnd_median: 8931,
                                       gnd_min_m: 86.24,
                                       gnd_mincm: 8624,
                                       gnd_minori: 8624,
                                       gnd_rangec: 333,
                                       gnd_stdcm: 83.01927482,
                                       gnd_variet: 145,
                                       hgt_cells5: 360,
                                       hgt_majori: 311,
                                       hgt_maxcm: 592,
                                       hgt_meancm: 351.38333333,
                                       hgt_median: 3.31,
                                       hgt_medi_1: 331,
                                       hgt_mincm: 199,
                                       hgt_minori: 199,
                                       hgt_rangec: 393,
                                       hgt_stdcm: 91.16327081,
                                       hgt_variet: 202,
                                       majoritycm: 9259,
                                       maxcm_1st: 9331,
                                       mblr: "SF5957032",
                                       meancm_1st: 9241.89444444,
                                       median_1st: 92.57,
                                       mediancm_1: 9257,
                                       mincm_1st: 9121,
                                       minoritycm: 9121,
                                       p2010_name: "SanfranI_03991.flt",
                                       p2010_zmax: 322.5828,
                                       p2010_zmin: 274.2325,
                                       peak_1st_m: 93.31,
                                       rangecm_1s: 210,
                                       sf16_bldgi: "201006.0142744",
                                       stdcm_1st: 35.29250742,
                                       varietycm_: 128,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42790399299999,
                                       37.72644901799998
                                       ],
                                       [
                                       -122.42788467100002,
                                       37.72647512200001
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 142744,
                                       area_id: 142744,
                                       cells50cm_: 360,
                                       globalid: "{9D71A0CA-0825-4851-941B-A9C4DE7B3058}",
                                       gnd1st_del: 6.33,
                                       gnd_cells5: 360,
                                       gnd_majori: 8953,
                                       gnd_maxcm: 8957,
                                       gnd_meancm: 8890.50277778,
                                       gnd_median: 8931,
                                       gnd_min_m: 86.24,
                                       gnd_mincm: 8624,
                                       gnd_minori: 8624,
                                       gnd_rangec: 333,
                                       gnd_stdcm: 83.01927482,
                                       gnd_variet: 145,
                                       hgt_cells5: 360,
                                       hgt_majori: 311,
                                       hgt_maxcm: 592,
                                       hgt_meancm: 351.38333333,
                                       hgt_median: 3.31,
                                       hgt_medi_1: 331,
                                       hgt_mincm: 199,
                                       hgt_minori: 199,
                                       hgt_rangec: 393,
                                       hgt_stdcm: 91.16327081,
                                       hgt_variet: 202,
                                       majoritycm: 9259,
                                       maxcm_1st: 9331,
                                       mblr: "SF5957032",
                                       meancm_1st: 9241.89444444,
                                       median_1st: 92.57,
                                       mediancm_1: 9257,
                                       mincm_1st: 9121,
                                       minoritycm: 9121,
                                       p2010_name: "SanfranI_03991.flt",
                                       p2010_zmax: 322.5828,
                                       p2010_zmin: 274.2325,
                                       peak_1st_m: 93.31,
                                       rangecm_1s: 210,
                                       sf16_bldgi: "201006.0142744",
                                       stdcm_1st: 35.29250742,
                                       varietycm_: 128,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.427920632,
                                       37.726491985999985
                                       ],
                                       [
                                       -122.42790127,
                                       37.72651814400001
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 143146,
                                       area_id: 143146,
                                       cells50cm_: 357,
                                       globalid: "{144FA3C4-205D-470E-A13B-2FBE86BF5707}",
                                       gnd1st_del: 6.67,
                                       gnd_cells5: 357,
                                       gnd_majori: 8897,
                                       gnd_maxcm: 9069,
                                       gnd_meancm: 8908.1372549,
                                       gnd_median: 8897,
                                       gnd_min_m: 87.6,
                                       gnd_mincm: 8760,
                                       gnd_minori: 8760,
                                       gnd_rangec: 309,
                                       gnd_stdcm: 79.28105299,
                                       gnd_variet: 222,
                                       hgt_cells5: 357,
                                       hgt_majori: 619,
                                       hgt_maxcm: 668,
                                       hgt_meancm: 508.92156863,
                                       hgt_median: 5.6,
                                       hgt_medi_1: 560,
                                       hgt_mincm: 171,
                                       hgt_minori: 171,
                                       hgt_rangec: 497,
                                       hgt_stdcm: 126.42795364,
                                       hgt_variet: 231,
                                       majoritycm: 9423,
                                       maxcm_1st: 9540,
                                       mblr: "SF5957030",
                                       meancm_1st: 9417.09803922,
                                       median_1st: 94.27,
                                       mediancm_1: 9427,
                                       mincm_1st: 9217,
                                       minoritycm: 9217,
                                       p2010_name: "SanfranI_03997.flt",
                                       p2010_zmax: 313.7134,
                                       p2010_zmin: 287.0901,
                                       peak_1st_m: 95.4,
                                       rangecm_1s: 323,
                                       sf16_bldgi: "201006.0143146",
                                       stdcm_1st: 70.99855146,
                                       varietycm_: 199,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42799456699997,
                                       37.72633069599999
                                       ],
                                       [
                                       -122.42797210200003,
                                       37.726360519000025
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 143146,
                                       area_id: 143146,
                                       cells50cm_: 357,
                                       globalid: "{144FA3C4-205D-470E-A13B-2FBE86BF5707}",
                                       gnd1st_del: 6.67,
                                       gnd_cells5: 357,
                                       gnd_majori: 8897,
                                       gnd_maxcm: 9069,
                                       gnd_meancm: 8908.1372549,
                                       gnd_median: 8897,
                                       gnd_min_m: 87.6,
                                       gnd_mincm: 8760,
                                       gnd_minori: 8760,
                                       gnd_rangec: 309,
                                       gnd_stdcm: 79.28105299,
                                       gnd_variet: 222,
                                       hgt_cells5: 357,
                                       hgt_majori: 619,
                                       hgt_maxcm: 668,
                                       hgt_meancm: 508.92156863,
                                       hgt_median: 5.6,
                                       hgt_medi_1: 560,
                                       hgt_mincm: 171,
                                       hgt_minori: 171,
                                       hgt_rangec: 497,
                                       hgt_stdcm: 126.42795364,
                                       hgt_variet: 231,
                                       majoritycm: 9423,
                                       maxcm_1st: 9540,
                                       mblr: "SF5957030",
                                       meancm_1st: 9417.09803922,
                                       median_1st: 94.27,
                                       mediancm_1: 9427,
                                       mincm_1st: 9217,
                                       minoritycm: 9217,
                                       p2010_name: "SanfranI_03997.flt",
                                       p2010_zmax: 313.7134,
                                       p2010_zmin: 287.0901,
                                       peak_1st_m: 95.4,
                                       rangecm_1s: 323,
                                       sf16_bldgi: "201006.0143146",
                                       stdcm_1st: 70.99855146,
                                       varietycm_: 199,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "front",
                                       color: "red"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42795419999999,
                                       37.726352007
                                       ],
                                       [
                                       -122.42793615900003,
                                       37.72637582200002
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 95488,
                                       area_id: 95488,
                                       cells50cm_: 484,
                                       globalid: "{B13C1234-BA60-4213-A9C1-6F079CDC9EF9}",
                                       gnd1st_del: 9.7,
                                       gnd_cells5: 484,
                                       gnd_majori: 9765,
                                       gnd_maxcm: 9799,
                                       gnd_meancm: 9611.32438017,
                                       gnd_median: 9617,
                                       gnd_min_m: 93.62,
                                       gnd_mincm: 9362,
                                       gnd_minori: 9362,
                                       gnd_rangec: 437,
                                       gnd_stdcm: 123.23120506,
                                       gnd_variet: 337,
                                       hgt_cells5: 484,
                                       hgt_majori: 600,
                                       hgt_maxcm: 876,
                                       hgt_meancm: 679.44214876,
                                       hgt_median: 6.8,
                                       hgt_medi_1: 680,
                                       hgt_mincm: 324,
                                       hgt_minori: 324,
                                       hgt_rangec: 552,
                                       hgt_stdcm: 104.57852619,
                                       hgt_variet: 267,
                                       majoritycm: 10329,
                                       maxcm_1st: 10371,
                                       mblr: "SF5957014",
                                       meancm_1st: 10290.7892562,
                                       median_1st: 103.32,
                                       mediancm_1: 10332,
                                       mincm_1st: 9693,
                                       minoritycm: 9693,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 103.71,
                                       rangecm_1s: 678,
                                       sf16_bldgi: "201006.0095488",
                                       stdcm_1st: 110.53102949,
                                       varietycm_: 151,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42740020399998,
                                       37.72611940799999
                                       ],
                                       [
                                       -122.42743137500003,
                                       37.72613471300002
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 95488,
                                       area_id: 95488,
                                       cells50cm_: 484,
                                       globalid: "{B13C1234-BA60-4213-A9C1-6F079CDC9EF9}",
                                       gnd1st_del: 9.7,
                                       gnd_cells5: 484,
                                       gnd_majori: 9765,
                                       gnd_maxcm: 9799,
                                       gnd_meancm: 9611.32438017,
                                       gnd_median: 9617,
                                       gnd_min_m: 93.62,
                                       gnd_mincm: 9362,
                                       gnd_minori: 9362,
                                       gnd_rangec: 437,
                                       gnd_stdcm: 123.23120506,
                                       gnd_variet: 337,
                                       hgt_cells5: 484,
                                       hgt_majori: 600,
                                       hgt_maxcm: 876,
                                       hgt_meancm: 679.44214876,
                                       hgt_median: 6.8,
                                       hgt_medi_1: 680,
                                       hgt_mincm: 324,
                                       hgt_minori: 324,
                                       hgt_rangec: 552,
                                       hgt_stdcm: 104.57852619,
                                       hgt_variet: 267,
                                       majoritycm: 10329,
                                       maxcm_1st: 10371,
                                       mblr: "SF5957014",
                                       meancm_1st: 10290.7892562,
                                       median_1st: 103.32,
                                       mediancm_1: 10332,
                                       mincm_1st: 9693,
                                       minoritycm: 9693,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 103.71,
                                       rangecm_1s: 678,
                                       sf16_bldgi: "201006.0095488",
                                       stdcm_1st: 110.53102949,
                                       varietycm_: 151,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42751262399997,
                                       37.72621190199999
                                       ],
                                       [
                                       -122.42755033200001,
                                       37.72622929
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 95488,
                                       area_id: 95488,
                                       cells50cm_: 484,
                                       globalid: "{B13C1234-BA60-4213-A9C1-6F079CDC9EF9}",
                                       gnd1st_del: 9.7,
                                       gnd_cells5: 484,
                                       gnd_majori: 9765,
                                       gnd_maxcm: 9799,
                                       gnd_meancm: 9611.32438017,
                                       gnd_median: 9617,
                                       gnd_min_m: 93.62,
                                       gnd_mincm: 9362,
                                       gnd_minori: 9362,
                                       gnd_rangec: 437,
                                       gnd_stdcm: 123.23120506,
                                       gnd_variet: 337,
                                       hgt_cells5: 484,
                                       hgt_majori: 600,
                                       hgt_maxcm: 876,
                                       hgt_meancm: 679.44214876,
                                       hgt_median: 6.8,
                                       hgt_medi_1: 680,
                                       hgt_mincm: 324,
                                       hgt_minori: 324,
                                       hgt_rangec: 552,
                                       hgt_stdcm: 104.57852619,
                                       hgt_variet: 267,
                                       majoritycm: 10329,
                                       maxcm_1st: 10371,
                                       mblr: "SF5957014",
                                       meancm_1st: 10290.7892562,
                                       median_1st: 103.32,
                                       mediancm_1: 10332,
                                       mincm_1st: 9693,
                                       minoritycm: 9693,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 103.71,
                                       rangecm_1s: 678,
                                       sf16_bldgi: "201006.0095488",
                                       stdcm_1st: 110.53102949,
                                       varietycm_: 151,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42752773900003,
                                       37.726260223
                                       ],
                                       [
                                       -122.42748933000001,
                                       37.726242501
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 98575,
                                       area_id: 98575,
                                       cells50cm_: 476,
                                       globalid: "{B99ADFC4-039E-4249-9C69-B57825E10DE3}",
                                       gnd1st_del: 9.72,
                                       gnd_cells5: 476,
                                       gnd_majori: 9547,
                                       gnd_maxcm: 9827,
                                       gnd_meancm: 9639.37605042,
                                       gnd_median: 9643,
                                       gnd_min_m: 93.95,
                                       gnd_mincm: 9395,
                                       gnd_minori: 9395,
                                       gnd_rangec: 432,
                                       gnd_stdcm: 119.57322294,
                                       gnd_variet: 305,
                                       hgt_cells5: 476,
                                       hgt_majori: 589,
                                       hgt_maxcm: 870,
                                       hgt_meancm: 669.31092437,
                                       hgt_median: 6.87,
                                       hgt_medi_1: 687,
                                       hgt_mincm: 261,
                                       hgt_minori: 261,
                                       hgt_rangec: 609,
                                       hgt_stdcm: 136.07255219,
                                       hgt_variet: 299,
                                       majoritycm: 10371,
                                       maxcm_1st: 10429,
                                       mblr: "SF5957015",
                                       meancm_1st: 10308.68067227,
                                       median_1st: 103.67,
                                       mediancm_1: 10367,
                                       mincm_1st: 9668,
                                       minoritycm: 9668,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 104.29,
                                       rangecm_1s: 761,
                                       sf16_bldgi: "201006.0098575",
                                       stdcm_1st: 161.15135548,
                                       varietycm_: 153,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42753388099999,
                                       37.72618396500002
                                       ],
                                       [
                                       -122.42743137500003,
                                       37.72613471300002
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 98575,
                                       area_id: 98575,
                                       cells50cm_: 476,
                                       globalid: "{B99ADFC4-039E-4249-9C69-B57825E10DE3}",
                                       gnd1st_del: 9.72,
                                       gnd_cells5: 476,
                                       gnd_majori: 9547,
                                       gnd_maxcm: 9827,
                                       gnd_meancm: 9639.37605042,
                                       gnd_median: 9643,
                                       gnd_min_m: 93.95,
                                       gnd_mincm: 9395,
                                       gnd_minori: 9395,
                                       gnd_rangec: 432,
                                       gnd_stdcm: 119.57322294,
                                       gnd_variet: 305,
                                       hgt_cells5: 476,
                                       hgt_majori: 589,
                                       hgt_maxcm: 870,
                                       hgt_meancm: 669.31092437,
                                       hgt_median: 6.87,
                                       hgt_medi_1: 687,
                                       hgt_mincm: 261,
                                       hgt_minori: 261,
                                       hgt_rangec: 609,
                                       hgt_stdcm: 136.07255219,
                                       hgt_variet: 299,
                                       majoritycm: 10371,
                                       maxcm_1st: 10429,
                                       mblr: "SF5957015",
                                       meancm_1st: 10308.68067227,
                                       median_1st: 103.67,
                                       mediancm_1: 10367,
                                       mincm_1st: 9668,
                                       minoritycm: 9668,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 104.29,
                                       rangecm_1s: 761,
                                       sf16_bldgi: "201006.0098575",
                                       stdcm_1st: 161.15135548,
                                       varietycm_: 153,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42744311099999,
                                       37.726060674999985
                                       ],
                                       [
                                       -122.427475593,
                                       37.726076627
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 98575,
                                       area_id: 98575,
                                       cells50cm_: 476,
                                       globalid: "{B99ADFC4-039E-4249-9C69-B57825E10DE3}",
                                       gnd1st_del: 9.72,
                                       gnd_cells5: 476,
                                       gnd_majori: 9547,
                                       gnd_maxcm: 9827,
                                       gnd_meancm: 9639.37605042,
                                       gnd_median: 9643,
                                       gnd_min_m: 93.95,
                                       gnd_mincm: 9395,
                                       gnd_minori: 9395,
                                       gnd_rangec: 432,
                                       gnd_stdcm: 119.57322294,
                                       gnd_variet: 305,
                                       hgt_cells5: 476,
                                       hgt_majori: 589,
                                       hgt_maxcm: 870,
                                       hgt_meancm: 669.31092437,
                                       hgt_median: 6.87,
                                       hgt_medi_1: 687,
                                       hgt_mincm: 261,
                                       hgt_minori: 261,
                                       hgt_rangec: 609,
                                       hgt_stdcm: 136.07255219,
                                       hgt_variet: 299,
                                       majoritycm: 10371,
                                       maxcm_1st: 10429,
                                       mblr: "SF5957015",
                                       meancm_1st: 10308.68067227,
                                       median_1st: 103.67,
                                       mediancm_1: 10367,
                                       mincm_1st: 9668,
                                       minoritycm: 9668,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 104.29,
                                       rangecm_1s: 761,
                                       sf16_bldgi: "201006.0098575",
                                       stdcm_1st: 161.15135548,
                                       varietycm_: 153,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.427475593,
                                       37.726076627
                                       ],
                                       [
                                       -122.42747673999997,
                                       37.726075122
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 98575,
                                       area_id: 98575,
                                       cells50cm_: 476,
                                       globalid: "{B99ADFC4-039E-4249-9C69-B57825E10DE3}",
                                       gnd1st_del: 9.72,
                                       gnd_cells5: 476,
                                       gnd_majori: 9547,
                                       gnd_maxcm: 9827,
                                       gnd_meancm: 9639.37605042,
                                       gnd_median: 9643,
                                       gnd_min_m: 93.95,
                                       gnd_mincm: 9395,
                                       gnd_minori: 9395,
                                       gnd_rangec: 432,
                                       gnd_stdcm: 119.57322294,
                                       gnd_variet: 305,
                                       hgt_cells5: 476,
                                       hgt_majori: 589,
                                       hgt_maxcm: 870,
                                       hgt_meancm: 669.31092437,
                                       hgt_median: 6.87,
                                       hgt_medi_1: 687,
                                       hgt_mincm: 261,
                                       hgt_minori: 261,
                                       hgt_rangec: 609,
                                       hgt_stdcm: 136.07255219,
                                       hgt_variet: 299,
                                       majoritycm: 10371,
                                       maxcm_1st: 10429,
                                       mblr: "SF5957015",
                                       meancm_1st: 10308.68067227,
                                       median_1st: 103.67,
                                       mediancm_1: 10367,
                                       mincm_1st: 9668,
                                       minoritycm: 9668,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 104.29,
                                       rangecm_1s: 761,
                                       sf16_bldgi: "201006.0098575",
                                       stdcm_1st: 161.15135548,
                                       varietycm_: 153,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42757902699996,
                                       37.72612333699999
                                       ],
                                       [
                                       -122.427579723,
                                       37.72612367099998
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 98575,
                                       area_id: 98575,
                                       cells50cm_: 476,
                                       globalid: "{B99ADFC4-039E-4249-9C69-B57825E10DE3}",
                                       gnd1st_del: 9.72,
                                       gnd_cells5: 476,
                                       gnd_majori: 9547,
                                       gnd_maxcm: 9827,
                                       gnd_meancm: 9639.37605042,
                                       gnd_median: 9643,
                                       gnd_min_m: 93.95,
                                       gnd_mincm: 9395,
                                       gnd_minori: 9395,
                                       gnd_rangec: 432,
                                       gnd_stdcm: 119.57322294,
                                       gnd_variet: 305,
                                       hgt_cells5: 476,
                                       hgt_majori: 589,
                                       hgt_maxcm: 870,
                                       hgt_meancm: 669.31092437,
                                       hgt_median: 6.87,
                                       hgt_medi_1: 687,
                                       hgt_mincm: 261,
                                       hgt_minori: 261,
                                       hgt_rangec: 609,
                                       hgt_stdcm: 136.07255219,
                                       hgt_variet: 299,
                                       majoritycm: 10371,
                                       maxcm_1st: 10429,
                                       mblr: "SF5957015",
                                       meancm_1st: 10308.68067227,
                                       median_1st: 103.67,
                                       mediancm_1: 10367,
                                       mincm_1st: 9668,
                                       minoritycm: 9668,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 104.29,
                                       rangecm_1s: 761,
                                       sf16_bldgi: "201006.0098575",
                                       stdcm_1st: 161.15135548,
                                       varietycm_: 153,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.427556386,
                                       37.72615439399999
                                       ],
                                       [
                                       -122.42758653300001,
                                       37.726168407
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 98575,
                                       area_id: 98575,
                                       cells50cm_: 476,
                                       globalid: "{B99ADFC4-039E-4249-9C69-B57825E10DE3}",
                                       gnd1st_del: 9.72,
                                       gnd_cells5: 476,
                                       gnd_majori: 9547,
                                       gnd_maxcm: 9827,
                                       gnd_meancm: 9639.37605042,
                                       gnd_median: 9643,
                                       gnd_min_m: 93.95,
                                       gnd_mincm: 9395,
                                       gnd_minori: 9395,
                                       gnd_rangec: 432,
                                       gnd_stdcm: 119.57322294,
                                       gnd_variet: 305,
                                       hgt_cells5: 476,
                                       hgt_majori: 589,
                                       hgt_maxcm: 870,
                                       hgt_meancm: 669.31092437,
                                       hgt_median: 6.87,
                                       hgt_medi_1: 687,
                                       hgt_mincm: 261,
                                       hgt_minori: 261,
                                       hgt_rangec: 609,
                                       hgt_stdcm: 136.07255219,
                                       hgt_variet: 299,
                                       majoritycm: 10371,
                                       maxcm_1st: 10429,
                                       mblr: "SF5957015",
                                       meancm_1st: 10308.68067227,
                                       median_1st: 103.67,
                                       mediancm_1: 10367,
                                       mincm_1st: 9668,
                                       minoritycm: 9668,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 104.29,
                                       rangecm_1s: 761,
                                       sf16_bldgi: "201006.0098575",
                                       stdcm_1st: 161.15135548,
                                       varietycm_: 153,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.427564534,
                                       37.726198216
                                       ],
                                       [
                                       -122.42753388099999,
                                       37.72618396500002
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 121352,
                                       area_id: 121352,
                                       cells50cm_: 424,
                                       globalid: "{9A97EDA7-6BB2-44B2-A454-8E68597D361F}",
                                       gnd1st_del: 8.7,
                                       gnd_cells5: 424,
                                       gnd_majori: 9754,
                                       gnd_maxcm: 9757,
                                       gnd_meancm: 9619.09669811,
                                       gnd_median: 9626,
                                       gnd_min_m: 94.35,
                                       gnd_mincm: 9435,
                                       gnd_minori: 9435,
                                       gnd_rangec: 322,
                                       gnd_stdcm: 101.03372587,
                                       gnd_variet: 241,
                                       hgt_cells5: 424,
                                       hgt_majori: 576,
                                       hgt_maxcm: 882,
                                       hgt_meancm: 680.26415094,
                                       hgt_median: 6.81,
                                       hgt_medi_1: 681,
                                       hgt_mincm: 336,
                                       hgt_minori: 336,
                                       hgt_rangec: 546,
                                       hgt_stdcm: 105.57696843,
                                       hgt_variet: 259,
                                       majoritycm: 10302,
                                       maxcm_1st: 10348,
                                       mblr: "SF5957013",
                                       meancm_1st: 10299.37971698,
                                       median_1st: 103.05,
                                       mediancm_1: 10305,
                                       mincm_1st: 10052,
                                       minoritycm: 10052,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 103.48,
                                       rangecm_1s: 296,
                                       sf16_bldgi: "201006.0121352",
                                       stdcm_1st: 41.03213954,
                                       varietycm_: 104,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42738676800003,
                                       37.726193298
                                       ],
                                       [
                                       -122.42748933000001,
                                       37.726242501
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 121352,
                                       area_id: 121352,
                                       cells50cm_: 424,
                                       globalid: "{9A97EDA7-6BB2-44B2-A454-8E68597D361F}",
                                       gnd1st_del: 8.7,
                                       gnd_cells5: 424,
                                       gnd_majori: 9754,
                                       gnd_maxcm: 9757,
                                       gnd_meancm: 9619.09669811,
                                       gnd_median: 9626,
                                       gnd_min_m: 94.35,
                                       gnd_mincm: 9435,
                                       gnd_minori: 9435,
                                       gnd_rangec: 322,
                                       gnd_stdcm: 101.03372587,
                                       gnd_variet: 241,
                                       hgt_cells5: 424,
                                       hgt_majori: 576,
                                       hgt_maxcm: 882,
                                       hgt_meancm: 680.26415094,
                                       hgt_median: 6.81,
                                       hgt_medi_1: 681,
                                       hgt_mincm: 336,
                                       hgt_minori: 336,
                                       hgt_rangec: 546,
                                       hgt_stdcm: 105.57696843,
                                       hgt_variet: 259,
                                       majoritycm: 10302,
                                       maxcm_1st: 10348,
                                       mblr: "SF5957013",
                                       meancm_1st: 10299.37971698,
                                       median_1st: 103.05,
                                       mediancm_1: 10305,
                                       mincm_1st: 10052,
                                       minoritycm: 10052,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 103.48,
                                       rangecm_1s: 296,
                                       sf16_bldgi: "201006.0121352",
                                       stdcm_1st: 41.03213954,
                                       varietycm_: 104,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42744484699999,
                                       37.72630084799999
                                       ],
                                       [
                                       -122.42734228900002,
                                       37.72625163700002
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 121352,
                                       area_id: 121352,
                                       cells50cm_: 424,
                                       globalid: "{9A97EDA7-6BB2-44B2-A454-8E68597D361F}",
                                       gnd1st_del: 8.7,
                                       gnd_cells5: 424,
                                       gnd_majori: 9754,
                                       gnd_maxcm: 9757,
                                       gnd_meancm: 9619.09669811,
                                       gnd_median: 9626,
                                       gnd_min_m: 94.35,
                                       gnd_mincm: 9435,
                                       gnd_minori: 9435,
                                       gnd_rangec: 322,
                                       gnd_stdcm: 101.03372587,
                                       gnd_variet: 241,
                                       hgt_cells5: 424,
                                       hgt_majori: 576,
                                       hgt_maxcm: 882,
                                       hgt_meancm: 680.26415094,
                                       hgt_median: 6.81,
                                       hgt_medi_1: 681,
                                       hgt_mincm: 336,
                                       hgt_minori: 336,
                                       hgt_rangec: 546,
                                       hgt_stdcm: 105.57696843,
                                       hgt_variet: 259,
                                       majoritycm: 10302,
                                       maxcm_1st: 10348,
                                       mblr: "SF5957013",
                                       meancm_1st: 10299.37971698,
                                       median_1st: 103.05,
                                       mediancm_1: 10305,
                                       mincm_1st: 10052,
                                       minoritycm: 10052,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 103.48,
                                       rangecm_1s: 296,
                                       sf16_bldgi: "201006.0121352",
                                       stdcm_1st: 41.03213954,
                                       varietycm_: 104,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42735315099998,
                                       37.726176791
                                       ],
                                       [
                                       -122.42738676800003,
                                       37.726193298
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 122108,
                                       area_id: 122108,
                                       cells50cm_: 420,
                                       globalid: "{6D495089-D114-4DB7-8338-C70639D55FFA}",
                                       gnd1st_del: 9.15,
                                       gnd_cells5: 420,
                                       gnd_majori: 9554,
                                       gnd_maxcm: 9863,
                                       gnd_meancm: 9685.18333333,
                                       gnd_median: 9687,
                                       gnd_min_m: 94.84,
                                       gnd_mincm: 9484,
                                       gnd_minori: 9484,
                                       gnd_rangec: 379,
                                       gnd_stdcm: 108.20189334,
                                       gnd_variet: 274,
                                       hgt_cells5: 420,
                                       hgt_majori: 691,
                                       hgt_maxcm: 880,
                                       hgt_meancm: 704.88571429,
                                       hgt_median: 7.14,
                                       hgt_medi_1: 714,
                                       hgt_mincm: 347,
                                       hgt_minori: 347,
                                       hgt_rangec: 533,
                                       hgt_stdcm: 112.83846982,
                                       hgt_variet: 276,
                                       majoritycm: 10408,
                                       maxcm_1st: 10433,
                                       mblr: "SF5957016",
                                       meancm_1st: 10390.08095238,
                                       median_1st: 103.99,
                                       mediancm_1: 10399,
                                       mincm_1st: 10193,
                                       minoritycm: 10193,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 104.33,
                                       rangecm_1s: 240,
                                       sf16_bldgi: "201006.0122108",
                                       stdcm_1st: 37.67452239,
                                       varietycm_: 92,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42757902699996,
                                       37.72612333699999
                                       ],
                                       [
                                       -122.42747673999997,
                                       37.726075122
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 139731,
                                       area_id: 139731,
                                       cells50cm_: 367,
                                       globalid: "{15A43D02-BAE8-43E5-9013-833DA708F6C7}",
                                       gnd1st_del: 6.64,
                                       gnd_cells5: 367,
                                       gnd_majori: 8968,
                                       gnd_maxcm: 9016,
                                       gnd_meancm: 8901.28065395,
                                       gnd_median: 8905,
                                       gnd_min_m: 87.51,
                                       gnd_mincm: 8751,
                                       gnd_minori: 8752,
                                       gnd_rangec: 265,
                                       gnd_stdcm: 64.12071578,
                                       gnd_variet: 201,
                                       hgt_cells5: 367,
                                       hgt_majori: 549,
                                       hgt_maxcm: 660,
                                       hgt_meancm: 510.98092643,
                                       hgt_median: 5.29,
                                       hgt_medi_1: 529,
                                       hgt_mincm: 142,
                                       hgt_minori: 142,
                                       hgt_rangec: 518,
                                       hgt_stdcm: 104.59217369,
                                       hgt_variet: 224,
                                       majoritycm: 9415,
                                       maxcm_1st: 9601,
                                       mblr: "SF5957031",
                                       meancm_1st: 9412.25340599,
                                       median_1st: 94.15,
                                       mediancm_1: 9415,
                                       mincm_1st: 9146,
                                       minoritycm: 9146,
                                       p2010_name: "SanfranI_03996.flt",
                                       p2010_zmax: 313.4982,
                                       p2010_zmin: 287.8995,
                                       peak_1st_m: 96.01,
                                       rangecm_1s: 455,
                                       sf16_bldgi: "201006.0139731",
                                       stdcm_1st: 75.93722191,
                                       varietycm_: 204,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42789087900002,
                                       37.726433644999986
                                       ],
                                       [
                                       -122.427808529,
                                       37.72639428000002
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 139731,
                                       area_id: 139731,
                                       cells50cm_: 367,
                                       globalid: "{15A43D02-BAE8-43E5-9013-833DA708F6C7}",
                                       gnd1st_del: 6.64,
                                       gnd_cells5: 367,
                                       gnd_majori: 8968,
                                       gnd_maxcm: 9016,
                                       gnd_meancm: 8901.28065395,
                                       gnd_median: 8905,
                                       gnd_min_m: 87.51,
                                       gnd_mincm: 8751,
                                       gnd_minori: 8752,
                                       gnd_rangec: 265,
                                       gnd_stdcm: 64.12071578,
                                       gnd_variet: 201,
                                       hgt_cells5: 367,
                                       hgt_majori: 549,
                                       hgt_maxcm: 660,
                                       hgt_meancm: 510.98092643,
                                       hgt_median: 5.29,
                                       hgt_medi_1: 529,
                                       hgt_mincm: 142,
                                       hgt_minori: 142,
                                       hgt_rangec: 518,
                                       hgt_stdcm: 104.59217369,
                                       hgt_variet: 224,
                                       majoritycm: 9415,
                                       maxcm_1st: 9601,
                                       mblr: "SF5957031",
                                       meancm_1st: 9412.25340599,
                                       median_1st: 94.15,
                                       mediancm_1: 9415,
                                       mincm_1st: 9146,
                                       minoritycm: 9146,
                                       p2010_name: "SanfranI_03996.flt",
                                       p2010_zmax: 313.4982,
                                       p2010_zmin: 287.8995,
                                       peak_1st_m: 96.01,
                                       rangecm_1s: 455,
                                       sf16_bldgi: "201006.0139731",
                                       stdcm_1st: 75.93722191,
                                       varietycm_: 204,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.427808529,
                                       37.72639428000002
                                       ],
                                       [
                                       -122.42780855,
                                       37.726394242000026
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 139731,
                                       area_id: 139731,
                                       cells50cm_: 367,
                                       globalid: "{15A43D02-BAE8-43E5-9013-833DA708F6C7}",
                                       gnd1st_del: 6.64,
                                       gnd_cells5: 367,
                                       gnd_majori: 8968,
                                       gnd_maxcm: 9016,
                                       gnd_meancm: 8901.28065395,
                                       gnd_median: 8905,
                                       gnd_min_m: 87.51,
                                       gnd_mincm: 8751,
                                       gnd_minori: 8752,
                                       gnd_rangec: 265,
                                       gnd_stdcm: 64.12071578,
                                       gnd_variet: 201,
                                       hgt_cells5: 367,
                                       hgt_majori: 549,
                                       hgt_maxcm: 660,
                                       hgt_meancm: 510.98092643,
                                       hgt_median: 5.29,
                                       hgt_medi_1: 529,
                                       hgt_mincm: 142,
                                       hgt_minori: 142,
                                       hgt_rangec: 518,
                                       hgt_stdcm: 104.59217369,
                                       hgt_variet: 224,
                                       majoritycm: 9415,
                                       maxcm_1st: 9601,
                                       mblr: "SF5957031",
                                       meancm_1st: 9412.25340599,
                                       median_1st: 94.15,
                                       mediancm_1: 9415,
                                       mincm_1st: 9146,
                                       minoritycm: 9146,
                                       p2010_name: "SanfranI_03996.flt",
                                       p2010_zmax: 313.4982,
                                       p2010_zmin: 287.8995,
                                       peak_1st_m: 96.01,
                                       rangecm_1s: 455,
                                       sf16_bldgi: "201006.0139731",
                                       stdcm_1st: 75.93722191,
                                       varietycm_: 204,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42780855,
                                       37.726394242000026
                                       ],
                                       [
                                       -122.42780857000002,
                                       37.72639421500003
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 139731,
                                       area_id: 139731,
                                       cells50cm_: 367,
                                       globalid: "{15A43D02-BAE8-43E5-9013-833DA708F6C7}",
                                       gnd1st_del: 6.64,
                                       gnd_cells5: 367,
                                       gnd_majori: 8968,
                                       gnd_maxcm: 9016,
                                       gnd_meancm: 8901.28065395,
                                       gnd_median: 8905,
                                       gnd_min_m: 87.51,
                                       gnd_mincm: 8751,
                                       gnd_minori: 8752,
                                       gnd_rangec: 265,
                                       gnd_stdcm: 64.12071578,
                                       gnd_variet: 201,
                                       hgt_cells5: 367,
                                       hgt_majori: 549,
                                       hgt_maxcm: 660,
                                       hgt_meancm: 510.98092643,
                                       hgt_median: 5.29,
                                       hgt_medi_1: 529,
                                       hgt_mincm: 142,
                                       hgt_minori: 142,
                                       hgt_rangec: 518,
                                       hgt_stdcm: 104.59217369,
                                       hgt_variet: 224,
                                       majoritycm: 9415,
                                       maxcm_1st: 9601,
                                       mblr: "SF5957031",
                                       meancm_1st: 9412.25340599,
                                       median_1st: 94.15,
                                       mediancm_1: 9415,
                                       mincm_1st: 9146,
                                       minoritycm: 9146,
                                       p2010_name: "SanfranI_03996.flt",
                                       p2010_zmax: 313.4982,
                                       p2010_zmin: 287.8995,
                                       peak_1st_m: 96.01,
                                       rangecm_1s: 455,
                                       sf16_bldgi: "201006.0139731",
                                       stdcm_1st: 75.93722191,
                                       varietycm_: 204,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42780857000002,
                                       37.72639421500003
                                       ],
                                       [
                                       -122.42779106600001,
                                       37.726386092999974
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 139731,
                                       area_id: 139731,
                                       cells50cm_: 367,
                                       globalid: "{15A43D02-BAE8-43E5-9013-833DA708F6C7}",
                                       gnd1st_del: 6.64,
                                       gnd_cells5: 367,
                                       gnd_majori: 8968,
                                       gnd_maxcm: 9016,
                                       gnd_meancm: 8901.28065395,
                                       gnd_median: 8905,
                                       gnd_min_m: 87.51,
                                       gnd_mincm: 8751,
                                       gnd_minori: 8752,
                                       gnd_rangec: 265,
                                       gnd_stdcm: 64.12071578,
                                       gnd_variet: 201,
                                       hgt_cells5: 367,
                                       hgt_majori: 549,
                                       hgt_maxcm: 660,
                                       hgt_meancm: 510.98092643,
                                       hgt_median: 5.29,
                                       hgt_medi_1: 529,
                                       hgt_mincm: 142,
                                       hgt_minori: 142,
                                       hgt_rangec: 518,
                                       hgt_stdcm: 104.59217369,
                                       hgt_variet: 224,
                                       majoritycm: 9415,
                                       maxcm_1st: 9601,
                                       mblr: "SF5957031",
                                       meancm_1st: 9412.25340599,
                                       median_1st: 94.15,
                                       mediancm_1: 9415,
                                       mincm_1st: 9146,
                                       minoritycm: 9146,
                                       p2010_name: "SanfranI_03996.flt",
                                       p2010_zmax: 313.4982,
                                       p2010_zmin: 287.8995,
                                       peak_1st_m: 96.01,
                                       rangecm_1s: 455,
                                       sf16_bldgi: "201006.0139731",
                                       stdcm_1st: 75.93722191,
                                       varietycm_: 204,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42779106600001,
                                       37.726386092999974
                                       ],
                                       [
                                       -122.427791081,
                                       37.726386052
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 139731,
                                       area_id: 139731,
                                       cells50cm_: 367,
                                       globalid: "{15A43D02-BAE8-43E5-9013-833DA708F6C7}",
                                       gnd1st_del: 6.64,
                                       gnd_cells5: 367,
                                       gnd_majori: 8968,
                                       gnd_maxcm: 9016,
                                       gnd_meancm: 8901.28065395,
                                       gnd_median: 8905,
                                       gnd_min_m: 87.51,
                                       gnd_mincm: 8751,
                                       gnd_minori: 8752,
                                       gnd_rangec: 265,
                                       gnd_stdcm: 64.12071578,
                                       gnd_variet: 201,
                                       hgt_cells5: 367,
                                       hgt_majori: 549,
                                       hgt_maxcm: 660,
                                       hgt_meancm: 510.98092643,
                                       hgt_median: 5.29,
                                       hgt_medi_1: 529,
                                       hgt_mincm: 142,
                                       hgt_minori: 142,
                                       hgt_rangec: 518,
                                       hgt_stdcm: 104.59217369,
                                       hgt_variet: 224,
                                       majoritycm: 9415,
                                       maxcm_1st: 9601,
                                       mblr: "SF5957031",
                                       meancm_1st: 9412.25340599,
                                       median_1st: 94.15,
                                       mediancm_1: 9415,
                                       mincm_1st: 9146,
                                       minoritycm: 9146,
                                       p2010_name: "SanfranI_03996.flt",
                                       p2010_zmax: 313.4982,
                                       p2010_zmin: 287.8995,
                                       peak_1st_m: 96.01,
                                       rangecm_1s: 455,
                                       sf16_bldgi: "201006.0139731",
                                       stdcm_1st: 75.93722191,
                                       varietycm_: 204,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.427791081,
                                       37.726386052
                                       ],
                                       [
                                       -122.42779172899999,
                                       37.72638517199999
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 139731,
                                       area_id: 139731,
                                       cells50cm_: 367,
                                       globalid: "{15A43D02-BAE8-43E5-9013-833DA708F6C7}",
                                       gnd1st_del: 6.64,
                                       gnd_cells5: 367,
                                       gnd_majori: 8968,
                                       gnd_maxcm: 9016,
                                       gnd_meancm: 8901.28065395,
                                       gnd_median: 8905,
                                       gnd_min_m: 87.51,
                                       gnd_mincm: 8751,
                                       gnd_minori: 8752,
                                       gnd_rangec: 265,
                                       gnd_stdcm: 64.12071578,
                                       gnd_variet: 201,
                                       hgt_cells5: 367,
                                       hgt_majori: 549,
                                       hgt_maxcm: 660,
                                       hgt_meancm: 510.98092643,
                                       hgt_median: 5.29,
                                       hgt_medi_1: 529,
                                       hgt_mincm: 142,
                                       hgt_minori: 142,
                                       hgt_rangec: 518,
                                       hgt_stdcm: 104.59217369,
                                       hgt_variet: 224,
                                       majoritycm: 9415,
                                       maxcm_1st: 9601,
                                       mblr: "SF5957031",
                                       meancm_1st: 9412.25340599,
                                       median_1st: 94.15,
                                       mediancm_1: 9415,
                                       mincm_1st: 9146,
                                       minoritycm: 9146,
                                       p2010_name: "SanfranI_03996.flt",
                                       p2010_zmax: 313.4982,
                                       p2010_zmin: 287.8995,
                                       peak_1st_m: 96.01,
                                       rangecm_1s: 455,
                                       sf16_bldgi: "201006.0139731",
                                       stdcm_1st: 75.93722191,
                                       varietycm_: 204,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42779172899999,
                                       37.72638517199999
                                       ],
                                       [
                                       -122.42777588799997,
                                       37.726377818
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 139731,
                                       area_id: 139731,
                                       cells50cm_: 367,
                                       globalid: "{15A43D02-BAE8-43E5-9013-833DA708F6C7}",
                                       gnd1st_del: 6.64,
                                       gnd_cells5: 367,
                                       gnd_majori: 8968,
                                       gnd_maxcm: 9016,
                                       gnd_meancm: 8901.28065395,
                                       gnd_median: 8905,
                                       gnd_min_m: 87.51,
                                       gnd_mincm: 8751,
                                       gnd_minori: 8752,
                                       gnd_rangec: 265,
                                       gnd_stdcm: 64.12071578,
                                       gnd_variet: 201,
                                       hgt_cells5: 367,
                                       hgt_majori: 549,
                                       hgt_maxcm: 660,
                                       hgt_meancm: 510.98092643,
                                       hgt_median: 5.29,
                                       hgt_medi_1: 529,
                                       hgt_mincm: 142,
                                       hgt_minori: 142,
                                       hgt_rangec: 518,
                                       hgt_stdcm: 104.59217369,
                                       hgt_variet: 224,
                                       majoritycm: 9415,
                                       maxcm_1st: 9601,
                                       mblr: "SF5957031",
                                       meancm_1st: 9412.25340599,
                                       median_1st: 94.15,
                                       mediancm_1: 9415,
                                       mincm_1st: 9146,
                                       minoritycm: 9146,
                                       p2010_name: "SanfranI_03996.flt",
                                       p2010_zmax: 313.4982,
                                       p2010_zmin: 287.8995,
                                       peak_1st_m: 96.01,
                                       rangecm_1s: 455,
                                       sf16_bldgi: "201006.0139731",
                                       stdcm_1st: 75.93722191,
                                       varietycm_: 204,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42777588799997,
                                       37.726377818
                                       ],
                                       [
                                       -122.42777629199999,
                                       37.72637726300002
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 139731,
                                       area_id: 139731,
                                       cells50cm_: 367,
                                       globalid: "{15A43D02-BAE8-43E5-9013-833DA708F6C7}",
                                       gnd1st_del: 6.64,
                                       gnd_cells5: 367,
                                       gnd_majori: 8968,
                                       gnd_maxcm: 9016,
                                       gnd_meancm: 8901.28065395,
                                       gnd_median: 8905,
                                       gnd_min_m: 87.51,
                                       gnd_mincm: 8751,
                                       gnd_minori: 8752,
                                       gnd_rangec: 265,
                                       gnd_stdcm: 64.12071578,
                                       gnd_variet: 201,
                                       hgt_cells5: 367,
                                       hgt_majori: 549,
                                       hgt_maxcm: 660,
                                       hgt_meancm: 510.98092643,
                                       hgt_median: 5.29,
                                       hgt_medi_1: 529,
                                       hgt_mincm: 142,
                                       hgt_minori: 142,
                                       hgt_rangec: 518,
                                       hgt_stdcm: 104.59217369,
                                       hgt_variet: 224,
                                       majoritycm: 9415,
                                       maxcm_1st: 9601,
                                       mblr: "SF5957031",
                                       meancm_1st: 9412.25340599,
                                       median_1st: 94.15,
                                       mediancm_1: 9415,
                                       mincm_1st: 9146,
                                       minoritycm: 9146,
                                       p2010_name: "SanfranI_03996.flt",
                                       p2010_zmax: 313.4982,
                                       p2010_zmin: 287.8995,
                                       peak_1st_m: 96.01,
                                       rangecm_1s: 455,
                                       sf16_bldgi: "201006.0139731",
                                       stdcm_1st: 75.93722191,
                                       varietycm_: 204,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42777629199999,
                                       37.72637726300002
                                       ],
                                       [
                                       -122.427753226,
                                       37.726366428
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 139731,
                                       area_id: 139731,
                                       cells50cm_: 367,
                                       globalid: "{15A43D02-BAE8-43E5-9013-833DA708F6C7}",
                                       gnd1st_del: 6.64,
                                       gnd_cells5: 367,
                                       gnd_majori: 8968,
                                       gnd_maxcm: 9016,
                                       gnd_meancm: 8901.28065395,
                                       gnd_median: 8905,
                                       gnd_min_m: 87.51,
                                       gnd_mincm: 8751,
                                       gnd_minori: 8752,
                                       gnd_rangec: 265,
                                       gnd_stdcm: 64.12071578,
                                       gnd_variet: 201,
                                       hgt_cells5: 367,
                                       hgt_majori: 549,
                                       hgt_maxcm: 660,
                                       hgt_meancm: 510.98092643,
                                       hgt_median: 5.29,
                                       hgt_medi_1: 529,
                                       hgt_mincm: 142,
                                       hgt_minori: 142,
                                       hgt_rangec: 518,
                                       hgt_stdcm: 104.59217369,
                                       hgt_variet: 224,
                                       majoritycm: 9415,
                                       maxcm_1st: 9601,
                                       mblr: "SF5957031",
                                       meancm_1st: 9412.25340599,
                                       median_1st: 94.15,
                                       mediancm_1: 9415,
                                       mincm_1st: 9146,
                                       minoritycm: 9146,
                                       p2010_name: "SanfranI_03996.flt",
                                       p2010_zmax: 313.4982,
                                       p2010_zmin: 287.8995,
                                       peak_1st_m: 96.01,
                                       rangecm_1s: 455,
                                       sf16_bldgi: "201006.0139731",
                                       stdcm_1st: 75.93722191,
                                       varietycm_: 204,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.427781741,
                                       37.726333657
                                       ],
                                       [
                                       -122.427784451,
                                       37.72633496899999
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 139731,
                                       area_id: 139731,
                                       cells50cm_: 367,
                                       globalid: "{15A43D02-BAE8-43E5-9013-833DA708F6C7}",
                                       gnd1st_del: 6.64,
                                       gnd_cells5: 367,
                                       gnd_majori: 8968,
                                       gnd_maxcm: 9016,
                                       gnd_meancm: 8901.28065395,
                                       gnd_median: 8905,
                                       gnd_min_m: 87.51,
                                       gnd_mincm: 8751,
                                       gnd_minori: 8752,
                                       gnd_rangec: 265,
                                       gnd_stdcm: 64.12071578,
                                       gnd_variet: 201,
                                       hgt_cells5: 367,
                                       hgt_majori: 549,
                                       hgt_maxcm: 660,
                                       hgt_meancm: 510.98092643,
                                       hgt_median: 5.29,
                                       hgt_medi_1: 529,
                                       hgt_mincm: 142,
                                       hgt_minori: 142,
                                       hgt_rangec: 518,
                                       hgt_stdcm: 104.59217369,
                                       hgt_variet: 224,
                                       majoritycm: 9415,
                                       maxcm_1st: 9601,
                                       mblr: "SF5957031",
                                       meancm_1st: 9412.25340599,
                                       median_1st: 94.15,
                                       mediancm_1: 9415,
                                       mincm_1st: 9146,
                                       minoritycm: 9146,
                                       p2010_name: "SanfranI_03996.flt",
                                       p2010_zmax: 313.4982,
                                       p2010_zmin: 287.8995,
                                       peak_1st_m: 96.01,
                                       rangecm_1s: 455,
                                       sf16_bldgi: "201006.0139731",
                                       stdcm_1st: 75.93722191,
                                       varietycm_: 204,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.427784451,
                                       37.72633496899999
                                       ],
                                       [
                                       -122.427801349,
                                       37.72634314700002
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 139731,
                                       area_id: 139731,
                                       cells50cm_: 367,
                                       globalid: "{15A43D02-BAE8-43E5-9013-833DA708F6C7}",
                                       gnd1st_del: 6.64,
                                       gnd_cells5: 367,
                                       gnd_majori: 8968,
                                       gnd_maxcm: 9016,
                                       gnd_meancm: 8901.28065395,
                                       gnd_median: 8905,
                                       gnd_min_m: 87.51,
                                       gnd_mincm: 8751,
                                       gnd_minori: 8752,
                                       gnd_rangec: 265,
                                       gnd_stdcm: 64.12071578,
                                       gnd_variet: 201,
                                       hgt_cells5: 367,
                                       hgt_majori: 549,
                                       hgt_maxcm: 660,
                                       hgt_meancm: 510.98092643,
                                       hgt_median: 5.29,
                                       hgt_medi_1: 529,
                                       hgt_mincm: 142,
                                       hgt_minori: 142,
                                       hgt_rangec: 518,
                                       hgt_stdcm: 104.59217369,
                                       hgt_variet: 224,
                                       majoritycm: 9415,
                                       maxcm_1st: 9601,
                                       mblr: "SF5957031",
                                       meancm_1st: 9412.25340599,
                                       median_1st: 94.15,
                                       mediancm_1: 9415,
                                       mincm_1st: 9146,
                                       minoritycm: 9146,
                                       p2010_name: "SanfranI_03996.flt",
                                       p2010_zmax: 313.4982,
                                       p2010_zmin: 287.8995,
                                       peak_1st_m: 96.01,
                                       rangecm_1s: 455,
                                       sf16_bldgi: "201006.0139731",
                                       stdcm_1st: 75.93722191,
                                       varietycm_: 204,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.427801349,
                                       37.72634314700002
                                       ],
                                       [
                                       -122.42780293099999,
                                       37.726340993
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 139731,
                                       area_id: 139731,
                                       cells50cm_: 367,
                                       globalid: "{15A43D02-BAE8-43E5-9013-833DA708F6C7}",
                                       gnd1st_del: 6.64,
                                       gnd_cells5: 367,
                                       gnd_majori: 8968,
                                       gnd_maxcm: 9016,
                                       gnd_meancm: 8901.28065395,
                                       gnd_median: 8905,
                                       gnd_min_m: 87.51,
                                       gnd_mincm: 8751,
                                       gnd_minori: 8752,
                                       gnd_rangec: 265,
                                       gnd_stdcm: 64.12071578,
                                       gnd_variet: 201,
                                       hgt_cells5: 367,
                                       hgt_majori: 549,
                                       hgt_maxcm: 660,
                                       hgt_meancm: 510.98092643,
                                       hgt_median: 5.29,
                                       hgt_medi_1: 529,
                                       hgt_mincm: 142,
                                       hgt_minori: 142,
                                       hgt_rangec: 518,
                                       hgt_stdcm: 104.59217369,
                                       hgt_variet: 224,
                                       majoritycm: 9415,
                                       maxcm_1st: 9601,
                                       mblr: "SF5957031",
                                       meancm_1st: 9412.25340599,
                                       median_1st: 94.15,
                                       mediancm_1: 9415,
                                       mincm_1st: 9146,
                                       minoritycm: 9146,
                                       p2010_name: "SanfranI_03996.flt",
                                       p2010_zmax: 313.4982,
                                       p2010_zmin: 287.8995,
                                       peak_1st_m: 96.01,
                                       rangecm_1s: 455,
                                       sf16_bldgi: "201006.0139731",
                                       stdcm_1st: 75.93722191,
                                       varietycm_: 204,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42780293099999,
                                       37.726340993
                                       ],
                                       [
                                       -122.42783695000004,
                                       37.726356752000015
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 139731,
                                       area_id: 139731,
                                       cells50cm_: 367,
                                       globalid: "{15A43D02-BAE8-43E5-9013-833DA708F6C7}",
                                       gnd1st_del: 6.64,
                                       gnd_cells5: 367,
                                       gnd_majori: 8968,
                                       gnd_maxcm: 9016,
                                       gnd_meancm: 8901.28065395,
                                       gnd_median: 8905,
                                       gnd_min_m: 87.51,
                                       gnd_mincm: 8751,
                                       gnd_minori: 8752,
                                       gnd_rangec: 265,
                                       gnd_stdcm: 64.12071578,
                                       gnd_variet: 201,
                                       hgt_cells5: 367,
                                       hgt_majori: 549,
                                       hgt_maxcm: 660,
                                       hgt_meancm: 510.98092643,
                                       hgt_median: 5.29,
                                       hgt_medi_1: 529,
                                       hgt_mincm: 142,
                                       hgt_minori: 142,
                                       hgt_rangec: 518,
                                       hgt_stdcm: 104.59217369,
                                       hgt_variet: 224,
                                       majoritycm: 9415,
                                       maxcm_1st: 9601,
                                       mblr: "SF5957031",
                                       meancm_1st: 9412.25340599,
                                       median_1st: 94.15,
                                       mediancm_1: 9415,
                                       mincm_1st: 9146,
                                       minoritycm: 9146,
                                       p2010_name: "SanfranI_03996.flt",
                                       p2010_zmax: 313.4982,
                                       p2010_zmin: 287.8995,
                                       peak_1st_m: 96.01,
                                       rangecm_1s: 455,
                                       sf16_bldgi: "201006.0139731",
                                       stdcm_1st: 75.93722191,
                                       varietycm_: 204,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42784931300002,
                                       37.72634041700002
                                       ],
                                       [
                                       -122.42793166199999,
                                       37.72637977300002
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 139731,
                                       area_id: 139731,
                                       cells50cm_: 367,
                                       globalid: "{15A43D02-BAE8-43E5-9013-833DA708F6C7}",
                                       gnd1st_del: 6.64,
                                       gnd_cells5: 367,
                                       gnd_majori: 8968,
                                       gnd_maxcm: 9016,
                                       gnd_meancm: 8901.28065395,
                                       gnd_median: 8905,
                                       gnd_min_m: 87.51,
                                       gnd_mincm: 8751,
                                       gnd_minori: 8752,
                                       gnd_rangec: 265,
                                       gnd_stdcm: 64.12071578,
                                       gnd_variet: 201,
                                       hgt_cells5: 367,
                                       hgt_majori: 549,
                                       hgt_maxcm: 660,
                                       hgt_meancm: 510.98092643,
                                       hgt_median: 5.29,
                                       hgt_medi_1: 529,
                                       hgt_mincm: 142,
                                       hgt_minori: 142,
                                       hgt_rangec: 518,
                                       hgt_stdcm: 104.59217369,
                                       hgt_variet: 224,
                                       majoritycm: 9415,
                                       maxcm_1st: 9601,
                                       mblr: "SF5957031",
                                       meancm_1st: 9412.25340599,
                                       median_1st: 94.15,
                                       mediancm_1: 9415,
                                       mincm_1st: 9146,
                                       minoritycm: 9146,
                                       p2010_name: "SanfranI_03996.flt",
                                       p2010_zmax: 313.4982,
                                       p2010_zmin: 287.8995,
                                       peak_1st_m: 96.01,
                                       rangecm_1s: 455,
                                       sf16_bldgi: "201006.0139731",
                                       stdcm_1st: 75.93722191,
                                       varietycm_: 204,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42793166199999,
                                       37.72637977300002
                                       ],
                                       [
                                       -122.42793164,
                                       37.726379829
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 139731,
                                       area_id: 139731,
                                       cells50cm_: 367,
                                       globalid: "{15A43D02-BAE8-43E5-9013-833DA708F6C7}",
                                       gnd1st_del: 6.64,
                                       gnd_cells5: 367,
                                       gnd_majori: 8968,
                                       gnd_maxcm: 9016,
                                       gnd_meancm: 8901.28065395,
                                       gnd_median: 8905,
                                       gnd_min_m: 87.51,
                                       gnd_mincm: 8751,
                                       gnd_minori: 8752,
                                       gnd_rangec: 265,
                                       gnd_stdcm: 64.12071578,
                                       gnd_variet: 201,
                                       hgt_cells5: 367,
                                       hgt_majori: 549,
                                       hgt_maxcm: 660,
                                       hgt_meancm: 510.98092643,
                                       hgt_median: 5.29,
                                       hgt_medi_1: 529,
                                       hgt_mincm: 142,
                                       hgt_minori: 142,
                                       hgt_rangec: 518,
                                       hgt_stdcm: 104.59217369,
                                       hgt_variet: 224,
                                       majoritycm: 9415,
                                       maxcm_1st: 9601,
                                       mblr: "SF5957031",
                                       meancm_1st: 9412.25340599,
                                       median_1st: 94.15,
                                       mediancm_1: 9415,
                                       mincm_1st: 9146,
                                       minoritycm: 9146,
                                       p2010_name: "SanfranI_03996.flt",
                                       p2010_zmax: 313.4982,
                                       p2010_zmin: 287.8995,
                                       peak_1st_m: 96.01,
                                       rangecm_1s: 455,
                                       sf16_bldgi: "201006.0139731",
                                       stdcm_1st: 75.93722191,
                                       varietycm_: 204,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42793164,
                                       37.726379829
                                       ],
                                       [
                                       -122.42793151299999,
                                       37.72637999699998
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 139731,
                                       area_id: 139731,
                                       cells50cm_: 367,
                                       globalid: "{15A43D02-BAE8-43E5-9013-833DA708F6C7}",
                                       gnd1st_del: 6.64,
                                       gnd_cells5: 367,
                                       gnd_majori: 8968,
                                       gnd_maxcm: 9016,
                                       gnd_meancm: 8901.28065395,
                                       gnd_median: 8905,
                                       gnd_min_m: 87.51,
                                       gnd_mincm: 8751,
                                       gnd_minori: 8752,
                                       gnd_rangec: 265,
                                       gnd_stdcm: 64.12071578,
                                       gnd_variet: 201,
                                       hgt_cells5: 367,
                                       hgt_majori: 549,
                                       hgt_maxcm: 660,
                                       hgt_meancm: 510.98092643,
                                       hgt_median: 5.29,
                                       hgt_medi_1: 529,
                                       hgt_mincm: 142,
                                       hgt_minori: 142,
                                       hgt_rangec: 518,
                                       hgt_stdcm: 104.59217369,
                                       hgt_variet: 224,
                                       majoritycm: 9415,
                                       maxcm_1st: 9601,
                                       mblr: "SF5957031",
                                       meancm_1st: 9412.25340599,
                                       median_1st: 94.15,
                                       mediancm_1: 9415,
                                       mincm_1st: 9146,
                                       minoritycm: 9146,
                                       p2010_name: "SanfranI_03996.flt",
                                       p2010_zmax: 313.4982,
                                       p2010_zmin: 287.8995,
                                       peak_1st_m: 96.01,
                                       rangecm_1s: 455,
                                       sf16_bldgi: "201006.0139731",
                                       stdcm_1st: 75.93722191,
                                       varietycm_: 204,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42793151299999,
                                       37.72637999699998
                                       ],
                                       [
                                       -122.42794931299998,
                                       37.72638845099999
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 142744,
                                       area_id: 142744,
                                       cells50cm_: 360,
                                       globalid: "{9D71A0CA-0825-4851-941B-A9C4DE7B3058}",
                                       gnd1st_del: 6.33,
                                       gnd_cells5: 360,
                                       gnd_majori: 8953,
                                       gnd_maxcm: 8957,
                                       gnd_meancm: 8890.50277778,
                                       gnd_median: 8931,
                                       gnd_min_m: 86.24,
                                       gnd_mincm: 8624,
                                       gnd_minori: 8624,
                                       gnd_rangec: 333,
                                       gnd_stdcm: 83.01927482,
                                       gnd_variet: 145,
                                       hgt_cells5: 360,
                                       hgt_majori: 311,
                                       hgt_maxcm: 592,
                                       hgt_meancm: 351.38333333,
                                       hgt_median: 3.31,
                                       hgt_medi_1: 331,
                                       hgt_mincm: 199,
                                       hgt_minori: 199,
                                       hgt_rangec: 393,
                                       hgt_stdcm: 91.16327081,
                                       hgt_variet: 202,
                                       majoritycm: 9259,
                                       maxcm_1st: 9331,
                                       mblr: "SF5957032",
                                       meancm_1st: 9241.89444444,
                                       median_1st: 92.57,
                                       mediancm_1: 9257,
                                       mincm_1st: 9121,
                                       minoritycm: 9121,
                                       p2010_name: "SanfranI_03991.flt",
                                       p2010_zmax: 322.5828,
                                       p2010_zmin: 274.2325,
                                       peak_1st_m: 93.31,
                                       rangecm_1s: 210,
                                       sf16_bldgi: "201006.0142744",
                                       stdcm_1st: 35.29250742,
                                       varietycm_: 128,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42787994499997,
                                       37.72650864399998
                                       ],
                                       [
                                       -122.42778903099997,
                                       37.726465211
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 142744,
                                       area_id: 142744,
                                       cells50cm_: 360,
                                       globalid: "{9D71A0CA-0825-4851-941B-A9C4DE7B3058}",
                                       gnd1st_del: 6.33,
                                       gnd_cells5: 360,
                                       gnd_majori: 8953,
                                       gnd_maxcm: 8957,
                                       gnd_meancm: 8890.50277778,
                                       gnd_median: 8931,
                                       gnd_min_m: 86.24,
                                       gnd_mincm: 8624,
                                       gnd_minori: 8624,
                                       gnd_rangec: 333,
                                       gnd_stdcm: 83.01927482,
                                       gnd_variet: 145,
                                       hgt_cells5: 360,
                                       hgt_majori: 311,
                                       hgt_maxcm: 592,
                                       hgt_meancm: 351.38333333,
                                       hgt_median: 3.31,
                                       hgt_medi_1: 331,
                                       hgt_mincm: 199,
                                       hgt_minori: 199,
                                       hgt_rangec: 393,
                                       hgt_stdcm: 91.16327081,
                                       hgt_variet: 202,
                                       majoritycm: 9259,
                                       maxcm_1st: 9331,
                                       mblr: "SF5957032",
                                       meancm_1st: 9241.89444444,
                                       median_1st: 92.57,
                                       mediancm_1: 9257,
                                       mincm_1st: 9121,
                                       minoritycm: 9121,
                                       p2010_name: "SanfranI_03991.flt",
                                       p2010_zmax: 322.5828,
                                       p2010_zmin: 274.2325,
                                       peak_1st_m: 93.31,
                                       rangecm_1s: 210,
                                       sf16_bldgi: "201006.0142744",
                                       stdcm_1st: 35.29250742,
                                       varietycm_: 128,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42778903099997,
                                       37.726465211
                                       ],
                                       [
                                       -122.42779333099999,
                                       37.726459412999986
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 142744,
                                       area_id: 142744,
                                       cells50cm_: 360,
                                       globalid: "{9D71A0CA-0825-4851-941B-A9C4DE7B3058}",
                                       gnd1st_del: 6.33,
                                       gnd_cells5: 360,
                                       gnd_majori: 8953,
                                       gnd_maxcm: 8957,
                                       gnd_meancm: 8890.50277778,
                                       gnd_median: 8931,
                                       gnd_min_m: 86.24,
                                       gnd_mincm: 8624,
                                       gnd_minori: 8624,
                                       gnd_rangec: 333,
                                       gnd_stdcm: 83.01927482,
                                       gnd_variet: 145,
                                       hgt_cells5: 360,
                                       hgt_majori: 311,
                                       hgt_maxcm: 592,
                                       hgt_meancm: 351.38333333,
                                       hgt_median: 3.31,
                                       hgt_medi_1: 331,
                                       hgt_mincm: 199,
                                       hgt_minori: 199,
                                       hgt_rangec: 393,
                                       hgt_stdcm: 91.16327081,
                                       hgt_variet: 202,
                                       majoritycm: 9259,
                                       maxcm_1st: 9331,
                                       mblr: "SF5957032",
                                       meancm_1st: 9241.89444444,
                                       median_1st: 92.57,
                                       mediancm_1: 9257,
                                       mincm_1st: 9121,
                                       minoritycm: 9121,
                                       p2010_name: "SanfranI_03991.flt",
                                       p2010_zmax: 322.5828,
                                       p2010_zmin: 274.2325,
                                       peak_1st_m: 93.31,
                                       rangecm_1s: 210,
                                       sf16_bldgi: "201006.0142744",
                                       stdcm_1st: 35.29250742,
                                       varietycm_: 128,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42779333099999,
                                       37.726459412999986
                                       ],
                                       [
                                       -122.42774922299998,
                                       37.726438261
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 142744,
                                       area_id: 142744,
                                       cells50cm_: 360,
                                       globalid: "{9D71A0CA-0825-4851-941B-A9C4DE7B3058}",
                                       gnd1st_del: 6.33,
                                       gnd_cells5: 360,
                                       gnd_majori: 8953,
                                       gnd_maxcm: 8957,
                                       gnd_meancm: 8890.50277778,
                                       gnd_median: 8931,
                                       gnd_min_m: 86.24,
                                       gnd_mincm: 8624,
                                       gnd_minori: 8624,
                                       gnd_rangec: 333,
                                       gnd_stdcm: 83.01927482,
                                       gnd_variet: 145,
                                       hgt_cells5: 360,
                                       hgt_majori: 311,
                                       hgt_maxcm: 592,
                                       hgt_meancm: 351.38333333,
                                       hgt_median: 3.31,
                                       hgt_medi_1: 331,
                                       hgt_mincm: 199,
                                       hgt_minori: 199,
                                       hgt_rangec: 393,
                                       hgt_stdcm: 91.16327081,
                                       hgt_variet: 202,
                                       majoritycm: 9259,
                                       maxcm_1st: 9331,
                                       mblr: "SF5957032",
                                       meancm_1st: 9241.89444444,
                                       median_1st: 92.57,
                                       mediancm_1: 9257,
                                       mincm_1st: 9121,
                                       minoritycm: 9121,
                                       p2010_name: "SanfranI_03991.flt",
                                       p2010_zmax: 322.5828,
                                       p2010_zmin: 274.2325,
                                       peak_1st_m: 93.31,
                                       rangecm_1s: 210,
                                       sf16_bldgi: "201006.0142744",
                                       stdcm_1st: 35.29250742,
                                       varietycm_: 128,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42778098899998,
                                       37.72639644999998
                                       ],
                                       [
                                       -122.42782448199999,
                                       37.726417303
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 142744,
                                       area_id: 142744,
                                       cells50cm_: 360,
                                       globalid: "{9D71A0CA-0825-4851-941B-A9C4DE7B3058}",
                                       gnd1st_del: 6.33,
                                       gnd_cells5: 360,
                                       gnd_majori: 8953,
                                       gnd_maxcm: 8957,
                                       gnd_meancm: 8890.50277778,
                                       gnd_median: 8931,
                                       gnd_min_m: 86.24,
                                       gnd_mincm: 8624,
                                       gnd_minori: 8624,
                                       gnd_rangec: 333,
                                       gnd_stdcm: 83.01927482,
                                       gnd_variet: 145,
                                       hgt_cells5: 360,
                                       hgt_majori: 311,
                                       hgt_maxcm: 592,
                                       hgt_meancm: 351.38333333,
                                       hgt_median: 3.31,
                                       hgt_medi_1: 331,
                                       hgt_mincm: 199,
                                       hgt_minori: 199,
                                       hgt_rangec: 393,
                                       hgt_stdcm: 91.16327081,
                                       hgt_variet: 202,
                                       majoritycm: 9259,
                                       maxcm_1st: 9331,
                                       mblr: "SF5957032",
                                       meancm_1st: 9241.89444444,
                                       median_1st: 92.57,
                                       mediancm_1: 9257,
                                       mincm_1st: 9121,
                                       minoritycm: 9121,
                                       p2010_name: "SanfranI_03991.flt",
                                       p2010_zmax: 322.5828,
                                       p2010_zmin: 274.2325,
                                       peak_1st_m: 93.31,
                                       rangecm_1s: 210,
                                       sf16_bldgi: "201006.0142744",
                                       stdcm_1st: 35.29250742,
                                       varietycm_: 128,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42782448199999,
                                       37.726417303
                                       ],
                                       [
                                       -122.427827476,
                                       37.72641325500001
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 142744,
                                       area_id: 142744,
                                       cells50cm_: 360,
                                       globalid: "{9D71A0CA-0825-4851-941B-A9C4DE7B3058}",
                                       gnd1st_del: 6.33,
                                       gnd_cells5: 360,
                                       gnd_majori: 8953,
                                       gnd_maxcm: 8957,
                                       gnd_meancm: 8890.50277778,
                                       gnd_median: 8931,
                                       gnd_min_m: 86.24,
                                       gnd_mincm: 8624,
                                       gnd_minori: 8624,
                                       gnd_rangec: 333,
                                       gnd_stdcm: 83.01927482,
                                       gnd_variet: 145,
                                       hgt_cells5: 360,
                                       hgt_majori: 311,
                                       hgt_maxcm: 592,
                                       hgt_meancm: 351.38333333,
                                       hgt_median: 3.31,
                                       hgt_medi_1: 331,
                                       hgt_mincm: 199,
                                       hgt_minori: 199,
                                       hgt_rangec: 393,
                                       hgt_stdcm: 91.16327081,
                                       hgt_variet: 202,
                                       majoritycm: 9259,
                                       maxcm_1st: 9331,
                                       mblr: "SF5957032",
                                       meancm_1st: 9241.89444444,
                                       median_1st: 92.57,
                                       mediancm_1: 9257,
                                       mincm_1st: 9121,
                                       minoritycm: 9121,
                                       p2010_name: "SanfranI_03991.flt",
                                       p2010_zmax: 322.5828,
                                       p2010_zmin: 274.2325,
                                       peak_1st_m: 93.31,
                                       rangecm_1s: 210,
                                       sf16_bldgi: "201006.0142744",
                                       stdcm_1st: 35.29250742,
                                       varietycm_: 128,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.427827476,
                                       37.72641325500001
                                       ],
                                       [
                                       -122.42790401500002,
                                       37.72644896100002
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 142744,
                                       area_id: 142744,
                                       cells50cm_: 360,
                                       globalid: "{9D71A0CA-0825-4851-941B-A9C4DE7B3058}",
                                       gnd1st_del: 6.33,
                                       gnd_cells5: 360,
                                       gnd_majori: 8953,
                                       gnd_maxcm: 8957,
                                       gnd_meancm: 8890.50277778,
                                       gnd_median: 8931,
                                       gnd_min_m: 86.24,
                                       gnd_mincm: 8624,
                                       gnd_minori: 8624,
                                       gnd_rangec: 333,
                                       gnd_stdcm: 83.01927482,
                                       gnd_variet: 145,
                                       hgt_cells5: 360,
                                       hgt_majori: 311,
                                       hgt_maxcm: 592,
                                       hgt_meancm: 351.38333333,
                                       hgt_median: 3.31,
                                       hgt_medi_1: 331,
                                       hgt_mincm: 199,
                                       hgt_minori: 199,
                                       hgt_rangec: 393,
                                       hgt_stdcm: 91.16327081,
                                       hgt_variet: 202,
                                       majoritycm: 9259,
                                       maxcm_1st: 9331,
                                       mblr: "SF5957032",
                                       meancm_1st: 9241.89444444,
                                       median_1st: 92.57,
                                       mediancm_1: 9257,
                                       mincm_1st: 9121,
                                       minoritycm: 9121,
                                       p2010_name: "SanfranI_03991.flt",
                                       p2010_zmax: 322.5828,
                                       p2010_zmin: 274.2325,
                                       peak_1st_m: 93.31,
                                       rangecm_1s: 210,
                                       sf16_bldgi: "201006.0142744",
                                       stdcm_1st: 35.29250742,
                                       varietycm_: 128,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42790127,
                                       37.72651814400001
                                       ],
                                       [
                                       -122.42787994499997,
                                       37.72650864399998
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 143146,
                                       area_id: 143146,
                                       cells50cm_: 357,
                                       globalid: "{144FA3C4-205D-470E-A13B-2FBE86BF5707}",
                                       gnd1st_del: 6.67,
                                       gnd_cells5: 357,
                                       gnd_majori: 8897,
                                       gnd_maxcm: 9069,
                                       gnd_meancm: 8908.1372549,
                                       gnd_median: 8897,
                                       gnd_min_m: 87.6,
                                       gnd_mincm: 8760,
                                       gnd_minori: 8760,
                                       gnd_rangec: 309,
                                       gnd_stdcm: 79.28105299,
                                       gnd_variet: 222,
                                       hgt_cells5: 357,
                                       hgt_majori: 619,
                                       hgt_maxcm: 668,
                                       hgt_meancm: 508.92156863,
                                       hgt_median: 5.6,
                                       hgt_medi_1: 560,
                                       hgt_mincm: 171,
                                       hgt_minori: 171,
                                       hgt_rangec: 497,
                                       hgt_stdcm: 126.42795364,
                                       hgt_variet: 231,
                                       majoritycm: 9423,
                                       maxcm_1st: 9540,
                                       mblr: "SF5957030",
                                       meancm_1st: 9417.09803922,
                                       median_1st: 94.27,
                                       mediancm_1: 9427,
                                       mincm_1st: 9217,
                                       minoritycm: 9217,
                                       p2010_name: "SanfranI_03997.flt",
                                       p2010_zmax: 313.7134,
                                       p2010_zmin: 287.0901,
                                       peak_1st_m: 95.4,
                                       rangecm_1s: 323,
                                       sf16_bldgi: "201006.0143146",
                                       stdcm_1st: 70.99855146,
                                       varietycm_: 199,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42793615900003,
                                       37.72637582200002
                                       ],
                                       [
                                       -122.42785381800002,
                                       37.72633645500002
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 143146,
                                       area_id: 143146,
                                       cells50cm_: 357,
                                       globalid: "{144FA3C4-205D-470E-A13B-2FBE86BF5707}",
                                       gnd1st_del: 6.67,
                                       gnd_cells5: 357,
                                       gnd_majori: 8897,
                                       gnd_maxcm: 9069,
                                       gnd_meancm: 8908.1372549,
                                       gnd_median: 8897,
                                       gnd_min_m: 87.6,
                                       gnd_mincm: 8760,
                                       gnd_minori: 8760,
                                       gnd_rangec: 309,
                                       gnd_stdcm: 79.28105299,
                                       gnd_variet: 222,
                                       hgt_cells5: 357,
                                       hgt_majori: 619,
                                       hgt_maxcm: 668,
                                       hgt_meancm: 508.92156863,
                                       hgt_median: 5.6,
                                       hgt_medi_1: 560,
                                       hgt_mincm: 171,
                                       hgt_minori: 171,
                                       hgt_rangec: 497,
                                       hgt_stdcm: 126.42795364,
                                       hgt_variet: 231,
                                       majoritycm: 9423,
                                       maxcm_1st: 9540,
                                       mblr: "SF5957030",
                                       meancm_1st: 9417.09803922,
                                       median_1st: 94.27,
                                       mediancm_1: 9427,
                                       mincm_1st: 9217,
                                       minoritycm: 9217,
                                       p2010_name: "SanfranI_03997.flt",
                                       p2010_zmax: 313.7134,
                                       p2010_zmin: 287.0901,
                                       peak_1st_m: 95.4,
                                       rangecm_1s: 323,
                                       sf16_bldgi: "201006.0143146",
                                       stdcm_1st: 70.99855146,
                                       varietycm_: 199,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42785381800002,
                                       37.72633645500002
                                       ],
                                       [
                                       -122.427853841,
                                       37.726336401000026
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 143146,
                                       area_id: 143146,
                                       cells50cm_: 357,
                                       globalid: "{144FA3C4-205D-470E-A13B-2FBE86BF5707}",
                                       gnd1st_del: 6.67,
                                       gnd_cells5: 357,
                                       gnd_majori: 8897,
                                       gnd_maxcm: 9069,
                                       gnd_meancm: 8908.1372549,
                                       gnd_median: 8897,
                                       gnd_min_m: 87.6,
                                       gnd_mincm: 8760,
                                       gnd_minori: 8760,
                                       gnd_rangec: 309,
                                       gnd_stdcm: 79.28105299,
                                       gnd_variet: 222,
                                       hgt_cells5: 357,
                                       hgt_majori: 619,
                                       hgt_maxcm: 668,
                                       hgt_meancm: 508.92156863,
                                       hgt_median: 5.6,
                                       hgt_medi_1: 560,
                                       hgt_mincm: 171,
                                       hgt_minori: 171,
                                       hgt_rangec: 497,
                                       hgt_stdcm: 126.42795364,
                                       hgt_variet: 231,
                                       majoritycm: 9423,
                                       maxcm_1st: 9540,
                                       mblr: "SF5957030",
                                       meancm_1st: 9417.09803922,
                                       median_1st: 94.27,
                                       mediancm_1: 9427,
                                       mincm_1st: 9217,
                                       minoritycm: 9217,
                                       p2010_name: "SanfranI_03997.flt",
                                       p2010_zmax: 313.7134,
                                       p2010_zmin: 287.0901,
                                       peak_1st_m: 95.4,
                                       rangecm_1s: 323,
                                       sf16_bldgi: "201006.0143146",
                                       stdcm_1st: 70.99855146,
                                       varietycm_: 199,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.427853841,
                                       37.726336401000026
                                       ],
                                       [
                                       -122.427836356,
                                       37.726328272999986
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 143146,
                                       area_id: 143146,
                                       cells50cm_: 357,
                                       globalid: "{144FA3C4-205D-470E-A13B-2FBE86BF5707}",
                                       gnd1st_del: 6.67,
                                       gnd_cells5: 357,
                                       gnd_majori: 8897,
                                       gnd_maxcm: 9069,
                                       gnd_meancm: 8908.1372549,
                                       gnd_median: 8897,
                                       gnd_min_m: 87.6,
                                       gnd_mincm: 8760,
                                       gnd_minori: 8760,
                                       gnd_rangec: 309,
                                       gnd_stdcm: 79.28105299,
                                       gnd_variet: 222,
                                       hgt_cells5: 357,
                                       hgt_majori: 619,
                                       hgt_maxcm: 668,
                                       hgt_meancm: 508.92156863,
                                       hgt_median: 5.6,
                                       hgt_medi_1: 560,
                                       hgt_mincm: 171,
                                       hgt_minori: 171,
                                       hgt_rangec: 497,
                                       hgt_stdcm: 126.42795364,
                                       hgt_variet: 231,
                                       majoritycm: 9423,
                                       maxcm_1st: 9540,
                                       mblr: "SF5957030",
                                       meancm_1st: 9417.09803922,
                                       median_1st: 94.27,
                                       mediancm_1: 9427,
                                       mincm_1st: 9217,
                                       minoritycm: 9217,
                                       p2010_name: "SanfranI_03997.flt",
                                       p2010_zmax: 313.7134,
                                       p2010_zmin: 287.0901,
                                       peak_1st_m: 95.4,
                                       rangecm_1s: 323,
                                       sf16_bldgi: "201006.0143146",
                                       stdcm_1st: 70.99855146,
                                       varietycm_: 199,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.427836356,
                                       37.726328272999986
                                       ],
                                       [
                                       -122.427836372,
                                       37.726328231000025
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 143146,
                                       area_id: 143146,
                                       cells50cm_: 357,
                                       globalid: "{144FA3C4-205D-470E-A13B-2FBE86BF5707}",
                                       gnd1st_del: 6.67,
                                       gnd_cells5: 357,
                                       gnd_majori: 8897,
                                       gnd_maxcm: 9069,
                                       gnd_meancm: 8908.1372549,
                                       gnd_median: 8897,
                                       gnd_min_m: 87.6,
                                       gnd_mincm: 8760,
                                       gnd_minori: 8760,
                                       gnd_rangec: 309,
                                       gnd_stdcm: 79.28105299,
                                       gnd_variet: 222,
                                       hgt_cells5: 357,
                                       hgt_majori: 619,
                                       hgt_maxcm: 668,
                                       hgt_meancm: 508.92156863,
                                       hgt_median: 5.6,
                                       hgt_medi_1: 560,
                                       hgt_mincm: 171,
                                       hgt_minori: 171,
                                       hgt_rangec: 497,
                                       hgt_stdcm: 126.42795364,
                                       hgt_variet: 231,
                                       majoritycm: 9423,
                                       maxcm_1st: 9540,
                                       mblr: "SF5957030",
                                       meancm_1st: 9417.09803922,
                                       median_1st: 94.27,
                                       mediancm_1: 9427,
                                       mincm_1st: 9217,
                                       minoritycm: 9217,
                                       p2010_name: "SanfranI_03997.flt",
                                       p2010_zmax: 313.7134,
                                       p2010_zmin: 287.0901,
                                       peak_1st_m: 95.4,
                                       rangecm_1s: 323,
                                       sf16_bldgi: "201006.0143146",
                                       stdcm_1st: 70.99855146,
                                       varietycm_: 199,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.427836372,
                                       37.726328231000025
                                       ],
                                       [
                                       -122.427837097,
                                       37.72632724499999
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 143146,
                                       area_id: 143146,
                                       cells50cm_: 357,
                                       globalid: "{144FA3C4-205D-470E-A13B-2FBE86BF5707}",
                                       gnd1st_del: 6.67,
                                       gnd_cells5: 357,
                                       gnd_majori: 8897,
                                       gnd_maxcm: 9069,
                                       gnd_meancm: 8908.1372549,
                                       gnd_median: 8897,
                                       gnd_min_m: 87.6,
                                       gnd_mincm: 8760,
                                       gnd_minori: 8760,
                                       gnd_rangec: 309,
                                       gnd_stdcm: 79.28105299,
                                       gnd_variet: 222,
                                       hgt_cells5: 357,
                                       hgt_majori: 619,
                                       hgt_maxcm: 668,
                                       hgt_meancm: 508.92156863,
                                       hgt_median: 5.6,
                                       hgt_medi_1: 560,
                                       hgt_mincm: 171,
                                       hgt_minori: 171,
                                       hgt_rangec: 497,
                                       hgt_stdcm: 126.42795364,
                                       hgt_variet: 231,
                                       majoritycm: 9423,
                                       maxcm_1st: 9540,
                                       mblr: "SF5957030",
                                       meancm_1st: 9417.09803922,
                                       median_1st: 94.27,
                                       mediancm_1: 9427,
                                       mincm_1st: 9217,
                                       minoritycm: 9217,
                                       p2010_name: "SanfranI_03997.flt",
                                       p2010_zmax: 313.7134,
                                       p2010_zmin: 287.0901,
                                       peak_1st_m: 95.4,
                                       rangecm_1s: 323,
                                       sf16_bldgi: "201006.0143146",
                                       stdcm_1st: 70.99855146,
                                       varietycm_: 199,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.427837097,
                                       37.72632724499999
                                       ],
                                       [
                                       -122.42781119900002,
                                       37.726315055999976
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 143146,
                                       area_id: 143146,
                                       cells50cm_: 357,
                                       globalid: "{144FA3C4-205D-470E-A13B-2FBE86BF5707}",
                                       gnd1st_del: 6.67,
                                       gnd_cells5: 357,
                                       gnd_majori: 8897,
                                       gnd_maxcm: 9069,
                                       gnd_meancm: 8908.1372549,
                                       gnd_median: 8897,
                                       gnd_min_m: 87.6,
                                       gnd_mincm: 8760,
                                       gnd_minori: 8760,
                                       gnd_rangec: 309,
                                       gnd_stdcm: 79.28105299,
                                       gnd_variet: 222,
                                       hgt_cells5: 357,
                                       hgt_majori: 619,
                                       hgt_maxcm: 668,
                                       hgt_meancm: 508.92156863,
                                       hgt_median: 5.6,
                                       hgt_medi_1: 560,
                                       hgt_mincm: 171,
                                       hgt_minori: 171,
                                       hgt_rangec: 497,
                                       hgt_stdcm: 126.42795364,
                                       hgt_variet: 231,
                                       majoritycm: 9423,
                                       maxcm_1st: 9540,
                                       mblr: "SF5957030",
                                       meancm_1st: 9417.09803922,
                                       median_1st: 94.27,
                                       mediancm_1: 9427,
                                       mincm_1st: 9217,
                                       minoritycm: 9217,
                                       p2010_name: "SanfranI_03997.flt",
                                       p2010_zmax: 313.7134,
                                       p2010_zmin: 287.0901,
                                       peak_1st_m: 95.4,
                                       rangecm_1s: 323,
                                       sf16_bldgi: "201006.0143146",
                                       stdcm_1st: 70.99855146,
                                       varietycm_: 199,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.427841216,
                                       37.726274803000024
                                       ],
                                       [
                                       -122.42788493699999,
                                       37.726295368000024
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 143146,
                                       area_id: 143146,
                                       cells50cm_: 357,
                                       globalid: "{144FA3C4-205D-470E-A13B-2FBE86BF5707}",
                                       gnd1st_del: 6.67,
                                       gnd_cells5: 357,
                                       gnd_majori: 8897,
                                       gnd_maxcm: 9069,
                                       gnd_meancm: 8908.1372549,
                                       gnd_median: 8897,
                                       gnd_min_m: 87.6,
                                       gnd_mincm: 8760,
                                       gnd_minori: 8760,
                                       gnd_rangec: 309,
                                       gnd_stdcm: 79.28105299,
                                       gnd_variet: 222,
                                       hgt_cells5: 357,
                                       hgt_majori: 619,
                                       hgt_maxcm: 668,
                                       hgt_meancm: 508.92156863,
                                       hgt_median: 5.6,
                                       hgt_medi_1: 560,
                                       hgt_mincm: 171,
                                       hgt_minori: 171,
                                       hgt_rangec: 497,
                                       hgt_stdcm: 126.42795364,
                                       hgt_variet: 231,
                                       majoritycm: 9423,
                                       maxcm_1st: 9540,
                                       mblr: "SF5957030",
                                       meancm_1st: 9417.09803922,
                                       median_1st: 94.27,
                                       mediancm_1: 9427,
                                       mincm_1st: 9217,
                                       minoritycm: 9217,
                                       p2010_name: "SanfranI_03997.flt",
                                       p2010_zmax: 313.7134,
                                       p2010_zmin: 287.0901,
                                       peak_1st_m: 95.4,
                                       rangecm_1s: 323,
                                       sf16_bldgi: "201006.0143146",
                                       stdcm_1st: 70.99855146,
                                       varietycm_: 199,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42789460300003,
                                       37.726282594
                                       ],
                                       [
                                       -122.42797695399997,
                                       37.726321943000016
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 143146,
                                       area_id: 143146,
                                       cells50cm_: 357,
                                       globalid: "{144FA3C4-205D-470E-A13B-2FBE86BF5707}",
                                       gnd1st_del: 6.67,
                                       gnd_cells5: 357,
                                       gnd_majori: 8897,
                                       gnd_maxcm: 9069,
                                       gnd_meancm: 8908.1372549,
                                       gnd_median: 8897,
                                       gnd_min_m: 87.6,
                                       gnd_mincm: 8760,
                                       gnd_minori: 8760,
                                       gnd_rangec: 309,
                                       gnd_stdcm: 79.28105299,
                                       gnd_variet: 222,
                                       hgt_cells5: 357,
                                       hgt_majori: 619,
                                       hgt_maxcm: 668,
                                       hgt_meancm: 508.92156863,
                                       hgt_median: 5.6,
                                       hgt_medi_1: 560,
                                       hgt_mincm: 171,
                                       hgt_minori: 171,
                                       hgt_rangec: 497,
                                       hgt_stdcm: 126.42795364,
                                       hgt_variet: 231,
                                       majoritycm: 9423,
                                       maxcm_1st: 9540,
                                       mblr: "SF5957030",
                                       meancm_1st: 9417.09803922,
                                       median_1st: 94.27,
                                       mediancm_1: 9427,
                                       mincm_1st: 9217,
                                       minoritycm: 9217,
                                       p2010_name: "SanfranI_03997.flt",
                                       p2010_zmax: 313.7134,
                                       p2010_zmin: 287.0901,
                                       peak_1st_m: 95.4,
                                       rangecm_1s: 323,
                                       sf16_bldgi: "201006.0143146",
                                       stdcm_1st: 70.99855146,
                                       varietycm_: 199,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42797695399997,
                                       37.726321943000016
                                       ],
                                       [
                                       -122.42797693,
                                       37.726322004999986
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 143146,
                                       area_id: 143146,
                                       cells50cm_: 357,
                                       globalid: "{144FA3C4-205D-470E-A13B-2FBE86BF5707}",
                                       gnd1st_del: 6.67,
                                       gnd_cells5: 357,
                                       gnd_majori: 8897,
                                       gnd_maxcm: 9069,
                                       gnd_meancm: 8908.1372549,
                                       gnd_median: 8897,
                                       gnd_min_m: 87.6,
                                       gnd_mincm: 8760,
                                       gnd_minori: 8760,
                                       gnd_rangec: 309,
                                       gnd_stdcm: 79.28105299,
                                       gnd_variet: 222,
                                       hgt_cells5: 357,
                                       hgt_majori: 619,
                                       hgt_maxcm: 668,
                                       hgt_meancm: 508.92156863,
                                       hgt_median: 5.6,
                                       hgt_medi_1: 560,
                                       hgt_mincm: 171,
                                       hgt_minori: 171,
                                       hgt_rangec: 497,
                                       hgt_stdcm: 126.42795364,
                                       hgt_variet: 231,
                                       majoritycm: 9423,
                                       maxcm_1st: 9540,
                                       mblr: "SF5957030",
                                       meancm_1st: 9417.09803922,
                                       median_1st: 94.27,
                                       mediancm_1: 9427,
                                       mincm_1st: 9217,
                                       minoritycm: 9217,
                                       p2010_name: "SanfranI_03997.flt",
                                       p2010_zmax: 313.7134,
                                       p2010_zmin: 287.0901,
                                       peak_1st_m: 95.4,
                                       rangecm_1s: 323,
                                       sf16_bldgi: "201006.0143146",
                                       stdcm_1st: 70.99855146,
                                       varietycm_: 199,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42797693,
                                       37.726322004999986
                                       ],
                                       [
                                       -122.42797680000001,
                                       37.726322176
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 143146,
                                       area_id: 143146,
                                       cells50cm_: 357,
                                       globalid: "{144FA3C4-205D-470E-A13B-2FBE86BF5707}",
                                       gnd1st_del: 6.67,
                                       gnd_cells5: 357,
                                       gnd_majori: 8897,
                                       gnd_maxcm: 9069,
                                       gnd_meancm: 8908.1372549,
                                       gnd_median: 8897,
                                       gnd_min_m: 87.6,
                                       gnd_mincm: 8760,
                                       gnd_minori: 8760,
                                       gnd_rangec: 309,
                                       gnd_stdcm: 79.28105299,
                                       gnd_variet: 222,
                                       hgt_cells5: 357,
                                       hgt_majori: 619,
                                       hgt_maxcm: 668,
                                       hgt_meancm: 508.92156863,
                                       hgt_median: 5.6,
                                       hgt_medi_1: 560,
                                       hgt_mincm: 171,
                                       hgt_minori: 171,
                                       hgt_rangec: 497,
                                       hgt_stdcm: 126.42795364,
                                       hgt_variet: 231,
                                       majoritycm: 9423,
                                       maxcm_1st: 9540,
                                       mblr: "SF5957030",
                                       meancm_1st: 9417.09803922,
                                       median_1st: 94.27,
                                       mediancm_1: 9427,
                                       mincm_1st: 9217,
                                       minoritycm: 9217,
                                       p2010_name: "SanfranI_03997.flt",
                                       p2010_zmax: 313.7134,
                                       p2010_zmin: 287.0901,
                                       peak_1st_m: 95.4,
                                       rangecm_1s: 323,
                                       sf16_bldgi: "201006.0143146",
                                       stdcm_1st: 70.99855146,
                                       varietycm_: 199,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "sides",
                                       color: "green"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42797680000001,
                                       37.726322176
                                       ],
                                       [
                                       -122.427994593,
                                       37.72633063
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 139731,
                                       area_id: 139731,
                                       cells50cm_: 367,
                                       globalid: "{15A43D02-BAE8-43E5-9013-833DA708F6C7}",
                                       gnd1st_del: 6.64,
                                       gnd_cells5: 367,
                                       gnd_majori: 8968,
                                       gnd_maxcm: 9016,
                                       gnd_meancm: 8901.28065395,
                                       gnd_median: 8905,
                                       gnd_min_m: 87.51,
                                       gnd_mincm: 8751,
                                       gnd_minori: 8752,
                                       gnd_rangec: 265,
                                       gnd_stdcm: 64.12071578,
                                       gnd_variet: 201,
                                       hgt_cells5: 367,
                                       hgt_majori: 549,
                                       hgt_maxcm: 660,
                                       hgt_meancm: 510.98092643,
                                       hgt_median: 5.29,
                                       hgt_medi_1: 529,
                                       hgt_mincm: 142,
                                       hgt_minori: 142,
                                       hgt_rangec: 518,
                                       hgt_stdcm: 104.59217369,
                                       hgt_variet: 224,
                                       majoritycm: 9415,
                                       maxcm_1st: 9601,
                                       mblr: "SF5957031",
                                       meancm_1st: 9412.25340599,
                                       median_1st: 94.15,
                                       mediancm_1: 9415,
                                       mincm_1st: 9146,
                                       minoritycm: 9146,
                                       p2010_name: "SanfranI_03996.flt",
                                       p2010_zmax: 313.4982,
                                       p2010_zmin: 287.8995,
                                       peak_1st_m: 96.01,
                                       rangecm_1s: 455,
                                       sf16_bldgi: "201006.0139731",
                                       stdcm_1st: 75.93722191,
                                       varietycm_: 204,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "rear",
                                       color: "blue"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.427770124,
                                       37.72634370600002
                                       ],
                                       [
                                       -122.42777258400002,
                                       37.72634486200002
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 139731,
                                       area_id: 139731,
                                       cells50cm_: 367,
                                       globalid: "{15A43D02-BAE8-43E5-9013-833DA708F6C7}",
                                       gnd1st_del: 6.64,
                                       gnd_cells5: 367,
                                       gnd_majori: 8968,
                                       gnd_maxcm: 9016,
                                       gnd_meancm: 8901.28065395,
                                       gnd_median: 8905,
                                       gnd_min_m: 87.51,
                                       gnd_mincm: 8751,
                                       gnd_minori: 8752,
                                       gnd_rangec: 265,
                                       gnd_stdcm: 64.12071578,
                                       gnd_variet: 201,
                                       hgt_cells5: 367,
                                       hgt_majori: 549,
                                       hgt_maxcm: 660,
                                       hgt_meancm: 510.98092643,
                                       hgt_median: 5.29,
                                       hgt_medi_1: 529,
                                       hgt_mincm: 142,
                                       hgt_minori: 142,
                                       hgt_rangec: 518,
                                       hgt_stdcm: 104.59217369,
                                       hgt_variet: 224,
                                       majoritycm: 9415,
                                       maxcm_1st: 9601,
                                       mblr: "SF5957031",
                                       meancm_1st: 9412.25340599,
                                       median_1st: 94.15,
                                       mediancm_1: 9415,
                                       mincm_1st: 9146,
                                       minoritycm: 9146,
                                       p2010_name: "SanfranI_03996.flt",
                                       p2010_zmax: 313.4982,
                                       p2010_zmin: 287.8995,
                                       peak_1st_m: 96.01,
                                       rangecm_1s: 455,
                                       sf16_bldgi: "201006.0139731",
                                       stdcm_1st: 75.93722191,
                                       varietycm_: 204,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "rear",
                                       color: "blue"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42777258400002,
                                       37.72634486200002
                                       ],
                                       [
                                       -122.42777299800004,
                                       37.726345056000014
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 95488,
                                       area_id: 95488,
                                       cells50cm_: 484,
                                       globalid: "{B13C1234-BA60-4213-A9C1-6F079CDC9EF9}",
                                       gnd1st_del: 9.7,
                                       gnd_cells5: 484,
                                       gnd_majori: 9765,
                                       gnd_maxcm: 9799,
                                       gnd_meancm: 9611.32438017,
                                       gnd_median: 9617,
                                       gnd_min_m: 93.62,
                                       gnd_mincm: 9362,
                                       gnd_minori: 9362,
                                       gnd_rangec: 437,
                                       gnd_stdcm: 123.23120506,
                                       gnd_variet: 337,
                                       hgt_cells5: 484,
                                       hgt_majori: 600,
                                       hgt_maxcm: 876,
                                       hgt_meancm: 679.44214876,
                                       hgt_median: 6.8,
                                       hgt_medi_1: 680,
                                       hgt_mincm: 324,
                                       hgt_minori: 324,
                                       hgt_rangec: 552,
                                       hgt_stdcm: 104.57852619,
                                       hgt_variet: 267,
                                       majoritycm: 10329,
                                       maxcm_1st: 10371,
                                       mblr: "SF5957014",
                                       meancm_1st: 10290.7892562,
                                       median_1st: 103.32,
                                       mediancm_1: 10332,
                                       mincm_1st: 9693,
                                       minoritycm: 9693,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 103.71,
                                       rangecm_1s: 678,
                                       sf16_bldgi: "201006.0095488",
                                       stdcm_1st: 110.53102949,
                                       varietycm_: 151,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "rear",
                                       color: "blue"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42753388099999,
                                       37.72618396500002
                                       ],
                                       [
                                       -122.42751262399997,
                                       37.72621190199999
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 95488,
                                       area_id: 95488,
                                       cells50cm_: 484,
                                       globalid: "{B13C1234-BA60-4213-A9C1-6F079CDC9EF9}",
                                       gnd1st_del: 9.7,
                                       gnd_cells5: 484,
                                       gnd_majori: 9765,
                                       gnd_maxcm: 9799,
                                       gnd_meancm: 9611.32438017,
                                       gnd_median: 9617,
                                       gnd_min_m: 93.62,
                                       gnd_mincm: 9362,
                                       gnd_minori: 9362,
                                       gnd_rangec: 437,
                                       gnd_stdcm: 123.23120506,
                                       gnd_variet: 337,
                                       hgt_cells5: 484,
                                       hgt_majori: 600,
                                       hgt_maxcm: 876,
                                       hgt_meancm: 679.44214876,
                                       hgt_median: 6.8,
                                       hgt_medi_1: 680,
                                       hgt_mincm: 324,
                                       hgt_minori: 324,
                                       hgt_rangec: 552,
                                       hgt_stdcm: 104.57852619,
                                       hgt_variet: 267,
                                       majoritycm: 10329,
                                       maxcm_1st: 10371,
                                       mblr: "SF5957014",
                                       meancm_1st: 10290.7892562,
                                       median_1st: 103.32,
                                       mediancm_1: 10332,
                                       mincm_1st: 9693,
                                       minoritycm: 9693,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 103.71,
                                       rangecm_1s: 678,
                                       sf16_bldgi: "201006.0095488",
                                       stdcm_1st: 110.53102949,
                                       varietycm_: 151,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "rear",
                                       color: "blue"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42755029400001,
                                       37.72622935800001
                                       ],
                                       [
                                       -122.42752773900003,
                                       37.726260223
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 98575,
                                       area_id: 98575,
                                       cells50cm_: 476,
                                       globalid: "{B99ADFC4-039E-4249-9C69-B57825E10DE3}",
                                       gnd1st_del: 9.72,
                                       gnd_cells5: 476,
                                       gnd_majori: 9547,
                                       gnd_maxcm: 9827,
                                       gnd_meancm: 9639.37605042,
                                       gnd_median: 9643,
                                       gnd_min_m: 93.95,
                                       gnd_mincm: 9395,
                                       gnd_minori: 9395,
                                       gnd_rangec: 432,
                                       gnd_stdcm: 119.57322294,
                                       gnd_variet: 305,
                                       hgt_cells5: 476,
                                       hgt_majori: 589,
                                       hgt_maxcm: 870,
                                       hgt_meancm: 669.31092437,
                                       hgt_median: 6.87,
                                       hgt_medi_1: 687,
                                       hgt_mincm: 261,
                                       hgt_minori: 261,
                                       hgt_rangec: 609,
                                       hgt_stdcm: 136.07255219,
                                       hgt_variet: 299,
                                       majoritycm: 10371,
                                       maxcm_1st: 10429,
                                       mblr: "SF5957015",
                                       meancm_1st: 10308.68067227,
                                       median_1st: 103.67,
                                       mediancm_1: 10367,
                                       mincm_1st: 9668,
                                       minoritycm: 9668,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 104.29,
                                       rangecm_1s: 761,
                                       sf16_bldgi: "201006.0098575",
                                       stdcm_1st: 161.15135548,
                                       varietycm_: 153,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "rear",
                                       color: "blue"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.427579723,
                                       37.72612367099998
                                       ],
                                       [
                                       -122.42757968600002,
                                       37.72612377000002
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 98575,
                                       area_id: 98575,
                                       cells50cm_: 476,
                                       globalid: "{B99ADFC4-039E-4249-9C69-B57825E10DE3}",
                                       gnd1st_del: 9.72,
                                       gnd_cells5: 476,
                                       gnd_majori: 9547,
                                       gnd_maxcm: 9827,
                                       gnd_meancm: 9639.37605042,
                                       gnd_median: 9643,
                                       gnd_min_m: 93.95,
                                       gnd_mincm: 9395,
                                       gnd_minori: 9395,
                                       gnd_rangec: 432,
                                       gnd_stdcm: 119.57322294,
                                       gnd_variet: 305,
                                       hgt_cells5: 476,
                                       hgt_majori: 589,
                                       hgt_maxcm: 870,
                                       hgt_meancm: 669.31092437,
                                       hgt_median: 6.87,
                                       hgt_medi_1: 687,
                                       hgt_mincm: 261,
                                       hgt_minori: 261,
                                       hgt_rangec: 609,
                                       hgt_stdcm: 136.07255219,
                                       hgt_variet: 299,
                                       majoritycm: 10371,
                                       maxcm_1st: 10429,
                                       mblr: "SF5957015",
                                       meancm_1st: 10308.68067227,
                                       median_1st: 103.67,
                                       mediancm_1: 10367,
                                       mincm_1st: 9668,
                                       minoritycm: 9668,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 104.29,
                                       rangecm_1s: 761,
                                       sf16_bldgi: "201006.0098575",
                                       stdcm_1st: 161.15135548,
                                       varietycm_: 153,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "rear",
                                       color: "blue"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42757968600002,
                                       37.72612377000002
                                       ],
                                       [
                                       -122.427556386,
                                       37.72615439399999
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 98575,
                                       area_id: 98575,
                                       cells50cm_: 476,
                                       globalid: "{B99ADFC4-039E-4249-9C69-B57825E10DE3}",
                                       gnd1st_del: 9.72,
                                       gnd_cells5: 476,
                                       gnd_majori: 9547,
                                       gnd_maxcm: 9827,
                                       gnd_meancm: 9639.37605042,
                                       gnd_median: 9643,
                                       gnd_min_m: 93.95,
                                       gnd_mincm: 9395,
                                       gnd_minori: 9395,
                                       gnd_rangec: 432,
                                       gnd_stdcm: 119.57322294,
                                       gnd_variet: 305,
                                       hgt_cells5: 476,
                                       hgt_majori: 589,
                                       hgt_maxcm: 870,
                                       hgt_meancm: 669.31092437,
                                       hgt_median: 6.87,
                                       hgt_medi_1: 687,
                                       hgt_mincm: 261,
                                       hgt_minori: 261,
                                       hgt_rangec: 609,
                                       hgt_stdcm: 136.07255219,
                                       hgt_variet: 299,
                                       majoritycm: 10371,
                                       maxcm_1st: 10429,
                                       mblr: "SF5957015",
                                       meancm_1st: 10308.68067227,
                                       median_1st: 103.67,
                                       mediancm_1: 10367,
                                       mincm_1st: 9668,
                                       minoritycm: 9668,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 104.29,
                                       rangecm_1s: 761,
                                       sf16_bldgi: "201006.0098575",
                                       stdcm_1st: 161.15135548,
                                       varietycm_: 153,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "rear",
                                       color: "blue"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42758651600002,
                                       37.72616845099998
                                       ],
                                       [
                                       -122.427564534,
                                       37.726198216
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 121352,
                                       area_id: 121352,
                                       cells50cm_: 424,
                                       globalid: "{9A97EDA7-6BB2-44B2-A454-8E68597D361F}",
                                       gnd1st_del: 8.7,
                                       gnd_cells5: 424,
                                       gnd_majori: 9754,
                                       gnd_maxcm: 9757,
                                       gnd_meancm: 9619.09669811,
                                       gnd_median: 9626,
                                       gnd_min_m: 94.35,
                                       gnd_mincm: 9435,
                                       gnd_minori: 9435,
                                       gnd_rangec: 322,
                                       gnd_stdcm: 101.03372587,
                                       gnd_variet: 241,
                                       hgt_cells5: 424,
                                       hgt_majori: 576,
                                       hgt_maxcm: 882,
                                       hgt_meancm: 680.26415094,
                                       hgt_median: 6.81,
                                       hgt_medi_1: 681,
                                       hgt_mincm: 336,
                                       hgt_minori: 336,
                                       hgt_rangec: 546,
                                       hgt_stdcm: 105.57696843,
                                       hgt_variet: 259,
                                       majoritycm: 10302,
                                       maxcm_1st: 10348,
                                       mblr: "SF5957013",
                                       meancm_1st: 10299.37971698,
                                       median_1st: 103.05,
                                       mediancm_1: 10305,
                                       mincm_1st: 10052,
                                       minoritycm: 10052,
                                       p2010_name: "SanfranI_03982.flt",
                                       p2010_zmax: 348.7809,
                                       p2010_zmin: 306.7695,
                                       peak_1st_m: 103.48,
                                       rangecm_1s: 296,
                                       sf16_bldgi: "201006.0121352",
                                       stdcm_1st: 41.03213954,
                                       varietycm_: 104,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "rear",
                                       color: "blue"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42748933000001,
                                       37.726242501
                                       ],
                                       [
                                       -122.42744484699999,
                                       37.72630084799999
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 139731,
                                       area_id: 139731,
                                       cells50cm_: 367,
                                       globalid: "{15A43D02-BAE8-43E5-9013-833DA708F6C7}",
                                       gnd1st_del: 6.64,
                                       gnd_cells5: 367,
                                       gnd_majori: 8968,
                                       gnd_maxcm: 9016,
                                       gnd_meancm: 8901.28065395,
                                       gnd_median: 8905,
                                       gnd_min_m: 87.51,
                                       gnd_mincm: 8751,
                                       gnd_minori: 8752,
                                       gnd_rangec: 265,
                                       gnd_stdcm: 64.12071578,
                                       gnd_variet: 201,
                                       hgt_cells5: 367,
                                       hgt_majori: 549,
                                       hgt_maxcm: 660,
                                       hgt_meancm: 510.98092643,
                                       hgt_median: 5.29,
                                       hgt_medi_1: 529,
                                       hgt_mincm: 142,
                                       hgt_minori: 142,
                                       hgt_rangec: 518,
                                       hgt_stdcm: 104.59217369,
                                       hgt_variet: 224,
                                       majoritycm: 9415,
                                       maxcm_1st: 9601,
                                       mblr: "SF5957031",
                                       meancm_1st: 9412.25340599,
                                       median_1st: 94.15,
                                       mediancm_1: 9415,
                                       mincm_1st: 9146,
                                       minoritycm: 9146,
                                       p2010_name: "SanfranI_03996.flt",
                                       p2010_zmax: 313.4982,
                                       p2010_zmin: 287.8995,
                                       peak_1st_m: 96.01,
                                       rangecm_1s: 455,
                                       sf16_bldgi: "201006.0139731",
                                       stdcm_1st: 75.93722191,
                                       varietycm_: 204,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "rear",
                                       color: "blue"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.427753226,
                                       37.726366428
                                       ],
                                       [
                                       -122.427761676,
                                       37.72635506699999
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 139731,
                                       area_id: 139731,
                                       cells50cm_: 367,
                                       globalid: "{15A43D02-BAE8-43E5-9013-833DA708F6C7}",
                                       gnd1st_del: 6.64,
                                       gnd_cells5: 367,
                                       gnd_majori: 8968,
                                       gnd_maxcm: 9016,
                                       gnd_meancm: 8901.28065395,
                                       gnd_median: 8905,
                                       gnd_min_m: 87.51,
                                       gnd_mincm: 8751,
                                       gnd_minori: 8752,
                                       gnd_rangec: 265,
                                       gnd_stdcm: 64.12071578,
                                       gnd_variet: 201,
                                       hgt_cells5: 367,
                                       hgt_majori: 549,
                                       hgt_maxcm: 660,
                                       hgt_meancm: 510.98092643,
                                       hgt_median: 5.29,
                                       hgt_medi_1: 529,
                                       hgt_mincm: 142,
                                       hgt_minori: 142,
                                       hgt_rangec: 518,
                                       hgt_stdcm: 104.59217369,
                                       hgt_variet: 224,
                                       majoritycm: 9415,
                                       maxcm_1st: 9601,
                                       mblr: "SF5957031",
                                       meancm_1st: 9412.25340599,
                                       median_1st: 94.15,
                                       mediancm_1: 9415,
                                       mincm_1st: 9146,
                                       minoritycm: 9146,
                                       p2010_name: "SanfranI_03996.flt",
                                       p2010_zmax: 313.4982,
                                       p2010_zmin: 287.8995,
                                       peak_1st_m: 96.01,
                                       rangecm_1s: 455,
                                       sf16_bldgi: "201006.0139731",
                                       stdcm_1st: 75.93722191,
                                       varietycm_: 204,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "rear",
                                       color: "blue"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.427761676,
                                       37.72635506699999
                                       ],
                                       [
                                       -122.427770124,
                                       37.72634370600002
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 139731,
                                       area_id: 139731,
                                       cells50cm_: 367,
                                       globalid: "{15A43D02-BAE8-43E5-9013-833DA708F6C7}",
                                       gnd1st_del: 6.64,
                                       gnd_cells5: 367,
                                       gnd_majori: 8968,
                                       gnd_maxcm: 9016,
                                       gnd_meancm: 8901.28065395,
                                       gnd_median: 8905,
                                       gnd_min_m: 87.51,
                                       gnd_mincm: 8751,
                                       gnd_minori: 8752,
                                       gnd_rangec: 265,
                                       gnd_stdcm: 64.12071578,
                                       gnd_variet: 201,
                                       hgt_cells5: 367,
                                       hgt_majori: 549,
                                       hgt_maxcm: 660,
                                       hgt_meancm: 510.98092643,
                                       hgt_median: 5.29,
                                       hgt_medi_1: 529,
                                       hgt_mincm: 142,
                                       hgt_minori: 142,
                                       hgt_rangec: 518,
                                       hgt_stdcm: 104.59217369,
                                       hgt_variet: 224,
                                       majoritycm: 9415,
                                       maxcm_1st: 9601,
                                       mblr: "SF5957031",
                                       meancm_1st: 9412.25340599,
                                       median_1st: 94.15,
                                       mediancm_1: 9415,
                                       mincm_1st: 9146,
                                       minoritycm: 9146,
                                       p2010_name: "SanfranI_03996.flt",
                                       p2010_zmax: 313.4982,
                                       p2010_zmin: 287.8995,
                                       peak_1st_m: 96.01,
                                       rangecm_1s: 455,
                                       sf16_bldgi: "201006.0139731",
                                       stdcm_1st: 75.93722191,
                                       varietycm_: 204,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "rear",
                                       color: "blue"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42777299800004,
                                       37.726345056000014
                                       ],
                                       [
                                       -122.427781741,
                                       37.726333657
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 139731,
                                       area_id: 139731,
                                       cells50cm_: 367,
                                       globalid: "{15A43D02-BAE8-43E5-9013-833DA708F6C7}",
                                       gnd1st_del: 6.64,
                                       gnd_cells5: 367,
                                       gnd_majori: 8968,
                                       gnd_maxcm: 9016,
                                       gnd_meancm: 8901.28065395,
                                       gnd_median: 8905,
                                       gnd_min_m: 87.51,
                                       gnd_mincm: 8751,
                                       gnd_minori: 8752,
                                       gnd_rangec: 265,
                                       gnd_stdcm: 64.12071578,
                                       gnd_variet: 201,
                                       hgt_cells5: 367,
                                       hgt_majori: 549,
                                       hgt_maxcm: 660,
                                       hgt_meancm: 510.98092643,
                                       hgt_median: 5.29,
                                       hgt_medi_1: 529,
                                       hgt_mincm: 142,
                                       hgt_minori: 142,
                                       hgt_rangec: 518,
                                       hgt_stdcm: 104.59217369,
                                       hgt_variet: 224,
                                       majoritycm: 9415,
                                       maxcm_1st: 9601,
                                       mblr: "SF5957031",
                                       meancm_1st: 9412.25340599,
                                       median_1st: 94.15,
                                       mediancm_1: 9415,
                                       mincm_1st: 9146,
                                       minoritycm: 9146,
                                       p2010_name: "SanfranI_03996.flt",
                                       p2010_zmax: 313.4982,
                                       p2010_zmin: 287.8995,
                                       peak_1st_m: 96.01,
                                       rangecm_1s: 455,
                                       sf16_bldgi: "201006.0139731",
                                       stdcm_1st: 75.93722191,
                                       varietycm_: 204,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "rear",
                                       color: "blue"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42783695000004,
                                       37.726356752000015
                                       ],
                                       [
                                       -122.427849289,
                                       37.72634045900003
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 139731,
                                       area_id: 139731,
                                       cells50cm_: 367,
                                       globalid: "{15A43D02-BAE8-43E5-9013-833DA708F6C7}",
                                       gnd1st_del: 6.64,
                                       gnd_cells5: 367,
                                       gnd_majori: 8968,
                                       gnd_maxcm: 9016,
                                       gnd_meancm: 8901.28065395,
                                       gnd_median: 8905,
                                       gnd_min_m: 87.51,
                                       gnd_mincm: 8751,
                                       gnd_minori: 8752,
                                       gnd_rangec: 265,
                                       gnd_stdcm: 64.12071578,
                                       gnd_variet: 201,
                                       hgt_cells5: 367,
                                       hgt_majori: 549,
                                       hgt_maxcm: 660,
                                       hgt_meancm: 510.98092643,
                                       hgt_median: 5.29,
                                       hgt_medi_1: 529,
                                       hgt_mincm: 142,
                                       hgt_minori: 142,
                                       hgt_rangec: 518,
                                       hgt_stdcm: 104.59217369,
                                       hgt_variet: 224,
                                       majoritycm: 9415,
                                       maxcm_1st: 9601,
                                       mblr: "SF5957031",
                                       meancm_1st: 9412.25340599,
                                       median_1st: 94.15,
                                       mediancm_1: 9415,
                                       mincm_1st: 9146,
                                       minoritycm: 9146,
                                       p2010_name: "SanfranI_03996.flt",
                                       p2010_zmax: 313.4982,
                                       p2010_zmin: 287.8995,
                                       peak_1st_m: 96.01,
                                       rangecm_1s: 455,
                                       sf16_bldgi: "201006.0139731",
                                       stdcm_1st: 75.93722191,
                                       varietycm_: 204,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "rear",
                                       color: "blue"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.427849289,
                                       37.72634045900003
                                       ],
                                       [
                                       -122.42784931300002,
                                       37.72634041700002
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 142744,
                                       area_id: 142744,
                                       cells50cm_: 360,
                                       globalid: "{9D71A0CA-0825-4851-941B-A9C4DE7B3058}",
                                       gnd1st_del: 6.33,
                                       gnd_cells5: 360,
                                       gnd_majori: 8953,
                                       gnd_maxcm: 8957,
                                       gnd_meancm: 8890.50277778,
                                       gnd_median: 8931,
                                       gnd_min_m: 86.24,
                                       gnd_mincm: 8624,
                                       gnd_minori: 8624,
                                       gnd_rangec: 333,
                                       gnd_stdcm: 83.01927482,
                                       gnd_variet: 145,
                                       hgt_cells5: 360,
                                       hgt_majori: 311,
                                       hgt_maxcm: 592,
                                       hgt_meancm: 351.38333333,
                                       hgt_median: 3.31,
                                       hgt_medi_1: 331,
                                       hgt_mincm: 199,
                                       hgt_minori: 199,
                                       hgt_rangec: 393,
                                       hgt_stdcm: 91.16327081,
                                       hgt_variet: 202,
                                       majoritycm: 9259,
                                       maxcm_1st: 9331,
                                       mblr: "SF5957032",
                                       meancm_1st: 9241.89444444,
                                       median_1st: 92.57,
                                       mediancm_1: 9257,
                                       mincm_1st: 9121,
                                       minoritycm: 9121,
                                       p2010_name: "SanfranI_03991.flt",
                                       p2010_zmax: 322.5828,
                                       p2010_zmin: 274.2325,
                                       peak_1st_m: 93.31,
                                       rangecm_1s: 210,
                                       sf16_bldgi: "201006.0142744",
                                       stdcm_1st: 35.29250742,
                                       varietycm_: 128,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "rear",
                                       color: "blue"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42774922299998,
                                       37.726438261
                                       ],
                                       [
                                       -122.427749235,
                                       37.726438230999975
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 142744,
                                       area_id: 142744,
                                       cells50cm_: 360,
                                       globalid: "{9D71A0CA-0825-4851-941B-A9C4DE7B3058}",
                                       gnd1st_del: 6.33,
                                       gnd_cells5: 360,
                                       gnd_majori: 8953,
                                       gnd_maxcm: 8957,
                                       gnd_meancm: 8890.50277778,
                                       gnd_median: 8931,
                                       gnd_min_m: 86.24,
                                       gnd_mincm: 8624,
                                       gnd_minori: 8624,
                                       gnd_rangec: 333,
                                       gnd_stdcm: 83.01927482,
                                       gnd_variet: 145,
                                       hgt_cells5: 360,
                                       hgt_majori: 311,
                                       hgt_maxcm: 592,
                                       hgt_meancm: 351.38333333,
                                       hgt_median: 3.31,
                                       hgt_medi_1: 331,
                                       hgt_mincm: 199,
                                       hgt_minori: 199,
                                       hgt_rangec: 393,
                                       hgt_stdcm: 91.16327081,
                                       hgt_variet: 202,
                                       majoritycm: 9259,
                                       maxcm_1st: 9331,
                                       mblr: "SF5957032",
                                       meancm_1st: 9241.89444444,
                                       median_1st: 92.57,
                                       mediancm_1: 9257,
                                       mincm_1st: 9121,
                                       minoritycm: 9121,
                                       p2010_name: "SanfranI_03991.flt",
                                       p2010_zmax: 322.5828,
                                       p2010_zmin: 274.2325,
                                       peak_1st_m: 93.31,
                                       rangecm_1s: 210,
                                       sf16_bldgi: "201006.0142744",
                                       stdcm_1st: 35.29250742,
                                       varietycm_: 128,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "rear",
                                       color: "blue"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.427749235,
                                       37.726438230999975
                                       ],
                                       [
                                       -122.42774931500003,
                                       37.726438125000016
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 142744,
                                       area_id: 142744,
                                       cells50cm_: 360,
                                       globalid: "{9D71A0CA-0825-4851-941B-A9C4DE7B3058}",
                                       gnd1st_del: 6.33,
                                       gnd_cells5: 360,
                                       gnd_majori: 8953,
                                       gnd_maxcm: 8957,
                                       gnd_meancm: 8890.50277778,
                                       gnd_median: 8931,
                                       gnd_min_m: 86.24,
                                       gnd_mincm: 8624,
                                       gnd_minori: 8624,
                                       gnd_rangec: 333,
                                       gnd_stdcm: 83.01927482,
                                       gnd_variet: 145,
                                       hgt_cells5: 360,
                                       hgt_majori: 311,
                                       hgt_maxcm: 592,
                                       hgt_meancm: 351.38333333,
                                       hgt_median: 3.31,
                                       hgt_medi_1: 331,
                                       hgt_mincm: 199,
                                       hgt_minori: 199,
                                       hgt_rangec: 393,
                                       hgt_stdcm: 91.16327081,
                                       hgt_variet: 202,
                                       majoritycm: 9259,
                                       maxcm_1st: 9331,
                                       mblr: "SF5957032",
                                       meancm_1st: 9241.89444444,
                                       median_1st: 92.57,
                                       mediancm_1: 9257,
                                       mincm_1st: 9121,
                                       minoritycm: 9121,
                                       p2010_name: "SanfranI_03991.flt",
                                       p2010_zmax: 322.5828,
                                       p2010_zmin: 274.2325,
                                       peak_1st_m: 93.31,
                                       rangecm_1s: 210,
                                       sf16_bldgi: "201006.0142744",
                                       stdcm_1st: 35.29250742,
                                       varietycm_: 128,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "rear",
                                       color: "blue"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42774931500003,
                                       37.726438125000016
                                       ],
                                       [
                                       -122.42776395499999,
                                       37.72641649799999
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 142744,
                                       area_id: 142744,
                                       cells50cm_: 360,
                                       globalid: "{9D71A0CA-0825-4851-941B-A9C4DE7B3058}",
                                       gnd1st_del: 6.33,
                                       gnd_cells5: 360,
                                       gnd_majori: 8953,
                                       gnd_maxcm: 8957,
                                       gnd_meancm: 8890.50277778,
                                       gnd_median: 8931,
                                       gnd_min_m: 86.24,
                                       gnd_mincm: 8624,
                                       gnd_minori: 8624,
                                       gnd_rangec: 333,
                                       gnd_stdcm: 83.01927482,
                                       gnd_variet: 145,
                                       hgt_cells5: 360,
                                       hgt_majori: 311,
                                       hgt_maxcm: 592,
                                       hgt_meancm: 351.38333333,
                                       hgt_median: 3.31,
                                       hgt_medi_1: 331,
                                       hgt_mincm: 199,
                                       hgt_minori: 199,
                                       hgt_rangec: 393,
                                       hgt_stdcm: 91.16327081,
                                       hgt_variet: 202,
                                       majoritycm: 9259,
                                       maxcm_1st: 9331,
                                       mblr: "SF5957032",
                                       meancm_1st: 9241.89444444,
                                       median_1st: 92.57,
                                       mediancm_1: 9257,
                                       mincm_1st: 9121,
                                       minoritycm: 9121,
                                       p2010_name: "SanfranI_03991.flt",
                                       p2010_zmax: 322.5828,
                                       p2010_zmin: 274.2325,
                                       peak_1st_m: 93.31,
                                       rangecm_1s: 210,
                                       sf16_bldgi: "201006.0142744",
                                       stdcm_1st: 35.29250742,
                                       varietycm_: 128,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "rear",
                                       color: "blue"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42776395499999,
                                       37.72641649799999
                                       ],
                                       [
                                       -122.427780881,
                                       37.726396592000015
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 142744,
                                       area_id: 142744,
                                       cells50cm_: 360,
                                       globalid: "{9D71A0CA-0825-4851-941B-A9C4DE7B3058}",
                                       gnd1st_del: 6.33,
                                       gnd_cells5: 360,
                                       gnd_majori: 8953,
                                       gnd_maxcm: 8957,
                                       gnd_meancm: 8890.50277778,
                                       gnd_median: 8931,
                                       gnd_min_m: 86.24,
                                       gnd_mincm: 8624,
                                       gnd_minori: 8624,
                                       gnd_rangec: 333,
                                       gnd_stdcm: 83.01927482,
                                       gnd_variet: 145,
                                       hgt_cells5: 360,
                                       hgt_majori: 311,
                                       hgt_maxcm: 592,
                                       hgt_meancm: 351.38333333,
                                       hgt_median: 3.31,
                                       hgt_medi_1: 331,
                                       hgt_mincm: 199,
                                       hgt_minori: 199,
                                       hgt_rangec: 393,
                                       hgt_stdcm: 91.16327081,
                                       hgt_variet: 202,
                                       majoritycm: 9259,
                                       maxcm_1st: 9331,
                                       mblr: "SF5957032",
                                       meancm_1st: 9241.89444444,
                                       median_1st: 92.57,
                                       mediancm_1: 9257,
                                       mincm_1st: 9121,
                                       minoritycm: 9121,
                                       p2010_name: "SanfranI_03991.flt",
                                       p2010_zmax: 322.5828,
                                       p2010_zmin: 274.2325,
                                       peak_1st_m: 93.31,
                                       rangecm_1s: 210,
                                       sf16_bldgi: "201006.0142744",
                                       stdcm_1st: 35.29250742,
                                       varietycm_: 128,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "rear",
                                       color: "blue"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.427780881,
                                       37.726396592000015
                                       ],
                                       [
                                       -122.42778097399999,
                                       37.726396475
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 142744,
                                       area_id: 142744,
                                       cells50cm_: 360,
                                       globalid: "{9D71A0CA-0825-4851-941B-A9C4DE7B3058}",
                                       gnd1st_del: 6.33,
                                       gnd_cells5: 360,
                                       gnd_majori: 8953,
                                       gnd_maxcm: 8957,
                                       gnd_meancm: 8890.50277778,
                                       gnd_median: 8931,
                                       gnd_min_m: 86.24,
                                       gnd_mincm: 8624,
                                       gnd_minori: 8624,
                                       gnd_rangec: 333,
                                       gnd_stdcm: 83.01927482,
                                       gnd_variet: 145,
                                       hgt_cells5: 360,
                                       hgt_majori: 311,
                                       hgt_maxcm: 592,
                                       hgt_meancm: 351.38333333,
                                       hgt_median: 3.31,
                                       hgt_medi_1: 331,
                                       hgt_mincm: 199,
                                       hgt_minori: 199,
                                       hgt_rangec: 393,
                                       hgt_stdcm: 91.16327081,
                                       hgt_variet: 202,
                                       majoritycm: 9259,
                                       maxcm_1st: 9331,
                                       mblr: "SF5957032",
                                       meancm_1st: 9241.89444444,
                                       median_1st: 92.57,
                                       mediancm_1: 9257,
                                       mincm_1st: 9121,
                                       minoritycm: 9121,
                                       p2010_name: "SanfranI_03991.flt",
                                       p2010_zmax: 322.5828,
                                       p2010_zmin: 274.2325,
                                       peak_1st_m: 93.31,
                                       rangecm_1s: 210,
                                       sf16_bldgi: "201006.0142744",
                                       stdcm_1st: 35.29250742,
                                       varietycm_: 128,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "rear",
                                       color: "blue"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42778097399999,
                                       37.726396475
                                       ],
                                       [
                                       -122.42778098899998,
                                       37.72639644999998
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 143146,
                                       area_id: 143146,
                                       cells50cm_: 357,
                                       globalid: "{144FA3C4-205D-470E-A13B-2FBE86BF5707}",
                                       gnd1st_del: 6.67,
                                       gnd_cells5: 357,
                                       gnd_majori: 8897,
                                       gnd_maxcm: 9069,
                                       gnd_meancm: 8908.1372549,
                                       gnd_median: 8897,
                                       gnd_min_m: 87.6,
                                       gnd_mincm: 8760,
                                       gnd_minori: 8760,
                                       gnd_rangec: 309,
                                       gnd_stdcm: 79.28105299,
                                       gnd_variet: 222,
                                       hgt_cells5: 357,
                                       hgt_majori: 619,
                                       hgt_maxcm: 668,
                                       hgt_meancm: 508.92156863,
                                       hgt_median: 5.6,
                                       hgt_medi_1: 560,
                                       hgt_mincm: 171,
                                       hgt_minori: 171,
                                       hgt_rangec: 497,
                                       hgt_stdcm: 126.42795364,
                                       hgt_variet: 231,
                                       majoritycm: 9423,
                                       maxcm_1st: 9540,
                                       mblr: "SF5957030",
                                       meancm_1st: 9417.09803922,
                                       median_1st: 94.27,
                                       mediancm_1: 9427,
                                       mincm_1st: 9217,
                                       minoritycm: 9217,
                                       p2010_name: "SanfranI_03997.flt",
                                       p2010_zmax: 313.7134,
                                       p2010_zmin: 287.0901,
                                       peak_1st_m: 95.4,
                                       rangecm_1s: 323,
                                       sf16_bldgi: "201006.0143146",
                                       stdcm_1st: 70.99855146,
                                       varietycm_: 199,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "rear",
                                       color: "blue"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42781119900002,
                                       37.726315055999976
                                       ],
                                       [
                                       -122.427811212,
                                       37.72631502199999
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 143146,
                                       area_id: 143146,
                                       cells50cm_: 357,
                                       globalid: "{144FA3C4-205D-470E-A13B-2FBE86BF5707}",
                                       gnd1st_del: 6.67,
                                       gnd_cells5: 357,
                                       gnd_majori: 8897,
                                       gnd_maxcm: 9069,
                                       gnd_meancm: 8908.1372549,
                                       gnd_median: 8897,
                                       gnd_min_m: 87.6,
                                       gnd_mincm: 8760,
                                       gnd_minori: 8760,
                                       gnd_rangec: 309,
                                       gnd_stdcm: 79.28105299,
                                       gnd_variet: 222,
                                       hgt_cells5: 357,
                                       hgt_majori: 619,
                                       hgt_maxcm: 668,
                                       hgt_meancm: 508.92156863,
                                       hgt_median: 5.6,
                                       hgt_medi_1: 560,
                                       hgt_mincm: 171,
                                       hgt_minori: 171,
                                       hgt_rangec: 497,
                                       hgt_stdcm: 126.42795364,
                                       hgt_variet: 231,
                                       majoritycm: 9423,
                                       maxcm_1st: 9540,
                                       mblr: "SF5957030",
                                       meancm_1st: 9417.09803922,
                                       median_1st: 94.27,
                                       mediancm_1: 9427,
                                       mincm_1st: 9217,
                                       minoritycm: 9217,
                                       p2010_name: "SanfranI_03997.flt",
                                       p2010_zmax: 313.7134,
                                       p2010_zmin: 287.0901,
                                       peak_1st_m: 95.4,
                                       rangecm_1s: 323,
                                       sf16_bldgi: "201006.0143146",
                                       stdcm_1st: 70.99855146,
                                       varietycm_: 199,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "rear",
                                       color: "blue"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.427811212,
                                       37.72631502199999
                                       ],
                                       [
                                       -122.4278412,
                                       37.72627483299999
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 143146,
                                       area_id: 143146,
                                       cells50cm_: 357,
                                       globalid: "{144FA3C4-205D-470E-A13B-2FBE86BF5707}",
                                       gnd1st_del: 6.67,
                                       gnd_cells5: 357,
                                       gnd_majori: 8897,
                                       gnd_maxcm: 9069,
                                       gnd_meancm: 8908.1372549,
                                       gnd_median: 8897,
                                       gnd_min_m: 87.6,
                                       gnd_mincm: 8760,
                                       gnd_minori: 8760,
                                       gnd_rangec: 309,
                                       gnd_stdcm: 79.28105299,
                                       gnd_variet: 222,
                                       hgt_cells5: 357,
                                       hgt_majori: 619,
                                       hgt_maxcm: 668,
                                       hgt_meancm: 508.92156863,
                                       hgt_median: 5.6,
                                       hgt_medi_1: 560,
                                       hgt_mincm: 171,
                                       hgt_minori: 171,
                                       hgt_rangec: 497,
                                       hgt_stdcm: 126.42795364,
                                       hgt_variet: 231,
                                       majoritycm: 9423,
                                       maxcm_1st: 9540,
                                       mblr: "SF5957030",
                                       meancm_1st: 9417.09803922,
                                       median_1st: 94.27,
                                       mediancm_1: 9427,
                                       mincm_1st: 9217,
                                       minoritycm: 9217,
                                       p2010_name: "SanfranI_03997.flt",
                                       p2010_zmax: 313.7134,
                                       p2010_zmin: 287.0901,
                                       peak_1st_m: 95.4,
                                       rangecm_1s: 323,
                                       sf16_bldgi: "201006.0143146",
                                       stdcm_1st: 70.99855146,
                                       varietycm_: 199,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "rear",
                                       color: "blue"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.4278412,
                                       37.72627483299999
                                       ],
                                       [
                                       -122.427841216,
                                       37.726274803000024
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 143146,
                                       area_id: 143146,
                                       cells50cm_: 357,
                                       globalid: "{144FA3C4-205D-470E-A13B-2FBE86BF5707}",
                                       gnd1st_del: 6.67,
                                       gnd_cells5: 357,
                                       gnd_majori: 8897,
                                       gnd_maxcm: 9069,
                                       gnd_meancm: 8908.1372549,
                                       gnd_median: 8897,
                                       gnd_min_m: 87.6,
                                       gnd_mincm: 8760,
                                       gnd_minori: 8760,
                                       gnd_rangec: 309,
                                       gnd_stdcm: 79.28105299,
                                       gnd_variet: 222,
                                       hgt_cells5: 357,
                                       hgt_majori: 619,
                                       hgt_maxcm: 668,
                                       hgt_meancm: 508.92156863,
                                       hgt_median: 5.6,
                                       hgt_medi_1: 560,
                                       hgt_mincm: 171,
                                       hgt_minori: 171,
                                       hgt_rangec: 497,
                                       hgt_stdcm: 126.42795364,
                                       hgt_variet: 231,
                                       majoritycm: 9423,
                                       maxcm_1st: 9540,
                                       mblr: "SF5957030",
                                       meancm_1st: 9417.09803922,
                                       median_1st: 94.27,
                                       mediancm_1: 9427,
                                       mincm_1st: 9217,
                                       minoritycm: 9217,
                                       p2010_name: "SanfranI_03997.flt",
                                       p2010_zmax: 313.7134,
                                       p2010_zmin: 287.0901,
                                       peak_1st_m: 95.4,
                                       rangecm_1s: 323,
                                       sf16_bldgi: "201006.0143146",
                                       stdcm_1st: 70.99855146,
                                       varietycm_: 199,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "rear",
                                       color: "blue"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.42788493699999,
                                       37.726295368000024
                                       ],
                                       [
                                       -122.427894578,
                                       37.726282637
                                       ]
                                       ]
                                       ]
                                       }
                                       },
                                       {
                                       type: "Feature",
                                       properties: {
                                       fid: 143146,
                                       area_id: 143146,
                                       cells50cm_: 357,
                                       globalid: "{144FA3C4-205D-470E-A13B-2FBE86BF5707}",
                                       gnd1st_del: 6.67,
                                       gnd_cells5: 357,
                                       gnd_majori: 8897,
                                       gnd_maxcm: 9069,
                                       gnd_meancm: 8908.1372549,
                                       gnd_median: 8897,
                                       gnd_min_m: 87.6,
                                       gnd_mincm: 8760,
                                       gnd_minori: 8760,
                                       gnd_rangec: 309,
                                       gnd_stdcm: 79.28105299,
                                       gnd_variet: 222,
                                       hgt_cells5: 357,
                                       hgt_majori: 619,
                                       hgt_maxcm: 668,
                                       hgt_meancm: 508.92156863,
                                       hgt_median: 5.6,
                                       hgt_medi_1: 560,
                                       hgt_mincm: 171,
                                       hgt_minori: 171,
                                       hgt_rangec: 497,
                                       hgt_stdcm: 126.42795364,
                                       hgt_variet: 231,
                                       majoritycm: 9423,
                                       maxcm_1st: 9540,
                                       mblr: "SF5957030",
                                       meancm_1st: 9417.09803922,
                                       median_1st: 94.27,
                                       mediancm_1: 9427,
                                       mincm_1st: 9217,
                                       minoritycm: 9217,
                                       p2010_name: "SanfranI_03997.flt",
                                       p2010_zmax: 313.7134,
                                       p2010_zmin: 287.0901,
                                       peak_1st_m: 95.4,
                                       rangecm_1s: 323,
                                       sf16_bldgi: "201006.0143146",
                                       stdcm_1st: 70.99855146,
                                       varietycm_: 199,
                                       link: "http://en.wikipedia.org/wiki/Excelsior_District,_San_Francisco,_California",
                                       name: "Excelsior",
                                       facade: "rear",
                                       color: "blue"
                                       },
                                       geometry: {
                                       type: "MultiLineString",
                                       coordinates: [
                                       [
                                       [
                                       -122.427894578,
                                       37.726282637
                                       ],
                                       [
                                       -122.42789460300003,
                                       37.726282594
                                       ]
                                       ]
                                       ]
                                       }
                                       }
                                       ]
                                       }
                               }
    },
    layers: [
    {
        id: "extrusion",
        type: "fill-extrusion",
        source: "streets",
        paint: {
          "fill-extrusion-color": ["get", "color"],
          // Get the fill-extrusion-color from the source 'color' property.
          // 'fill-extrusion-color': ['get', 'color'],

          // Get fill-extrusion-height from the source 'height' property.
          "fill-extrusion-height": ["get", "gnd1st_del"],

          // Get fill-extrusion-base from the source 'base_height' property.
          "fill-extrusion-base": 0,

          // Make extrusions slightly opaque for see through indoor walls.
          "fill-extrusion-opacity": 0.5
        }
      },
        {
            id: "extrusion_bld",
            type: "fill-extrusion",
            source: "streets",
            paint: {
              // Get fill-extrusion-height from the source 'height' property.
              "fill-extrusion-height": ["get", "gnd1st_del"],

              // Get fill-extrusion-base from the source 'base_height' property.
              "fill-extrusion-base": 0,

              // Make extrusions slightly opaque for see through indoor walls.
              "fill-extrusion-opacity": 0.5
            }
          },
          {
              id: "lots",
              type: "line",
              paint: {
                "line-width": 3,
                "line-color": ["get", "color"],
                "line-dasharray": [4, 1]
              },
              source: "streets"
            }

    ]
});

export default class ThreeDMap extends Component {

  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };

  render() {
    return (
//      <ReactMapGL mapStyle={mapStyle}
//      mapboxApiAccessToken={TOKEN}
//        {...this.state.viewport}
//        onViewportChange={(viewport) => this.setState({viewport})}
//      />
<Iframe url="https://codesandbox.io/embed/sf-opendata-sktm9?fontsize=14"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
    );
  }
}
