import Address from "./address";

class Customer {

    _id: string;
    _name: string;
    _address: Address;
    _active: boolean;

    constructor(id: string, name: string, address: Address, active: boolean) {
        this._id = id;
        this._name = name;
        this._address = address;
        this._active = active;
        this.validate();
    }


    validate() {
        if(this._name.length === 0 ) {
            throw new Error("Name is required");
        }

        if(this._id.length === 0) {
            throw new Error("Id is required");
        }
    }


}