export const cognitoAws = {
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
                stopColor: '#BD0816',
              },
            },
            {
              tag: 'stop',
              props: {
                offset: '100%',
                stopColor: '#FF5252',
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
            d: 'm15.188 16.891-1.25-1 .625-.781.824.659 1.697-2.546.833.555-2 3A.51.51 0 0 1 15.5 17a.504.504 0 0 1-.312-.109ZM6 12h2v-1H6v1Zm.001-2h3V9h-3v1Zm12-3v-.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V7H5V5.6c0-.319.198-.6.422-.6h13.156c.225 0 .423.281.423.6V7h-1Zm-2.376 5c1.862 0 3.376 1.571 3.376 3.5 0 1.93-1.514 3.5-3.376 3.5-1.861 0-3.375-1.57-3.375-3.5 0-1.929 1.514-3.5 3.375-3.5ZM20 12V5.6c0-.882-.638-1.6-1.422-1.6H5.422C4.638 4 4 4.718 4 5.6v8.8c0 .883.638 1.6 1.422 1.6h5.877c.246 2.244 2.08 4 4.326 4C18.038 20 20 17.982 20 15.5c0-2.481-1.962-4.5-4.375-4.5-2.246 0-4.08 1.757-4.326 4H5.422C5.198 15 5 14.72 5 14.4V8h5.001v4h1V7H17v3h1.001V8h1v4H20Z',
          },
        },
      ],
    },
  ],
};
