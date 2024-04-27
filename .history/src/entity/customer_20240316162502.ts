class Customer {

    _id: string;
    _name: string;
    _address: string;
    _active: boolean;

    constructor(id: string, name: string, address: string, active: boolean) {
        this._id = id;
        this._name = name;
        this._address = address;
        this._active = active;
    }


    validate() {
        if(this._name.length)
    }


}