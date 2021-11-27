import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id?: number;

  img1?: string;
  img2?: string;

  private readonly _images = {
    '1': '/assets/img/items/imagem 1.jpeg',
    '2': '/assets/img/items/imagem 2.jpg',
    '3': '/assets/img/items/imagem 3.jpg',
    '4': '/assets/img/items/imagem 4.jpg',
    '5': '/assets/img/items/imagem 5.png',
    '6': '/assets/img/items/imagem 6.jpg',
  };

  constructor(
    private readonly _route: ActivatedRoute,
  ) { }

  public ngOnInit(): void {
    this.id = Number(this._route.snapshot.params.id);
    // @ts-ignore
    this.img1 = this._images[this.id];
    // @ts-ignore
    this.img2 = this._images[this.id].replace('.', '.2.');
  }

}
