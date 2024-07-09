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
      link: '/burn'
    },
    {
      image: '/assets/features/Chosen.JPG',
      link: '/chosen'
    },
    {
      image: '/assets/features/HER.png',
      link: '/her'
    },
    {
      image: '/assets/features/HIT.jpg',
      link: '/hit'
    },
    {
      image: '/assets/features/HotPotato.jpeg',
      link: '/potato'
    },
    {
      image: '/assets/features/ItsComplicated.jpeg',
      link: '/complicated'
    },
    {
      image: '/assets/features/MasterOfNone.png',
      link: '/master'
    },
    {
      image: '/assets/features/NiceToMeetYou.jpeg',
      link: '/nice'
    },
  ]

  films2023_pages = [
    {
      image: '/assets/features/AngelOnMyShoulder.jpeg',
      link: '/angel'
    },
    {
      image: '/assets/features/SecretAdmirer.jpeg',
      link: '/admirer'
    },
    {
      image: '/assets/features/WhatHappenedToCarmenBates.jpeg',
      link: '/carmen'
    },
    {
      image: '/assets/features/TheCore.jpg',
      link: '/core'
    },
    {
      image: '/assets/features/Crowned.jpeg',
      link: '/crowned'
    },
    {
      image: '/assets/features/DivineTiming.jpeg',
      link: '/divine'
    },
    {
      image: '/assets/features/TotallyFine.jpeg',
      link: '/fine'
    },
    {
      image: '/assets/features/ICKS.jpeg',
      link: '/icks'
    },
    {
      image: '/assets/features/OverTheInfluence.jpeg',
      link: '/influence'
    },
    {
      image: '/assets/features/SincerelyJonah.jpg',
      link: '/jonah'
    },
    {
      image: '/assets/features/MyBrothersKeeper.png',
      link: '/keeper'
    },
    {
      image: '/assets/features/Looming.jpg',
      link: '/looming'
    },
    {
      image: '/assets/features/ASearchingSoul.jpg',
      link: '/searching'
    },
    {
      image: '/assets/features/VHS.png',
      link: '/vhs'
    }
  ]

  films2024_pages = [
    {
      image: '/assets/features/running.png',
      link: '/running'
    },
    {
      image: '/assets/features/butterflies.png',
      link: '/butterflies'
    },
    {
      image: '/assets/features/shepherd.png',
      link: '/shepherd'
    },
    {
      image: '/assets/features/hag.png',
      link: '/hag'
    },
    {
      image: '/assets/features/filmschool.png',
      link: '/filmschool'
    },
    {
      image: '/assets/features/lovemachine.png',
      link: '/lovemachine'
    },
    {
      image: '/assets/features/rubber.png',
      link: '/rubber'
    },
    {
      image: '/assets/features/sanctuary.png',
      link: '/sanctuary'
    },
    {
      image: '/assets/features/seasons.png',
      link: '/seasons'
    },
    {
      image: '/assets/features/pageant.png',
      link: '/pageant'
    },
    {
      image: '/assets/features/bayou.png',
      link: '/bayou'
    },
    {
      image: '/assets/features/puppet.png',
      link: '/puppet'
    },
    {
      image: '/assets/features/halffull.png',
      link: '/halffull'
    },
    {
      image: '/assets/features/ember.png',
      link: '/ember'
    },
    {
      image: '/assets/features/withered.jpg',
      link: '/withered'
    },
    {
      image: '/assets/features/openflame.jpg',
      link: '/openflame'
    },
    /* hiding this because director can't be reached
    {
      image: '/assets/features/realfake.png',
      link: '/realfake'
    }
    */
  ]

  recaps = [
    {
      image: '/assets/features/recap2024.png',
      link: '/recap2024'
    },
  ]

  sponsors = [
    {
      image: '/assets/features/7.png',
      link: 'https://www.fotokem.com/'
    },
    {
      image: '/assets/features/8.png',
      link: 'https://shotdeck.com/'
    },
    {
      image: '/assets/features/9.png',
      link: 'https://www.finaldraft.com/'
    },
    {
      image: '/assets/features/1.png',
      link: 'https://www.focusfeatures.com/'
    },
    {
      image: '/assets/features/2.png',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7073111262141820928?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7073111262141820928%29'
    },
    {
      image: '/assets/features/3.png',
      link: 'https://hoorae.co/'
    },
    {
      image: '/assets/features/4.png',
      link: 'https://www.instagram.com/howard.thesis.showcase/'
    },
    {
      image: '/assets/features/5.png',
      link: 'https://www.bcpdigital.com/'
    },
    {
      image: '/assets/features/6.png',
      link: 'https://www.instagram.com/patrickorrphotography_/'
    },
  ]

  businesses = [
    {
      image: '/assets/features/clyde.png',
      link: 'https://www.clydes.com/location/gallery-place/?y_source=1_MzcwMzY2OTAtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D'
    },
    {
      image: '/assets/features/hab.png',
      link: 'https://www.taqueriahabanero.com/'
    },
    {
      image: '/assets/features/smoke.png',
      link: 'https://halfsmoke.com/'
    },
    {
      image: '/assets/features/culture.png',
      link: 'https://www.culturecoffeetoodc.com/'
    },
    {
      image: '/assets/features/butcher.png',
      link: 'https://georgetownbutcher.com/'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
