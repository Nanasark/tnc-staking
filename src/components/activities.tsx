import React, { useEffect, useState } from "react";
import { Strings } from "@/app/strings";

interface Activity {
  Email: string;
  Wallet: string;
  tokens: string | number;
  pricepaid: string | number;
}

export default function Activities() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchActivities = async () => {
    try {
      const scriptUrl = Strings.sheetURL; 
      const response = await fetch(scriptUrl);
      console.log(scriptUrl);
      console.log(typeof scriptUrl);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      setActivities(data); // Update activities state with the fetched data
      setLoading(false);
    } catch (err: any) {
      setError(err.message || "An error occurred");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []); // Fetch data on component mount

  return (
    <div className="w-full p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Activities</h1>

      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Email
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Wallet
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Receive Tokens
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  User Paid
                </th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {activity.Email}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {activity.Wallet}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {activity.tokens}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    ${activity.pricepaid}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
