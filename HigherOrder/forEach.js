const coding = ['html', 'css', 'js', 'react', 'node', 'ruby']

//   coding.forEach( (item) => {
//     console.log(item);
    
//   })

// function printMe( item) {
//   console.log(item);
  
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//   console.log(item, index, arr);
  
// })

const mycoding = [ 
    {
        langname: 'html',
        langfile: 'js',
        langtype: 'frontend'
    },
    {
        langname: 'css',
        langfile: 'css',
        langtype: 'frontend'
    },
    {
        langname: 'python',
        langfile: 'js',
        langtype: 'backend'
    },
    {
        langname: 'react',
        langfile: 'js',
        langtype: 'frontend'
    }
]

mycoding.forEach( ( item) => {
  console.log(item.langname, item.langfile, item.langtype);
  
} )