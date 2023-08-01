import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angel',
  templateUrl: './angel.component.html',
  styleUrls: ['./angel.component.scss']
})
export class AngelComponent implements OnInit {

  related = [
    {
      image: '/assets/features/mb-code.png',
      link: '/magic-binder'
    },
    {
      image: '/assets/features/mb-com-code.png',
      link: '/magic-binder-com'
    },
    {
      image: '/assets/features/pi-code.png',
      link: '/prod-ind'
    },
    {
      image: '/assets/features/willflix-code.png',
      link: '/willflix'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
