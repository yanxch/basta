describe('The addition', function () {

  it('of 1 + 2 is 3', function() {
    let result = add(1, 2);
    expect(result).toBe(3);
  });

  it('of 1 + 11 is 12', function() {
    let result = add(1, 11);
    expect(result).toBe(12);
  });
});