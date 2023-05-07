import axios from "axios"

class Payed{
    constructor(key, offset=5){
        this.key = key
        this.offset = offset
    }

    usd_to_eth(dolar){
        return new Promise((resolve, reject)=>{
            axios.get(`https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${this.key}`)
            .then((res)=>{
                let oneusd = 1/res.data["result"]["ethusd"]
                resolve(dolar*oneusd)
            })
        })
    }

    confirm(src, dst, value){
        return new Promise((resolve, reject)=>{
            axios.get(`https://api.etherscan.io/api?module=account&action=txlist&address=${src}&startblock=0&endblock=99999999&page=1&offset=${this.offset}&apikey=${this.key}&sort=desc`)
            .then((res)=>{
                this.usd_to_eth(value).then((eth)=>{
                    let json = res.data
                    if(json["status"]===0)
                        return reject(json["result"])
                    
                    json["result"].forEach((r)=>{
                        if(
                            r["from"] === src &&
                            r["to"] === dst &&
                            r["value"]/1000000000000000000 >= eth
                        ){
                            resolve(true)
                        }
                    })
    
                    resolve(false)
                })
            })
        })
    }
}

export {
    Payed as default
}