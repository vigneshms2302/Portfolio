import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

interface Skill {
  skill: string;
  proficiencyLevel: string;
  experience: number;
  certification: boolean;
}

@Component({
  selector: 'app-skills-table',
  templateUrl: './skills-table.component.html',
  styleUrls: ['./skills-table.component.css']
})
export class SkillsTableComponent implements OnInit {
  displayedColumns: string[] = ['skill', 'proficiencyLevel', 'experience', 'certification', 'remove'];
  dataSource: MatTableDataSource<Skill> = new MatTableDataSource<Skill>();
  skillForm: FormGroup;
  @ViewChild('addSkillDialog') addSkillDialog!: TemplateRef<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  skills: Skill[] = [];
  showRemoveColumn: boolean = false;
  filteredSkills: Skill[] = [];
  searchTerm: string = '';

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder) {
    this.skillForm = this.formBuilder.group({
      skill: ['', Validators.required],
      proficiencyLevel: ['', Validators.required],
      experience: ['', Validators.required],
      certification: [false]
    });
  }

  ngOnInit(): void {
    this.retrieveSkillsData();
    this.filteredSkills = this.skills.slice(); // Initialize filteredSkills with all skills
    this.dataSource = new MatTableDataSource<Skill>(this.filteredSkills);
    this.dataSource.paginator = this.paginator;
  }

  openAddSkillDialog() {
    this.skillForm.reset(); // Reset the form fields
    const dialogRef = this.dialog.open(this.addSkillDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const skillData = this.skillForm.value;
        const newSkill: Skill = {
          skill: skillData.skill,
          proficiencyLevel: skillData.proficiencyLevel,
          experience: skillData.experience,
          certification: skillData.certification
        };
        this.skills.push(newSkill);
        this.saveSkillsData();
        this.filterSkills();
        this.skillForm.reset();
      }
    });
  }

  toggleRemoveColumn() {
    this.showRemoveColumn = !this.showRemoveColumn;
  }

  removeSkill(skill: Skill) {
    const index = this.skills.indexOf(skill);
    if (index > -1) {
      this.skills.splice(index, 1);
      this.saveSkillsData();
      this.filterSkills();
    }
  }

  addSkill() {
    if (this.skillForm.valid) {
      const skillData = this.skillForm.value;
      const newSkill: Skill = {
        skill: skillData.skill,
        proficiencyLevel: skillData.proficiencyLevel,
        experience: skillData.experience,
        certification: skillData.certification
      };
      this.skills.push(newSkill);
      this.saveSkillsData();
      this.filterSkills();
      this.dialog.closeAll();
    }
  }

  saveSkillsData() {
    localStorage.setItem('skillsData', JSON.stringify(this.skills));
  }

  retrieveSkillsData() {
    const skillsData = localStorage.getItem('skillsData');
    if (skillsData) {
      this.skills = JSON.parse(skillsData);
      this.filterSkills();
    }
  }
  

  filterSkills() {
    this.filteredSkills = this.skills.filter(skill =>
      skill.skill.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.dataSource = new MatTableDataSource<Skill>(this.filteredSkills);
    this.dataSource.paginator = this.paginator;
  }
}








// import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
// import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
// import { MatDialog } from '@angular/material/dialog';
// import { MatTableDataSource } from '@angular/material/table';

// interface Skill {
//   skill: string;
//   proficiencyLevel: string;
//   experience: number;
//   certification: boolean;
// }

// @Component({
//   selector: 'app-skills-table',
//   templateUrl: './skills-table.component.html',
//   styleUrls: ['./skills-table.component.css']
// })
// export class SkillsTableComponent implements OnInit {

//   displayedColumns: string[] = ['skill', 'proficiencyLevel', 'experience', 'certification', 'remove'];
//   dataSource: MatTableDataSource<Skill> = new MatTableDataSource<Skill>();
//   skillForm: FormGroup;

//   @ViewChild('addSkillDialog') addSkillDialog!: TemplateRef<any>;

//   skills: Skill[] = [];
//   showRemoveColumn: boolean = false;

//   constructor(private dialog: MatDialog, private formBuilder: FormBuilder) {
//     this.skillForm = this.formBuilder.group({
//       skill: ['', Validators.required],
//       proficiencyLevel: ['', Validators.required],
//       experience: ['', Validators.required],
//       certification: [false]
//     });
//   }

//   ngOnInit(): void {
//     this.retrieveSkillsData();
//   }

//   openAddSkillDialog() {
//     const dialogRef = this.dialog.open(this.addSkillDialog);
//     dialogRef.afterClosed().subscribe(result => {
//       if (result) {
//         const skillData = this.skillForm.value;
//         const newSkill: Skill = {
//           skill: skillData.skill,
//           proficiencyLevel: skillData.proficiencyLevel,
//           experience: skillData.experience,
//           certification: skillData.certification
//         };
//         this.skills.push(newSkill);
//         this.saveSkillsData();
//         this.dataSource.data = [...this.skills];
//         this.skillForm.reset();
//       }
//     });
//   }

//   toggleRemoveColumn() {
//     this.showRemoveColumn = !this.showRemoveColumn;
//   }

//   removeSkill(skill: Skill) {
//     const index = this.skills.indexOf(skill);
//     if (index > -1) {
//       this.skills.splice(index, 1);
//       this.saveSkillsData();
//       this.dataSource.data = [...this.skills];
//     }
//   }
//   addSkill() {
//     if (this.skillForm.valid) {
//       const skillData = this.skillForm.value;
//       const newSkill: Skill = {
//         skill: skillData.skill,
//         proficiencyLevel: skillData.proficiencyLevel,
//         experience: skillData.experience,
//         certification: skillData.certification
//       };
//       this.skills.push(newSkill);
//       this.saveSkillsData();
//       this.dataSource.data = [...this.skills];
//       this.dialog.closeAll();
//     }
//   }
//   saveSkillsData() {
//     localStorage.setItem('skillsData', JSON.stringify(this.skills));
//   }

//   retrieveSkillsData() {
//     const skillsData = localStorage.getItem('skillsData');
//     if (skillsData) {
//       this.skills = JSON.parse(skillsData);
//       this.dataSource.data = [...this.skills];
//     }
//   }
// }






// import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
// import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
// import { MatDialog } from '@angular/material/dialog';
// import { MatTableDataSource } from '@angular/material/table';

// @Component({
//   selector: 'app-skills-table',
//   templateUrl: './skills-table.component.html',
//   styleUrls: ['./skills-table.component.css']
// })
// export class SkillsTableComponent implements OnInit {

//   displayedColumns: string[] = ['skill', 'proficiencyLevel', 'experience', 'certification'];
//   dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
//   skillForm: FormGroup;

//   @ViewChild('addSkillDialog') addSkillDialog!: TemplateRef<any>;

//   skills: any[] = [];

//   constructor(private dialog: MatDialog, private formBuilder: FormBuilder) {
//     this.skillForm = this.formBuilder.group({
//       skill: ['', Validators.required],
//       proficiencyLevel: ['', Validators.required],
//       experience: ['', Validators.required],
//       certification: [false]
//     });
//   }

//   ngOnInit(): void {
//     this.retrieveSkillsData();
//   }

//   openAddSkillDialog() {
//     const dialogRef = this.dialog.open(this.addSkillDialog);
//     dialogRef.afterClosed().subscribe(result => {
//       if (result) {
//         const skillData = this.skillForm.value;
//         const newSkill = {
//           skill: skillData.skill,
//           proficiencyLevel: skillData.proficiencyLevel,
//           experience: skillData.experience,
//           certification: skillData.certification
//         };
//         this.skills.push(newSkill);
//         this.saveSkillsData();
//         this.dataSource.data = [...this.skills];
//         this.skillForm.reset();
//       }
//     });
//   }

//   addSkill() {
//     if (this.skillForm.valid) {
//       const skillData = this.skillForm.value;
//       const newSkill = {
//         skill: skillData.skill,
//         proficiencyLevel: skillData.proficiencyLevel,
//         experience: skillData.experience,
//         certification: skillData.certification
//       };
//       this.skills.push(newSkill);
//       this.saveSkillsData();
//       this.dataSource.data = [...this.skills];
//       this.dialog.closeAll();
//     }
//   }

//   removeSkill(skill: any) {
//     const index = this.skills.indexOf(skill);
//     if (index > -1) {
//       this.skills.splice(index, 1);
//       this.saveSkillsData();
//       this.dataSource.data = [...this.skills];
//     }
//   }

//   saveSkillsData() {
//     localStorage.setItem('skillsData', JSON.stringify(this.skills));
//   }

//   retrieveSkillsData() {
//     const skillsData = localStorage.getItem('skillsData');
//     if (skillsData) {
//       this.skills = JSON.parse(skillsData);
//       this.dataSource.data = [...this.skills];
//     }
//   }
  
// }
