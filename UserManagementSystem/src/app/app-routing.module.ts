import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './AllComponents/add-user/add-user.component';
import { UserComponentComponent } from './AllComponents/user-component/user-component.component';

const routes: Routes = [
  { path: '', component: UserComponentComponent },
  { path: 'allusers', component: UserComponentComponent },
  { path: 'adduser', component: AddUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
