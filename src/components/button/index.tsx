import styles from "./styles.module.css"
import { useEffect } from "react"

type Props = React.ComponentProps<"button"> & {
    name: string
}

export function Button({ name, ...rest }: Props) {
    useEffect(() => {
        console.log("useEffect do component")
    })

    return <button className={styles.container} {...rest}>
        <span>{name}</span>
    </button>
}
