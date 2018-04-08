import { NbMenuItem } from '@nebular/theme';

/*

Page menu

*/
export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
  {
    title:'game',
    icon: 'ion-ionic',
    children:[
      {
        title:'coding_test_page',
        link:'/pages/game'
      },
      {
        title:'game_list',
        link:'/pages/game/game-menu'
      }
    ]
  }
];
