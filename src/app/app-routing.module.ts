import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DwgComponent } from './dwg.component';

const routes: Routes = [

  {
    path: 'dwg',
    component: DwgComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
