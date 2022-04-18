import { Component, OnInit } from '@angular/core';

import 'ol/ol.css';
import Layer from 'ol/layer/Layer';
import Map from 'ol/Map';
import View from 'ol/View';
import {composeCssTransform} from 'ol/transform';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dwg';


ngOnInit(): void {
  const map = new Map({
    target: 'map',
    view: new View({
      center: [0, 0],
      extent: [-180, -90, 180, 90],
      projection: 'EPSG:4326',
      zoom: 2,
    }),
  });
  
  const svgContainer = document.createElement('div');
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'src/assets/longitude.svg');
  xhr.addEventListener('load', function () {
    const svg = xhr.responseXML.documentElement;
    svgContainer.ownerDocument.importNode(svg);
    svgContainer.appendChild(svg);
  });
  xhr.send();
  
  const width = 2560;
  const height = 1280;
  const svgResolution = 360 / width;
  svgContainer.style.width = width + 'px';
  svgContainer.style.height = height + 'px';
  svgContainer.style.transformOrigin = 'top left';
  svgContainer.className = 'svg-layer';
  
  map.addLayer(
    new Layer({
      render: function (frameState) {
        const scale = svgResolution / frameState.viewState.resolution;
        const center = frameState.viewState.center;
        const size = frameState.size;
        const cssTransform = composeCssTransform(
          size[0] / 2,
          size[1] / 2,
          scale,
          scale,
          frameState.viewState.rotation,
          -center[0] / svgResolution - width / 2,
          center[1] / svgResolution - height / 2
        );
        svgContainer.style.transform = cssTransform;
        svgContainer.style.opacity = this.getOpacity();
        return svgContainer;
      },
    })
  );
}

}

