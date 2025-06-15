import './App.css'
import { Counter } from './components/CounterMachine'
import { SelectiveMessage } from './components/WelcomeMessage'
import { WeirdMessage } from './components/WelcomeMessage'
import { WelcomeMessage } from './components/WelcomeMessage'

function App() {
  return (
    <>
    <h1>Hi</h1>
    <WelcomeMessage/>
    <WeirdMessage weird='Allah'/>
    <SelectiveMessage message='Good Morning' title/>
    <SelectiveMessage message='Good Morning' header/>
    <SelectiveMessage message='Good Morning'/>
    <Counter></Counter>
    </>
  )
}
export default App

/*
Comments Zone: 
Il primo Elemento è totalmente statico
Il secondo elemento è parzialmente dinamico
Il terzo elemento è molto dinamico

Il quarto elemento è composto da una funzione a condizioni, dove si deve definire se è un h1 (aka title), un header (h2) o un paragrafo se non si inserisce nulla
Il quinto è il quarto, ma con un h2
il sesto è senza nulla, quindi è un paragrafo

Il settimo elemento è un piccolo div con un counter ed un bottone per incrementare di uno senza refreshare la pagina
*/