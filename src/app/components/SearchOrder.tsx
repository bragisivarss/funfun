"use client";
export const SearchOrder = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return <div className="search_order">
        <p className="title_search_order">
            Already have an order?
            <div className="text_search_order">
                Find your order
            </div>
        </p>
        <form className="form_search_order" onSubmit={handleSubmit}>
            <label id="email" htmlFor="email" className="label_search">Email</label>
            <input type="email" id="email" name="email" className="input_search" />
            <div className="block">
            <button className="btn_search_order">Search</button>
            </div>
        </form>
    </div>
}
