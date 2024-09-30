import Link from "next/link";
import React from "react";

export default function Services({ activeTab, onTabClick }) {
    return (
        <div className="service-sidebar">
            <div className="service-widget service-list-area">
                <h4 className="sidebar-title">All Services</h4>
                <ul className="service-list">
                    {[
                        { name: "Product Development", href: "/products-details-product" },
                        { name: "Website Development", href: "/products-details-website" },
                        { name: "iOS/Android App Development", href: "/products-details-app" },
                        { name: "ML Models", href: "/products-details-models" },
                        { name: "LLM Chatbots", href: "/products-details-chatbots" },
                        { name: "DevOps", href: "/products-details-devOps" },
                        { name: "UI/UX", href: "/products-details-ui" },
                        { name: "WordPress", href: "/products-details-wordpress" },
                        { name: "Magento", href: "/products-details-magento" },
                        { name: "Shopify/WooCommerce", href: "/products-details-shopify" },
                    ].map((service) => (
                        <li key={service.name}>
                            <Link href={service.href}>
                                <a
                                    onClick={() => onTabClick(service.name)} // Use onTabClick prop
                                    style={{
                                        color: activeTab === service.name ? "#06093B" : "#49D0C4",
                                        fontWeight: activeTab === service.name ? "bold" : "normal",
                                    }}
                                >
                                    {service.name}
                                </a>
                            </Link>
                            <svg width={20} height={16} viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.7496 15.4594C12.4954 15.4594 ..." />
                            </svg>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
