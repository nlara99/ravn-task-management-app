import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  @Input() tagName!: string;
  private colorClass!: string;

  ngOnInit(): void {
    this.colorClass = this.getRandomClass();
  }

  private getRandomClass(): string {
    const classes = ['green-style', 'yellow-style'];
    const randomIndex = Math.floor(Math.random() * classes.length);
    return classes[randomIndex];
  }

  getColor(): string {
    return this.colorClass;
  }
}