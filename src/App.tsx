import { Button } from "./components/button"

export function App() {
    return (
        <div>
            <Button name="Salvar" onClick={() => alert("criar")} />
            <Button name="Editar" />
            <Button name="Remover" />
        </div>
    )
}