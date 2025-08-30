import { PiUmbrellaFill } from "react-icons/pi";

function IconList({ quantidade }) {
    {/* Implementar numeração nos guarda-sóis e função ocupado ou livre. Torna-los clicáveis. O guarda-sol clicado o numero irá para o input; Se estiver ocupado a cor do icone será text-red-500 */}
  return (
    <div className="flex flex-wrap gap-2">
        {Array.from({ length: quantidade }).map((_, i) => (
            <PiUmbrellaFill 
            className="text-amber-500"
            key={i} size={46} />
        ))}
    </div>
  );
}

export default IconList;