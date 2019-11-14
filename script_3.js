{
  let size = prompt("donne la taille brada");
  let i = 1;
  let space = size - 1;
  while (i <= size)
  {
    console.log(" ".repeat(space) + "#".repeat(i));
    space--;
    i++;
  }
}
console.log("-----------------------------------------")