import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss'],
})
export class SellComponent implements OnInit {
  @ViewChild('text', {static: true})
  public textInput: ElementRef<HTMLInputElement> | null = null;

  messages = [
    { text: 'Hello', from: 'John' },
    { text: 'Hello', from: 'Me' },
    { text: 'I\'m John. How can I help you?', from: 'John' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, animi aperiam cumque doloribus dolorum illo illum impedit incidunt maxime minus necessitatibus nisi porro repellat sapiente, ut. Enim excepturi officiis quaerat.', from: 'John' },
  ];

  constructor() {
  }

  public ngOnInit(): void {
    setTimeout(() => this.textInput?.nativeElement.focus(), 0);
  }

  public send(text: string): void {
    this.messages.push({ text, from: 'Me' });
  }
}
