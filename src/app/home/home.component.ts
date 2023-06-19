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
      link: 'https://www.focusfeatures.com/'
    },
    {
      image: '/assets/features/BurnOut.jpeg',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7073111262141820928?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7073111262141820928%29'
    },
    {
      image: '/assets/features/BurnOut.jpeg',
      link: 'https://hoorae.co/'
    },
    {
      image: '/assets/features/BurnOut.jpeg',
      link: 'https://www.instagram.com/howard.thesis.showcase/'
    },
    {
      image: '/assets/features/BurnOut.jpeg',
      link: 'https://www.bcpdigital.com/'
    },
    {
      image: '/assets/features/BurnOut.jpeg',
      link: 'https://www.instagram.com/patrickorrphotography_/'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
