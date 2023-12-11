<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    public function index() : Response
    {
        $products = Product::all();

        return Inertia::render('Products/All', [
            'products' => $products
        ]);
    }

    public function edit(Product $product) : Response
    {
        return Inertia::render('Products/Edit', [
            'product' => $product
        ]);
    }

    public function update(Product $product, Request $request) : void
    {
        $product->update([
            'status' => $request->status,
        ]);
    }
}
