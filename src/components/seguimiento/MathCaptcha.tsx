import type { MathCaptchaState } from "#hooks/useMathCaptcha";
import { cn } from "#lib/utils";

export function MathCaptcha({ captcha }: { captcha: MathCaptchaState }) {
  const { reto, respuesta, setRespuesta, esValido, reiniciar } = captcha;

  return (
    <div className="inline-flex items-center gap-3 rounded-lg border border-outline-variant bg-surface-container-low px-4 py-2">
      <span className="material-symbols-outlined text-primary text-[20px]">
        verified_user
      </span>
      <label
        className="font-label-md text-label-md text-on-surface-variant whitespace-nowrap select-none"
        htmlFor="captcha-input"
      >
        VERIFICACIÓN:{" "}
        <span className="text-primary font-bold">
          {reto.a} + {reto.b}
        </span>{" "}
        =
      </label>
      <input
        aria-label="Respuesta de verificación"
        autoComplete="off"
        className={cn(
          "h-9 w-14 rounded-lg border bg-white text-center font-bold text-primary outline-none transition-all focus:border-primary",
          esValido ? "border-emerald-500 ring-2 ring-emerald-500/30" : "border-outline-variant",
        )}
        id="captcha-input"
        inputMode="numeric"
        maxLength={2}
        placeholder="?"
        value={respuesta}
        onChange={(event) => setRespuesta(event.target.value.replace(/\D/g, ""))}
      />
      <button
        aria-label="Generar otra pregunta"
        className="flex items-center text-outline hover:text-secondary transition-colors"
        title="Generar otra pregunta"
        type="button"
        onClick={reiniciar}
      >
        <span className="material-symbols-outlined text-[20px]">refresh</span>
      </button>
    </div>
  );
}
