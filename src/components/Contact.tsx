"use client";
import React, { useState } from "react";
import { FaEnvelope, FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("¡Mensaje enviado con éxito!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrorMessage("No se pudo enviar el mensaje. Intenta nuevamente.");
      }
    } catch (error) {
      setErrorMessage("Ocurrió un error. Por favor, intenta nuevamente más tarde.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: "#01030e" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-light">Ponte en contacto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-surface-light dark:bg-surface-dark shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label className="block text-primary-light text-sm font-bold mb-2" htmlFor="name">
                  Nombre Completo
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-surface-light dark:bg-surface-dark leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-primary-light text-sm font-bold mb-2" htmlFor="email">
                  Correo Electrónico
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-surface-light dark:bg-surface-dark leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-primary-light text-sm font-bold mb-2" htmlFor="message">
                  Mensaje
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-surface-light dark:bg-surface-dark leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Tu mensaje aquí"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-[#3b4a5b] hover:bg-[#50667d] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </button>
              </div>
              {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
              {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
            </form>
          </div>
          <div>
            <div className="bg-surface-light dark:bg-surface-dark shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h3 className="text-2xl font-semibold mb-4 text-primary-light">Información de contacto</h3>
              <div className="mb-4">
                <p className="flex items-center text-primary-light">
                  <FaEnvelope className="mr-2 text-primary-light" />
                  <a
                    href="mailto:Jomsolutionsmx@gmail.com"
                    className="hover:text-secondary-light transition duration-300"
                  >
                    Jomsolutionsmx@gmail.com
                  </a>
                </p>
              </div>
              <div className="mb-4">
                <p className="flex items-center text-primary-light">
                  <FaWhatsapp className="mr-2 text-primary-light" />
                  <a
                    href="https://wa.me/523314757456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary-light transition duration-300"
                  >
                    +52(33)14757456
                  </a>
                </p>
              </div>
              <div className="mb-4">
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
