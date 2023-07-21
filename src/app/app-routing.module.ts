import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { CarComponent } from './car/car.component';
import { SkillsComponent } from './skills/skills.component';
import { SignupsComponent } from './signups/signups.component';

import { DialogComponent} from './dialog/dialog.component';

import {CurrencyComponent} from './currency/currency.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SkillsTableComponent } from './skills-table/skills-table.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserTableComponent } from './user-table/user-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'work', component: WorkComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'signup', component: SignupComponent },
  {path:'car' , component: CarComponent },
  {path:'signups' , component: SignupsComponent },
  { path: 'currency', component: CurrencyComponent },
 {path:'skillstable', component:SkillsTableComponent},
 {path:'users', component:UserManagementComponent},
 {path:'usertable', component:UserTableComponent},
{path:'dashboard', component:DashboardComponent},
  { path: '**', redirectTo: '' },
  {path :'dialog' , component: DialogComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }






// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { WorkComponent } from './work/work.component';
// import { ContactComponent } from './contact/contact.component';
// import { FormsModule } from '@angular/forms';

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'about', component: AboutComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'work', component: WorkComponent },
//   { path: 'contact', component: ContactComponent },
//   { path: 'signup', component: SignupComponent },
//   { path: 'home', component: HomeComponent },
//   { path: '**', redirectTo: '' }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes),FormsModule],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }







// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { WorkComponent } from './work/work.component';
// import { ContactComponent } from './contact/contact.component';
// import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';

// const routes: Routes = [
//   { path: '', component: HomeComponent ,children:[
//     {path: 'about' ,component: AboutComponent,children:[
//       { path: 'work', component: WorkComponent ,children:[ 
//         { path: 'login', component: LoginComponent ,children:[
//           {path: 'contact', component: ContactComponent,children:[
//             { path: 'signup', component: SignupComponent }
//           ] },
//               { path: 'signup', component: SignupComponent }
//         ]},
//         {path: 'contact', component: ContactComponent },
//               { path: 'signup', component: SignupComponent }
//       ] },
//     { path: 'login', component: LoginComponent },
//     {path: 'contact', component: ContactComponent },
//           { path: 'signup', component: SignupComponent }
//     ]},
//     { path: 'work', component: WorkComponent },
//     { path: 'login', component: LoginComponent },
//     {path: 'contact', component: ContactComponent },
//           { path: 'signup', component: SignupComponent }
//   ] },
//   {
//     path: 'about',
//     component: AboutComponent,
//     children: [
//       { path: 'work', component: WorkComponent },
//       {
//         path: 'contact',
//         component: ContactComponent,
//         children: [
//           { path: 'login', component: LoginComponent },
//           { path: 'signup', component: SignupComponent }
//         ]
//       }
//     ]
//   },
//   { path: '**', redirectTo: '' }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}













// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';

// import { ContactComponent } from './contact/contact.component';
// import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';
// import { WorkComponent } from './work/work.component';
// import { NotFoundComponent } from './not-found/not-found.component';
// const routes: Routes = [
//   { path: '**', component: NotFoundComponent }
// ];

// @NgModule({
//   imports: [ RouterModule.forRoot(routes) ],
//   exports: [ RouterModule ]
// })
// export class AppRoutingModule { }





// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
