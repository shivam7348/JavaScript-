// 

const Book = [
  {
    title: 'BookOne', genre: 'fiction', publish: 1981, edition: 2024
  },
  {
    title: 'BookOne', genre: 'fiction', publish: 1981, edition: 2024,
  }, 
  {
    title: 'BookOne', genre: 'fiction', publish: 1981, edition: 1989, 
  },
  {
    title: 'BookOne', genre: 'Nonfiction', publish: 1981, edition: 1989,  
  },
  {
    title: 'BookOne', genre: 'Nonfiction', publish: 1981, edition: 1989,
  }, 
]
  const userBooks  =  Book.filter( (bk) => bk.genre === 'fiction' )

  console.log(userBooks);
  