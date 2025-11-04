import { useEffect } from "react"

type Props = {
    name: string
}
export function useMessage({ name }: Props) {
    function show(message: string) {
        console.log(message, name)
    }


    useEffect(() => {
        console.log("UseEffect do useMessage")
    })

    return { show }
}
