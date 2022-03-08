import { Injectable } from '@angular/core';
import { IEvent } from './interfaces/IEvent';

@Injectable({
  providedIn: 'root',
})
export class EventsRepositoryService {
  //mock data
  // Date(year, month, day, hours, minutes, seconds, milliseconds)
  eventList: IEvent[] = [
    {
      eventId: 1,
      title: 'Monthly Meetup: Simple Security Enhancements',
      host: 'Jonathan Chaffer',
      description:
        "This month, Frank will demonstrate some findings on how to enhance site security with some simple tweaks. We'll follow with general discussion about the projects people are working on. We will begin our monthly topic at 6pm. The Zoom link will be available up to half an hour early, for anyone who would like to socialize beforehand.",
      location: 'Grand Rapids',
      start: new Date(2022, 3, 7, 18, 0, 0, 0),
      end: new Date(2022, 3, 7, 19, 0, 0, 0),
      ageRequirement: 18,
      favorited: true,
    },
    {
      eventId: 2,
      title: 'Friday Morning Code + Commiserate',
      host: 'Sloth 1',
      description:
        "As a developer, it's very easy to fall into the same routine: get up, go to work, deal with the project(s) on-hand, go home. But how are we keeping our skills sharp... and up to date? Once you're submerged in the grind, it can sometimes be difficult to rise to the surface and spend time improving your toolset. We feel your pain: we're in the same boat! Join us on the 2nd and 4th Fridays of the month as we grab a morning beverage, fire up Zoom, and take time to dive into the latest dev news, share tips and tricks, and commiserate in general. This is an informal study group where we are all peers, learning from and sharing with the others. All levels of expertise are invited and welcome! The rules? Be professional, be humble, be kind. Dust off the keyboard, turn on your mic and camera, and let's talk code!",
      location: 'Grand Rapids',
      start: new Date(2022, 3, 11, 8, 0, 0, 0),
      end: new Date(2022, 3, 11, 9, 0, 0, 0),
      ageRequirement: 18,
      favorited: true,
    },
    {
      eventId: 3,
      title: 'Regularly Scheduled Meeting',
      host: 'Ben Rousch',
      description:
        "Our monthly meetings typically include a formal presentation by a group member, hacking on group projects, open discussions, and more. Afterwards, we go out for drinks and dinner at the nearby HopCat brewery. More details about this specific meeting will be available as we get closer to the meeting date. If no topic has been selected for this meeting yet, please volunteer to give a talk or suggest something you'd like to learn more about by contacting the organizers.",
      location: 'Grand Rapids',
      start: new Date(2022, 3, 21, 18, 0, 0, 0),
      end: new Date(2022, 3, 21, 19, 30, 0, 0),
      ageRequirement: 18,
      favorited: false,
    },
  ];

  constructor() {}

  getEvents() {
    return this.eventList;
  }

  getEventDetails(id: number) {
    return this.eventList.find((e) => e.eventId == id);
  }
}
