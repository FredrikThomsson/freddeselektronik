

export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
    {
        name: 'name',
        title: 'Product name',
        type: 'string',

        },
        
       
      {
        name: 'price',
        title: 'Price',
        type: 'string',

      },
      {
        name: 'oldprice',
        title: 'Old price',
        type: 'string',

      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'category' }] }], // Array of references to categories
  
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
     
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
    
      },

    ],
  };
  