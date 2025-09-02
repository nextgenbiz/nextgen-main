"use client";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    company: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // Simple validation rules
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile.trim())) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    // company is optional → no validation

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    setAlert(null);

    if (!validate()) {
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        setAlert({ type: "success", message: data.message });
        setFormData({ name: "", mobile: "", company: "", email: "" });
        setErrors({});
      } else {
        setAlert({ type: "error", message: data.message });
      }
    } catch (error) {
      setAlert({ type: "error", message: "Network error!" });
    }

    setLoading(false);
  };

  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-[#e8f4ff] to-[#e8f4ff]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="max-w-7xl mx-auto  font-semibold text-[#05325f] text-[30px] md:text-[47.5px] leading-normal">
            Get started with today
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
            We help you shape your vision into bold, practical action.
          </p>
        </div>

        <div className="max-w-7xl mx-auto bg-gradient-to-b from-[#e8f4ff] to-[#e8f4ff] p-8 md:p-12">
          <div className="space-y-6">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.name
                      ? "border-red-500 focus:ring-red-400"
                      : "border-[#e2e8f0] focus:ring-[#4a90e2]"
                  } text-[#64748b] shadow-lg`}
                  placeholder="Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData({ ...formData, mobile: e.target.value })
                  }
                  className={`w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.mobile
                      ? "border-red-500 focus:ring-red-400"
                      : "border-[#e2e8f0] focus:ring-[#4a90e2]"
                  } text-[#64748b] shadow-lg`}
                  placeholder="Mobile No."
                />
                {errors.mobile && (
                  <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
                )}
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-4 py-4 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a90e2] text-[#64748b] shadow-lg"
                  placeholder="Company"
                />
              </div>

              <div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.email
                      ? "border-red-500 focus:ring-red-400"
                      : "border-[#e2e8f0] focus:ring-[#4a90e2]"
                  } text-[#64748b] shadow-lg`}
                  placeholder="E-Mail"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Alert */}
            {alert && (
              <div
                className={`p-4 rounded-lg text-white ${
                  alert.type === "success" ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {alert.message}
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-4">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full px-8 py-4 bg-gradient-to-b from-[#245586] to-[#76a5d3] text-white font-semibold rounded-lg hover:from-[#1e456f] hover:to-[#3a7ac2] transition-all duration-300 text-lg disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
