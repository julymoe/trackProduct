import React from 'react';
import Table from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import UpdateProductOrderForm from "./Partials/UpdateProductOrderForm";
import { PageProps, User } from '@/types';

interface EditProps extends PageProps {
    product: {
        id: string; name: string; category: string[]; status: string;
    };
}

export default function Edit({ auth, product }: EditProps): JSX.Element {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Order #{product.id}</h2>}
        >
            <Head title={'Order #' + product.id} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <UpdateProductOrderForm product={product} className="max-w-4xl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
