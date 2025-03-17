import React, { useEffect, useState } from "react";
import banner1 from "../../assets/banner4.jpg";
import banner2 from "../../assets/banner5.jpg";
import banner3 from "../../assets/banner7.webp";
import { Button } from "@/components/ui/button";
import { BabyIcon, ChevronLeft, ChevronRight, Watch } from "lucide-react";
import { GiRunningShoe } from "react-icons/gi";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { SiNike } from "react-icons/si";
import { SiAdidas } from "react-icons/si";
import { SiPuma } from "react-icons/si";
import { SiZara } from "react-icons/si";
import { SiHandm } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllFilteredProducts, fetchProductDetails } from "@/store/shop/product-slice";
import ShoppingProductTile from "@/components/shopping-view/ShoppingProductTile";
import { useNavigate } from "react-router-dom";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { toast } from "sonner";
import ProductDetailsDialogue from "@/components/shopping-view/productDetails";


function ShoppingHome() {
  const slides = [banner1, banner2, banner3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const dispatch = useDispatch();
  const { productList, productDetails } = useSelector((state) => state.shopProducts);
  const { user } = useSelector((state) => state.auth);
  const [openDetailsDialog, setopenDetailsDialog] = useState(false);
  

  const navigate = useNavigate();

  const categories = [
    { id: "men", label: "Men", icon: FaMale },
    { id: "women", label: "Women", icon: FaFemale },
    { id: "kids", label: "Kids", icon: BabyIcon },
    { id: "accessories", label: "Accessories", icon: Watch },
    { id: "footwear", label: "Footwear", icon: GiRunningShoe },
  ];

  const brand = [
    { id: "nike", label: "Nike", icon: SiNike },
    { id: "adidas", label: "Adidas", icon: SiAdidas },
    { id: "puma", label: "Puma", icon: SiPuma },
    { id: "levi", label: "Levi's", icon: SiHandm },
    { id: "zara", label: "Zara", icon: SiZara },
    { id: "h&m", label: "H&M", icon: SiHandm },
  ];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);


  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilters = {
      [section]: [getCurrentItem.id],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilters));
    navigate("/shop/listing");
  }



    function handleGetProductDetails(getCurrentProductId) {
      dispatch(fetchProductDetails(getCurrentProductId));
    }


    function handleAddToCart(getCurrentProductId) {
      console.log(getCurrentProductId);
      dispatch(
        addToCart({
          userId: user?.id,
          productId: getCurrentProductId,
          quantity: 1,
        })
      ).then((data) => {
        if (data?.payload?.success) {
          dispatch(fetchCartItems(user?.id));
          toast.success(" Product added successfully")
        }
      });
    }
  

      useEffect(() => {
        if (productDetails !== null) {
          setopenDetailsDialog(true);
        }
      }, [productDetails]);


  return (
    <div className=" flex flex-col min-h-screen ">
      <div className="flex items-center justify-center w-full mt-10 ">
        <div className="relative w-[95%] h-[520px] overflow-hidden rounded shadow-2xl shadow-black">
          {slides.map((slide, index) => (
            <img
              src={slide}
              key={index}
              className={`absolute ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              } top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 `}
            />
          ))}

          <Button
            onClick={() =>
              setCurrentSlide(
                (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
              )
            }
            variant="outline"
            size="icon"
            className="absolute top-1/2  cursor-pointer left-4 transform -translate-y-1/2 bg-white/80"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            onClick={() =>
              setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
            }
            variant="outline"
            size="icon"
            className="absolute top-1/2 cursor-pointer  right-4 transform -translate-y-1/2 bg-white/80"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Shop by Category
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((item) => (
              <Card
                className="cursor-pointer hover:shadow-lg  transition-shadow"
                onClick={() => handleNavigateToListingPage(item, "category")}
              >
                <CardContent className="flex flex-col items-center justify-center p-6 ">
                  <item.icon className="w-12 h-12 mb-4 text-primary" />
                  <span className="">{item.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Brand</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brand.map((item) => (
              <Card
                className="cursor-pointer hover:shadow-lg  transition-shadow "
                onClick={() => handleNavigateToListingPage(item, "brand")}
              >
                <CardContent className="flex flex-col items-center justify-center p-6 ">
                  <item.icon className="w-12 h-12 mb-4 text-primary" />
                  <span className="">{item.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Feature Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {productList && productList.length > 0
              ? productList.map((productItem) => (
                  <ShoppingProductTile product={productItem} handleGetProductDetails={handleGetProductDetails} handleAddToCart={handleAddToCart} />
                ))
              : null}
          </div>
        </div>
      </section>
      <ProductDetailsDialogue
        open={openDetailsDialog}
        setOpen={setopenDetailsDialog}
        productDetails={productDetails}
              

      />
    </div>
  );
}

export default ShoppingHome;
