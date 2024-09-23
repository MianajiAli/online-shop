"use client";
import { useEffect, useState } from 'react';
import apiClient from '@/lib/apiClient';
import { toast } from 'react-toastify';

export default function Page() {
    const [cartData, setCartData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('authToken');

                if (!token) {
                    window.location.href = '/auth/login';
                    throw new Error("Authentication token not found");
                }

                const response = await apiClient("/api/cart", "GET", null, token);
                const { data, status } = response;

                if (status.code === 200) {
                    setCartData(data.items || []); // Check if data.items exists and use an empty array as fallback
                    setTotalPrice(data.totalPrice)

                } else {
                    toast.error(data.message || "An error occurred while fetching cart data.");
                }
            } catch (error) {
                console.error("Error:", error);
                toast.error(error.message || "Failed to fetch cart data. Please try again.");
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Cart Data</h2>
            {cartData.length > 0 ?
                <div className="w-10/12 mx-auto flex flex-col gap-3">
                    {cartData.map((item, index) =>
                        <div key={index} dir="rtl" className="bg-black/5 rounded-md py-1 px-5 flex flex-row gap-5">
                            <p>{index + 1}</p>
                            <p>{item.product.name}</p>
                            <p>{item.product.price}</p>
                            <p>{item.product.discount}%</p>
                            <p>{item.product.finalPrice}</p>
                            <p>{item.quantity}adad</p>
                            <p>{item.itemTotal}</p>
                        </div>)}
                    <p> مجموع : {totalPrice}</p>
                </div> : "no"}
        </div >
    );
}
