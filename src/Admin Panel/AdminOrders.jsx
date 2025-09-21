import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminOrders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/Login");
        return;
      }

      const response = await axios.get(
        "https://ecomm-react-server.vercel.app/api/v1/orders",
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        setToastMessage("Failed to fetch orders");
        setShowToast(true);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      setToastMessage("Failed to fetch orders");
      setShowToast(true);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'confirmed':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-t-4 border-indigo-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <nav className="bg-gray-800 px-6 py-4 flex justify-between items-center">
          <h1 className="text-white text-xl font-bold">Orders Management</h1>
          <div className="flex space-x-2">
            <button
              className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
              onClick={() => navigate("/Adminpanel")}
            >
              Back to Products
            </button>
            <button
              className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("userRole");
                localStorage.removeItem("userInfo");
                navigate("/");
              }}
            >
              Logout
            </button>
          </div>
        </nav>

        {/* Orders List */}
        <div className="p-6">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">All Orders</h2>
              <p className="text-sm text-gray-500">Manage customer orders</p>
            </div>

            {orders.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-500 text-lg">No orders found</div>
                <div className="text-gray-400 text-sm mt-2">Orders will appear here when customers place them</div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Order ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Products
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {orders.map((order) => (
                      <tr key={order._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {order._id.slice(-8)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {order.userInfo.username}
                            </div>
                            <div className="text-sm text-gray-500">
                              {order.userInfo.email}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">
                            {order.products.length} item(s)
                          </div>
                          <div className="text-xs text-gray-500">
                            {order.products.slice(0, 2).map(product => product.title).join(', ')}
                            {order.products.length > 2 && '...'}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ₹{order.totalAmount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(order.orderDate)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed inset-x-0 top-0 mx-auto mt-4 max-w-sm z-50 animate-in slide-in-from-top-full duration-300">
          <div className="p-4 text-gray-500 bg-white rounded-lg shadow-lg dark:text-gray-400 dark:bg-gray-800 border-l-4 border-red-500">
            <div className="flex items-center">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 bg-red-100 dark:bg-red-800 rounded-lg">
                <div className="text-red-500 dark:text-red-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414-1.414L10 12.586l1.707-1.293a1 1 0 0 1 1.414 1.414L11.414 14l1.293 1.707a1 1 0 0 1-1.414 1.414L10 15.414l-1.293 1.707a1 1 0 1 1-1.414-1.414L8.586 14l-1.293-1.707a1 1 0 0 1 1.414-1.414L10 12.586l1.707 1.293Z" />
                  </svg>
                </div>
              </div>
              <div className="ml-3 text-sm font-medium flex-1">{toastMessage}</div>
              <button
                type="button"
                className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setShowToast(false)}
                aria-label="Close"
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 14 14">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminOrders;
