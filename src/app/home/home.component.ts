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
      link: 'https://drive.google.com/file/d/1giEcbAh_84XYlSP1kVMV3y_I4E0j8gPt/view?usp=sharing'
    },
    {
      image: '/assets/features/Chosen.JPG',
      link: 'https://youtu.be/m3ILEWTkHVg'
    },
    {
      image: '/assets/features/HER.png',
      link: 'https://www.youtube.com/watch?v=lHSf9RJlSRM'
    },
    {
      image: '/assets/features/HIT.jpg',
      link: 'https://vimeo.com/240400929'
    },
    {
      image: '/assets/features/HotPotato.jpeg',
      link: 'https://vimeo.com/341240445'
    },
    {
      image: '/assets/features/ItsComplicated.JPEG',
      link: 'https://vimeo.com/294267879'
    },
    {
      image: '/assets/features/MasterOfNone.png',
      link: 'https://vimeo.com/294267879'
    },
    {
      image: '/assets/features/NiceToMeetYou.jpeg',
      link: 'https://vimeo.com/294267879'
    },
  ]
  
  films2023 = [
    {
      image: '/assets/features/BurnOut.jpeg',
      link: 'https://drive.google.com/file/d/1giEcbAh_84XYlSP1kVMV3y_I4E0j8gPt/view?usp=sharing'
    },
    {
      image: '/assets/features/Chosen.JPG',
      link: 'https://youtu.be/m3ILEWTkHVg'
    },
    {
      image: '/assets/features/HER.png',
      link: 'https://www.youtube.com/watch?v=lHSf9RJlSRM'
    },
    {
      image: '/assets/features/HIT.jpg',
      link: 'https://vimeo.com/240400929'
    },
    {
      image: '/assets/features/HotPotato.jpeg',
      link: 'https://vimeo.com/341240445'
    },
    {
      image: '/assets/features/ItsComplicated.JPEG',
      link: 'https://vimeo.com/294267879'
    },
    {
      image: '/assets/features/MasterOfNone.png',
      link: 'https://vimeo.com/294267879'
    },
    {
      image: '/assets/features/NiceToMeetYou.jpeg',
      link: 'https://vimeo.com/294267879'
    },
  ]

  sponsors = [
    {
      image: '/assets/features/photosite.jpg',
      link: 'https://willhoppin.wixsite.com/images'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
