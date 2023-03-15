import React, {useState,useEffect} from "react";
import {useSelector} from "react-redux";
import Orders from '../../../../../data/orders.json';
import Snippets from "../../../../helpers/Snippets";
import OrderItem from "./OrderItem";
type PageProps = {
  children?: React.ReactNode;
}

const OrdersPage:React.FunctionComponent<PageProps> = ({ children, ...props}) : any | null => {

    let deleteMultiple:Function = (e:Event) : void =>{

    }

    let SearchData:Function = (e:Event) : void =>{

    }

    const [customerOrders, setCustomerOrders] = useState<any>(null);

    useEffect(()=>{

        const _orders:any = Snippets.objects.convertToArray(Orders);

        console.log("::::", _orders);

        setCustomerOrders(_orders);

    },[])

    return (
      <>

      <div className="row">
          <div className="col-lg-12">
              <div className="card" id="orderList">
                  <div className="card-header border-0">
                      <div className="row align-items-center gy-3">
                          <div className="col-sm">
                              <h5 className="card-title mb-0">Order History</h5>
                          </div>
                          <div className="col-sm-auto">
                              <div className="d-flex gap-1 flex-wrap">
                                  <button type="button" className="btn btn-success add-btn" data-bs-toggle="modal" id="create-btn" data-bs-target="#showModal"><i className="ri-add-line align-bottom me-1" /> Create Order</button>
                                  <button type="button" className="btn btn-info"><i className="ri-file-download-line align-bottom me-1" /> Import</button>
                                  <button className="btn btn-soft-danger" id="remove-actions" onClick={(e)=>{deleteMultiple()}}><i className="ri-delete-bin-2-line" /></button>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="card-body border border-dashed border-end-0 border-start-0">
                      <form>
                          <div className="row g-3">
                              <div className="col-xxl-5 col-sm-6">
                                  <div className="search-box">
                                      <input type="text" className="form-control search" placeholder="Search for order ID, customer, order status or something..." />
                                          <i className="ri-search-line search-icon" />
                                  </div>
                              </div>
                              {/* end col */}
                              <div className="col-xxl-2 col-sm-6">
                                  <div>
                                      <input type="text" className="form-control" data-provider="flatpickr" data-date-format="d M, Y" data-range-date="true" id="demo-datepicker" placeholder="Select date" />
                                  </div>
                              </div>
                              {/* end col */}
                              <div className="col-xxl-2 col-sm-4">
                                  <div>
                                      <select className="form-control" data-choices data-choices-search-false name="choices-single-default" id="idStatus">
                                          <option value="">Status</option>
                                          <option value="all" selected>All</option>
                                          <option value="Pending">Pending</option>
                                          <option value="Inprogress">Inprogress</option>
                                          <option value="Cancelled">Cancelled</option>
                                          <option value="Pickups">Pickups</option>
                                          <option value="Returns">Returns</option>
                                          <option value="Delivered">Delivered</option>
                                      </select>
                                  </div>
                              </div>
                              {/* end col */}
                              <div className="col-xxl-2 col-sm-4">
                                  <div>
                                      <select className="form-control" data-choices data-choices-search-false name="choices-single-default" id="idPayment">
                                          <option value="">Select Payment</option>
                                          <option value="all" selected>All</option>
                                          <option value="Mastercard">Mastercard</option>
                                          <option value="Paypal">Paypal</option>
                                          <option value="Visa">Visa</option>
                                          <option value="COD">COD</option>
                                      </select>
                                  </div>
                              </div>
                              {/* end col */}
                              <div className="col-xxl-1 col-sm-4">
                                  <div>
                                      <button type="button" className="btn btn-primary w-100" onClick={(e)=>{SearchData()}}> <i className="ri-equalizer-fill me-1 align-bottom" />
                                          Filters
                                      </button>
                                  </div>
                              </div>
                              {/* end col */}
                          </div>
                          {/* end row */}
                      </form>
                  </div>
                  <div className="card-body pt-0">
                      <div>
                          <ul className="nav nav-tabs nav-tabs-custom nav-success mb-3" role="tablist">
                              <li className="nav-item">
                                  <a className="nav-link active All py-3" data-bs-toggle="tab" id="All" href="#home1" role="tab" aria-selected="true">
                                      <i className="ri-store-2-fill me-1 align-bottom" /> All Orders
                                  </a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link py-3 Delivered" data-bs-toggle="tab" id="Delivered" href="#delivered" role="tab" aria-selected="false">
                                      <i className="ri-checkbox-circle-line me-1 align-bottom" /> Delivered
                                  </a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link py-3 Pickups" data-bs-toggle="tab" id="Pickups" href="#pickups" role="tab" aria-selected="false">
                                      <i className="ri-truck-line me-1 align-bottom" /> Pickups <span className="badge bg-danger align-middle ms-1">2</span>
                                  </a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link py-3 Returns" data-bs-toggle="tab" id="Returns" href="#returns" role="tab" aria-selected="false">
                                      <i className="ri-arrow-left-right-fill me-1 align-bottom" /> Returns
                                  </a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link py-3 Cancelled" data-bs-toggle="tab" id="Cancelled" href="#cancelled" role="tab" aria-selected="false">
                                      <i className="ri-close-circle-line me-1 align-bottom" /> Cancelled
                                  </a>
                              </li>
                          </ul>

                          <div className="table-responsive table-card mb-1">
                              <table className="table table-nowrap align-middle" id="ordersTable">
                                  <thead className="text-muted table-light">
                                  <tr className="text-uppercase">
                                      <th scope="col" style={{width: "25px"}}>
                                          <div className="form-check">
                                              <input className="form-check-input" type="checkbox" id="checkAll" value="option" />
                                          </div>
                                      </th>
                                      <th className="sort" data-sort="id">Order ID</th>
                                      <th className="sort" data-sort="customer_name">Customer</th>
                                      <th className="sort" data-sort="product_name">Product</th>
                                      <th className="sort" data-sort="date">Order Date</th>
                                      <th className="sort" data-sort="amount">Amount</th>
                                      <th className="sort" data-sort="payment">Payment Method</th>
                                      <th className="sort" data-sort="status">Delivery Status</th>
                                      <th className="sort" data-sort="city">Action</th>
                                  </tr>
                                  </thead>
                                  <tbody className="list form-check-all">
                                  {customerOrders.map((order:any, orderIndex:number)=>(
                                      <OrderItem order={order[1]} orderId={order[0]} orderIndex={orderIndex} key={orderIndex} />
                                  ))}
                                  </tbody>
                              </table>
                              <div className="noresult" style={{display: "none"}}>
                                  <div className="text-center">
                                      
                                      <h5 className="mt-2">Sorry! No Result Found</h5>
                                      <p className="text-muted">We've searched more than 150+ Orders We did not find any orders for you search.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="d-flex justify-content-end">
                              <div className="pagination-wrap hstack gap-2">
                                  <a className="page-item pagination-prev disabled" href="#">
                                      Previous
                                  </a>
                                  <ul className="pagination listjs-pagination mb-0"></ul>
                                  <a className="page-item pagination-next" href="#">
                                      Next
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div className="modal fade" id="showModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered">
                              <div className="modal-content">
                                  <div className="modal-header bg-light p-3">
                                      <h5 className="modal-title" id="exampleModalLabel">&nbsp;</h5>
                                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="close-modal"></button>
                                  </div>
                                  <form className="tablelist-form" autoComplete="off">
                                      <div className="modal-body">
                                          <input type="hidden" id="id-field" />

                                          <div className="mb-3" id="modal-id">
                                              <label htmlFor="orderId" className="form-label">ID</label>
                                              <input type="text" id="orderId" className="form-control" placeholder="ID" readOnly={true} />
                                          </div>

                                          <div className="mb-3">
                                              <label htmlFor="customername-field" className="form-label">Customer Name</label>
                                              <input type="text" id="customername-field" className="form-control" placeholder="Enter name" required />
                                          </div>

                                          <div className="mb-3">
                                              <label htmlFor="productname-field" className="form-label">Product</label>
                                              <select className="form-control" data-trigger name="productname-field" id="productname-field" >
                                              <option value="">Product</option>
                                              <option value="Puma Tshirt">Puma Tshirt</option>
                                              <option value="Adidas Sneakers">Adidas Sneakers</option>
                                              <option value="350 ml Glass Grocery Container">350 ml Glass Grocery Container</option>
                                              <option value="American egale outfitters Shirt">American egale outfitters Shirt</option>
                                              <option value="Galaxy Watch4">Galaxy Watch4</option>
                                              <option value="Apple iPhone 12">Apple iPhone 12</option>
                                              <option value="Funky Prints T-shirt">Funky Prints T-shirt</option>
                                              <option value="USB Flash Drive Personalized with 3D Print">USB Flash Drive Personalized with 3D Print</option>
                                              <option value="Oxford Button-Down Shirt">Oxford Button-Down Shirt</option>
                                              <option value="Classic Short Sleeve Shirt">Classic Short Sleeve Shirt</option>
                                              <option value="Half Sleeve T-Shirts (Blue)">Half Sleeve T-Shirts (Blue)</option>
                                              <option value="Noise Evolve Smartwatch">Noise Evolve Smartwatch</option>
                                          </select>
                                      </div>

                                      <div className="mb-3">
                                          <label htmlFor="date-field" className="form-label">Order Date</label>
                                          <input type="date" id="date-field" className="form-control" data-provider="flatpickr" required data-date-format="d M, Y" data-enable-time placeholder="Select date" />
                                      </div>

                                      <div className="row gy-4 mb-3">
                                          <div className="col-md-6">
                                              <div>
                                                  <label htmlFor="amount-field" className="form-label">Amount</label>
                                                  <input type="text" id="amount-field" className="form-control" placeholder="Total amount" required />
                                              </div>
                                          </div>
                                          <div className="col-md-6">
                                              <div>
                                                  <label htmlFor="payment-field" className="form-label">Payment Method</label>
                                                  <select className="form-control" data-trigger name="payment-method" required id="payment-field">
                                                      <option value="">Payment Method</option>
                                                      <option value="Mastercard">Mastercard</option>
                                                      <option value="Visa">Visa</option>
                                                      <option value="COD">COD</option>
                                                      <option value="Paypal">Paypal</option>
                                                  </select>
                                              </div>
                                          </div>
                                      </div>

                                      <div>
                                          <label htmlFor="delivered-status" className="form-label">Delivery Status</label>
                                          <select className="form-control" data-trigger name="delivered-status" required id="delivered-status">
                                              <option value="">Delivery Status</option>
                                              <option value="Pending">Pending</option>
                                              <option value="Inprogress">Inprogress</option>
                                              <option value="Cancelled">Cancelled</option>
                                              <option value="Pickups">Pickups</option>
                                              <option value="Delivered">Delivered</option>
                                              <option value="Returns">Returns</option>
                                          </select>
                                      </div>
                              </div>
                              <div className="modal-footer">
                                  <div className="hstack gap-2 justify-content-end">
                                      <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                                      <button type="submit" className="btn btn-success" id="add-btn">Add Order</button>
                                      {/*  <button type="button" className="btn btn-success" id="edit-btn">Update</button>  */}
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>

              {/*  Modal  */}
              <div className="modal fade flip" id="deleteOrder" tabIndex={-1} aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                          <div className="modal-body p-5 text-center">
                              <div className="mt-4 text-center">
                                  <h4>You are about to delete a order ?</h4>
                                  <p className="text-muted fs-15 mb-4">Deleting your order will remove all of your information from our database.</p>
                                  <div className="hstack gap-2 justify-content-center remove">
                                      <button className="btn btn-link link-success fw-medium text-decoration-none" id="deleteRecord-close" data-bs-dismiss="modal"><i className="ri-close-line me-1 align-middle" /> Close</button>
                                      <button className="btn btn-danger" id="delete-record">Yes, Delete It</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* end modal  */}
          </div>
      </div>

      </div>
    {/* end col */}
</div>

      </>

  );
  
};

export default OrdersPage;