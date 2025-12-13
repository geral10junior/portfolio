import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "./Input";
import TextArea from "./TextArea";

const COOLDOWN_TIME = 30 * 60 * 1000;

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: null as string | null,
    email: null as string | null,
    title: null as string | null,
    message: null as string | null,
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error" | "blocked"
  >("idle");

  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  useEffect(() => {
    const lastSent = localStorage.getItem("lastEmailSent");

    if (lastSent) {
      const timePassed = Date.now() - parseInt(lastSent, 10);

      if (timePassed < COOLDOWN_TIME) {
        setStatus("blocked");
        setTimeRemaining(COOLDOWN_TIME - timePassed);

        const timer = setInterval(() => {
          setTimeRemaining((prev) => {
            if (prev <= 1000) {
              clearInterval(timer);
              setStatus("idle");
              localStorage.removeItem("lastEmailSent");
              return 0;
            }
            return prev - 1000;
          });
        }, 1000);

        return () => clearInterval(timer);
      }
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validate = () => {
    const newErrors = {
      name: form.name ? null : "O nome é obrigatório.",
      email: /\S+@\S+\.\S+/.test(form.email)
        ? null
        : "Digite um e-mail válido.",
      title: form.title ? null : "O título é obrigatório.",
      message: form.message ? null : "A mensagem não pode ficar vazia.",
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((err) => err === null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (status === "blocked") return;

    if (!validate()) return;
    setStatus("loading");

    const templateParams = {
      from_name: form.name,
      email: form.email,
      title: form.title,
      message: form.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          localStorage.setItem("lastEmailSent", Date.now().toString());

          setForm({
            name: "",
            email: "",
            title: "",
            message: "",
          });
        },
        (error) => {
          setStatus(error);
        }
      );
  };

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}m ${seconds}s`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto flex flex-col gap-4"
    >
      <Input
        label="Nome"
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        error={errors.name}
        placeholder="Seu nome completo"
        disabled={status === "blocked"}
      />

      <Input
        label="Email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="seu@email.com"
        disabled={status === "blocked"}
      />

      <Input
        label="Título"
        type="text"
        name="title"
        value={form.title}
        onChange={handleChange}
        error={errors.title}
        placeholder="Título do assunto"
        disabled={status === "blocked"}
      />

      <TextArea
        label="Mensagem"
        name="message"
        value={form.message}
        onChange={handleChange}
        error={errors.message}
        placeholder="Escreva sua mensagem aqui..."
        disabled={status === "blocked"}
      />

      <button
        type="submit"
        disabled={
          status === "loading" || status === "blocked" || status === "success"
        }
        className={`mt-4 cursor-pointer bg-neutral-900 border-2 border-red-600 border-dashed
          text-white font-bold py-3 px-6 rounded-md transition-colors ${
            status === "loading" || status === "blocked" || status === "success"
              ? "bg-neutral-600 cursor-not-allowed text-gray-400 border-gray-500"
              : "hover:bg-red-700 bg-red-600 text-white"
          }`}
      >
        {status === "loading" && "Enviando..."}
        {status === "blocked" && `Aguarde ${formatTime(timeRemaining)}`}
        {status === "success" && "Enviado!"}
        {status === "idle" || status === "error" ? "Enviar Mensagem" : ""}
      </button>

      {status === "success" && (
        <p className="text-green-500 text-center mt-2 font-medium">
          Mensagem enviada! Para evitar spam, aguarde antes de enviar outra.
        </p>
      )}

      {status === "error" && (
        <p className="text-red-500 text-center mt-2 font-medium">
          Erro ao enviar. Tente novamente ou me chame no LinkedIn.
        </p>
      )}

      {status === "blocked" && (
        <p className="text-orange-400 text-center mt-2 text-sm">
          Você já enviou uma mensagem recentemente. Por favor, aguarde para
          enviar outra.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
