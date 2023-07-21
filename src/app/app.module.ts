import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WorkComponent } from './work/work.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { CarComponent } from './car/car.component';
import { SkillsComponent } from './skills/skills.component';
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ValidationComponent } from './validation/validation.component';
import {MatToolbarModule} from '@angular/material/toolbar';



import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';

import { MatDialogModule } from '@angular/material/dialog';
import { SignupsComponent } from './signups/signups.component';

import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatDialogRef} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ThemeService } from './theme.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { CurrencyComponent } from './currency/currency.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ContactsComponent } from './contacts/contacts.component';
import { SkillsTableComponent } from './skills-table/skills-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserService } from './user-management/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserTableComponent } from './user-table/user-table.component';
import { UserFormComponent } from './user-form/user-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatMenuModule } from '@angular/material/menu';
import { NgxGraphModule } from '@swimlane/ngx-graph';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    WorkComponent,
    CarComponent,
    SkillsComponent,
    ValidationComponent,
    SignupsComponent,
    DialogComponent,
    CurrencyComponent,
    ContactsComponent,
    SkillsTableComponent,
    UserManagementComponent,
    UserTableComponent,
    UserFormComponent,
    DashboardComponent,
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    RouterModule,
    MatCheckboxModule,
    MatCardModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatExpansionModule,
    MatTableModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTabsModule,
    
    MatButtonModule,
    
    MatDialogModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule, 
    MatGridListModule,
    MatPaginatorModule,
    HttpClientModule,
    FormsModule,
    MatMenuModule,
    NgxGraphModule 
    
  ],
  providers: [ThemeService,UserService],
  bootstrap: [AppComponent],

})
export class AppModule { }










// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
// import { SideNavComponent } from './side-nav/side-nav.component';
// import { AboutComponent } from './about/about.component';
// import { ContactComponent } from './contact/contact.component';
// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';
// import { NotFoundComponent } from './not-found/not-found.component';
// import { WorkComponent } from './work/work.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HeaderComponent,
//     FooterComponent,
//     SideNavComponent,
//     AboutComponent,
//     ContactComponent,
//     HomeComponent,
//     LoginComponent,
//     SignupComponent,
//     NotFoundComponent,
//     WorkComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
