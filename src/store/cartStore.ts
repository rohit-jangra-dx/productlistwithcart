import { reactive } from "vue";

// when adding dessert to cart
export type DessertItem ={
    name: string
    quantity: number
    pricePerItem: number
}

// internal to cart class
type DessertItemInfo = DessertItem & {
    totalPrice: number
}

class CartStore{
    items: Array<DessertItemInfo>
    private _len: number
    private _totalAmount: number
    
    constructor(items: Array<DessertItemInfo> = []){
        this.items = items
        this._len = 0
        this._totalAmount = 0
    }

    get len(): number {
        return this._len
    }

    get totalAmount(): number {
        return this._totalAmount
    }

    findItemIndex(name: string, price: number): number {
        return  this.items.findIndex( item => item.name == name && item.pricePerItem == price )
    }

    addItem(item: DessertItem){
            const totalPrice = item.pricePerItem * item.quantity
            this.items.push({...item, totalPrice: totalPrice})

            this._len += item.quantity
            this._totalAmount += totalPrice
    }

    updateItem(item: DessertItem, name: string, price: number){
            const itemIndex = this.findItemIndex(name,price)
    
            if (itemIndex === -1){
                throw new Error("No item found matching the keys in cart")
            }
            
            const oldItem = this.items[itemIndex]
            const newTotalPrice = item.pricePerItem * item.quantity

            this.items[itemIndex] = {...item, totalPrice: newTotalPrice}

            this._len += item.quantity - oldItem.quantity
            this._totalAmount += newTotalPrice - oldItem.totalPrice
    }


    deleteItem(name: string, price: number){
            const itemIndex = this.findItemIndex(name, price)

            if (itemIndex === -1){
                throw new Error("No item found matching the keys in cart")
            }
   

            const [removedItem] = this.items.splice(itemIndex,1)

                this._len -= removedItem.quantity
                this._totalAmount -= removedItem.totalPrice
    }
}


export const cart = reactive<CartStore>(new CartStore())



