import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";

const ContactForm = () => {
  // Estado único para todos os campos
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  // Estado para armazenar os erros
  const [errors, setErrors] = React.useState({
    name: null as string | null,
    email: null as string | null,
    title: null as string | null,
    message: null as string | null,
  });

  const [status, setStatus] = React.useState<"idle" | "success" | "error">(
    "idle"
  );

  // Função genérica para atualizar qualquer campo
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Limpa o erro do campo quando o usuário começa a digitar
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  // Função de Validação
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

    if (validate()) {
      console.log("Enviando...", form);
      setStatus("success");
    } else {
      setStatus("error");
    }
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
      />

      <Input
        label="Email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="seu@email.com"
      />

      <Input
        label="Título"
        type="text"
        name="title"
        value={form.title}
        onChange={handleChange}
        error={errors.title}
        placeholder="Motivo do contato"
      />

      <TextArea
        label="Mensagem"
        name="message"
        value={form.message}
        onChange={handleChange}
        error={errors.message}
        placeholder="Escreva sua mensagem aqui..."
      />

      <button
        type="submit"
        className="mt-4 cursor-pointer bg-neutral-900 hover:bg-red-700 border-2 border-red-600 border-dashed
         text-white font-bold py-3 px-6 rounded-md transition-colors"
      >
        Enviar Mensagem
      </button>

      {status === "success" && (
        <p className="text-green-500 text-center mt-2">
          Mensagem enviada com sucesso!
        </p>
      )}
    </form>
  );
};

export default ContactForm;
