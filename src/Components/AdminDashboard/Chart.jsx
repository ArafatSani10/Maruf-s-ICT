import React from "react";

const Chart = () => {
  return (
    <div className=" bg-gray-50 flex flex-col gap-6">
      {/* Top Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Revenue Breakdown */}
        <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Revenue Breakdown
          </h2>

          {/* Revenue Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            <div className="p-4 bg-gray-50 border rounded-lg flex flex-col items-center">
              <p className="text-sm text-gray-600">Total Revenue</p>
              <h3 className="text-2xl font-bold text-gray-900">৳0</h3>
              <span className="mt-1 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                Total: ৳0
              </span>
            </div>
            <div className="p-4 bg-gray-50 border rounded-lg flex flex-col items-center">
              <p className="text-sm text-gray-600">Expected Revenue</p>
              <h3 className="text-2xl font-bold text-gray-900">৳0</h3>
              <span className="mt-1 text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">
                0 students
              </span>
            </div>
            <div className="p-4 bg-gray-50 border rounded-lg flex flex-col items-center">
              <p className="text-sm text-gray-600">Outstanding Due (Active Only)</p>
              <h3 className="text-2xl font-bold text-red-600">৳0</h3>
              <span className="mt-1 text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
                0.0% outstanding
              </span>
            </div>
          </div>

          {/* Payment Types */}
          <div className="space-y-3 text-sm text-gray-700">
            {[
              { label: "Full Paid", color: "green-500" },
              { label: "Half Paid", color: "yellow-500" },
              { label: "Custom Paid", color: "blue-500" },
              { label: "Monthly Paid", color: "purple-500" },
              { label: "Due Amount", color: "red-500" },
              { label: "Book Sales", color: "orange-500" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-block w-3 h-3 bg-${item.color} rounded-sm`}
                  ></span>
                  <span>{item.label}</span>
                  <span className="text-xs text-gray-400">(0 students)</span>
                </div>
                <span className="text-gray-600 font-medium">৳0</span>
              </div>
            ))}
          </div>
        </div>

        {/* Students by Class */}
        <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Students by Class
          </h2>

          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-600 text-sm">Total Students</p>
            <p className="text-xl font-semibold text-gray-900">17</p>
          </div>

          {/* Distribution */}
          <div className="flex gap-2 text-xs mb-3">
            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
              inter1st: 64.7%
            </span>
            <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
              inter2nd: 35.3%
            </span>
          </div>

          {/* Bars */}
          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-sm">
                <span className="font-medium text-green-700">inter1st</span>
                <span className="text-gray-600">11 students (64.7%)</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mt-1">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "64.7%" }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm">
                <span className="font-medium text-blue-700">inter2nd</span>
                <span className="text-gray-600">6 students (35.3%)</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mt-1">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "35.3%" }}></div>
              </div>
            </div>
          </div>

          {/* Insights */}
          <div className="grid sm:grid-cols-2 gap-4 mt-5">
            <div className="bg-gray-50 border rounded-lg p-3">
              <p className="text-xs text-gray-500">Most Popular</p>
              <p className="text-sm font-semibold text-gray-800 mt-1">
                inter1st (11 students)
              </p>
            </div>
            <div className="bg-gray-50 border rounded-lg p-3">
              <p className="text-xs text-gray-500">Growth Potential</p>
              <p className="text-sm font-semibold text-gray-800 mt-1">
                inter2nd (6 students)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
