export class Plan {
  years: number;
  budget: number;
  products: number;

  constructor(_years: number, _budget: number, _products: number) {
    this.years = _years;
    this.budget = _budget;
    this.products = _products;
  }
}
