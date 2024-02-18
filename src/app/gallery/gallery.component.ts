import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Photo {
  id: number;
  src: string;
  title: string;
}
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  photos: Photo[] = [
    { id: 1, src: 'assets/photo1.webp', title: 'Photo 1' },
    { id: 2, src: 'assets/photo2.jpg', title: 'Photo 2' },
    { id: 3, src: 'assets/photo3.png', title: 'Photo 3' },
    { id: 4, src: 'assets/photo4.webp', title: 'Photo 4' },
    { id: 5, src: 'assets/photo5.webp', title: 'Photo 5' },
    { id: 6, src: 'assets/photo6.webp', title: 'Photo 6' },
    { id: 7, src: 'assets/photo7.jpg', title: 'Photo 7' },
    { id: 8, src: 'assets/photo8.webp', title: 'Photo 8' }
  ];
  selectedPhotoIndex = 0;
  slideshowActive = false;
  slideshowInterval: any;

  previousPhoto(): void {
    if (this.selectedPhotoIndex > 0) {
      this.selectedPhotoIndex--;
    }
  }

  nextPhoto(): void {
    if (this.selectedPhotoIndex < this.photos.length - 1) {
      this.selectedPhotoIndex++;
    }
  }

  isFirstPhoto(): boolean {
    return this.selectedPhotoIndex === 0;
  }

  isLastPhoto(): boolean {
    return this.selectedPhotoIndex === this.photos.length - 1;
  }

  startSlideshow(): void {
    this.slideshowActive = true;
    this.slideshowInterval = setInterval(() => {
      this.nextPhoto();
    }, 3000);
  }

  stopSlideshow(): void {
    this.slideshowActive = false;
    clearInterval(this.slideshowInterval);
  }


}
