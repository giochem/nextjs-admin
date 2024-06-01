"use client";
import { DataTable } from "@/components/custom ui/DataTable";
import { columns } from "@/components/customers/CustomerColumns";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect } from "react";

const Customers = () => {
    const [loading, setLoading] = useState(true);
    const [customers, setCustomers] = useState([]);
    const getCustomers = async () => {
        try {
            const res = await fetch("/api/customers", {
                method: "GET",
            });
            const data = await res.json();
            setCustomers(data);
            setLoading(false);
        } catch (err) {
            console.log("[collection_GET]", err);
        }
    };

    useEffect(() => {
        getCustomers();
    }, []);

    return (
        <div className="px-10 py-5">
            <p className="text-heading2-bold">Customers</p>
            <Separator className="my-5" />
            <DataTable columns={columns} data={customers} searchKey="name" />
        </div>
    );
};
export const dynamic = "force-dynamic";
export default Customers;
