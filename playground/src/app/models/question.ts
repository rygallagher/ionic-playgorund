import { FormControl } from "@angular/forms";

export interface Question {
  name: string;
  type: QuestionType;
}

export interface QuestionForm {
  name: FormControl<string | null>;
  type: FormControl<QuestionType | null>;
}

export enum QuestionType {
  Single = 'Single',
  MultipleChoice = 'MultipleChoice',
  RadioButton = 'RadioButton',
  Checkbox = 'Checkbox',
}
