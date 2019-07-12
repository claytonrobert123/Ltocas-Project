import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginpageComponent } from './admin/admin-loginpage/admin-loginpage.component';
import { HomeComponent } from './home/home.component';
import { ClientLoginpageComponent } from './client/client-loginpage/client-loginpage.component';
import { UserLoginpageComponent } from './user/user-loginpage/user-loginpage.component';
import{UserRegistrationpageComponent} from './user/user-registrationpage/user-registrationpage.component'
import { AdminPortalComponent } from './admin/admin-portal/admin-portal.component';
import { ClientPortalComponent } from './client/client-portal/client-portal.component';
import { UserPortalComponent } from './user/user-portal/user-portal.component';
import { CreateClientComponent } from './admin/create-client/create-client.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ClientDashboardComponent } from './client/client-dashboard/client-dashboard.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { CreateQuestionsComponent } from './client/create-questions/create-questions.component';
import { CreateQuestionPaperComponent } from './client/create-question-paper/create-question-paper.component';


const routes: Routes =[
  { path:'admin-loginpage',component:AdminLoginpageComponent},
  { path:'client-loginpage',component:ClientLoginpageComponent},
  { path:'user-loginpage',component:UserLoginpageComponent},
  {path:'home-page',component:HomeComponent},
  {path:'user-registrationpage',component:UserRegistrationpageComponent},

  { path:'admin-portal',component:AdminPortalComponent,
  children: [
    { path:'create-client',component : CreateClientComponent},
  {path:'',redirectTo:'admin-dashboard',pathMatch:'full'},
  { path:'admin-dashboard', component: AdminDashboardComponent}]},


  { path:'client-portal',component:ClientPortalComponent,
  children:[
    {path:'',redirectTo:'client-dashboard',pathMatch:'full'},
    { path:'client-dashboard', component: ClientDashboardComponent},
    { path:'create-questions', component: CreateQuestionsComponent},
    { path:'create-questions-paper', component: CreateQuestionPaperComponent}
  ]},

  {path:'user-portal',component:UserPortalComponent,children:[
    {path:'',redirectTo:'user-dashboard',pathMatch:'full'},
    { path:'user-dashboard', component: UserDashboardComponent}
  ]},

  {path:'',redirectTo:'/home-page',pathMatch:'full'}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AdminLoginpageComponent,HomeComponent,
  ClientLoginpageComponent,UserLoginpageComponent,AdminPortalComponent,
  UserRegistrationpageComponent,ClientPortalComponent,AdminDashboardComponent,UserPortalComponent,UserDashboardComponent,ClientDashboardComponent,CreateClientComponent,CreateQuestionsComponent,CreateQuestionPaperComponent]

