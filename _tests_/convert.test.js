
import { Haiku } from './../src/haiku.js';

describe('Haiku', () => {

  test('should correctly assess 3 sentences', () => {
    var input1 = new Haiku ("hello", "hi", "howrya")
    expect(input1.line1).toContain("hello");
    expect(input1.line2).toContain("hi");
    expect(input1.line3).toContain("howrya");
  });
  test('shouled correctly assses if poem is a not Haiku', () => {
    var input2 = new Haiku ("hellop", "hip", "howryah")
    expect(input2.isValid()).toContain("That is not a Haiku!");
});
  test('should correctly count syllables', () => {
    var input3 = new Haiku ("how are ya")
    expect(input3.syllableChecker()).toEqual(3);
});
})
