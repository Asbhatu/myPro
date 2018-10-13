import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { TrainingComponent } from './training/training.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [

 
  
  { path:'',redirectTo:'home',pathMatch:'full'},
  { path: 'home',component:HomeComponent},
  { path: 'training', component:TrainingComponent},
  { path: 'register', component:RegisterComponent}

 
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
