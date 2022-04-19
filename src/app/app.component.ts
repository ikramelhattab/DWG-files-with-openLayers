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

}

}

