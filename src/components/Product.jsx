import React from "react";

const Product = ({products}) => {
  // TODO: Remove below const and instead import them from chakra
  // console.log(products[0].title)
  
  const Text = () => <div />;
  const Image = () => <div />;
  const Box = () => <div />;
  const Stack = () => <div />;
  const Heading = () => <div />;
  const Tag = () => <div />;
  const TagLabel = () => <div />;
  return (
    <div>
      {/* <h1>Amit</h1> */}
      {products.map(elem=>(
        // <h1>{console.log(elem)}</h1>
        //   <Stack key={elem.id} data-cy="product">
        //   <Image data-cy="product-image" src={elem.imageSrc} />
        //   <Text data-cy="product-category"><p>{elem.title}</p></Text>
        //   <Tag>
        //     <TagLabel data-cy="product-gender">{elem.gender}</TagLabel>
        //   </Tag>
        //   <Heading data-cy="product-title">{elem.title}</Heading>
        //   <Box data-cy="product-price">{elem.price}</Box>
        // </Stack>
        <div key={elem.id} data-cy="product">
          <p data-cy="product-title">{elem.title}</p>
          <img data-cy="product-image" src={elem.imageSrc} alt="" />
          <p data-cy="product-gender">{elem.gender}</p>
          <p data-cy="product-category">{elem.catagory}</p>
          <p data-cy="product-price">{elem.price}</p>
        </div>
        
      ))}
    
    </div>
  );
};

export default Product;
