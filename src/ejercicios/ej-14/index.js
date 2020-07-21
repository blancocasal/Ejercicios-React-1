import React from "react";
import Page from './Page';

/*https://es.reactjs.org/docs/composition-vs-inheritance.html*/
const Ejercicio14 = () => {
    const user = {name: "Pepe José", email: "pepe@jose.com"};

    const orders = {total: 12};

    return (
        <div>
            <Page userName={user.name} totalOrders={orders.total}/>
        </div>
    );
}
export default Ejercicio14;