import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-header-presenter',
  templateUrl: './simple-header-presenter.component.html',
  styleUrls: ['./simple-header-presenter.component.css']
})
export class SimpleHeaderPresenterComponent implements OnInit {

  @Input() title: string;
  @Input() links: any[];
  @Output() navigateEvent: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  navigate(link: any) {
    this.navigateEvent.emit(link);
  }

}
