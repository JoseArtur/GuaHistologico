// simple footer
import React from "react";
import "@/styles/globals.css";

export default function Footer() {
  return (
    <>
        <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-white-800">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-700">
            © 2024{" "}
            <a
              href="https://flowbite.com"
              className="hover:underline"
              target="_blank"
            >
              Guia Histologico
            </a>
            . Todos os Direitos Reservados.
          </span>
          <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
            <li>
              <a
                href="#"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-700"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-500 hover:underline dark:text-gray-700"
              >
                Contato
              </a>
            </li>
          </ul>
        </footer>
    </>
  );
}
