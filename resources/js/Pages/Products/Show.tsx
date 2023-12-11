import { Head, router  } from '@inertiajs/react';
import React, { useEffect } from 'react';
import ProductStatus from './Partials/ProductStatus';

interface ShowProps {
    product: {
        id: number;
        manager: string;
        status: string;
        last_updated: string;
    };
}

export default function Show({ product }: ShowProps) {
    useEffect(() => {
        const interval = setInterval( () => {
             // fetch the data
             // replace what's in the component withe the new data
             router.reload({ only: ['product'] });
         }, 10000);
         return () => {
             clearInterval(interval);
         }
     },[])

    return (
        <div className="max-w-5xl mx-auto py-12">
            <Head title={'Order #' + product.id} />

            <div className="text-center mt-4">
                <p className="text-lg">
                    <span className="underline font-semibold">{product.manager}</span> started{' '}
                    <span className="underline font-semibold">{product.status.toLowerCase()}</span> your order{' '}
                    <span className="underline font-semibold">{product.last_updated}</span>
                </p>
            </div>
            <div className="p-10">
                <ProductStatus currentStatus={product.status}> </ProductStatus>
            </div>
        </div>
    );
}
