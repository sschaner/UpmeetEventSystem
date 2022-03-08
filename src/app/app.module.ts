import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';

const routes: Routes = [
  { path: 'events', component: EventListComponent },
  { path: 'event-details/:id', component: EventDetailsComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, EventListComponent, EventDetailsComponent],
  imports: [RouterModule.forRoot(routes), BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
