import {
  trigger,
  style,
  animate,
  transition,
  query,
  group,
  animateChild
} from '@angular/animations';

export const SlideInOutAnimation = trigger('routeAnimations', [
  transition('Contact => *,  * => Home, Skills => Experience', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: '100%'
      })
    ], {optional: true},
    ),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild(),{optional: true}),
    group([
      query(':leave', [animate('600ms ease-in', style({ left: '100%' }))],{optional: true}),
      query(':enter', [animate('600ms ease-in', style({ left: '0%' }))])
    ]),
    query(':enter', animateChild())
  ]),
  transition('* => Contact, Home => *,Experience => Skills', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: '100%'
      })
    ],{optional: true},
    ),
    query(':enter', [style({ left: '100%' })]),
    query(':leave', animateChild(),{optional: true}),
    group([
      query(':leave', [animate('600ms ease-in', style({ left: '-100%' }))],{optional: true}),
      query(':enter', [animate('600ms ease-in', style({ left: '0%' }))])
    ]),
    query(':enter', animateChild())
  ])
]);
