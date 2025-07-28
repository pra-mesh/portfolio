import {
  AlertCircle,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { PERSONAL_INFO } from "../constants/personalInfo";
import type { ContactFormData } from "../types";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { EmailJsKey } from "../constants/Emailjs";

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  useEffect(() => {
    setTimeout(() => {
      setSubmitStatus("idle");
      setIsSubmitting(false);
      if (submitStatus === "success")
        setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  }, [submitStatus]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };
    try {
      console.log("Form submitted", formData);
      await emailjs.send(
        EmailJsKey.ServiceID,
        EmailJsKey.TemplateID,
        templateParams,
        EmailJsKey.PublicKey
      );
      setSubmitStatus("success");
    } catch (error) {
      console.log({ error });
      setSubmitStatus("error");
    }
  };

  return (
    <section id="contact" className="pt-15 pb-10  relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-600 dark:text-slate-300 ">
        <div className="text-center mb-8">
          <h2
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-teal-600
           dark:from-sky-400 dark:to-green-700 bg-clip-text text-transparent pb-5"
          >
            Let' Connect
          </h2>

          <p className="text-lg max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and
            interesting projects
          </p>
          <div className="w-48 md:w-64 h-1 bg-gradient-to-r via-indigo-500 to-teal-600 mx-auto rounded-full animate-ping"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold">Let's work together</h3>
              <p className=" mb-8 leading-relaxed">
                I'm currently available for new opportunities. If you're working
                on something exciting or just want to chat about technology, I'd
                love to connect!
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className=" hover:text-blue-500 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Phone</h4>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className=" hover:text-blue-500 transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold ">Location</h4>
                  <p>{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="shadow-lg dark:shadow-4xl rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring
                     focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring
                     focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  required
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  className="w-full col-span-2 px-4 py-3 border border-slate-300 rounded-lg focus:ring
                     focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  required
                  id="message"
                  name="message"
                  value={formData.message}
                  rows={6}
                  onChange={handleChange}
                  placeholder="Tell me more about it...."
                  className="w-full col-span-2 px-4 py-3 border border-slate-300 rounded-lg focus:ring
                     focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                />
              </div>
              {submitStatus === "error" && (
                <div
                  className="flex items-center space-x-2
                 text-red-600 bg-red-50/50 dark:text-red-50 dark:bg-red-600/50 p-3 rounded-lg"
                >
                  <AlertCircle size={20} />
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}
              {submitStatus === "success" && (
                <div
                  className="flex items-center space-x-2 text-green-600 bg-green-200/50
                 dark:text-green-200 dark:bg-green-600/50 p-3 rounded-lg"
                >
                  <CheckCircle size={20} />
                  <span>
                    Message sent successfully! I'll get back to you soon..
                  </span>
                </div>
              )}
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold
                 hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <span className="flex items-center justify-center">
                  {isSubmitting ? (
                    <>
                      <div
                        className="w-5 h-5 border-2 border-white/30 border-t-white 
                      rounded-full animate-spin mr-2"
                      ></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send
                        size={20}
                        className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
