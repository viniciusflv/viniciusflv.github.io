export const stepFunctionsAws = {
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
            d: 'M14 13h5v-2h-5v2Zm2 2H8v-2h2.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H8V9h8v1h-2.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H16v1ZM5 12h5v-1H5v1Zm7.5 7a.5.5 0 1 1 .002-1.002A.5.5 0 0 1 12.5 19Zm0-14a.5.5 0 1 1-.002 1.002A.5.5 0 0 1 12.5 5Zm7 5H17V8.5a.5.5 0 0 0-.5-.5H13V6.908c.581-.207 1-.757 1-1.408 0-.827-.673-1.5-1.5-1.5S11 4.673 11 5.5c0 .651.419 1.201 1 1.408V8H7.5a.5.5 0 0 0-.5.5V10H4.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H7v2.5a.5.5 0 0 0 .5.5H12v1.092c-.581.207-1 .757-1 1.408 0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5c0-.651-.419-1.201-1-1.408V16h3.5a.5.5 0 0 0 .5-.5V14h2.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Z',
          },
        },
      ],
    },
  ],
};
