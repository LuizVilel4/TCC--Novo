import loginPetsImage from "../assets/login-pets.png.png";
import {
  Eye,
  EyeOff,
  Syringe,
  CalendarRange,
  BookText,
  Mail,
  Key,
} from "lucide-react";

import { useState } from "react";
import { Link } from "react-router-dom";

const features = [
  { icon: <CalendarRange size={25} />, title: "Agendamentos Rápido" },
  { icon: <Syringe size={25} />, title: "Controle de Vacinas" },
  { icon: <BookText size={25} />, title: "Relatórios Seguros" },
];

function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-[#f2f2f2] flex items-center justify-center p-6">
      <div className="w-full max-w-[1400px] grid gap-6 xl:grid-cols-[1fr_380px]">
        {/* ESQUERDA */}
        <section className="flex flex-col gap-6">
          <header>
            <h1 className="text-3xl font-bold text-[#008080]">PetCare+</h1>
            <p className="text-[#808080]">Cuidado completo para seu pet</p>
          </header>

          <div className="overflow-hidden rounded-[18px] bg-white border border-[#808080]">
            <img
              className="w-full h-[520px] object-cover"
              src={loginPetsImage}
              alt="Pets em ambiente clinico"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-xl border border-[#808080] bg-white p-4 text-center"
              >
                <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-md border border-[#808080] text-[#008080]">
                  {feature.icon}
                </div>

                <h2 className="font-semibold text-[#008080]">
                  {feature.title}
                </h2>
              </article>
            ))}
          </div>
        </section>

        {/* DIREITA */}
        <aside className="flex flex-col rounded-[18px] border border-[#808080] bg-white p-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#808080]">
              Bem-vindo ao
            </h2>
            <h3 className="text-4xl font-bold text-[#008080]">PetCare+</h3>

            <p className="mb-6 mt-3 text-[#808080]">Entre na sua conta</p>

            <form className="flex flex-col gap-3">
              <label className="text-sm text-[#006666]" htmlFor="email">
                E-mail
              </label>

              <div className="flex items-center gap-2 rounded-xl border border-[#808080] bg-white p-3">
                <span className="text-sm text-[#008080]">
                  <Mail size={18} />
                </span>

                <input
                  className="w-full border-none bg-transparent text-sm text-[#008080] outline-none placeholder:text-[#006666] :"
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                />
              </div>

              <label className="mt-2 text-sm text-[#006666]" htmlFor="password">
                Senha
              </label>

              <div className="flex items-center gap-2 rounded-xl border border-[#808080] bg-white p-3">
                <span className="text-sm text-[#008080]">
                  <Key size={18} />
                </span>

                <input
                  className="w-full border-none bg-transparent text-sm text-[#008080] outline-none placeholder:text-[#006666]"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-[#006666]"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <a
                className="text-right text-sm text-[#008080] underline"
                href="#"
              >
                Esqueci minha senha?
              </a>

              <button
                className="rounded-xl bg-[#008080] hover:bg-[#006666] px-4 py-3 font-semibold text-white transition"
                type="submit"
              >
                Entrar
              </button>

              <button
                className="rounded-xl border border-[#006666] bg-white px-4 py-3 text-[#808080]"
                type="button"
              >
                <Link
                  to="/admin/login"
                  className="block text-center rounded-xl border border-[#006666] bg-white px-4 py-3 text-[#006666] transition hover:bg-[#006666] hover:text-white "
                >
                  Login como Administrador
                </Link>
              </button>
            </form>

            <p className="my-4 text-[#808080]">
              Não tem uma conta?{" "}
              <Link className="text-[#008080] underline" to="/register">
                Cadastre-se
              </Link>
            </p>
          </div>

          <div className="mt-auto rounded-xl bg-[#e6f7f7] p-4">
            <strong className="block text-[#008080]">Acesso Seguro</strong>
            <p className="text-[#808080]">
              Seus dados são protegidos com criptografia
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default App;
