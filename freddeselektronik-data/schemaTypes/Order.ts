export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
    {
        name: 'name',
        title: 'First name',
        type: 'string',

        },
        {
        name: 'lastname',
        title: 'Last name',
        type: 'string',

        },
      {
        name: 'email',
        title: 'Email',
        type: 'string',

      },
      {
        name: 'address',
        title: 'Address',
        type: 'string',

      },
      {
        name: 'city',
        title: 'City',
        type: 'string',
  
      },
      {
        name: 'country',
        title: 'Country',
        type: 'string',
     
      },
      {
        name: 'zip',
        title: 'Zip',
        type: 'string',
    
      },
      {
        name: 'orderId',
        title: 'Order ID',
        type: 'number',
      },
      
      {
        name: 'products',
        title: 'Products',
        type: 'array',
        of: [
            {
                type: 'object',
                fields: [
                    {
                        name: 'id',
                        title: 'ID',
                        type: 'number',
                    },
                    {
                        name: 'name',
                        title: 'Name',
                        type: 'string',
                    },
                    {
                        name: 'price',
                        title: 'Price',
                        type: 'number',
                    },
                    {
                        name: 'quantity',
                        title: 'Quantity',
                        type: 'number',
                    },
                    {
                        name: 'totalPrice',
                        title: 'Total Price',
                        type: 'number',
                    },
                ],
            },
        ],
    },
],
};