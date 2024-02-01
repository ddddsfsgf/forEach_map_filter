 //forEach
 it("Should double the value!", function(){
    expect(doubleValues([1,2,3])).toEqual([2,4,6])
 });
 it("Should only return even functions!", function(){
    expect(onlyEvenValues([1,2,3,4,5,6])).toEqual([2,4,6])
 });
 it("Should only return the first and last characters!", function(){
    expect(showFirstAndLast(["Domenick"])).toEqual(["Dk"])
 });
 it("Should return the new key and value for each object!", function(){
    expect(addKeyAndValue([{name: "Domenick"}],"title","artist")).toEqual([{name: "Domenick",title: "artist"}])
 });
 it("Should return the vowels and how many times each appears!", function(){
    expect(vowelCount("aaeiiiou")).toEqual({a:2,e:1,i:3,o:1,u:1})
 });
 //map
it("Should double values in an array!", function(){
    expect(doubleValuesWithMap([1,2,3,4,5])).toEqual([2,4,6,8,10])
});
it("Should multiply each value by its index!",function(){
    expect(valTimesIndex([1,2,3,4])).toEqual([0,2,6,12])
});
it("Should return with the value of each key in an array object", function(){
    let arr = [{name: "Domenick"}]
    expect(extractKey(arr,"name")).toEqual(["Domenick"])
})
it("Should return the value of each key in the object", function(){
    let arr = [{first: "Domenick", last: "DeBernardo"}]
    expect(extractFullName(arr,"name")).toEqual(["Domenick DeBernardo"])
});
//filter
it("returns a new array of objects that contain a key", function() {
    let arr = [
        { first: "Elie", last: "Schoppik" },
        { first: "Tim", last: "Garcia", isCatOwner: true },
        { first: "Matt", last: "Lane" },
        { first: "Colt", last: "Steele", isCatOwner: true }
      ];
    expect(filterByValue(arr, "isCatOwner")).toEqual([
      { first: "Tim", last: "Garcia", isCatOwner: true },
      { first: "Colt", last: "Steele", isCatOwner: true }
    ]);
  });
 it("Should return first value found in an array!", function(){
    let arr = [1,2,3,4,5,6]
    expect(find(arr,3)).toEqual(3)
  });
 it("Should return undefined if value is not in the array!", function(){
    let arr = [1,2,3,4,5,6]
    expect(find(arr,10)).toEqual(undefined)
 });
 it("Should return the first value found!", function(){
    let arr = [
        { first: "Elie", last: "Schoppik" },
        { first: "Tim", last: "Garcia", isCatOwner: true },
        { first: "Matt", last: "Lane" },
        { first: "Colt", last: "Steele", isCatOwner: true }
      ];
    expect(findInObj(arr, "isCatOwner", true)).toEqual({
        first: "Tim",
        last: "Garcia",
        isCatOwner: true
      });
 })
 it("returns undefined if the value is not found", function() {
    let arr = [
        { first: "Elie", last: "Schoppik" },
        { first: "Tim", last: "Garcia", isCatOwner: true },
        { first: "Matt", last: "Lane" },
        { first: "Colt", last: "Steele", isCatOwner: true }
      ];
    expect(findInObj(arr, "isCatOwner", false)).toEqual(undefined);
 });
it("Should remove all vowels!", function(){
    expect(removeVowels("abcde")).toEqual("bcd")
});
it("Should only return the odd numbers and double them!", function(){
    expect(doubleOddNumbers([1,2,3,4,5])).toEqual([2,6,10])
    expect(doubleOddNumbers([2,4,6])).toEqual([])
})