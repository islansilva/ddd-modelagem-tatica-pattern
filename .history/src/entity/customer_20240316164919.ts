import Address from "./address";

export default class Customer {

    _id: string;
    _name: string;
    _address!: Address;
    _active: boolean;

    constructor(id: string, name: string) {
        private this._id = id;
        private this._name = name;
        this._active = true;
        this.validate();
    }


    validate() {
        if(this._name.length === 0 ) {
            throw new Error("Name is required");
        }

        if(this._id.length === 0) {
            throw new Error("Id is required");
        }

        if(this._address === undefined) {
            throw new Error("Address is required");
        }

    }

    set Address(address: Address) {
        this._address = address;
    }

    activate() {
        this._active = true;
    }

    desactivate() {
        this._active = false;
    }


}