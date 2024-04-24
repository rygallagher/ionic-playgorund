import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonCardContent, IonCardTitle, IonCardSubtitle, IonCard, IonCardHeader } from "@ionic/angular/standalone";

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  imports: [IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader],
  standalone: true,
})
export class ExploreContainerComponent {
  constructor(private router: Router) {}

  onClick(path: string) {
    this.router.navigate(['tabs', path]);
  }
}
