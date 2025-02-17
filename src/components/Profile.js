import React from "react";

const Profile = ({ user }) => {
  return (
    <div className="profile-container max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">My Profile</h2>

      {user ? (
        <>
          {/* User Information Section */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
            <div className="space-y-2">
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              
            </div>
          </div>

          {/* Order History Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Order History</h3>
            {user.orders && user.orders.length > 0 ? (
              <div className="space-y-6">
                {user.orders.map((order) => (
                  <div
                    key={order.orderId}
                    className="border border-gray-300 rounded-lg p-4"
                  >
                    <h4 className="text-lg font-semibold mb-3">
                      Order ID: {order.orderId} &middot;{" "}
                      <span className="text-gray-600">Date: {order.date}</span>
                    </h4>
                    <div className="space-y-4">
                      {order.products.map((product) => (
                        <div
                          key={product.id}
                          className="flex items-center justify-between border-b pb-4 mb-4"
                        >
                          <div className="flex items-center">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-16 h-16 object-cover rounded-lg mr-4"
                            />
                            <div>
                              <h5 className="text-md font-medium">
                                {product.name}
                              </h5>
                              <p className="text-gray-500">
                                Quantity: {product.quantity}
                              </p>
                              <p className="text-gray-500">
                                Price: ${product.price}
                              </p>
                            </div>
                          </div>
                          <p className="text-lg font-semibold">
                            ${product.price * product.quantity}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="text-right">
                      <strong>Total:</strong>{" "}
                      <span className="text-lg font-semibold">
                        ${order.total}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center">
                You haven't placed any orders yet.
              </p>
            )}
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500">
          No user information available. Please log in to view your profile.
        </p>
      )}
    </div>
  );
};

export default Profile;
