import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { QuestionnaireComponent } from '../questionnaire/questionnaire.component';
import { Questionnaire } from '../../models/questionnaire';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, QuestionnaireComponent]
})
export class Tab2Page {
  questionnaire: Questionnaire = {
    name: '(New Questionnaire)',
    description: '',
    dueBy: new Date(),
    questions: [],
  };

  constructor() {}
}
