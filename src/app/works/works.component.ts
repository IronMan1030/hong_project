import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss', '../app.component.scss'],
})
export class WorksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  recentWorksEverything = [
    {
      id: 1,
      title: 'Moving website',
      image: '/assets/images/portfolio/lug.nz.JPG',
      desc: 'react/redux, node.js',
      url: 'https://www.lugg.com/',
    },
    {
      id: 2,
      title: 'Diet website',
      image: '/assets/images/portfolio/metnu.JPG',
      desc: 'next.js, node.js, mongoDB',
      url: 'https://www.metnu.com',
    },
    {
      id: 3,
      title: 'Commeriale website',
      image: '/assets/images/portfolio/commerciale4.JPG',
      desc: 'MERN-stack',
      url: 'https://commerciale4.netlify.app',
    },
    {
      id: 4,
      title: 'Ecommerce website',
      image: '/assets/images/portfolio/abraa.JPG',
      desc: 'PHP, Mysql',
      url: 'https://abraa.com/',
    },
    {
      id: 5,
      title: 'Real estate website',
      image: '/assets/images/portfolio/cangiano.JPG',
      desc: 'Wordpress',
      url: 'https://cangianoestates.com/',
    },
    {
      id: 6,
      title: 'Dorm Room Tycoon',
      image: '/assets/images/portfolio/drt.JPG',
      desc: 'Django, PostgreSql',
      url: 'https://drt.fm/',
    },
    {
      id: 7,
      title: 'Ride and Driver',
      image: '/assets/images/portfolio/ride_and_driver.jpg',
      desc: 'Laravel',
      url: 'https://getmeride.com/',
    },
    {
      id: 8,
      title: 'Job website',
      image: '/assets/images/portfolio/bolter.JPG',
      desc: 'MERN-stack',
      url: 'https://bolter.netlify.app/',
    },
    {
      id: 9,
      title: 'Blog website',
      image: '/assets/images/portfolio/django_blog.PNG',
      desc: 'Django',
      url: '',
    },
    {
      id: 10,
      title: 'Shopify app for Drapshipping',
      image: '/assets/images/portfolio/premafirm.PNG',
      desc: 'React.js, Node.js, MongoDB',
      url: 'https://github.com/IronMan1030/premafirm',
    },
    {
      id: 10,
      title: 'Ecommerce website',
      image: '/assets/images/portfolio/premafirm_website.PNG',
      desc: 'react.js, Django rest framework',
      url: 'https://github.com/IronMan1030/react-django',
    },
    {
      id: 11,
      title: 'Coffee Shop',
      image: '/assets/images/portfolio/hushcup.JPG',
      desc: 'reat.js, node.js, mongoDB',
      url: 'https://hushcup.netlify.app/reservation',
    },
  ];

  recentWorksMERN = [
    {
      id: 8,
      title: 'Job website',
      image: '/assets/images/portfolio/bolter.JPG',
      desc: 'MERN-stack',
      url: 'https://bolter.netlify.app/',
    },
    {
      id: 3,
      title: 'Commeriale website',
      image: '/assets/images/portfolio/commerciale4.JPG',
      desc: 'MERN-stack',
      url: 'https://commerciale4.netlify.app',
    },
    {
      id: 11,
      title: 'Coffee Shop',
      image: '/assets/images/portfolio/hushcup.JPG',
      desc: 'reat.js, node.js, mongoDB',
      url: 'https://hushcup.netlify.app/reservation',
    },
    {
      id: 1,
      title: 'Moving website',
      image: '/assets/images/portfolio/lug.nz.JPG',
      desc: 'react/redux, node.js',
      url: 'https://www.lugg.com/',
    },
    {
      id: 10,
      title: 'Shopify app for Drapshipping',
      image: '/assets/images/portfolio/premafirm.PNG',
      desc: 'React.js, Node.js, MongoDB',
      url: 'https://github.com/IronMan1030/premafirm',
    },
    {
      id: 10,
      title: 'Ecommerce website',
      image: '/assets/images/portfolio/premafirm_website.PNG',
      desc: 'react.js, Django rest framework',
      url: 'https://github.com/IronMan1030/react-django',
    },
    {
      id: 2,
      title: 'Diet website',
      image: '/assets/images/portfolio/metnu.JPG',
      desc: 'next.js, node.js, mongoDB',
      url: 'https://www.metnu.com',
    },
  ];

  recentWorksDjango = [
    {
      id: 6,
      title: 'Dorm Room Tycoon',
      image: '/assets/images/portfolio/drt.JPG',
      desc: 'Django, PostgreSql',
      url: 'https://drt.fm/',
    },
    {
      id: 9,
      title: 'Blog website',
      image: '/assets/images/portfolio/django_blog.PNG',
      desc: 'Django',
      url: '',
    },
  ];

  recentWorksPhp = [
    {
      id: 4,
      title: 'Ecommerce website',
      image: '/assets/images/portfolio/abraa.JPG',
      desc: 'PHP, Mysql',
      url: 'https://abraa.com/',
    },
    {
      id: 5,
      title: 'Real estate website',
      image: '/assets/images/portfolio/cangiano.JPG',
      desc: 'Wordpress',
      url: 'https://cangianoestates.com/',
    },

    {
      id: 7,
      title: 'Ride and Driver',
      image: '/assets/images/portfolio/ride_and_driver.jpg',
      desc: 'Laravel',
      url: 'https://getmeride.com/',
    },
  ];
}
