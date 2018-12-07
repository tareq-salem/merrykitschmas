import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-order-toolbar',
    templateUrl: './order-toolbar.component.html',
    styleUrls: ['./order-toolbar.component.css']
})
export class OrderToolbarComponent implements OnInit {

    orders = ['date', 'prix', 'popularité'];
    constructor() { }

    ngOnInit() {
    }

}
