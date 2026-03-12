import React, { useState } from 'react';
import { Mail, Send, AlertCircle, Clock } from 'lucide-react';

const Contact = () => {
    // 1. Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    });

    // 2. Error State
    const [errors, setErrors] = useState({});

    // Handle Input Change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    // 3. Validation Logic
    const validate = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Name is required";
        
        if (!formData.email.trim()) {
            tempErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is invalid";
        }

        if (!formData.message.trim()) tempErrors.message = "Message is required";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    // 4. Handle Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Success Logic Here (e.g., API call)
            alert("Message Sent Successfully!");
            // Reset Form
            setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
        }
    };

    return (
        <section id="contact" className="py-10 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Content & Info */}
                    <div>
                        <span className="text-[#E31C5D] font-bold tracking-wider text-sm uppercase mb-3 block">
                            Contact & Support
                        </span>
                        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Reach out to <br />
                            <span className="text-[#E31C5D]">OuterCircle</span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                            Need help with the app, have a question, or want to share feedback? 
                            Our team is ready to support you at every step.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8">
                            {/* Email Support */}
                            <div className="flex flex-col gap-3 p-6 rounded-2xl bg-gray-50 border border-gray-100 transition-hover hover:shadow-md">
                                <div className="w-12 h-12 rounded-xl bg-white text-[#E31C5D] flex items-center justify-center shadow-sm">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email Us</h4>
                                    <a href="mailto:outercircle.in@gmail.com" className="text-lg font-semibold text-gray-900 hover:text-[#E31C5D] transition-colors">
                                        outercircle.in@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Response Time */}
                            <div className="flex flex-col gap-3 p-6 rounded-2xl bg-gray-50 border border-gray-100 transition-hover hover:shadow-md">
                                <div className="w-12 h-12 rounded-xl bg-white text-[#E31C5D] flex items-center justify-center shadow-sm">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Response Time</h4>
                                    <p className="text-lg font-semibold text-gray-900">
                                        24–48 hours
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-gray-200/60 border border-gray-100 relative">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-gray-900">Send a Message</h3>
                            <p className="text-gray-500">Fill out the form and we’ll get back to you soon.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5 relative z-10" noValidate>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-900">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 border transition-all focus:bg-white outline-none ${errors.name ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-transparent focus:border-gray-200 focus:ring-2 focus:ring-[#E31C5D]/20'}`}
                                    placeholder="Your full name"
                                />
                                {errors.name && <p className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle size={12}/> {errors.name}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-900">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 border transition-all focus:bg-white outline-none ${errors.email ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-transparent focus:border-gray-200 focus:ring-2 focus:ring-[#E31C5D]/20'}`}
                                    placeholder="email@example.com"
                                />
                                {errors.email && <p className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle size={12}/> {errors.email}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-900">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 border transition-all resize-none focus:bg-white outline-none ${errors.message ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-transparent focus:border-gray-200 focus:ring-2 focus:ring-[#E31C5D]/20'}`}
                                    placeholder="Tell us how we can help..."
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle size={12}/> {errors.message}</p>}
                            </div>

                            <button className="w-full bg-[#E31C5D] hover:bg-[#c4164f] text-white font-bold py-4 rounded-xl shadow-lg shadow-pink-200 transition-all flex items-center justify-center gap-2 transform active:scale-95 group">
                                Send Message 
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;