import { reactive } from "vue";

type DessertItemInfo = {
    name: string
    quantity: number
    pricePerItem: number
    totalPrice: number
}

type CartType = {
    items: Array<DessertItemInfo>
    total: number
}


// sweet
const cart = reactive<CartType>({
    items:[],
    total: 0
})


const addItem = (item: DessertItemInfo) =>{
    try{
        cart.items.push(item)
        cart.total += item.quantity        
    }   
    catch (error){
        console.error("Error adding item to cart:",error)
    } 

}

const updateItem = (item: DessertItemInfo, name: string, price: number) => {
    try{
        const foundItemIndex = cart.items.findIndex( item => item.name == name && item.pricePerItem == price )

        if (foundItemIndex != -1){
            cart.items[foundItemIndex] = item
            return 
        }
        throw Error("no item found matching the keys among card")
    }
    catch (error){
        console.error("Error updating item to cart:", error)
    }
}