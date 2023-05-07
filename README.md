# Payed
Payed is a NodeJS module that lets you check if a transaction is made on
the ethereum network. It works using the [etherscan API](https://docs.etherscan.io/api-endpoints)
so you will need to get an [etherscan API key](https://docs.etherscan.io/getting-started/creating-an-account)

### Install
```
npm i payed
```

### Initializing
First you will need import `Payed`:
```
import Payed from "payed"
```
Then you can initialize it by providing your API key:
```
const payed = new Payed("YOUR_API_KEY")
```

### Usage
To use `payed` to confirm a payment, you can use the `confirm` method
```
let res = await payed.confirm(
    "SOURCE_ADDRESS", 
    "DESTINATION_ADDRESS", 
    "PAYMENT_AMOUNT_IN_USD"
)
console.log("Confirmed?", res)
```
Or you can use the `.then()` syntax:
```
payed.confirm(
    "SOURCE_ADDRESS", 
    "DESTINATION_ADDRESS", 
    "PAYMENT_AMOUNT_IN_USD"
).then(res=>{
    console.log("Confirmed?", res)
}).catch(err=>{
    console.log("Error!", err)
})
```

### License
This project is under MIT license, feel free to use it in your projects