import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  genders!: string[];
  ans!: string[];
  ans2!: string[];
  ans3!: string[];
  ans4!: string[];
  constructor() { }

  ngOnInit(): void {
    this.genders = ['male  ', ' female'];
    this.ans = ['True ', ' False'];
    this.ans2 = ['Sales manager approval, Finance approval, Signature, Legal approval, Countersignature',
      'Finance approval, Legal approval, Sales manager approval, Signature, Countersignature',
      'Sales manager approval, Legal approval, Finance approval, Signature, Countersignature'];
    
    this.ans3 = ['At any time without restriction',
      'As long as I inform my manager beforehand',
      'Only in compliance with our company’s policies and procedures as outlined in the free and open source software policy',
      'As long as I have signed an agreement with the third-party vendor',
    ];
    this.ans4 = ['When onboarding a new employee',
      'When hiring a videographer for the company holiday party',
      'When discussing products and pricing with a potential customer',
    'When soliciting bids for a new human resources management system'];
  }
  submit(testForm: any) {
    console.log('Form Submitted',testForm);
  }

}
