"use client";
import React, { useReducer } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Pricing: React.FC = () => {
  interface State {
    planType: string;
    duration: string;
    residentialPrice: string;
    commercialPrice: string;
    industrialPrice: string;
  }

  interface Action {
    type: "Residential" | "Commercial";
    payload: {
      duration: string;
      residentialPrice: string;
      commercialPrice: string;
      industrialPrice: string;
    };
  }

  const initialTabConfig: State = {
    planType: "Residential",
    duration: "per kW",
    residentialPrice: "45,000",
    commercialPrice: "42,000",
    industrialPrice: "38,000",
  };

  function reducer(state: State, action: Action): State {
    switch (action.type) {
      case "Residential":
      case "Commercial":
        return { ...state, ...action.payload, planType: action.type };
      default:
        return state;
    }
  }

  const [tabConfig, dispatch] = useReducer(reducer, initialTabConfig);

  return (
    <>
      <section className="overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
        <div className="container mx-auto px-4 space-y-14">
          {/* Title */}
          <div className="text-center">
            <span className="sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
              SOLAR PRICING
            </span>
            <h2 className="mt-4 font-chakrapetch lg:text-35 font-semibold mb-5">
              Clean Energy Solutions for Every Need
            </h2>

            {/* Toggle Buttons */}
            <div className="text-center pb-6">
              <div className="inline-flex items-center rounded-xl p-2 shadow-lg bg-white">
                <button
                  className={`py-3 px-7 rounded-xl ${
                    tabConfig.planType === "Residential"
                      ? "bg-dark text-white"
                      : "bg-transparent text-black"
                  }`}
                  onClick={() =>
                    dispatch({
                      type: "Residential",
                      payload: {
                        duration: "per kW",
                        residentialPrice: "45,000",
                        commercialPrice: "42,000",
                        industrialPrice: "38,000",
                      },
                    })
                  }
                >
                  Residential
                </button>

                <button
                  className={`py-3 px-7 rounded-xl ${
                    tabConfig.planType === "Commercial"
                      ? "bg-dark text-white"
                      : "bg-transparent text-black"
                  }`}
                  onClick={() =>
                    dispatch({
                      type: "Commercial",
                      payload: {
                        duration: "per kW",
                        residentialPrice: "42,000",
                        commercialPrice: "38,000",
                        industrialPrice: "35,000",
                      },
                    })
                  }
                >
                  Commercial
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-12">
            {/* Home Solar Plan */}
            <div className="bg-white pt-8 px-8 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
              <h3 className="text-22 font-bold text-black font-chakrapetch">
                Home Solar
              </h3>
              <div className="mt-4 flex items-center justify-center">
                <p className="text-48 py-5 uppercase font-bold font-mona">
                  ₹{tabConfig.residentialPrice}
                </p>
                <sub className="text-xs">/{tabConfig.duration}</sub>
              </div>
              <p className="mt-4 text-muted text-sm mb-8">
                Perfect for residential homes with rooftop solar installations and net metering benefits.
              </p>
              <span className="font-semibold text-xl">Package Includes</span>

              <div className="space-y-3 text-muted pt-3 text-start">
                {[
                  "High-efficiency solar panels",
                  "Grid-tie inverter system",
                  "Net metering setup",
                  "5-year installation warranty",
                  "Performance monitoring app",
                  "Annual maintenance check",
                ].map((feature, i) => (
                  <p key={i} className="text-dark flex gap-1 items-center">
                    <Icon
                      icon="material-symbols:check-rounded"
                      width="24"
                      height="24"
                    />
                    {feature}
                  </p>
                ))}
              </div>

              <Link
                href="/contact"
                className="text-white bg-dark h-[50px] w-[80%] text-sm lg:text-16 rounded-full font-chakrapetch font-semibold flex items-center justify-center gap-2 ps-4 pe-2 py-2 tracking-wider group my-8"
              >
                Get Quote
                <Icon
                  icon="tabler:arrow-right"
                  width="24"
                  height="24"
                  className="bg-prim text-white rounded-full h-[35px] w-[35px] p-1.5 group-hover:-rotate-45 transition duration-300"
                />
              </Link>
            </div>

            {/* Business Solar Plan */}
            <div className="bg-white pt-8 px-8 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
              <h3 className="text-22 font-bold text-black font-chakrapetch">
                Business Solar
              </h3>
              <div className="mt-4 flex items-center justify-center">
                <p className="text-48 py-5 uppercase font-bold font-mona">
                  ₹{tabConfig.commercialPrice}
                </p>
                <sub className="text-xs">/{tabConfig.duration}</sub>
              </div>
              <p className="mt-4 text-muted text-sm mb-8">
                Ideal for offices, shops, and small businesses looking to reduce electricity costs.
              </p>
              <span className="font-semibold text-xl">Package Includes</span>

              <div className="space-y-3 text-muted pt-3 text-start">
                {[
                  "Commercial-grade solar panels",
                  "Three-phase inverter system",
                  "Load management system",
                  "10-year comprehensive warranty",
                  "Real-time energy monitoring",
                  "Bi-annual maintenance service",
                ].map((feature, i) => (
                  <p key={i} className="text-dark flex gap-1 items-center">
                    <Icon
                      icon="material-symbols:check-rounded"
                      width="24"
                      height="24"
                    />
                    {feature}
                  </p>
                ))}
              </div>

              <Link
                href="/contact"
                className="text-white bg-dark h-[50px] w-[80%] text-sm lg:text-16 rounded-full font-chakrapetch font-semibold flex items-center justify-center gap-2 ps-4 pe-2 py-2 tracking-wider group my-8"
              >
                Get Quote
                <Icon
                  icon="tabler:arrow-right"
                  width="24"
                  height="24"
                  className="bg-prim text-white rounded-full h-[35px] w-[35px] p-1.5 group-hover:-rotate-45 transition duration-300"
                />
              </Link>
            </div>

            {/* Industrial Solar Plan */}
            <div className="bg-white pt-8 px-8 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
              <h3 className="text-22 font-bold text-black font-chakrapetch">
                Industrial Solar
              </h3>
              <div className="mt-4 flex items-center justify-center">
                <p className="text-48 py-5 uppercase font-bold font-mona">
                  ₹{tabConfig.industrialPrice}
                </p>
                <sub className="text-xs">/{tabConfig.duration}</sub>
              </div>
              <p className="mt-4 text-muted text-sm mb-8">
                Large-scale solar solutions for factories, warehouses, and industrial complexes.
              </p>
              <span className="font-semibold text-xl">Package Includes</span>

              <div className="space-y-3 text-muted pt-3 text-start">
                {[
                  "Industrial-grade solar arrays",
                  "Central inverter systems",
                  "SCADA monitoring system",
                  "15-year performance warranty",
                  "24/7 remote monitoring",
                  "Quarterly maintenance service",
                ].map((feature, i) => (
                  <p key={i} className="text-dark flex gap-1 items-center">
                    <Icon
                      icon="material-symbols:check-rounded"
                      width="24"
                      height="24"
                    />
                    {feature}
                  </p>
                ))}
              </div>

              <Link
                href="/contact"
                className="text-white bg-dark h-[50px] w-[80%] text-sm lg:text-16 rounded-full font-chakrapetch font-semibold flex items-center justify-center gap-2 ps-4 pe-2 py-2 tracking-wider group my-8"
              >
                Get Quote
                <Icon
                  icon="tabler:arrow-right"
                  width="24"
                  height="24"
                  className="bg-prim text-white rounded-full h-[35px] w-[35px] p-1.5 group-hover:-rotate-45 transition duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;