import { imageUploadUtils } from "../../helpers/cloudinary.js";
import Product from "../../models/Product.js";

export const handleImageUpload =async(req, res)=>{

    try {

        const b64 = Buffer.from(req.file.buffer).toString('base64');
        const url = "data:" + req.file.mimetype + ";base64," +b64;
        const result = await imageUploadUtils(url);

        res.json({
            success:true,
            result
        })
        
    } catch (error) {
        

        console.log(error);
        res.json({
            success:false,
            message:"Error occur while uploading image"
        })
    }

}



//add a new product
export const addProduct  = async (req, res)=>{


    try {
        
const {image, title, description, category, brand, price, salePrice, totalStock} = req.body;

const newlyCreatedProducts = new Product({
    image, title, description, category, brand, price, salePrice, totalStock
})

await newlyCreatedProducts.save();

res.status(201).json({success:true, data:newlyCreatedProducts}); 
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Error Occured while adding product"
        })
    }
}

//fetch all products

export const fetchAllProducts  = async (req, res)=>{


    try {
        
        const listofProducts = await Product.find({});
        res.status(200).json({
            success:true, 
            data:listofProducts
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Error Occured while fetching all product"
        })
    }
}

//edit a  products
export const editProduct  = async (req, res)=>{


    try {
       
        const {id} = req.params;
        console.log('id that throw error is of type',id);
        
        const {image, title, description, category, brand, price, salePrice, totalStock} = req.body;
        let findProduct = await Product.findById(id);

        if(!findProduct) return res.status(404).json({
            success:false,
            message:'Product not found'
        })

        
        findProduct.title = title || findProduct.title;
        findProduct.description = description || findProduct.description;
        findProduct.image = image || findProduct.image;
        findProduct.category = category || findProduct.category;
        findProduct.brand = brand || findProduct.brand;
        findProduct.price = price === '' ? 0: price || findProduct.price;
        findProduct.salePrice = salePrice === '' ? 0 : salePrice || findProduct.salePrice;
        findProduct.totalStock = totalStock || findProduct.totalStock;

        await findProduct.save();

        return  res.status(200).json({
            success:true, 
            data:findProduct
        })
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Error Occured while editing product"
        })
    }
}

//delete a product

export const deleteProduct  = async (req, res)=>{


    try {
        const {id} = req.params;

        const findProduct = await Product.findByIdAndDelete(id)
        if(!findProduct) return res.status(404).json({success:false, message:'Product not found'})

            res.status(200).json({
                success:true, 
                message:'Product deleted successfully'
            })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Error Occured while deleting product"
        })
    }
}