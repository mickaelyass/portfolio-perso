
import React, { useRef, useState, useId } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaGlobe,
  FaCheckCircle,
} from "react-icons/fa";
import { Loader2 } from "lucide-react";

function Contact() {
  const [showToast, setShowToast] = useState(false);
  const [sending, setSending] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  // ID unique de la région live pour l'accessibilité
  const errorId = useId();
  // Délais supplémentaires entre l'envoi du formulaire
  const delayTimer = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

    // Supprimer l'erreur dès que l'utilisateur modifie le formulaire
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot : champ invisible laissé rempli uniquement par les robots
    if (delayTimer.current && delayTimer.current.value.trim() !== "") {
      return;
    }

    setSending(true);
    setErrorMessage("");

    // Délai minimum d'environ 3 secondes pour éviter les envois précipités
    const start = Date.now();
    while (Date.now() - start < 3000) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    const serviceID = "service_n0oqptp";
    const templateID = "template_v7xeqjb";
    const publicKey = "YJlnFWRToFxc0san9";

    try {
      await emailjs.send(serviceID, templateID, formData, publicKey);

      // Message envoyé avec succès
      setShowToast(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setShowToast(false);
      }, 4000);
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);

      setErrorMessage(
        "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer."
      );

      // Fallback : redirection vers l'outil mail de l'utilisateur
      window.location.href = `mailto:${
        formData.email
      }?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Nom : ${formData.name}\n\nMessage :\n${formData.message}`
      )}`;
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="w-full">

      <div className="max-w-6xl mx-auto">

        {/* =========================
            EN-TÊTE
        ========================== */}
        <div className="text-center mb-12">

          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600 mb-2">
            Contact
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Travaillons ensemble
          </h2>

          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 leading-relaxed">
            Vous avez un projet, une idée ou une opportunité à discuter ?
            N'hésitez pas à me contacter.
          </p>

        </div>


        {/* =========================
            CONTENU
        ========================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


          {/* =========================
              COORDONNÉES
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              bg-white
              border
              border-slate-200
              rounded-2xl
              p-6
              sm:p-8
              shadow-sm
            "
          >

            <h3 className="
              text-xl
              font-bold
              text-slate-900
              mb-2
            ">
              Mes coordonnées
            </h3>

            <p className="
              text-sm
              text-slate-500
              mb-8
            ">
              Retrouvez-moi directement via les différents moyens de contact
              ci-dessous.
            </p>


            <div className="space-y-5">

              {/* Téléphone */}
              <a
                href="tel:+229190831418"
                className="
                  flex
                  items-center
                  gap-4
                  group
                "
              >

                <div className="
                  w-11
                  h-11
                  rounded-xl
                  bg-brand-50
                  text-brand-600
                  flex
                  items-center
                  justify-center
                  group-hover:bg-brand-600
                  group-hover:text-white
                  transition
                ">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-xs text-slate-500 mb-1">
                    Téléphone
                  </p>

                  <p className="
                    text-sm
                    font-medium
                    text-slate-700
                    group-hover:text-brand-600
                    transition
                  ">
                    +229 19 08 31 41 8
                  </p>
                </div>

              </a>


              {/* Email */}
              <a
                href="mailto:yassegoungbeseton@gmail.com"
                className="
                  flex
                  items-center
                  gap-4
                  group
                "
              >

                <div className="
                  w-11
                  h-11
                  rounded-xl
                  bg-brand-50
                  text-brand-600
                  flex
                  items-center
                  justify-center
                  group-hover:bg-brand-600
                  group-hover:text-white
                  transition
                ">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-xs text-slate-500 mb-1">
                    Email
                  </p>

                  <p className="
                    text-sm
                    font-medium
                    text-slate-700
                    break-all
                    group-hover:text-brand-600
                    transition
                  ">
                    yassegoungbeseton@gmail.com
                  </p>
                </div>

              </a>


              {/* Localisation */}
              <div className="
                flex
                items-center
                gap-4
              ">

                <div className="
                  w-11
                  h-11
                  rounded-xl
                  bg-brand-50
                  text-brand-600
                  flex
                  items-center
                  justify-center
                ">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-xs text-slate-500 mb-1">
                    Localisation
                  </p>

                  <p className="
                    text-sm
                    font-medium
                    text-slate-700
                  ">
                    Cotonou, Bénin
                  </p>
                </div>

              </div>


              {/* GitHub */}
              <a
                href="https://github.com/mickaelyass"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-4
                  group
                "
              >

                <div className="
                  w-11
                  h-11
                  rounded-xl
                  bg-brand-50
                  text-brand-600
                  flex
                  items-center
                  justify-center
                  group-hover:bg-brand-600
                  group-hover:text-white
                  transition
                ">
                  <FaGithub />
                </div>

                <div>
                  <p className="text-xs text-slate-500 mb-1">
                    GitHub
                  </p>

                  <p className="
                    text-sm
                    font-medium
                    text-slate-700
                    group-hover:text-brand-600
                    transition
                  ">
                    github.com/mickaelyass
                  </p>
                </div>

              </a>


              {/* Portfolio */}
              <a
                href="https://mickaels-projects-c86ff2e4.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-4
                  group
                "
              >

                <div className="
                  w-11
                  h-11
                  rounded-xl
                  bg-brand-50
                  text-brand-600
                  flex
                  items-center
                  justify-center
                  group-hover:bg-brand-600
                  group-hover:text-white
                  transition
                ">
                  <FaGlobe />
                </div>

                <div>
                  <p className="text-xs text-slate-500 mb-1">
                    Portfolio
                  </p>

                  <p className="
                    text-sm
                    font-medium
                    text-slate-700
                    group-hover:text-brand-600
                    transition
                  ">
                    Voir mon portfolio
                  </p>
                </div>

              </a>

            </div>

          </motion.div>


          {/* =========================
              FORMULAIRE
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              bg-white
              border
              border-slate-200
              rounded-2xl
              p-6
              sm:p-8
              shadow-sm
            "
          >

            <h3 className="
              text-xl
              font-bold
              text-slate-900
              mb-2
            ">
              Envoyer un message
            </h3>

            <p className="
              text-sm
              text-slate-500
              mb-6
            ">
              Remplissez le formulaire et je vous répondrai dans les meilleurs
              délais.
            </p>


            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Nom */}
              <div>

                <label
                  htmlFor="name"
                  className="
                    block
                    text-sm
                    font-medium
                    text-slate-700
                    mb-2
                  "
                >
                  Nom complet
                </label>

                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  required
                  aria-required="true"
                  aria-invalid={errorMessage ? "true" : undefined}
                  aria-describedby={errorMessage ? errorId : undefined}
                  className="
                    w-full
                    px-4
                    py-3
                    bg-slate-50
                    border
                    border-slate-200
                    rounded-lg
                    text-slate-700
                    placeholder:text-slate-500
                    outline-none
                    focus:bg-white
                    focus:border-brand-500
                    focus:ring-2
                    focus:ring-brand-100
                    transition
                  "
                />

              </div>


              {/* Email */}
              <div>

                <label
                  htmlFor="email"
                  className="
                    block
                    text-sm
                    font-medium
                    text-slate-700
                    mb-2
                  "
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  required
                  aria-required="true"
                  aria-invalid={errorMessage ? "true" : undefined}
                  aria-describedby={errorMessage ? errorId : undefined}
                  className="
                    w-full
                    px-4
                    py-3
                    bg-slate-50
                    border
                    border-slate-200
                    rounded-lg
                    text-slate-700
                    placeholder:text-slate-500
                    outline-none
                    focus:bg-white
                    focus:border-brand-500
                    focus:ring-2
                    focus:ring-brand-100
                    transition
                  "
                />

              </div>


              {/* Sujet */}
              <div>

                <label
                  htmlFor="subject"
                  className="
                    block
                    text-sm
                    font-medium
                    text-slate-700
                    mb-2
                  "
                >
                  Sujet
                </label>

                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Objet de votre message"
                  required
                  aria-required="true"
                  aria-invalid={errorMessage ? "true" : undefined}
                  aria-describedby={errorMessage ? errorId : undefined}
                  className="
                    w-full
                    px-4
                    py-3
                    bg-slate-50
                    border
                    border-slate-200
                    rounded-lg
                    text-slate-700
                    placeholder:text-slate-500
                    outline-none
                    focus:bg-white
                    focus:border-brand-500
                    focus:ring-2
                    focus:ring-brand-100
                    transition
                  "
                />

              </div>


              {/* Message */}
              <div>

                <label
                  htmlFor="message"
                  className="
                    block
                    text-sm
                    font-medium
                    text-slate-700
                    mb-2
                  "
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message..."
                  required
                  aria-required="true"
                  aria-invalid={errorMessage ? "true" : undefined}
                  aria-describedby={errorMessage ? errorId : undefined}
                  className="
                    w-full
                    px-4
                    py-3
                    bg-slate-50
                    border
                    border-slate-200
                    rounded-lg
                    text-slate-700
                    placeholder:text-slate-500
                    outline-none
                    resize-none
                    focus:bg-white
                    focus:border-brand-500
                    focus:ring-2
                    focus:ring-brand-100
                    transition
                  "
                />

              </div>


              {/* Erreur — région live pour les lecteurs d'écran */}
              {/* Honeypot — champ invisible, rempli uniquement par les robots */}
              <div className="h-0 overflow-hidden">
                <input
                  ref={delayTimer}
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  placeholder="Laissez ce champ vide"
                />
              </div>
              <div
                id={errorId}
                role="alert"
                aria-live="polite"
              >
                {errorMessage && (
                  <div className="
                    px-4
                    py-3
                    rounded-lg
                    bg-red-50
                    border
                    border-red-100
                    text-sm
                    text-red-600
                  ">
                    {errorMessage}
                  </div>
                )}
              </div>


              {/* Bouton */}
              <button
                type="submit"
                disabled={sending}
                className="
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-2
                  px-6
                  py-3
                  rounded-lg
                  bg-brand-600
                  text-white
                  font-semibold
                  hover:bg-brand-700
                  disabled:bg-brand-400
                  disabled:cursor-not-allowed
                  transition
                  duration-200
                "
              >

                {sending ? (
                  <>
                    <Loader2
                      size={19}
                      className="animate-spin"
                    />
                    Envoi en cours...
                  </>
                ) : (
                  "Envoyer le message"
                )}

              </button>

            </form>

          </motion.div>

        </div>


        {/* =========================
            TOAST SUCCÈS
        ========================== */}
        <AnimatePresence>

          {showToast && (

            <motion.div
              role="status"
              aria-live="polite"
              initial={{
                opacity: 0,
                y: prefersReducedMotion ? 0 : 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: prefersReducedMotion ? 0 : 30,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                fixed
                bottom-6
                right-6
                bg-white
                border
                border-green-200
                text-slate-700
                px-5
                py-4
                rounded-xl
                flex
                items-center
                gap-3
                shadow-xl
                z-50
              "
            >

              <FaCheckCircle className="text-green-500 text-xl" />

              <div>

                <p className="font-semibold text-slate-900">
                  Message envoyé
                </p>

                <p className="text-sm text-slate-500">
                  Merci pour votre message.
                </p>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </section>
  );
}

export default Contact;

