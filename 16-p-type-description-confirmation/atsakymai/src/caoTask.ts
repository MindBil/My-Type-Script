const numbers: number[] = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];
const words: string[] = ["pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis", "sekmadienis"];

console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
  {
    function getLastElementIndex<T>(arr: T[]): number | undefined {
        return arr.length > 0 ? arr.length - 1 : undefined;
      }
      
      const numbersLastIndex = getLastElementIndex(numbers);
      const wordsLastIndex = getLastElementIndex(words);

      console.log(`Last index of 'numbers' array: ${numbersLastIndex}`);
      console.log(`Last index of 'words' array: ${wordsLastIndex}`);   
  }
  console.groupEnd();

  console.group('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
  {
    function printIndicesOfElements<T>(arr: T[]): void {
        arr.forEach((element, index) => {
          console.log(`Index of '${element}': ${index}`);
        });
      }

      printIndicesOfElements(numbers);
      printIndicesOfElements(words);
  }
  console.groupEnd();

  console.group('3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
  {
    function printArrayElementsAsString<T>(arr: T[]): void {
        arr.forEach(element => {
          console.log(String(element));
        });
      }
      
      printArrayElementsAsString(numbers);
      printArrayElementsAsString(words);
  }
  console.groupEnd();

  console.group('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
    function printIndexValuePairs<T>(arr: T[]): void {
        arr.forEach((element, index) => {
          console.log(`[${index}] => ${String(element)}`);
        });
      }
      
      printIndexValuePairs(numbers);
      printIndexValuePairs(words); 
}
console.groupEnd();

console.group('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
    function printArrayReverse<T>(arr: T[]): void {
        for (let i = arr.length - 1; i >= 0; i--) {
          console.log(arr[i]);
        }
      }
      
      printArrayReverse(numbers);
      printArrayReverse(words);
}
console.groupEnd();

console.group('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
    function printArrayIndices<T>(arr: T[]): void {
        const indices = arr.map((_, index) => index);
        console.log(indices.join(' '));
      }

      printArrayIndices(numbers);
      printArrayIndices(words);
}
console.groupEnd();

console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
    function printArrayValues<T>(arr: T[]): void {
        const values = arr.map(String);
        console.log(values.join(' '));
      }
      
      printArrayValues(numbers);
      printArrayValues(words);
}
console.groupEnd();

console.group('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17, [1]=>8, [2]=>88 ..
{
    function printIndexValuePairsSingleLine<T>(arr: T[]): void {
        const pairs = arr.map((element, index) => `[${index}] => ${String(element)}`);
        console.log(pairs.join(' '));
      }

      printIndexValuePairsSingleLine(numbers);
      printIndexValuePairsSingleLine(words);
}
console.groupEnd();

console.group('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
{
    function doubleArrayElements(arr: number[]): number[] {
        return arr.map(element => element * 2);
      }
      
const doubledNumbers: number[] = doubleArrayElements(numbers);
console.log(doubledNumbers);
}
console.groupEnd();

console.group('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
{
function squareArrayElements(arr: number[]): number[] {
  return arr.map(element => element ** 2);
}

console.log(squareArrayElements(numbers));
}
console.groupEnd();

console.group('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
{
function productOfElementAndIndex(arr: number[]): number[] {
  return arr.map((element, index) => element * index);
}

const productArray: number[] = productOfElementAndIndex(numbers);
console.log(productArray);
}
console.groupEnd();

console.group('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
{
    function getPositiveNumbers(arr: number[]): number[] {
        return arr.filter(element => element > 0);
      }

const positiveNumbers: number[] = getPositiveNumbers(numbers);
console.log(positiveNumbers);
}
console.groupEnd();

console.group('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
{
    function getNonPositiveNumbers(arr: number[]): number[] {
        return arr.filter(element => element <= 0);
      }

const nonPositiveNumbers: number[] = getNonPositiveNumbers(numbers);
console.log(nonPositiveNumbers);
}
console.groupEnd();

console.group('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
{
    function getEvenNumbers(arr: number[]): number[] {
        return arr.filter(element => element % 2 === 0);
      }
      
const evenNumbers: number[] = getEvenNumbers(numbers);
console.log(evenNumbers);
}
console.groupEnd();

console.group('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
{
    function getOddNumbers(arr: number[]): number[] {
        return arr.filter(element => element % 2 !== 0);
      }

const oddNumbers: number[] = getOddNumbers(numbers);
console.log(oddNumbers);
}
console.groupEnd();

console.group('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
    function convertToPositive(arr: number[]): number[] {
        return arr.map(element => Math.abs(element));
      }
      
const positiveNumbers: number[] = convertToPositive(numbers);
console.log(positiveNumbers);
}