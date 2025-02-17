import React, { useState } from "react";

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [loginInfo, setLoginInfo] = useState({ name: "Santhapriyan S", phone: "+91 8438956047" });
  const [isEditingLogin, setIsEditingLogin] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [newAddress, setNewAddress] = useState({ name: "", phone: "", address: "" });
  const [orderDetails] = useState({ productName: "Sample Product", price: 249 });

  const handleLoginSubmit = () => {
    if (loginInfo.name && loginInfo.phone) {
      setIsEditingLogin(false);
      setStep(2);
    } else {
      alert("Please fill in your login details.");
    }
  };

  const handleAddAddress = () => {
    if (newAddress.name && newAddress.phone && newAddress.address) {
      setAddresses([...addresses, { ...newAddress, id: addresses.length + 1 }]);
      setNewAddress({ name: "", phone: "", address: "" });
    } else {
      alert("Please fill all address fields.");
    }
  };

  const handleNextStep = () => {
    if (step === 2 && !selectedAddress) {
      alert("Please select a delivery address.");
      return;
    }
    setStep(step + 1);
  };

  return (
    <div className="checkout-container flex gap-8 p-4 max-w-6xl mx-auto">
      {/* Left Section */}
      <div className="left-section w-2/3">
        {/* Step 1: Login */}
        {step >= 1 && (
          <div className="step border rounded p-4 shadow">
            <h3 className="text-lg font-bold mb-4">1. LOGIN</h3>
            {!isEditingLogin ? (
              <div className="flex justify-between items-center">
                <p>
                  {loginInfo.name} {loginInfo.phone}
                </p>
                <button
                  className="text-blue-500"
                  onClick={() => setIsEditingLogin(true)}
                >
                  CHANGE
                </button>
              </div>
            ) : (
              <div>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="block border rounded p-2 mb-4 w-full"
                  value={loginInfo.name}
                  onChange={(e) => setLoginInfo({ ...loginInfo, name: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="block border rounded p-2 mb-4 w-full"
                  value={loginInfo.phone}
                  onChange={(e) => setLoginInfo({ ...loginInfo, phone: e.target.value })}
                />
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={handleLoginSubmit}
                >
                  SAVE
                </button>
              </div>
            )}
          </div>
        )}

        {/* Step 2: Delivery Address */}
        {step === 2 && (
          <div className="step border rounded p-4 shadow">
            <h3 className="text-lg font-bold mb-4">2. DELIVERY ADDRESS</h3>
            <div className="mb-4">
              {addresses.map((address) => (
                <div
                  key={address.id}
                  className={`address-item p-4 border rounded mb-4 ${
                    selectedAddress === address ? "border-blue-500" : "border-gray-300"
                  }`}
                >
                  <label className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="address"
                      value={address.id}
                      checked={selectedAddress === address}
                      onChange={() => setSelectedAddress(address)}
                    />
                    <div>
                      <p className="font-bold">{address.name} {address.phone}</p>
                      <p>{address.address}</p>
                    </div>
                  </label>
                </div>
              ))}
            </div>
            <h4 className="font-semibold mb-2">Add a new address:</h4>
            <input
              type="text"
              placeholder="Name"
              className="block border rounded p-2 mb-2 w-full"
              value={newAddress.name}
              onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Phone"
              className="block border rounded p-2 mb-2 w-full"
              value={newAddress.phone}
              onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
            />
            <textarea
              placeholder="Address"
              className="block border rounded p-2 mb-2 w-full"
              value={newAddress.address}
              onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
            />
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded mb-4"
              onClick={handleAddAddress}
            >
              ADD ADDRESS
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleNextStep}
            >
              CONTINUE
            </button>
          </div>
        )}

        {/* Step 3: Order Summary */}
        {step === 3 && (
          <div className="step border rounded p-4 shadow">
            <h3 className="text-lg font-bold mb-4">3. ORDER SUMMARY</h3>
            <p>Product: {orderDetails.productName}</p>
            <p>Price: ₹{orderDetails.price}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              onClick={handleNextStep}
            >
              CONTINUE
            </button>
          </div>
        )}

        {/* Step 4: Payment Options */}
        {step === 4 && (
          <div className="step border rounded p-4 shadow">
            <h3 className="text-lg font-bold mb-4">4. PAYMENT OPTIONS</h3>
            <p>Payment gateway integration will go here.</p>
          </div>
        )}
      </div>

      {/* Right Section: Price Details */}
      <div className="right-section w-1/3 bg-gray-100 p-4 rounded shadow">
        <h3 className="font-bold text-lg mb-4">PRICE DETAILS</h3>
        <div className="price-item flex justify-between">
          <p>Price (1 item)</p>
          <p>₹{orderDetails.price}</p>
        </div>
        <div className="price-item flex justify-between">
          <p>Delivery Charges</p>
          <p className="text-green-500">FREE</p>
        </div>
        <hr className="my-2" />
        <div className="price-item flex justify-between font-bold">
          <p>Total Payable</p>
          <p>₹{orderDetails.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
