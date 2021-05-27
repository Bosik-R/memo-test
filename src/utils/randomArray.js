export const randomArray = (length) => {
  const array = [];

  for(let i = 0; i < length; i++){
    const number = Math.floor(Math.random() * 10);
    array.push(number);
  }
  return array;
} 