/*
  Enum(išvardinimas) - tai konstantų rinkinys.
  Enum(išvardinimai) yra naudojami įvardinti tipams ar nustatymams. 
  Jų reikšmės dažniau naudojamos tipo patikrinimams, nei atvazdavimui.
*/

// Skaitiniai išvardinimai (numeric enums)
// Nurodžius pirmajai konstantai reikšmę, sekančios susinumeruoja pradedant nurodyta reikšme
enum WeekDays {
    Monday = 1,
    Tuesday, // 2
    Wednesday, // 3
    Thursday, // 4
    Friday, // 5
    Saturday, // 6
    Sunday, // 7
  };
  
  // Jei nenurodote pirmosios reikšmės, numeruojama nuo 0
  enum Answer {
    No, // 0
    Yes, // 1
  };
  
  // Jei išvardinamų konstantų tipas yra ne skaičius, privalote įvardinti kiekvieną narį
  enum WeekDayNamesLT {
    Monday = 'pirmadienis',
    Tuesday = 'antradienis',
    Wednesday = 'trečiadienis',
    Thursday = 'ketvirtadienis',
    Friday = 'penktadienis',
    Saturday = 'šeštadienis',
    Sunday = 'sekmadienis',
  };
  
  // Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
  console.group('Literal types - užduotys');
  {
    // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius aprašykite čia ↓↓↓↓
    enum City {
        Vilnius = "Vilnius",
        Kaunas = "Kaunas",
        Klaipėda = "Klaipėda",
        Šiauliai = "Šiauliai",
        Panevėžys = "Panevėžys",
      };
      
      enum Country {
        China,
        India,
        UnitedStates,
        Indonesia,
        Pakistan,
      };
      
      enum BigGdp {
        UnitedStates = "United States",
        China = "China",
        Japan = "Japan",
        Germany = "Germany",
        India = "India",
      }
      
    // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius aprašykite čia ↑↑↑↑
  
  console.group("1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.");
    {
        const firstCity: City = City.Vilnius;
        const secondCity: City = City.Kaunas;
        
        console.log({firstCity, secondCity});
    }
    console.groupEnd();
  
  console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
    {
const countriesByNumber = Object.keys(Country).sort(
  (a, b) => Country[a as keyof typeof Country] - Country[b as keyof typeof Country]
) as (keyof typeof Country)[];

console.log("Countries with numeric values:");
countriesByNumber.forEach((country, index) => {
  console.log(`#${index + 1}: ${country}`);
});
    }
    console.groupEnd();
  
    console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
    {
      console.log("Countries:");
for (const country in BigGdp) {
  if (isNaN(Number(country))) {
    console.log(country);
  }
}
    }
    console.groupEnd();
  
  }
  console.groupEnd();
  
  