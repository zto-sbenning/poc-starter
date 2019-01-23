import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header/header.service';
import { Observable } from 'rxjs';
import { HeaderStyle, Link } from '../store/header.state';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.css']
})
export class HeaderContainerComponent implements OnInit {

  styleMap = {
    simple: HeaderStyle.simple,
  };
  style$: Observable<HeaderStyle> = this.header.headerStyle$;
  title$: Observable<string> = this.header.title$;
  links$: Observable<Link[]> = this.header.links$;

  constructor(public header: HeaderService) { }

  ngOnInit() {
  }

}
