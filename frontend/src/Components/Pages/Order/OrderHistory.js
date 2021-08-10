import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listOrderMine } from '../actions/orderActions';
import Loading from '../../Loading/Loading';
import Message from '../../Message/Message';
import Button from '../../Forms/Button'

const OrderHistory = (props) => {
    const orderMineList = useSelector((state) => state.orderMineList);
    const { loading, error, orders } = orderMineList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listOrderMine());
    }, [dispatch]);

    return (
        <div>
            <h1>Histórico de pedidos</h1>
            {loading ? (
                <Loading />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DATA</th>
                            <th>TOTAL</th>
                            <th>PAGO</th>
                            <th>ENTREGUE</th>
                            <th>AÇÕES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>{order.createdAt.substring(0, 10)}</td>
                                <td>{order.totalPrice.toFixed(2)}</td>
                                <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                                <td>
                                    {order.isDelivered
                                    ? order.deliveredAt.substring(0, 10)
                                    : 'No'}
                                </td>
                                <td>
                                    <Button
                                        type="button"
                                        className="small"
                                        onClick={() => {
                                            props.history.push(`/order/${order._id}`);
                                        }}
                                    >
                                        Details
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default OrderHistory;