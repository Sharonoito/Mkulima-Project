class Mkulima{
    constructor(farms,vendors,products,orders){ 
        this.farms = farms;
        this.vendors = vendors;
        this.products = products;
        this.orders = orders;
        }
    addFarm(farmId,name,farmer,phone,address){ 
        var farm={
            farmId:farmId,
            name:name,
            farmer:farmer,
            phone:phone,
            address:address,
        }
        this.farms.unshift(farm)
         return this.farms
    } 

     removeFarm(farmId){ 
         let farm1=this.farms.find(farm1=>farm1.farmId==farmId)
         
         return delete this.farms[farm1]
          
    }
      updateFarm (farmId,name,farmer,phone,address){
         let newFarm=this.farms.find(newFarm=>newFarm.name=="Job")
        newFarm={
            farmId:farmId,
            name:name,
            farmer:farmer,
            phone:phone,
            address:address,
        }
        return newFarm
    }   
    getFarm(farmId){
        let farm2=this.farms.find(farm2=>farm2.farmId==farmId)
        return farm2
    }   
    addProduct(productId,name,price){
        var product={
            productId:productId,
            name:name,
            price:price
        }
        this.products.unshift (product)      
        return this.products
    }
    removeProduct(productId){
        let product=this.products.find(product=>product.productId==productId)
        return delete this.products[product]
    }  
    updateProduct(productId,name,price){
        let newProduct=this.products.find(newProduct=>newProduct.productId==7080)
        newProduct={ 
            productId:productId,
            name:name,
            price:price,
    }
    return newProduct
    }  
    getProduct(productId){
        let product2=this.products.find(product2=>product2.productId==productId)
        return product2
    } 
    printProducts(){
        for(let items of this.products)
        console.log([`${items.name}:${items.price}`])
    }
    calculateOrderCost(productId,quantity){
        let product2=this.products.find(product2=>product2.productId==productId)
        return product2.price*quantity
    }
    }
    var mkulima=new Mkulima([],[],[],[])
    console.log(mkulima.addFarm(17800,"shamba","Job","0713167289","Kabiria"))
    console.log(mkulima.addFarm(20081,"mauafarm","Peter","071278982","Homabay"))
    console.log(mkulima.addFarm(51098,"vegesfarm","Maina","079027763","Nairobi"))
    console.log(mkulima.addFarm(23518,"sokofarm","Mary","078963782","Kendubay"))

    console.log(mkulima.removeFarm(51098))

    console.log(mkulima.updateFarm(50008,"sugarcanefarm","njorege","071989839","Mombasa"))

    console.log(mkulima.getFarm(23518))

    console.log(mkulima.addProduct(0894,"sweetpotatoes",500))
    console.log(mkulima.addProduct(5067,"orange",800))
    console.log(mkulima.addProduct(7080,"maize",1000))

    console.log(mkulima.removeProduct(5067))

    console.log(mkulima.updateProduct(1107,"carrots",650))

    console.log(mkulima.getProduct(0894))

    mkulima.printProducts()

    console.log(mkulima.calculateOrderCost(7080,5))




    

        