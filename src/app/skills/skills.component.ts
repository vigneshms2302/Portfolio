import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  displayedColumns: string[] = ['skill', 'proficiencyLevel', 'experience', 'certification'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  skillForm: FormGroup = new FormGroup({
    skill: new FormControl(''),
    proficiencyLevel: new FormControl(''),
    experience: new FormControl(''),
    certification: new FormControl(false)
  });
  // selection = new SelectionModel<any>(true, []);

  @ViewChild('addSkillDialog') addSkillDialog!: TemplateRef<any>;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.data = [
      { skill: 'HTML', proficiencyLevel: '2', experience: '3', certification: true },
      { skill: 'CSS', proficiencyLevel: '3', experience: '5', certification: false }
    ];
  }

  openAddSkillDialog() {
    const dialogRef = this.dialog.open(this.addSkillDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const skillData = this.skillForm.value;
        const newSkill = {
          skill: skillData.skill,
          proficiencyLevel: skillData.proficiencyLevel,
          experience: skillData.experience,
          certification: skillData.certification ? '✓' : '✗' 
        };
        this.dataSource.data.push(newSkill);
        this.dataSource.data = [...this.dataSource.data];
        this.skillForm.reset();
      }
    });
  }
 
  
  addSkill() {
    if (this.skillForm) {
      const formData = this.skillForm.value;
      this.dataSource.data.push(formData);
      this.dataSource.filter = '';
      this.dialog.closeAll();
    }
  }

}



// import { Component , OnInit } from '@angular/core';
// import { MatTableDataSource } from '@angular/material/table';
// import {FormControl, Validators} from '@angular/forms';



// @Component({
//   selector: 'app-skills',
//   templateUrl: './skills.component.html',
//   styleUrls: ['./skills.component.css']
// })

// export class SkillsComponent implements OnInit {
//   data = [
//     { skill: 'html', proficiencyLevel: '2', experience: '3', certification: true },
//     { skill: 'javascript', proficiencyLevel: '4', experience: '5', certification: false }
//   ];

//   columns = ['skill', 'proficiencyLevel', 'experience', 'certification'];

//   addRow() {
//     this.data.push({ skill: '', proficiencyLevel: '', experience: '', certification: false });
//   }

//   removeRow() {
//     this.data.pop();
//   }
//   ngOnInit(): void {
//     // Initialize your component properties or perform any other initialization tasks here
//   }

//   // ...
// }


// import { Component } from '@angular/core';
// import { MatTableDataSource } from '@angular/material/table';
// import {FormControl, Validators} from '@angular/forms';

// export interface Skill {
//   name: string;
//   proficiency: string;
//   experience: string;
// }

// const SKILL_DATA: Skill[] = [
//   { name: 'JavaScript', proficiency: 'Advanced', experience: '2 years' },
//   { name: 'HTML/CSS', proficiency: 'Advanced', experience: '4 years' },
//   { name: 'Angular', proficiency: 'Intermediate', experience: '2 months' },
//   { name: 'C', proficiency: 'Intermediate', experience: '2 years' },
//   { name: 'Python', proficiency: 'Intermediate', experience: '2 years' },
// ];


// @Component({
//   selector: 'app-skills',
//   templateUrl: './skills.component.html',
//   styleUrls: ['./skills.component.css']
// })
// // carSkill:Car
// export class SkillsComponent {
  
//   displayedColumns: string[] = ['name', 'proficiency', 'experience'];
//   skillInformation = new MatTableDataSource<Skill>(SKILL_DATA);
  
//   email = new FormControl('', [Validators.required, Validators.email]);

//   getErrorMessage() {
//     if (this.email.hasError('required')) {
//       return 'You must enter a value';
//     }

//     return this.email.hasError('email') ? 'Not a valid email' : '';
//   }

// }
