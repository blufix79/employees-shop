import { Component, Input, OnInit } from '@angular/core';
import { version } from './../../../../../package.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() storeName: string = 'Store Name';
  public appVersion = version;
  constructor() {}

  ngOnInit() {}
}
