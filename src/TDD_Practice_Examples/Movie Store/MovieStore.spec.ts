//dont forget to import your functions
import { inventory } from "./MovieStore";
import { Movie } from "./MovieStore";
import { addMovie } from "./MovieStore";
import { Customer } from "./MovieStore";

describe("Movie Store", () => {
  test("addMovies() should allow to add movies to an inventory array", () => {
    let movie1 = new Movie("Top Gun");
    addMovie(movie1);
    expect(inventory.length).toEqual(1);
  });

  test("rentMovie() should set inStock to false for a movie", () => {
    let movie1 = new Movie("Top Gun");
    let movie2 = new Movie("Titanic");

    movie1.rentMovie();

    expect(movie1.inStock).toBe(false);
    expect(movie2.inStock).toBe(true);
  });

  test("calculate() should calculate a customers's total cost for the rentals", () => {
    let movie1 = new Movie("Top Gun");
    let customer1 = new Customer("Bob");
//Movie isStock becomes false
    // movie1.rentMovie();
    
    customer1.rentMovie(movie1);
    customer1.calculate();
    expect(customer1.checkoutCost).toEqual(1);
  });

  test("customer.rentMovie() should allow a customer to rent a movie if it's in stock", () => {
    let movie1 = new Movie("Top Gun");
    let customer1 = new Customer("Bob");

    //Makes movie not inStock
    movie1.rentMovie();
    customer1.rentMovie(movie1)
    expect(customer1.rentals.length).toEqual(0);
  });
});
