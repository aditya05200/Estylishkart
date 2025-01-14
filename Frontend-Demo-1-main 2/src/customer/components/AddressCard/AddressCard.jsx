import React from "react";

const AddressCard = ({ address }) => {
  return (
    <div>
      <div className="space-y-3">
        {/* Full Name */}
        {address.firstName && address.lastName && (
          <p className="font-semibold">
            {address.firstName + " " + address.lastName}
          </p>
        )}
        {/* Street Address */}
        <p>{address.street}</p>
        {/* City, State, ZIP */}
        <p>
          {address.city}, {address.state}, {address.zipCode}
        </p>
        {/* Phone Number */}
        {address.phone && (
          <div className="space-y-1">
            <p className="font-semibold">Phone Number</p>
            <p>{address.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddressCard;
