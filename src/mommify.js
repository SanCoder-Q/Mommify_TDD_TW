function mommify(inputStr){
  return (inputStr.match(/[aeiou]/gmi)||[]).length * 10 > 3 * inputStr.length ? inputStr.replace(/[aeiou]+/gmi,"mommy") : inputStr ;
}
