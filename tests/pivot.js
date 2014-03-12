var pivot = require('../');
var test = require('tape');
var util = require('util');

var data = [
  {subject : 1, day : 1, value : 31.25, treatment : 'A' },
  {subject : 1, day : 2, value : 31.25, treatment : 'C' },
  {subject : 1, day : 3, value : 33.12, treatment : 'B' },
  {subject : 2, day : 1, value : 25.87, treatment : 'C' },
  {subject : 2, day : 2, value : 26.63, treatment : 'A' },
  {subject : 2, day : 3, value : 26.00, treatment : 'B' },
  {subject : 3, day : 1, value : 23.75, treatment : 'C' },
  {subject : 3, day : 2, value : 26.13, treatment : 'B' },
  {subject : 3, day : 3, value : 24.87, treatment : 'A' },
  {subject : 4, day : 1, value : 28.75, treatment : 'A' },
  {subject : 4, day : 2, value : 29.63, treatment : 'B' },
  {subject : 4, day : 3, value : 29.87, treatment : 'C' },
  {subject : 5, day : 1, value : 24.50, treatment : 'C' },
  {subject : 5, day : 2, value : 28.63, treatment : 'A' },
  {subject : 5, day : 3, value : 28.37, treatment : 'B' },
  {subject : 6, day : 1, value : 31.25, treatment : 'B' },
  {subject : 6, day : 2, value : 30.63, treatment : 'A' },
  {subject : 6, day : 3, value : 29.37, treatment : 'C' },
  {subject : 7, day : 1, value : 25.50, treatment : 'B' },
  {subject : 7, day : 2, value : 23.87, treatment : 'C' },
  {subject : 7, day : 3, value : 24.00, treatment : 'A' },
  {subject : 8, day : 1, value : 28.50, treatment : 'B' },
  {subject : 8, day : 2, value : 27.87, treatment : 'C' },
  {subject : 8, day : 3, value : 30.12, treatment : 'A' },
  {subject : 9, day : 1, value : 25.13, treatment : 'A' },
  {subject : 9, day : 2, value : 27.00, treatment : 'B' },
  {subject : 9, day : 3, value : 24.63, treatment : 'C' }
];

test('pivot', function(t){
  t.plan(3);
  var result = pivot(data, ['subject'], ['day','treatment']);
  t.deepEqual(result.columnHeaders,
    [ [ 1, 'A' ],
      [ 1, 'B' ],
      [ 1, 'C' ],
      [ 2, 'A' ],
      [ 2, 'B' ],
      [ 2, 'C' ],
      [ 3, 'A' ],
      [ 3, 'B' ],
      [ 3, 'C' ] ]);
  t.deepEqual(result.rowHeaders,
    [ [ 1 ],
      [ 2 ],
      [ 3 ],
      [ 4 ],
      [ 5 ],
      [ 6 ],
      [ 7 ],
      [ 8 ],
      [ 9 ] ]);
  t.equal(util.format('%j', result),
    util.format('%j',
    [[[{"subject":1,"day":1,"value":31.25,"treatment":"A"}],null,null,null,null,[{"subject":1,"day":2,"value":31.25,"treatment":"C"}],null,[{"subject":1,"day":3,"value":33.12,"treatment":"B"}],null],
      [null,null,[{"subject":2,"day":1,"value":25.87,"treatment":"C"}],[{"subject":2,"day":2,"value":26.63,"treatment":"A"}],null,null,null,[{"subject":2,"day":3,"value":26,"treatment":"B"}],null],
      [null,null,[{"subject":3,"day":1,"value":23.75,"treatment":"C"}],null,[{"subject":3,"day":2,"value":26.13,"treatment":"B"}],null,[{"subject":3,"day":3,"value":24.87,"treatment":"A"}],null,null],
      [[{"subject":4,"day":1,"value":28.75,"treatment":"A"}],null,null,null,[{"subject":4,"day":2,"value":29.63,"treatment":"B"}],null,null,null,[{"subject":4,"day":3,"value":29.87,"treatment":"C"}]],
      [null,null,[{"subject":5,"day":1,"value":24.5,"treatment":"C"}],[{"subject":5,"day":2,"value":28.63,"treatment":"A"}],null,null,null,[{"subject":5,"day":3,"value":28.37,"treatment":"B"}],null],
      [null,[{"subject":6,"day":1,"value":31.25,"treatment":"B"}],null,[{"subject":6,"day":2,"value":30.63,"treatment":"A"}],null,null,null,null,[{"subject":6,"day":3,"value":29.37,"treatment":"C"}]],
      [null,[{"subject":7,"day":1,"value":25.5,"treatment":"B"}],null,null,null,[{"subject":7,"day":2,"value":23.87,"treatment":"C"}],[{"subject":7,"day":3,"value":24,"treatment":"A"}],null,null],
      [null,[{"subject":8,"day":1,"value":28.5,"treatment":"B"}],null,null,null,[{"subject":8,"day":2,"value":27.87,"treatment":"C"}],[{"subject":8,"day":3,"value":30.12,"treatment":"A"}],null,null],
      [[{"subject":9,"day":1,"value":25.13,"treatment":"A"}],null,null,null,[{"subject":9,"day":2,"value":27,"treatment":"B"}],null,null,null,[{"subject":9,"day":3,"value":24.63,"treatment":"C"}]]]));
});