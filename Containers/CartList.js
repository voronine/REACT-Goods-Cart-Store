import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectGoods } from '../store/goodsSlice';
import Cart from "../components/Cart";
import {
    selectCart,
    minus,
    del
} from '../store/cartSlice';


function CartList() {
    let sum = 0;
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();

    // переиндексирую массив товара
    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {});
    // console.log(goodsObj);

    let clickHandler = (e) => {
        e.preventDefault();
        let t = e.target;

        if (t.classList.contains("minus-goods")) {
            dispatch(minus(t.getAttribute("data-key")));

        } else if (t.classList.contains("remove-goods")) {
            dispatch(del(t.getAttribute("data-key")));
        } else {
            return true;
        }
    };

    Object.keys(cart).forEach(
        (item) => (sum += goodsObj[item]["cost"] * cart[item])
    );

    return (
        <>
            <div>
                <table onClick={clickHandler}>
                    <tbody>
                        <tr>
                            <th>Название</th>
                            <th>Изображение</th>
                            <th>Цена</th>
                            <th>Количество</th>
                            <th>Стоимость товара</th>
                        </tr>
                        {Object.keys(cart).map((item) => (
                            <Cart
                                key={item + goodsObj[item]["title"]}
                                articul={goodsObj[item]["articul"]}
                                title={goodsObj[item]["title"]}
                                cost={goodsObj[item]["cost"]}
                                count={cart[item]}
                                totalCost={goodsObj[item]["cost"] * cart[item]}
                                image={goodsObj[item]["image"]}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <p>Общая сумма: {sum}</p>
            </div>
        </>
    );
}

export default CartList;
