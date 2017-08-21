const answers = [
  {
    type: 'Js',
    groups: [
      {
        name: '',
        answersIndex: 1,
        link: 'https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage',
      },
      {
        name: '',
        answersIndex: 2,
        link: '',
        code: `function formatMMSS(secs) {
          const secNum = parseInt(secs, 10);
          const hours = Math.floor(secNum / 3600) % 24;
          const minutes = Math.floor(secNum / 60) % 60;
          const seconds = secNum % 60;
        
          return [hours, minutes, seconds].map((v) => { return v < 10 ? \`0${v}\` : v; })
                                   .filter((v, i) => {
                                     return v !== '00' || i > 0;
                                   })
                                   .join(':');
        }`
      },
      {
        name: '',
        answersIndex: 3,
        link: '',
        code: `const numbers = [
          'zero',
          'one',
          'two',
          'three',
          'four',
          'five',
          'six',
          'seven',
          'eight',
          'nine',
        ];
        
        const averageString = (str) => {
          const nums = str.split(' ').map(v => numbers.indexOf(v));
          if (nums.includes(-1)) return 'n/a'
          const sum = nums.reduce((prev, cur) => prev + cur);
          const average = Math.floor(sum / nums.length)
          return numbers[average]
        }`
      }
    ]
  }
]

export default answers;
