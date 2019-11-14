const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

{
  console.log("Né dans les années 70:");
  entrepreneurs.forEach(element => {
    if ((element.year >= 1970) && (element.year < 1980))
    {
      console.log(element.first + " " + element.last);
    }
  });
  console.log("-----------------------------------------")
}

{
  var namearrays = []

  entrepreneurs.forEach(element => {
    namearrays.push(element.first + " " + element.last)
  });
  console.log(namearrays)

  console.log("-----------------------------------------")
}

{
  entrepreneurs.forEach(element => {
    age = 2019 - element.year;
    console.log(element.first + " " + element.last + " a " + age + " ans actuellement")    
  });
  console.log("-----------------------------------------")
}

{
  var sortarray = []

  entrepreneurs.forEach(element => {
    sortarray.push(element.last + " " + element.first)
  });
  console.log(namearrays.sort())

  console.log("-----------------------------------------")
}