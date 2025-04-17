import React from "react";

const AccountSettings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Account Settings</h1>

        {/* Notification Settings Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Notification Preferences
          </h2>

          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold py-2">
                Profile information
              </h2>
              <div className="py-2">
                <label className="block text-sm font-medium text-gray-600">
                  Name
                </label>

                <input type="text"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>
              <div className="py-2">
                <label className="block text-sm font-medium text-gray-600">
                  Email
                </label>

                <input type="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john.doe@gmail.com"
                />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold py-2">Security</h2>
              <div className="py-2">
                <label className="block text-sm font-medium text-gray-600">
                  Password
                </label>

                <input type="password"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter new password"
                />
              </div>
              <div className="py-2">
                <label className="block text-sm font-medium text-gray-600">
                  Confirm Password
                </label>

                <input type="password"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Confirm new password"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Settings */}
        <div className="flex justify-end space-x-4">
          <button className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            Canael
          </button>
          <button className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
