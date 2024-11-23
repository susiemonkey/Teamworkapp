import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const RecommendedProducts = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('https://world.openpetfoodfacts.org/api/v0/product/20106836.json')
      .then(response => response.json())
      .then(data => {
        if (data.status === 1) {
          setProduct(data.product);
        }
      });
  }, []);

  return (
    <div className="py-12">
      {/* Section Header */}
      <div className="text-center mb-8">
        <Typography variant="h2" color="blue-gray" className="mb-2">
          Featured Product
        </Typography>
        <Typography variant="lead" color="gray">
          Check out our recommended pet food
        </Typography>
      </div>

      {/* Product Card */}
      {!product ? (
        <div className="text-center">Loading...</div>
      ) : (
        <Card className="max-w-sm mx-auto">
          <CardHeader className="h-64">
            <img
              src={product.image_url || '/api/placeholder/400/400'}
              alt={product.product_name}
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {product.product_name}
            </Typography>
            <Typography color="gray">
              {product.brands}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button fullWidth={true}>View Details</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default RecommendedProducts;