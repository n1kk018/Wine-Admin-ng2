import {Injectable} from '@angular/core';

@Injectable()
export class TodoService {

  private _todoList = [
    { text: 'Market product analysis (white wine + champagne) - benchmark around 12 months' },
    { text: 'Backup database' },
    { text: 'WineEXPO China 2017 - Cyril - 2 presentations' },
    { text: 'Discussion with suppliers to integrate new products' },
    { text: 'Simul erroribus ad usu' },
    { text: 'Ei cum solet appareat, ex est graeci mediocritatem' },
    { text: 'Get in touch with akveo team' },
    { text: 'Write email to business cat' },
    { text: 'Have fun with blur admin' },
    { text: 'What do you think?' },
  ];

  getTodoList() {
    return this._todoList;
  }
}
