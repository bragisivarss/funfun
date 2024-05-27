"use client";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

type Email = string;

export const RemoveOrder = () => {
    const [search, setSearch] = useState<Email>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        axios
            .delete(`http://localhost:3001/api/order/${search}`)
            .then((response) => {
                console.log(response.data)
                toast.success("Successfully removed order!");
            })
            .catch((error) => {
                console.error("There was an error finding the order!", error);
            });
    };

    return (
        <div className="remove_order">
            <p className="title_search_order">Remove Order</p>
            <form className="form_search_order" onSubmit={handleSubmit}>
                <label id="email" htmlFor="email" className="label_search">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="input_search"
                    value={search}
                    placeholder="Your Email"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className="block">
                    <button className="btn_search_order">Search</button>
                </div>
            </form>
        </div>
    );
};

