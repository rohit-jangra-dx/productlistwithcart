//contains the class to store the items incoming from server.
import { ImageObjType } from "@/components/DessertCard/DessertImage.vue"
import { reactive } from "vue"

type ServerDataType = {
    image: ImageObjType
    name: string
    category: string
    price: number
}

class DessertStore{
    data: Array<ServerDataType>

    constructor(){
        this.data = []
    }

    async fetchData() {
        try {
            const response = await fetch('/assets/data.json')
            const data: Array<ServerDataType> = await response.json()

            this.data = data

        } catch( error){
            console.error("Error fetchin data:", error)
        }
    }

    findItem(name: string, price: number): ServerDataType | void{
        if (this.data.length === 0){
            throw Error("Data isn't ready yet!")
        }

        const itemIndex = this.data.findIndex((item) => item.name === name && item.price === price)

        if ( itemIndex === -1) {
            throw Error(`No data found matching name${name} and price${price}`)
        }

        return this.data[itemIndex]
    }
}

export const  dessertData = reactive(new DessertStore())