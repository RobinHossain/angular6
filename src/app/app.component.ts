import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  tests = [
    {
      id: 1,
      title: 'Standing 30 m',
      img: '../assets/images/running_active.jpg',
      active: true
    },
    {
      id: 2,
      title: 'Coming soon',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/LTLE4QGRVQ.jpg',
      active: false
    },
    {
      id: 3,
      title: 'Coming soon',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg',
      active: false
    },
    {
      id: 4,
      title: 'Coming soon',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/U9PP3KXXY2.jpg',
      active: false
    },
    {
      id: 5,
      title: 'Coming soon',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/NO9CN3QYR3.jpg',
      active: false
    },
    {
      id: 6,
      title: 'Coming soon',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg',
      active: false
    },
    {
      id: 7,
      title: 'Coming soon',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/U9PP3KXXY2.jpg',
      active: false
    },
    {
      id: 8,
      title: 'Coming soon',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/NO9CN3QYR3.jpg',
      active: false
    },
    {
      id: 9,
      title: 'Coming soon',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg',
      active: false
    },
  ];
}
