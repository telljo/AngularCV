import {

  trigger,

  style,

  animate,

  transition,

  query,

  group,

  animateChild

} from '@angular/animations';

 

export const FadeInOutAnimation = trigger('routeAnimations', [

  transition('* => *', [

    query(

      ':enter',

      [

        style({

          opacity: 0,

          position: 'absolute'

        })

      ],

      { optional: true }

    ),

 

    query(

      ':leave',

      [

        style({ opacity: 1 }),

        animate(

          '0.4s',

          style({

            opacity: 0,

            position: 'absolute'

          })

        )

      ],

      { optional: true }

    ),

 

    query(

      ':enter',

      [

        style({ opacity: 0 }),

        animate(

          '0.4s',

          style({

            opacity: 1,

            position: 'absolute'

          })

        )

      ],

      { optional: true }

    )

  ])

]);