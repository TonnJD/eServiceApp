import { Component, OnInit } from '@angular/core';
import { StorageService, User } from '../../storage.service';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute, Data, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  items;
  role;

  pageservice = [
    {
      id: 'overview',
      title: 'ภาพรวมการทำงาน',
      url: '/menu/overview',
      icon: 'home',
    },
    {
      id: 'job',
      title: 'งานในความรับผิดชอบ',
      url: '/menu/job',
      icon: 'person'
    },
    {
      id: 'sparepart',
      title: 'เบิกอะไหล่',
      url: '/menu/sparepart',
      icon: 'hammer'
    },
    {
      id: 'device',
      title: 'เครื่องและอุปกรณ์คงเหลือ',
      url: '/menu/device',
      icon: 'briefcase'
    },
    {
      id: 'product',
      title: 'สินค้าและคู่มือ',
      url: '/menu/product',
      icon: 'bookmarks'
    },
    {
      id: 'setting',
      title: 'ตั้งค่า',
      url: '/menu/setting',
      icon: 'settings'
    }
  ];

  constructor(
    private storageService: StorageService,
    private menu: MenuController,
    private route: ActivatedRoute,
    private router: Router) {
      this.route.queryParams.subscribe(params => {
        this.items = JSON.parse(params["data"]);
      });
  }

  onOpenItem(item) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(this.items)
      }
    };

    console.log('this.items menu', this.items);
    this.router.navigate([item.url], navigationExtras);    
  }

  ngOnInit() {

  }
}
