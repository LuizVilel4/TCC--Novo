import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-[#f2f2f2] flex items-center justify-center p-6">
      <div className="relative w-full max-w-[520px]">
        {/* fundo decorativo leve */}
        <div className="absolute -inset-10 rounded-[32px] bg-[#008080]/10 blur-2xl" />

        <div className="relative rounded-2xl border border-[#808080] bg-white p-8 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#008080]/15">
              <ShieldCheck className="text-[#008080]" />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-[#008080]">PetCare+</h1>
              <p className="text-sm text-[#808080]">Login do Administrador</p>
            </div>
          </div>

          <form
            className="flex flex-col gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/admin/dashboard");
            }}
          >
            <label className="text-sm text-[#808080]" htmlFor="adminEmail">
              E-mail
            </label>
            <div className="flex items-center gap-2 rounded-xl border border-[#808080] bg-white p-3">
              <span className="text-sm text-[#008080]">@</span>
              <input
                id="adminEmail"
                type="email"
                placeholder="admin@email.com"
                className="w-full border-none bg-transparent text-sm text-[#008080] outline-none placeholder:text-[#808080]"
              />
            </div>

            <label
              className="mt-2 text-sm text-[#808080]"
              htmlFor="adminPassword"
            >
              Senha
            </label>
            <div className="flex items-center gap-2 rounded-xl border border-[#808080] bg-white p-3">
              <span className="text-sm text-[#008080]">#</span>
              <input
                id="adminPassword"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className="w-full border-none bg-transparent text-sm text-[#008080] outline-none placeholder:text-[#808080]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-[#808080]"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button
              type="submit"
              className="mt-3 rounded-xl bg-[#008080] hover:bg-[#006666] px-4 py-3 font-semibold text-white transition"
            >
              Entrar
            </button>

            <p className="mt-2 text-sm text-[#808080]">
              Não tem conta?{" "}
              <Link to="/admin/register" className="text-[#008080] underline">
                Cadastre seu petshop
              </Link>
            </p>

            <p className="mt-1 text-sm text-[#808080]">
              Voltar para{" "}
              <Link to="/" className="text-[#008080] underline">
                login do cliente
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
