import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CardData } from '../shared/interfaces/card-data';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'perspective(600px) rotateY(180deg)'
      })),
      state('matched', style({
        visibility: 'false',
        transform: 'scale(0.05)',
        opacity: 0
      })),
      transition('default => flipped', [
        animate('400ms')
      ]),
      transition('flipped => default', [
        animate('400ms')
      ]),
      transition('* => matched', [
        animate('400ms')
      ])
    ])
  ]
})
export class CardComponent implements OnInit {

  @Input() data: CardData
  @Output() cardClicked = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

}
