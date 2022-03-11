import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { FavoriteEventsComponent } from './favorite-events/favorite-events.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: 'users', component: UsersListComponent },
  { path: 'users/:userId', component: UserDashboardComponent },
  {
    path: 'users/:userId/event-details/:eventId',
    component: EventDetailsComponent,
  },
  { path: 'users/:userId/favorite-events', component: FavoriteEventsComponent },
  { path: 'events', component: EventListComponent },
  { path: 'event-details/:id', component: EventDetailsComponent },
  { path: 'favorite-events', component: FavoriteEventsComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventDetailsComponent,
    FavoriteEventsComponent,
    UsersListComponent,
    UserDashboardComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
