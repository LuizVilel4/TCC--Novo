import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("As senhas não conferem.");
      return;
    }

    alert(
      "Cadastro enviado (exemplo). Agora você pode integrar com API depois.",
    );
  }

  return (
    <main className="min-h-screen bg-[#f2f2f2] flex items-center justify-center p-6">
      <div className="w-full max-w-[420px] rounded-2xl border border-[#808080] bg-white p-8">
        <h1 className="text-2xl font-bold text-[#008080]">Criar conta</h1>
        <p className="mt-1 text-sm text-[#808080]">
          Preencha os dados para se cadastrar
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
          <label className="text-sm text-[#808080]">Nome</label>
          <input
            className="rounded-xl border border-[#808080] px-4 py-3 outline-none"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Seu nome"
          />

          <label className="text-sm text-[#808080]">E-mail</label>
          <input
            className="rounded-xl border border-[#808080] px-4 py-3 outline-none"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="seu@email.com"
          />

          <label className="text-sm text-[#808080]">Senha</label>
          <input
            className="rounded-xl border border-[#808080] px-4 py-3 outline-none"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="********"
          />

          <label className="text-sm text-[#808080]">Confirmar senha</label>
          <input
            className="rounded-xl border border-[#808080] px-4 py-3 outline-none"
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="********"
          />

          <button
            type="submit"
            className="mt-2 rounded-xl bg-[#008080] hover:bg-[#006666] px-4 py-3 font-semibold text-white transition"
          >
            Cadastrar
          </button>

          <p className="mt-2 text-sm text-[#808080]">
            Já tem conta?{" "}
            <Link to="/" className="text-[#008080] underline">
              Voltar para login
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
