import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../_services/menu.service';


@Component({
  selector: 'app-menu-table',
  templateUrl: './menu-table.component.html',
  styleUrls: ['./menu-table.component.scss']
})
export class MenuTableComponent implements OnInit {
  menu = [{
    menu_name: "Chaufa",
    menu_price: 15,
    created_date:"2021/09/10",
    modified_date:"2021/09/10"
  }
  ]
  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.menuService.getMenu().subscribe(data => {
    this.menu = data;
    })
  }

}
