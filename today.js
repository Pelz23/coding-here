const data = [
    {
      id: 1,
      title: "The Lord of the Rings",
      publicationDate: "1954-07-29",
      author: "J. R. R. Tolkien",
      genres: [
        "fantasy",
        "high-fantasy",
        "adventure",
        "fiction",
        "novels",
        "literature",
      ],
      hasMovieAdaptation: true,
      pages: 1216,
      translations: {
        spanish: "El señor de los anillos",
        chinese: "魔戒",
        french: "Le Seigneur des anneaux",
      },
      reviews: {
        goodreads: {
          rating: 4.52,
          ratingsCount: 630994,
          reviewsCount: 13417,
        },
        librarything: {
          rating: 4.53,
          ratingsCount: 47166,
          reviewsCount: 452,
        },
      },
    },
    {
      id: 2,
      title: "The Cyberiad",
      publicationDate: "1965-01-01",
      author: "Stanislaw Lem",
      genres: [
        "science fiction",
        "humor",
        "speculative fiction",
        "short stories",
        "fantasy",
      ],
      hasMovieAdaptation: false,
      pages: 295,
      translations: {},
      reviews: {
        goodreads: {
          rating: 4.16,
          ratingsCount: 11663,
          reviewsCount: 812,
        },
        librarything: {
          rating: 4.13,
          ratingsCount: 2434,
          reviewsCount: 0,
        },
      },
    },
    {
      id: 3,
      title: "Dune",
      publicationDate: "1965-01-01",
      author: "Frank Herbert",
      genres: ["science fiction", "novel", "adventure"],
      hasMovieAdaptation: true,
      pages: 658,
      translations: {
        spanish: "",
      },
      reviews: {
        goodreads: {
          rating: 4.25,
          ratingsCount: 1142893,
          reviewsCount: 49701,
        },
      },
    },
    {
      id: 4,
      title: "Harry Potter and the Philosopher's Stone",
      publicationDate: "1997-06-26",
      author: "J. K. Rowling",
      genres: ["fantasy", "adventure"],
      hasMovieAdaptation: true,
      pages: 223,
      translations: {
        spanish: "Harry Potter y la piedra filosofal",
        korean: "해리 포터와 마법사의 돌",
        bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
        portuguese: "Harry Potter e a Pedra Filosofal",
      },
      reviews: {
        goodreads: {
          rating: 4.47,
          ratingsCount: 8910059,
          reviewsCount: 140625,
        },
        librarything: {
          rating: 4.29,
          ratingsCount: 120941,
          reviewsCount: 1960,
        },
      },
    },
    {
      id: 5,
      title: "A Game of Thrones",
      publicationDate: "1996-08-01",
      author: "George R. R. Martin",
      genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
      hasMovieAdaptation: true,
      pages: 835,
      translations: {
        korean: "왕좌의 게임",
        polish: "Gra o tron",
        portuguese: "A Guerra dos Tronos",
        spanish: "Juego de tronos",
      },
      reviews: {
        goodreads: {
          rating: 4.44,
          ratingsCount: 2295233,
          reviewsCount: 59058,
        },
        librarything: {
          rating: 4.36,
          ratingsCount: 38358,
          reviewsCount: 1095,
        },
      },
    },
  ];

  function searchForTitle(name){
    const dataName = data.find((x) =>{
        return x.title === name

  })
  return dataName

}

console.log(searchForTitle('A Game of Thrones'))
console.log(searchForTitle('A Game of Thronesses'))


  function getPage(x){
    const page = data.filter((item) => {
        return item.pages > x
    })
    return page
  }
  console.log(getPage(500))


  // if/else and tenary operator
const color = 'red';
if (color ==='red') {
    console.log(true)
}
else{
    console.log(false)
}


// ? then
// : else

const findcolor = color === 'red' ? 'color is red' : 'color is not red';
console.log(findcolor) 


const num = 1;
const getNum = num > 10 ? 'this is true' : 'this is not true';
console.log(getNum)

const num1 = 2;

if (num1 > 10){
    console.log('this is true')
}
else{
    console.log('this is not true')
}


// Assignment --- change code to switch statement


// Spread Operator(can be used instead of concat)... used to copy
// ...name

const array = ['one', 'two', 'three']

const myarray = ['four', 'five']

const secondarray = ['main', 'goal',...array]
console.log(secondarray)


const joinarray = array.concat(myarray)
console.log(joinarray)


const otherInfo = {
    item: ['one', 'goal', 'cr7']
}

const another = {
    names: 'sola',
}

const person = {

    name: 'mayowa',
    job: 'web',
    ...otherInfo
}
console.log(person)



// How to style

// const btn_click = document.getElementById('btn-click')
// btn_click.addEventListener('click', () => {
//     const myform = document.getElementById('myform')
//     myform.style.backgroundColor ='black';
//     myform.style.padding = '30px'
// })

// const mydiv = document.getElementById('mydiv');
// mydiv.style.fontWeight = 'bolder'


const btn_click = document.getElementById('btn-click')
btn_click.addEventListener('click', () => {
    const myform = document.getElementById('mytext')
    myform.style.fontSize ='50px';
    
})
