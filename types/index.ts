export type ProductType = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  };
  
  export type ServiceType = {
    id: number;
    name: string;
    description: string;
    icon: string;
  };
  
  export type TeamMemberType = {
    login: {
      uuid: string;
    };
    name: {
      first: string;
      last: string;
    };
    email: string;
    picture: {
      large: string;
    };
  };

  