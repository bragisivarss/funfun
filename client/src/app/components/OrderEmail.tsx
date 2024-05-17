"use client";

import { useRouter } from "next/navigation";
import { useData } from "../utils/Context";

export const Email = () => {
    const { email, setEmail } = useData();

    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push("./receipt");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Enter your email</label>
                <input
                    name="email"
                    id="email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <button type="submit">Complete order</button>
            </form>
        </>
    );
};
