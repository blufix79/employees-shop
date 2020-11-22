import { StoreService } from './../../services/store.service';
import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Store } from 'src/app/models/Store';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public sidebarMenuOpened = true;
  public storeName = 'Store Name';
  @ViewChild('contentWrapper', { static: false }) contentWrapper;

  constructor(private renderer: Renderer2, private store: StoreService) {
    store.getStoreInfo()
      .subscribe((storeInfo: Store) => {
        document.querySelector('title').text = storeInfo.name + ' Backoffice';
        this.storeName = storeInfo.name;
      },
      error => console.log(error));
  }

  ngOnInit() {
    this.renderer.removeClass(document.querySelector('app-root'), 'login-page');
    this.renderer.removeClass(
      document.querySelector('app-root'),
      'register-page'
    );
  }

  mainSidebarHeight(height) {
    // this.renderer.setStyle(
    //   this.contentWrapper.nativeElement,
    //   'min-height',
    //   height - 114 + 'px'
    // );
  }

  toggleMenuSidebar() {
    if (this.sidebarMenuOpened) {
      this.renderer.removeClass(
        document.querySelector('app-root'),
        'sidebar-open'
      );
      this.renderer.addClass(
        document.querySelector('app-root'),
        'sidebar-collapse'
      );
      this.sidebarMenuOpened = false;
    } else {
      this.renderer.removeClass(
        document.querySelector('app-root'),
        'sidebar-collapse'
      );
      this.renderer.addClass(
        document.querySelector('app-root'),
        'sidebar-open'
      );
      this.sidebarMenuOpened = true;
    }
  }
}
