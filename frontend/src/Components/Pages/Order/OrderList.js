import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listOrders } from '../../Actions/OrderActions';
import Loading from '../../Loading/Loading';
import Message from '../../Message/Message';

const OrderList = (props) => {
    const orderList = useSelector((state) => state.orderList);
    const { loading, error, orders } = orderList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listOrders());
    }, [dispatch]);

    const deleteHandler = (order) => {};

    return (
        <div>
            <h1>Pedido</h1>
            {loading ? (
                <Loading />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>USUÁRIO</th>
                            <th>DATA</th>
                            <th>TOTAL</th>
                            <th>PAID</th>
                            <th>ENTREGA</th>
                            <th>OPÇÕES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>{order.user.name}</td>
                                <td>{order.createdAt.substring(0, 10)}</td>
                                <td>{order.totalPrice.toFixed(2)}</td>
                                <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                                <td>
                                    {order.isDelivered
                                    ? order.deliveredAt.substring(0, 10)
                                    : 'No'}
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className="small"
                                        onClick={() => {
                                            props.history.push(`/order/${order._id}`);
                                        }}
                                    >
                                        Detalhes
                                    </button>
                                    <button
                                        type="button"
                                        className="small"
                                        onclick={() => deleteHandler(order)}
                                    >
                                        Deletar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default OrderList;