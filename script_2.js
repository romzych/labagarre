{
  let num = prompt("donne un chiffre je fait le factoriel brada");
  let i = num - 1
  let cash = num
  while (i > 0)
  {
    cash = i * cash
    i--
  }
  console.log(`factoriel de ${num} = ${cash}`)
}
console.log("-----------------------------------------")