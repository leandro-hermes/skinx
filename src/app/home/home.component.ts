import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Arr } from '@gdoor/helpers';
import { merge, Observable } from 'rxjs';
import { filter, map, mapTo } from 'rxjs/operators';
import { ITEMS } from '../items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
      ...ITEMS,
      ...ITEMS,
      ...ITEMS,
      ...ITEMS,
      ...ITEMS,
    ].map((item: any) => {
      const rate = item.price / item.oldPrice;
      item.discount = '-' + Math.round((1 - rate) * 100) + '%';
      item.float = Math.random() * 100;
      return item;
    });
  }
}
