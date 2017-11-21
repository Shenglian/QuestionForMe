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
      },
      {
        name: '',
        answersIndex: 4,
        link: 'https://stackoverflow.com/questions/10931288/how-to-add-subtract-dates-with-javascript',
        code: '',
      },
      {
        name: '',
        answersIndex: 5,
        link: 'https://stackoverflow.com/questions/10931288/how-to-add-subtract-dates-with-javascript',
        code: '',
      },
      {
        name: '',
        answersIndex: 6,
        link: 'https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript',
        code: '',
      },
      {
        name: '',
        answersIndex: 7,
        link: 'https://stackoverflow.com/questions/221294/how-do-you-get-a-timestamp-in-javascript',
        code: '+new Date()',
      },
      {
        name: '',
        answersIndex: 8,
        link: 'https://stackoverflow.com/questions/4744751/how-do-i-redirect-with-javascript, https://stackoverflow.com/questions/503093/how-to-redirect-to-another-webpage?page=1&tab=votes#tab-top',
        code: 'window.location.href = "http://www.yoururl.com"; window.location.replace = "http://www.yoururl.com"',
      },
      {
        name: '',
        answersIndex: 9,
        link: 'https://blog.longwin.com.tw/2010/01/javascript-encodeuri-component-utf-8-2010/',
        code: '',
      },
      {
        name: '',
        answersIndex: 10,
        link: '',
        code: 'window.open("windowUrl", "windowName", "windowConfig")',
      },
      {
        name: '',
        answersIndex: 11,
        link: '',
        code: 'arr.length === 0',
      },
      {
        name: '',
        answerIndex: 12,
        link: '',
        code: '',
      },
      {
        name: '',
        answerIndex: 13,
        link: '',
        code: '',
      },
      {
        name: '',
        answerIndex: 14,
        link: '',
        code: '',
      },
      {
        name: '',
        answerIndex: 15,
        link: 'https://stackoverflow.com/questions/43626156/how-to-convert-an-array-of-objects-to-object-with-key-value-pairs',
        link2: 'https://stackoverflow.com/questions/4215737/convert-array-to-object',
        code: `var arr = [{"name1": 'value1',"name3": 'value3'},{"name2": 'value2'}];
        var obj = Object.assign({}, ...arr);`,
        code2: `['a','b','c'].reduce(function(result, item, index, array) {
          result[index] = item; //a, b, c
          return result;
        }, {}) //watch out the empty {}, which is passed as "result"`,
      },
      {
        name: '',
        answerIndex: 16,
        link: '',
        code: 'Array.join("")'
      },
      {
        name: '',
        answerIndex: 17,
        link: '',
        code: 'Array.split("")'
      },
      {
        name: '',
        answerIndex: 18,
        link: '',
        code: '+string'
      },
      {
        name: '',
        answerIndex: 19,
        link: '',
        code: 'array.length = 0'
      },{
        name: '',
        answerIndex: 20,
        link: 'https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object',
        code: 'Object.keys(obj).length === 0 && obj.constructor === Object'
      },
      {
        name: '',
        answerIndex: 21,
        link: 'https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object',
        code: `let urlString = urlString.match(/[\?]/g) ? '&' : '?' + param=value`,
      }
    ]
  }
]

export default answers;
