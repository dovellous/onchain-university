import React, {lazy} from "react";
import PageContentWrapper from "../../../layout/wrapper/PageContentWrapper";

const OrdersPage = lazy(() => import("./OrdersPage"));

type PageProps = {
    order: any;
    orderId: any;
    orderIndex: number;
    children?: React.ReactNode;
}

const OrderItem:React.FunctionComponent<PageProps> = ({ children, ...props}) : any  => {

    const {order, orderId, orderIndex} = props;



  return (
      <>
          <tr>
              <th scope="row">
                  <div className="form-check">
                      <input className="form-check-input" type="checkbox" name="checkAll" value="option1" />
                  </div>
              </th>
              <td className="id"><a href="/order-details/1" className="fw-medium link-primary">#VZ2101</a></td>
              <td className="customer_name">{order.firstname} {order.lastname}</td>
              <td className="product_name">Puma Tshirt</td>
              <td className="date">20 Dec, 2021, <small className="text-muted">02:21 AM</small></td>
              <td className="amount">$654</td>
              <td className="payment">Mastercard</td>
              <td className="status"><span className="badge badge-soft-warning text-uppercase">Pending</span>
              </td>
              <td>
                  <ul className="list-inline hstack gap-2 mb-0">
                      <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="View">
                          <a href="apps-ecommerce-order-details.html" className="text-primary d-inline-block">
                              <i className="ri-eye-fill fs-16" />
                          </a>
                      </li>
                      <li className="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Edit">
                          <a href="#showModal" data-bs-toggle="modal" className="text-primary d-inline-block edit-item-btn">
                              <i className="ri-pencil-fill fs-16" />
                          </a>
                      </li>
                      <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Remove">
                          <a className="text-danger d-inline-block remove-item-btn" data-bs-toggle="modal" href="#deleteOrder">
                              <i className="ri-delete-bin-5-fill fs-16" />
                          </a>
                      </li>
                  </ul>
              </td>
          </tr>
      </>
  );
  
}

export default OrderItem;