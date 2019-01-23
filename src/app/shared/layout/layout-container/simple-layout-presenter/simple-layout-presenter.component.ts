import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-simple-layout-presenter',
  templateUrl: './simple-layout-presenter.component.html',
  styleUrls: ['./simple-layout-presenter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleLayoutPresenterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
