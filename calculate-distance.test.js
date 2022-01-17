const calculateDistance = require('./calculate-distance')

test("calculates distance between (40.01,20.03) and (22.54,17.77) to be 1954km", () => {
  expect(calculateDistance([40.01, 20.03], [22.54, 17.77])).toBe(1954);
});

test("calculates distance between (-40.01,20.03) and (22.54,-17.77) to be 7983km", () => {
  expect(calculateDistance([-40.01, 20.03], [22.54, -17.77])).toBe(7983);
});