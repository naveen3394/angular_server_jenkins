import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { RegisterComponent } from './register/register.component';
import { DeleteComponent } from './delete/delete.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import{FormsModule,NgForm,NgModel}from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    RegisterComponent,
    DeleteComponent,
    NotfoundComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"",component:HomeComponent},
      {path:"home",component:HomeComponent},
      {path:"register",component:RegisterComponent},
      {path:"edit/:No",component:EditComponent},
      {path:"delete/:No",component:DeleteComponent},
      {path:"about",component:AboutComponent},
      {path:"contact",component:ContactComponent},      
      {path:"**",component:NotfoundComponent}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
