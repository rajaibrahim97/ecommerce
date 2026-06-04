import React, {useContext,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from './RelatedProduct';

const Product = () => {
  const {productId} = useParams();
  const {products,currency,addToCart} = useContext(ShopContext);
  const [productData,setProductData] = useState(false);
  const [image,setImage] = useState('');
  const [size,setSize] = useState('');

  useEffect(() => {
   fetchProductData();
  }, [productId,products])
  

  const fetchProductData = async () =>{
    products.map((item)=>{
      if (item._id === productId){
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }


  useEffect(()=>{

    console.log(productData)
  },[productData])
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/*---------------- Product Data--------------------- */}
      <div className='flex gap-12 flex-col sm:flex-row sm:gap-12'>
        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
            <div className='flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                {
                  Array.isArray(productData.image) && productData.image.map((item,index)=>(
                    <img onClick={()=> setImage(item)} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' src={item} key={index} alt="" />
                  ))
                }
            </div>
            <div className='w-ful sm:w-[80%]'>
                <img className='w-full h-auto'  src={image} alt="" />
            </div>
        </div>
        {/* ------ Product Info ------ */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
                <img src={assets.star_icon} alt="" className="3 5" />
                <img src={assets.star_icon} alt="" className="3 5" />
                <img src={assets.star_icon} alt="" className="3 5" />
                <img src={assets.star_icon} alt="" className="3 5" />
                <img src={assets.star_dull_icon} alt="" className="3 5" />
                <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {Array.isArray(productData.sizes) && productData.sizes.map((item,index)=>(
                <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 cursor-pointer ${item===size ? 'border-orange-500':''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5'/>
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Orignal product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* -------------Description & Review Section------------ */}
        <div className='mt-20'>
              <div className='flex'>
                <b className='border px-5 py-3 text-sm'>Description</b>
                <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
              </div>
              <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia necessitatibus deleniti dolorum magni sequi? Dignissimos magni voluptas, natus a nemo in neque, voluptate laudantium corrupti alias earum maiores quos officiis. Harum similique aut beatae quidem temporibus excepturi, facere optio laudantium qui id fugiat, incidunt, amet aperiam maxime ad sed doloribus iusto cum nobis dolores ipsum. Officiis quam expedita voluptatibus pariatur iure ad facere ratione optio!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, impedit. Voluptate praesentium necessitatibus, sit repudiandae assumenda doloremque obcaecati perferendis dolor amet, culpa aperiam voluptates? Repudiandae animi consectetur debitis rerum. Doloremque laborum, consequatur inventore officiis reprehenderit et.</p>

              </div>
        </div>
        {/* -----------Display Related Products */}
        <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
