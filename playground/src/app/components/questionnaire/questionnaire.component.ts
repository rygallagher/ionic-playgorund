import { Component, Input, ViewChild } from '@angular/core';
import { Questionnaire, QuestionnaireForm } from '../../models/questionnaire';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Question, QuestionForm } from '../../models/question';
import { DatePipe } from '@angular/common';
import { IonButton, IonModal, IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonItem, IonInput } from "@ionic/angular/standalone";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
  standalone: true,
  imports: [IonInput, IonItem, IonContent, IonTitle, IonButtons, IonToolbar, IonHeader, IonModal, IonButton]
})
export class QuestionnaireComponent {
  @ViewChild(IonModal) modal!: IonModal;

  @Input()
  get questionnaire(): Questionnaire {
    return this._questionnaire;
  }
  set questionnaire(questionnaire: Questionnaire) {
    this._questionnaire = questionnaire;
    this.buildFormWithQuestionnaire(questionnaire);
  }
  _questionnaire!: Questionnaire;

  form = new FormGroup<QuestionnaireForm>({
    name: new FormControl(null),
    description: new FormControl(null),
    dueBy: new FormControl(null),
    questions: new FormArray<FormGroup<QuestionForm>>([]),
  });

  buildFormWithQuestionnaire(questionnaire: Questionnaire): FormGroup<QuestionnaireForm> {
    const form = new FormGroup<QuestionnaireForm>({
      name: new FormControl(null),
      description: new FormControl(null),
      dueBy: new FormControl(null),
      questions: new FormArray<FormGroup<QuestionForm>>([]),
    });

    const dueByStr = questionnaire.dueBy != null ? new DatePipe('en-us').transform('mm/dd/yyyy') : null;

    form.controls.name.setValue(questionnaire.name ?? null);
    form.controls.description.setValue(questionnaire.description ?? null);
    form.controls.dueBy.setValue(dueByStr);

    questionnaire.questions.forEach(question => form.controls.questions.push(this.buildFormWithQuestion(question)));

    return form;
  }

  buildFormWithQuestion(question: Question): FormGroup<QuestionForm> {
    return new FormGroup<QuestionForm>({
      name: new FormControl(question.name),
      type: new FormControl(question.type),
    });
  }

  cancelQuestion(): void {
    this.modal.dismiss(null, 'cancel');
  }

  confirmQuestion(): void {
    //TODO:
  }
}
