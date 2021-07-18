import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
  public stock: Stock = new Stock('Test Stock Company', 'TSC', 85, 180);
  public stockClasses = {};
  public stockStyles = {};

  constructor() {
  }

  ngOnInit(): void {
    let diff: number = (this.stock.price / this.stock.previousPrice) - 1;
    let largeChange: boolean = Math.abs(diff) > 0.01;

    this.stockClasses = {
      "positive": this.stock.isPositiveChange(),
      "negative": !this.stock.isPositiveChange(),
      "large-change": largeChange,
      "small-change": !largeChange
    };

    this.stockStyles = {
      "color": this.stock.isPositiveChange() ? "green" : "red",
      "font-size": largeChange ? "1.2em" : "0.8"
    };
  }

  toggleFavorite(event: MouseEvent) {
    console.log('We are toggling the favorite state for this stock', event);
    this.stock.favorite = !this.stock.favorite;
  }
}
