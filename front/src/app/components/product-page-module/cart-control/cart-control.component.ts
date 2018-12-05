import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-cart-control',
  templateUrl: './cart-control.component.html',
  styleUrls: ['./cart-control.component.css']
})
export class CartControlComponent implements OnInit {
  form;
  stock = true; // TODO : faire une requete pour recuperer la valeur du stock
  quantities = 0;

  constructor(
    private fb: FormBuilder,
    ) {
    this.form = fb.group({
      quantities: ['', [
          Validators.required,
          Validators.min(1)
          // Validators.email
        ]
        ]
    });
  }

  ngOnInit() {
    console.log(this.quantities);
  }

  addToCart(cart) {
    console.log('ajouté au panié', cart);
  }

}
