import "./global.css"
import { Button } from "./components/button/index"
import styles from "./app.module.css"
import { useMessage } from "./hooks/useMessage"

export function App() {
    const message = useMessage({name: "Marcos"})
    return (
        <div className={styles.container}>
            <Button name="Adicionar" onClick={() => message.show('teste')} />
            <span>0</span>
            <Button name="Remover" />
        </div>
    )
}