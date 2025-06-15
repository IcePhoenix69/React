export function WelcomeMessage() {
    return <h1>Hello World!</h1>
}
export function WeirdMessage({ weird }) {
    return <h1>{weird}</h1>
}
export function SelectiveMessage({ message, title, header }) {
    return (
        <>
            {title ? (
        <h1>{message}</h1>
      ) : header ? (
        <h2>{message}</h2>
      ) : (
        <p>{message}</p>
      )}
        </>

    )
}
