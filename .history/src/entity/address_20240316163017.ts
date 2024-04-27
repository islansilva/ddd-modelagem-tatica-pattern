class Address {
    _street: string = "";
    _number: number = 0;
    _zip: string = "";
    _city: string = "";

    constructor(street: string, number: number, zip: string, city: string) {
        this._city = city;
        this._number = number;
        this._street = street;
        this._zip = zip;

        this.validate();
    }

    validate() {
        if 
    }
}