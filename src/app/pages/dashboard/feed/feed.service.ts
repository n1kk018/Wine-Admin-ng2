import {Injectable} from '@angular/core';

@Injectable()
export class FeedService {

  private _data = [
    {
      type: 'text-message',
      author: 'Ronan',
      surname: 'Lachater',
      header: 'Posted new message',
      text: 'Guys, meeting with suppliers. \n We should be prepared to ask strategical questions: What certifications have been confirmed?\nWhich subcontractors or temporary employees are going to be hired?\nCan they describe the backup plan they have\n ... We need to specify the company policy for the next year.',
      time: '19.05.2017',
      ago: '3 days ago',
      expanded: false,
    }, {
      type: 'video-message',
      author: 'Cyril',
      surname: 'Deschamps',
      header: 'Added new video',
      text: '"China driving global wine market"',
      preview: 'app/feed/china-wine.png',
      link: 'http://www.bbc.com/news/av/business-20722620/china-driving-global-wine-market',
      time: '14.05.2017',
      ago: '8 days ago',
      expanded: false,
    }, {
      type: 'image-message',
      author: 'Mehdi',
      surname: 'Rakrouki',
      header: 'Added new image',
      text: '"Visit to the main supplier"',
      preview: 'app/feed/supplier-store.png',
      link: 'http://www.vins-bordeaux.fr/',
      time: '14.05.2017',
      ago: '8 days ago',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Mehdi',
      surname: 'Rakrouki',
      header: 'Posted new message',
      text: 'Web site maintenance in two days',
      time: '10.05.2017',
      ago: '12 days ago',
      expanded: false,
    }, {
      type: 'geo-message',
      author: 'Ronan',
      surname: 'Lachater',
      header: 'Posted location',
      text: '"New York, USA"',
      preview: 'app/feed/new-york-location.png',
      link: 'https://www.google.by/maps/place/New+York,+NY,+USA/@40.7201111,-73.9893872,14z',
      time: '09.05.2017',
      ago: '13 days ago',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Ronan',
      surname: 'Lachater',
      header: 'Posted new message',
      text: "Meeting tomorrow 10AM",
      time: '08.05.2017',
      ago: '14 days ago',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Cyril',
      surname: 'Deschamps',
      header: 'Posted new message',
      text: 'We need to discuss abot whiskey, vodka and alcohol',
      time: '08.05.2017',
      ago: '14 days ago',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Cyril',
      surname: 'Deschamps',
      header: 'Posted new message',
      text: 'Reworking of Admin GUI  ',
      time: '06.05.2017',
      ago: '16 days ago',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Mehdi',
      surname: 'Rakrouki',
      header: 'Posted new message',
      text: 'Wine study:  on the most appropriate method to follow for the calculation of entry and removal standard costs without stock movement.',
      time: '05.05.2017',
      ago: '17 days ago',
      expanded: false,
    }, {
      type: 'image-message',
      author: 'Mehdi',
      surname: 'Rakrouki',
      header: 'Posted photo',
      text: '"Wine effect"',
      preview: 'app/feed/genom.png',
      link: 'https://dribbble.com/shots/2504810-Protein-Heroes',
      time: '05.05.2017',
      ago: '17 days ago',
      expanded: false,
    },
    {
      type: 'text-message',
      author: 'Ronan',
      surname: 'Lachater',
      header: 'Posted new message',
      text: 'Provide real time information to management back at head office of stock movement around their business operation',
      time: '04.05.2017',
      ago: '18 days ago',
      expanded: false,
    }
  ];

  getData() {
    return this._data;
  }
}
