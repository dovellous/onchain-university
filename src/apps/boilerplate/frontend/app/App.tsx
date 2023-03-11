import React, {lazy, useEffect} from 'react';
import {useDispatch} from "react-redux";
import FoodMenu from '../data/menu.json';
import {setProducts, setAddons} from "./redux/features/menu/MenuSlice";
import {useAuth} from "./auth/provider/AuthProvider";
import RoutePath from './routes/RoutePath';
import './assets/App.scss';


type AppProps = {
  children?: React.ReactNode;
  basename: string | undefined;
}

const App:React.FunctionComponent<AppProps> = ({ children, ...props}) : any | null => {

  const {basename} = props;

    const dispatch = useDispatch();
    
    useEffect(()=>{
        
        const newMenuCategories:any = [
            {...FoodMenu['value-meal'], ...{category_slug: 'galore', category_name: 'Galore'}},
            {...FoodMenu.sadza, ...{category_slug: 'ugali', category_name: 'Ugali'}},
            {...FoodMenu.njano_rice, ...{category_slug: 'spicy_njano_rice', category_name: 'Spicy Njano Rice'}},
            {...FoodMenu.burgers, ...FoodMenu.wraps, ...{category_slug: 'burger_n_wraps', category_name: 'Burger \'n\' Wraps'}},
            {...FoodMenu.wings, ...{category_slug: 'lets_wing_it', category_name: 'Let\'s Wing It'}},
            {...FoodMenu.promotions,...FoodMenu.others, ...{category_slug: 'combos', category_name: 'Combos'}},
            {...FoodMenu.grilled, ...{category_slug: 'grill', category_name: 'Grill'}},
            {...FoodMenu['family-sharing'], ...{category_slug: 'sharing', category_name: 'Sharing'}},
            {...FoodMenu.platters, ...{category_slug: 'platters', category_name: 'Platters'}},
            {...FoodMenu.salads, ...{category_slug: 'salads', category_name: 'Salads'}},
            {...FoodMenu.breakfast, ...{category_slug: 'breakfast', category_name: 'Breakfast'}},
            {...FoodMenu.dessert, ...{category_slug: 'dessert', category_name: 'Dessert'}},
            {...FoodMenu.addons, ...{category_slug: 'add_ons', category_name: 'Add Ons'}},
            {...FoodMenu.beverages, ...{category_slug: 'drinks', category_name: 'Drinks'}},
        ];
        
        dispatch(setProducts(newMenuCategories));
        
        dispatch(setAddons(FoodMenu.addons));
        
    },[])
    
    return (
      <>
          <RoutePath />
      </>
  );
  
}

export default App;
