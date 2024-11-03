import { Seller } from "./../src/seller";
describe("Interface", () => {
  it("should test the interface", () => {
    const seller: Seller = {
      id: 1,
      name: "Farhan",
      nib: "1234567890",
      npwp: "1234567890",
    };

    seller.name = "ramadan";

    console.log(seller);
  });
});
