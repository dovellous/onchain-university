import React, {useState} from "react";
import Snippets from "../../../../helpers/Snippets";

type MenuNavBarProps = {
	menuCategories: any;
	children: React.ReactNode
}

export const MenuNavBar: React.FunctionComponent<MenuNavBarProps> = ({children, ...props}): any | null => {
	
	const {menuCategories} = props;

	const scrollToMenuSection: Function = (categoryItem: any, categoryItemIndex: number): void => {
		
		Snippets.elements.scrollTo(`section_${categoryItem.category_slug}_${categoryItemIndex}`);

	}

	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.scrollY;
		setScrollPosition(position);
	};

	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};

	}, []);
	
	return (
		<>
			
			<section className={`menu-nav-bar-wrapper ${scrollPosition > 420 ? 'fixed':'static'}`}>
				
				<div className={'menu-nav-bar-slider'}>
					
					<ul className='menu-nav-container'>
						{menuCategories.map((categoryItem: any, categoryItemIndex: number) => (
							<li className='menu-food-cat-item' key={categoryItemIndex}>
								<a href='#.' id={`menu_item_link_section_${categoryItem.category_slug}_${categoryItemIndex}`}  className={`menu-item-link ${categoryItem.category_slug}_${categoryItemIndex}`} target='_self' onClick={(e) => {
									scrollToMenuSection(categoryItem, categoryItemIndex, this)
								}}>
									{categoryItem.category_name}
								</a>
							</li>
						))}
					</ul>
				
				</div>
			
			</section>
		
		</>
	
	);
	
};
