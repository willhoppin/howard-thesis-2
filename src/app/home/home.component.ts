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
      link: 'https://youtu.be/TsMi6PK2Onk'
    },
    {
      image: '/assets/features/Chosen.JPG',
      link: 'https://youtu.be/O96QTURkgJE'
    },
    {
      image: '/assets/features/HER.png',
      link: 'https://youtu.be/vyHthRq4wVM'
    },
    {
      image: '/assets/features/HIT.jpg',
      link: 'https://youtu.be/FdGW86Aef-c'
    },
    {
      image: '/assets/features/HotPotato.jpeg',
      link: 'https://youtu.be/uItJaKlU0FE'
    },
    {
      image: '/assets/features/ItsComplicated.jpeg',
      link: 'https://youtu.be/8lq0T2Qvq-Y'
    },
    {
      image: '/assets/features/MasterOfNone.png',
      link: 'https://youtu.be/KDOpxy8U5Is'
    },
    {
      image: '/assets/features/NiceToMeetYou.jpeg',
      link: 'https://youtu.be/g6OmY82CePQ'
    },
  ]
  
  films2023 = [
    {
      image: '/assets/features/AngelOnMyShoulder.jpeg',
      link: 'https://youtu.be/bKYt8EiqRY0 '
    },
    {
      image: '/assets/features/Crowned.jpeg',
      link: 'https://youtu.be/HgLKikHsaZA'
    },
    {
      image: '/assets/features/MyBrothersKeeper.png',
      link: 'https://youtu.be/Mc2zfVroQIg'
    },
    {
      image: '/assets/features/OverTheInfluence.jpeg',
      link: 'https://youtu.be/_qZJglVBrso'
    },
    {
      image: '/assets/features/VHS.png',
      link: 'https://youtu.be/TeH27_S0W2g'
    },
    {
      image: '/assets/features/WhatHappenedToCarmenBates.jpeg',
      link: 'https://youtu.be/d29lRn2iqEc'
    },
    {
      image: '/assets/features/TotallyFine.jpeg',
      link: 'https://youtu.be/LN0CompYmPo'
    },
    {
      image: '/assets/features/DivineTiming.jpeg',
      link: 'https://youtu.be/hsTZcGkjAFg'
    },
    {
      image: '/assets/features/SecretAdmirer.jpeg',
      link: 'https://youtu.be/iCz62puGXVw'
    },
    {
      image: '/assets/features/ASearchingSoul.jpg',
      link: 'https://youtu.be/fOt0PlfI9LI'
    },
    {
      image: '/assets/features/SincerelyJonah.jpg',
      link: 'https://youtu.be/qxZmwe9StyA'
    },
    {
      image: '/assets/features/ICKS.jpeg',
      link: 'https://youtu.be/fDvVGzIaoic'
    },
    {
      image: '/assets/features/TheCore.jpg',
      link: 'https://youtu.be/hiBKfpm8fDk'
    },
    {
      image: '/assets/features/Looming.jpg',
      link: 'https://youtu.be/CCEgSX2oNvU'
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