"use client";

import Link from "next/link";
import { Menu, X, Plus, LogOut, User, CheckSquare } from "lucide-react";
import { useContext, useState } from "react";
import UserContext from "@/app/userContext/userContext";
import { logoutUser } from "@/app/services/user-service";
import { useRouter } from "next/navigation";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const router = useRouter();
  const { user, setUser } = useContext(UserContext);

  const logout = async () => {
    try {
      const result = await logoutUser();

      if (result?.success) {
        setUser(undefined);
        setMobileMenu(false);
        router.push("/");
      }

      return result;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl">

      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* ================= LOGO ================= */}
     <Link
  href="/"
  className="group flex items-center gap-3"
>
  {/* Logo */}
  <div className="relative">

    {/* Glow */}
    <div className="absolute -inset-1 rounded-2xl bg-blue-500/20 opacity-0 blur-md transition duration-300 group-hover:opacity-100" />

    {/* Icon Box */}
    <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600 shadow-lg shadow-blue-600/25 transition duration-300 group-hover:scale-105 group-hover:shadow-blue-500/40">

      <CheckSquare
        size={22}
        strokeWidth={2.5}
        className="text-white"
      />

      {/* Small status dot */}
      <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-slate-950 bg-emerald-400" />

    </div>
  </div>


  {/* Brand */}
  <div className="hidden sm:block">

    <div className="flex items-center gap-1">

      <span className="text-[19px] font-extrabold tracking-tight text-white">
        Task
      </span>

      <span className="text-[19px] font-extrabold tracking-tight text-blue-400">
        Flow
      </span>

    </div>

    <div className=" flex items-center gap-1.5">


      <p className="text-[9px] font-semibold tracking-[0.2em] text-slate-400">
        NEXT.JS TASK MANAGEMENT
      </p>

    </div>

  </div>

</Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden items-center gap-1 md:flex md:ml-auto">

          {user ? (
            <>
              {/* Home */}
              <Link
                href="/"
                className="rounded-lg px-4 py-2 text-sm font-medium text-slate-400 transition hover:bg-slate-800/70 hover:text-white"
              >
                Home
              </Link>

              {/* Add Task */}
              {/* <Link
                href="/addTask"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-slate-400 transition hover:bg-slate-800/70 hover:text-white"
              >
                <Plus size={16} />
                Add Task
              </Link> */}

              {/* Tasks */}
              <Link
                href="/task"
                className="rounded-lg px-4 py-2 text-sm font-medium text-slate-400 transition hover:bg-slate-800/70 hover:text-white"
              >
                Tasks
              </Link>

              {/* Profile */}
              <Link
                href="/profile"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-slate-400 transition hover:bg-slate-800/70 hover:text-white"
              >
                <User size={16} />
                Profile
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-lg px-4 py-2 text-sm font-medium text-slate-400 transition hover:bg-slate-800 hover:text-white"
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="ml-2 rounded-lg bg-blue-600  px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 hover:shadow-blue-500/30"
              >
Sign Up              </Link>
            </>
          )}

        </nav>


        {/* ================= RIGHT SIDE ================= */}
        <div className="hidden items-center gap-3 md:flex">

          {user && (
            <>
              {/* Add Task CTA */}
              <Link
                href="/addTask"
                className="group flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 hover:shadow-blue-500/30"
              >
                <Plus
                  size={17}
                  className="transition group-hover:rotate-90"
                />
                New Task
              </Link>

              {/* Divider */}
              <div className="mx-1 h-8 w-px bg-slate-800" />

              {/* User Profile */}
              <Link
                href="/profile"
                className="group flex items-center gap-3 rounded-xl px-2 py-1.5 transition hover:bg-slate-900"
              >

                {/* Avatar */}
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-bold text-white shadow-md shadow-blue-500/20">
                  {user?.name?.charAt(0)?.toUpperCase()}
                </div>

                {/* User Name */}
                <div className="hidden text-left lg:block">
                  <p className="max-w-[120px] truncate text-sm font-semibold text-slate-200">
                    {user?.name}
                  </p>

                  <p className="text-[11px] text-slate-500">
                    Account
                  </p>
                </div>

              </Link>

              {/* Logout */}
              <button
                onClick={logout}
                title="Logout"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-red-500/10 hover:text-red-400"
              >
                <LogOut size={17} />
              </button>
            </>
          )}

        </div>


        {/* ================= MOBILE BUTTON ================= */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 transition hover:border-slate-700 hover:bg-slate-800 md:hidden"
        >
          {mobileMenu ? (
            <X size={21} />
          ) : (
            <Menu size={21} />
          )}
        </button>

      </div>


      {/* ================= MOBILE MENU ================= */}
      {mobileMenu && (
        <div className="border-t border-slate-800 bg-slate-950/95 px-4 py-5 shadow-2xl backdrop-blur-xl md:hidden">

          <nav className="flex flex-col gap-2">

            {user ? (
              <>
                {/* Mobile User */}
                <div className="mb-3 flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/70 p-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 font-bold text-white">
                    {user?.name?.charAt(0)?.toUpperCase()}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      {user?.name}
                    </p>

                    <p className="text-xs text-slate-500">
                      TaskFlow Account
                    </p>
                  </div>

                </div>


                <Link
                  href="/"
                  onClick={() => setMobileMenu(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-900 hover:text-white"
                >
                  Home
                </Link>


                <Link
                  href="/addTask"
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center gap-3 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white"
                >
                  <Plus size={18} />
                  Add New Task
                </Link>


                <Link
                  href="/task"
                  onClick={() => setMobileMenu(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-900 hover:text-white"
                >
                  My Tasks
                </Link>


                <Link
                  href="/profile"
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-900 hover:text-white"
                >
                  <User size={18} />
                  Profile
                </Link>


                <div className="my-2 h-px bg-slate-800" />


                <button
                  onClick={logout}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-red-400 transition hover:bg-red-500/10"
                >
                  <LogOut size={18} />
                  Logout
                </button>

              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setMobileMenu(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-300 hover:bg-slate-900 hover:text-white"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  onClick={() => setMobileMenu(false)}
                  className="rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-blue-500"
                >
                  Sign Up
                </Link>
              </>
            )}

          </nav>

        </div>
      )}

    </header>
  );
};

export default Header;