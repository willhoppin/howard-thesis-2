import { Component, OnInit } from '@angular/core';

interface ImageData {
  path: string;
  aspectRatio: number;
}

@Component({
  selector: 'app-recap2024',
  templateUrl: './recap2024.component.html',
  styleUrls: ['./recap2024.component.scss']
})
export class Recap2024Component implements OnInit {
  imagePaths: ImageData[] = [];
  selectedImage: string | null = null;
  loading: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    const folderPath = 'assets/recaps/2024/';
    const imageCount = 257; // Total number of images

    for (let i = 1; i <= imageCount; i++) {
      if (i !== 94 && i !== 237) { // Exclude images 94 and 237
        const imagePath = `${folderPath}${i}.jpg`;
        this.calculateAspectRatio(imagePath).then(aspectRatio => {
          this.imagePaths.push({ path: imagePath, aspectRatio });
          if (this.imagePaths.length === imageCount - 2) { // Adjust the length check
            this.imagePaths.sort((a, b) => a.aspectRatio - b.aspectRatio);
            this.imagePaths.reverse(); // Reverse the order after sorting
            this.loading = false;
          }
        });
      }
    }
  }

  calculateAspectRatio(imagePath: string): Promise<number> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        resolve(img.width / img.height);
      };
      img.src = imagePath;
    });
  }

  openModal(imagePath: string): void {
    this.selectedImage = imagePath;
  }

  closeModal(): void {
    this.selectedImage = null;
  }
}
