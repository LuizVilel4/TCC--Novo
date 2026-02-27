import { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminRegister() {
  const [form, setForm] = useState({
    ownerName: "",
    email: "",
    password: "",
    confirmPassword: "",
    shopName: "",
    phone: "",
    city: "",
    state: "",
  });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.email.trim() || !form.password.trim() || !form.shopName.trim()) {
      alert("Preencha pelo menos: E-mail, Senha e Nome do Petshop.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("As senhas não conferem.");
      return;
    }

    alert("Petshop cadastrado (exemplo). Agora você pode integrar com API.");
  }

  return (
    <main className="min-h-screen bg-[#f2f2f2] flex items-center justify-center p-6">
      <div className="w-full max-w-[640px] rounded-2xl border border-[#808080] bg-white p-8 shadow-lg">
        <h1 className="text-2xl font-bold text-[#008080]">
          Cadastro do Petshop (Admin)
        </h1>
        <p className="mt-2 text-sm text-[#808080]">
          Crie a conta do administrador e registre os dados básicos do petshop.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          {/* DONO */}
          <div className="grid gap-3 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#808080]">
                Nome do responsável
              </label>
              <input
                name="ownerName"
                value={form.ownerName}
                onChange={handleChange}
                placeholder="Seu nome"
                className="rounded-xl border border-[#808080] px-4 py-3 outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#808080]">E-mail</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="admin@petshop.com"
                className="rounded-xl border border-[#808080] px-4 py-3 outline-none"
              />
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#808080]">Senha</label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="********"
                className="rounded-xl border border-[#808080] px-4 py-3 outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#808080]">Confirmar senha</label>
              <input
                name="confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="********"
                className="rounded-xl border border-[#808080] px-4 py-3 outline-none"
              />
            </div>
          </div>

          {/* PETSHOP */}
          <div className="mt-2 rounded-xl border border-[#808080] p-4">
            <p className="font-semibold text-[#008080]">Dados do Petshop</p>

            <div className="mt-3 grid gap-3 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-[#808080]">
                  Nome do petshop
                </label>
                <input
                  name="shopName"
                  value={form.shopName}
                  onChange={handleChange}
                  placeholder="PetCare Centro"
                  className="rounded-xl border border-[#808080] px-4 py-3 outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-[#808080]">
                  Telefone/WhatsApp
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(11) 99999-9999"
                  className="rounded-xl border border-[#808080] px-4 py-3 outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-[#808080]">Cidade</label>
                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Barueri"
                  className="rounded-xl border border-[#808080] px-4 py-3 outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-[#808080]">UF</label>
                <input
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  placeholder="SP"
                  className="rounded-xl border border-[#808080] px-4 py-3 outline-none"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="rounded-xl bg-[#008080] hover:bg-[#006666] px-4 py-3 font-semibold text-white transition"
          >
            Criar conta do Petshop
          </button>

          <p className="text-sm text-[#808080]">
            Já tem conta?{" "}
            <Link to="/admin/login" className="text-[#008080] underline">
              Fazer login como admin
            </Link>
          </p>

          <p className="text-sm text-[#808080]">
            Voltar para{" "}
            <Link to="/" className="text-[#008080] underline">
              login do cliente
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
