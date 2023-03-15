import React from "react";
import {useSelector} from "react-redux";
import {BannerStrip} from "../layout/widgets/banners/BannerStrip";
import {MenuFoodItems} from "../layout/widgets/menu/MenuFoodItems";
import {MenuNavBar} from "../layout/widgets/menu/MenuNavBar";
import {MenuSlider} from "../layout/widgets/sliders/MenuSlider";

type PageProps = {
  children?: React.ReactNode;
}

const Menu:React.FunctionComponent<PageProps> = ({ children, ...props}) : any | null => {
    
    // @ts-ignore
    const menuCategories = useSelector(state => state.menu.value);
    
  return (
      <>
    
          <MenuSlider />
          
          <section className="bg-grey-pattern">
          
              <MenuNavBar menuCategories={menuCategories.products} children={null} />
              
              <BannerStrip bg={`banners/chicken-burger.png`} element={`banners/strip-img-art-chicken-burger.svg`} children={null} />
              
              <MenuFoodItems />
          
          </section>

      </>
  );
  
};

export default Menu;