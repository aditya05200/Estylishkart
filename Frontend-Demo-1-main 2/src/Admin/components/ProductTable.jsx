"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, findProducts } from "../../State/Product/Action";

export default function ProductTable() {
  const dispatch = useDispatch();
  const { product } = useSelector((store) => store);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = () => {
      const data = {
        category: "",
        colors: [],
        sizes: [],
        minPrice: 0,
        maxPrice: 1000000,
        minDiscount: 0,
        sort: "price_low",
        pageNumber: page + 1,
        pageSize: rowsPerPage,
        stock: "",
      };
      dispatch(findProducts(data));
    };

    fetchData();
  }, [
    dispatch,
    page,
    rowsPerPage,
    product.deletedproduct,
    product.newProductAdded,
  ]);

  const handleProductDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const totalPages = Math.ceil(
    (product?.products?.totalElements || 0) / rowsPerPage
  );

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="px-6 py-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">All Products</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Image
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  SKU
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Title
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Price
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Discounted
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {product?.products?.content?.map((item) => (
                <tr
                  key={item._id}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600 font-medium">
                      {item._id}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-800">{item.title}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">
                      {item.category?.name}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-800">
                      ₹{item.price.toFixed(2)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-green-600 font-medium">
                      ₹{item.discountedPrice.toFixed(2)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleProductDelete(item._id)}
                      className="px-3 py-1 text-sm text-red-600 font-medium border border-red-200 rounded-md hover:bg-red-50 transition-colors duration-200"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <select
                value={rowsPerPage}
                onChange={handleChangeRowsPerPage}
                className="px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value={10}>10 per page</option>
                <option value={25}>25 per page</option>
                <option value={50}>50 per page</option>
              </select>
              <span className="text-sm text-gray-600">
                Showing {page * rowsPerPage + 1} to{" "}
                {Math.min(
                  (page + 1) * rowsPerPage,
                  product?.products?.totalElements || 0
                )}{" "}
                of {product?.products?.totalElements || 0} results
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleChangePage(page - 1)}
                disabled={page === 0}
                className="px-3 py-2 text-sm font-medium text-gray-600 border rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                Previous
              </button>
              {[...Array(totalPages)]
                .map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleChangePage(index)}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 
                    ${
                      page === index
                        ? "bg-blue-50 text-blue-600 border border-blue-200"
                        : "text-gray-600 hover:bg-gray-50 border"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))
                .slice(Math.max(0, page - 2), Math.min(totalPages, page + 3))}
              <button
                onClick={() => handleChangePage(page + 1)}
                disabled={page >= totalPages - 1}
                className="px-3 py-2 text-sm font-medium text-gray-600 border rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
