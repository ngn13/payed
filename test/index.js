import Payed from "../index.js"
const payed = new Payed("YOUR_API_KEY")
payed.confirm(
    "0x1139e334e4e4af96dfb50e36e4c77d4b487f9519", 
    "0x959e2b57bd1ef3a56b63310c95077c55d98ca749", 
    352.15
).then((res)=>{
    console.log("Confirmed?", res)
}).catch((err)=>{
    console.log(err)
})

let res = await payed.confirm(
    "0x1139e334e4e4af96dfb50e36e4c77d4b487f9519", 
    "0x959e2b57bd1ef3a56b63310c95077c55d98ca749", 
    355.15
)
console.log(res)