import userModel from '../models/userModel.js'
import redisClient from '../config/redisClient.js';

const CACHE_KEY = 'cart_list';

// add products to cart
const addToCart = async (req, res) =>{
    try {
        
        const {userId, itemId, platform } = req.body;

        const userData = await userModel.findById(userId)

        let cartData = await userData.cartData;

        if(cartData[itemId]){
            if(cartData[itemId][platform]){
                cartData[itemId][platform] += 1
            }
            else{
                cartData[itemId][platform] = 1
            }
        }else{
            cartData[itemId] = {}
            cartData[itemId][platform] = 1
        }

        await userModel.findByIdAndUpdate(userId, {cartData})

        await redisClient.del(CACHE_KEY); 

        res.json({success: true, message: "Added to cart"})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})  
    }
}







//update user cart
const updateCart = async (req, res) =>{
    try {
        
        const { userId, itemId, platform, quantity } = req.body;

        const userData = await userModel.findById(userId)

        let cartData = await userData.cartData;

        cartData[itemId][platform] = quantity

        await userModel.findByIdAndUpdate(userId, {cartData})

         await redisClient.del(CACHE_KEY); 

        res.json({success: true, message: " Cart Updated"})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})  
    }
}




//get user cart data
const getUserCart = async (req, res) => {
    try {
        
        const { userId } = req.body;

        const cachedCartList = await redisClient.get(CACHE_KEY);

        if(cachedCartList){
            return res.json({ success: true, games: JSON.parse(cachedCartList) });
        }

        const userData = await userModel.findById(userId);

        let cartData = await userData.cartData;

        await redisClient.setEx(CACHE_KEY, 86400, JSON.stringify(cartData));

        res.json({success: true, cartData });

    

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message}) 
    }
}



export {addToCart, updateCart, getUserCart}