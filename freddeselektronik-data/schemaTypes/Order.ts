

export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
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
        name: 'agreedToTerms',
        title: 'Agreed to Terms',
        type: 'boolean',
      },
    ],
  };
  