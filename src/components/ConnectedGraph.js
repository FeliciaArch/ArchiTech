import { Graph } from "react-d3-graph";
import React from "react";
import {Component} from 'react';
import {ToastsContainer, ToastsContainerPosition, ToastsStore} from 'react-toasts';

// graph payload (with minimalist structure)
const data = {
    nodes: [{ id: "Start Address" }, { id: "Project Plan" }, { id: "Zoning Analysis" }, { id: "Permits" }, { id: "Cost Estimates" }, { id: "Project Teams" }],
    links: [{ source: "Start Address", target: "Zoning Analysis" },
            { source: "Zoning Analysis", target: "Permits" },
            { source: "Zoning Analysis", target: "Cost Estimates" },
            { source: "Zoning Analysis", target: "Project Teams" },
            { source: "Project Teams", target: "Cost Estimates" },
            { source: "Project Teams", target: "Permits" },
            { source: "Project Teams", target: "Project Plan" },
            { source: "Cost Estimates", target: "Permits" }]
};

// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
const myConfig = {
    collapsible: true,
     height: 400,
     width: 1000,
    directed: true,
    highlightDegree: 2,
        highlightOpacity: 0.2,
        linkHighlightBehavior: true,
        maxZoom: 12,
        minZoom: 0.05,
        nodeHighlightBehavior: true,
        panAndZoom: false,
            staticGraph: false,
            automaticRearrangeAfterDropNode: true,
            collapsible: true,
            nodeHighlightBehavior: true,
         d3: {
            "alphaTarget": 0.05,
            "gravity": -100,
            "linkLength": 250,
            "linkStrength": 1
          },
        node: {
            highlightStrokeColor: "#fc5c7d",
            labelProperty: n => (n.type == 'app' ? `APP: ${n.id}` : `${n.id}`),
            color: "white",
                    fontColor: "white",
                    fontSize: 20,
                    fontWeight: "normal",
                    highlightColor: "green",
                    highlightFontSize: 14,
                    highlightFontWeight: "bold",
                    highlightStrokeWidth: 1.5,
                    mouseCursor: "crosshair",
                    opacity: 0.9,
                    renderLabel: true,
                    size: 1700,
                    strokeColor: "none",
                    strokeWidth: 1.5,
                    svg: "",
                    symbolType: "circle",
                    viewGenerator: null,
        },
        link: {
            highlightColor: "#fc5c7d",
            mouseCursor: "cursor",
                    opacity: 1,
                    semanticStrokeWidth: true,
                    strokeWidth: 2,
                    type: "STRAIGHT"
        }
};

// graph event callbacks
const onClickGraph = function() {
    window.alert(`Clicked the graph background`);
};

const onClickNode = function(nodeId) {
    ToastsStore.info(`${nodeId}`);

};

const onDoubleClickNode = function(nodeId) {
    window.alert(`Double clicked node ${nodeId}`);
};

const onRightClickNode = function(event, nodeId) {
    window.alert(`Right clicked node ${nodeId}`);
};

const onMouseOverNode = function(nodeId) {
    window.alert(`Mouse over node ${nodeId}`);
};

const onMouseOutNode = function(nodeId) {
    window.alert(`Mouse out node ${nodeId}`);
};

const onClickLink = function(source, target) {
    window.alert(`Clicked link between ${source} and ${target}`);
};

const onRightClickLink = function(event, source, target) {
    window.alert(`Right clicked link between ${source} and ${target}`);
};

const onMouseOverLink = function(source, target) {
    window.alert(`Mouse over in link between ${source} and ${target}`);
};

const onMouseOutLink = function(source, target) {
    window.alert(`Mouse out link between ${source} and ${target}`);
};

const onNodePositionChange = function(nodeId, x, y) {
    window.alert(`Node ${nodeId} is moved to new position. New position is x= ${x} y= ${y}`);
};

export default class ConnectedGraph extends Component {

render () {
  return (<div><Graph
              id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
              data={data}
              config={myConfig}
              onClickNode={onClickNode}
              onClickLink={onClickLink}
          /><ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_CENTER} lightBackground/>
          </div>
          )
}
}
