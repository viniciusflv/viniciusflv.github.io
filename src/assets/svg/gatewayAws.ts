export const gatewayAws = {
  tag: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
  },
  children: [
    {
      tag: 'defs',
      props: {},
      children: [
        {
          tag: 'linearGradient',
          props: {
            id: 'a',
            x1: '0%',
            x2: '100%',
            y1: '100%',
            y2: '0%',
          },
          children: [
            {
              tag: 'stop',
              props: {
                offset: '0%',
                stopColor: '#B0084D',
              },
            },
            {
              tag: 'stop',
              props: {
                offset: '100%',
                stopColor: '#FF4F8B',
              },
            },
          ],
        },
      ],
    },
    {
      tag: 'g',
      props: {
        fill: 'none',
        fillRule: 'evenodd',
        stroke: 'none',
        strokeWidth: '1',
      },
      children: [
        {
          tag: 'path',
          props: {
            fill: 'url(#a)',
            d: 'M0 0H24V24H0z',
          },
        },
        {
          tag: 'path',
          props: {
            fill: '#FFF',
            d: 'm2 2.768 2-1.334v13.132l-2-1.333V2.768ZM1 2.5v11a.5.5 0 0 0 .223.416l3 2a.498.498 0 0 0 .513.025A.5.5 0 0 0 5 15.5V13h1v-1H5V4h1V3H5V.5a.5.5 0 0 0-.777-.417l-3 2A.501.501 0 0 0 1 2.5Zm14 10.733-2 1.333V1.434l2 1.334v10.465Zm.777-11.15-3-2A.5.5 0 0 0 12 .5V3h-1v1h1v8h-1v1h1V15.5a.5.5 0 0 0 .777.416l3-2A.5.5 0 0 0 16 13.5v-11a.501.501 0 0 0-.223-.417ZM9 4h1V3H9v1ZM7 4h1V3H7v1Zm2 9h1v-1H9v1Zm-2 0h1v-1H7v1Zm2.18-2.115-3-2.5a.5.5 0 0 1 0-.77l3-2.5.64.77L7.281 8l2.539 2.116-.64.769Z',
            transform: 'translate(4 4)',
          },
        },
      ],
    },
  ],
};
