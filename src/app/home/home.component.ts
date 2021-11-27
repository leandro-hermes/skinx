import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Arr } from '@gdoor/helpers';
import { merge, Observable } from 'rxjs';
import { filter, map, mapTo, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  r = Math.round;

  line1 = [
    // @formatter:off
    { id: 1, title: 'Buterfly Doppler Emerald FN', img1: '/assets/img/items/imagem 1.jpeg',     img2: '/assets/img/items/imagem 1.2.jpeg', price: 70000, oldPrice: 75000 },
    { id: 2, title: 'AWP Gungnir FN', img1: '/assets/img/items/imagem 2.jpg',                  img2: '/assets/img/items/imagem 2.2.jpg', price: 33000, oldPrice: 34000 },
    { id: 3, title: 'M4A4 Howl StraTrek FN', img1: '/assets/img/items/imagem 3.jpg',           img2: '/assets/img/items/imagem 3.2.jpg', price: 30000, oldPrice: 32000 },
    { id: 4, title: 'Baioneta M9 Ruby FN', img1: '/assets/img/items/imagem 4.jpg',             img2: '/assets/img/items/imagem 4.2.jpg', price: 48000 },
    { id: 5, title: 'AK-47 Fire serpent StatTrek FN', img1: '/assets/img/items/imagem 5.png',  img2: '/assets/img/items/imagem 5.2.png', price: 43000 },
    { id: 6, title: 'Skeleton Knife Fade FN', img1: '/assets/img/items/imagem 6.jpg',          img2: '/assets/img/items/imagem 6.2.jpg', price: 17000, oldPrice: 27000 },
    // @formatter:on
  ];

  list$?: Observable<any[]>;

  constructor(
    private readonly _breakpointObserver: BreakpointObserver,
  ) {
  }

  public ngOnInit(): void {
    const one = this._breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small]).pipe(
      filter(({ matches }) => matches),
      mapTo(1),
    );
    const two = this._breakpointObserver.observe([Breakpoints.Medium]).pipe(
      filter(({ matches }) => matches),
      mapTo(2),
    );
    const four = this._breakpointObserver.observe([Breakpoints.Web]).pipe(
      filter(({ matches }) => matches),
      mapTo(4),
    );

    this.list$ = merge(one, two, four).pipe(
      map(cols => Arr.chunk(this.getList(), cols)),
    );
  }

  private getList(): any[] {
    return [
      ...this.line1,
      ...this.line1,
      ...this.line1,
      ...this.line1,
      ...this.line1,
    ].map((item: any) => {
      const rate = item.price / item.oldPrice;
      item.discount = '-' + this.r((1 - rate) * 100) + '%';
      item.float = Math.random() * 100;
      return item;
    });
  }
}
