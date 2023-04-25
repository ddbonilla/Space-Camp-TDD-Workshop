// A movie store is asking you to make an application
// the application can add movies to an inventory array,

// track if a movie is rented out or in stock,

// and calculate a customer's total cost for the # of rentals * # of days.

// A customer can only rent a movie if it is in stock.

//Example movie class:
export let inventory: Array<Movie> = [];

export class Movie {
  title: string;
  inStock: boolean;
  daysRented: number;

  constructor(title: string) {
    this.title = title;
    this.inStock = true;
    this.daysRented = 0;
  }

  rentMovie() {
    this.inStock = false;
  }

  incrementDaysRented() {
    this.daysRented += 1;
  }
}

export class Customer {
  name: string;
  rentals: Array<Movie>;
  checkoutCost: number;

  constructor(name: string) {
    this.name = name;
    this.rentals = [];
    this.checkoutCost = 0;
  }

  rentMovie(movie: Movie) {
    movie.inStock
      ? (this.rentals.push(movie),
        movie.incrementDaysRented(),
        (movie.inStock = false))
      : ("Movie not in stock");
  }

  calculate(): number {
    this.rentals.map((movie) => {
      this.checkoutCost += movie.daysRented;
    });
    return this.checkoutCost;
  }
}

export function addMovie(movie: Movie) {
  inventory.push(movie);
  return inventory.length;
}
//you need more functions than just this

// export function addMovie(movie: Movie) {
//   inventory.push(movie);
// }
