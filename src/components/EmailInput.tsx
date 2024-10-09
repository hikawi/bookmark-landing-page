import { useState, type FormEvent } from "react";

export default function EmailInput() {
  const [error, setError] = useState(false);
  let emailInput: HTMLInputElement | null = null;

  function handleChange(e: FormEvent<HTMLInputElement>) {
    const input = e.target as HTMLInputElement;
    setError(!input.checkValidity());
    console.log(error);
  }

  return (
    <div className="relative flex w-full max-w-[26rem] flex-col gap-4 lg:flex-row">
      <div className="relative w-full">
        <div
          className={`relative z-10 flex h-12 w-full items-center justify-between rounded-md border-2 bg-white px-4 ${error ? "border-soft-red" : "border-white"}`}
        >
          <input
            type="email"
            id="email"
            ref={emailInput}
            className="relative ml-1 w-full outline-none"
            autoFocus
            onInput={handleChange}
            aria-invalid={error}
          />

          {error && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="shrink-0"
            >
              <g fill="none" fill-rule="evenodd">
                <circle cx="10" cy="10" r="10" fill="#FA5959" />
                <g fill="#FFF" transform="translate(9 5)">
                  <rect width="2" height="7" rx="1" />
                  <rect width="2" height="2" y="8" rx="1" />
                </g>
              </g>
            </svg>
          )}
        </div>

        <div
          className={`absolute bottom-0 left-0 z-0 flex h-6 w-full items-center rounded-b-md border-2 border-soft-red bg-soft-red px-3 text-[0.625rem] font-medium italic text-white duration-200 ${error ? "translate-y-6" : "translate-y-0"}`}
        >
          Whoops, make sure it's an email
        </div>
      </div>

      <button
        type="submit"
        className="h-12 shrink-0 rounded-md border-2 border-soft-red bg-soft-red px-6 text-sm font-medium text-white duration-200 hover:bg-white hover:text-soft-red"
      >
        Sign Up
      </button>
    </div>
  );
}
