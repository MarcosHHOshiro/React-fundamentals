type Props = {
    name: string
}
export function useMessage({ name }: Props) {
    function show(message: string) {
        console.log(message, name)
    }

    return { show }
}
