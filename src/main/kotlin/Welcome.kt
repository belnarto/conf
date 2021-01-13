import react.RProps
import react.dom.h1
import react.functionalComponent

external interface WelcomeProps: RProps {
    var name: String
}

val welcome = functionalComponent<WelcomeProps> { props ->
    h1 {
        +"Hello, ${props.name}"
    }
}