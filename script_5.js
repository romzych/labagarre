const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 15 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 1000 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

{
  let yesno = true
  books.forEach(element => {
    if (element.rented == 0)
    {
      return yesno = false
    }
  });
  if (yesno)
  {
    console.log("tout les livres on été emprunté au moins une fois")
  } else
  {
    console.log("tout les livres n'on pas été emprunté au moins une fois")
  }
  console.log("-----------------------------------------")
}

{
 books.forEach(element => {
   if (element.id == 873495)
   {
     console.log("le livre avec l'id 873495 est " + element.title)
   }
 });
 console.log("-----------------------------------------")
}

{
  console.log(books)
  books.forEach(element => {
    if (element.id == 133712)
    {
      books.splice(element,1)
      console.log("le livre avec l'id 133712 est suprimé")
    }
  });
  console.log(books)
  console.log("-----------------------------------------")

}

{
  var arrayname = []

  books.forEach(element => {
    arrayname.push(element.title)
  });
  arrayname.sort().forEach(element => {    
    console.log(element)
  });

  console.log("-----------------------------------------")
}