import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITEMS } from '../items';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DetailComponent implements OnInit {
  id?: number;

  public item?: any;

  constructor(
    private readonly _route: ActivatedRoute,
  ) { }

  public ngOnInit(): void {
    this.id = Number(this._route.snapshot.params.id);
    this.item = this.getItem();
  }

  public getItem(): any {
    return ITEMS.find(item => item.id === this.id);
  }
}
