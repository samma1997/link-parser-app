"use client";

import { useState } from "react";

type Result = {
  URL: string;
  Emails: string[];
  Phones: string[];
};

export default function Home() {
  const [links, setLinks] = useState<string>("");
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // Funzione per validare un URL
  const isValidLink = (url: string) => /^(http|https):\/\/[^ "]+$/.test(url);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Divido i link, rimuovo spazi e faccio il controllo di validità
    const linkList = links.split("\n").map((link) => link.trim());

    // Controllo che tutti i link siano validi
    if (!linkList.every(isValidLink)) {
      setError("Alcuni URL non sono validi.");
      return;
    }

    setLoading(true);
    setError("");
    setResults([]);

    try {
      // **Modifica qui l'URL** per fare riferimento al backend su Heroku
      const response = await fetch(
        "https://vast-depths-70889-b1585b8d6463.herokuapp.com/process-links",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            links: linkList,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Errore nella richiesta al backend");
      }

      // Gestisco la risposta dal backend
      const data: Result[] = await response.json();
      if (Array.isArray(data)) {
        setResults(data);
      } else {
        setError("La risposta dal server non è valida");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Errore sconosciuto");
      } else {
        setError("Errore sconosciuto");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900 font-poppins">
      {/* Header */}
      <header className="py-6">
        <div className="container mx-auto flex items-center justify-center">
          <h1 className="text-3xl font-medium">
            <span className="text-blue-500">Free</span>Scrap
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        {/* Powered By */}
        <div className="mb-6">
          <p className="inline-flex items-center rounded-full border px-5 py-2 text-sm bg-white text-gray-700 shadow">
            Powered by{" "}
            <a
              href="https://lucasammarco.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold ml-1 text-blue-500 hover:underline"
            >
              Luca Sammarco
            </a>{" "}
            e usato da oltre{" "}
            <span className="font-semibold ml-1">10k utenti</span>
          </p>
        </div>

        {/* Title */}
        <div className="w-full max-w-3xl mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-relaxed text-gray-700">
            Scopri tutti i <span className="text-blue-500">dati </span>
            contenuti nel <span className="text-blue-500">sito web</span>
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-2xl">
          <fieldset className="flex items-center rounded-lg border-2 border-gray-300 bg-white p-3 shadow-lg">
            <textarea
              placeholder="Inserisci il link uno sotto l'altro..."
              required
              name="links"
              rows={3}
              value={links}
              onChange={(e) => setLinks(e.target.value)}
              className="w-full resize-none bg-transparent p-3 text-gray-700 placeholder-gray-400 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600"
              disabled={loading} // Disabilita il pulsante durante il caricamento
            >
              {loading ? "⏳" : "➔"}
            </button>
          </fieldset>
        </form>

        {/* Error Message */}
        {error && <p className="text-red-500 font-semibold mt-4">{error}</p>}

        {/* Results */}
        <div className="mt-8 w-full max-w-2xl text-left">
          {results.length > 0 && (
            <ul>
              {results.map((result, index) => (
                <li key={index} className="mb-4 p-4 border rounded shadow">
                  <p>
                    <strong>URL:</strong> {result.URL || "Nessun URL"}
                  </p>
                  <p>
                    <strong>Email:</strong>{" "}
                    {result.Emails.length > 0
                      ? result.Emails.join(", ")
                      : "Nessuna"}
                  </p>
                  <p>
                    <strong>Telefoni:</strong>{" "}
                    {result.Phones.length > 0
                      ? result.Phones.join(", ")
                      : "Nessuno"}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6">
        <div className="container mx-auto text-center text-sm text-gray-500">
          Built with{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            className="font-medium text-blue-500 hover:underline"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://lucasammarco.com/"
            target="_blank"
            className="font-medium text-blue-500 hover:underline"
          >
            Luca Sammarco
          </a>
          .
        </div>
      </footer>
    </div>
  );
}
