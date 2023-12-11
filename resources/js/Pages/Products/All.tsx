import Table from '@/Components/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

const columns: string[] = ['name', 'manager', 'status'];

export default function All({auth, products}: PageProps) {
  return (
    <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">All Products</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <Table items={products} columns={columns} primary="Order Number" action="products.edit">l</Table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
  )
}


