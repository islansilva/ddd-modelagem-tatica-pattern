import Address from "./address";

export default class Customer {

    private  _id: string;
    private _name: string;
    private _address!: Address;
    private _active: boolean;
    private _rewardPoints: number = 0;



    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
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

    }

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    set Address(address: Address) {
        this._address = address;
    }

    get name(): string {
        return this._name;
    }

    get rewardPoints(): number {
        return this._rewardPoints;
    }

    addRewardPoints(points: number) {
        this._rewardPoints += points;
    }

    isActive(): boolean {
        return this._active;
    }

    get id() : string {
        return 
    }

    activate() {
        if(this._address === undefined) {
            throw new Error("Address is required");
        }
        this._active = true;
    }

    desactivate() {
        this._active = false;
    }


}