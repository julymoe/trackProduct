import React from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

interface UpdateProductOrderFormProps {
    product: {
        id: string;
        name: string;
        category: string[];
        status: string;
    };
    className?: string;
}

const UpdateProductOrderForm: React.FC<UpdateProductOrderFormProps> = ({ product, className = '' }) => {
    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: product.name,
        category: product.category.join(','),
        status: product.status,
    });

    const submit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        patch(route('products.update', product.id), {
            preserveScroll: true,
        });
    };

    const statusOptions: string[] = ['Ordered', 'Preparing', 'Packaging', 'Delivering', 'Ready'];

    return (
        <section className={`p-10 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Order Information</h2>

                <p className="mt-1 text-sm text-gray-600">Update status information.</p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput id="name" className="mt-1 block w-full" value={data.name} disabled />
                </div>

                <div>
                    <InputLabel htmlFor="category" value="Category" />

                    <TextInput id="category" className="mt-1 block w-full" value={data.category} disabled />
                </div>

                <div>
                    <InputLabel htmlFor="status" value="Status" />

                    <SelectInput
                        id="status"
                        className="mt-1 block w-full"
                        options={statusOptions}
                        value={data.status}
                        onChange={(e) => setData('status', e.target.value)}
                    />

                    <InputError className="mt-2" />
                    {/* <InputError className="mt-2" message={errors} /> */}
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save Changes</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                    <a
                        href={route('public.products.show', product.id)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        target="_blank"
                    >
                        View Status
                    </a>
                </div>
            </form>
        </section>
    );
};

export default UpdateProductOrderForm;
