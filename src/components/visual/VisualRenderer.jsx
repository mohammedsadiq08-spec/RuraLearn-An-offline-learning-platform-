import React from 'react';
import NumberLineVisualizer from './NumberLineVisualizer';
import CoordinatePlaneVisualizer from './CoordinatePlaneVisualizer';
import CircuitVisualizer from './CircuitVisualizer';
import OpticsRayDiagram from './OpticsRayDiagram';
import DataStructureVisualizer from './DataStructureVisualizer';

export default function VisualRenderer({ visualName }) {
  if (!visualName) return null;

  switch (visualName) {
    case 'NumberLineVisualizer':
      return <NumberLineVisualizer />;
    case 'CoordinatePlaneVisualizer':
      return <CoordinatePlaneVisualizer />;
    case 'CircuitVisualizer':
      return <CircuitVisualizer />;
    case 'OpticsRayDiagram':
      return <OpticsRayDiagram />;
    case 'DataStructureVisualizer':
      return <DataStructureVisualizer />;
    case 'GeometryVisualizer':
      return <CoordinatePlaneVisualizer />;
    default:
      return null;
  }
}
