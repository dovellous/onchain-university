import React, {useEffect, useState} from "react";
// @ts-ignore
import Modal from 'react-modal';
import {useSelector} from 'react-redux';
import Snippets from "../../../../helpers/Snippets";

Modal.setAppElement('#app');

export const MenuFoodItems: React.FunctionComponent = (): any | null => {

    // @ts-ignore
    const menuCategories = useSelector(state => state.menu.value);

    const getMenuSlug: Function = (label: string): string => {

        return label.toString().replace(' ', '-').toLowerCase();

    }

    const [selectedProductDetails, setSelectedProductDetails] = React.useState({
        addons:{
            gaap_addons_items: [],
            gaap_sides_items: []
        },
        di_carb_g:"0.00",
        di_carb_p:"0.00",
        di_energy_c:"0.00",
        di_energy_g:"0",
        di_fat_g:"0.00",
        di_fat_p:"0.00",
        di_protein_g:"0.00",
        di_protein_p:"0.00",
        gaap_addon_code:null,
        gaap_addons_cart_data:0,
        gaap_addons_qty:0,
        gaap_addons_total:0,
        gaap_code:"0",
        gaap_department_id:"0",
        gaap_department_name:"",
        gaap_department_slug:"value_meal",
        gaap_forex_price:"0.00",
        gaap_image:null,
        gaap_is_active:"0",
        gaap_local_price:"0.00",
        gaap_sides_cart_data:0,
        gaap_sides_qty:0,
        gaap_sides_total:0,
        product_added_by:"0",
        product_added_on:null,
        product_addons:"0",
        product_addons_data:[],
        product_allergens:"0",
        product_barcode:null,
        product_cart_qty:0,
        product_code:"0",
        product_code_old:null,
        product_description:"",
        product_except:null,
        product_id:"1247",
        product_image:null,
        product_is_addon:"0",
        product_is_customizable:"0",
        product_is_deliverable:"0",
        product_is_orderable:"0",
        product_is_side:"0",
        product_name:"",
        product_preparation:"0",
        product_price_local:"0.00",
        product_price_regular:"0.00",
        product_related:null,
        product_requires_addon:"0",
        product_requires_side:"0",
        product_sales:"0",
        product_sides:null,
        product_updated_by:null,
        product_updated_on:null,
        product_views:"0"
    })

    const selectProduct: Function = (product: any): void => {

        setSelectedProductDetails(product[1]);

        console.log(":: PRODUCT ::", product[1]);

        openModal();

    }

    const getProductDescription: Function = (product_description: string | null): string => {

        if (product_description == null) {
            return "...";
        }
        if (product_description.length > 105) {
            return product_description.substring(0, 105) + '...';
        }
        return product_description;

    }

    const activeLink: Function = (anchor: any, anchors: any): void => {
        anchors.forEach((item: any) => item.classList.remove('active'));
        anchor.classList.add('active');
    }

    const [subtitle, setSubtitle] = React.useState('');

    const [modalIsOpen, setIsOpen] = React.useState(false);

    const [customStyles, setCustomStyles] = React.useState({
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    });

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {

        let section = document.querySelectorAll('div.container.menu-category');
        let anchors = document.querySelectorAll('a.menu-item-link');

        window.onscroll = () => {
            section.forEach((sec: any) => {
                let top = window.scrollY;
                let offset = sec.offsetTop;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');
                if (top >= offset && top < offset + height) {

                    const targetSelector: any = `menu_item_link_${id}`;
                    // @ts-ignore
                    const target = window.document.getElementById(targetSelector);
                    activeLink(target, anchors);
                }
            })
        };

    }, []);

    return (
        <>

            {menuCategories.products.map((category: any, categoryIndex: number) => (

                <>

                    <div id={`section_${category.category_slug}_${categoryIndex}`}
                         className={`section_${category.category_slug}_${categoryIndex} container menu-category`}
                         key={categoryIndex}>

                        <div className={'menu-cat-banner'} style={{
                            backgroundImage: `url(/assets/elements/banners/banner-${getMenuSlug(category.category_slug)}.svg)`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            minHeight: '250px'
                        }}>
                            <img src={`/assets/elements/banners/txt-${getMenuSlug(category.category_slug)}.svg`}
                                 className="category-banner-text-icon"/>
                            <div className='row menu-foot-cats'>
                                <div className="col-xl-4 col-md-6">
                                    <div className="card border-radius-zero border-0 shadow-sm mb-30" style={{
                                        backgroundImage: `url('/assets/elements/menu/placeholder.jpeg')`,
                                        backgroundSize: 'cover',
                                        backgroundColor: '#000000',
                                        backgroundPosition: 'center center',
                                        backgroundRepeat: 'no-repeat',
                                        height: '270px',
                                        paddingTop: '70px'
                                    }}>
                                        &nbsp;
                                    </div>
                                </div>
                                {Snippets.objects.convertToArray(category.products).map((product: any, productIndex: number) => (

                                    <>

                                        { parseFloat(product[1].gaap_forex_price) > 0 && (

                                        <div className={`col-xl-4 col-md-6`} key={productIndex}>
                                            <div className="card border-radius-zero border-0 shadow-sm mb-30" style={{
                                                backgroundImage: `url('/assets/elements/menu/${category.category_slug}_${productIndex < 2 ? 'first' : 'last'}.svg')`,
                                                backgroundSize: '50%',
                                                backgroundPositionX: '30px',
                                                backgroundRepeat: 'no-repeat',
                                                height: '270px',
                                                paddingTop: '70px'
                                            }}>
                                                <div className="card-body" onClick={(e) => {
                                                    selectProduct(product)
                                                }} style={{cursor: 'pointer'}}>
                                                    <h3 className="mb-3">{product[1].product_name}</h3>
                                                    <p className="line-height-24"
                                                       dangerouslySetInnerHTML={{__html: getProductDescription(product[1].product_description)}}></p>
                                                    <div className="banner-strip-d-flex mt-3">
                                                        <div className="price-text">
                                                            {menuCategories.currency} {menuCategories.currency === 'USD' ? Snippets.numbers.formatCurrency.format(product[1].gaap_forex_price) : Snippets.numbers.formatCurrency.format(product[1].gaap_local_price)}
                                                        </div>
                                                        <div>
                                                            <img src={`/assets/elements/banners/food-card-hearts.svg`}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        )}

                                    </>

                                ))}

                            </div>

                        </div>

                    </div>


                    {(categoryIndex % 3) === 0 && (

                        <div
                            className={`container w-100 cat-index-${categoryIndex} mod-${(categoryIndex % 3)} div-${(categoryIndex / 3)}`} style={{width: `100%`, margin: 'auto', paddingTop: '0px', paddingBottom: '120px'}}>

                            <img src={`/assets/elements/banners/ad-${(categoryIndex / 3)}.png`}/>

                        </div>

                    )}

                </>

            ))}

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="card border-radius-zero border-0 shadow-sm" style={{
                    backgroundColor: '#ffffff',
                    maxHeight: '90vh',
                    padding: '20px',
                    overflow: 'scroll',
                    display: 'block'
                }}>

                    <img
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src="https://www.mamboschicken.com/uploads/products/food-1024/null.jpg";
                        }}
                        src={`https://www.mamboschicken.com/uploads/products/food-1024/${selectedProductDetails.product_code_old}.jpg`} className={'w-100'} />

                    <h3 className="mt-3">{selectedProductDetails.product_name}</h3>
                    <small className="text-muted">{selectedProductDetails.gaap_department_name}</small>
                    <p className="line-height-24"
                       dangerouslySetInnerHTML={{__html: selectedProductDetails.product_description}}></p>

                    <div className="banner-strip-d-flex mt-3">
                        <h3>
                            USD {Snippets.numbers.formatCurrency.format(selectedProductDetails.gaap_forex_price)} or ZWD {Snippets.numbers.formatCurrency.format(selectedProductDetails.gaap_local_price)}
                        </h3>
                        <div>
                            <img src={`/assets/elements/banners/food-card-hearts.svg`}/>
                        </div>
                    </div>

                    <p className="mt-3 mb-3 banner-strip-d-flex" style={{backgroundColor: '#eeeeee', padding: '5px 20px', border: '1px solid #d1d1d1'}}>
                        <small>Allergens: <strong>{selectedProductDetails.product_allergens}</strong></small>
                        <small>Preparation Time: <strong>{selectedProductDetails.product_preparation} mins</strong></small>
                    </p>

                    {selectedProductDetails.di_carb_g !== "0.00" && (

                    <table width="100%" className="tg mb-2 mt-2"
                        style={{
                            backgroundColor: '#f7f7f7',
                            border: '1px solid #d1d1d1'
                        }}>
                        <thead
                            style={{
                                backgroundColor: '#d5d5d5',
                                border: '1px solid #d1d1d1'
                            }}>
                        <tr className="tg-0pky">
                            <th className="tg-0pky">Energy</th>
                            <th className="tg-0pky">Carbs</th>
                            <th className="tg-0pky">Proteins</th>
                            <th className="tg-0pky">Fat</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="tg-0pky">{selectedProductDetails.di_energy_c}Cal</td>
                            <td className="tg-0pky">{selectedProductDetails.di_carb_g}g</td>
                            <td className="tg-0pky">{selectedProductDetails.di_protein_g}</td>
                            <td className="tg-0pky">{selectedProductDetails.di_fat_g}</td>
                        </tr>
                        <tr>
                            <td className="tg-0pky"><small>*DI</small><br/>{selectedProductDetails.di_energy_c}%</td>
                            <td className="tg-0pky"><small>*DI</small><br/>{selectedProductDetails.di_carb_p}%</td>
                            <td className="tg-0pky"><small>*DI</small><br/>{selectedProductDetails.di_protein_p}%</td>
                            <td className="tg-0pky"><small>*DI</small><br/>{selectedProductDetails.di_fat_p}%</td>
                        </tr>
                        </tbody>
                    </table>

                    )}

                    {selectedProductDetails.addons.hasOwnProperty('gaap_sides_items') && (
                        <>
                            <h3 className="mt-5">Sides</h3>

                            {Object.keys(selectedProductDetails.addons.gaap_sides_items).length > 1 ? (

                            Snippets.objects.convertToArray(selectedProductDetails.addons.gaap_sides_items).map((side:any, sideIndex:number)=>(

                            <div className="products-modal mb-3 mt-3" key={sideIndex}>
                                <div className="banner-strip-d-flex " style={{borderBottom: '2px dotted #ccc'}}>
                                    <div>{side[1].product_name}</div>
                                    <div>{menuCategories.currency} {Snippets.numbers.formatCurrency.format(menuCategories.currency==="USD"?side[1].gaap_forex_price:side[1].gaap_local_price)}</div>
                                </div>
                            </div>

                            ))

                            ):(

                                <h5>None</h5>

                            )}
                        </>
                    )}

                </div>
            </Modal>

        </>

    );

};
