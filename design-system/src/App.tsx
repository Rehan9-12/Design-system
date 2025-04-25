import "./App.css"
import { Heading,Paragraph,Caption } from "./components/typography"
import { TextInput } from "./components/TextInput/TextInput"
import Toast from "./components/Toast/Toast"

function App() {

  return (
    
      <div>
          <Heading level={1}>This is a Title</Heading>
          <Paragraph>This is a paragraph with some text.</Paragraph>
          <Caption>This is a small caption below content.</Caption>
          <TextInput/>
          <Toast type="success" message="This is a success message!" />

      </div>
    
  )
}

export default App
