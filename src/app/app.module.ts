import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { FavoriteEventsComponent } from './favorite-events/favorite-events.component';

const routes: Routes = [
  { path: 'events', component: EventListComponent },
  { path: 'event-details/:id', component: EventDetailsComponent },
  { path: 'favorite-events', component: FavoriteEventsComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventDetailsComponent,
    FavoriteEventsComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
