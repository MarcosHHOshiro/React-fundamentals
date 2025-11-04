import "./global.css"
import { useState, useEffect } from "react"

import { Button } from "./components/button/index"
import styles from "./app.module.css"
// import { useMessage } from "./hooks/useMessage"

export function App() {
    const [count, setCount] = useState(0)

    // const message = useMessage({name: "Marcos"})

    useEffect(() => {
        console.log("O valor mudou")
    }, [count])

    return (
        <div className={styles.container}>
            <Button name="Adicionar" onClick={() => setCount(count + 1)} />
            <span>{count}</span>
            <Button name="Remover" onClick={() => setCount(count - 1)}/>
        </div>
    )
}