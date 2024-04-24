import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { Question, QuestionForm } from './question';

export interface Questionnaire {
  name: string;
  description: string;
  dueBy: Date;
  questions: Question[];
}

export interface QuestionnaireForm {
  name: FormControl<string | null>;
  description: FormControl<string | null>;
  dueBy: FormControl<string | null>;
  questions: FormArray<FormGroup<QuestionForm>>;
}
