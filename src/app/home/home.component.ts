import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  films2022 = [
    {
      image: '/assets/features/BurnOut.jpeg',
      link: 'https://youtu.be/m3ILEWTkHVg'
    },
    {
      image: '/assets/features/Chosen.JPG',
      link: 'https://youtu.be/m3ILEWTkHVg'
    },
    {
      image: '/assets/features/HER.png',
      link: 'https://youtu.be/m3ILEWTkHVg'
    },
    {
      image: '/assets/features/HIT.jpg',
      link: 'https://youtu.be/m3ILEWTkHVg'
    },
    {
      image: '/assets/features/HotPotato.jpeg',
      link: 'https://youtu.be/m3ILEWTkHVg'
    },
    {
      image: '/assets/features/ItsComplicated.jpeg',
      link: 'https://youtu.be/m3ILEWTkHVg'
    },
    {
      image: '/assets/features/MasterOfNone.png',
      link: 'https://youtu.be/m3ILEWTkHVg'
    },
    {
      image: '/assets/features/NiceToMeetYou.jpeg',
      link: 'https://youtu.be/m3ILEWTkHVg'
    },
  ]
  
  films2023 = [
    {
      image: '/assets/features/BurnOut.jpeg',
      link: 'https://youtu.be/m3ILEWTkHVg'
    },
    {
      image: '/assets/features/Chosen.JPG',
      link: 'https://youtu.be/m3ILEWTkHVg'
    },
    {
      image: '/assets/features/HER.png',
      link: 'https://youtu.be/m3ILEWTkHVg'
    },
    {
      image: '/assets/features/HIT.jpg',
      link: 'https://youtu.be/m3ILEWTkHVg'
    },
    {
      image: '/assets/features/HotPotato.jpeg',
      link: 'https://youtu.be/m3ILEWTkHVg'
    },
    {
      image: '/assets/features/ItsComplicated.jpeg',
      link: 'https://youtu.be/m3ILEWTkHVg'
    },
    {
      image: '/assets/features/MasterOfNone.png',
      link: 'https://youtu.be/m3ILEWTkHVg'
    },
    {
      image: '/assets/features/NiceToMeetYou.jpeg',
      link: 'https://youtu.be/m3ILEWTkHVg'
    },
  ]

  sponsors = [
    {
      image: '/assets/features/BurnOut.jpeg',
      link: 'https://youtu.be/m3ILEWTkHVg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
