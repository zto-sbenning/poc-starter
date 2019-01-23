import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../services/layout/layout.service';
import { LayoutStyle } from '../store/layout.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.css']
})
export class LayoutContainerComponent implements OnInit {

  styleMap = {
    simple: LayoutStyle.simple,
  };
  style$: Observable<LayoutStyle> = this.layout.layoutStyle$;

  constructor(public layout: LayoutService) { }

  ngOnInit() {
  }

}
